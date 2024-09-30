---
title: "ElementInternals: ariaPressed-Eigenschaft"
short-title: ariaPressed
slug: Web/API/ElementInternals/ariaPressed
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaPressed`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)-Attributs wider, das den aktuellen "gedrückten" Zustand von Umschaltschaltflächen anzeigt.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor festgelegte Attribute überschrieben werden. Stellen Sie jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist gedrückt.
- `"false"`
  - : Das Element unterstützt den gedrückten Zustand, ist aber derzeit nicht gedrückt.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für eine Tri-State-Umschaltschaltfläche an.
- `"undefined"`
  - : Das Element unterstützt den gedrückten Zustand nicht.

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

- [ARIA: Schaltflächenrolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role)
