import {
  AccountModel,
  AddAccountModel,
  Encrypter,
} from './db-add-account-protocols'

export class DbAddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async addAccount (account: AddAccountModel): Promise<AccountModel | null> {
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve(null))
  }
}
