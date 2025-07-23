import { useEffect, useState } from "react";

export default function LoadMore() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts(prev => [...prev, ...result.products]);
            }
        } catch (err) {
            console.log("Caught Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [skip]);

    return (
        <div>
            <nav className="bg-blue-400 text-white px-4 py-4 text-2xl mb-4">
                <h1>Displaying Products</h1>
            </nav>

            <div className="flex flex-col justify-center items-center px-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {products.length > 0 &&
                        products.map((item,index) => (
                            <div key={index} className="border border-gray-500 p-2 rounded-lg">
                                <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
                                <p className="mt-2 font-semibold">{item.title}</p>
                            </div>
                        ))
                    }
                </div>

                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer"
                    onClick={() => setSkip(prev => prev + 10)}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Load More"}
                </button>
            </div>
        </div>
    );
}
