---
title: "CSSStyleDeclaration: length-Eigenschaft"
short-title: Länge
slug: Web/API/CSSStyleDeclaration/length
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte Eigenschaft gibt eine ganze Zahl zurück, die die Anzahl der Stil-Deklarationen in diesem CSS-Deklarationsblock darstellt.

## Wert

Eine ganze Zahl, die die Anzahl der explizit auf dem übergeordneten Element der Instanz gesetzten Stile angibt.

## Beispiele

Das folgende Beispiel ermittelt die Anzahl der explizit gesetzten Stile auf dem folgenden HTML-Element:

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
