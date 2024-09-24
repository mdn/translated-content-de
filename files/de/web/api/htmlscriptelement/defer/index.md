---
title: "HTMLScriptElement: defer-Eigenschaft"
short-title: defer
slug: Web/API/HTMLScriptElement/defer
l10n:
  sourceCommit: 3d57022613fbc562cc948938972aeffcaece819b
---

{{APIRef("HTML DOM")}}

Die **`defer`**-Eigenschaft der {{domxref("HTMLScriptElement")}}-Schnittstelle ist ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten wird das externe Skript, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, nach dem Parsen des Dokuments, aber vor dem Auslösen des {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}-Ereignisses, ausgeführt. Für [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Auswirkung.

Sie spiegelt das `defer`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<script id="el" src="/example.js" defer></script>
```

```js
const el = document.getElementById("el");
console.log(el.defer); // Ausgabe: true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLScriptElement.async")}}
