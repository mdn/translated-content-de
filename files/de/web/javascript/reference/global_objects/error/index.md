---
title: Fehler
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{JSRef}}

**`Error`**-Objekte werden geworfen, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Siehe unten für standardmäßig integrierte Fehlertypen.

## Beschreibung

Laufzeitfehler führen zur Erstellung und zum Werfen neuer `Error`-Objekte.

`Error` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}} und kann daher mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Arbeitern](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

### Fehlertypen

Neben dem generischen `Error`-Konstruktor gibt es weitere zentrale Fehlerkonstruktoren in JavaScript. Für clientseitige Ausnahmen siehe [Ausnahmebehandlungsanweisungen](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der bezüglich der globalen Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn eine numerische Variable oder ein Parameter außerhalb seines gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn auf eine ungültige Referenz verwiesen wird.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler darstellt.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn eine Variable oder ein Parameter nicht vom gültigen Typ ist.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter erhalten.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler in einem einzigen Fehler zusammenfasst, wenn eine Operation mehrere Fehler melden muss, zum Beispiel durch {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn ein interner Fehler in der JavaScript-Engine geworfen wird, z. B. "zu viel Rekursion".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error`-Objekt.

## Statische Methoden

- `Error.captureStackTrace()` {{non-standard_inline}}
  - : Eine nicht standardisierte V8-Funktion, die die {{jsxref("Error/stack", "stack")}}-Eigenschaft an einer Error-Instanz erstellt.
- `Error.stackTraceLimit` {{non-standard_inline}}
  - : Eine nicht standardisierte V8-Zahleneigenschaft, die angibt, wie viele Stapelrahmen in einer Fehler-Stacktrace enthalten sein sollen.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht standardisierte V8-Funktion, die, falls sie vom Benutzer bereitgestellt wird, von der V8-JavaScript-Engine für geworfene Ausnahmen aufgerufen wird und dem Benutzer ermöglicht, benutzerdefinierte Formatierungen für Stacktraces bereitzustellen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Error`-Instanzen ist der Initialwert der {{jsxref("Error/Error", "Error")}} Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `Error.prototype.name` ist der Startwert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} stellen ihre eigenen `name`-Eigenschaften bereit.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Eigenschaft für eine Stapelverfolgung.

Diese Eigenschaften sind Eigenkapazitäten jeder `Error`-Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Fehlerursache, die den Grund angibt, warum der aktuelle Fehler geworfen wurde — normalerweise ein anderer gefangener Fehler. Bei benutzererstellten `Error`-Objekten ist dies der Wert, der als `cause`-Eigenschaft des zweiten Arguments des Konstruktors bereitgestellt wird.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler verursacht hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler verursacht hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler verursacht hat.
- {{jsxref("Error/message", "message")}}
  - : Fehlermeldung. Bei benutzererstellten `Error`-Objekten ist dies der Zeichenfolgenwert, der als erstes Argument des Konstruktors bereitgestellt wird.

## Instanzmethoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das angegebene Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.

## Beispiele

### Einen generischen Fehler werfen

In der Regel erstellen Sie ein `Error`-Objekt mit der Absicht, es mit dem Schlüsselwort {{jsxref("Statements/throw", "throw")}} zu werfen.
Sie können den Fehler mit der Konstruktion {{jsxref("Statements/try...catch", "try...catch")}} abfangen:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Einen spezifischen Fehlertyp behandeln

Sie können entscheiden, nur bestimmte Fehlertypen zu behandeln, indem Sie den Fehlertyp mit dem Schlüsselwort {{jsxref("Operators/instanceof", "instanceof")}} testen:

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

Manchmal kann ein Codeblock aus Gründen fehlschlagen, die eine unterschiedliche Behandlung erfordern, aber sehr ähnliche Fehler werfen (d. h. mit demselben Typ und derselben Nachricht).

Wenn Sie keine Kontrolle über die ursprünglich geworfenen Fehler haben, ist eine Möglichkeit, diese abzufangen und neue `Error`-Objekte zu werfen, die spezifischere Nachrichten enthalten.
Der ursprüngliche Fehler sollte dem neuen `Error` im [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#options)-Parameter des Konstruktors als `cause`-Eigenschaft übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und die Stapelverfolgung für höherstufige try/catch-Blöcke verfügbar sind.

Das Beispiel unten zeigt dies für zwei Methoden, die sonst mit ähnlichen Fehlern fehlschlagen würden (`doFailSomeWay()` und `doFailAnotherWay()`):

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
> Wenn Sie eine Bibliothek erstellen, sollten Sie es vorziehen, die Fehlerursache zu verwenden, um zwischen verschiedenen Fehlern zu unterscheiden, die ausgegeben werden, anstatt Ihre Benutzer zu bitten, die Fehlermeldung zu analysieren. Siehe die [Fehlerursachenseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können ebenfalls die `cause`-Eigenschaft verwenden, vorausgesetzt, der Konstruktor der Unterklasse übergibt den `options`-Parameter beim Aufruf von `super()`. Der `Error()`-Basisklassenkonstruktor wird `options.cause` lesen und die `cause`-Eigenschaft auf der neuen Fehlerinstanz definieren.

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

Vielleicht möchten Sie eigene Fehlertypen definieren, die von `Error` abgeleitet sind, um `throw new MyError()` werfen zu können und mit `instanceof MyError` die Art des Fehlers im Ausnahmehandler zu überprüfen. Dies führt zu saubererem und konsistenterem Code zur Fehlerbehandlung.

Siehe ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf StackOverflow für eine ausführliche Diskussion.

> [!WARNING]
> Eingebaute Subklassierungen können nicht zuverlässig in Code vor ES6 transpiliert werden, da es keine Möglichkeit gibt, die Basisklasse mit einem bestimmten `new.target` zu konstruieren, ohne {{jsxref("Reflect.construct()")}}. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen manuell {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} am Ende des Konstruktors aufrufen; andernfalls wird die erstellte Instanz keine `CustomError`-Instanz sein. Siehe [die TypeScript FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) für weitere Informationen.

> [!NOTE]
> Einige Browser enthalten den `CustomError`-Konstruktor in der Stapelverfolgung, wenn ES2015-Klassen verwendet werden.

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

- [Polyfill von `Error` mit `cause`-Unterstützung in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Stacktrace-API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
