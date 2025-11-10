---
title: "Element: ariaDescription-Eigenschaft"
short-title: ariaDescription
slug: Web/API/Element/ariaDescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaDescription`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attributs wider, das einen Zeichenfolgenwert definiert, der das aktuelle Element beschreibt oder kommentiert.

## Wert

Eine Zeichenkette.

## Beispiele

In diesem Beispiel wird das `aria-description`-Attribut des Elements mit der ID `close-button` auf die Zeichenkette "A longer description of the function of this element" gesetzt. Mit `ariaDescription` können wir den Wert aktualisieren.

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
