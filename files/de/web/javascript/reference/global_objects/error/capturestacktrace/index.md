---
title: Error.captureStackTrace()
slug: Web/JavaScript/Reference/Global_Objects/Error/captureStackTrace
l10n:
  sourceCommit: 1a6926fa459b62c69cc5bcab1d15f247a2bbdf7e
---

{{JSRef}}{{Non-standard_Header}}

> [!NOTE]
> Dieses Feature ist Teil der nicht standardisierten [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api). Aus Kompatibilitätsgründen wird es jedoch faktisch von allen großen JavaScript-Engines implementiert.

Die statische Methode **`Error.captureStackTrace()`** installiert Stapelverfolgungsinformationen auf einem angegebenen Objekt als [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack)-Eigenschaft.

## Syntax

```js-nolint
Error.captureStackTrace(object)
Error.captureStackTrace(object, constructor)
```

### Parameter

- `object`
  - : Das Objekt, dem die `stack`-Eigenschaft hinzugefügt wird.
- `constructor` {{optional_inline}}
  - : Eine Funktion, typischerweise der Konstruktor, in dem das `object` erstellt wurde. Beim Sammeln der Stapelverfolgung werden alle Rahmen über dem obersten Aufruf dieser Funktion, einschließlich dieses Aufrufs, aus der Stapelverfolgung ausgeschlossen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

Das `object` wird direkt mit einer neuen eigenen Eigenschaft namens `stack` modifiziert, deren String-Wert dasselbe Format wie {{jsxref("Error.prototype.stack")}} hat. Diese Eigenschaft ist nicht aufzählbar und konfigurierbar. In V8 ist sie ein Getter-Setter-Paar. In SpiderMonkey und JavaScriptCore ist sie eine beschreibbare Dateneigenschaft.

## Beispiele

### Verwendung von Error.captureStackTrace()

Die Utility-Funktion `getStack()` liefert die aktuelle Stapelverfolgung an dem Punkt, an dem sie aufgerufen wird, und entfernt sich selbst aus dem Stapel. Dies dient demselben Debugging-Zweck wie [`console.trace()`](/de/docs/Web/API/console/trace_static), erlaubt es Ihnen jedoch, den String an anderer Stelle auszugeben. Beachten Sie, dass dafür keine `Error`-Instanz erstellt wird, sondern `stack` auf ein einfaches Objekt installiert wird, was für unsere Zwecke effizienter ist. Normalerweise würden Sie `Error.captureStackTrace` auf Objekte anwenden, die als Fehler geworfen werden sollen, wie im nächsten Beispiel gezeigt.

```js
function getStack() {
  const obj = {};
  if ("captureStackTrace" in Error) {
    // Avoid getStack itself in the stack trace
    Error.captureStackTrace(obj, getStack);
  }
  return obj.stack;
}

function foo() {
  console.log(getStack());
}

foo();
// Error
//     at foo (<anonymous>:8:15)
//     at <anonymous>:11:1
```

### Installation der Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt

Der Hauptanwendungsfall für `Error.captureStackTrace()` ist die Installation einer Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt. Typischerweise definieren Sie [benutzerdefinierte Fehler](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types), indem Sie die `Error`-Klasse erweitern, die automatisch die `stack`-Eigenschaft per Vererbung verfügbar macht. Das Problem bei der Standard-Stapelverfolgung ist jedoch, dass sie den Konstruktoraufruf selbst enthält, wodurch Implementierungsdetails preisgegeben werden. Dies können Sie vermeiden, indem Sie `Error.captureStackTrace()` verwenden, das ermöglicht, die Stapelverfolgung auch für benutzerdefinierte Fehler zu installieren, die nicht von `Error` erben.

```js
class MyError extends Error {
  constructor(message, options) {
    super(message, options);
    if ("captureStackTrace" in Error) {
      // Avoid MyError itself in the stack trace
      Error.captureStackTrace(this, MyError);
    }
  }
}

const myError = new MyError("Something went wrong");
console.log(myError.stack);
// Error: Something went wrong
//     at <anonymous>:8:17
```

Beachten Sie, dass einige Engines, selbst wenn Sie hier nicht `Error.captureStackTrace()` aufrufen, intelligent genug sind, `MyError` aus der Stapelverfolgung zu entfernen, wenn der Konstruktor von `Error` erbt. Der Aufruf von `Error.captureStackTrace()` ist wichtiger für benutzerdefinierte Fehler, die aus irgendeinem Grund nicht von `Error` erben.

```js
class MyError {
  constructor(message) {
    this.message = message;
    if ("captureStackTrace" in Error) {
      // Avoid MyError itself in the stack trace
      Error.captureStackTrace(this, MyError);
    }
  }
}

const myError = new MyError("Something went wrong");
console.log(myError.stack);
// Error: Something went wrong
//     at <anonymous>:8:17
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.stackTraceLimit")}}
- [Stack Trace API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
