---
title: "Element: ariaAtomic-Eigenschaft"
short-title: ariaAtomic
slug: Web/API/Element/ariaAtomic
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaAtomic`**-Eigenschaft des {{domxref("Element")}}-Interfaces spiegelt den Wert des [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Attributs wider, das angibt, ob unterstützende Technologien den gesamten oder nur Teile des geänderten Bereichs präsentieren werden, basierend auf den durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attribut definierten Änderungsbenachrichtigungen.

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Unterstützende Technologien präsentieren nur den oder die geänderten Knoten.
- `"true"`
  - : Unterstützende Technologien präsentieren den gesamten geänderten Bereich als Ganzes, einschließlich des vom Autor definierten Labels, falls vorhanden.

## Beispiele

In diesem Beispiel wird das `aria-atomic`-Attribut auf dem Element mit der ID `"clock"` auf "true" gesetzt. Mithilfe von `ariaAtomic` aktualisieren wir den Wert auf "false".

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
