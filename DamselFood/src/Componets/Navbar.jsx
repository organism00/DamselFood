const Navbar =() => {
    return(
        <nav className="bg-zinc-900 px-4 py-4">
            <div className="flex justify-between items-center">
                <a href="#" className="text-white text-lg font-bold">DamselFood</a>

                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white hover:bg-line-600/20 px-3 py-2 rounded">Home</a>
                    <a href="#" className="text-white hover:bg-line-600/20 px-3 py-2 rounded">Service</a>
                    <a href="#" className="text-white hover:bg-line-600/20 px-3 py-2 rounded">About</a>
                    <a href="#" className="text-white hover:bg-line-600/20 px-3 py-2 rounded">Contact</a>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;