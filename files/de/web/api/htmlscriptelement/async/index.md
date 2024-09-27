---
title: "HTMLScriptElement: async-Eigenschaft"
short-title: async
slug: Web/API/HTMLScriptElement/async
l10n:
  sourceCommit: 3d57022613fbc562cc948938972aeffcaece819b
---

{{APIRef("HTML DOM")}}

Die **`async`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ist ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `async`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen abgerufen und ausgeführt, sobald es verfügbar ist. Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules), wenn die `async`-Eigenschaft auf `true` gesetzt ist, werden das Skript und alle seine Abhängigkeiten parallel zum Parsen abgerufen und ausgeführt, sobald sie verfügbar sind.

Es spiegelt das `async`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<script id="el" src="/example.js" async></script>
```

```js
const el = document.getElementById("el");
console.log(el.async); // Output: true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
