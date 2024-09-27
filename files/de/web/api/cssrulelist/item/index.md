---
title: "CSSRuleList: Die item()-Methode"
short-title: item()
slug: Web/API/CSSRuleList/item
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die **`item()`**-Methode der [`CSSRuleList`](/de/docs/Web/API/CSSRuleList)-Schnittstelle gibt das [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekt an dem angegebenen `index` zurück oder `null`, wenn der angegebene `index` nicht existiert.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Eine ganze Zahl.

### Rückgabewert

Eine [`CSSRule`](/de/docs/Web/API/CSSRule).

## Beispiele

Im folgenden Beispiel gehen wir davon aus, dass die `myRules`-Liste nur drei Elemente enthält.

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.item(0)); // Logs the first CSSRule item from this list

// Accessing non-existing items using this method will return null instead of undefined
console.log(myRules.item(5)); // null
console.log(myRules[5]); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
