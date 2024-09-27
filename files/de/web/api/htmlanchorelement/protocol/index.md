---
title: "HTMLAnchorElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/HTMLAnchorElement/protocol
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die
**`HTMLAnchorElement.protocol`**
Eigenschaft ist ein String, der das Protokollschema der URL darstellt, einschließlich des abschließenden `':'`.

## Wert

Ein String.

## Beispiele

### Abrufen des Protokolls eines Anker-Links

```js
// An <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.protocol; // returns 'https:'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) Schnittstelle, zu der es gehört.
