---
title: Fehler
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

**`Error`**-Objekte werden ausgelöst, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Siehe unten für standardmäßig eingebaute Fehlertypen.

## Beschreibung

Laufzeitfehler führen dazu, dass neue `Error`-Objekte erstellt und ausgelöst werden.

`Error` ist ein [serialisierbares Objekt](/de/docs/Glossary/serializable_object), es kann also mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mithilfe von [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

### Fehlertypen

Neben dem generischen `Error`-Konstruktor gibt es in JavaScript weitere Kern-Fehler-Konstruktoren. Für clientseitige Ausnahmen siehe [Anweisungen zur Ausnahmebehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der in Bezug auf die globale Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn eine numerische Variable oder ein Parameter außerhalb seines gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn auf eine ungültige Referenz verwiesen wird.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler darstellt.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn eine Variable oder ein Parameter nicht vom gültigen Typ ist.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter übergeben werden.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler in einem einzelnen Fehler verpackt darstellt, wenn eine Operation, z. B. durch {{jsxref("Promise.any()")}}, mehrere Fehler melden muss.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn ein interner Fehler in der JavaScript-Engine ausgelöst wird. Z.B. "zu viele Rekursionen".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error`-Objekt.

## Statische Methoden

- `Error.captureStackTrace()` {{non-standard_inline}}
  - : Eine nicht standardisierte V8-Funktion, die die Eigenschaft {{jsxref("Error/stack", "stack")}} auf einer Fehlerinstanz erstellt.
- `Error.stackTraceLimit` {{non-standard_inline}}
  - : Eine nicht standardisierte V8-numerische Eigenschaft, die begrenzt, wie viele Stack-Frames in einem Fehler-Stacktrace enthalten sein sollen.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht standardisierte V8-Funktion, die, falls sie vom Benutzer bereitgestellt wird, von der V8-JavaScript-Engine für ausgelöste Ausnahmen aufgerufen wird und es dem Benutzer ermöglicht, benutzerdefinierte Formatierungen für Stacktraces bereitzustellen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Error`-Instanzen ist der Anfangswert der {{jsxref("Error/Error", "Error")}}-Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Repräsentiert den Namen für den Fehlertyp. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} stellen ihre eigenen `name`-Eigenschaften bereit.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Eigenschaft für einen Stacktrace.

Diese Eigenschaften sind eigene Eigenschaften jeder `Error`-Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Ursache des Fehlers, die den Grund angibt, warum der aktuelle Fehler ausgelöst wird — normalerweise ein anderer abgefangener Fehler. Für benutzererstellte `Error`-Objekte ist dies der Wert, der als `cause`-Eigenschaft des zweiten Arguments des Konstruktors angegeben wurde.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/message", "message")}}
  - : Fehlermeldung. Für benutzererstellte `Error`-Objekte ist dies der String, der als erstes Argument des Konstruktors angegeben wurde.

## Instanz-Methoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt einen String zurück, der das spezifizierte Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.

## Beispiele

### Einen generischen Fehler werfen

Normalerweise erstellen Sie ein `Error`-Objekt mit der Absicht, es mit dem Schlüsselwort {{jsxref("Statements/throw", "throw")}} auszulösen.
Sie können den Fehler mit der Konstruktion {{jsxref("Statements/try...catch", "try...catch")}} behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Behandlung eines spezifischen Fehlertyps

Sie können wählen, nur spezifische Fehlertypen zu behandeln, indem Sie den Fehlertyp mit dem Schlüsselwort {{jsxref("Operators/instanceof", "instanceof")}} testen:

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

Manchmal kann ein Codeblock aus Gründen fehlschlagen, die unterschiedliche Behandlungen erfordern, aber sehr ähnliche Fehler werfen (d. h. mit demselben Typ und derselben Nachricht).

Wenn Sie keine Kontrolle über die ursprünglich ausgelösten Fehler haben, besteht eine Option darin, diese abzufangen und neue `Error`-Objekte zu werfen, die spezifischere Nachrichten enthalten.
Der ursprüngliche Fehler sollte an den neuen `Error` im Parameter [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#options) des Konstruktors als seine `cause`-Eigenschaft übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und der Stacktrace in höheren try/catch-Blöcken verfügbar sind.

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
> Wenn Sie eine Bibliothek erstellen, sollten Sie bevorzugt die Fehlerursache verwenden, um zwischen verschiedenen von Ihnen ausgegebenen Fehlern zu unterscheiden — anstatt Ihre Nutzer zu bitten, die Fehlermeldung zu parsen. Siehe die [Seite zur Fehlerursache](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können ebenfalls die `cause`-Eigenschaft verwenden, vorausgesetzt, der Konstruktor der Unterklassen übergibt den `options`-Parameter beim Aufruf von `super()`. Der `Error()`-Basisklassenkonstruktor wird `options.cause` lesen und die `cause`-Eigenschaft auf der neuen Fehlerinstanz definieren.

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

Sie können eigene Fehlertypen definieren, die von `Error` abgeleitet sind, um `throw new MyError()` auszulösen und `instanceof MyError` zu verwenden, um die Art des Fehlers im Ausnahmebehandler zu prüfen. Dies führt zu saubererem und konsistenterem Fehlerbehandlungscode.

Siehe ["Was ist eine gute Möglichkeit, Error in JavaScript zu erweitern?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf StackOverflow für eine ausführliche Diskussion.

> [!WARNING]
> Eingebautes Subclassing kann nicht zuverlässig in Vor-ES6-Code transpiliert werden, da es keine Möglichkeit gibt, die Basisklasse mit einem bestimmten `new.target` zu konstruieren ohne {{jsxref("Reflect.construct()")}}. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} manuell am Ende des Konstruktors aufrufen; andernfalls wird die konstruierte Instanz keine `CustomError`-Instanz sein. Weitere Informationen finden Sie in den [TypeScript-FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work).

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
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
