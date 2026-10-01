export interface CreateCarDto {
  brand: string;
  model: string;
  color: string;
  year_manufacture: number;
  imported: boolean;
  plates: string;
  selling_date?: Date | null;
  selling_price?: number | null; // No Prisma, Decimal geralmente é mapeado como number ou Decimal dependendo da lib, mas number é o padrão para DTOs em TS
  customer_id?: number | null;
}
