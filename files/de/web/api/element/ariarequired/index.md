---
title: "Element: ariaRequired-Eigenschaft"
short-title: ariaRequired
slug: Web/API/Element/ariaRequired
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaRequired`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des `aria-required`-Attributs wider, das angibt, dass Benutzereingaben für das Element erforderlich sind, bevor ein Formular gesendet werden kann.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese integrierte Semantiken haben und keine ARIA-Attribute erfordern.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Benutzer müssen eine Eingabe auf einem Element machen, bevor ein Formular gesendet wird.
- `"false"`
  - : Benutzereingaben sind zum Absenden des Formulars nicht erforderlich.

## Beispiele

In diesem Beispiel wird das `aria-required`-Attribut des Elements mit der ID `txtBoxInput` auf "true" gesetzt, was darauf hinweist, dass diese Eingabe abgeschlossen werden muss. Mit `ariaRequired` aktualisieren wir den Wert auf "false".

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
console.log(el.ariaRequired); // "true"
el.ariaRequired = "false";
console.log(el.ariaRequired); // "false"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: textbox role](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
