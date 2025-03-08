using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Features.Products.Queries.GetAllProducts
{
    public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, Product>
    {
        private readonly IProductRepository _productRepository;

        public CreateProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Product> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var product = new Product
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Price = request.Price
            };

            await _productRepository.AddAsync(product);
            return product;
        }
    }
}
