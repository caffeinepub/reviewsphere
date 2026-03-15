import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type Book, categoryColors } from "@/data/books";
import { BookOpen } from "lucide-react";
import { StarRating } from "./StarRating";

interface BookCardProps {
  book: Book;
  index: number;
  onClick?: (book: Book) => void;
  showYear?: boolean;
}

export function BookCard({
  book,
  index,
  onClick,
  showYear = true,
}: BookCardProps) {
  return (
    <Card
      className="book-card cursor-pointer group"
      data-ocid={`book.item.${index}`}
      onClick={() => onClick?.(book)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <BookOpen size={20} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground leading-snug text-base line-clamp-2">
              {book.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">{book.author}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className={`category-badge ${categoryColors[book.category]}`}>
            {book.category}
          </span>
          <div className="flex items-center gap-1.5">
            <StarRating rating={book.rating} size={14} />
            <span className="text-xs text-muted-foreground font-medium">
              {book.rating}/5
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {book.summary}
        </p>
        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
          <span>{book.publisher}</span>
          {showYear && (
            <>
              <span>·</span>
              <span>{book.year}</span>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
