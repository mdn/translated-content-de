---
title: "ElementInternals: ariaPosInSet-Eigenschaft"
short-title: ariaPosInSet
slug: Web/API/ElementInternals/ariaPosInSet
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaPosInSet`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)-Attributs wider, das die Nummer oder Position eines Elements innerhalb der aktuellen Gruppe von Listeneinträgen oder Baumelementen definiert.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Benutzer diese Attribute löscht oder überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Erklärer des Accessibility Object Model](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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
