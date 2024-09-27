---
title: "Element: ariaPlaceholder-Eigenschaft"
short-title: ariaPlaceholder
slug: Web/API/Element/ariaPlaceholder
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaPlaceholder`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des `aria-placeholder`-Attributs wider, das einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn das Steuerelement keinen Wert hat.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese eingebaute Semantik haben und keine ARIA-Attribute benötigen.

## Wert

Ein String.

## Beispiele

In diesem Beispiel wurde das `aria-placeholder`-Attribut des Elements mit der ID `txtBoxInput` auf eine Zeichenkette gesetzt. Mit `ariaPlaceholder` aktualisieren wir die Zeichenkette auf einen anderen Wert.

```html
<div id="txtboxLabel">Enter your five-digit zipcode</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-placeholder="5-digit zipcode"
  aria-labelledby="txtboxLabel"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaPlaceholder); // "5-digit zipcode"
el.ariaPlaceholder = "12345";
console.log(el.ariaPlaceholder); // "12345"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: textbox-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
