---
title: "Range: setStart() Methode"
short-title: setStart()
slug: Web/API/Range/setStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.setStart()`** Methode setzt die Startposition eines
[`Range`](/de/docs/Web/API/Range).

Wenn der `startNode` ein [`Node`](/de/docs/Web/API/Node) vom Typ [`Text`](/de/docs/Web/API/Text),
[`Comment`](/de/docs/Web/API/Comment) oder [`CDataSection`](/de/docs/Web/API/CDATASection) ist, dann ist `startOffset`
die Anzahl der Zeichen vom Beginn des `startNode`. Für andere
`Node`-Typen ist `startOffset` die Anzahl der Kindknoten
vom Anfang des `startNode`.

Das Setzen des Startpunkts unterhalb (weiter im Dokument) des Endpunkts führt zu einem
kollabierten Bereich, bei dem beide, Start- und Endpunkte, auf die angegebene Startposition gesetzt sind.

## Syntax

```js-nolint
setStart(startNode, startOffset)
```

### Parameter

- `startNode`
  - : Der [`Node`](/de/docs/Web/API/Node), bei dem der [`Range`](/de/docs/Web/API/Range) beginnen soll.
- `startOffset`
  - : Eine ganze Zahl größer oder gleich null, die den Versatz für den Beginn des
    [`Range`](/de/docs/Web/API/Range) vom Start des `startNode` darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Teil eines Elements hervorheben

Dieses Beispiel verwendet die Methoden `Range.setStart()` und [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd),
um einen Teil einer Adresse zu einem Bereich hinzuzufügen. Der ausgewählte Bereich wird dann
mit [`Range.surroundContents()`](/de/docs/Web/API/Range/surroundContents) hervorgehoben.

Die Adresse enthält neun Knoten: fünf Textknoten und vier {{htmlElement("br")}}
Elemente.

#### HTML

```html
<p id="address">
  Wyatt Earp<br />
  101 E. Main St.<br />
  Dodge City, KS<br />
  67801<br />
  USA
</p>

<hr />
<p>Nodes in the original address:</p>
<ol id="log"></ol>
```

#### JavaScript

```js
const address = document.getElementById("address");
const log = document.getElementById("log");

// Log info
address.childNodes.forEach((node) => {
  const li = document.createElement("li");
  li.textContent = `${node.nodeName}, ${node.nodeValue}`;
  log.appendChild(li);
});

// Highlight the street and city
const startOffset = 2; // Start at third node: 101 E. Main St.
const endOffset = 5; // End at fifth node: Dodge City, KS
const range = document.createRange();
range.setStart(address, startOffset);
range.setEnd(address, endOffset);

const mark = document.createElement("mark");
range.surroundContents(mark);
```

#### Ergebnis

{{EmbedLiveSample("Highlight_part_of_an_element", 700, 400)}}

### Zeichen aus einem Textknoten abrufen

Dieses Beispiel verwendet die Methoden `Range.setStart()` und [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd)
um den Inhalt eines Bereichs zu definieren. Der resultierende Bereich enthält die ersten
bis fünften Zeichen innerhalb eines Textknotens.

#### HTML

```html
<p id="content">0123456789</p>
<p id="log"></p>
```

#### JavaScript

```js
const element = document.getElementById("content");
const textNode = element.childNodes[0];
const range = document.createRange();
range.setStart(textNode, 0); // Start at first character
range.setEnd(textNode, 5); // End at fifth character
document.getElementById("log").textContent = range;
```

#### Ergebnis

{{EmbedLiveSample("Get_characters_from_a_text_node", 700, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das Index der DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model)
