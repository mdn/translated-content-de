---
title: "ElementInternals: ariaSetSize-Eigenschaft"
short-title: ariaSetSize
slug: Web/API/ElementInternals/ariaSetSize
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaSetSize`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)-Attributs wider, welches die Anzahl der Elemente in der aktuellen Gruppe von Listenelementen oder Baumelementen definiert.

> [!NOTE]
> Das Setzen von Aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch von Autoren definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, sollte der Autor diese Attribute löschen oder sie gar nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaSetSize` auf "4" gesetzt.

```js
this.internals_.ariaSetSize = "4";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: tab role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
