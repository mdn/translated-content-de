---
title: "ElementInternals: ariaDescription-Eigenschaft"
short-title: ariaDescription
slug: Web/API/ElementInternals/ariaDescription
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaDescription`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attributs wider, das einen string-Wert definiert, der das aktuelle Element beschreibt oder kommentiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik auf einem benutzerdefinierten Element festzulegen. Diese können von vom Autor definierten Attributen überschrieben werden, stellen aber sicher, dass die Standardsemantik beibehalten wird, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaDescription` auf "A description of this widget" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaDescription = "A description of this widget";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
