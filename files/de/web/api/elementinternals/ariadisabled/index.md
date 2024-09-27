---
title: "ElementInternals: ariaDisabled-Eigenschaft"
short-title: ariaDisabled
slug: Web/API/ElementInternals/ariaDisabled
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaDisabled`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)-Attributs wider, welches anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedient werden kann.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` erlaubt die Definition standardmäßiger Semantik auf einem benutzerdefinierten Element. Diese können von autordefinierten Attributen überschrieben werden, stellen aber sicher, dass die Standards, bei Löschung dieser Attribute durch den Autor oder bei dessen Unterlassung, erhalten bleiben. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungstext](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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
