const Footer =() => {
    return(
        <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">About Us</h2>

                    <p className="text-gray-300">
                        We are a team dedicated to providing the best products and services to our customers.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>

                    <ul>
                        <li><a href="#" className="hover:underline text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Services</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Contact</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">About</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>

                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline text-gray-300">Facebook</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">X</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Instagram</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">WhatsApp</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-600 pt-6 text-gray-300 text-center mt-6">
                <p>©2024 Code With Yousaf. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;