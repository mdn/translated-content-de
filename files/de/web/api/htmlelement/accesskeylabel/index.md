---
title: "HTMLElement: accessKeyLabel-Eigenschaft"
short-title: accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.accessKeyLabel`** Schreibgeschützte Eigenschaft gibt eine Zeichenfolge zurück, die den vom Browser zugewiesenen Zugriffsschlüssel des Elements enthält (falls vorhanden); ansonsten gibt sie einen leeren String zurück.

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

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
- Das [accesskey](/de/docs/Web/HTML/Global_attributes/accesskey) globale Attribut.
