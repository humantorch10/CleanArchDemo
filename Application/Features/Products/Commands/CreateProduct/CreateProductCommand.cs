using Domain.Entities;
using MediatR;

namespace Application.Features.Products.Queries.GetAllProducts
{
    public record CreateProductCommand(string Name, decimal Price) : IRequest<Product>;
}
