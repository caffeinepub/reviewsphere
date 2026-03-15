import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 16,
}: StarRatingProps) {
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-0.5">
      {stars.map((starNum) => (
        <Star
          key={starNum}
          size={size}
          className={
            starNum <= rating ? "star-filled fill-current" : "star-empty"
          }
        />
      ))}
    </div>
  );
}
