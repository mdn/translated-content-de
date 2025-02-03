---
title: "HTMLElement: accessKeyLabel-Eigenschaft"
short-title: accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
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
- Das globale [accesskey](/de/docs/Web/HTML/Global_attributes/accesskey) Attribut.
