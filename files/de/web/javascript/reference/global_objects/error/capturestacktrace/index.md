---
title: Error.captureStackTrace()
short-title: captureStackTrace()
slug: Web/JavaScript/Reference/Global_Objects/Error/captureStackTrace
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Error.captureStackTrace()`** statische Methode installiert Informationen zum Stack-Trace auf einem bereitgestellten Objekt als die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack)-Eigenschaft.

## Syntax

```js-nolint
Error.captureStackTrace(object)
Error.captureStackTrace(object, constructor)
```

### Parameter

- `object`
  - : Das Objekt, auf dem die `stack`-Eigenschaft hinzugefügt wird.
- `constructor` {{optional_inline}}
  - : Eine Funktion, typischerweise der Konstruktor, in dem das `object` erstellt wurde. Beim Sammeln des Stack-Traces werden alle Frames über dem obersten Aufruf dieser Funktion, einschließlich dieses Aufrufs, aus dem Stack-Trace herausgelassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

Das `object` wird in-place mit einer zusätzlichen eigenen Eigenschaft namens `stack` modifiziert, deren String-Wert dasselbe Format wie {{jsxref("Error.prototype.stack")}} hat. Diese Eigenschaft ist nicht aufzählbar und konfigurierbar. In V8 ist es ein Getter-Setter-Paar. In SpiderMonkey und JavaScriptCore ist es eine beschreibbare Dateneigenschaft.

## Beispiele

### Verwendung von Error.captureStackTrace()

Die `getStack()`-Hilfsfunktion gibt den aktuellen Stack-Trace an dem Punkt zurück, an dem sie aufgerufen wird, und entfernt sich selbst aus dem Stack. Dies dient demselben Debugging-Zweck wie [`console.trace()`](/de/docs/Web/API/console/trace_static), ermöglicht Ihnen jedoch, den String anderswo auszugeben. Beachten Sie, dass sie hierfür keine `Error`-Instanz konstruiert, sondern `stack` auf einem einfachen Objekt installiert, was für unsere Zwecke effizienter wäre. Normalerweise würden Sie `Error.captureStackTrace` auf Objekten anwenden, die als Fehler geworfen werden sollen, wie im nächsten Beispiel gezeigt.

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

### Stack-Trace auf einem benutzerdefinierten Fehlerobjekt installieren

Der Hauptanwendungsfall für `Error.captureStackTrace()` ist, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren. Typischerweise definieren Sie [benutzerdefinierte Fehler](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types) durch das Erweitern der `Error`-Klasse, was die `stack`-Eigenschaft automatisch durch Vererbung verfügbar macht. Allerdings enthält der Standard-Stack-Trace den Konstruktoraufruf selbst, was Implementierungsdetails preisgibt. Dies können Sie vermeiden, indem Sie `Error.captureStackTrace()` verwenden, was die Installation des Stack-Traces auch für benutzerdefinierte Fehler ermöglicht, die nicht von `Error` erben.

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

Beachten Sie, dass einige Engines selbst dann schlau genug sind, um `MyError` im Stack-Trace zu vermeiden, wenn der Konstruktor von `Error` erbt, auch wenn Sie `Error.captureStackTrace()` hier nicht aufrufen. Der Aufruf von `Error.captureStackTrace()` ist wichtiger für benutzerdefinierte Fehler, die aus irgendeinem Grund nicht von `Error` erben.

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
