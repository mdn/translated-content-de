---
title: "Element: ariaMultiLine-Eigenschaft"
short-title: ariaMultiLine
slug: Web/API/Element/ariaMultiLine
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

Die **`ariaMultiLine`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)-Attributs wider, das angibt, ob ein Textfeld mehrere Eingabezeilen oder nur eine einzelne Zeile akzeptiert.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese über integrierte Semantik verfügen und keine ARIA-Attribute erfordern.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Dies ist ein mehrzeiliges Textfeld.
- `"false"`
  - : Dies ist ein einzeiliges Textfeld.

## Beispiele

In diesem Beispiel wird das `aria-multiline`-Attribut des Elements mit der ID `txtBoxInput` auf "true" gesetzt, was anzeigt, dass dieses Feld mehrere Eingabezeilen zulässt. Mit `ariaMultiLine` aktualisieren wir den Wert auf "false".

```html
<div id="txtboxMultilineLabel">Enter the tags for the article</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-required="true"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaMultiLine); // "true"
el.ariaMultiLine = "false";
console.log(el.ariaMultiLine); // "false"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Rolle des Textfeldes](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
