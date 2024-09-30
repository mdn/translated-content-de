---
title: "Window: setImmediate()-Methode"
short-title: setImmediate()
slug: Web/API/Window/setImmediate
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

Diese Methode wird verwendet, um lang andauernde Operationen zu unterbrechen und eine Rückruffunktion unmittelbar auszuführen, nachdem der Browser andere Operationen wie Ereignisse und Darstellungsaktualisierungen abgeschlossen hat.

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

Die [`clearImmediate`](/de/docs/Web/API/Window/clearImmediate)-Methode kann verwendet werden, um die unmittelbaren Aktionen zu löschen, ähnlich wie [`clearTimeout`](/de/docs/Web/API/ClearTimeout) für [`setTimeout()`](/de/docs/Web/API/SetTimeout).

Diese Methode kann anstelle der `setTimeout(fn, 0)`-Methode verwendet werden, um [aufwendige Operationen](https://humanwhocodes.com/blog/2009/08/11/timed-array-processing-in-javascript/) auszuführen.

Das Feature kann auf verschiedene Weise emuliert werden:

- [`postMessage`](/de/docs/Web/API/Window/postMessage) kann verwendet werden, um einen unmittelbaren, aber yielding Rückruf auszulösen.
- [`MessageChannel`](/de/docs/Web/API/MessageChannel) kann zuverlässig innerhalb von Web Workers verwendet werden, während die Semantik von postMessage bedeutet, dass es dort nicht verwendet werden kann.
- `setTimeout(fn, 0)` _kann_ möglicherweise verwendet werden, jedoch ist es, da es gemäß der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#timers) für Timer, die mehr als 5 Ebenen tief verschachtelt sind, auf 4ms geklemmt ist, keine geeignete Polyfill für die natürliche Unmittelbarkeit von `setImmediate`.

Alle diese Techniken sind in ein [robustes setImmediate-Polyfill](https://github.com/YuzuJS/setImmediate) integriert.

## Spezifikationen

Nicht Teil aktueller Spezifikationen.
Die [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate)-Spezifikation wird nicht mehr weiterbearbeitet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- [Microsoft `setImmediate` API Demo](https://jphpsf.github.io/setImmediate-shim-demo/)
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
