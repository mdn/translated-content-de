---
title: "CSSStyleDeclaration: length-Eigenschaft"
short-title: length
slug: Web/API/CSSStyleDeclaration/length
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte Eigenschaft gibt eine Ganzzahl zurück, die die Anzahl der Stil-Deklarationen in diesem CSS-Deklarationsblock darstellt.

## Wert

Eine Ganzzahl, die die Anzahl der Stile angibt, die explizit am Elternteil der Instanz festgelegt wurden.

## Beispiele

Das folgende Beispiel ermittelt die Anzahl der explizit festgelegten Stile des folgenden HTML-Elements:

```html
<div
  id="div1"
  style="margin: 0 10px; background-color: #CA1; font-family: monospace"></div>
```

JavaScript-Code:

```js
const myDiv = document.getElementById("div1");
const divStyle = myDiv.style;
const len = divStyle.length; // 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
