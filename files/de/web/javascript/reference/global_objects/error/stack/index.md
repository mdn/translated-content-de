---
title: Error.prototype.stack
short-title: stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

> [!NOTE]
> Die `stack`-Eigenschaft wird de facto von allen großen JavaScript-Engines implementiert, und [das JavaScript-Standardisierungskomitee plant, sie zu standardisieren](https://github.com/tc39/proposal-error-stacks). Aufgrund von Implementierungsinkonsistenzen können Sie sich nicht auf den genauen Inhalt des Stack-Strings verlassen, aber Sie können im Allgemeinen davon ausgehen, dass er existiert und für Debugging-Zwecke verwendet werden kann.

Die nicht standardisierte **`stack`**-Eigenschaft einer {{jsxref("Error")}}-Instanz bietet eine Rückverfolgung, welche Funktionen in welcher Reihenfolge aufgerufen wurden, von welcher Zeile und Datei, und mit welchen Argumenten. Der Stack-String verläuft von den neuesten Aufrufen zu den früheren zurück und führt zurück zum ursprünglichen Aufruf im globalen Kontext.

## Wert

Ein String.

Da die `stack`-Eigenschaft nicht standardisiert ist, unterscheiden sich die Implementierungen, wo sie installiert wird.

- In Firefox ist sie eine Accessor-Eigenschaft auf `Error.prototype`.
- In Chrome und Safari ist sie eine Dateneigenschaft auf jeder `Error`-Instanz, mit der folgenden Descriptor:

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Jede JavaScript-Engine verwendet ihr eigenes Format für Stack-Traces, aber sie sind ziemlich konsistent in ihrer Struktur auf hoher Ebene. Jede Implementierung verwendet eine separate Zeile im Stack, um jeden Funktionsaufruf darzustellen. Der Aufruf, der den Fehler direkt verursacht hat, steht ganz oben, und der Aufruf, der die gesamte Aufrufkette gestartet hat, steht ganz unten. Unten sind einige Beispiele von Stack-Traces:

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

V8 bietet die nicht standardisierte [Stack Trace API](https://v8.dev/docs/stack-trace-api) zur Anpassung des Stack-Traces, einschließlich {{jsxref("Error.captureStackTrace()")}}, {{jsxref("Error.stackTraceLimit")}}, und `Error.prepareStackTrace()`. Andere Engines unterstützen diese API in unterschiedlichem Maße.

Verschiedene Engines setzen diesen Wert zu unterschiedlichen Zeiten. Die meisten modernen Engines setzen ihn, wenn das {{jsxref("Error")}}-Objekt erstellt wird. Das bedeutet, dass Sie die vollständige Aufruf-Stack-Information innerhalb einer Funktion erhalten können, indem Sie Folgendes verwenden:

```js
function foo() {
  console.log(new Error().stack);
}
```

Ohne einen Fehler werfen und dann abfangen zu müssen.

Stack-Frames können auch andere Dinge als explizite Funktionsaufrufe sein. Zum Beispiel beginnen Event-Listener, Timeout-Jobs und Promise-Handler ihre eigene Aufrufkette. Quellcode innerhalb von {{jsxref("Global_Objects/eval", "eval()")}} und {{jsxref("Function")}}-Konstruktoraufrufen erscheint ebenfalls im Stack:

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

In Firefox können Sie die `//# sourceURL`-Direktive verwenden, um eine eval-Quelle zu benennen. Siehe die Firefox-Dokumentation [Debug eval sources](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html) und den Blog-Eintrag [Naming `eval` Scripts with the `//# sourceURL` Directive](https://fitzgen.com/2014/12/05/name-eval-scripts.html) für mehr Details.

## Beispiele

### Verwendung der stack-Eigenschaft

Das folgende Skript demonstriert, wie Sie die `stack`-Eigenschaft verwenden können, um einen Stack-Trace in Ihrem Browserfenster auszugeben. Sie können dies verwenden, um zu überprüfen, wie die Stack-Struktur Ihres Browsers aussieht.

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [TraceKit](https://github.com/csnover/TraceKit/) auf GitHub
- [stacktrace.js](https://github.com/stacktracejs/stacktrace.js) auf GitHub
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
