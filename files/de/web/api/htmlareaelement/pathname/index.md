---
title: "HTMLAreaElement: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/HTMLAreaElement/pathname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.pathname`**-Eigenschaft ist ein
String, der ein anfängliches `'/'` enthält, gefolgt von dem Pfad der
URL ohne die Abfragezeichenfolge oder das Fragment (oder der leere String, falls kein
Pfad vorhanden ist).

## Wert

Ein String.

## Beispiele

```js
// An <area id="myArea" href="/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.pathname; // returns '/en-US/docs/HTMLAreaElement'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der es gehört.
