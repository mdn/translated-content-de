---
title: "ElementInternals: ariaModal-Eigenschaft"
short-title: ariaModal
slug: Web/API/ElementInternals/ariaModal
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaModal`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)-Attributs wider, das angibt, ob ein Element beim Anzeigen modal ist.

> [!NOTE]
> Das Setzen von Aria-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie in der [Accessibility Object Model Erklärungsseite](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist modal.
- `"false"`
  - : Das Element ist nicht modal.

## Beispiele

In diesem Beispiel wird der Wert von `ariaModal` auf "true" gesetzt.

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaModal = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Dialogrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
