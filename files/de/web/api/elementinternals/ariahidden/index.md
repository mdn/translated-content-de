---
title: "ElementInternals: ariaHidden-Eigenschaft"
short-title: ariaHidden
slug: Web/API/ElementInternals/ariaHidden
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaHidden`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attributs wider, welches angibt, ob das Element einer Zugänglichkeits-API zugänglich ist.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` erlaubt es, die Standardsemantik bei einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist vor der Zugänglichkeits-API verborgen.
- `"false"`
  - : Das Element ist der Zugänglichkeits-API zugänglich, als ob es gerendert wäre.
- `"undefined"`
  - : Der verborgene Zustand des Elements wird vom Benutzeragenten bestimmt, basierend darauf, ob es gerendert wird.

## Beispiele

In diesem Beispiel wird der Wert von `ariaHidden` auf "true" gesetzt.

```js
this.internals_.ariaHidden = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
