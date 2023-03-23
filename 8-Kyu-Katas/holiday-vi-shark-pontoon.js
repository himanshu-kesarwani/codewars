const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) =>

    {
        if (dolphin) sharkSpeed /= 2;

        let youTime = pontoonDistance / youSpeed;
        let sharkTime = sharkDistance / sharkSpeed;

        if (youTime < sharkTime)
            return `Alive!`

        else
            return `Shark Bait!`
    }