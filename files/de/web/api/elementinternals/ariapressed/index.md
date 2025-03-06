---
title: "ElementInternals: ariaPressed-Eigenschaft"
short-title: ariaPressed
slug: Web/API/ElementInternals/ariaPressed
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaPressed`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attributs wider, das den aktuellen "gedrückten" Zustand von Umschaltknöpfen anzeigt.

> [!NOTE]
> Das Setzen von Aria-Attributen auf `ElementInternals` ermöglicht das Definieren von Standardsemantiken auf einem benutzerdefinierten Element. Diese können durch vom Autor definierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist gedrückt.
- `"false"`
  - : Das Element unterstützt das Drücken, ist aber momentan nicht gedrückt.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für einen dreistufigen Umschaltknopf an.
- `"undefined"`
  - : Das Element unterstützt das Drücken nicht.

## Beispiele

In diesem Beispiel wird der Wert von `ariaPressed` auf "true" gesetzt.

```js
this.internals_.ariaPressed = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: button role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
