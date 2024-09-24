---
title: "ElementInternals: ariaPressed-Eigenschaft"
short-title: ariaPressed
slug: Web/API/ElementInternals/ariaPressed
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaPressed`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)-Attributs wider, das den aktuellen "gedrückt"-Status von Umschaltknöpfen angibt.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, die Standardsemantik eines benutzerdefinierten Elements zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist gedrückt.
- `"false"`
  - : Das Element unterstützt das Drücken, ist aber derzeit nicht gedrückt.
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [ARIA: Rolle des Buttons](/de/docs/Web/Accessibility/ARIA/Roles/button_role)
