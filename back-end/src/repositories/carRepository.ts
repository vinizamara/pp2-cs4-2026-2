import { prisma } from "../database/client";

// Importe os DTOs corretos para carros quando criá-los
import type { CreateCarDto } from "../dto/car/createCarDto";
import type { UpdateCarDto } from "../dto/car/updateCarDto";

export function findAll() {
  return prisma.car.findMany({
    orderBy: {
      brand: "asc",
    },
  });
}

export function findById(id: number) {
  return prisma.car.findUnique({
    where: { id },
    // Se quiser trazer também os dados do cliente dono do carro, descomente a linha abaixo:
    // include: { customer: true }
  });
}

export function create(data: CreateCarDto) {
  return prisma.car.create({
    data,
  });
}

export function update(id: number, data: UpdateCarDto) {
  return prisma.car.update({
    where: { id },
    data,
  });
}

export function remove(id: number) {
  return prisma.car.delete({
    where: { id },
  });
}
