---
title: "Element: ariaValueMax-Eigenschaft"
short-title: ariaValueMax
slug: Web/API/Element/ariaValueMax
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaValueMax`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt den Wert des [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attributs wieder, welches den maximal zulässigen Wert für ein Bereichs-Widget definiert.

## Wert

Ein String, der eine Zahl enthält.

## Beispiele

In diesem Beispiel ist das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut des Elements mit der ID `slider` auf "7" gesetzt. Mithilfe von `ariaValueMax` wird der Wert auf "6" aktualisiert.

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
