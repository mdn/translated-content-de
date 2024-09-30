---
title: "ElementInternals: ariaChecked-Eigenschaft"
short-title: ariaChecked
slug: Web/API/ElementInternals/ariaChecked
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaChecked`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attributs wider, welches den aktuellen "checked"-Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets angibt, die einen geprüften Zustand haben.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik beibehalten wird, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ausgewählt.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für ein Drei-Zustand-Kontrollkästchen oder ein Menüpunktkontrollkästchen an.
- `"false"`
  - : Das Element unterstützt das ausgewählt sein, ist derzeit jedoch nicht ausgewählt.
- `"undefined"`
  - : Das Element unterstützt das ausgewählt sein nicht.

## Beispiele

In diesem Beispiel wird der Wert von `ariaChecked` auf "true" gesetzt.

```js
this.internals_.ariaChecked = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: checkbox role](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
