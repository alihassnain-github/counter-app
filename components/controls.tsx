import { Button } from "@/components/ui/button"

type PropsType = {
    increaseCounter: () => void
    decreaseCounter: () => void
    resetCounter: () => void
}

export default function Controls({ increaseCounter, decreaseCounter, resetCounter }: PropsType) {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
                <Button variant="secondary" onClick={increaseCounter}>Increase</Button>
                <Button variant="secondary" onClick={decreaseCounter}>Decrease</Button>
            </div>
            <div>
                <Button variant="destructive" onClick={resetCounter}>Reset</Button>
            </div>
        </div>
    )
}