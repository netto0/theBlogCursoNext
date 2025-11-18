import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function formatDatetime(rawDate: string):string{
    const formattedDate = format(rawDate,"dd/MM/yyyy 'às' HH:mm", {locale:ptBR})
    return formattedDate
}

export function formatRelativeDate(rawDate: string):string{
    const formattedDate = formatDistanceToNow(rawDate, {locale:ptBR, addSuffix:true})
    return formattedDate
}

console.log(new Date().toISOString())