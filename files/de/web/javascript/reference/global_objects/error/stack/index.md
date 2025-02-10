---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
l10n:
  sourceCommit: 1a6926fa459b62c69cc5bcab1d15f247a2bbdf7e
---

{{JSRef}} {{Non-standard_Header}}

> [!NOTE]
> Die `stack`-Eigenschaft wird faktisch von allen großen JavaScript-Engines implementiert, und [das JavaScript-Standardisierungskomitee arbeitet daran, sie zu standardisieren](https://github.com/tc39/proposal-error-stacks). Sie können sich jedoch nicht auf den genauen Inhalt des Stack-Strings verlassen, da es Implementierungsunterschiede gibt. Sie können jedoch im Allgemeinen davon ausgehen, dass sie existiert und sie zu Debugging-Zwecken verwenden.

Die nicht-standardisierte **`stack`**-Eigenschaft einer {{jsxref("Error")}}-Instanz bietet eine Rückverfolgung, welche Funktionen in welcher Reihenfolge von welcher Zeile und Datei sowie mit welchen Argumenten aufgerufen wurden. Der Stack-String führt von den neuesten Aufrufen zu den früheren zurück bis zum ursprünglichen Aufruf im globalen Gültigkeitsbereich.

## Wert

Ein String.

Da die `stack`-Eigenschaft nicht standardisiert ist, unterscheiden sich die Implementierungen bezüglich des Ortes, an dem sie bereitgestellt wird.

- In Firefox ist sie eine Zugriffs-Eigenschaft auf `Error.prototype`.
- In Chrome und Safari ist sie eine Daten-Eigenschaft auf jeder `Error`-Instanz, mit folgendem Deskriptor:

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Jede JavaScript-Engine verwendet ihr eigenes Format für Stack-Traces, aber im Großen und Ganzen sind sie in ihrer Struktur konsistent. Jede Implementierung verwendet eine separate Zeile im Stack, um jeden Funktionsaufruf darzustellen. Der Aufruf, der direkt den Fehler verursacht hat, steht oben, und der Aufruf, der die gesamte Aufrufkette gestartet hat, steht unten. Nachfolgend finden Sie einige Beispiele für Stack-Traces:

```js
function foo() {
  bar();
}

function bar() {
  baz();
}

function baz() {
  console.log(new Error().stack);
}

foo();
```

```plain
#### JavaScriptCore
baz@filename.js:10:24
bar@filename.js:6:6
foo@filename.js:2:6
global code@filename.js:13:4

#### SpiderMonkey
baz@filename.js:10:15
bar@filename.js:6:3
foo@filename.js:2:3
@filename.js:13:1

#### V8
Error
    at baz (filename.js:10:15)
    at bar (filename.js:6:3)
    at foo (filename.js:2:3)
    at filename.js:13:1
```

V8 stellt die nicht-standardisierte [Stack Trace API](https://v8.dev/docs/stack-trace-api) bereit, um den Stack Trace anzupassen, einschließlich {{jsxref("Error.captureStackTrace()")}}, {{jsxref("Error.stackTraceLimit")}} und `Error.prepareStackTrace()`. Andere Engines unterstützen diese API in unterschiedlichem Ausmaß.

Verschiedene Engines setzen diesen Wert zu unterschiedlichen Zeiten fest. Die meisten modernen Engines setzen ihn, wenn das {{jsxref("Error")}}-Objekt erstellt wird. Dies bedeutet, dass Sie die vollständigen Informationen zur Aufrufkette innerhalb einer Funktion mit dem folgenden Ansatz abrufen können:

```js
function foo() {
  console.log(new Error().stack);
}
```

ohne einen Fehler werfen und diesen anschließend abfangen zu müssen.

Stack-Frames können auch andere Dinge als explizite Funktionsaufrufe umfassen. Zum Beispiel beginnen Event-Listener, Timeout-Jobs und Promise-Handler jeweils ihre eigene Aufrufkette. Auch Quellcode innerhalb von {{jsxref("Global_Objects/eval", "eval()")}}- und {{jsxref("Function")}}-Konstruktoraufrufen erscheint im Stack:

```js
console.log(new Function("return new Error('Function failed')")().stack);
console.log("====");
console.log(eval("new Error('eval failed')").stack);
```

```plain
#### JavaScriptCore
anonymous@
global code@filename.js:1:65
====
eval code@
eval@[native code]
global code@filename.js:3:17

#### SpiderMonkey
anonymous@filename.js line 1 > Function:1:8
@filename.js:1:65

====
@filename.js line 3 > eval:1:1
@filename.js:3:13

#### V8
Error: Function failed
    at eval (eval at <anonymous> (filename.js:1:13), <anonymous>:1:8)
    at filename.js:1:65
====
Error: eval failed
    at eval (eval at <anonymous> (filename.js:3:13), <anonymous>:1:1)
    at filename.js:3:13
```

In Firefox können Sie das `//# sourceURL`-Directive verwenden, um eine eval-Quelle zu benennen. Weitere Informationen finden Sie in den Firefox-Dokumenten [Debug eval sources](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html) und im Blog-Beitrag [Naming `eval` Scripts with the `//# sourceURL` Directive](https://fitzgen.com/2014/12/05/name-eval-scripts.html).

## Beispiele

### Die stack-Eigenschaft verwenden

Das folgende Skript zeigt, wie Sie die `stack`-Eigenschaft verwenden, um einen Stack Trace in Ihrem Browserfenster auszugeben. Sie können dies nutzen, um zu überprüfen, wie die Stack-Struktur Ihres Browsers aussieht.

```html hidden
<div id="output"></div>
```

```css hidden
#output {
  white-space: pre;
  font-family: monospace;
}
```

```js
function trace() {
  throw new Error("trace() failed");
}
function b() {
  trace();
}
function a() {
  b(3, 4, "\n\n", undefined, {});
}
try {
  a("first call, first arg");
} catch (e) {
  document.getElementById("output").textContent = e.stack;
}
```

{{EmbedLiveSample("Using_the_stack_property", "700", "200")}}

## Spezifikationen

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [TraceKit](https://github.com/csnover/TraceKit/) auf GitHub
- [stacktrace.js](https://github.com/stacktracejs/stacktrace.js) auf GitHub
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in der V8-Dokumentation
