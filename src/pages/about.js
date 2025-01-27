import Link from 'next/link';

export default function About() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-50 p-8">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
                <h1 className="text-4xl font-semibold text-center text-orange-600 mb-4">
                    Welcome to About
                </h1>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    Learn more about our mission and how we strive to make a difference in the community. We believe in quality, innovation, and customer satisfaction.
                </p>
                <div className="text-center">
                    <Link href="/contact">
                        <button className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300">
                            Contact Us
                        </button>
                    </Link>
                </div>

                <div className="text-center mt-6">
                    <Link href="/">
                        <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
                            Go to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
