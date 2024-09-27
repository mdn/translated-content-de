---
title: "ElementInternals: ariaHidden-Eigenschaft"
short-title: ariaHidden
slug: Web/API/ElementInternals/ariaHidden
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaHidden`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attributs wider, welches anzeigt, ob das Element für eine Accessibility-API zugänglich ist.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor festgelegte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, sollte der Autor diese Attribute löschen oder sie gar nicht erst hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist vor der Accessibility-API verborgen.
- `"false"`
  - : Das Element ist der Accessibility-API so zugänglich, als ob es gerendert wäre.
- `"undefined"`
  - : Der verborgene Zustand des Elements wird vom User Agent bestimmt, basierend darauf, ob es gerendert wird.

## Beispiele

In diesem Beispiel wird der Wert von `ariaHidden` auf "true" gesetzt.

```js
this.internals_.ariaHidden = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
