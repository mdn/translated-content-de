---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

**`Error`** Objekte werden geworfen, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Siehe unten für standardmäßig eingebaute Fehlertypen.

## Beschreibung

Laufzeitfehler führen dazu, dass neue `Error` Objekte erstellt und geworfen werden.

`Error` ist ein [serialisierbares Objekt](/de/docs/Glossary/serializable_object), daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

### Fehlertypen

Neben dem generischen `Error` Konstruktor gibt es weitere Kern-Fehlerkonstruktoren in JavaScript. Für clientseitige Ausnahmen, siehe [Ausnahmebehandlungsanweisungen](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der in Bezug auf die globale Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine numerische Variable oder ein Parameter außerhalb seines gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn auf eine ungültige Referenz verwiesen wird.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler darstellt.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine Variable oder ein Parameter nicht von einem gültigen Typ ist.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter übergeben werden.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere in einem einzelnen Fehler eingeschlossene Fehler darstellt, wenn eine Operation mehrere Fehler melden muss, zum Beispiel durch {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn ein interner Fehler in der JavaScript-Engine ausgelöst wird. Z.B. "zu viel Rekursion".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error` Objekt.

## Statische Methoden

- `Error.captureStackTrace()` {{non-standard_inline}}
  - : Eine nicht-standardisierte V8-Funktion, die die {{jsxref("Error/stack", "stack")}} Eigenschaft auf einer Error-Instanz erstellt.
- `Error.stackTraceLimit` {{non-standard_inline}}
  - : Eine nicht-standardisierte V8-numerische Eigenschaft, die begrenzt, wie viele Stapelframes in einem Fehler-Stacktrace enthalten sind.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht-standardisierte V8-Funktion, die, wenn sie durch Benutzercode bereitgestellt wird, vom V8-JavaScript-Engine für geworfene Ausnahmen aufgerufen wird und dem Benutzer ermöglicht, benutzerdefinierte Formatierungen für Stacktraces bereitzustellen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error` Instanzen geteilt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Error` Instanzen ist der Anfangswert der {{jsxref("Error/Error", "Error")}} Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Repräsentiert den Namen für den Fehlertyp. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} bieten ihre eigenen `name` Eigenschaften.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht-standardisierte Eigenschaft für einen Stacktrace.

Diese Eigenschaften sind die eigenen Eigenschaften jeder `Error` Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Fehlerursache, die den Grund anzeigt, warum der aktuelle Fehler ausgelöst wird — üblicherweise ein anderer abgefangener Fehler. Für benutzererstellte `Error` Objekte ist dies der Wert, der als `cause` Eigenschaft des zweiten Arguments des Konstruktors übergeben wird.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht-standardisierte Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht-standardisierte Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht-standardisierte Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/message", "message")}}
  - : Fehlermeldung. Für benutzererstellte `Error` Objekte ist dies der als erstes Argument des Konstruktors angegebene String.

## Instanz-Methoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das angegebene Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.

## Beispiele

### Werfen eines generischen Fehlers

In der Regel erstellen Sie ein `Error` Objekt mit der Absicht, es mit dem {{jsxref("Statements/throw", "throw")}} Schlüsselwort auszulösen.
Sie können den Fehler mit der {{jsxref("Statements/try...catch", "try...catch")}} Konstruktion behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Behandlung eines bestimmten Fehlertyps

Sie können wählen, nur bestimmte Fehlertypen zu behandeln, indem Sie den Fehlertyp mit dem {{jsxref("Operators/instanceof", "instanceof")}} Schlüsselwort testen:

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(`${e.name}: ${e.message}`);
  } else if (e instanceof RangeError) {
    console.error(`${e.name}: ${e.message}`);
  }
  // etc.
  else {
    // If none of our cases matched leave the Error unhandled
    throw e;
  }
}
```

### Unterscheidung zwischen ähnlichen Fehlern

Manchmal kann ein Codeblock aus Gründen fehlschlagen, die eine unterschiedliche Behandlung erfordern, aber sehr ähnliche Fehler werfen (d. h. mit demselben Typ und derselben Nachricht).

Wenn Sie keine Kontrolle über die ursprünglich geworfenen Fehler haben, besteht eine Möglichkeit darin, diese abzufangen und neue `Error` Objekte zu werfen, die spezifischere Nachrichten haben.
Der ursprüngliche Fehler sollte dem neuen `Error` im `options` Parameter des Konstruktors als seine `cause` Eigenschaft übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und der Stacktrace bei höherstufigen try/catch-Blöcken verfügbar sind.

Das untenstehende Beispiel zeigt dies für zwei Methoden, die sonst mit ähnlichen Fehlern fehlschlagen würden (`doFailSomeWay()` und `doFailAnotherWay()`):

```js
function doWork() {
  try {
    doFailSomeWay();
  } catch (err) {
    throw new Error("Failed in some way", { cause: err });
  }
  try {
    doFailAnotherWay();
  } catch (err) {
    throw new Error("Failed in another way", { cause: err });
  }
}

try {
  doWork();
} catch (err) {
  switch (err.message) {
    case "Failed in some way":
      handleFailSomeWay(err.cause);
      break;
    case "Failed in another way":
      handleFailAnotherWay(err.cause);
      break;
  }
}
```

> [!NOTE]
> Wenn Sie eine Bibliothek erstellen, sollten Sie bevorzugen, Fehlerursachen zu verwenden, um zwischen verschiedenen emittierten Fehlern zu unterscheiden — statt Ihre Anwender zu bitten, die Fehlermeldung zu parsen. Siehe die [Seite zur Fehlerursache](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können ebenfalls die `cause` Eigenschaft verwenden, vorausgesetzt, der Konstruktor der Unterklassen übergibt den `options` Parameter beim Aufruf von `super()`. Der `Error()` Basisklassenkonstruktor wird `options.cause` lesen und die `cause` Eigenschaft auf der neuen Fehlerinstanz definieren.

```js
class MyError extends Error {
  constructor(message, options) {
    // Need to pass `options` as the second parameter to install the "cause" property.
    super(message, options);
  }
}

console.log(new MyError("test", { cause: new Error("cause") }).cause);
// Error: cause
```

### Benutzerdefinierte Fehlertypen

Sie könnten Ihre eigenen Fehlertypen definieren wollen, die von `Error` abgeleitet sind, um `throw new MyError()` werfen zu können und `instanceof MyError` zu verwenden, um die Art des Fehlers im Ausnahmebehandler zu überprüfen. Dies führt zu saubererem und konsistenterem Fehlerbehandlungscode.

Siehe ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf StackOverflow für eine ausführliche Diskussion.

> [!WARNING]
> Eingebaute Subklassierung kann nicht zuverlässig nach Pre-ES6-Code transpiliert werden, da es keinen Weg gibt, die Basisklasse mit einem bestimmten `new.target` ohne {{jsxref("Reflect.construct()")}} zu konstruieren. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen manuell {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} am Ende des Konstruktors aufrufen; andernfalls wird die erstellte Instanz keine `CustomError` Instanz sein. Siehe [das TypeScript FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) für weitere Informationen.

> [!NOTE]
> Einige Browser schließen den `CustomError` Konstruktor in den Stacktrace ein, wenn ES2015-Klassen verwendet werden.

```js
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
  console.error(e.stack); // stacktrace
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Error` mit `cause` Unterstützung in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Stacktrace API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
