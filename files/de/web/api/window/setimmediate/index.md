---
title: "Window: setImmediate()-Methode"
short-title: setImmediate()
slug: Web/API/Window/setImmediate
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

Diese Methode wird verwendet, um langlaufende Operationen aufzuteilen und eine Callback-Funktion unmittelbar nach Abschluss anderer Operationen des Browsers, wie Ereignisse und Anzeigeaktualisierungen, auszuführen.

## Syntax

```js-nolint
setImmediate(func)
setImmediate(func, param1)
setImmediate(func, param1, param2)
setImmediate(func, param1, param2, /* …, */ paramN)
```

### Parameter

- `func`

  - : Die Funktion, die Sie aufrufen möchten.

- `param1`, …, `paramN`
  - : Alle Parameter werden direkt an Ihre Funktion übergeben.

### Rückgabewert

Die ID des Immediate, die später mit [`window.clearImmediate`](/de/docs/Web/API/Window/clearImmediate) verwendet werden kann.

## Hinweise

Die Methode [`clearImmediate`](/de/docs/Web/API/Window/clearImmediate) kann verwendet werden, um die sofortigen Aktionen zu löschen, ähnlich wie [`clearTimeout`](/de/docs/Web/API/ClearTimeout) für [`setTimeout()`](/de/docs/Web/API/SetTimeout).

Diese Methode kann anstelle der `setTimeout(fn, 0)` Methode verwendet werden, um [aufwändige Operationen](https://humanwhocodes.com/blog/2009/08/11/timed-array-processing-in-javascript/) auszuführen.

Die Funktion kann auf verschiedene Weise emuliert werden:

- [`postMessage`](/de/docs/Web/API/Window/postMessage) kann verwendet werden, um einen sofortigen, aber ausweichenden Callback zu triggern.
- [`MessageChannel`](/de/docs/Web/API/MessageChannel) kann zuverlässig innerhalb von Web-Workern verwendet werden, während die Semantik von postMessage bedeutet, dass es dort nicht verwendet werden kann.
- `setTimeout(fn, 0)` _kann_ potenziell verwendet werden, jedoch wird es laut [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#timers) bei mehr als 5-facher Verschachtelung der Timer auf 4 ms begrenzt, was es für ein natürliches `setImmediate` als Polyfill ungeeignet macht.

All diese Techniken sind in ein [robustes setImmediate-Polyfill](https://github.com/YuzuJS/setImmediate) integriert.

## Spezifikationen

Nicht Teil der aktuellen Spezifikationen.
Die [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate) Spezifikation wird nicht mehr weiterentwickelt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- [Microsoft `setImmediate` API Demo](https://jphpsf.github.io/setImmediate-shim-demo/)
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
