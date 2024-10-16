---
title: "Node: childNodes-Eigenschaft"
short-title: childNodes
slug: Web/API/Node/childNodes
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("DOM")}}

Die schreibgeschützte **`childNodes`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle gibt eine Live-`NodeList` der Kind-`nodes` des gegebenen Elements zurück, wobei dem ersten Kindknoten der Index `0` zugewiesen wird. Kindknoten umfassen Elemente, Text und Kommentare.

> [!NOTE]
> Dass die [`NodeList`](/de/docs/Web/API/NodeList) live ist, bedeutet, dass sich ihr Inhalt ändert, jedes Mal wenn neue Kinder hinzugefügt oder entfernt werden.
>
> Browser fügen Textknoten in ein Dokument ein, um Leerzeichen im Quellmarkup darzustellen. Daher kann ein Knoten, der zum Beispiel mit `Node.childNodes[0]` abgerufen wird, sich auf einen Leerzeichen-Textknoten beziehen, anstatt auf das tatsächliche Element, das der Autor in der Absicht hatte zu erhalten.
>
> Siehe [Leerzeichen im DOM](/de/docs/Web/API/Document_Object_Model/Whitespace) für mehr Informationen.

Die Elemente innerhalb der Sammlung von Knoten sind Objekte, keine Zeichenketten. Um Daten aus Knotenobjekten zu erhalten, verwenden Sie deren Eigenschaften. Um beispielsweise den Namen des ersten `childNode` zu erhalten, können Sie `elementNodeReference.childNodes[0].nodeName` verwenden.

Das [`document`](/de/docs/Web/API/Document)-Objekt selbst hat zwei Kinder: die Doctype-Deklaration und das Wurzelelement, das typischerweise als `documentElement` bezeichnet wird. In HTML-Dokumenten ist letzteres das {{HTMLElement("html")}}-Element.

Es ist wichtig zu beachten, dass `childNodes` _alle_ Kindknoten einschließt, einschließlich Nicht-Element-Knoten wie Text und Kommentar. Um eine Sammlung zu erhalten, die nur Elemente enthält, verwenden Sie stattdessen [`Element.children`](/de/docs/Web/API/Element/children).

## Wert

Eine Live-`NodeList`, die die Kinder des Knotens enthält.

> [!NOTE]
> Mehrere Aufrufe von `childNodes` geben die _gleiche_ `NodeList` zurück.

## Beispiele

### Einfache Verwendung

```js
// Note that para is an object reference to a <p> element

// First check that the element has child nodes
if (para.hasChildNodes()) {
  let children = para.childNodes;

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
