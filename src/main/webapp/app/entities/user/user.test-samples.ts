import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 20185,
  login: 'rKml@tmv8\\dHSkXh\\6v\\/NzFHDJ',
};

export const sampleWithPartialData: IUser = {
  id: 13963,
  login: '72@d5CDS\\k9t3\\OW7LbT3',
};

export const sampleWithFullData: IUser = {
  id: 3242,
  login: 'T1CS',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
