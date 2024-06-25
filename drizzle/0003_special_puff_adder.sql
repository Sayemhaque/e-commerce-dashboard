ALTER TABLE "product" ADD COLUMN "price" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "product" DROP COLUMN IF EXISTS "numeric";