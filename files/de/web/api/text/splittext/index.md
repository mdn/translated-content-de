---
title: "Text: splitText()-Methode"
short-title: splitText()
slug: Web/API/Text/splitText
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("DOM")}}

Die **`splitText()`**-Methode der {{domxref("Text")}}-Schnittstelle teilt den {{domxref("Text")}}-Knoten an einem angegebenen Offset in zwei Knoten auf, wobei beide Knoten als Geschwister im Baum verbleiben.

Nach der Teilung enthält der aktuelle Knoten den gesamten Inhalt bis zum angegebenen Offset, und ein neu erstellter Knoten desselben Typs enthält den restlichen Text. Der neu erstellte Knoten wird an den Aufrufer zurückgegeben. Wenn der ursprüngliche Knoten ein Elternteil hatte, wird der neue Knoten als nächstes Geschwister des ursprünglichen Knotens eingefügt. Wenn der Offset gleich der Länge des ursprünglichen Knotens ist, hat der neu erstellte Knoten keine Daten.

Getrennte Textknoten können mit der {{domxref("Node.normalize()")}}-Methode zusammengefügt werden.

## Syntax

```js-nolint
newNode = textNode.splitText(offset)
```

### Parameter

- `offset`
  - : Der Index unmittelbar vor dem der Textknoten geteilt werden soll.

### Rückgabewert

Gibt den neu erstellten {{domxref("Text")}}-Knoten zurück, der den Text nach dem angegebenen Offset enthält.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Offset negativ ist oder größer als die Anzahl der 16-Bit-Einheiten im Text des Knotens ist.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten schreibgeschützt ist.

## Beispiel

In diesem Beispiel wird der Text eines {{HTMLElement("p")}}-Elements in zwei Textknoten geteilt, und ein {{HTMLElement("u")}}-Element wird zwischen ihnen eingefügt.

```html
<p>foobar</p>
```

```js
const p = document.querySelector("p");

// Holen Sie den Inhalt von <p> als Textknoten
const foobar = p.firstChild;

// Teilen Sie 'foobar' in zwei Textknoten, 'foo' und 'bar',
// und speichern Sie 'bar' als const
const bar = foobar.splitText(3);

// Erstellen Sie ein <u>-Element, das ' new content ' enthält
const u = document.createElement("u");
u.appendChild(document.createTextNode(" new content "));

// Fügen Sie <u> vor 'bar' hinzu
p.insertBefore(u, bar);

// Das Ergebnis ist: <p>foo<u> new content </u>bar</p>
```

{{EmbedLiveSample("Example", 700, 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("Text")}}-Schnittstelle, zu der sie gehört.
- Die gegenteilige Methode: {{domxref("Node.normalize")}}.
