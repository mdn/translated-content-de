---
title: "ElementInternals: ariaChecked-Eigenschaft"
short-title: ariaChecked
slug: Web/API/ElementInternals/ariaChecked
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaChecked`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attributs wider, welches den aktuellen "Checked"-Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets, die einen Checked-Zustand haben, angibt.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, in einem benutzerdefinierten Element standardmäßige Semantik zu definieren. Diese können von Autor-definierten Attributen überschrieben werden, stellen aber sicher, dass die Standardsemantik beibehalten wird, sollte der Autor diese Attribute löschen oder sie überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist aktiviert.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für ein Drei-Zustand-Kontrollkästchen oder Menüelementkontrollkästchen an.
- `"false"`
  - : Das Element unterstützt das Aktiviert-Sein, ist aber derzeit nicht aktiviert.
- `"undefined"`
  - : Das Element unterstützt das Aktiviert-Sein nicht.

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

- [ARIA: Rolle des Kontrollkästchens](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
