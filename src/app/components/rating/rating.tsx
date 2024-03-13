import Star from "./star/star";

type RatingProps = {
  rating: PizzaData['rating'];
}

export default function Rating({ rating }: RatingProps) {
  let hasHalfStar = (rating % 1 !== 0);
  let fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars - Number(hasHalfStar);

  return (
    <div
      className="flex items-center"
      data-testid="rating-stars"
    >
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} style="Full" />
      ))}
      {hasHalfStar && (
        <Star style="Half" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i} style="Empty" />
      ))}
    </div>
  );
}
