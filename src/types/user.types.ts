export enum EGenders {
  male = "male",
  female = "female",
  mixed = "mixed",
}

export interface IUser {
  mail: {
    type: string;
    email: string;
    password: string;
    gender: string;
  };
}

export interface ICommonResponse<T> {
  message: string;
  data: T;
}
