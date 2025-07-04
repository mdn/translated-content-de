---
title: "console: trace() statische Methode"
short-title: trace()
slug: Web/API/console/trace_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.trace()`** gibt einen Stack-Trace in der Konsole aus.

> [!NOTE]
> In einigen Browsern kann `console.trace()` auch die Abfolge von Aufrufen und asynchronen Ereignissen, die zum aktuellen `console.trace()` führen, ausgeben, die sich nicht im Aufrufstack befinden — um die Herkunft der aktuellen Ereignisauswertungsschleife zu identifizieren.

Siehe [Stack-Traces](/de/docs/Web/API/console#stack_traces) in der [`console`](/de/docs/Web/API/console) Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
console.trace()
console.trace(object1, /* …, */ objectN)
```

### Parameter

- `objects` {{optional_inline}}
  - : Null oder mehr Objekte, die zusammen mit dem Trace in der Konsole ausgegeben werden sollen. Diese werden zusammengebaut und formatiert, wie es auch der Fall wäre, wenn sie an die [`console.log()`](/de/docs/Web/API/console/log_static) Methode übergeben würden.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

In der Konsole wird der folgende Trace angezeigt:

```plain
bar
foo
<anonymous>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation zu `console.trace()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#trace)
- [Node.js-Dokumentation zu `console.trace()`](https://nodejs.org/docs/latest/api/console.html#consoletracemessage-args)
- [Google Chrome-Dokumentation zu `console.trace()`](https://developer.chrome.com/docs/devtools/console/api/#trace)
