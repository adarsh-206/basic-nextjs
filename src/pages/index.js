import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Welcome to Our Website</h2>
        <p className="text-gray-600 mb-8 text-center">Choose an option below to get started:</p>

        <div className="flex space-x-4">
          <Link href="/about">
            <button className="w-full sm:w-auto bg-orange-500 text-white p-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              About Us
            </button>
          </Link>

          <Link href="/contact">
            <button className="w-full sm:w-auto bg-orange-500 text-white p-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Contact Us
            </button>
          </Link>

          <Link href="/solution">
            <button className="w-full sm:w-auto bg-orange-500 text-white p-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Our Solutions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
