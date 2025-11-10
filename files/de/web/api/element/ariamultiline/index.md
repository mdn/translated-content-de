---
title: "Element: ariaMultiLine-Eigenschaft"
short-title: ariaMultiLine
slug: Web/API/Element/ariaMultiLine
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaMultiLine`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)-Attributs wider, welches angibt, ob ein Textfeld mehrere Eingabezeilen akzeptiert oder nur eine einzelne Zeile.

> [!NOTE]
> Wenn möglich, verwenden Sie ein HTML-{{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese eingebaute Semantik haben und keine ARIA-Attribute benötigen.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Dies ist ein mehrzeiliges Textfeld.
- `"false"`
  - : Dies ist ein einzeiliges Textfeld.

## Beispiele

In diesem Beispiel wird das `aria-multiline`-Attribut des Elements mit der ID `txtBoxInput` auf "true" gesetzt, was anzeigt, dass dieses Feld mehrere Eingabezeilen zulässt. Mit `ariaMultiLine` ändern wir den Wert auf "false".

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
