---
title: "Node: ownerDocument-Eigenschaft"
short-title: ownerDocument
slug: Web/API/Node/ownerDocument
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die schreibgeschützte **`ownerDocument`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt das oberste Dokumentobjekt des Knotens zurück.

## Wert

Ein [`Document`](/de/docs/Web/API/Document), das das oberste Objekt ist, in dem alle
untergeordneten Knoten erstellt werden.

Wenn diese Eigenschaft auf einem Knoten verwendet wird, der selbst ein Dokument ist, ist der Wert `null`.

## Beispiel

```js
// Given a node "p", get the top-level HTML
// child of the document object

const d = p.ownerDocument;
const html = d.documentElement;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
