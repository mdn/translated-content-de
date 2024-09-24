---
title: "HTMLAnchorElement: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/HTMLAnchorElement/pathname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.pathname`**-Eigenschaft ist ein
String, der einen anfänglichen `'/'` enthält, gefolgt vom Pfad der
URL ohne die Abfragezeichenkette oder das Fragment (oder der leere String, wenn kein
Pfad vorhanden ist).

## Wert

Ein String.

## Beispiele

```js
// Ein <a id="myAnchor" href="/de/docs/HTMLAnchorElement"> Element befindet sich im Dokument
const anchor = document.getElementById("myAnchor");
anchor.pathname; // gibt '/de/docs/HTMLAnchorElement' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAnchorElement")}}-Interface, zu dem es gehört.
