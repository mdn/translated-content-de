---
title: "ElementInternals: ariaHidden-Eigenschaft"
short-title: ariaHidden
slug: Web/API/ElementInternals/ariaHidden
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaHidden`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attributs wider, welches anzeigt, ob das Element einer Zugänglichkeits-API zugänglich ist.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken auf einem benutzerdefinierten Element. Diese können von benutzerdefinierten Attributen überschrieben werden, aber es wird sichergestellt, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie gar nicht hinzufügt. Für weitere Informationen siehe die [Accessibility Object Model Erklärung](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist von der Zugänglichkeits-API versteckt.
- `"false"`
  - : Das Element ist der Zugänglichkeits-API zugänglich, als ob es gerendert wäre.
- `"undefined"`
  - : Der versteckte Zustand des Elements wird vom Benutzeragenten bestimmt, basierend darauf, ob es gerendert wird.

## Beispiele

In diesem Beispiel wird der Wert von `ariaHidden` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaHidden = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
