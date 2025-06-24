---
title: "Window: setImmediate() Methode"
short-title: setImmediate()
slug: Web/API/Window/setImmediate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

Diese Methode wird verwendet, um lang andauernde Operationen zu unterbrechen und eine Rückruffunktion direkt nach Abschluss anderer Operationen wie Ereignissen und Darstellungsaktualisierungen durch den Browser auszuführen.

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

Die Methode [`clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) kann verwendet werden, um die unmittelbaren Aktionen zu löschen, ähnlich wie [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

Diese Methode kann anstelle der `setTimeout(fn, 0)` Methode verwendet werden, um [aufwendige Operationen](https://humanwhocodes.com/blog/2009/08/11/timed-array-processing-in-javascript/) auszuführen.

Die Funktionalität kann auf verschiedene Weise emuliert werden:

- [`postMessage()`](/de/docs/Web/API/Window/postMessage) kann verwendet werden, um einen unmittelbaren, aber freigebenden Rückruf auszulösen.
- [`MessageChannel`](/de/docs/Web/API/MessageChannel) kann zuverlässig innerhalb von Web Workern verwendet werden, während die Semantik von postMessage bedeutet, dass es dort nicht verwendet werden kann.
- `setTimeout(fn, 0)` _kann_ potentiell verwendet werden, jedoch da es für Timer, die mehr als 5 Ebenen tief verschachtelt sind, auf 4ms beschränkt ist [laut HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#timers), eignet es sich nicht als geeignete Polyfill für die natürliche Unmittelbarkeit von `setImmediate`.

All diese Techniken sind in ein [robustes setImmediate Polyfill](https://github.com/YuzuJS/setImmediate) integriert.

## Spezifikationen

Nicht Teil aktueller Spezifikationen. Die [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate) Spezifikation wird nicht mehr bearbeitet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- [Microsoft `setImmediate` API Demo](https://jphpsf.github.io/setImmediate-shim-demo/)
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
