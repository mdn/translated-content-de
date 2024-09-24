---
title: "Element: ariaRequired-Eigenschaft"
short-title: ariaRequired
slug: Web/API/Element/ariaRequired
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaRequired`**-Eigenschaft des {{domxref("Element")}}-Interfaces spiegelt den Wert des `aria-required`-Attributs wider, welches angibt, dass eine Benutzereingabe erforderlich ist, bevor ein Formular gesendet werden kann.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML {{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese integrierte Semantiken haben und keine ARIA-Attribute benötigen.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Benutzer müssen eine Eingabe auf einem Element machen, bevor ein Formular gesendet wird.
- `"false"`
  - : Die Benutzereingabe ist nicht erforderlich, um das Formular zu senden.

## Beispiele

In diesem Beispiel wird das `aria-required`-Attribut auf dem Element mit der ID `txtBoxInput` auf "true" gesetzt, was anzeigt, dass diese Eingabe ausgefüllt werden muss. Mit `ariaRequired` aktualisieren wir den Wert auf "false".

```html
<div id="txtboxMultilineLabel">Geben Sie die Tags für den Artikel ein</div>
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
