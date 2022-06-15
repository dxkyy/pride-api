# 🏳️‍🌈Pride API

This is an API to list data about various LGBTQA+ sexualities and genders, delivered as JSON by REST. These are all the sexualities/genders I could find on the [LGBTQIA+ Wiki](https://lgbtq.wikia.com/).



## Using the API

#### REST API

###### Fetch a Sexuality:

```https://pride-api.herokuapp.com/api/sexuality/${name}
https://pride-api.herokuapp.com/api/sexuality/${name}
```

This will return the JSON object of the sexuality specified.

Example Request:

```
https://pride-api.herokuapp.com/api/sexuality/polysexual
```

Example Response:

```json
{
  name: "Polysexual",
  description:
    "Polysexuality is the sexual attraction to various, but not necessarily all, genders. A polysexual person may experience sexual attraction to any number of genders, varying between (at least) two and many. Polysexual individuals may have a preference when it comes to which gender they are attracted to, but this is not necessarily the case.",
  gender: ["Any"],
  attractedTo: ["Various"],
  attractionType: "Sexual",
  differentFrom: ["Pansexual", "Bisexual", "Omnisexual", "Polyamorous"],
  flag:
    "https://static.wikia.nocookie.net/lgbtqia-sandbox/images/4/49/Polysexual_Flag.svg/revision/latest/scale-to-width-down/350?cb=20220123030926.png",
}
```

###### Fetch all Sexualities:

```
https://pride-api.herokuapp.com/api/sexuality
```

This will return all sexualities.



###### Fetch a Gender:

```
https://pride-api.herokuapp.com/api/gender/${name}
```

This will return the JSON object of the gender specified.

Example Request:

```
https://pride-api.herokuapp.com/api/gender/genderfluid
```

Example Response:

```json
{
  name: "Genderfluid",
  description:
    "Genderfluid or simply fluid, refers to someone whose gender identity changes over time. A genderfluid individual can identify as any gender, or combination of genders, at any given time. Their gender can change at random, or it may vary in response to different circumstances. At times, these individuals may identify as male, female, both, or neither. Their pronouns may vary at different times. The term genderfluid can be used as a specific identity in itself or as a descriptive term. They are generally considered under the non-binary and transgender umbrellas, but not all genderfluid individuals identify with those terms. Some genderfluid people transition socially, physically, and/or legally.",
  differentFrom: ["Genderqueer", "Non-binary", "Genderflux"],
  flag:
    "https://static.wikia.nocookie.net/lgbtqia-sandbox/images/3/3f/Genderfluid_Flag.svg/revision/latest/scale-to-width-down/350?cb=20220123030153.png",
}
```

###### Fetch all Genders:

```
https://pride-api.herokuapp.com/api/gender
```

This will return all gedners.



## Why have you built this?

I started this in Pride Month 2022, when I was working on a pride discord bot and was in need of an API like this. So inspired by [GitHub - JoeHart/pride-flag-api: LGBTQA+ Pride Flag API](https://github.com/JoeHart/pride-flag-api) I started to just code this :)


