---
title: "Element: ariaReadOnly-Eigenschaft"
short-title: ariaReadOnly
slug: Web/API/Element/ariaReadOnly
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

Die **`ariaReadOnly`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attributs wider, welches angibt, dass das Element nicht bearbeitbar ist, aber ansonsten bedienbar.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML {{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese über eingebaute Semantik verfügen und keine ARIA-Attribute benötigen.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Der Benutzer kann den Wert des Elements nicht ändern.
- `"false"`
  - : Der Benutzer kann den Wert des Elements festlegen.

## Beispiele

In diesem Beispiel wird das `aria-readonly`-Attribut des Elements mit der ID `txtBoxInput` auf "true" gesetzt, was anzeigt, dass diese Eingabe derzeit nur gelesen werden kann. Mit `ariaReadOnly` aktualisieren wir den Wert auf "false".

```html
<div id="txtboxMultilineLabel">Enter the tags for the article</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-readonly="true"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaReadOnly); // "true"
el.ariaReadOnly = "false";
console.log(el.ariaReadOnly); // "false"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: textbox-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
