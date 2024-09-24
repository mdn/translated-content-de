---
title: "Range: getClientRects()-Methode"
short-title: getClientRects()
slug: Web/API/Range/getClientRects
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("DOM")}}

Die **`Range.getClientRects()`**-Methode gibt eine Liste von {{domxref("DOMRect")}}-Objekten zurück, die den von dem [Range](/de/docs/Web/API/Range) belegten Bildschirmbereich darstellen. Dies wird durch Aggregieren der Ergebnisse von Aufrufen von {{ domxref("Element.getClientRects()") }} für alle Elemente im Range erstellt.

## Syntax

```js-nolint
getClientRects()
```

### Parameter

Keine.

### Rückgabewert

Eine [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Sequenz von {{domxref("DOMRect")}}-Objekten.

## Beispiele

### Protokollieren der Größen ausgewählter Client-Rechtecke

#### HTML

```html
<div></div>
<pre id="output"></pre>
```

#### CSS

```css
div {
  height: 80px;
  width: 200px;
  background-color: blue;
}
```

#### JavaScript

```js
const range = document.createRange();
range.selectNode(document.querySelector("div"));
rectList = range.getClientRects();

const output = document.querySelector("#output");
for (const rect of rectList) {
  output.textContent = `${output.textContent}\n${rect.width}:${rect.height}`;
}
```

#### Ergebnis

{{EmbedLiveSample("Logging selected client rect sizes")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Range")}}
