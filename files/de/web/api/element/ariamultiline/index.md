---
title: "Element: ariaMultiLine-Eigenschaft"
short-title: ariaMultiLine
slug: Web/API/Element/ariaMultiLine
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaMultiLine`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)-Attributs wider, das angibt, ob ein Textfeld mehrere Zeilen Eingabe oder nur eine einzige Zeile akzeptiert.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese eingebaute Semantik besitzen und keine ARIA-Attribute erfordern.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Dies ist ein mehrzeiliges Textfeld.
- `"false"`
  - : Dies ist ein einzeiliges Textfeld.

## Beispiele

In diesem Beispiel ist das `aria-multiline`-Attribut auf dem Element mit der ID `txtBoxInput` auf "true" gesetzt, was anzeigt, dass dieses Feld Eingaben über mehrere Zeilen zulässt. Mithilfe von `ariaMultiLine` aktualisieren wir den Wert auf "false".

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

- [ARIA: textbox role](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
