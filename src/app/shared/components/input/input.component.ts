import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {

  @Input() text = 'Input field label';
  @Input() type = 'text';
  @Input() controlName = '';
  @Input() placeholder = 'Placeholder';

  constructor() { }

  ngOnInit(): void {
  }

}
