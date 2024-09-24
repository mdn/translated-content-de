---
title: "ElementInternals: ariaRequired-Eigenschaft"
short-title: ariaRequired
slug: Web/API/ElementInternals/ariaRequired
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRequired`**-Eigenschaft des {{domxref("ElementInternals")}}-Interfaces spiegelt den Wert des [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)-Attributs wider, welches anzeigt, dass Benutzereingaben auf dem Element erforderlich sind, bevor ein Formular abgeschickt werden kann.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` erlaubt es, Standard-Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können von vom Autor definierten Attributen überschrieben werden. Jedoch wird sichergestellt, dass die Standard-Semantiken erhalten bleiben, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Benutzer müssen Eingaben zu einem Element machen, bevor ein Formular abgeschickt wird.
- `"false"`
  - : Benutzereingaben sind nicht notwendig, um das Formular abzuschicken.

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

- [ARIA: textbox role](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
