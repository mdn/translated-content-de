---
title: "Element: ariaLabel-Eigenschaft"
short-title: ariaLabel
slug: Web/API/Element/ariaLabel
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaLabel`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs wider, das einen String-Wert definiert, der das aktuelle Element bezeichnet.

## Wert

Ein String oder `null`.

## Beispiele

In diesem Beispiel wird das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut des Elements mit der ID `close-button` auf "Close" gesetzt. Mithilfe von `ariaLabel` aktualisieren wir den Wert auf "Close dialog".

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
