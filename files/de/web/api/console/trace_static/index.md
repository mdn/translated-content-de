---
title: "console: trace() statische Methode"
short-title: trace()
slug: Web/API/console/trace_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.trace()`** gibt einen Stack-Trace in der Konsole aus.

> [!NOTE]
> In einigen Browsern kann `console.trace()` auch die Abfolge von Aufrufen und asynchronen Ereignissen ausgeben, die zur aktuellen `console.trace()` führen und nicht im Aufruf-Stack enthalten sind – um die Herkunft der aktuellen Ereignisbewertungsschleife zu identifizieren.

Siehe [Stack-Traces](/de/docs/Web/API/console#stack_traces) in der [`console`](/de/docs/Web/API/Console) Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
console.trace()
console.trace(object1, /* …, */ objectN)
```

### Parameter

- `objects` {{optional_inline}}
  - : Null oder mehr Objekte, die zusammen mit dem Trace in der Konsole ausgegeben werden. Diese werden auf die gleiche Weise zusammengesetzt und formatiert, wie sie über die Methode [`console.log()`](/de/docs/Web/API/Console/log_static) übergeben würden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

In der Konsole wird folgender Trace angezeigt:

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

- [Microsoft Edge's Dokumentation für `console.trace()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#trace)
- [Node.js Dokumentation für `console.trace()`](https://nodejs.org/docs/latest/api/console.html#consoletracemessage-args)
- [Google Chrome's Dokumentation für `console.trace()`](https://developer.chrome.com/docs/devtools/console/api/#trace)
