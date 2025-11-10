---
title: "ElementInternals: ariaSelected-Eigenschaft"
short-title: ariaSelected
slug: Web/API/ElementInternals/ariaSelected
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaSelected`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attributs wider, das den aktuellen "selektierten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerspezifische Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ausgewählt.
- `"false"`
  - : Das Element ist nicht ausgewählt.
- `"undefined"`
  - : Das Element ist nicht

## Beispiele

In diesem Beispiel wird der Wert von `ariaSelected` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaSelected = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: tab-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
