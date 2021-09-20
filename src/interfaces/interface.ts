export interface OperationsList {
    operationName: string;
    authDate: string;
    authAmount: {
      value: number;
      currency: string;
    };
    totalAmount: {
      value: number;
      currency: string;
    };
  }