import Link from 'next/link';

export default function Solution() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-50 p-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Welcome to the Solution</h2>
                <p className="text-gray-600 mb-6 text-center">Find answers and explore the solutions available for your problems.</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col items-center bg-orange-500 text-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-orange-600">
                        <i className="fas fa-cogs text-4xl mb-2"></i>
                        <h3 className="text-lg font-semibold">Solutions</h3>
                    </div>
                    <div className="flex flex-col items-center bg-orange-500 text-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-orange-600">
                        <i className="fas fa-question-circle text-4xl mb-2"></i>
                        <h3 className="text-lg font-semibold">Support</h3>
                    </div>
                </div>

                <Link href="/">
                    <button className="w-full bg-orange-500 text-white p-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
