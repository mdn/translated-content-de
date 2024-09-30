---
title: "ElementInternals: ariaMultiSelectable-Eigenschaft"
short-title: ariaMultiSelectable
slug: Web/API/ElementInternals/ariaMultiSelectable
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaMultiSelectable`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)-Attributs wider, das angibt, dass der Benutzer mehr als einen Eintrag aus den aktuell auswählbaren Nachkommen auswählen kann.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model erklärt](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Es können mehrere Elemente gleichzeitig ausgewählt werden.
- `"false"`
  - : Es kann nur ein Element ausgewählt werden.

## Beispiele

In diesem Beispiel wird der Wert von `ariaMultiSelectable` auf "true" gesetzt.

```js
this.internals_.ariaMultiSelectable = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: listbox-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
