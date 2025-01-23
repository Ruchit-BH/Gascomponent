import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { AppserviceService } from './appservice.service';
import { OnInit } from '@angular/core';
import { ComponentLibraryModule } from '@bh-digitalsolutions/ui-toolkit-angular/dist';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TablularListComponent } from "./tablular-list/tablular-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    FormsModule,
    CommonModule,

    TablularListComponent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  donutData: any;
  constructor(private service: AppserviceService) {}

  ngOnInit(): void {

  }

}