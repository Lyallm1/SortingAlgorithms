import { QueueArray } from "./QueueArray"

export class PriorityQueueArray extends QueueArray<number> {
    constructor() {
        super([])
    }

    enqueue(item: number) {
        if (super.size() == 0) super.enqueue(item)
        else {
            let added = false
            for (let i = 0; i < super.size(); i++) if (item < super.queue[i]) {
                super.queue.splice(i, 0, item)
                added = true
                break
            }
            if (!added) super.enqueue(item)
        }
    }
}
