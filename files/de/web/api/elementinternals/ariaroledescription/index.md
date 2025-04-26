---
title: "ElementInternals: ariaRoleDescription-Eigenschaft"
short-title: ariaRoleDescription
slug: Web/API/ElementInternals/ariaRoleDescription
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaRoleDescription`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Attributs wider, welches eine menschenlesbare, autoren-lokalisierte Beschreibung für die Rolle eines Elements definiert.

> [!NOTE]
> Das Setzen von `aria`-Attributen auf `ElementInternals` erlaubt es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantik beibehalten wird, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model-Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRoleDescription` auf "My custom widget" gesetzt.

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaRoleDescription = "My custom widget";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: application role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
