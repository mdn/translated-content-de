---
title: "ElementInternals: ariaRequired-Eigenschaft"
short-title: ariaRequired
slug: Web/API/ElementInternals/ariaRequired
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaRequired`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attributs wider, welches angibt, dass eine Benutzereingabe auf dem Element erforderlich ist, bevor ein Formular abgeschickt werden kann.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` ermöglicht es, die Standardsemantik eines benutzerdefinierten Elements zu definieren. Diese können von benutzerdefinierten Attributen überschrieben werden, stellen jedoch sicher, dass die Standardsemantik beibehalten wird, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Benutzer müssen eine Eingabe auf einem Element machen, bevor ein Formular abgeschickt wird.
- `"false"`
  - : Benutzereingabe ist nicht notwendig, um das Formular abzuschicken.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRequired` auf "true" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaRequired = "true";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: textbox-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
