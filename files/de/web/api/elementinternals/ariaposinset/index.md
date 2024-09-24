---
title: "ElementInternals: ariaPosInSet-Eigenschaft"
short-title: ariaPosInSet
slug: Web/API/ElementInternals/ariaPosInSet
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaPosInSet`**-Eigenschaft des {{domxref("ElementInternals")}} Interfaces spiegelt den Wert des [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) Attributs wider, welches die Nummer oder Position eines Elements in der aktuellen Menge von Listenelementen („listitems“) oder Baumelementen („treeitems“) definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können von benutzerdefinierten Attributen überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaPosInSet` auf "2" gesetzt.

```js
this.internals_.ariaPosInSet = "2";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
