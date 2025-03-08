using MediatR;

namespace Application.Features.Products.Queries.GetAllProducts
{
    public record UpdateProductCommand(Guid Id, string Name, decimal Price) : IRequest<bool>;
}
