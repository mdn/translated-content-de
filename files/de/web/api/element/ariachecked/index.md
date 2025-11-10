---
title: "Element: ariaChecked-Eigenschaft"
short-title: ariaChecked
slug: Web/API/Element/ariaChecked
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaChecked`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attributs wider, das den aktuellen "checked"-Status von Kontrollkästchen, Optionsfeldern und anderen Widgets mit einem überprüfbaren Status angibt.

> [!NOTE]
> Verwenden Sie, wenn möglich, ein HTML-{{htmlelement("input")}}-Element mit `type="checkbox"`, da dieses Element eingebaute Semantik hat und keine ARIA-Attribute benötigt.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist aktiviert.
- `"mixed"`
  - : Gibt einen Mischmoduswert für ein Dreiweg-Kontrollkästchen oder Menüelement-Kontrollkästchen an.
- `"false"`
  - : Das Element unterstützt den überprüften Status, ist jedoch derzeit nicht aktiviert.
- `"undefined"`
  - : Das Element unterstützt keinen überprüften Status.

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

- [ARIA: checkbox role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
