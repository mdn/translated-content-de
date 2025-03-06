---
title: "ElementInternals: ariaOrientation-Eigenschaft"
short-title: ariaOrientation
slug: Web/API/ElementInternals/ariaOrientation
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaOrientation`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals) Interfaces spiegelt den Wert des [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Attributs wider, das angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Erklärungsdokument zum Accessibility Object Model](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"horizontal"`
  - : Das Element ist horizontal.
- `"vertical"`
  - : Das Element ist vertikal.
- `"undefined"`
  - : Die Ausrichtung des Elements ist unbekannt.

## Beispiele

In diesem Beispiel wird der Wert von `ariaOrientation` auf "vertical" gesetzt.

```js
this.internals_.ariaOrientation = "vertical";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
