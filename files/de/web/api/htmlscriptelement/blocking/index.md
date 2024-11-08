---
title: "HTMLScriptElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("HTML DOM")}}

Die **`blocking`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle ist ein String, der angibt, dass bestimmte Operationen beim Laden des Skripts blockiert werden sollten.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String. Muss eine durch Leerzeichen getrennte Liste von blockierenden Tokens enthalten, die unten aufgeführt sind und die Operationen angeben, die blockiert werden sollen:

- `render`
  - : Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

## Beispiele

```html
<script id="el" type="text/javascript" async blocking="render"></script>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Output: "render"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.blocking`](/de/docs/Web/API/HTMLLinkElement/blocking)
- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking)
