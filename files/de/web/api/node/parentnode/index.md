---
title: "Node: parentNode-Eigenschaft"
short-title: parentNode
slug: Web/API/Node/parentNode
l10n:
  sourceCommit: 8cdc8bb0ee320abf8a2f54a1a167d1a72ff8a2ca
---

{{APIRef("DOM")}}

Die schreibgeschützte **`parentNode`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt das Elternteil des angegebenen Knotens im DOM-Baum zurück.

`Document` und `DocumentFragment` [Knoten](/de/docs/Web/API/Node/nodeType) können niemals ein Elternteil haben, daher gibt `parentNode` immer `null` zurück. Es gibt auch `null` zurück, wenn der Knoten gerade erstellt wurde und noch nicht mit dem Baum verbunden ist. [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) hingegen gibt nur `Element`-Knoten zurück.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das Elternteil des aktuellen Knotens ist. Das Elternteil eines Elements ist ein `Element`-Knoten, ein `Document`-Knoten oder ein `DocumentFragment`-Knoten.

## Beispiel

### Verwendung von parentNode

Dieses Beispiel entfernt einen Knoten aus dem Baum, es sei denn, dieser ist bereits nicht im Baum vorhanden.

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
