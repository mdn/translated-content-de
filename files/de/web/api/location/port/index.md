---
title: "Location: port Eigenschaft"
short-title: port
slug: Web/API/Location/port
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`port`**-Eigenschaft der {{domxref("Location")}}
Schnittstelle ist ein String, der die Portnummer der URL enthält. Wenn die URL keine explizite Portnummer enthält, wird sie auf `''` gesetzt.

## Wert

Ein String.

## Beispiele

```js
// Angenommen, ein <a id="myAnchor" href="https://developer.mozilla.org:443/de/docs/Location.port">-Element befindet sich im Dokument
const anchor = document.getElementByID("myAnchor");
const result = anchor.port; // Gibt zurück: '443'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
