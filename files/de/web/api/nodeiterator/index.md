---
title: NodeIterator
slug: Web/API/NodeIterator
l10n:
  sourceCommit: 30ae43a0c98ab92f750fd571d7a3a8ee8b15b4c0
---

{{APIRef("DOM")}}

Die **`NodeIterator`**-Schnittstelle stellt einen Iterator dar, um Knoten eines DOM-Teilbaums in Dokumentreihenfolge zu durchlaufen.

Ein `NodeIterator` kann mit der Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wie folgt erstellt werden:

```js
const nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaft._

- [`NodeIterator.root`](/de/docs/Web/API/NodeIterator/root) {{ReadOnlyInline}}
  - : Gibt einen [`Node`](/de/docs/Web/API/Node) zurück, der den Wurzelknoten repräsentiert, wie bei der Erstellung des `NodeIterator` festgelegt wurde.
- [`NodeIterator.whatToShow`](/de/docs/Web/API/NodeIterator/whatToShow) {{ReadOnlyInline}}
  - : Gibt eine `unsigned long`-Bitmaske zurück, die die zu treffenden Typen von [`Node`](/de/docs/Web/API/Node) beschreibt. Nicht passende Knoten werden übersprungen, aber relevante Kindknoten können eingeschlossen sein.
- [`NodeIterator.filter`](/de/docs/Web/API/NodeIterator/filter) {{ReadOnlyInline}}
  - : Gibt einen `NodeFilter` zurück, der verwendet wird, um die relevanten Knoten auszuwählen.
- [`NodeIterator.referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, an den der Iterator verankert ist.
- [`NodeIterator.pointerBeforeReferenceNode`](/de/docs/Web/API/NodeIterator/pointerBeforeReferenceNode) {{ReadOnlyInline}}
  - : Gibt einen Boolean-Wert zurück, der anzeigt, ob der `NodeIterator` _vor_ dem [`NodeIterator.referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) verankert ist. Wenn `false`, zeigt er an, dass der Iterator _nach_ dem Referenzknoten verankert ist.

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methode._

- [`NodeIterator.detach()`](/de/docs/Web/API/NodeIterator/detach) {{deprecated_inline}}
  - : Dies ist eine veraltete Methode und hat keine Wirkung mehr. Zuvor diente sie dazu, einen `NodeIterator` als freigegeben zu markieren, sodass er vom Garbage Collector zurückgenommen werden konnte.
- [`NodeIterator.previousNode()`](/de/docs/Web/API/NodeIterator/previousNode)
  - : Gibt den vorherigen [`Node`](/de/docs/Web/API/Node) im Dokument zurück oder `null`, wenn es keine gibt.
- [`NodeIterator.nextNode()`](/de/docs/Web/API/NodeIterator/nextNode)
  - : Gibt den nächsten [`Node`](/de/docs/Web/API/Node) im Dokument zurück oder `null`, wenn es keine gibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erstellermethode: [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator).
- Verwandte Schnittstelle: [`TreeWalker`](/de/docs/Web/API/TreeWalker)
