const subscriptionData = [
    {
        title: "Ideas Unfiltered",
        description: "Like unfiltered coffee, access all components, no filter used. Strong, rich and creamy.",
        price: 0,
    },
    {
        title: "Ideas Brewed",
        description: "Select only the types of ideas you want to see, filter out the rest. A healthier alternative.",
        price: 19.99,
    },
    {
        title: "Ideas Instant",
        description: "Like instant coffee, these crystallised ideas are instantly actionable. Quick and tasty.",
        price: 38.25,
    },
]
const PricingPlan = () => {
    return (
        <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-3 py-10 px-6 md:py-20 md:px-16 gap-10">
            {subscriptionData.map((data, i) =>
                <div key={i} className="grid grid-cols-1 bg-white p-6 rounded-xl text-center">
                    <h3 className="py-6 text-3xl font-medium">{data.title}</h3>
                    <p className="pb-4 text-lg">{data.description}</p>
                    <p className="text-2xl font-medium">{data.price === 0 ? "FREE" : `£${data.price}`}{data.price !== 0 && <span className="text-sm align-top"> /month</span>}</p>
                    <button className="mx-auto my-6 py-2 px-4 bg-blue-600 text-white rounded-lg text-lg">Purchase</button>
                </div>
            )}
        </div>
    )
}

export default PricingPlan