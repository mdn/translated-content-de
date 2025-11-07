---
title: "Node: childNodes-Eigenschaft"
short-title: childNodes
slug: Web/API/Node/childNodes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

Die schreibgeschützte **`childNodes`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle gibt eine Live-[`NodeList`](/de/docs/Web/API/NodeList) von Kind-[`nodes`](/de/docs/Web/API/Node) des angegebenen Elements zurück, wobei dem ersten Kind-Node der Index `0` zugewiesen wird. Kind-Knoten umfassen Elemente, Text und Kommentare.

> [!NOTE]
> Die Tatsache, dass die [`NodeList`](/de/docs/Web/API/NodeList) live ist, bedeutet, dass sich ihr Inhalt jedes Mal ändert, wenn neue Kinder hinzugefügt oder entfernt werden.
>
> Browser fügen einem Dokument Textknoten hinzu, um Leerzeichen im Quellmarkup darzustellen. Daher kann ein Knoten, der zum Beispiel mit `Node.childNodes[0]` abgerufen wird, auf einen Leerzeichentextknoten verweisen, anstelle des eigentlichen Elements, das der Autor beabsichtigt, abzurufen.
>
> Weitere Informationen finden Sie unter [Arbeiten mit Leerzeichen im DOM](/de/docs/Web/CSS/Guides/Text/Whitespace#working_with_whitespace_in_the_dom).

Die Elemente in der Sammlung von Knoten sind Objekte, keine Zeichenketten. Um Daten aus Knotenobjekten zu erhalten, verwenden Sie deren Eigenschaften. Zum Beispiel können Sie den Namen des ersten `childNode` mit `elementNodeReference.childNodes[0].nodeName` erhalten.

Das [`document`](/de/docs/Web/API/Document)-Objekt selbst hat zwei Kinder: die Doctype-Deklaration und das Wurzelelement, das typischerweise als `documentElement` bezeichnet wird. In HTML-Dokumenten ist letzteres das {{HTMLElement("html")}}-Element.

Es ist wichtig zu beachten, dass `childNodes` _alle_ Knoten umfasst, einschließlich Nicht-Element-Knoten wie Text und Kommentare. Um eine Sammlung zu erhalten, die nur Elemente enthält, verwenden Sie stattdessen [`Element.children`](/de/docs/Web/API/Element/children).

## Wert

Eine Live-[`NodeList`](/de/docs/Web/API/NodeList), die die Kinder des Knotens enthält.

> [!NOTE]
> Mehrere Aufrufe von `childNodes` geben dieselbe [`NodeList`](/de/docs/Web/API/NodeList) zurück.

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

### Alle Kinder eines Knotens entfernen

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
