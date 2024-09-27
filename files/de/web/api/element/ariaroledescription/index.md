---
title: "Element: ariaRoleDescription-Eigenschaft"
short-title: ariaRoleDescription
slug: Web/API/Element/ariaRoleDescription
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaRoleDescription`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)-Attributs wider, das eine für Menschen lesbare, vom Autor lokalisierte Beschreibung der Rolle eines Elements definiert.

## Wert

Ein String.

## Beispiele

In diesem Beispiel wurde das `aria-roledescription`-Attribut des Elements mit der ID `myApplication` gesetzt. Mit `ariaRoleDescription` können wir den Wert aktualisieren.

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

- [ARIA: application role](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
