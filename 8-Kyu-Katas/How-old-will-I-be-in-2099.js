const calculateAge = (yearOfBirth, year) =>

    {

        if (yearOfBirth < year) {
            if (year - yearOfBirth === 1) return `You are 1 year old.`
            else return `You are ${year-yearOfBirth} years old.`
        } else if (yearOfBirth > year) {
            if (yearOfBirth - year === 1) return `You will be born in 1 year.`
            else return `You will be born in ${yearOfBirth-year} years.`
        } else return `You were born this very year!`
    }