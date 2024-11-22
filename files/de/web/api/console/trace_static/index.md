---
title: "console: trace() statische Methode"
short-title: trace()
slug: Web/API/console/trace_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.trace()`**-statische Methode gibt einen Stack-Trace in der Konsole aus.

> [!NOTE]
> In einigen Browsern kann `console.trace()` auch die Abfolge von Aufrufen und asynchronen Ereignissen ausgeben, die zum aktuellen `console.trace()` führen und nicht im Call Stack enthalten sind — um den Ursprung der aktuellen Ereignisbewertungsschleife zu identifizieren.

Weitere Informationen und Beispiele finden Sie unter [Stack-Traces](/de/docs/Web/API/console#stack_traces) in der [`console`](/de/docs/Web/API/Console) Dokumentation.

## Syntax

```js-nolint
console.trace()
console.trace(object1, /* …, */ objectN)
```

### Parameter

- `objects` {{optional_inline}}
  - : Null oder mehr Objekte, die zusammen mit dem Trace in der Konsole ausgegeben werden. Diese werden auf die gleiche Weise zusammengestellt und formatiert, wie sie es wären, wenn sie an die [`console.log()`](/de/docs/Web/API/Console/log_static) Methode übergeben würden.

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

- [Microsoft Edges Dokumentation zu `console.trace()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#trace)
- [Node.js Dokumentation zu `console.trace()`](https://nodejs.org/docs/latest/api/console.html#consoletracemessage-args)
- [Google Chromes Dokumentation zu `console.trace()`](https://developer.chrome.com/docs/devtools/console/api/#trace)
