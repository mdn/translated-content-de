---
title: "Window: setImmediate() Methode"
short-title: setImmediate()
slug: Web/API/Window/setImmediate
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}} {{non-standard_header}}

Diese Methode wird verwendet, um lang andauernde Operationen aufzuteilen und eine Callback-Funktion auszuführen, nachdem der Browser andere Operationen wie Ereignisse und Anzeigeaktualisierungen abgeschlossen hat.

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

Die Methode [`clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) kann verwendet werden, um die Immediate-Aktionen zu löschen, ähnlich wie [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

Diese Methode kann anstelle der Methode `setTimeout(fn, 0)` verwendet werden, um [schwere Operationen](https://humanwhocodes.com/blog/2009/08/11/timed-array-processing-in-javascript/) auszuführen.

Die Funktion kann auf verschiedene Weisen emuliert werden:

- [`postMessage()`](/de/docs/Web/API/Window/postMessage) kann verwendet werden, um eine unmittelbare, aber erzwungene Callback-Funktion auszulösen.
- [`MessageChannel`](/de/docs/Web/API/MessageChannel) kann zuverlässig innerhalb von Web Workers verwendet werden, während die
  Semantik von postMessage bedeutet, dass es dort nicht verwendet werden kann.
- `setTimeout(fn, 0)` _kann_ potenziell verwendet werden, jedoch da es für Timer, die mehr als 5 Ebenen tief verschachtelt sind, auf 4ms geklammert ist [laut dem HTML-Standard](https://html.spec.whatwg.org/multipage/webappapis.html#timers), ist es kein geeignetes Polyfill für die natürliche Unmittelbarkeit von `setImmediate`.

Alle diese Techniken sind in einem [robusten setImmediate Polyfill](https://github.com/YuzuJS/setImmediate) integriert.

## Spezifikationen

Nicht Teil aktueller Spezifikationen.
Die [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate) Spezifikation wird nicht weiter bearbeitet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- [Microsoft `setImmediate` API Demo](https://jphpsf.github.io/setImmediate-shim-demo/)
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
