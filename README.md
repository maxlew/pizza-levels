# 🍕 Pizza Levels 🍕
Pizza Levels is designed to teach the world about a simple concept of the different levels of Pizza. It's built on the belief that Pizzas must be categorised by the way they are cooked to be ranked fairly against each other.

To solve this problem, here is a basic NextJS application that communicates to Google Sheets via API to pull in a list of Pizzas, their ratings and their levels.


## 🗺️ Basic Architecture
![infra diagram](docs/infra-diagram.png)

1. CDN Cloudflare CNAMES traffic to Netlify hosted NextJS App
2. NextJS App uses App router to request data from Google Sheets
3. NextJS App renders a Menu Bar and list of Pizzas with their reviews

### React Components

#### `Page` or Home
The top level component is a server side react component, it makes a network request to Google Sheets and then parses and passes that information down into it's children.

#### `PizzaController`
Pizza Controller is where all the state management happens, it handles filtering and sorting the Pizza List based on the controls in Menu Bar.

#### `MenuBar`
Handles allowing the user to control what level is selected. While it has the controllers it doesn't control the actual state, it is passed in this from it's parent PizzaController, or on an error page it is not passed in these values and hides the controls.

#### `PizzaList`
Pizza list handles looping over the list of pizzas passed into it, it's a very basic component that really consists of just a map function and some tailwind styling.

#### `Pizza`
Pizza Component uses Framer Motion to handle animating in and out of view. It also displays the information about the pizza in a neat little box.

#### `Rating`
Rating component shows a star rating based on a number passed to it. It does some basic calculations to determine if there are half stars and how many stars to show.

##### `Star`
Star Component simply renders an SVG, based on the type of star it will change the fill of the SVG.

## 🤞 Getting Started

### Environment setup
There's two environment variables for this project that need to be set. To set these duplicate the `.env.example` and create a `.env.local` file.

#### `PIZZA_SHEET_ID`
This is provided in the .env.example, it's the ID of the current Google Sheet that backs this site.

#### `GSHEETS_API_KEY`
An API key can be created from inside of GCP "APIs and Services" console. In technical terms it needs access to the `google.apps.sheets.v4.SpreadsheetsService.GetSpreadsheet` scope

### Start Dev Server
First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Unit Tests
There's a suite of unit tests against the low level components there should be 100% coverage of that level. These can be run with:

```bash
npm run test
```

App Router is new, and also new to me, so would be good to spend some time to figure out how to test the React Server components in page.tsx, error.tsx, layout.tsx that would bring the total project to 100% coverage.

## 🚀 Deployment
Deployment is handled by netlify to the domain pizza.maxlew.is

## 🔨 More things to do
- Add in some kind of middleware/caching layer between NextJS and Google Sheets
  - This would avoid a flood of requests all hitting the GSheets API and costing money
- Bring the GCP setup in here via terraform
  - Currently just clickopsed the API Key and configuration

## 🍕 Pizza Levels
1. Frozen Pizza
2. Food Court Pizza
3. Conveyor Oven Pizza
4. Conventional Oven Pizza
5. Wood Fired Oven Pizza
