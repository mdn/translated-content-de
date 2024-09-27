---
title: "HTMLAreaElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/HTMLAreaElement/protocol
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die
**`HTMLAreaElement.protocol`**
Eigenschaft ist ein String, der das Protokollschema der URL darstellt,
einschließlich des abschließenden `':'`.

## Wert

Ein String.

## Beispiele

### Das Protokoll eines Bereichslinks abrufen

```js
// An <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.protocol; // returns 'https:'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) Interface, zu dem es gehört.
