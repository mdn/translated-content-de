---
title: "Fenster: setImmediate() Methode"
short-title: setImmediate()
slug: Web/API/Window/setImmediate
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

Diese Methode wird verwendet, um lange laufende Operationen aufzuteilen und eine Callback-Funktion sofort auszuführen, nachdem der Browser andere Operationen wie Ereignisse und Anzeigeaktualisierungen abgeschlossen hat.

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

Die ID des sofortigen Aufrufs, die später mit {{DOMxRef("window.clearImmediate")}} verwendet werden kann.

## Hinweise

Die {{DOMxRef("Window.clearImmediate", "clearImmediate")}}-Methode kann verwendet werden, um die sofortigen Aktionen zu löschen, ähnlich wie {{DOMxRef("clearTimeout")}} für {{DOMxRef("setTimeout()")}}.

Diese Methode kann anstelle der `setTimeout(fn, 0)`-Methode genutzt werden, um [schwere Operationen](https://humanwhocodes.com/blog/2009/08/11/timed-array-processing-in-javascript/) auszuführen.

Das Feature kann auf verschiedene Arten emuliert werden:

- {{DOMxRef("Window.postMessage", "postMessage")}} kann verwendet werden, um einen sofortigen, aber wartenden Callback auszulösen.
- {{DOMxRef("MessageChannel")}} kann zuverlässig innerhalb von Web Workern verwendet werden, wobei die
  Semantik von postMessage bedeutet, dass es dort nicht verwendet werden kann.
- `setTimeout(fn, 0)` _kann_ potenziell verwendet werden, jedoch wird es gemäß der HTML-Spezifikation [wenn mehr als 5 Ebenen von Timern geschachtelt sind, auf 4ms begrenzt](https://html.spec.whatwg.org/multipage/webappapis.html#timers), was es nicht zu einer geeigneten Fallback-Lösung für die natürliche Unmittelbarkeit von `setImmediate` macht.

All diese Techniken sind in ein [robustes setImmediate Polyfill](https://github.com/YuzuJS/setImmediate) integriert.

## Spezifikationen

Teil keiner aktuellen Spezifikationen.
Die [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate) Spezifikation wird nicht mehr bearbeitet.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Polyfill von `setImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- [Microsoft `setImmediate` API Demo](https://jphpsf.github.io/setImmediate-shim-demo/)
- {{DOMxRef("Window.clearImmediate()")}}
- {{DOMxRef("Window.requestIdleCallback()")}}
