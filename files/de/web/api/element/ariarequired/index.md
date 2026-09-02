---
title: "Element: ariaRequired-Eigenschaft"
short-title: ariaRequired
slug: Web/API/Element/ariaRequired
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

Die **`ariaRequired`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des `aria-required`-Attributs wider, welches anzeigt, dass Benutzereingaben auf dem Element erforderlich sind, bevor ein Formular abgeschickt werden kann.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML {{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese eingebaute Semantik bieten und keine ARIA-Attribute benötigen.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Benutzer müssen Eingaben auf einem Element machen, bevor ein Formular abgeschickt wird.
- `"false"`
  - : Benutzereingaben sind nicht erforderlich, um das Formular abzuschicken.

## Beispiele

In diesem Beispiel wird das `aria-required`-Attribut des Elements mit der ID `txtBoxInput` auf "true" gesetzt, was anzeigt, dass diese Eingabe ausgefüllt werden muss. Mit `ariaRequired` aktualisieren wir den Wert auf "false".

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

- [ARIA: Rolle textbox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
