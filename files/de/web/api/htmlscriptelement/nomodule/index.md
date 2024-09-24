---
title: "HTMLScriptElement: noModule-Eigenschaft"
short-title: noModule
slug: Web/API/HTMLScriptElement/noModule
l10n:
  sourceCommit: a16dd5636df94af17c519d5e1eaaaf967acd8203
---

{{APIRef("HTML DOM")}}

Die **`noModule`**-Eigenschaft der {{domxref("HTMLScriptElement")}}-Schnittstelle ist ein Boolescher Wert, der angibt, ob das Skript in Browsern ausgeführt werden soll, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen. Praktisch kann dies verwendet werden, um Fallback-Skripte für ältere Browser bereitzustellen, die keine JavaScript-Module unterstützen.

Sie spiegelt das `nomodule`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein Boolescher Wert: `true` bedeutet, dass das Skript in Browsern, die ES-Module unterstützen, nicht ausgeführt werden soll, andernfalls `false`.

## Beispiele

```html
<script id="el" nomodule>
  // Wenn der Browser JavaScript-Module unterstützt, wird das folgende Skript nicht ausgeführt.
  console.log("Der Browser unterstützt keine JavaScript-Module");
</script>
```

```js
const el = document.getElementById("el");
console.log(el.noModule); // Ausgabe: true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
