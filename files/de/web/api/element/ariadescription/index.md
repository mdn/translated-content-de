---
title: "Element: ariaDescription-Eigenschaft"
short-title: ariaDescription
slug: Web/API/Element/ariaDescription
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaDescription`**-Eigenschaft des {{domxref("Element")}}-Interfaces gibt den Wert des [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)-Attributs wieder, welches eine Zeichenfolge definiert, die das aktuelle Element beschreibt oder annotiert.

## Wert

Eine Zeichenfolge.

## Beispiele

In diesem Beispiel wird das `aria-description`-Attribut des Elements mit der ID `close-button` auf die Zeichenfolge "A longer description of the function of this element" gesetzt. Mit `ariaDescription` können wir den Wert aktualisieren.

```html
<button
  aria-label="Close"
  aria-description="A longer description of the function of this element"
  id="close-button">
  X
</button>
```

```js
let el = document.getElementById("close-button");
console.log(el.ariaDescription); // "A longer description of the function of this element"
el.ariaDescription = "A different description";
console.log(el.ariaDescription); // "A different description"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}