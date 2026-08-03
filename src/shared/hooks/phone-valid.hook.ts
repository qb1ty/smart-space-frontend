import { useState, useCallback, ChangeEvent } from "react";
import { AsYouType, CountryCode, format } from "libphonenumber-js";

const ALLOWED_COUNTRIES : CountryCode[]= ["UZ", "KZ", "UA", "RU", "BY"]

export const usePhoneInput = (initialValue: "+") => {
    const [value, setValue] = useState<string>(initialValue)
    
    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value

        let sanitized = rawValue.replace(/[^\d+]/g, "")

        if (sanitized.length > 0 && sanitized[0] !== "+") {
            sanitized = "+" + sanitized
        }

        if (sanitized.length === 0) {
            sanitized + "+"
        }

        const isDeleting = sanitized.length < value.replace(/[^\d+]/, "").length

        const oldFormatter = new AsYouType()
        oldFormatter.input(value)

        if (!isDeleting && oldFormatter.isValid()) {
            return
        }

        const formatter = new AsYouType()
        const formattedValue = formatter.input(sanitized)

        setValue(formattedValue)
    }, [value])

    const formatter = new AsYouType()
    formatter.input(value)

    const country = formatter.getCountry()
    const isFormatValid = formatter.isValid()

    const isAllowedCountry = country ? ALLOWED_COUNTRIES.includes(country) : true
    const isCompletelyValid = isFormatValid && (country ? ALLOWED_COUNTRIES.includes(country) : false)

    return {
        value,
        onChange: handleChange,
        country,
        isAllowedCountry,
        isCompletelyValid
    }
}