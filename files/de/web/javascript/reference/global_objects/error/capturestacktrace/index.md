---
title: Error.captureStackTrace()
short-title: captureStackTrace()
slug: Web/JavaScript/Reference/Global_Objects/Error/captureStackTrace
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Error.captureStackTrace()`** installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als die `stack`-Eigenschaft.

## Syntax

```js-nolint
Error.captureStackTrace(object)
Error.captureStackTrace(object, constructor)
```

### Parameter

- `object`
  - : Das Objekt, auf dem die `stack`-Eigenschaft hinzugefügt wird.
- `constructor` {{optional_inline}}
  - : Eine Funktion, typischerweise der Konstruktor, wo das `object` erstellt wurde. Beim Sammeln des Stack-Traces werden alle Frames oberhalb des obersten Aufrufs dieser Funktion, einschließlich dieses Aufrufs, aus dem Stack-Trace ausgeschlossen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

Das `object` wird vor Ort mit einer zusätzlichen eigenen Eigenschaft namens `stack` modifiziert, deren Zeichenkettenwert dasselbe Format wie {{jsxref("Error.prototype.stack")}} hat. Diese Eigenschaft ist nicht aufzählbar und konfigurierbar. In V8 ist es ein Getter-Setter-Paar. In SpiderMonkey und JavaScriptCore ist es eine Daten-Eigenschaft, die beschreibbar ist.

## Beispiele

### Verwendung von Error.captureStackTrace()

Die `getStack()`-Hilfsfunktion gibt den aktuellen Stack-Trace an dem Punkt zurück, an dem sie aufgerufen wird, und entfernt sich selbst aus dem Stack. Dies erfüllt denselben Debugging-Zweck wie [`console.trace()`](/de/docs/Web/API/console/trace_static), ermöglicht es Ihnen jedoch, die Zeichenkette an anderer Stelle auszugeben. Beachten Sie, dass hierfür keine `Error`-Instanz erstellt wird, sondern `stack` auf einem einfachen Objekt installiert wird, was effizienter für unsere Zwecke wäre. Normalerweise würden Sie `Error.captureStackTrace` bei Objekten aufrufen, die als Fehler geworfen werden sollen, wie im nächsten Beispiel gezeigt.

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

### Installation des Stack-Traces auf einem benutzerdefinierten Fehlerobjekt

Der Hauptanwendungsfall für `Error.captureStackTrace()` besteht darin, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren. Typischerweise definieren Sie [benutzerdefinierte Fehler](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types) durch Erweitern der `Error`-Klasse, die automatisch die `stack`-Eigenschaft über Vererbung verfügbar macht. Das Problem mit dem Standard-Stack-Trace ist jedoch, dass er den Konstruktoraufruf selbst enthält, der Implementierungsdetails preisgibt. Dies können Sie vermeiden, indem Sie `Error.captureStackTrace()` verwenden, das es ermöglicht, den Stack-Trace auch für benutzerdefinierte Fehler zu installieren, die nicht von `Error` erben.

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

Beachten Sie, dass selbst wenn Sie `Error.captureStackTrace()` hier nicht aufrufen, einige Engines dennoch klug genug sind, um `MyError` im Stack-Trace zu vermeiden, wenn der Konstruktor von `Error` erbt. Das Aufrufen von `Error.captureStackTrace()` ist wichtiger für benutzerdefinierte Fehler, die aus irgendeinem Grund nicht von `Error` erben.

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
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in der V8-Dokumentation
