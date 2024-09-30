---
title: "HTMLAnchorElement: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/HTMLAnchorElement/pathname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.pathname`**-Eigenschaft ist ein String, der ein anfängliches `'/'` enthält, gefolgt vom Pfad der URL, ohne die Abfragezeichenfolge oder das Fragment (oder der leere String, wenn kein Pfad vorhanden ist).

## Wert

Ein String.

## Beispiele

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.pathname; // returns '/en-US/docs/HTMLAnchorElement'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
