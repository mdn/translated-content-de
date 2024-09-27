---
title: "ElementInternals: ariaValueText-Eigenschaft"
short-title: ariaValueText
slug: Web/API/ElementInternals/ariaValueText
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`ariaValueText`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attributs wider, das den menschenlesbaren Text als Alternative zu aria-valuenow für ein Bereichs-Widget definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder es versäumt, sie hinzuzufügen. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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
