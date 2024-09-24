---
title: "HTMLAnchorElement: port Eigenschaft"
short-title: port
slug: Web/API/HTMLAnchorElement/port
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.port`**-Eigenschaft ist ein
String, der die Portnummer der URL enthält. Falls die URL keine
explizite Portnummer enthält, wird sie auf `''` gesetzt.

## Wert

Ein String.

## Beispiele

### Abrufen des Ports von einem Anker-Link

```js
// Ein <a id="myAnchor" href="https://developer.mozilla.org:443/de/docs/HTMLAnchorElement"> Element ist im Dokument
const anchor = document.getElementByID("myAnchor");
anchor.port; // gibt '443' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAnchorElement")}}-Interface, zu dem es gehört.
