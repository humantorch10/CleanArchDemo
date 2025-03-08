using Domain.Entities;
using MediatR;

namespace Application.Features.Products.Queries.GetAllProducts
{
    public record GetAllProductsQuery() : IRequest<List<Product>>;
}
