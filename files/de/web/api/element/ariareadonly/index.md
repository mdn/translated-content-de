---
title: "Element: ariaReadOnly-Eigenschaft"
short-title: ariaReadOnly
slug: Web/API/Element/ariaReadOnly
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaReadOnly`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle spiegelt den Wert des [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)-Attributs wider, welches angibt, dass das Element nicht bearbeitbar ist, aber anderweitig bedienbar ist.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese eingebaute Semantik haben und keine ARIA-Attribute benötigen.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Der Benutzer kann den Wert des Elements nicht ändern.
- `"false"`
  - : Der Benutzer kann den Wert des Elements setzen.

## Beispiele

In diesem Beispiel ist das `aria-readonly`-Attribut auf dem Element mit der ID `txtBoxInput` auf "true" gesetzt, was anzeigt, dass diese Eingabe derzeit nur lesbar ist. Mit `ariaReadOnly` aktualisieren wir den Wert auf "false".

```html
<div id="txtboxMultilineLabel">Geben Sie die Tags für den Artikel ein</div>
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [ARIA: textbox role](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
