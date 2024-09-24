---
title: "Window: setImmediate()-Methode"
short-title: setImmediate()
slug: Web/API/Window/setImmediate
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

Diese Methode wird verwendet, um lang andauernde Operationen aufzuteilen und eine Callback-Funktion unmittelbar auszuführen, nachdem der Browser andere Operationen wie Ereignisse und Anzeigeaktualisierungen abgeschlossen hat.

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

Die ID der sofortigen Ausführung, die später mit [`window.clearImmediate`](/de/docs/Web/API/Window/clearImmediate) verwendet werden kann.

## Hinweise

Die [`clearImmediate()`](/de/docs/Web/API/Window/clearImmediate)-Methode kann verwendet werden, um die sofortigen Aktionen zu löschen, genau wie [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

Diese Methode kann anstelle von `setTimeout(fn, 0)` verwendet werden, um [aufwändige Operationen](https://humanwhocodes.com/blog/2009/08/11/timed-array-processing-in-javascript/) auszuführen.

Das Feature kann auf verschiedene Weise emuliert werden:

- [`postMessage()`](/de/docs/Web/API/Window/postMessage) kann verwendet werden, um einen unmittelbaren, aber verzögernden Callback auszulösen.
- [`MessageChannel`](/de/docs/Web/API/MessageChannel) kann zuverlässig innerhalb von Web Workers verwendet werden, während die Semantik von postMessage bedeutet, dass es dort nicht verwendet werden kann.
- `setTimeout(fn, 0)` _kann_ potenziell verwendet werden, jedoch da es gemäß der HTML-Spezifikation auf 4ms für mehr als 5 Ebenen tief verschachtelte Timer begrenzt ist, ist es kein geeigneter Ersatz für die natürliche Unmittelbarkeit von `setImmediate`.

All diese Techniken sind in ein [robustes setImmediate-Polyfill](https://github.com/YuzuJS/setImmediate) integriert.

## Spezifikationen

Nicht Teil aktueller Spezifikationen. Die [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate)-Spezifikation wird nicht mehr bearbeitet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- [Microsoft `setImmediate` API-Demo](https://jphpsf.github.io/setImmediate-shim-demo/)
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
