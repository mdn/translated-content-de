---
title: "ElementInternals: ariaDisabled-Eigenschaft"
short-title: ariaDisabled
slug: Web/API/ElementInternals/ariaDisabled
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaDisabled`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attributs wider, welches anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedient werden kann.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können von den Autoren durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für mehr Informationen siehe den [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element und alle fokussierbaren Nachkommen sind deaktiviert, aber wahrnehmbar, und ihre Werte können vom Benutzer nicht geändert werden.
- `"false"`
  - : Das Element ist aktiviert.

## Beispiele

In diesem Beispiel wird der Wert von `ariaDisabled` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaDisabled = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
