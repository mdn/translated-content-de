---
title: "HTMLScriptElement: defer-Eigenschaft"
short-title: defer
slug: Web/API/HTMLScriptElement/defer
l10n:
  sourceCommit: 3d57022613fbc562cc948938972aeffcaece819b
---

{{APIRef("HTML DOM")}}

Die **`defer`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ist ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt. Bei [Modulskripten](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Wirkung.

Sie spiegelt das `defer`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<script id="el" src="/example.js" defer></script>
```

```js
const el = document.getElementById("el");
console.log(el.defer); // Output: true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
