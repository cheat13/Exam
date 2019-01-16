export class Descript {
    year: number
    balance: number
    interest: number
    payments: number
}

export class Loan {
    rate: number
    descripts: Descript[]
}