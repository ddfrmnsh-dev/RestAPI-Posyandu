-- CreateTable
CREATE TABLE `Imunisasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kd_imunisasi` VARCHAR(191) NOT NULL,
    `jenis_imunisasi` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `dosis` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Petugas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_petugas` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `kontak` INTEGER NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
