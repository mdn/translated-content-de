---
title: "HTMLScriptElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`blocking`**-Eigenschaft der {{domxref("HTMLScriptElement")}}-Schnittstelle ist ein String, der angibt, dass bestimmte Vorgänge beim Abrufen des Skripts blockiert werden sollen.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String. Muss eine durch Leerzeichen getrennte Liste der nachstehend aufgeführten Blocking-Tokens sein, die die Vorgänge angeben, die blockiert werden sollen:

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

- {{domxref("HTMLLinkElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
