---
title: "HTMLAnchorElement: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/HTMLAnchorElement/hostname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.hostname`**-Eigenschaft ist ein String, der die Domain der URL enthält.

## Wert

Ein String.

## Beispiele

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.hostname; // returns 'developer.mozilla.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) Schnittstelle, zu der es gehört.
