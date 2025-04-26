---
title: "ElementInternals: ariaReadOnly-Eigenschaft"
short-title: ariaReadOnly
slug: Web/API/ElementInternals/ariaReadOnly
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaReadOnly`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attributs wider, welches angibt, dass das Element nicht bearbeitet, aber dennoch bedient werden kann.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, jedoch wird sichergestellt, dass die Standardsemantik beibehalten wird, falls der Autor diese Attribute entfernt oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Der Benutzer kann den Wert des Elements nicht ändern.
- `"false"`
  - : Der Benutzer kann den Wert des Elements festlegen.

## Beispiele

In diesem Beispiel wird der Wert von `ariaReadOnly` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaReadonly = "true";
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
