---
title: "Location: Eigenschaft pathname"
short-title: pathname
slug: Web/API/Location/pathname
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`pathname`**-Eigenschaft des {{domxref("Location")}}
Interfaces ist ein String, der den Pfad der URL für die Location enthält. Wenn kein Pfad vorhanden ist, wird `pathname` leer sein: andernfalls enthält `pathname` ein anfängliches '/' gefolgt vom Pfad der URL, ohne die Abfragezeichenkette oder das Fragment.

## Wert

Ein String.

## Beispiele

```js
// Angenommen, wir befinden uns auf der URL https://developer.mozilla.org/de/docs/Web/API/Location/pathname#examples
console.log(location.pathname); // '/de/docs/Web/API/Location/pathname'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
