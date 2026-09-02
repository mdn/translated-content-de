---
title: "Element: ariaDisabled-Eigenschaft"
short-title: ariaDisabled
slug: Web/API/Element/ariaDisabled
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

Die **`ariaDisabled`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attributs wider. Dieses Attribut zeigt an, dass das Element erkennbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig funktionsfähig ist.

> [!NOTE]
> Verwenden Sie, wenn möglich, das {{htmlelement("input")}}-Element mit `type="button"` oder das {{htmlelement("button")}}-Element — da diese Elemente über integrierte Semantik verfügen und keine ARIA-Attribute erfordern.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element und alle fokussierbaren Nachfahren sind deaktiviert, aber erkennbar, und ihre Werte können vom Benutzer nicht geändert werden.
- `"false"`
  - : Das Element ist aktiviert.

## Beispiele

In diesem Beispiel wird das `aria-disabled`-Attribut des Elements mit der ID `saveChanges` auf "true" gesetzt, was anzeigt, dass diese Eingabe derzeit deaktiviert ist. Mit `ariaDisabled` aktualisieren wir den Wert auf "false".

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
