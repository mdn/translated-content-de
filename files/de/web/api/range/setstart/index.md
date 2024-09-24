---
title: "Range: Methode setStart()"
short-title: setStart()
slug: Web/API/Range/setStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.setStart()`**-Methode setzt die Startposition eines
{{ domxref("Range") }}.

Wenn der `startNode` ein {{domxref("Node")}} vom Typ {{domxref("Text")}},
{{domxref("Comment")}} oder {{domxref("CDataSection")}} ist, dann ist `startOffset`
die Anzahl der Zeichen ab dem Anfang von `startNode`. Für andere `Node`-Typen ist
`startOffset` die Anzahl der Kindknoten ab dem Anfang des `startNode`.

Wenn der Startpunkt unterhalb (weiter unten im Dokument) des Endpunkts gesetzt wird,
ergibt sich ein zusammengeklappter Bereich, bei dem Start- und Endpunkte beide auf
die angegebene Startposition gesetzt werden.

## Syntax

```js-nolint
setStart(startNode, startOffset)
```

### Parameter

- `startNode`
  - : Der {{ domxref("Node") }}, bei dem der {{ domxref("Range") }} beginnen soll.
- `startOffset`
  - : Eine ganze Zahl größer oder gleich null, die die Verschiebung für den Anfang des
    {{ domxref("Range") }} vom Anfang von `startNode` darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Teil eines Elements hervorheben

Dieses Beispiel verwendet die Methoden `Range.setStart()` und {{domxref("Range.setEnd()")}}, um
einen Teil einer Adresse zu einem Bereich hinzuzufügen. Der ausgewählte Bereich wird dann mit
{{domxref("Range.surroundContents()")}} hervorgehoben.

Die Adresse enthält neun Knoten: fünf Textknoten und vier {{htmlElement("br")}}-Elemente.

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
<p>Knoten in der ursprünglichen Adresse:</p>
<ol id="log"></ol>
```

#### JavaScript

```js
const address = document.getElementById("address");
const log = document.getElementById("log");

// Protokolliere Informationen
address.childNodes.forEach((node) => {
  const li = document.createElement("li");
  li.textContent = `${node.nodeName}, ${node.nodeValue}`;
  log.appendChild(li);
});

// Straße und Stadt hervorheben
const startOffset = 2; // Beginnt beim dritten Knoten: 101 E. Main St.
const endOffset = 5; // Endet beim fünften Knoten: Dodge City, KS
const range = document.createRange();
range.setStart(address, startOffset);
range.setEnd(address, endOffset);

const mark = document.createElement("mark");
range.surroundContents(mark);
```

#### Ergebnis

{{EmbedLiveSample("Highlight_part_of_an_element", 700, 400)}}

### Zeichen aus einem Textknoten erhalten

Dieses Beispiel verwendet die Methoden `Range.setStart()` und {{domxref("Range.setEnd()")}}, um den Inhalt eines Bereichs zu definieren. Der resultierende Bereich enthält die Zeichen vom ersten bis zum fünften Zeichen innerhalb eines Textknotens.

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
range.setStart(textNode, 0); // Beginnt beim ersten Zeichen
range.setEnd(textNode, 5); // Endet beim fünften Zeichen
document.getElementById("log").textContent = range;
```

#### Ergebnis

{{EmbedLiveSample("Get_characters_from_a_text_node", 700, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-Schnittstellen-Übersicht](/de/docs/Web/API/Document_Object_Model)
