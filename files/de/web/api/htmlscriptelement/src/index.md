---
title: "HTMLScriptElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLScriptElement/src
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle ist eine Zeichenkette, die die URL eines externen Skripts darstellt; dies kann als Alternative zur direkten Einbettung eines Skripts innerhalb eines Dokuments verwendet werden.

Sie spiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Eine Zeichenkette.

## Beispiele

Angenommen, der Code wird auf einer Website ausgeführt, deren URL `https://example.com` ist.

```html
<script id="script-with-src" type="module" src="/main.js"></script>
<script id="script-without-src" type="module"></script>
```

```js
const scriptWithSrc = document.getElementById("script-with-src");
console.log(scriptWithSrc.src); // Output: "https://example.com/main.js"
const scriptWithoutSrc = document.getElementById("script-without-src");
console.log(scriptWithoutSrc.src); // Output: ""
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
