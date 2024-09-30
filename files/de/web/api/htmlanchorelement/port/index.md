---
title: "HTMLAnchorElement: port-Eigenschaft"
short-title: port
slug: Web/API/HTMLAnchorElement/port
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.port`**-Eigenschaft ist ein String, der die Portnummer der URL enthält. Wenn die URL keine explizite Portnummer enthält, wird sie auf `''` gesetzt.

## Wert

Ein String.

## Beispiele

### Abrufen des Ports von einem Anker-Link

```js
// An <a id="myAnchor" href="https://developer.mozilla.org:443/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementByID("myAnchor");
anchor.port; // returns '443'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
