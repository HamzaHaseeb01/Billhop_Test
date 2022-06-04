export const ConvertToEncoding = (splitText: any, vowels: any) => {
    let result = ''

    splitText.forEach((value: string) => {
        if (vowels.indexOf(value) === -1 && value != ' ') {
            result = (result + (value + 'o' + value))
        } else result += value
    })
    return result
}