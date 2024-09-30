---
title: "Node: Eigenschaft childNodes"
short-title: childNodes
slug: Web/API/Node/childNodes
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Die schreibgeschützte **`childNodes`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle gibt eine Live-[`NodeList`](/de/docs/Web/API/NodeList) der Kind-[`Knoten`](/de/docs/Web/API/Node) des angegebenen Elements zurück, wobei der erste Kindknoten den Index `0` erhält. Kindknoten umfassen Elemente, Text und Kommentare.

> [!NOTE]
> Die `NodeList` ist live, was bedeutet, dass sich ihr Inhalt ändert, sobald neue Kinder hinzugefügt oder entfernt werden.
>
> Browser fügen einem Dokument Textknoten hinzu, um Leerzeichen im Quellmarkup darzustellen. Daher kann ein Knoten, der zum Beispiel mit `Node.childNodes[0]` abgerufen wird, auf einen Leerzeichentextknoten verweisen, anstatt auf das eigentliche Element, das der Autor abrufen wollte.
>
> Weitere Informationen finden Sie unter [Leerzeichen im DOM](/de/docs/Web/API/Document_Object_Model/Whitespace).

Die Elemente in der Sammlung von Knoten sind Objekte, keine Zeichenfolgen. Um Daten von Knotenobjekten zu erhalten, verwenden Sie deren Eigenschaften. Um beispielsweise den Namen des ersten childNode zu erhalten, können Sie `elementNodeReference.childNodes[0].nodeName` verwenden.

Das [`document`](/de/docs/Web/API/Document)-Objekt selbst hat zwei Kinder: die Doctype-Deklaration und das Root-Element, das normalerweise als `documentElement` bezeichnet wird. In HTML-Dokumenten ist letzteres das {{HTMLElement("html")}}-Element.

Es ist wichtig zu beachten, dass `childNodes` _alle_ Kindknoten umfasst, einschließlich Nicht-Element-Knoten wie Text und Kommentar. Um eine Sammlung zu erhalten, die nur Elemente enthält, verwenden Sie stattdessen [`Element.children`](/de/docs/Web/API/Element/children).

## Wert

Eine Live-[`NodeList`](/de/docs/Web/API/NodeList), die die Kinder des Knotens enthält.

> [!NOTE]
> Mehrere Aufrufe von `childNodes` geben die _gleiche_ [`NodeList`](/de/docs/Web/API/NodeList) zurück.

## Beispiele

### Einfache Verwendung

```js
// Note that parg is an object reference to a <p> element

// First check that the element has child nodes
if (parg.hasChildNodes()) {
  let children = parg.childNodes;

  for (const node of children) {
    // Do something with each child as children[i]
    // NOTE: List is live! Adding or removing children will change the list's `length`
  }
}
```

### Entfernen aller Kinder von einem Knoten

```js
// This is one way to remove all children from a node
// box is an object reference to an element
while (box.firstChild) {
  // The list is LIVE so it will re-index each call
  box.removeChild(box.firstChild);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild)
- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling)
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling)
- [`Element.children`](/de/docs/Web/API/Element/children)
