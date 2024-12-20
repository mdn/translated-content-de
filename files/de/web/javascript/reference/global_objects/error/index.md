---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{JSRef}}

**`Error`**-Objekte werden geworfen, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Siehe unten für standardmäßige eingebaute Fehlertypen.

## Beschreibung

Laufzeitfehler führen dazu, dass neue `Error`-Objekte erstellt und geworfen werden.

`Error` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

### Fehlertypen

Neben dem generischen `Error`-Konstruktor gibt es andere Kern-Fehlerkonstruktoren in JavaScript. Für clientseitige Ausnahmen siehe [Ausnahmebehandlungsanweisungen](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der im Zusammenhang mit der globalen Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine numerische Variable oder ein Parameter außerhalb ihres gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn auf eine ungültige Referenz verwiesen wird.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler darstellt.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine Variable oder ein Parameter nicht den richtigen Typ hat.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter übergeben werden.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler in einem einzigen Fehler umschließt, wenn bei einem Vorgang mehrere Fehler gemeldet werden müssen, zum Beispiel durch {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn ein interner Fehler in der JavaScript-Engine geworfen wird. Z.B. "zu viel Rekursion".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error`-Objekt.

## Statische Methoden

- `Error.captureStackTrace()` {{non-standard_inline}}
  - : Eine nicht standardmäßige V8-Funktion, die die Eigenschaft {{jsxref("Error/stack", "stack")}} auf einer Fehlerinstanz erstellt.
- `Error.stackTraceLimit` {{non-standard_inline}}
  - : Eine nicht standardmäßige numerische V8-Eigenschaft, die begrenzt, wie viele Stack-Frames in einem Fehler-Stacktrace enthalten sind.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht standardmäßige V8-Funktion, die, wenn sie vom Benutzer bereitgestellt wird, von der V8-JavaScript-Engine für geworfene Ausnahmen aufgerufen wird und es dem Benutzer ermöglicht, benutzerdefinierte Formatierungen für Stacktraces bereitzustellen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Error`-Instanzen ist der Anfangswert der {{jsxref("Error/Error", "Error")}}-Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Repräsentiert den Namen für den Fehlertyp. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} bieten ihre eigenen `name`-Eigenschaften.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht standardmäßige Eigenschaft für einen Stacktrace.

Diese Eigenschaften sind eigene Eigenschaften jeder `Error`-Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Fehlerursache, die den Grund angibt, warum der aktuelle Fehler geworfen wird — normalerweise ein anderer abgefangener Fehler. Bei vom Benutzer erstellten `Error`-Objekten ist dies der Wert, der als `cause`-Eigenschaft des zweiten Arguments des Konstruktors angegeben wird.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht standardmäßige Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht standardmäßige Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht standardmäßige Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/message", "message")}}
  - : Fehlermeldung. Bei vom Benutzer erstellten `Error`-Objekten ist dies der als erstes Argument des Konstruktors angegebene String.

## Instanzmethoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt einen String zurück, der das spezifizierte Objekt repräsentiert. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.

## Beispiele

### Einen generischen Fehler werfen

Normalerweise erstellen Sie ein `Error`-Objekt mit der Absicht, es mit dem Schlüsselwort {{jsxref("Statements/throw", "throw")}} zu werfen.
Sie können den Fehler mit dem Konstrukt {{jsxref("Statements/try...catch", "try...catch")}} behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Einen bestimmten Fehlertyp behandeln

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

### Ähnliche Fehler differenzieren

Manchmal kann ein Codeblock aus Gründen fehlschlagen, die eine unterschiedliche Handhabung erfordern, aber sehr ähnliche Fehler werfen (d. h. mit demselben Typ und derselben Nachricht).

Wenn Sie keine Kontrolle über die ursprünglich geworfenen Fehler haben, besteht eine Möglichkeit darin, sie abzufangen und neue `Error`-Objekte mit spezifischeren Nachrichten zu werfen.
Der ursprüngliche Fehler sollte an den neuen `Error` im `options`-Parameter des Konstruktors als seine `cause`-Eigenschaft übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und Stacktrace für höherstufige try/catch-Blöcke verfügbar sind.

Das folgende Beispiel zeigt dies für zwei Methoden, die sonst mit ähnlichen Fehlern fehlschlagen würden (`doFailSomeWay()` und `doFailAnotherWay()`):

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
> Wenn Sie eine Bibliothek erstellen, sollten Sie es bevorzugen, den Fehlergrund zu verwenden, um zwischen verschiedenen emittierten Fehlern zu unterscheiden, anstatt Ihre Benutzer zu bitten, die Fehlermeldung zu parsen. Siehe die [Seite zum Fehlergrund](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können ebenfalls die `cause`-Eigenschaft verwenden, sofern der Konstruktor der Unterklassen den `options`-Parameter beim Aufrufen von `super()` übergibt. Der `Error()`-Basisklassenkonstruktor wird `options.cause` lesen und die `cause`-Eigenschaft in der neuen Fehlerinstanz definieren.

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

Es könnte für Sie sinnvoll sein, eigene Fehlertypen von `Error` abzuleiten, um `throw new MyError()` verwenden zu können und mit `instanceof MyError` die Art des Fehlers im Ausnahmehandler zu überprüfen. Dies führt zu saubererem und konsistenterem Fehlerbehandlungscode.

Sehen Sie sich ["What’s a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf Stack Overflow für eine ausführliche Diskussion an.

> [!WARNING]
> Eingebaute Unterklasse kann nicht zuverlässig in vor-ES6-Code transpiliert werden, weil es keinen Weg gibt, die Basisklasse mit einem bestimmten `new.target` ohne {{jsxref("Reflect.construct()")}} zu konstruieren. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen manuell {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} am Ende des Konstruktors aufrufen; andernfalls wird die konstruierte Instanz keine `CustomError`-Instanz sein. Siehe [die TypeScript-FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) für weitere Informationen.

> [!NOTE]
> Einige Browser beinhalten den `CustomError`-Konstruktor im Stacktrace, wenn ES2015-Klassen verwendet werden.

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
- [Stacktrace API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
