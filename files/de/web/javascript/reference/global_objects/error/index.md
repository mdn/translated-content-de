---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 57b01b603385ca121240d52d542adfa60da0f92e
---

{{JSRef}}

**`Error`**-Objekte werden ausgeworfen, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Siehe unten für Standardfehlerarten.

## Beschreibung

Laufzeitfehler führen zur Erstellung und Auslösung neuer `Error`-Objekte.

`Error` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

### Fehlertypen

Neben dem generischen `Error`-Konstruktor gibt es weitere Kernfehlerkonstruktoren in JavaScript. Für clientseitige Ausnahmen siehe [Ausnahmebehandlungsanweisungen](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der bei der Verwendung der globalen Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine numerische Variable oder ein Parameter außerhalb seines gültigen Bereichs ist.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der beim Dereferenzieren eines ungültigen Verweises auftritt.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler darstellt.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine Variable oder ein Parameter nicht vom gültigen Typ ist.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter übergeben werden.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler umschließt, wenn mehrere Fehler in einer Operation gemeldet werden müssen, zum Beispiel bei {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn ein interner Fehler in der JavaScript-Engine ausgelöst wird, z.B. "zu viel Rekursion".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error`-Objekt.

## Statische Eigenschaften

- {{jsxref("Error.stackTraceLimit")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige numerische Eigenschaft, die begrenzt, wie viele Stack-Frames in einem Fehler-Stack-Tracing enthalten sind.

## Statische Methoden

- {{jsxref("Error.captureStackTrace()")}}
  - : Eine nicht-standardmäßige Funktion, die die {{jsxref("Error/stack", "stack")}}-Eigenschaft auf dem bereitgestellten Objekt erstellt.
- {{jsxref("Error.isError()")}}
  - : Gibt `true` zurück, wenn das Argument ein Fehler ist, oder `false` andernfalls.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht-standardmäßige Funktion, die, falls sie durch Benutzer-Code bereitgestellt wird, von der JavaScript-Engine für ausgelöste Ausnahmen aufgerufen wird, um benutzerdefiniertes Formatieren von Stack-Traces zu ermöglichen. Siehe die [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api#customizing-stack-traces)-Dokumentation.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Error`-Instanzen ist der Anfangswert der {{jsxref("Error/Error", "Error")}}-Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Repräsentiert den Namen des Fehler-Typs. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} stellen ihre eigenen `name`-Eigenschaften bereit.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Eigenschaft für eine Stack-Tracing.

Diese Eigenschaften sind eigene Eigenschaften jeder `Error`-Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Fehlerursache, die den Grund angibt, warum der aktuelle Fehler ausgelöst wird — üblicherweise ein anderer abgefangener Fehler. Für benutzererstellte `Error`-Objekte ist dies der Wert, der als `cause`-Eigenschaft des zweiten Arguments des Konstruktors bereitgestellt wird.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler verursacht hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler verursacht hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler verursacht hat.
- {{jsxref("Error/message", "message")}}
  - : Fehlermeldung. Für benutzererstellte `Error`-Objekte ist dies der als erstes Argument des Konstruktors bereitgestellte String.

## Instanz-Methoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.

## Beispiele

### Einen generischen Fehler auswerfen

Normalerweise erstellt man ein `Error`-Objekt mit der Absicht, es mittels des Schlüsselwortes {{jsxref("Statements/throw", "throw")}} auszulösen.
Sie können den Fehler mit der Konstruktion {{jsxref("Statements/try...catch", "try...catch")}} behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Einen spezifischen Fehlertyp behandeln

Sie können sich entscheiden, nur bestimmte Fehlertypen zu behandeln, indem Sie den Fehlertyp mit dem Schlüsselwort {{jsxref("Operators/instanceof", "instanceof")}} testen:

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

### Zwischen ähnlichen Fehlern unterscheiden

Manchmal kann ein Codeblock aus Gründen fehlschlagen, die eine unterschiedliche Behandlung erfordern, aber sehr ähnliche Fehler auslösen (d.h. mit demselben Typ und derselben Nachricht).

Wenn Sie keine Kontrolle über die ursprünglich ausgelösten Fehler haben, ist eine Option, diese abzufangen und neue `Error`-Objekte mit spezifischeren Nachrichten auszulösen.
Der ursprüngliche Fehler sollte an das neue `Error`-Objekt im `options`-Parameter des Konstruktors als seine `cause`-Eigenschaft übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und Stack-Trace für höherstufige try/catch-Blöcke verfügbar sind.

Das folgende Beispiel zeigt dies für zwei Methoden, die ansonsten mit ähnlichen Fehlern fehlschlagen würden (`doFailSomeWay()` und `doFailAnotherWay()`):

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
> Wenn Sie eine Bibliothek erstellen, sollten Sie es vorziehen, die Fehlerursache zu nutzen, um zwischen verschiedenen ausgegebenen Fehlern zu unterscheiden, anstatt Ihre Verbraucher dazu aufzufordern, die Fehlermeldung zu parsen. Siehe die [Seite zur Fehlerursache](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können ebenfalls die `cause`-Eigenschaft verwenden, sofern der Konstruktor der Unterklassen den Parameter `options` beim Aufruf von `super()` weitergibt. Der `Error()`-Basisklassenkonstruktor wird `options.cause` lesen und die `cause`-Eigenschaft auf der neuen Fehlerinstanz definieren.

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

Möglicherweise möchten Sie Ihre eigenen Fehlertypen definieren, die von `Error` abgeleitet sind, um `throw new MyError()` verwenden zu können und mit `instanceof MyError` die Art des Fehlers im Ausnahmehandler zu überprüfen. Dies führt zu saubererem und einheitlicherem Fehlerbehandlungscode.

Siehe ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf Stack Overflow für eine ausführliche Diskussion.

> [!WARNING]
> Eingebaute Unterklassen können nicht zuverlässig in vor-ES6-Code transpiliert werden, da es keine Möglichkeit gibt, die Basisklasse mit einem bestimmten `new.target` ohne {{jsxref("Reflect.construct()")}} zu konstruieren. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen manuell {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} am Ende des Konstruktors aufrufen; andernfalls wird die konstruierte Instanz keine `CustomError`-Instanz sein. Siehe [die TypeScript-FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) für weitere Informationen.

> [!NOTE]
> Einige Browser schließen den `CustomError`-Konstruktor in der Stack-Tracing ein, wenn ES2015-Klassen verwendet werden.

```js
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (non-standard)
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
  console.error(e.stack); // stack trace
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Error` mit `cause`-Unterstützung in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- [es-shims Polyfill von Error `cause`](https://www.npmjs.com/package/error-cause)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Stack Trace API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
