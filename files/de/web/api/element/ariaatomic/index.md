---
title: "Element: ariaAtomic-Eigenschaft"
short-title: ariaAtomic
slug: Web/API/Element/ariaAtomic
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaAtomic`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Attributs wider. Dieses Attribut gibt an, ob unterstützende Technologien entweder alle oder nur Teile des geänderten Bereichs präsentieren werden, basierend auf den Änderungsbenachrichtigungen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attribut definiert sind.

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Unterstützende Technologien werden nur die geänderten Knoten präsentieren.
- `"true"`
  - : Unterstützende Technologien werden den gesamten geänderten Bereich als Ganzes präsentieren, einschließlich des vom Autor festgelegten Labels, falls vorhanden.

## Beispiele

In diesem Beispiel wird das `aria-atomic`-Attribut des Elements mit der ID `"clock"` auf "true" gesetzt. Mit `ariaAtomic` aktualisieren wir den Wert auf "false".

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true"></div>
```

```js
let el = document.getElementById("clock");
console.log(el.ariaAtomic); // true
el.ariaAtomic = "false";
console.log(el.ariaAtomic); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
