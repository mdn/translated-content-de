---
title: "Node: ownerDocument-Eigenschaft"
short-title: ownerDocument
slug: Web/API/Node/ownerDocument
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die schreibgeschützte **`ownerDocument`**-Eigenschaft der {{domxref("Node")}}-Schnittstelle
gibt das oberste Dokumentobjekt des Knotens zurück.

## Wert

Ein {{domxref("Document")}}, das das oberste Objekt ist, in dem alle
untergeordneten Knoten erstellt werden.

Wenn diese Eigenschaft bei einem Knoten verwendet wird, der selbst ein Dokument ist, ist der Wert `null`.

## Beispiel

```js
// Gegeben ein Knoten "p", erhalten Sie das oberste HTML-Element
// des Dokumentobjekts

const d = p.ownerDocument;
const html = d.documentElement;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
