---
title: "Element: ariaValueMin-Eigenschaft"
short-title: ariaValueMin
slug: Web/API/Element/ariaValueMin
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaValueMin`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attributs wider, das den minimal erlaubten Wert für ein Bereichs-Widget definiert.

## Wert

Ein String, der eine Zahl enthält.

## Beispiele

In diesem Beispiel ist das `aria-valuemin`-Attribut auf dem Element mit der ID `slider` auf "1" gesetzt. Mit `ariaValueMin` aktualisieren wir den Wert auf "2".

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
