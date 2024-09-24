---
title: "ElementInternals: ariaHidden-Eigenschaft"
short-title: ariaHidden
slug: Web/API/ElementInternals/ariaHidden
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaHidden`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attributs wider, welches angibt, ob das Element für eine Zugänglichkeits-API zugänglich ist.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können von autorendefinierten Attributen überschrieben werden, aber es wird sichergestellt, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist vor der Zugänglichkeits-API verborgen.
- `"false"`
  - : Das Element ist der Zugänglichkeits-API so ausgesetzt, als ob es gerendert würde.
- `"undefined"`
  - : Der verborgene Zustand des Elements wird vom User Agent basierend darauf bestimmt, ob es gerendert wird.

## Beispiele

In diesem Beispiel wird der Wert von `ariaHidden` auf "true" gesetzt.

```js
this.internals_.ariaHidden = "true";
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
