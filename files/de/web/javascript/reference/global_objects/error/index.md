---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

**`Error`**-Objekte werden geworfen, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Im Folgenden finden Sie die standardmäßigen eingebauten Fehlertypen.

## Beschreibung

Laufzeitfehler führen dazu, dass neue `Error`-Objekte erstellt und geworfen werden.

`Error` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Arbeitern](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann.

### Fehlertypen

Neben dem generischen `Error`-Konstruktor gibt es weitere Kernfehlertypen in JavaScript. Für klientseitige Ausnahmen siehe [Behandlungsanweisungen für Ausnahmen](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der in Bezug auf die globale Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine numerische Variable oder ein Parameter außerhalb seines gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn auf eine ungültige Referenz zugegriffen wird.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler darstellt.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine Variable oder ein Parameter nicht vom gültigen Typ ist.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter erhalten.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler in einem einzigen Fehler darstellt, wenn mehrere Fehler von einer Operation gemeldet werden müssen, beispielsweise durch {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn ein interner Fehler in der JavaScript-Engine geworfen wird. Z.B. "zu viele Rekursionen".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error`-Objekt.

## Statische Eigenschaften

- {{jsxref("Error.stackTraceLimit")}} {{non-standard_inline}}
  - : Eine nicht standardisierte numerische Eigenschaft, die begrenzt, wie viele Stack-Frames in einem Fehler-Stack-Trace enthalten sind.

## Statische Methoden

- {{jsxref("Error.captureStackTrace()")}}
  - : Eine nicht standardisierte Funktion, die die Eigenschaft {{jsxref("Error/stack", "stack")}} auf dem bereitgestellten Objekt erstellt.
- {{jsxref("Error.isError()")}}
  - : Gibt `true` zurück, wenn das Argument ein Fehler ist, oder `false` andernfalls.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht standardisierte Funktion, die, falls vom Benutzer bereitgestellt, von der JavaScript-Engine für geworfene Ausnahmen aufgerufen wird, um dem Benutzer benutzerdefiniertes Formatieren von Stack-Traces zu ermöglichen. Siehe die [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api#customizing-stack-traces) Dokumentation.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Error`-Instanzen ist der Anfangswert der {{jsxref("Error/Error", "Error")}}-Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Repräsentiert den Namen für den Fehlertyp. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} bieten ihre eigenen `name`-Eigenschaften.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Eigenschaft für einen Stack-Trace.

Diese Eigenschaften sind eigene Eigenschaften jeder `Error`-Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Fehlerursache, die den Grund angibt, warum der aktuelle Fehler geworfen wird — üblicherweise ein anderer abgefangener Fehler. Für benutzererstellte `Error`-Objekte ist dies der Wert, der als `cause`-Eigenschaft des zweiten Arguments des Konstruktors bereitgestellt wird.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/message", "message")}}
  - : Fehlermeldung. Für benutzererstellte `Error`-Objekte ist dies der String, der als erstes Argument des Konstruktors bereitgestellt wird.

## Instanzmethoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt einen String zurück, der das spezifizierte Objekt repräsentiert. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.

## Beispiele

### Werfen eines generischen Fehlers

Üblicherweise erstellen Sie ein `Error`-Objekt mit der Absicht, es mit dem {{jsxref("Statements/throw", "throw")}}-Schlüsselwort zu werfen.
Sie können den Fehler mit der Konstruktion {{jsxref("Statements/try...catch", "try...catch")}} behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Behandlung eines spezifischen Fehlertyps

Sie können sich entscheiden, nur spezifische Fehlertypen zu behandeln, indem Sie den Fehlertyp mit dem Schlüsselwort {{jsxref("instanceof")}} testen:

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

Manchmal kann ein Codeblock aus Gründen fehlschlagen, die eine unterschiedliche Behandlung erfordern, aber sehr ähnliche Fehler werfen (d.h. mit dem gleichen Typ und der gleichen Meldung).

Wenn Sie keine Kontrolle über die ursprünglichen Fehler haben, die geworfen werden, können Sie diese abfangen und neue `Error`-Objekte werfen, die spezifischere Nachrichten haben.
Der ursprüngliche Fehler sollte dem neuen `Error`-Objekt im `options`-Parameter des Konstruktors als seine `cause`-Eigenschaft übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und der Stack-Trace in höheren try/catch-Blöcken verfügbar sind.

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
> Wenn Sie eine Bibliothek erstellen, sollten Sie bevorzugt die Fehlerursache nutzen, um zwischen verschiedenen geworfenen Fehlern zu unterscheiden — anstatt Ihre Nutzer zu bitten, die Fehlermeldung zu analysieren. Siehe die [Seite zur Fehlerursache](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können auch die `cause`-Eigenschaft verwenden, vorausgesetzt, der Konstruktor der Unterklassen übergibt den `options`-Parameter, wenn `super()` aufgerufen wird. Der `Error()`-Basisklassenkonstruktor liest `options.cause` und definiert die `cause`-Eigenschaft auf der neuen Fehlerinstanz.

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

Sie möchten möglicherweise Ihre eigenen Fehlertypen definieren, die von `Error` abgeleitet sind, um `throw new MyError()` verwenden zu können und den Fehlertyp im Ausnahmehandler mit `instanceof MyError` zu überprüfen. Dies führt zu einer saubereren und konsistenteren Fehlerbehandlungslogik.

Sehen Sie ["Was ist eine gute Methode, um `Error` in JavaScript zu erweitern?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf Stack Overflow für eine ausführliche Diskussion.

> [!WARNING]
> Die eingebaute Unterklassenbildung kann nicht zuverlässig in Vor-ES6-Code transpiliert werden, da es keine Möglichkeit gibt, die Basisklasse mit einem bestimmten `new.target` ohne {{jsxref("Reflect.construct()")}} zu erstellen. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen manuell {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} am Ende des Konstruktors aufrufen; andernfalls wird die konstruierte Instanz keine `CustomError`-Instanz sein. Siehe [das TypeScript FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) für weitere Informationen.

> [!NOTE]
> Einige Browser enthalten den `CustomError`-Konstruktor im Stack-Trace bei Verwendung von ES2015-Klassen.

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

- [Polyfill von `Error` mit Unterstützung für `cause` in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- [es-shims polyfill von Error `cause`](https://www.npmjs.com/package/error-cause)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Stack Trace API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
