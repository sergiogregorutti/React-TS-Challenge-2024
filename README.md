# React+Typescript challenge

## Installation

Use node 18 or higher

Install dependencies using `npm install`

Run the dev server using `npm run dev`

## 1. Objectives

- Fork this repository into a new public repository
- Read the requirements below and create the requested application using this repo as base
- Write the app using React, typescript and a styling solution of your choice (pure CSS, tailwind or feel free to install something else if preferred). **Visual styles are the least important, so its recommended to leave these for last**
- For data, there's a mocked list of games hard-coded on `mockData.ts`, use this to supply the app with data
- Write modular typescript types, make use of tools like type unions, composition and type narrowing
- Focus on writing clean code that is easy to understand, maintainable and extensible
- Note that there's some boilerplate code already done for you, feel free to remove anything you don't want and structure the project as you prefer
- **Submit the link to your repo with the completed challenge to the recruiter**
- There's no time limit but the challenge is designed to take about 1 hour to complete, **good luck!**

## 2. Description and product requirements

You are tasked with building a store for videogames, where games of various genres are sold for a price. Here's an example of the finished app:
![example app](/FinishedAppExample.png)

There's a card for every game with the game's information, price, discount and tags like whether the game is multiplayer or not

As for data, every game has the following properties:

- Title
- Description
- Release date
- Price
- Whether the game is Single-player or multi-player

For now the 3 different genres we sell are: FPS games, MOBA games and Racing games. **But we plan on expanding to many more genres**

Each genre has more properties exclusive to it, these are as follows

FPS games:

- Is it cross-platform?

MOBA games:

- Average match duration (in minutes)

Racing games:

- Does it have controller support?

**These are all the exclusive properties we need for now but in the future these will expand**

## 3. Architectural requirements

In order to keep the challenge short, the requirements detailed above are very simple but **you should write and organize your code as if the requirements were more complex and with the expectation that they will grow over time**, as it would in a real scenario.

## 4. BONUS REQUIREMENT: Discounts

In addition to the common properties for each game detailed above, include an optional `discount` property with the following structure:

```ts
Discount = {
  /** 0 to 100 %, the initial amount of the discount */
  baseAmount: number,

  /** Number of days before the discount expires, 0 to n */
  daysRemaining: number,
};
```

In order to calculate the actual discount displayed to the user, the `baseAmount` is used together with other data and there's different rules depending on the game's genre. Here's the logic for each genre:

- **For FPS games**, `baseAmount` is the final discount %
- **For Racing games**, games without controller support don't sell well, so if a game doesn't have it we want to duplicate the deal (x2). Racing games with controller support we simply use `baseAmount` without changes
- **For MOBA games**, we want to make the deal bigger and bigger the closer we get to the expiration date within the last 3 days of the discount. Adding a +10% discount for each day we're closer to the end date. For example, if `daysRemaining` is 0, it means we're at the last day of the deal and we get +30%, +20% if `daysRemaining = 2`, +10% if `daysRemaining = 1` and +0% for anything bigger

**In every scenario, if the calculations above equal to a discount higher to 90%, the discount is capped to 90%. We don't want to give away games for free**
