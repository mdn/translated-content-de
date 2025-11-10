---
title: "ElementInternals: ariaOrientation-Eigenschaft"
short-title: ariaOrientation
slug: Web/API/ElementInternals/ariaOrientation
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaOrientation`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Attributs wider, welches angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erläuterung](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"horizontal"`
  - : Das Element ist horizontal.
- `"vertical"`
  - : Das Element ist vertikal.
- `"undefined"`
  - : Die Ausrichtung des Elements ist unbekannt.

## Beispiele

In diesem Beispiel wird der Wert von `ariaOrientation` auf "vertical" gesetzt.

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaOrientation = "vertical";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
