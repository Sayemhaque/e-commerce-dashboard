import {
  integer,
  text,
  boolean,
  pgTable,
  serial,
  numeric,
} from "drizzle-orm/pg-core";

export const product = pgTable("product", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  photo: text("photo").notNull(),
});

export type Product = typeof product.$inferInsert;
