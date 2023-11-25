import { useState } from "react"

type QAProps = {
    question: string,
    answer: string,
}

const QA = (props: QAProps) => {
    const [showQA, setShowQA] = useState(false);

    return (
        <div className="py-10 px-3 my-6 max-w-2xl mx-auto border rounded-lg flex flex-col gap-6">
            <button
                className="flex flex-row items-center justify-between gap-4 font-medium"
                onClick={() => setShowQA(!showQA)}
            >
                <span className="text-xl">{props.question}</span>
                <span className="text-gray-500 text-lg">
                    {showQA ? "↑" : "↓"}
                </span>
            </button>
            {showQA &&
                <p className="text-lg">{props.answer}</p>
            }
        </div>
    )
}

export default QA