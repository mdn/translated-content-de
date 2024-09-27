---
title: "HTMLScriptElement: noModule-Eigenschaft"
short-title: noModule
slug: Web/API/HTMLScriptElement/noModule
l10n:
  sourceCommit: a16dd5636df94af17c519d5e1eaaaf967acd8203
---

{{APIRef("HTML DOM")}}

Die **`noModule`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ist ein boolescher Wert, der angibt, ob das Skript in Browsern ausgeführt werden soll, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen. Praktisch kann dies verwendet werden, um älteren Browsern, die keine JavaScript-Module unterstützen, Fallback-Skripte bereitzustellen.

Es spiegelt das `nomodule`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein boolescher Wert, `true` bedeutet, dass das Skript in Browsern, die ES-Module unterstützen, nicht ausgeführt werden soll, `false` andernfalls.

## Beispiele

```html
<script id="el" nomodule>
  // If the browser supports JavaScript modules, the following script will not be executed.
  console.log("The browser does not support JavaScript modules");
</script>
```

```js
const el = document.getElementById("el");
console.log(el.noModule); // Output: true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
