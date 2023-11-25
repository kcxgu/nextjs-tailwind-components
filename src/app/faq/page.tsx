"use client";

import { Body, H1 } from "../design-system/formatting";
import QA from "./QA";

const dataQA = [
    {
        question: "What do you call a cow in an earthquake?",
        answer: "A milkshake!",
    },
    {
        question: "What's a foot long and slippery?",
        answer: "A slipper!",
    },
    {
        question: "What do you call cheese that's stolen?",
        answer: "Nacho cheese!",
    },
    {
        question: "What do you like about Switzerland?",
        answer: "Well, for a start, the flag is a big plus!",
    },
]

const FAQ = () => {
    return (
        <Body>
            <H1>FAQ</H1>
            {dataQA.map((data, i) =>
                <div key={i}>
                    <QA
                        question={data.question}
                        answer={data.answer}
                    />
                </div>
            )}
        </Body>
    )
}

export default FAQ