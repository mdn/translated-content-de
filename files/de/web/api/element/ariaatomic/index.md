---
title: "Element: ariaAtomic-Eigenschaft"
short-title: ariaAtomic
slug: Web/API/Element/ariaAtomic
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaAtomic`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Attributs wider, welches angibt, ob unterstützende Technologien die gesamte oder nur Teile der veränderten Region basierend auf den Änderungsbenachrichtigungen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attribut definiert sind, präsentieren werden.

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Unterstützende Technologien werden nur den oder die geänderten Knoten präsentieren.
- `"true"`
  - : Unterstützende Technologien werden die gesamte veränderte Region als Ganzes präsentieren, einschließlich des vom Autor definierten Labels, falls eines existiert.

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
