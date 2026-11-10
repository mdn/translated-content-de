---
title: "HTMLElement: accessKeyLabel-Eigenschaft"
short-title: accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.accessKeyLabel`** gibt eine Zeichenfolge mit der vom Browser zugewiesenen Zugriffstaste des Elements zurück, sofern eine vorhanden ist. Andernfalls gibt sie eine leere Zeichenfolge zurück.

## Beispiel

### HTML

```html
<button accesskey="h" title="Caption" id="btn1">Hover me</button>
```

### JavaScript

```js
const btn = document.getElementById("btn1");
const shortcutLabel = btn.accessKeyLabel || btn.accessKey;
btn.title += ` [${shortcutLabel.toUpperCase()}]`;

btn.onclick = () => {
  const feedback = document.createElement("output");
  feedback.textContent = "Pressed!";
  btn.insertAdjacentElement("afterend", feedback);
};
```

### Ergebnis

{{ EmbedLiveSample('Example') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
- Das globale Attribut [accesskey](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).
