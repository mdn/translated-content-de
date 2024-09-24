---
title: "console: trace() statische Methode"
short-title: trace()
slug: Web/API/console/trace_static
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.trace()`** statische Methode gibt einen Stack-Trace in der Konsole aus.

> [!NOTE]
> In einigen Browsern kann `console.trace()` auch die Abfolge von Aufrufen und asynchronen Ereignissen ausgeben, die zu der aktuellen `console.trace()` führen, welche nicht im Aufrufstack sind – um die Herkunft der aktuellen Ereignis-Evaluierungsschleife zu identifizieren.

Siehe [Stack-Traces](/de/docs/Web/API/console#stack_traces) in der {{domxref("console")}} Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
trace()
trace(object1, /* …, */ objectN)
```

### Parameter

- `objects` {{optional_inline}}
  - : Null oder mehr Objekte, die zusammen mit dem Trace in der Konsole ausgegeben werden. Diese werden auf die gleiche Weise zusammengefügt und formatiert, als ob sie an die Methode {{domxref("console/log_static", "console.log()")}} übergeben würden.

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
