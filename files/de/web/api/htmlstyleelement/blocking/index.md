---
title: "HTMLStyleElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLStyleElement/blocking
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`blocking`**-Eigenschaft des [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)-Interfaces ist ein String, der angibt, dass bestimmte Operationen beim Abrufen kritischer Subressourcen blockiert werden sollen.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("style")}}-Elements wider.

## Wert

Ein String. Muss eine durch Leerzeichen getrennte Liste von unten aufgeführten Blocking-Tokens sein, die die zu blockierenden Operationen angeben:

- `render`
  - : Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

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
