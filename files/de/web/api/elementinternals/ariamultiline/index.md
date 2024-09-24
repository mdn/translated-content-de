---
title: "ElementInternals: ariaMultiLine-Eigenschaft"
short-title: ariaMultiLine
slug: Web/API/ElementInternals/ariaMultiLine
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaMultiLine`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)-Attributs wider, welches angibt, ob ein Textfeld mehrere Zeilen Eingabe akzeptiert oder nur eine einzelne Zeile.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, die Standardsemantik auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik beibehalten wird, sollte der Autor diese Attribute löschen oder überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

- [ARIA: textbox-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
