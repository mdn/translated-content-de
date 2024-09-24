---
title: "Element: ariaChecked-Eigenschaft"
short-title: ariaChecked
slug: Web/API/Element/ariaChecked
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaChecked`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle spiegelt den Wert des [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attributs wider, das den aktuellen "geprüften" Zustand von Checkboxen, Radiobuttons und anderen Widgets mit einem geprüften Zustand angibt.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="checkbox"`, da dieses Element eingebaute Semantik hat und keine ARIA-Attribute erfordert.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ausgewählt.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für eine dreistufige Checkbox oder ein Menüpunkt-Checkbox an.
- `"false"`
  - : Das Element unterstützt das Ausgewähltsein, ist jedoch derzeit nicht ausgewählt.
- `"undefined"`
  - : Das Element unterstützt das Ausgewähltsein nicht.

## Beispiele

In diesem Beispiel wird das `aria-checked`-Attribut des Elements mit der ID `checkBoxInput` auf "false" gesetzt, was anzeigt, dass dieses Eingabefeld derzeit nicht ausgewählt ist. Mithilfe von `ariaChecked` aktualisieren wir den Wert auf "true".

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label">
</span>
<label id="chk1-label">Erinnere dich an meine Präferenzen</label>
```

```js
let el = document.getElementById("checkBoxInput");
console.log(el.ariaChecked); // "false"
el.ariaChecked = "true";
console.log(el.ariaChecked); // "true"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Checkbox-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
