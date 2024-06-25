CREATE TABLE IF NOT EXISTS "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"numeric" numeric NOT NULL,
	"photo" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "todo";--> statement-breakpoint
DROP TABLE "user";