import Link from "next/link";
export default function Pagination({ totalResults, currentIndex }: { totalResults: number; currentIndex: number }) {
  const maxPages = Math.round(totalResults / 10);
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-4 sm:px-6 w-full absolute bottom-20">
      <div className="flex flex-1 justify-between">
        <p className="text-gray-700 self-center ">
          Showing page {currentIndex} out of {maxPages}.
        </p>
        <div>
          {currentIndex > 1 && (
            <Link
              href={`/?page=${currentIndex - 1}`}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Previous
            </Link>
          )}
          {currentIndex < maxPages && (
            <Link
              href={`/?page=${currentIndex + 1}`}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
