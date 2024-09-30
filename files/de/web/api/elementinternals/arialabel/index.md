---
title: "ElementInternals: ariaLabel-Eigenschaft"
short-title: ariaLabel
slug: Web/API/ElementInternals/ariaLabel
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}}

Die **`ariaLabel`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs wider, das einen String-Wert definiert, der das aktuelle Element beschriftet.

> [!NOTE]
> Durch das Setzen von aria-Attributen auf `ElementInternals` können Standardsemantiken auf einem benutzerdefinierten Element definiert werden. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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
