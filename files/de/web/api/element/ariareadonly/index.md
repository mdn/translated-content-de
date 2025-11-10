---
title: "Element: ariaReadOnly-Eigenschaft"
short-title: ariaReadOnly
slug: Web/API/Element/ariaReadOnly
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaReadOnly`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attributs wider, welches anzeigt, dass das Element nicht bearbeitbar, aber anderweitig bedienbar ist.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML {{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese eingebaute Semantik besitzen und keine ARIA-Attribute erfordern.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Der Benutzer kann den Wert des Elements nicht ändern.
- `"false"`
  - : Der Benutzer kann den Wert des Elements festlegen.

## Beispiele

In diesem Beispiel wird das `aria-readonly`-Attribut des Elements mit der ID `txtBoxInput` auf "true" gesetzt, was darauf hinweist, dass diese Eingabe derzeit nur lesbar ist. Mit `ariaReadOnly` aktualisieren wir den Wert auf "false".

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

- [ARIA: textbox role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
