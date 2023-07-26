# Tabs limit hook

## Example:
```js
import {useTabsLimit} from "./hooks/useTabsLimit";

function App() {
  const isValid = useTabsLimit()
  const text = isValid ? 'working tab' : 'blocked tab'
  return (
    <div className="App">
      <header className="App-header">
        <p>{text}</p>
      </header>
    </div>
  );
}
```


## Try:
Copy repository
### `npm install`
### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

