
import { PeopleAccount } from "./PeopleAccount";
import { CompanyAccount } from "./CompanyAccount";




// Testando a classe PeopleAccount
const peopleAccount = new PeopleAccount(987654, 'Maria', 654321)
console.log(`Nome:Maria ${peopleAccount.getName()}, CPF:743.587.651-90 ${peopleAccount['_doc_id']}, Número da conta:2902 ${peopleAccount['_accountNumber']}`)
peopleAccount.deposit(100) 
peopleAccount.getBalance()

// Testando a classe CompanyAccount
const companyAccount = new CompanyAccount('Empresa 1', 111222)
console.log(`Nome:Maria ${companyAccount.getName()}, Número da conta:2902 ${companyAccount['_accountNumber']}`)
companyAccount.deposit(100) 
companyAccount.getLoan(100)

const account = new CompanyAccount("Minha Empresa", 12345);
console.log(account.getBalance()); // 0