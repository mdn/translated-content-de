---
title: "ElementInternals: ariaDescription-Eigenschaft"
short-title: ariaDescription
slug: Web/API/ElementInternals/ariaDescription
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaDescription`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)-Attributs wider, welches eine Zeichenkette definiert, die das aktuelle Element beschreibt oder kommentiert.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken auf einem benutzerdefinierten Element. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Eine Zeichenkette.

## Beispiele

In diesem Beispiel wird der Wert von `ariaDescription` auf "A description of this widget" gesetzt.

```js
this.internals_.ariaDescription = "A description of this widget";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
