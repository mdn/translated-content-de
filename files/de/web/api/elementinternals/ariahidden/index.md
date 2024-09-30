---
title: "ElementInternals: ariaHidden-Eigenschaft"
short-title: ariaHidden
slug: Web/API/ElementInternals/ariaHidden
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaHidden`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attributs wider, welches angibt, ob das Element einer Zugänglichkeits-API ausgesetzt ist.

> [!NOTE]
> Das Setzen von `aria`-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist vor der Zugänglichkeits-API verborgen.
- `"false"`
  - : Das Element ist der Zugänglichkeits-API ausgesetzt, als ob es gerendert wäre.
- `"undefined"`
  - : Der verborgene Zustand des Elements wird vom User Agent bestimmt, basierend darauf, ob es gerendert ist.

## Beispiele

In diesem Beispiel wird der Wert von `ariaHidden` auf "true" gesetzt.

```js
this.internals_.ariaHidden = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
