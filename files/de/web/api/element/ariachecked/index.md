---
title: "Element: ariaChecked-Eigenschaft"
short-title: ariaChecked
slug: Web/API/Element/ariaChecked
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

Die **`ariaChecked`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attributs wider, welches den aktuellen "checked"-Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets anzeigt, die einen überprüfbaren Zustand haben.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="checkbox"`, da dieses Element über integrierte Semantik verfügt und keine ARIA-Attribute benötigt.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ausgewählt.
- `"mixed"`
  - : Zeigt einen gemischten Moduswert für ein Drei-Zustand-Kontrollkästchen oder ein Menüelement-Kontrollkästchen an.
- `"false"`
  - : Das Element kann ausgewählt werden, ist aber derzeit nicht ausgewählt.
- `"undefined"`
  - : Das Element unterstützt kein Auswählen.

## Beispiele

In diesem Beispiel wird das `aria-checked`-Attribut auf dem Element mit der ID `checkBoxInput` auf "false" gesetzt, was anzeigt, dass dieses Eingabefeld derzeit nicht ausgewählt ist. Mithilfe von `ariaChecked` aktualisieren wir den Wert auf "true".

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

- [ARIA: checkbox role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
