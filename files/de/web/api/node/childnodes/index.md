---
title: "Knoten: childNodes-Eigenschaft"
short-title: childNodes
slug: Web/API/Node/childNodes
l10n:
  sourceCommit: d4a50b63d9afd826e61eb8833e8e6337b5059e8a
---

{{APIRef("DOM")}}

Die schreibgeschützte **`childNodes`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt eine Live-`[`NodeList`](/de/docs/Web/API/NodeList)` der Kind-`[`nodes`](/de/docs/Web/API/Node)` des angegebenen Elements zurück, wobei dem ersten Kindknoten der Index `0` zugewiesen wird. Kindknoten umfassen Elemente, Text und Kommentare.

> [!NOTE]
> Die Tatsache, dass `[`NodeList`](/de/docs/Web/API/NodeList)` live ist, bedeutet, dass sich ihr Inhalt ändert, wann immer neue Kinder hinzugefügt oder entfernt werden.
>
> Browser fügen Dokumenten Textknoten hinzu, um Leerraum im Quell-Markup darzustellen. Daher kann ein Knoten, der zum Beispiel mit `Node.childNodes[0]` erhalten wurde, sich auf einen Leerraum-Textknoten beziehen, anstatt auf das tatsächliche Element, das der Autor erhalten wollte.
>
> Siehe [Arbeiten mit Leerzeichen im DOM](/de/docs/Web/CSS/CSS_text/Whitespace#working_with_whitespace_in_the_dom) für weitere Informationen.

Die Elemente in der Sammlung von Knoten sind Objekte, keine Zeichenfolgen. Um Daten aus Knotenobjekten zu erhalten, verwenden Sie deren Eigenschaften. Zum Beispiel können Sie den Namen des ersten `childNode` mit `elementNodeReference.childNodes[0].nodeName` abrufen.

Das [`document`](/de/docs/Web/API/Document)-Objekt selbst hat zwei Kinder: die Doctype-Deklaration und das Wurzelelement, das typischerweise als `documentElement` bezeichnet wird. In HTML-Dokumenten ist letzteres das {{HTMLElement("html")}}-Element.

Es ist wichtig zu beachten, dass `childNodes` _alle_ Kindknoten umfasst, einschließlich Nicht-Element-Knoten wie Text und Kommentar. Um eine Sammlung zu erhalten, die nur Elemente enthält, verwenden Sie stattdessen [`Element.children`](/de/docs/Web/API/Element/children).

## Wert

Eine Live-`[`NodeList`](/de/docs/Web/API/NodeList)` mit den Kindern des Knotens.

> [!NOTE]
> Mehrere Aufrufe von `childNodes` geben _dieselbe_ `[`NodeList`](/de/docs/Web/API/NodeList)` zurück.

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

### Entfernen aller Kinder aus einem Knoten

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
