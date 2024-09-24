---
title: "ElementInternals: ariaMultiSelectable-Eigenschaft"
short-title: ariaMultiSelectable
slug: Web/API/ElementInternals/ariaMultiSelectable
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaMultiSelectable`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)-Attributs wider, welches angibt, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachkommen auswählen kann.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantik auf einem benutzerdefinierten Element. Diese können durch benutzerdefinierte Attribute überschrieben werden. Es wird jedoch sichergestellt, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Mehr als ein Element kann zeitgleich ausgewählt werden.
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

- [ARIA: listbox role](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
