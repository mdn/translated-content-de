---
title: "HTMLElement: accessKeyLabel-Eigenschaft"
short-title: accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`HTMLElement.accessKeyLabel`**-Eigenschaft gibt einen String zurück, der den vom Browser zugewiesenen Zugriffsschlüssel des Elements enthält (falls vorhanden); andernfalls wird ein leerer String zurückgegeben.

## Beispiel

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

### HTML

```html
<button accesskey="h" title="Caption" id="btn1">Hover me</button>
```

### Ergebnis

{{ EmbedLiveSample('Example') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
- Das globale [accesskey](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)-Attribut.
