import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
    <input
      matInput
      type="text"
      placeholder="search"
      [formControl]="searchControl"
    />
  `,
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() term!: string;
  @Output() termEvent = new EventEmitter<string>();
  searchControl = new FormControl('', [Validators.minLength(3)]);
  sub!: Subscription;

  constructor() {}

  ngOnInit() {
    this.sub = this.searchControl.valueChanges
      .pipe(
        debounceTime(150),
        filter((term: string) => term.length > 2),
        map((term: string) => term.toLowerCase())
      )
      .subscribe((term: string) => this.termEvent.emit(term));
    this.searchControl.setValue(this.term);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
