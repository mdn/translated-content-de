---
title: "ElementInternals: ariaSetSize-Eigenschaft"
short-title: ariaSetSize
slug: Web/API/ElementInternals/ariaSetSize
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`ariaSetSize`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)-Attributs wider, das die Anzahl der Elemente im aktuellen Satz von `listitem`- oder `treeitem`-Elementen definiert.

> [!NOTE]
> Durch das Setzen von ARIA-Attributen auf `ElementInternals` können standardmäßige Semantiken für ein benutzerdefiniertes Element definiert werden. Diese können durch vom Autor definierte Attribute überschrieben werden, aber es wird sichergestellt, dass die standardmäßigen Semantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

- [ARIA: Tab-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
