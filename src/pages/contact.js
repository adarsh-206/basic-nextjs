export default function Contact() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-8">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-xl w-full">
                <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-6">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    We would love to hear from you! Please fill out the form below to get in touch.
                </p>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-600 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-600 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-600 font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Your message"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
