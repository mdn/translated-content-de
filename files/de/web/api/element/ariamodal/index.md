---
title: "Element: ariaModal-Eigenschaft"
short-title: ariaModal
slug: Web/API/Element/ariaModal
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaModal`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des `aria-modal`-Attributs wider, welches angibt, ob ein Element im angezeigten Zustand modal ist. Die Anwendung der `aria-modal`-Eigenschaft auf ein Element mit `role="dialog"` ersetzt die Technik, `aria-hidden` im Hintergrund zu verwenden, um unterstützenden Technologien mitzuteilen, dass der Inhalt außerhalb eines Dialogs inaktiv ist.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist modal.
- `"false"`
  - : Das Element ist nicht modal.

## Beispiele

In diesem Beispiel wird das `aria-modal`-Attribut des Elements mit der ID `address-modal` auf "true" gesetzt, um anzugeben, dass es sich um einen modalen Dialog handelt. Mit `ariaModal` aktualisieren wir den Wert auf "false".

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

- [ARIA: dialog-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
