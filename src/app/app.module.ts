import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokemonComponentComponent } from './pokemon-component/pokemon-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import {PokemonService} from './pokemon.service';
import {HttpClientModule} from '@angular/common/http';
import { DescPokemonComponent } from './desc-pokemon/desc-pokemon.component';
import {PokemonAPIService} from './pokemon-api.service';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponentComponent,
    FilterPokemonPipePipe,
    DescPokemonComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MatSliderModule
  ],
  providers: [PokemonService, PokemonAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
