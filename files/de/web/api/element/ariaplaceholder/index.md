---
title: "Element: ariaPlaceholder-Eigenschaft"
short-title: ariaPlaceholder
slug: Web/API/Element/ariaPlaceholder
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

Die **`ariaPlaceholder`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des `aria-placeholder`-Attributs wider, das einen kurzen Hinweis definiert, um dem Benutzer bei der Dateneingabe zu helfen, wenn das Steuerelement keinen Wert hat.

> [!NOTE]
> Wenn möglich, verwenden Sie ein HTML-{{htmlelement("input")}}-Element mit `type="text"` oder ein {{htmlelement("textarea")}}, da diese eingebaute Semantik haben und keine ARIA-Attribute erfordern.

## Wert

Ein String.

## Beispiele

In diesem Beispiel wurde das `aria-placeholder`-Attribut des Elements mit der ID `txtBoxInput` auf einen String gesetzt. Mithilfe von `ariaPlaceholder` aktualisieren wir den String auf einen anderen Wert.

```html
<div id="txtboxLabel">Enter your five-digit zip code</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-placeholder="5-digit zip code"
  aria-labelledby="txtboxLabel"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaPlaceholder); // "5-digit zip code"
el.ariaPlaceholder = "12345";
console.log(el.ariaPlaceholder); // "12345"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: textbox role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
