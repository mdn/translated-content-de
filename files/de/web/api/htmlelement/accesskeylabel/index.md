---
title: "HTMLElement: Eigenschaft accessKeyLabel"
short-title: accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`HTMLElement.accessKeyLabel`**-Eigenschaft gibt eine Zeichenkette zurück, die den vom Browser zugewiesenen Zugriffskey des Elements enthält (falls vorhanden); andernfalls gibt sie eine leere Zeichenkette zurück.

## Syntax

```js-nolint
label = element.accessKeyLabel
```

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

- {{domxref("HTMLElement.accessKey")}}
- Das globale Attribut [accesskey](/de/docs/Web/HTML/Global_attributes/accesskey).
