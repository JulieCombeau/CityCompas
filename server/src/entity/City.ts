import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, InputType, ObjectType } from "type-graphql";
import { MaxLength, MinLength } from "class-validator";

@Entity()
@ObjectType()
class City {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ length: 2083, type: "varchar" })
  picture: string;

  @Field()
  @Column({ type: "text" })
  description: string;

  @Field()
  @Column({ length: 12, type: "varchar" })
  latitude: string;

  @Field()
  @Column({ length: 13, type: "varchar" })
  longitude: string;
}

@InputType()
export class CityInput {
  @Field()
  @MaxLength(50)
  @MinLength(2)
  name: string;

  @Field()
  @MaxLength(2083)
  @MinLength(21)
  picture: string;

  @Field()
  @MinLength(10)
  description: string;

  @Field()
  @MaxLength(12)
  @MinLength(1)
  latitude: string;

  @Field()
  @MaxLength(13)
  @MinLength(1)
  longitude: string;
}
export default City;
