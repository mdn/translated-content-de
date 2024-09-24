---
title: "ElementInternals: ariaChecked-Eigenschaft"
short-title: ariaChecked
slug: Web/API/ElementInternals/ariaChecked
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaChecked`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attributs wider, das den aktuellen "ausgewählten" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets anzeigt, die einen ausgewählten Zustand haben.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` erlaubt es, Standardsemantiken in einem benutzerdefinierten Element zu definieren. Diese können durch vom Entwickler festgelegte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Entwickler diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Eine Zeichenkette mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ausgewählt.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für ein Drei-Zustand-Kontrollkästchen oder MenuItemCheckbox an.
- `"false"`
  - : Das Element kann ausgewählt werden, ist aber derzeit nicht ausgewählt.
- `"undefined"`
  - : Das Element unterstützt das Auswählen nicht.

## Beispiele

In diesem Beispiel wird der Wert von `ariaChecked` auf "true" gesetzt.

```js
this.internals_.ariaChecked = "true";
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [ARIA: checkbox role](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
