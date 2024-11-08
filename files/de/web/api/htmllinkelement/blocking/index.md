---
title: "HTMLLinkElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLLinkElement/blocking
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("HTML DOM")}}

Die **`blocking`**-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Schnittstelle ist eine Zeichenkette, die angibt, dass bestimmte Operationen beim Abruf einer externen Ressource blockiert werden sollen.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("link")}}-Elements wider.

## Wert

Eine Zeichenkette. Muss eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockierungs-Token sein, die die zu blockierenden Operationen angeben:

- `render`
  - : Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

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
