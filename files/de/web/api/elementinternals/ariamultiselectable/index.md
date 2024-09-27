---
title: "ElementInternals: ariaMultiSelectable-Eigenschaft"
short-title: ariaMultiSelectable
slug: Web/API/ElementInternals/ariaMultiSelectable
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaMultiSelectable`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)-Attributs wider, welches angibt, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachfahren auswählen kann.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, standardmäßige Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die standardmäßigen Semantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Mehr als ein Element kann gleichzeitig ausgewählt werden.
- `"false"`
  - : Nur ein Element kann ausgewählt werden.

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

- [ARIA: listbox role](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
