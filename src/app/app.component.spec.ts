import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app component', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render structure base', () => {
    const appElement: HTMLElement = fixture.nativeElement;
    expect(appElement.querySelector('header')).toBeTruthy();
    expect(appElement.querySelector('nav')).toBeTruthy();
    expect(appElement.querySelector('main')).toBeTruthy();
    expect(appElement.querySelector('footer')).toBeTruthy();
  });

  it('should render toolbar', () => {
    const toolbarElement = fixture.nativeElement;
    expect(toolbarElement.querySelector('mat-toolbar')).toBeTruthy();
  });

  it(`should have as title 'charity'`, () => {
    expect(component.title).toEqual('charity');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    expect(appElement.querySelector('header>mat-toolbar>section>span>h1').textContent).toContain('Charity');
  });

});
