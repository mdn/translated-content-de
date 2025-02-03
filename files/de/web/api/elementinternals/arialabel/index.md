---
title: "ElementInternals: ariaLabel-Eigenschaft"
short-title: ariaLabel
slug: Web/API/ElementInternals/ariaLabel
l10n:
  sourceCommit: d88e47be3acdae5e12fe3bb08471ef2835472faf
---

{{APIRef("Web Components")}}

Die **`ariaLabel`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs wider, das einen String-Wert definiert, der das aktuelle Element beschreibt.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaLabel` auf "close" gesetzt.

```js
this.internals_.ariaLabel = "close";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
