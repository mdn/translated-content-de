---
title: "Element: ariaValueNow-Eigenschaft"
short-title: ariaValueNow
slug: Web/API/Element/ariaValueNow
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaValueNow`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle spiegelt den Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attributs wider, welches den aktuellen Wert für ein Bereichs-Widget definiert.

## Wert

Ein String, der eine Zahl enthält.

## Beispiele

In diesem Beispiel wird das [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attribut des Elements mit der ID `slider` auf "1" gesetzt. Mit `ariaValueNow` aktualisieren wir den Wert auf "2".

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
console.log(el.ariaValueNow); // 1
el.ariaValueNow = "2";
console.log(el.ariaValueNow); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
