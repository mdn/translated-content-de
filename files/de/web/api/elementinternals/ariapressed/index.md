---
title: "ElementInternals: ariaPressed-Eigenschaft"
short-title: ariaPressed
slug: Web/API/ElementInternals/ariaPressed
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaPressed`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)-Attributs wider, das den aktuellen "gedrückten" Zustand von Umschaltknöpfen angibt.

> [!NOTE]
> Das Festlegen von ARIA-Attributen auf `ElementInternals` ermöglicht es, standardmäßige Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können von vom Autor definierten Attributen überschrieben werden, stellen jedoch sicher, dass die standardmäßigen Semantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist gedrückt.
- `"false"`
  - : Das Element unterstützt das Drücken, ist derzeit jedoch nicht gedrückt.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für einen Dreistufen-Umschaltknopf an.
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

- [ARIA: button role](/de/docs/Web/Accessibility/ARIA/Roles/button_role)
