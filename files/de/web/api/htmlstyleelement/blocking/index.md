---
title: "HTMLStyleElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLStyleElement/blocking
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("HTML DOM")}}

Die **`blocking`**-Eigenschaft der [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)-Schnittstelle ist eine Zeichenkette, die anzeigt, dass bestimmte Operationen beim Abrufen von kritischen Subressourcen blockiert werden sollen.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("style")}}-Elements wider.

## Wert

Eine Zeichenkette. Muss eine durch Leerzeichen getrennte Liste von unten aufgeführten Blocking-Tokens sein, die die zu blockierenden Operationen angeben:

- `render`
  - : Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

## Beispiele

```html
<style id="el" blocking="render">
  p {
    color: blue;
  }
</style>
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
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
