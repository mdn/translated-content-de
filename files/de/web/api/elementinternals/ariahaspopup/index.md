---
title: "ElementInternals: ariaHasPopup-Eigenschaft"
short-title: ariaHasPopup
slug: Web/API/ElementInternals/ariaHasPopup
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaHasPopup`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Attributs wider, welches die Verfügbarkeit und den Typ eines interaktiven Popup-Elements, wie z.B. Menü oder Dialog, angibt, das von einem Element ausgelöst werden kann.

> [!NOTE]
> Durch das Setzen von `aria`-Attributen auf `ElementInternals` können Standardsemantiken auf einem benutzerdefinierten Element definiert werden. Diese können durch benutzerspezifizierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Benutzer diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Das Element hat kein Popup.
- `"true"`
  - : Das Element hat ein Popup, das ein Menü ist.
- `"menu"`
  - : Das Element hat ein Popup, das ein Menü ist.
- `"listbox"`
  - : Das Element hat ein Popup, das eine Listbox ist.
- `"tree"`
  - : Das Element hat ein Popup, das ein Baum ist.
- `"grid"`
  - : Das Element hat ein Popup, das ein Raster ist.
- `"dialog"`
  - : Das Element hat ein Popup, das ein Dialog ist.

## Beispiele

In diesem Beispiel wird der Wert von `ariaHasPopup` auf "true" gesetzt.

```js
this.internals_.ariaHasPopup = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
