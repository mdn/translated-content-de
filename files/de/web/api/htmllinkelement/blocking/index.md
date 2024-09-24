---
title: "HTMLLinkElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLLinkElement/blocking
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`blocking`**-Eigenschaft der {{domxref("HTMLLinkElement")}}-Schnittstelle ist ein String, der angibt, dass bestimmte Vorgänge beim Abrufen einer externen Ressource blockiert werden sollen.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("link")}}-Elements wider.

## Wert

Ein String. Muss eine durch Leerzeichen getrennte Liste von unten aufgeführten Blocking-Tokens sein, die die Vorgänge angeben, die blockiert werden sollen:

- `render`
  - : Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

## Beispiele

```html
<link
  id="el"
  rel="stylesheet"
  href="/example.css"
  blocking="render"
  crossorigin />
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Ausgabe: "render"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLScriptElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
