---
title: "Window: setImmediate()-Methode"
short-title: setImmediate()
slug: Web/API/Window/setImmediate
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}} {{non-standard_header}}

Diese Methode wird verwendet, um lang andauernde Operationen aufzuteilen und eine Callback-Funktion auszuführen, sobald der Browser andere Vorgänge wie Ereignisse und Anzeigeaktualisierungen abgeschlossen hat.

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

Die ID der mit `setImmediate()` geplanten Aktion. Sie kann später mit [`window.clearImmediate`](/de/docs/Web/API/Window/clearImmediate) verwendet werden.

## Hinweise

Mit der Methode [`clearImmediate()`](/de/docs/Web/API/Window/clearImmediate) lassen sich mit `setImmediate()` geplante Aktionen abbrechen, ähnlich wie mit [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) geplanten Aktionen.

Diese Methode kann anstelle von `setTimeout(fn, 0)` verwendet werden, um [rechenintensive Operationen](https://humanwhocodes.com/blog/2009/08/11/timed-array-processing-in-javascript/) auszuführen.

Die Funktionalität lässt sich auf verschiedene Arten nachbilden:

- [`postMessage()`](/de/docs/Web/API/Window/postMessage) kann verwendet werden, um einen Callback möglichst bald auszulösen, ohne andere Aufgaben dauerhaft zu blockieren.
- [`MessageChannel`](/de/docs/Web/API/MessageChannel) kann zuverlässig innerhalb von Web Workers verwendet werden. Aufgrund der Semantik von postMessage ist dessen Verwendung dort nicht möglich.
- `setTimeout(fn, 0)` _kann_ zwar verwendet werden. Da das Intervall bei Timern, die mehr als fünf Ebenen tief verschachtelt sind, [gemäß der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#timers) jedoch auf mindestens 4 ms begrenzt wird, eignet es sich nicht als Polyfill für die unmittelbare Ausführung durch `setImmediate`.

Alle diese Techniken sind in einem [robusten Polyfill für setImmediate](https://github.com/YuzuJS/setImmediate) enthalten.

## Spezifikationen

Die Methode ist nicht Teil einer aktuellen Spezifikation.
An der Spezifikation [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate) wird nicht mehr gearbeitet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `setImmediate` in `core-js`](https://core-js.io/docs/features/web-standards/set-immediate)
- [Demo der `setImmediate`-API von Microsoft](https://jphpsf.github.io/setImmediate-shim-demo/)
- [`Window.clearImmediate()`](/de/docs/Web/API/Window/clearImmediate)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
