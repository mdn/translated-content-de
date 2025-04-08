---
title: Error.captureStackTrace()
slug: Web/JavaScript/Reference/Global_Objects/Error/captureStackTrace
l10n:
  sourceCommit: 6607de0bd57056125e4ae227c4d54402286a423f
---

{{JSRef}}{{Non-standard_Header}}

Die statische Methode **`Error.captureStackTrace()`** installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als dessen [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack)-Eigenschaft.

## Syntax

```js-nolint
Error.captureStackTrace(object)
Error.captureStackTrace(object, constructor)
```

### Parameter

- `object`
  - : Das Objekt, dem die `stack`-Eigenschaft hinzugefügt wird.
- `constructor` {{optional_inline}}
  - : Eine Funktion, typischerweise der Konstruktor, in dem das `object` erstellt wurde. Beim Erfassen der Stapelverfolgung werden alle Frames über dem obersten Aufruf dieser Funktion, einschließlich dieses Aufrufs, aus der Stapelverfolgung weggelassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

Das `object` wird vor Ort mit einer zusätzlichen eigenen Eigenschaft namens `stack` modifiziert, deren Stringwert dasselbe Format wie {{jsxref("Error.prototype.stack")}} hat. Diese Eigenschaft ist nicht aufzählbar und konfigurierbar. In V8 ist es ein Paar Getter und Setter. In SpiderMonkey und JavaScriptCore ist es eine Daten-Eigenschaft, die beschreibbar ist.

## Beispiele

### Verwendung von Error.captureStackTrace()

Die `getStack()`-Hilfsfunktion gibt die aktuelle Stapelverfolgung an dem Punkt zurück, an dem sie aufgerufen wird, und entfernt sich selbst aus dem Stack. Dies dient dem gleichen Debugging-Zweck wie [`console.trace()`](/de/docs/Web/API/console/trace_static), ermöglicht es Ihnen jedoch, den String an anderer Stelle auszugeben. Beachten Sie, dass es zu diesem Zweck keine `Error`-Instanz erstellt, sondern `stack` auf einem einfachen Objekt installiert, was für unsere Zwecke effizienter wäre. Normalerweise würden Sie `Error.captureStackTrace` auf Objekten aufrufen, die als Fehler geworfen werden sollen, wie im nächsten Beispiel gezeigt.

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

Der Hauptanwendungsfall für `Error.captureStackTrace()` besteht darin, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren. Typischerweise definieren Sie [benutzerdefinierte Fehler](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types), durch Erweitern der `Error`-Klasse, wodurch die `stack`-Eigenschaft automatisch über die Vererbung verfügbar gemacht wird. Das Problem bei der Standard-Stapelverfolgung ist jedoch, dass sie den Konstruktoraufruf selbst umfasst, was Implementierungsdetails preisgibt. Dies können Sie vermeiden, indem Sie `Error.captureStackTrace()` verwenden, das es ermöglicht, die Stapelverfolgung auch für benutzerdefinierte Fehler zu installieren, die nicht von `Error` erben.

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

Beachten Sie, dass selbst wenn Sie hier `Error.captureStackTrace()` nicht aufrufen, einige Engines immer noch klug genug sind, `MyError` in der Stapelverfolgung zu vermeiden, wenn der Konstruktor von `Error` erbt. Der Aufruf von `Error.captureStackTrace()` ist wichtiger für benutzerdefinierte Fehler, die aus irgendeinem Grund nicht von `Error` erben.

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
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
