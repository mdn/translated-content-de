---
title: "Element: ariaValueMax-Eigenschaft"
short-title: ariaValueMax
slug: Web/API/Element/ariaValueMax
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaValueMax`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attributs wider, das den maximal zulässigen Wert für ein Bereichs-Widget definiert.

## Wert

Ein String, der eine Zahl enthält.

## Beispiele

In diesem Beispiel wird das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut auf dem Element mit der ID `slider` auf "7" gesetzt. Mit `ariaValueMax` aktualisieren wir den Wert auf "6".

```html
<div
  role="slider"
  aria-valuenow="1"
  aria-valuemin="1"
  aria-valuemax="7"
  aria-valuetext="Sunday"></div>
```

```js
let el = document.getElementById("slider");
console.log(el.ariaValueMax); // 7
el.ariaValueMax = "6";
console.log(el.ariaValueMax); // 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
