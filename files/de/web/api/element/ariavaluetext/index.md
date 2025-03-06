---
title: "Element: ariaValueText-Eigenschaft"
short-title: ariaValueText
slug: Web/API/Element/ariaValueText
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaValueText`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attributs wider, welches den menschenlesbaren Text als Alternative zu aria-valuenow für ein Bereichs-Widget definiert.

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird das `aria-valuetext`-Attribut des Elements mit der ID `slider` auf "Sunday" gesetzt, um einen menschenlesbaren Wert für den Bereich zu geben. Mit `ariaValueText` aktualisieren wir den Wert auf "Monday".

```html
<div
  id="slider"
  role="slider"
  aria-valuenow="1"
  aria-valuemin="1"
  aria-valuemax="7"
  aria-valuetext="Sunday"></div>
```

```js
let el = document.getElementById("slider");
console.log(el.ariaValueText); // Sunday
el.ariaValueText = "Monday";
console.log(el.ariaValueText); // Monday
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
