---
title: "HTMLAreaElement: port Eigenschaft"
short-title: port
slug: Web/API/HTMLAreaElement/port
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.port`**-Eigenschaft ist ein
String, der die Portnummer der URL enthält. Wenn die URL keine explizite Portnummer enthält, wird sie auf `''` gesetzt.

## Wert

Ein String.

## Beispiele

### Abrufen des Ports von einem Area-Link

```js
// Ein <area id="myArea" href="https://developer.mozilla.org:443/de/docs/HTMLAreaElement">-Element befindet sich im Dokument
const area = document.getElementID("myArea");
area.port; // gibt '443' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAreaElement")}} Interface, zu dem es gehört.
