---
title: "ElementInternals: ariaRequired-Eigenschaft"
short-title: ariaRequired
slug: Web/API/ElementInternals/ariaRequired
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRequired`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)-Attributs wider, welches angibt, dass eine Benutzereingabe auf dem Element erforderlich ist, bevor ein Formular abgesendet werden kann.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, sollte der Autor diese Attribute entfernen oder gar nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Benutzer müssen eine Eingabe auf einem Element bereitstellen, bevor ein Formular abgesendet wird.
- `"false"`
  - : Benutzereingaben sind nicht erforderlich, um das Formular abzusenden.

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
