---
title: "Location: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/Location/pathname
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`pathname`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist ein String, der den Pfad der URL für die Position enthält. Wenn kein Pfad vorhanden ist, wird `pathname` leer sein; andernfalls enthält `pathname` ein anfängliches '/' gefolgt vom Pfad der URL, ohne die Abfragezeichenfolge oder den Fragment.

## Wert

Ein String.

## Beispiele

```js
// Let's say we are on the URL https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname#examples
console.log(location.pathname); // '/en-US/docs/Web/API/Location/pathname'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
