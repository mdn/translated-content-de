---
title: "HTMLAreaElement: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/HTMLAreaElement/pathname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.pathname`**-Eigenschaft ist ein String, der einen anfänglichen `'/'` gefolgt vom Pfad der URL enthält, wobei die Abfragezeichenfolge oder das Fragment nicht eingeschlossen sind (oder der leere String, wenn kein Pfad vorhanden ist).

## Wert

Ein String.

## Beispiele

```js
// Ein <area id="myArea" href="/de/docs/HTMLAreaElement"> Element befindet sich im Dokument
const area = document.getElementById("myArea");
area.pathname; // gibt '/de/docs/HTMLAreaElement' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAreaElement")}}-Interface, zu dem es gehört.
