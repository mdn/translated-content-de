---
title: "console: trace() statische Methode"
short-title: trace()
slug: Web/API/console/trace_static
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.trace()`** gibt einen Stack-Trace in die Konsole aus.

> [!NOTE]
> In einigen Browsern kann `console.trace()` auch die Abfolge von Aufrufen und asynchronen Ereignissen ausgeben, die zur aktuellen `console.trace()` führen, welche sich nicht im Aufruf-Stack befinden – um die Herkunft der aktuellen Ereignisbewertungsschleife zu identifizieren.

Siehe [Stack-Traces](/de/docs/Web/API/console#stack_traces) in der [`console`](/de/docs/Web/API/Console) Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
trace()
trace(object1, /* …, */ objectN)
```

### Parameter

- `objects` {{optional_inline}}
  - : Null oder mehr Objekte, die zusammen mit dem Trace in die Konsole ausgegeben werden sollen. Diese werden zusammengestellt und formatiert, wie sie es wären, wenn sie an die [`console.log()`](/de/docs/Web/API/Console/log_static) Methode übergeben würden.

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

- [Microsoft Edges Dokumentation für `console.trace()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#trace)
- [Node.JS Dokumentation für `console.trace()`](https://nodejs.org/docs/latest/api/console.html#consoletracemessage-args)
- [Google Chromes Dokumentation für `console.trace()`](https://developer.chrome.com/docs/devtools/console/api/#trace)
