---
title: "ElementInternals: ariaChecked-Eigenschaft"
short-title: ariaChecked
slug: Web/API/ElementInternals/ariaChecked
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaChecked`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attributs wider, welches den aktuellen "ausgewählten" Zustand von Kontrollkästchen, Radioknöpfen und anderen Widgets mit einem auswählbaren Zustand angibt.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, aber es wird sichergestellt, dass Standardsemantiken erhalten bleiben sollten, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ausgewählt.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für ein Drei-Zustands-Kontrollkästchen oder Menüpunkt-Kontrollkästchen an.
- `"false"`
  - : Das Element unterstützt das Auswählen, ist aber derzeit nicht ausgewählt.
- `"undefined"`
  - : Das Element unterstützt das Auswählen nicht.

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

- [ARIA: Rolle des Kontrollkästchens](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
