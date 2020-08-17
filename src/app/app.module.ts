import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {SharedModule} from './services/shared.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {taskReducers} from './reducers/task.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TaskEffects} from './effects/task.effects';
import {EffectsModule} from '@ngrx/effects';
import {MatTableModule} from '@angular/material/table';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {ListComponent} from './component/list/list.component';
import {AgmCoreModule} from '@agm/core';
import {MapComponent} from './component/map/map.component';
import {DriversComponent} from './component/drivers/drivers.component';
import {CardComponent} from './component/card/card.component';
import {DriverEffects} from './effects/driver.effects';
import {driverReducers} from './reducers/driver.reducer';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { FilterPipe } from './component/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MapComponent,
    DriversComponent,
    CardComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NgbModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    NgbPaginationModule,
    MatPaginatorModule,
    NgbAlertModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6hxvnEqM67Mww0iHZlj-FDB8F0yan6Tc'
    }),
    SharedModule.forRoot(),
    // AppRoutingModule,
    MatTableModule,
    StoreModule.forRoot({
      tasks: taskReducers,
      drivers: driverReducers
    }),
    EffectsModule.forRoot([TaskEffects, DriverEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 state
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
