---
title: "HTMLLinkElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLLinkElement/blocking
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`blocking`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces ist ein String, der angibt, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("link")}}-Elements wider.

## Wert

Ein String. Muss eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockierungs-Tokens sein, die die zu blockierenden Operationen angeben:

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
console.log(el.blocking); // Output: "render"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking)
