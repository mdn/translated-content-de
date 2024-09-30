---
title: "ElementInternals: ariaMultiLine-Eigenschaft"
short-title: ariaMultiLine
slug: Web/API/ElementInternals/ariaMultiLine
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaMultiLine`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)-Attributs wider, das angibt, ob ein Textfeld mehrere Zeilen an Eingaben akzeptiert oder nur eine einzelne Zeile.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Dies ist ein mehrzeiliges Textfeld.
- `"false"`
  - : Dies ist ein einzeiliges Textfeld.

## Beispiele

In diesem Beispiel wird der Wert von `ariaMultiLine` auf "true" gesetzt.

```js
this.internals_.ariaMultiLine = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Rolle des Textfeldes](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
