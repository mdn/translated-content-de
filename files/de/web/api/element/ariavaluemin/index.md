---
title: "Element: ariaValueMin-Eigenschaft"
short-title: ariaValueMin
slug: Web/API/Element/ariaValueMin
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaValueMin`**-Eigenschaft des {{domxref("Element")}}-Interfaces spiegelt den Wert des [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attributs wider, das den minimal zulässigen Wert für ein Bereichs-Widget definiert.

## Wert

Ein String, der eine Zahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-valuemin`-Attribut des Elements mit der ID `slider` auf "1" gesetzt. Mithilfe von `ariaValueMin` aktualisieren wir den Wert auf "2".

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
console.log(el.ariaValueMin); // 1
el.ariaValueMin = "2";
console.log(el.ariaValueMin); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
