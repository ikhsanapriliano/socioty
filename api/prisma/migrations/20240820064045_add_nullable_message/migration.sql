-- AlterTable
ALTER TABLE "GroupChat" ALTER COLUMN "message" DROP NOT NULL,
ALTER COLUMN "mediaUrl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RoomChat" ALTER COLUMN "message" DROP NOT NULL,
ALTER COLUMN "mediaUrl" DROP NOT NULL;
