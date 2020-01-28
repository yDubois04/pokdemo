import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescPokemonComponent } from './desc-pokemon.component';

describe('DescPokemonComponent', () => {
  let component: DescPokemonComponent;
  let fixture: ComponentFixture<DescPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
