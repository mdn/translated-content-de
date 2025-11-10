---
title: "ElementInternals: ariaMultiLine-Eigenschaft"
short-title: ariaMultiLine
slug: Web/API/ElementInternals/ariaMultiLine
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaMultiLine`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)-Attributs wider, welches angibt, ob ein Textfeld mehrere Zeilen Eingabe oder nur eine einzelne Zeile akzeptiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, die standardmäßigen Semantiken eines benutzerdefinierten Elements zu definieren. Diese können durch attributbestimmte Definitionen überschrieben werden, aber stellen Sie sicher, dass die Standardsemantiken beibehalten werden, sollte der Autor diese Attribute löschen oder gar nicht hinzufügen. Für weitere Informationen siehe das [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Dies ist ein mehrzeiliges Textfeld.
- `"false"`
  - : Dies ist ein einzeiliges Textfeld.

## Beispiele

In diesem Beispiel wird der Wert von `ariaMultiLine` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaMultiLine = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: textbox-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
