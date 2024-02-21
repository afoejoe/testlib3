# Theme Context
> Контекст

## Использование
```javascript
import { ThemeContext, themes, sizes, schemes } from 'sc-context';

const theme = {
  theme: themes.modern,
  size: sizes.medium,
  scheme: schemes.default,
};
```
```jsx
<ThemeContext.Provider value={theme}>
  ...
</ThemeContext.Provider>
```

## Использование внутри компонент
```javascript
import React from 'react';
import { ThemeContext } from 'sc-context';

class ComponentName extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { theme, size, scheme } = this.context;
  }
}
```

## Сборка пакета

```shell script
npm run build:package
```

