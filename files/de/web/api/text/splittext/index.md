---
title: "Text: splitText() Methode"
short-title: splitText()
slug: Web/API/Text/splitText
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("DOM")}}

Die **`splitText()`** Methode der [`Text`](/de/docs/Web/API/Text) Schnittstelle
teilt den [`Text`](/de/docs/Web/API/Text) Knoten an der angegebenen Position und behält beide Knoten als Geschwister im Baum.

Nach der Teilung enthält der aktuelle Knoten den gesamten Inhalt
bis zum angegebenen Offset-Punkt, und ein neu erstellter Knoten des gleichen Typs enthält den verbleibenden Text.
Der neu erstellte Knoten wird an den Aufrufer zurückgegeben.
Wenn der ursprüngliche Knoten einen Elternteil hatte, wird der neue Knoten als das nächste Geschwister des ursprünglichen Knotens eingefügt.
Wenn der Offset gleich der Länge des ursprünglichen Knotens ist,
enthält der neu erstellte Knoten keine Daten.

Getrennte Textknoten können mit der [`Node.normalize()`](/de/docs/Web/API/Node/normalize)
Methode zusammengefügt werden.

## Syntax

```js-nolint
newNode = textNode.splitText(offset)
```

### Parameter

- `offset`
  - : Der Index, direkt vor dem der Textknoten geteilt werden soll.

### Rückgabewert

Gibt den neu erstellten [`Text`](/de/docs/Web/API/Text) Knoten zurück, der den Text nach dem
angegebenen Offset-Punkt enthält.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Offset negativ ist oder größer als die Anzahl der 16-Bit-Einheiten im Text des Knotens.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten schreibgeschützt ist.

## Beispiel

In diesem Beispiel wird der Text eines {{HTMLElement("p")}} in zwei Textknoten geteilt, und ein
{{HTMLElement("u")}} wird dazwischen eingefügt.

```html
<p>foobar</p>
```

```js
const p = document.querySelector("p");

// Get contents of <p> as a text node
const foobar = p.firstChild;

// Split 'foobar' into two text nodes, 'foo' and 'bar',
// and save 'bar' as a const
const bar = foobar.splitText(3);

// Create a <u> element containing ' new content '
const u = document.createElement("u");
u.appendChild(document.createTextNode(" new content "));

// Add <u> before 'bar'
p.insertBefore(u, bar);

// The result is: <p>foo<u> new content </u>bar</p>
```

{{EmbedLiveSample("Example", 700, 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Text`](/de/docs/Web/API/Text) Schnittstelle, zu der es gehört.
- Die entgegengesetzte Methode: [`Node.normalize`](/de/docs/Web/API/Node/normalize).
