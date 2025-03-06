---
title: "ElementInternals: ariaRequired-Eigenschaft"
short-title: ariaRequired
slug: Web/API/ElementInternals/ariaRequired
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaRequired`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attributs wider, welches angibt, dass Benutzereingaben auf dem Element erforderlich sind, bevor ein Formular abgeschickt werden kann.

> [!NOTE]
> Durch das Setzen von aria-Attributen auf `ElementInternals` können Standardsemantiken auf einem benutzerdefinierten Element definiert werden. Diese können von benutzerdefinierten Attributen überschrieben werden, aber es wird sichergestellt, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie gar nicht hinzufügt. Für weitere Informationen lesen Sie den [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Benutzer müssen Eingaben auf einem Element bereitstellen, bevor ein Formular abgeschickt wird.
- `"false"`
  - : Benutzereingaben sind nicht erforderlich, um das Formular abzuschicken.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRequired` auf "true" gesetzt.

```js
this.internals_.ariaRequired = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: textbox role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
