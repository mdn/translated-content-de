---
title: "Element: ariaValueMax-Eigenschaft"
short-title: ariaValueMax
slug: Web/API/Element/ariaValueMax
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaValueMax`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attributs wider, das den maximal zulässigen Wert für ein Bereichs-Widget definiert.

## Wert

Ein String, der eine Zahl enthält.

## Beispiele

In diesem Beispiel wird das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut auf dem Element mit der ID `slider` auf "7" gesetzt. Mit `ariaValueMax` aktualisieren wir den Wert auf "6".

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
