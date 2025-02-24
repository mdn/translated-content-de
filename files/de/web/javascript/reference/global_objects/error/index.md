---
title: Fehler
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 333cb257f376a7e8fda3c9037420ae8d27254f29
---

{{JSRef}}

**`Error`**-Objekte werden geworfen, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Siehe unten für Standard-Fehlertypen.

## Beschreibung

Laufzeitfehler führen dazu, dass neue `Error`-Objekte erstellt und geworfen werden.

`Error` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mittels [`postMessage()`](/de/docs/Web/API/Worker/postMessage) übertragen werden kann.

### Fehlertypen

Neben dem generischen `Error`-Konstruktor gibt es weitere grundlegende Fehlerkonstruktoren in JavaScript. Für clientseitige Ausnahmen siehe [Ausnahmebehandlungsanweisungen](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der in Bezug auf die globale Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn eine numerische Variable oder ein Parameter außerhalb seines gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn auf eine ungültige Referenz zugegriffen wird.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler repräsentiert.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn eine Variable oder ein Parameter nicht vom gültigen Typ ist.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} mit ungültigen Parametern aufgerufen werden.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler in einem einzigen Fehler zusammenfasst, wenn mehrere Fehler von einer Operation gemeldet werden müssen, z. B. durch {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn ein interner Fehler in der JavaScript-Engine geworfen wird. Z.B. "zu viel Rekursion".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error`-Objekt.

## Statische Eigenschaften

- {{jsxref("Error.stackTraceLimit")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige numerische Eigenschaft, die begrenzt, wie viele Stack-Frames in einer Fehler-Stack-Spur enthalten sein sollen.

## Statische Methoden

- {{jsxref("Error.captureStackTrace()")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Funktion, die die {{jsxref("Error/stack", "stack")}}-Eigenschaft auf dem angegebenen Objekt erstellt.
- {{jsxref("Error.isError()")}}
  - : Gibt `true` zurück, wenn das Argument ein Fehler ist, oder `false` andernfalls.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht-standardmäßige Funktion, die, falls vom Benutzer bereitgestellt, von der JavaScript-Engine für geworfene Ausnahmen aufgerufen wird, sodass der Benutzer benutzerdefiniertes Formatieren von Stack-Traces bereitstellen kann. Siehe die [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api#customizing-stack-traces)-Dokumentation.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Error`-Instanzen ist der Anfangswert der {{jsxref("Error/Error", "Error")}}-Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} bieten ihre eigenen `name`-Eigenschaften.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Eigenschaft für einen Stack-Trace.

Diese Eigenschaften sind eigene Eigenschaften jeder `Error`-Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Fehlerursache, die den Grund angibt, warum der aktuelle Fehler geworfen wird — üblicherweise ein anderer gefangener Fehler. Für benutzerdefinierte `Error`-Objekte ist dies der Wert, der als `cause`-Eigenschaft des zweiten Arguments des Konstruktors bereitgestellt wird.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/message", "message")}}
  - : Fehlermeldung. Für benutzerdefinierte `Error`-Objekte ist dies der String, der als erstes Argument des Konstruktors bereitgestellt wird.

## Instanz-Methoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das angegebene Objekt repräsentiert. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.

## Beispiele

### Werfen eines generischen Fehlers

Normalerweise erstellt man ein `Error`-Objekt mit der Absicht, es unter Verwendung des {{jsxref("Statements/throw", "throw")}}-Schlüsselworts zu werfen.
Sie können den Fehler mit dem {{jsxref("Statements/try...catch", "try...catch")}}-Konstrukt behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Behandlung eines spezifischen Fehlertyps

Sie können wählen, nur bestimmte Fehlertypen zu behandeln, indem Sie den Fehlertyp mit dem {{jsxref("Operators/instanceof", "instanceof")}}-Schlüsselwort prüfen:

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

Manchmal kann ein Codeblock aus Gründen fehlschlagen, die unterschiedliche Behandlung erfordern, die jedoch sehr ähnliche Fehler werfen (d. h. mit demselben Typ und derselben Nachricht).

Wenn Sie keine Kontrolle über die ursprünglich geworfenen Fehler haben, besteht eine Möglichkeit darin, sie abzufangen und neue `Error`-Objekte zu werfen, die spezifischere Nachrichten haben.
Der ursprüngliche Fehler sollte dem neuen `Error` im `options`-Parameter des Konstruktors als `cause`-Eigenschaft übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und der Stack-Trace für höherstufige try/catch-Blöcke verfügbar sind.

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
> Wenn Sie eine Bibliothek erstellen, sollten Sie bevorzugt die Fehlerursache verwenden, um zwischen verschiedenen ausgegebenen Fehlern zu unterscheiden — anstatt Ihre Anwender zu bitten, die Fehlermeldung zu analysieren. Siehe die [Seite zur Fehlerursache](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können auch die `cause`-Eigenschaft verwenden, sofern der Unterklassenkonstruktor den `options`-Parameter bei Aufruf von `super()` übergibt. Der Basisklassenkonstruktor `Error()` wird `options.cause` lesen und die `cause`-Eigenschaft auf der neuen Fehlerinstanz definieren.

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

Sie könnten Ihre eigenen Fehlertypen definieren, die von `Error` abgeleitet sind, um `throw new MyError()` verwenden zu können und `instanceof MyError`, um die Art des Fehlers im Ausnahmebehandler zu prüfen. Dies führt zu saubererer und konsistenterer Fehlerbehandlung.

Sehen Sie sich ["What’s a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf Stack Overflow für eine ausführliche Diskussion an.

> [!WARNING]
> Eingebaute Unterklassen können nicht zuverlässig in Code vor ES6 transpiliert werden, da es keinen Weg gibt, die Basisklasse mit einem bestimmten `new.target` ohne {{jsxref("Reflect.construct()")}} zu erstellen. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen manuell {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} am Ende des Konstruktors aufrufen; andernfalls wird die erstellte Instanz keine `CustomError`-Instanz sein. Siehe [die TypeScript-FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) für weitere Informationen.

> [!NOTE]
> Einige Browser beinhalten den `CustomError`-Konstruktor im Stack-Trace, wenn ES2015-Klassen verwendet werden.

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
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Stack-Trace-API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
