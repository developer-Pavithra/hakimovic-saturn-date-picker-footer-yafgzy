import { ChangeDetectorRef, Component } from '@angular/core';
import moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  SatCalendar,
  SatCalendarFooter,
  SatDatepicker,
} from 'saturn-datepicker';
import { DateAdapter } from 'saturn-datepicker';

@Component({
  templateUrl: './ranges-footer.component.html',
})
export class RangesFooter<Date> implements SatCalendarFooter<Date> {
  public ranges: Array<{ key: string; label: string }> = [
    { key: 'today', label: 'Today' },
    { key: 'week', label: 'Week' },
    { key: 'month', label: 'Month' },
  ];
  private destroyed = new Subject<void>();

  constructor(
    private calendar: SatCalendar<Date>,
    private dateAdapter: DateAdapter<Date>,
    cdr: ChangeDetectorRef
  ) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  setRange(range: string) {
    switch (range) {
      case 'today':
        this.calendar.beginDate = this.dateAdapter.deserialize(new Date());
        this.calendar.endDate = this.dateAdapter.deserialize(new Date());
        this.calendar.activeDate = this.calendar.beginDate;
        break;
      case 'week':
        const today = moment();
        this.calendar.beginDate = this.dateAdapter.deserialize(
          today.weekday(0).toDate()
        );
        this.calendar.endDate = this.dateAdapter.deserialize(
          today.weekday(6).toDate()
        );
        break;
      case 'month':
        const month = moment();
        this.calendar.beginDate = this.dateAdapter.deserialize(
          month.day(0).toDate()
        );
        this.calendar.endDate = this.dateAdapter.deserialize(
          month.day(30).toDate()
        );
        break;
    }
    this.calendar.activeDate = this.calendar.beginDate;
    this.calendar.beginDateSelectedChange.emit(this.calendar.beginDate);
    this.calendar.dateRangesChange.emit({
      begin: this.calendar.beginDate,
      end: this.calendar.endDate,
    });
  }
}
