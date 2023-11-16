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

const NewsletterSubscription = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen md:p-16 bg-blue-100 rounded-xl lg:my-16 lg:px-20">
            <h1 className="pt-20 pb-10 text-4xl md:text-5xl font-bold uppercase text-center leading-normal tracking-wide">Mind Boggling Newsletter</h1>
            <h2 className="text-lg md:text-xl text-center leading-normal tracking-wide">Get those Mind Boggling ideas straight into your inbox</h2>
            <div className="max-w-6xl mx-auto py-20 grid lg:grid-cols-3 gap-10">
                {subscriptionData.map((data, i) =>
                    <div key={i} className="relative w-80 h-[21rem] mb-10 mx-auto">
                        <div className={`w-full h-full rounded-lg
                        ${i === 0 && "bg-[#FFFBEC]"} ${i === 1 && "bg-[#F9ECFF]"} ${i === 2 && "bg-[#ECEEFF]"}`}>
                        </div>
                        <div className="absolute -bottom-8 -right-6 bg-white rounded-lg p-8 ml-6">
                            <h3 className="text-xl font-medium tracking-wide">{data.title}</h3>
                            <p className="pt-4">{data.description}</p>
                            <p className="pt-4 text-xl font-medium">{data.price === 0 ? `FREE` : `£${data.price}`}{data.price !== 0 && <span className="text-sm align-top"> /month</span>}</p>
                            <form className="pt-6 flex flex-col items-start gap-4">
                                <input
                                    className="border rounded-lg p-2 dark:bg-gray-200"
                                    type="email"
                                    placeholder="user@email.com"
                                />
                                <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NewsletterSubscription