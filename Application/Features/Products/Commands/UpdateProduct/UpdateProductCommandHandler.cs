using Application.Common.Interfaces;
using MediatR;

namespace Application.Features.Products.Queries.GetAllProducts
{
    public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, bool>
    {
        private readonly IProductRepository _productRepository;

        public UpdateProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<bool> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
        {
            // Fetch existing product
            var product = await _productRepository.GetByIdAsync(request.Id);
            if (product == null)
                return false; // Product not found

            // Update properties
            product.Name = request.Name;
            product.Price = request.Price;

            await _productRepository.UpdateAsync(product);
            return true;
        }
    }
}
