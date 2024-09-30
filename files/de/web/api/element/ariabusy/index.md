---
title: "Element: ariaBusy-Eigenschaft"
short-title: ariaBusy
slug: Web/API/Element/ariaBusy
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaBusy`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attributes wider, das angibt, ob ein Element gerade geändert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Änderungen abgeschlossen sind, bevor sie dem Benutzer präsentiert werden.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element wird aktualisiert.
- `"false"`
  - : Es werden keine weiteren Aktualisierungen für das Element erwartet.

## Beispiele

In diesem Beispiel wird das `aria-busy`-Attribut des Elements mit der ID `clock` auf "false" gesetzt. Mithilfe von `ariaBusy` aktualisieren wir den Wert auf "true".

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
