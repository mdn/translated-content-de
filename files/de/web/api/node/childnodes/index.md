---
title: "Node: childNodes-Eigenschaft"
short-title: childNodes
slug: Web/API/Node/childNodes
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Die schreibgeschützte **`childNodes`**-Eigenschaft der {{domxref("Node")}}-Schnittstelle gibt eine Live-{{domxref("NodeList")}} von Kind-{{domxref("Node","Knoten")}} des gegebenen Elements zurück, wobei dem ersten Kindknoten der Index `0` zugewiesen wird. Kindknoten umfassen Elemente, Text und Kommentare.

> [!NOTE]
> Dass die {{domxref("NodeList")}} live ist, bedeutet, dass sich ihr Inhalt jedes Mal ändert, wenn neue Kinder hinzugefügt oder entfernt werden.
>
> Browser fügen einem Dokument Textknoten hinzu, um Leerzeichen im Quellmarkup darzustellen. Daher kann sich ein Knoten, der beispielsweise mit `Node.childNodes[0]` erhalten wurde, auf einen Leerzeichentextknoten beziehen, anstatt auf das tatsächliche Element, das der Autor beabsichtigt hat zu erhalten.
>
> Weitere Informationen finden Sie unter [Leerzeichen im DOM](/de/docs/Web/API/Document_Object_Model/Whitespace).

Die Elemente in der Sammlung von Knoten sind Objekte, keine Zeichenfolgen. Um Daten aus Knotenobjekten zu erhalten, verwenden Sie deren Eigenschaften. Um beispielsweise den Namen des ersten childNode zu erhalten, können Sie `elementNodeReference.childNodes[0].nodeName` verwenden.

Das {{domxref("document")}}-Objekt selbst hat zwei Kinder: die Doctype-Deklaration und das Wurzelelement, das typischerweise als `documentElement` bezeichnet wird. In HTML-Dokumenten ist letzteres das {{HTMLElement("html")}}-Element.

Es ist wichtig zu beachten, dass `childNodes` _alle_ Kindknoten, einschließlich nicht-elementarer Knoten wie Text und Kommentar, umfasst. Um eine Sammlung zu erhalten, die nur Elemente enthält, verwenden Sie stattdessen {{domxref("Element.children")}}.

## Wert

Eine live {{domxref("NodeList")}}, die die Kinder des Knotens enthält.

> [!NOTE]
> Mehrere Aufrufe von `childNodes` geben die _gleiche_ {{domxref("NodeList")}} zurück.

## Beispiele

### Einfache Verwendung

```js
// Beachten Sie, dass parg eine Objektreferenz auf ein <p>-Element ist

// Zuerst prüfen, ob das Element Kindknoten hat
if (parg.hasChildNodes()) {
  let children = parg.childNodes;

  for (const node of children) {
    // Machen Sie etwas mit jedem Kind als children[i]
    // HINWEIS: Liste ist live! Das Hinzufügen oder Entfernen von Kindern wird die `length` der Liste ändern
  }
}
```

### Alle Kinder von einem Knoten entfernen

```js
// Dies ist eine Möglichkeit, alle Kinder von einem Knoten zu entfernen
// box ist eine Objektreferenz auf ein Element
while (box.firstChild) {
  // Die Liste ist LIVE, daher wird sie bei jedem Aufruf neu indiziert
  box.removeChild(box.firstChild);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.firstChild")}}
- {{domxref("Node.lastChild")}}
- {{domxref("Node.nextSibling")}}
- {{domxref("Node.previousSibling")}}
- {{domxref("Element.children")}}
