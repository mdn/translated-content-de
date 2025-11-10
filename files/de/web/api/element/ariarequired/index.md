---
title: "Element: ariaRequired-Eigenschaft"
short-title: ariaRequired
slug: Web/API/Element/ariaRequired
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaRequired`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des `aria-required`-Attributs wider, das angibt, dass Benutzereingaben erforderlich sind, bevor ein Formular gesendet werden kann.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML {{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese eingebaute Semantik besitzen und keine ARIA-Attribute erfordern.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Benutzer müssen Eingaben auf einem Element machen, bevor ein Formular gesendet wird.
- `"false"`
  - : Benutzereingaben sind zum Senden des Formulars nicht erforderlich.

## Beispiele

In diesem Beispiel ist das `aria-required`-Attribut des Elements mit der ID `txtBoxInput` auf "true" gesetzt, was anzeigt, dass diese Eingabe ausgefüllt werden muss. Mit `ariaRequired` aktualisieren wir den Wert auf "false".

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

- [ARIA: textbox role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
