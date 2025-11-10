---
title: "ElementInternals: ariaBusy-Eigenschaft"
short-title: ariaBusy
slug: Web/API/ElementInternals/ariaBusy
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaBusy`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attributs wider, das angibt, ob ein Element gerade modifiziert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Änderungen abgeschlossen sind, bevor sie dem Benutzer präsentiert werden.

> [!NOTE]
> Das Setzen von `aria`-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken bestehen bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element wird aktualisiert.
- `"false"`
  - : Es sind keine erwarteten Aktualisierungen für das Element.

## Beispiele

In diesem Beispiel wird der Wert von `ariaBusy` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaBusy = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
