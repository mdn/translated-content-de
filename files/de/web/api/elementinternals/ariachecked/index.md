---
title: "ElementInternals: ariaChecked-Eigenschaft"
short-title: ariaChecked
slug: Web/API/ElementInternals/ariaChecked
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaChecked`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attributs wider, welches den aktuellen "geprüften" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets, die einen geprüften Zustand haben, anzeigt.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` erlaubt es, die Standardsemantik eines benutzerdefinierten Elements zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik beibehalten wird, sollte der Autor diese Attribute löschen oder überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist aktiviert.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für ein Drei-Zustand-Kontrollkästchen oder Menüelement-Kontrollkästchen an.
- `"false"`
  - : Das Element unterstützt das aktiviert sein, ist aber derzeit nicht aktiviert.
- `"undefined"`
  - : Das Element unterstützt das aktiviert sein nicht.

## Beispiele

In diesem Beispiel wird der Wert von `ariaChecked` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaChecked = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Rolle des Kontrollkästchens](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
