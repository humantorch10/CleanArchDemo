using MediatR;

namespace Application.Features.Products.Queries.GetAllProducts
{
    public record DeleteProductCommand(Guid Id) : IRequest<bool>;
}
