---
title: "console: trace() Methode"
short-title: trace()
slug: Web/API/console/trace_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.trace()`** gibt einen Stack-Trace an die Konsole aus.

> [!NOTE]
> In einigen Browsern kann `console.trace()` auch die Abfolge von Aufrufen und asynchronen Ereignissen ausgeben, die zum aktuellen `console.trace()` führen, die sich nicht auf dem Aufrufstack befinden, um die Herkunft der aktuellen Ereignisbewertungsschleife zu identifizieren.

Siehe [Stack-Traces](/de/docs/Web/API/console#stack_traces) in der [`console`](/de/docs/Web/API/console) Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
console.trace()
console.trace(object1, /* …, */ objectN)
```

### Parameter

- `objects` {{optional_inline}}
  - : Null oder mehr Objekte, die zusammen mit dem Trace an die Konsole ausgegeben werden sollen. Diese werden zusammengefügt und formatiert, wie wenn sie an die Methode [`console.log()`](/de/docs/Web/API/console/log_static) übergeben würden.

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

- [Microsoft Edge-Dokumentation zu `console.trace()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#trace)
- [Node.js-Dokumentation zu `console.trace()`](https://nodejs.org/docs/latest/api/console.html#consoletracemessage-args)
- [Google Chrome-Dokumentation zu `console.trace()`](https://developer.chrome.com/docs/devtools/console/api/#trace)
