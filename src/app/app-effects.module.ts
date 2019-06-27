import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { UserEffects } from './store/effects/user-effects';

@NgModule({
  imports: [EffectsModule.forRoot([UserEffects])],
  exports: [EffectsModule]
})
export class AppEffectsModule {}
