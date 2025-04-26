---
title: "ElementInternals: ariaExpanded-Eigenschaft"
short-title: ariaExpanded
slug: Web/API/ElementInternals/ariaExpanded
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaExpanded`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attributs wider, welches angibt, ob ein Gruppierungselement, das durch dieses Element besessen oder kontrolliert wird, erweitert oder eingeklappt ist.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` erlaubt es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor festgelegte Attribute überschrieben werden, aber sie stellen sicher, dass Standardsemantiken erhalten bleiben, falls der Autor diese Attribute entfernt oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe die [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Gruppierungselement, das dieses Element besitzt oder kontrolliert, ist erweitert.
- `"false"`
  - : Das Gruppierungselement, das dieses Element besitzt oder kontrolliert, ist eingeklappt.
- `"undefined"`
  - : Das Element besitzt oder kontrolliert kein expandierbares Gruppierungselement.

## Beispiele

In diesem Beispiel wird der Wert von `ariaExpanded` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaInvalid = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
