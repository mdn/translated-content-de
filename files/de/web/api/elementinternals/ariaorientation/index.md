---
title: "ElementInternals: ariaOrientation-Eigenschaft"
short-title: ariaOrientation
slug: Web/API/ElementInternals/ariaOrientation
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaOrientation`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Attributs wider, welches angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.

> [!NOTE]
> Das Festlegen von `aria`-Attributen auf `ElementInternals` ermöglicht es, standardmäßige Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, jedoch wird sichergestellt, dass die standardmäßigen Semantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"horizontal"`
  - : Das Element ist horizontal.
- `"vertical"`
  - : Das Element ist vertikal.
- `"undefined"`
  - : Die Ausrichtung des Elements ist unbekannt.

## Beispiele

In diesem Beispiel wird der Wert von `ariaOrientation` auf "vertical" gesetzt.

```js
this.internals_.ariaOrientation = "vertical";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
