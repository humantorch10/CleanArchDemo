using Domain.Entities;
using MediatR;

namespace Application.Features.Products.Queries.GetAllProducts
{
    public record GetProductByIdQuery(Guid Id) : IRequest<Product?>;
}
