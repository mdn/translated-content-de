---
title: "SVGScriptElement: defer-Eigenschaft"
short-title: defer
slug: Web/API/SVGScriptElement/defer
l10n:
  sourceCommit: a9e07b75358077e93e2515a13a7413275116ee48
---

{{SeeCompatTable}}{{APIRef("SVG")}}

Die **`defer`**-Eigenschaft des [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement)-Interfaces ist ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten wird, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, das externe Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses, ausgeführt. Bei [Modul-Skripten](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Wirkung.

Sie spiegelt das [`defer`](/de/docs/Web/SVG/Reference/Element/script#defer)-Attribut des {{SVGElement("script")}}-Elements wider.

## Wert

Ein boolescher Wert.

## Beispiele

### Zugriff auf die `defer`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js" defer></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");
console.log(scriptElement.defer); // Output: true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGScriptElement.async`](/de/docs/Web/API/SVGScriptElement/async)
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
