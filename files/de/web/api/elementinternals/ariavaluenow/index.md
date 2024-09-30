---
title: "ElementInternals: ariaValueNow-Eigenschaft"
short-title: ariaValueNow
slug: Web/API/ElementInternals/ariaValueNow
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`ariaValueNow`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attributs wider, das den aktuellen Wert für ein Bereichs-Widget definiert.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, aber es wird sichergestellt, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaValueNow` auf "1" gesetzt.

```js
this.internals_.ariaValueNow = "1";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
