---
title: "ElementInternals: ariaValueText-Eigenschaft"
short-title: ariaValueText
slug: Web/API/ElementInternals/ariaValueText
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaValueText`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attributs wider, das den lesbaren Text als Alternative zu aria-valuenow für ein Bereichs-Widget definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, die Standardsemantik für ein benutzerdefiniertes Element zu definieren. Diese können von benutzerdefinierten Attributen überschrieben werden, stellen jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaValueText` auf "Sunday" gesetzt.

```js
this.internals_.ariaValueText = "Sunday";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
