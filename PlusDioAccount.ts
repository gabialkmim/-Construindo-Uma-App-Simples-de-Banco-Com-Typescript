import { DioAccount } from "./DioAccount";
export class PlusDioAccount {
    
  }
  

export class CompanyAccount extends DioAccount {
  private _companyName: string

  constructor(companyName: string, accountNumber: number){
    super('', accountNumber)
    this._companyName = companyName
  }

  setName = (name: string): void => {
    console.log('Não é possível alterar o nome de uma conta jurídica!')
  }

  getLoan = (): void => {
    if (this._status && this._balance > 10000) {
      console.log('Empréstimo aprovado!')
    } else {
      console.log('Empréstimo negado!')
    }
  }
}

