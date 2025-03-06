---
title: "Element: ariaDisabled-Eigenschaft"
short-title: ariaDisabled
slug: Web/API/Element/ariaDisabled
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaDisabled`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attributs wider, welches angibt, dass das Element wahrnehmbar, aber deaktiviert ist und daher nicht bearbeitet oder anderweitig bedienbar ist.

> [!NOTE]
> Verwenden Sie nach Möglichkeit das {{htmlelement("input")}}-Element mit `type="button"` oder das {{htmlelement("button")}}-Element — da diese Elemente eingebaute Semantik haben und keine ARIA-Attribute erfordern.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element und alle fokussierbaren Nachkommen sind deaktiviert, aber wahrnehmbar, und ihre Werte können vom Benutzer nicht geändert werden.
- `"false"`
  - : Das Element ist aktiviert.

## Beispiele

In diesem Beispiel wird das `aria-disabled`-Attribut des Elements mit der ID `saveChanges` auf "true" gesetzt, was darauf hinweist, dass diese Eingabe momentan deaktiviert ist. Mithilfe von `ariaDisabled` aktualisieren wir den Wert auf "false".

```html
<div id="saveChanges" tabindex="0" role="button" aria-disabled="true">Save</div>
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
