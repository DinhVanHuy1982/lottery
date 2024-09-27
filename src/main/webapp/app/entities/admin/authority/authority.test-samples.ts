import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '6286f0e5-f6e6-4bf3-b248-d2287519a53a',
};

export const sampleWithPartialData: IAuthority = {
  name: '386f6927-fb07-4d86-93b6-137e637bdde0',
};

export const sampleWithFullData: IAuthority = {
  name: '4f9b649e-69b2-4022-adb1-6ba0fab48898',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
