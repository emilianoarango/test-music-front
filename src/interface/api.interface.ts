export interface ApiResponseInterface<Type> {
  _embedded: Type;
  page?: PaginationInterface;
}

export interface ResponseInterface<Type> {
  data: Type;
  page?: PaginationInterface;
}

export interface PaginationInterface {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
