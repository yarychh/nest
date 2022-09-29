/* eslint-disable prettier/prettier */
export class UpdatePassPairDto {
  readonly userId: string;
  readonly login: string;
  readonly password: string;
  readonly source: string;
  readonly shown: boolean;
}
