---
title: "Element: ariaChecked-Eigenschaft"
short-title: ariaChecked
slug: Web/API/Element/ariaChecked
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaChecked`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)-Attributs wider, das den aktuellen "checked"-Zustand von Checkboxen, Radio-Buttons und anderen Widgets, die einen checked-Zustand haben, anzeigt.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="checkbox"`, da dieses Element eingebaute Semantik hat und keine ARIA-Attribute benötigt.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist aktiviert.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für ein Drei-Zustands-Checkbox oder ein Menüeintrags-Checkbox an.
- `"false"`
  - : Das Element unterstützt das Aktiviertsein, ist aber derzeit nicht aktiviert.
- `"undefined"`
  - : Das Element unterstützt das Aktiviertsein nicht.

## Beispiele

In diesem Beispiel wird das `aria-checked`-Attribut des Elements mit der ID `checkBoxInput` auf "false" gesetzt, was anzeigt, dass dieses Eingabefeld derzeit nicht aktiviert ist. Mithilfe von `ariaChecked` aktualisieren wir den Wert auf "true".

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label">
</span>
<label id="chk1-label">Remember my preferences</label>
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

- [ARIA: checkbox-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
