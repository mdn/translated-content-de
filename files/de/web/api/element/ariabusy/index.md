---
title: "Element: ariaBusy-Eigenschaft"
short-title: ariaBusy
slug: Web/API/Element/ariaBusy
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaBusy`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attributs wider, das angibt, ob ein Element gerade verändert wird. Assistive Technologien könnten warten, bis die Änderungen abgeschlossen sind, bevor sie diese dem Benutzer zugänglich machen.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element wird aktualisiert.
- `"false"`
  - : Es werden keine Aktualisierungen für das Element erwartet.

## Beispiele

In diesem Beispiel wird das `aria-busy`-Attribut des Elements mit der ID `clock` auf "false" gesetzt. Mit `ariaBusy` aktualisieren wir den Wert auf "true".

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-busy="false"></div>
```

```js
let el = document.getElementById("clock");
console.log(el.ariaBusy); // false
el.ariaBusy = "true";
console.log(el.ariaBusy); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
