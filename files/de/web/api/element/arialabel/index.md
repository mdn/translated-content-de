---
title: "Element: ariaLabel-Eigenschaft"
short-title: ariaLabel
slug: Web/API/Element/ariaLabel
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaLabel`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs wider, das einen Zeichenfolgenwert definiert, der das aktuelle Element beschreibt.

## Wert

Eine Zeichenfolge oder `null`.

## Beispiele

In diesem Beispiel wird das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut des Elements mit der ID `close-button` auf "Close" gesetzt. Mithilfe von `ariaLabel` aktualisieren wir den Wert auf "Close dialog".

```html
<button aria-label="Close" id="close-button">X</button>
```

```js
let el = document.getElementById("close-button");
console.log(el.ariaLabel); // "Close"
el.ariaLabel = "Close dialog";
console.log(el.ariaLabel); // "Close dialog"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
