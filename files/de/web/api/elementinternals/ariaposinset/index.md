---
title: "ElementInternals: ariaPosInSet-Eigenschaft"
short-title: ariaPosInSet
slug: Web/API/ElementInternals/ariaPosInSet
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaPosInSet`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)-Attributs wider, welches die Nummer oder Position eines Elements in der aktuellen Gruppe von Listenpunkten oder Baumknoten definiert.

> [!NOTE]
> Das Setzen von `aria`-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik beibehalten wird, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Erklärer zum Accessibility Object Model](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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
