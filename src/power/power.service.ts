import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number): string {
    return 'Power is supplied! for ' + watts;
  }
}
