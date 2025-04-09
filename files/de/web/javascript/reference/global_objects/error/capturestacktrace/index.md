---
title: Error.captureStackTrace()
slug: Web/JavaScript/Reference/Global_Objects/Error/captureStackTrace
l10n:
  sourceCommit: 57b01b603385ca121240d52d542adfa60da0f92e
---

{{JSRef}}

Die statische Methode **`Error.captureStackTrace()`** installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) Eigenschaft.

## Syntax

```js-nolint
Error.captureStackTrace(object)
Error.captureStackTrace(object, constructor)
```

### Parameter

- `object`
  - : Das Objekt, an dem die `stack`-Eigenschaft hinzugefügt wird.
- `constructor` {{optional_inline}}
  - : Eine Funktion, typischerweise der Konstruktor, in dem das `object` erstellt wurde. Beim Erfassen des Stack-Traces werden alle Frames oberhalb des obersten Aufrufs dieser Funktion, einschließlich dieses Aufrufs, aus dem Stack-Trace herausgelassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

Das `object` wird vor Ort mit einer zusätzlichen eigenen Eigenschaft namens `stack` modifiziert, deren Zeichenfolgenwert das gleiche Format wie {{jsxref("Error.prototype.stack")}} hat. Diese Eigenschaft ist nicht enumerierbar und konfigurierbar. In V8 ist es ein Getter-Setter-Paar. In SpiderMonkey und JavaScriptCore ist es eine dateneigenschaft, die beschreibbar ist.

## Beispiele

### Verwendung von Error.captureStackTrace()

Die `getStack()` Dienstprogrammfunktion gibt den aktuellen Stack-Trace an dem Punkt zurück, an dem sie aufgerufen wird, und entfernt sich selbst aus dem Stack. Dies dient dem gleichen Debugging-Zweck wie [`console.trace()`](/de/docs/Web/API/console/trace_static), ermöglicht es Ihnen jedoch, die Zeichenfolge an anderer Stelle auszugeben. Beachten Sie, dass sie zu diesem Zweck keine `Error` Instanz erstellt, sondern `stack` auf einem einfachen Objekt installiert, was für unsere Zwecke effizienter wäre. Normalerweise würden Sie `Error.captureStackTrace` für Objekte aufrufen, die als Fehler geworfen werden sollen, wie im nächsten Beispiel gezeigt wird.

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

### Installation eines Stack-Traces auf einem benutzerdefinierten Fehlerobjekt

Der Hauptanwendungsfall für `Error.captureStackTrace()` ist die Installation eines Stack-Traces auf einem benutzerdefinierten Fehlerobjekt. Typischerweise definieren Sie [benutzerdefinierte Fehler](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types), indem Sie die `Error` Klasse erweitern, was die `stack`-Eigenschaft automatisch durch Vererbung verfügbar macht. Das Problem beim Standard-Stack-Trace ist jedoch, dass er den Konstruktoraufruf selbst einschließt, was Implementierungsdetails preisgibt. Dies können Sie vermeiden, indem Sie `Error.captureStackTrace()` verwenden, das es ermöglicht, den Stack-Trace auch für benutzerdefinierte Fehler zu installieren, die nicht von `Error` erben.

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

Beachten Sie, dass selbst wenn Sie hier nicht `Error.captureStackTrace()` aufrufen, einige Engines dennoch intelligent genug sind, `MyError` aus dem Stack-Trace zu vermeiden, wenn der Konstruktor von `Error` erbt. Der Aufruf von `Error.captureStackTrace()` ist wichtiger für benutzerdefinierte Fehler, die aus irgendeinem Grund nicht von `Error` erben.

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
- [Stack-Trace-API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
