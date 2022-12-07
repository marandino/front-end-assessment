export default function Pagination({ totalResults, currentIndex }: { totalResults: number; currentIndex: number }) {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-4 sm:px-6 w-full absolute bottom-20">
      <div className="flex flex-1 justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing page {currentIndex} out of {Math.round(totalResults / 10)}.
          </p>
        </div>
        <div>
          <a
            href={`/?page=${currentIndex - 1}`}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href={`/?page=${currentIndex + 1}`}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
