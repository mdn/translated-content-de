---
title: "ElementInternals: ariaPosInSet-Eigenschaft"
short-title: ariaPosInSet
slug: Web/API/ElementInternals/ariaPosInSet
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaPosInSet`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)-Attributs wider, welches die Nummer oder Position eines Elements in der aktuellen Menge von Listenelementen oder Baumelementen definiert.

> [!NOTE]
> Das Setzen von `aria`-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantik auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie in der [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaPosInSet` auf "2" gesetzt.

```js
this.internals_.ariaPosInSet = "2";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
