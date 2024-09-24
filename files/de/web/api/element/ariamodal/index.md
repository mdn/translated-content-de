---
title: "Element: ariaModal-Eigenschaft"
short-title: ariaModal
slug: Web/API/Element/ariaModal
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaModal`**-Eigenschaft des {{domxref("Element")}}-Interfaces spiegelt den Wert des `aria-modal`-Attributs wider, welches angibt, ob ein Element modal ist, wenn es angezeigt wird. Das Anwenden der `aria-modal`-Eigenschaft auf ein Element mit `role="dialog"` ersetzt die Technik der Verwendung von aria-hidden im Hintergrund, um unterstützenden Technologien mitzuteilen, dass Inhalte außerhalb eines Dialogs inaktiv sind.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist modal.
- `"false"`
  - : Das Element ist nicht modal.

## Beispiele

In diesem Beispiel wird das `aria-modal`-Attribut des Elements mit der ID `address-modal` auf "true" gesetzt, was darauf hinweist, dass es sich um einen modalen Dialog handelt. Mit `ariaModal` aktualisieren wir den Wert auf "false".

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

- [ARIA: dialog role](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
