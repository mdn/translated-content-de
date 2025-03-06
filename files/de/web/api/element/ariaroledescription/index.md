---
title: "Element: ariaRoleDescription-Eigenschaft"
short-title: ariaRoleDescription
slug: Web/API/Element/ariaRoleDescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaRoleDescription`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Attributs wider, welches eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements definiert.

## Wert

Ein String.

## Beispiele

In diesem Beispiel wurde das `aria-roledescription`-Attribut auf dem Element mit der ID `myApplication` gesetzt. Mit `ariaRoleDescription` können wir den Wert aktualisieren.

```html
<div
  id="myApplication"
  role="application"
  aria-roledescription="a description of this widget">
  …
</div>
```

```js
let el = document.getElementById("myApplication");
console.log(el.ariaRoleDescription); // "a description of this widget"
el.ariaRoleDescription = "an updated description of this widget";
console.log(el.ariaRoleDescription); // "an updated description of this widget"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Anwendungsrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
