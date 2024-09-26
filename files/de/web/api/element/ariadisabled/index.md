---
title: "Element: ariaDisabled-Eigenschaft"
short-title: ariaDisabled
slug: Web/API/Element/ariaDisabled
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaDisabled`**-Eigenschaft des {{domxref("Element")}}-Interfaces spiegelt den Wert des [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)-Attributs wider, welches anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedient werden kann.

> [!NOTE]
> Verwenden Sie nach Möglichkeit das {{htmlelement("input")}} Element mit `type="button"` oder das {{htmlelement("button")}} Element — da diese Elemente eingebaute Semantik haben und keine ARIA-Attribute benötigen.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element und alle fokussierbaren Nachkommen sind deaktiviert, aber wahrnehmbar, und ihre Werte können vom Benutzer nicht geändert werden.
- `"false"`
  - : Das Element ist aktiviert.

## Beispiele

In diesem Beispiel wird das `aria-disabled`-Attribut auf dem Element mit der ID `saveChanges` auf "true" gesetzt, was darauf hindeutet, dass diese Eingabe derzeit deaktiviert ist. Mit `ariaDisabled` aktualisieren wir den Wert auf "false".

```html
<div id="saveChanges" tabindex="0" role="button" aria-disabled="true">Speichern</div>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaDisabled); // "true"
el.ariaDisabled = "false";
console.log(el.ariaDisabled); // "false"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}