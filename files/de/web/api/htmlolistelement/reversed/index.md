---
title: "HTMLOListElement: reversed-Eigenschaft"
short-title: reversed
slug: Web/API/HTMLOListElement/reversed
l10n:
  sourceCommit: 23ad4d2736b06fcd07a102ea4719ecfe590c33f5
---

{{ApiRef("HTML DOM")}}

Die **`reversed`**-Eigenschaft der {{domxref("HTMLOListElement")}}-Schnittstelle gibt die Reihenfolge einer Liste an.

Sie spiegelt das [`reversed`](/de/docs/Web/HTML/Element/ol#reversed)-Attribut des {{HTMLElement("ol")}}-Elements wider.

## Wert

Ein `boolean`-Wert. Wenn `true`, gibt es an, dass die Liste eine absteigende Liste ist (..., 3, 2, 1).

## Beispiele

### HTML

```html
<ol id="order-list">
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

### JavaScript

```js
const olElement = document.querySelector("#order-list");
console.log(olElement.reversed); // Ausgabe: "false"
olElement.reversed = "true";
console.log(olElement.reversed); // Ausgabe: "true"
```

### Ergebnis

{{EmbedLiveSample("Examples", 400, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
