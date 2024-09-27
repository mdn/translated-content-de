---
title: "HTMLScriptElement: blocking Eigenschaft"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`blocking`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ist ein String, der angibt, dass bestimmte Operationen beim Laden des Skripts blockiert werden sollen.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String. Muss eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungs-Token sein, die die blockierten Operationen angeben:

- `render`
  - : Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

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
