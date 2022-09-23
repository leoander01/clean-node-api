import { AccountModel } from '../../../domain/models/account'
import { AddAccountModel } from '../../../domain/usecases/add-account'
import { Encrypter } from '../../protocols/encrypter'

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
