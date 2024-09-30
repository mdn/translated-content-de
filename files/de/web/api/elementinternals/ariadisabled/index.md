---
title: "ElementInternals: ariaDisabled-Eigenschaft"
short-title: ariaDisabled
slug: Web/API/ElementInternals/ariaDisabled
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaDisabled`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)-Attributs wider, das angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedienbar ist.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, die Standardsemantik für ein benutzerdefiniertes Element festzulegen. Diese können durch vom Autor definierte Attribute überschrieben werden, sorgen jedoch dafür, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element und alle fokussierbaren Nachkommen sind deaktiviert, aber wahrnehmbar, und ihre Werte können vom Benutzer nicht geändert werden.
- `"false"`
  - : Das Element ist aktiviert.

## Beispiele

In diesem Beispiel wird der Wert von `ariaDisabled` auf "true" gesetzt.

```js
this.internals_.ariaDisabled = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
