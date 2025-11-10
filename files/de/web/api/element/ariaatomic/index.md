---
title: "Element: ariaAtomic-Eigenschaft"
short-title: ariaAtomic
slug: Web/API/Element/ariaAtomic
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaAtomic`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Attributs wider, welches anzeigt, ob unterstützende Technologien den gesamten geänderten Bereich oder nur Teile davon basierend auf den Änderungsbenachrichtigungen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attribut definiert werden, präsentieren werden.

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Unterstützende Technologien präsentieren nur den oder die geänderten Knoten.
- `"true"`
  - : Unterstützende Technologien präsentieren den gesamten geänderten Bereich als Ganzes, einschließlich des vom Autor definierten Labels, falls vorhanden.

## Beispiele

In diesem Beispiel wird das `aria-atomic`-Attribut des Elements mit der ID `"clock"` auf "true" gesetzt. Mit der `ariaAtomic`-Eigenschaft aktualisieren wir den Wert auf "false".

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
