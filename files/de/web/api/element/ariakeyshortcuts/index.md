---
title: "Element: ariaKeyShortcuts-Eigenschaft"
short-title: ariaKeyShortcuts
slug: Web/API/Element/ariaKeyShortcuts
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaKeyShortcuts`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des `aria-keyshortcuts`-Attributs wider, das Tastenkombinationen angibt, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird das `aria-keyshortcuts`-Attribut des Elements mit der ID `skip-link` auf "Alt+Shift+A" gesetzt. Mit `ariaKeyShortcuts` aktualisieren wir den Wert auf "Alt+Shift+M".

```html
<a id="skip-link" href="#content" aria-keyshortcuts="Alt+Shift+A">
  Skip to content
</a>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaKeyShortcuts); // "Alt+Shift+A"
el.ariaKeyShortcuts = "Alt+Shift+M";
console.log(el.ariaKeyShortcuts); // "Alt+Shift+M"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
