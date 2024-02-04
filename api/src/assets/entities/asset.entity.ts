import { Column, Entity } from 'typeorm';

export enum SymbolEnumerate {
  ACTIVE = 'active',
  DESACTIVE = 'desactive',
}

@Entity()
export class Asset {
  @Column()
  id: string;
  @Column()
  symbol: SymbolEnumerate = SymbolEnumerate.DESACTIVE;
}
