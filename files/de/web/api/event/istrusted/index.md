---
title: "Event: isTrusted-Eigenschaft"
short-title: isTrusted
slug: Web/API/Event/isTrusted
l10n:
  sourceCommit: 2fcbc06a9c381dac235dec2fa3528e33c8261a0f
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`isTrusted`**-Eigenschaft des [`Event`](/de/docs/Web/API/Event)-Interfaces ist ein Boolean-Wert, der `true` ist, wenn das Ereignis vom User-Agent generiert wurde (einschließlich durch Benutzeraktionen und programmgesteuerte Methoden wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)), und `false`, wenn das Ereignis über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wurde. Das `click`-Ereignis, das durch [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click) ausgelöst wird, setzt die `isTrusted`-Eigenschaft auf `false`.

## Wert

Ein Boolean-Wert.

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
