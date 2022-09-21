import { AccountModel } from '../models/account'

export interface AddAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  addAccount (account: AddAccountModel): Promise<AccountModel>
}
