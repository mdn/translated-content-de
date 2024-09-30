---
title: "HTMLScriptElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLScriptElement/src
l10n:
  sourceCommit: 2231cbd5847dff1ca21f8f7fb59d72cae615f088
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ist ein String, der die URL eines externen Skripts darstellt; dies kann als Alternative zur direkten Einbettung eines Skripts innerhalb eines Dokuments verwendet werden.

Sie entspricht dem `src`-Attribut des {{HTMLElement("script")}}-Elements.

## Wert

Ein String.

## Beispiele

Nehmen Sie an, der Code läuft auf einer Website, deren URL `https://example.com` ist.

```html
<script id="script-with-src" type="module" src="/main.js"></script>
<script id="script-without-src" type="module"></script>
```

```js
const script_with_src = document.getElementById("script-with-src");
console.log(script_with_src.src); // Output: "https://example.com/main.js"
const script_without_src = document.getElementById("script-without-src");
console.log(script_without_src.src); // Output: ""
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
