---
title: "HTMLOListElement: reversed-Eigenschaft"
short-title: reversed
slug: Web/API/HTMLOListElement/reversed
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`reversed`**-Eigenschaft des [`HTMLOListElement`](/de/docs/Web/API/HTMLOListElement)-Interfaces gibt die Reihenfolge einer Liste an.

Sie spiegelt das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed)-Attribut des {{HTMLElement("ol")}}-Elements wider.

## Wert

Ein `boolean`-Wert. Wenn `true`, zeigt dies an, dass die Liste eine absteigende Liste ist (..., 3, 2, 1).

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
console.log(olElement.reversed); // Output: "false"
olElement.reversed = "true";
console.log(olElement.reversed); // Output: "true"
```

### Ergebnis

{{EmbedLiveSample("Examples", 400, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
