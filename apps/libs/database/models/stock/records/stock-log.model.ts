import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
    schema: 'records',
    tableName: 'stock_log',
    createdAt: 'create_time',
    updatedAt: false,
})
export class User extends Model<User> {
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  })
  no: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  type: number;
  
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  number_of_shares_traded: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  price: number;

}
