---
title: "Location: port Eigenschaft"
short-title: port
slug: Web/API/Location/port
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`port`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)
Interfaces ist eine Zeichenkette, die die Portnummer der URL enthält. Wenn die
URL keine explizite Portnummer enthält, wird sie auf `''` gesetzt.

## Wert

Eine Zeichenkette.

## Beispiele

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org:443/en-US/docs/Location.port"> element be in the document
const anchor = document.getElementByID("myAnchor");
const result = anchor.port; // Returns:'443'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
