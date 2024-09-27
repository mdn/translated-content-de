---
title: "Node: parentNode-Eigenschaft"
short-title: parentNode
slug: Web/API/Node/parentNode
l10n:
  sourceCommit: 8cdc8bb0ee320abf8a2f54a1a167d1a72ff8a2ca
---

{{APIRef("DOM")}}

Die schreibgeschützte **`parentNode`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces
gibt das übergeordnete Element des angegebenen Knotens im DOM-Baum zurück.

`Document`- und `DocumentFragment`-[Knoten](/de/docs/Web/API/Node/nodeType) können niemals ein übergeordnetes Element haben, daher wird `parentNode` immer `null` zurückgeben.
Es wird auch `null` zurückgegeben, wenn der Knoten gerade erstellt wurde und noch nicht an den Baum angehängt ist. [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) hingegen gibt nur `Element`-Knoten zurück.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), das das übergeordnete Element des aktuellen Knotens ist. Das übergeordnete Element eines Elements ist
ein `Element`-Knoten, ein `Document`-Knoten oder ein `DocumentFragment`-Knoten.

## Beispiel

### Verwendung von parentNode

Dieses Beispiel entfernt einen Knoten vom Baum, es sei denn, er befindet sich bereits nicht im Baum.

```js
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild)
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)
- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling)
- [`Node.parentElement`](/de/docs/Web/API/Node/parentElement)
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling)
- [`Node.removeChild`](/de/docs/Web/API/Node/removeChild)
