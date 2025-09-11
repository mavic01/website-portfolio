import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export const cn = (...inputs) => { //allows us combine/merge classnames so we don't write a lot of classes on a single line
    return twMerge(clsx(inputs))
}