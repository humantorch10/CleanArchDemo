
namespace Domain.Entities
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = default!;
        public decimal Price { get; set; }
        
        // Additional domain logic if needed
        // e.g., methods for validation, domain events, etc.
    }
}
