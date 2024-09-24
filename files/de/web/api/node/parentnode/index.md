---
title: "Node: Eigenschaft parentNode"
short-title: parentNode
slug: Web/API/Node/parentNode
l10n:
  sourceCommit: 8cdc8bb0ee320abf8a2f54a1a167d1a72ff8a2ca
---

{{APIRef("DOM")}}

Die schreibgeschützte **`parentNode`**-Eigenschaft des {{domxref("Node")}}-Interfaces
gibt das übergeordnete Element des angegebenen Knotens im DOM-Baum zurück.

`Document` und `DocumentFragment` [Knoten](/de/docs/Web/API/Node/nodeType) können niemals ein übergeordnetes Element haben, daher wird `parentNode` immer `null` zurückgeben.
Es gibt auch `null` zurück, wenn der Knoten gerade erstellt wurde
und noch nicht an den Baum angefügt ist. {{domxref("Node.parentElement")}} gibt hingegen nur `Element`-Knoten zurück.

## Wert

Ein {{domxref("Node")}}, das das übergeordnete Element des aktuellen Knotens ist. Das übergeordnete Element eines `Element`-Knotens ist ein `Element`-Knoten, ein `Document`-Knoten oder ein `DocumentFragment`-Knoten.

## Beispiel

### Verwendung von parentNode

Dieses Beispiel entfernt einen Knoten aus dem Baum, es sei denn, er befindet sich bereits nicht im Baum.

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

- {{Domxref("Node.firstChild")}}
- {{Domxref("Node.lastChild")}}
- {{Domxref("Node.childNodes")}}
- {{Domxref("Node.nextSibling")}}
- {{Domxref("Node.parentElement")}}
- {{Domxref("Node.previousSibling")}}
- {{Domxref("Node.removeChild")}}
