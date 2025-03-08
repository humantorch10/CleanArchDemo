using Application.Common.Interfaces;
using MediatR;

namespace Application.Features.Products.Queries.GetAllProducts
{
    public class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommand, bool>
    {
        private readonly IProductRepository _productRepository;

        public DeleteProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<bool> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            var product = await _productRepository.GetByIdAsync(request.Id);
            if (product == null)
                return false; // Not found

            await _productRepository.DeleteAsync(product);
            return true;
        }
    }
}
