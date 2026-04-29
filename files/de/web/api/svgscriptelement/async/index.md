---
title: "SVGScriptElement: async-Eigenschaft"
short-title: async
slug: Web/API/SVGScriptElement/async
l10n:
  sourceCommit: 0c001c739dd59b282af60a6d0a55c161798c0084
---

{{APIRef("SVG")}}

Die **`async`**-Eigenschaft des [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement)-Interfaces ist ein Boolean-Wert, der steuert, wie das Skript ausgeführt werden soll. Sie entspricht dem {{SVGAttr("async")}}-Attribut des angegebenen {{SVGElement("script")}}-Elements. Wenn sie auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen des SVG-Dokuments abgerufen und das Skript wird ausgewertet, sobald es verfügbar ist.

## Wert

Ein Boolean.

## Beispiele

### Zugriff auf die `async`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js" async></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");

// Access the async property
console.log(scriptElement.async); // Output: true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
