---
title: "ElementInternals: ariaMultiSelectable-Eigenschaft"
short-title: ariaMultiSelectable
slug: Web/API/ElementInternals/ariaMultiSelectable
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaMultiSelectable`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)-Attributs wider, das anzeigt, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachfahren auswählen kann.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` erlaubt es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, aber gewährleisten, dass die Standardsemantiken beibehalten werden, sollte der Autor diese Attribute löschen oder gar nicht hinzufügen. Weitere Informationen finden Sie in der [Accessibility Object Model Erklärung](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Mehr als ein Element kann gleichzeitig ausgewählt werden.
- `"false"`
  - : Es kann nur ein Element ausgewählt werden.

## Beispiele

In diesem Beispiel wird der Wert von `ariaMultiSelectable` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaMultiSelectable = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: listbox-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
