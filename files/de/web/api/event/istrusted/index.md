---
title: "Ereignis: isTrusted-Eigenschaft"
short-title: isTrusted
slug: Web/API/Event/isTrusted
l10n:
  sourceCommit: e13c7d3a0f6bd3e32a3dbd07fe42eacb079c63ae
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`isTrusted`** der
{{domxref("Event")}}-Schnittstelle ist ein boolescher Wert, der auf `true`
gesetzt ist, wenn das Ereignis vom User-Agent erstellt wurde (einschließlich durch Benutzeraktionen und programmatische Methoden wie {{domxref("HTMLElement.focus()")}}),
und auf `false`, wenn das Ereignis über
{{domxref("EventTarget.dispatchEvent()")}} ausgelöst wurde.
Die einzige Ausnahme ist das `click`-Ereignis, das die `isTrusted`-Eigenschaft
in User-Agents auf `false` initialisiert.

## Wert

Ein boolescher Wert.

## Beispiel

```js
if (e.isTrusted) {
  /* Das Ereignis ist vertrauenswürdig */
} else {
  /* Das Ereignis ist nicht vertrauenswürdig */
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
