export abstract class DioAccount {
  private _name: string
  private readonly _accountNumber: number
  protected _balance: number = 0
  protected _status: boolean = true

  constructor(name: string, accountNumber: number) {
    this._name = name
    this._accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this._name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this._name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this._balance += value
      console.log('Depósito realizado com sucesso!')
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this._balance >= value) {
      this._balance -= value
      console.log('Saque realizado com sucesso!')
    } else {
      console.log('Saldo insuficiente ou conta inválida')
    }
  }

  getBalance = (): void => {
    console.log(`Saldo: ${this._balance}`)
  }

  protected validateStatus = (): boolean => {
    if (this._status) {
      return this._status
    }
    throw new Error('Conta inválida')
  }
}
