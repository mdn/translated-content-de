---
title: "Event: isTrusted-Eigenschaft"
short-title: isTrusted
slug: Web/API/Event/isTrusted
l10n:
  sourceCommit: e13c7d3a0f6bd3e32a3dbd07fe42eacb079c63ae
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`isTrusted`** der [`Event`](/de/docs/Web/API/Event)-Schnittstelle ist ein boolescher Wert, der `true` ist, wenn das Ereignis vom User-Agent generiert wurde (einschließlich durch Benutzeraktionen und programmatische Methoden wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)), und `false`, wenn das Ereignis über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wurde. Die einzige Ausnahme ist das `click`-Ereignis, bei dem die `isTrusted`-Eigenschaft in User-Agents auf `false` gesetzt wird.

## Wert

Ein boolescher Wert.

## Beispiel

```js
if (e.isTrusted) {
  /* The event is trusted */
} else {
  /* The event is not trusted */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
