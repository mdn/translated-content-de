---
title: "CSSStyleDeclaration: length-Eigenschaft"
short-title: length
slug: Web/API/CSSStyleDeclaration/length
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte Eigenschaft gibt eine Ganzzahl zurück, die die Anzahl der Stil-Deklarationen in diesem CSS-Deklarationsblock darstellt.

## Wert

Eine Ganzzahl, die die Anzahl der Stile angibt, die explizit auf dem übergeordneten Element der Instanz gesetzt sind.

## Beispiele

Das folgende Beispiel ermittelt die Anzahl der explizit gesetzten Stile auf dem folgenden HTML-Element:

```html
<div
  id="div1"
  style="margin: 0 10px; background-color: #ccaa11; font-family: monospace"></div>
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
