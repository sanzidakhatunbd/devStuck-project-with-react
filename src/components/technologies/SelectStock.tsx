const SelectStock = () => {
    return (
        <div className= "rounded-3xl max-h-110 bg-white p-5 flex flex-col border border-gray-200"
                >
            <h3 className="text-2xl font-bold leading-tight text-gray-950">
                    Your Stack
                </h3>
                <p className="mt-5 text-xl text-gray-500">
                    No technologies selected yet.
                </p>
                <div className="border-dashed border-2 border-gray-100 mx-auto">
                    <p className="p-5 text-xl text-gray-500">
                    Your Stack is Empty!
                </p>
                </div>
        </div>
    );
};

export default SelectStock;