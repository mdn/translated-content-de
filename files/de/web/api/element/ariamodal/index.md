---
title: "Element: ariaModal-Eigenschaft"
short-title: ariaModal
slug: Web/API/Element/ariaModal
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaModal`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des `aria-modal`-Attributs wider, welches angibt, ob ein Element im angezeigten Zustand modal ist. Die Anwendung der Eigenschaft `aria-modal` auf ein Element mit `role="dialog"` ersetzt die Technik der Verwendung von aria-hidden im Hintergrund, um unterstützende Technologien darüber zu informieren, dass Inhalte außerhalb eines Dialogs inaktiv sind.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist modal.
- `"false"`
  - : Das Element ist nicht modal.

## Beispiele

In diesem Beispiel ist das `aria-modal`-Attribut auf dem Element mit der ID `address-modal` auf "true" gesetzt, was bedeutet, dass es sich um einen modalen Dialog handelt. Mit `ariaModal` aktualisieren wir den Wert auf "false".

```html
<div
  role="dialog"
  id="address-modal"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc"
  aria-modal="true"></div>
```

```js
let el = document.getElementById("address-modal");
console.log(el.ariaModal); // "true"
el.ariaModal = "false";
console.log(el.ariaModal); // "false"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: dialog Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
