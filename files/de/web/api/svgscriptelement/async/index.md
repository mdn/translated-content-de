---
title: "SVGScriptElement: async-Eigenschaft"
short-title: async
slug: Web/API/SVGScriptElement/async
l10n:
  sourceCommit: a9e07b75358077e93e2515a13a7413275116ee48
---

{{APIRef("SVG")}}

Die **`async`**-Eigenschaft des [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement)-Interfaces ist ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten, wenn die `async`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen abgerufen und so bald wie möglich ausgewertet. Bei [Modulskripten](/de/docs/Web/JavaScript/Guide/Modules), wenn die `async`-Eigenschaft auf `true` gesetzt ist, werden das Skript und alle seine Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.

Sie spiegelt das [`async`](/de/docs/Web/SVG/Reference/Element/script#async)-Attribut des {{SVGElement("script")}}-Elements wider.

## Wert

Ein boolescher Wert.

## Beispiele

### Zugriff auf die `async`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js" async></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");
console.log(scriptElement.async); // Output: true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGScriptElement.defer`](/de/docs/Web/API/SVGScriptElement/defer)
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
