---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 1a6926fa459b62c69cc5bcab1d15f247a2bbdf7e
---

{{JSRef}}

**`Error`**-Objekte werden geworfen, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Unten finden Sie die standardmäßigen eingebauten Fehlertypen.

## Beschreibung

Laufzeitfehler führen dazu, dass neue `Error`-Objekte erstellt und geworfen werden.

`Error` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, d. h., es kann mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

### Fehlertypen

Neben dem generischen `Error`-Konstruktor gibt es weitere Kernfehlerkonstruktoren in JavaScript. Für clientseitige Ausnahmen siehe [Anweisungen zur Ausnahmebehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der im Zusammenhang mit der globalen Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn eine numerische Variable oder ein Parameter außerhalb seines gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der beim Dereferenzieren eines ungültigen Verweises auftritt.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler darstellt.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn eine Variable oder ein Parameter keinen gültigen Typ hat.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter erhalten.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler in einem einzigen Fehler zusammenfasst, wenn ein Vorgang mehrere Fehler melden muss, z. B. durch {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn ein interner Fehler in der JavaScript-Engine geworfen wird, z. B. "zu viele Rekursionen".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error`-Objekt.

## Statische Eigenschaften

- {{jsxref("Error.stackTraceLimit")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige numerische Eigenschaft, die begrenzt, wie viele Stack-Frames in eine Fehler-Stack-Trace eingeschlossen werden.

## Statische Methoden

- {{jsxref("Error.captureStackTrace()")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Funktion, die die {{jsxref("Error/stack", "stack")}}-Eigenschaft für ein bereitgestelltes Objekt erstellt.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht-standardmäßige Funktion, die, wenn sie vom Benutzer bereitgestellt wird, von der JavaScript-Engine für geworfene Ausnahmen aufgerufen wird. Sie erlaubt die benutzerdefinierte Formatierung von Stack-Traces. Siehe die [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api#customizing-stack-traces)-Dokumentation.

## Instanz-Eigenschaften

Die folgenden Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error`-Instanzen gemeinsam verwendet.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Error`-Instanzen ist der Initialwert der {{jsxref("Error/Error", "Error")}}-Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Stellt den Namen des Fehlertyps dar. Für `Error.prototype.name` ist der Initialwert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} haben ihre eigenen `name`-Eigenschaften.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Eigenschaft für eine Stack-Trace.

Die folgenden Eigenschaften sind eigene Eigenschaften jeder `Error`-Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Fehlerursache, die den Grund angibt, warum der aktuelle Fehler geworfen wird – normalerweise ein anderer abgefangener Fehler. Für benutzerdefinierte `Error`-Objekte ist dies der Wert, der als `cause`-Eigenschaft des zweiten Konstruktorarguments bereitgestellt wird.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht-standardmäßige Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/message", "message")}}
  - : Fehlermeldung. Für benutzerdefinierte `Error`-Objekte ist dies die Zeichenkette, die als erstes Argument des Konstruktors bereitgestellt wird.

## Instanz-Methoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das spezifizierte Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.

## Beispiele

### Generischen Fehler werfen

Meistens erstellen Sie ein `Error`-Objekt, um es mit dem {{jsxref("Statements/throw", "throw")}}-Schlüsselwort zu werfen.
Sie können den Fehler mit der Konstruktion {{jsxref("Statements/try...catch", "try...catch")}} behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Handhabung eines spezifischen Fehlertyps

Sie können wählen, nur spezifische Fehlertypen zu behandeln, indem Sie den Fehlertyp mit dem {{jsxref("Operators/instanceof", "instanceof")}}-Schlüsselwort testen:

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

### Unterscheidung ähnlicher Fehler

Manchmal kann ein Codeblock aus Gründen fehlschlagen, die unterschiedliche Behandlung erfordern, aber sehr ähnliche Fehler werfen (z. B. vom gleichen Typ und mit der gleichen Nachricht).

Wenn Sie keine Kontrolle über die ursprünglichen geworfenen Fehler haben, können Sie diese abfangen und neue `Error`-Objekte werfen, die spezifischere Nachrichten haben.
Der ursprüngliche Fehler sollte an den neuen `Error` im `options`-Parameter des Konstruktors als dessen `cause`-Eigenschaft übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und die Stack-Trace in höheren try/catch-Blöcken verfügbar sind.

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
> Wenn Sie eine Bibliothek erstellen, sollten Sie bevorzugen, die Fehlerursache zu verwenden, um zwischen verschiedenen geworfenen Fehlern zu unterscheiden – anstatt von Ihren Nutzern zu verlangen, die Fehlermeldung zu analysieren. Siehe die [Seite über die Fehlerursache](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können ebenfalls die `cause`-Eigenschaft verwenden, vorausgesetzt, die Konstruktoren der Unterklassen übergeben den `options`-Parameter beim Aufruf von `super()`. Der Konstruktor der `Error()`-Basis-Klasse liest `options.cause` und definiert die `cause`-Eigenschaft auf der neuen Fehlerinstanz.

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

Es kann gewünscht sein, eigene Fehlertypen von `Error` abzuleiten, um `throw new MyError()` auszuführen und mit `instanceof MyError` die Art des Fehlers im Ausnahmehandler zu prüfen. Dies führt zu saubererem und konsistenterem Fehlerbehandlungscode.

Siehe ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf Stack Overflow für eine detaillierte Diskussion.

> [!WARNING]
> Eingebautes Subclassing kann nicht zuverlässig in prä-ES6-Code transpiliert werden, da es keinen Weg gibt, die Basisklasse mit einem bestimmten `new.target` zu konstruieren, ohne {{jsxref("Reflect.construct()")}}. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} manuell am Ende des Konstruktors aufrufen. Andernfalls wird die erzeugte Instanz keine `CustomError`-Instanz sein. Weitere Informationen finden Sie in den [TypeScript-FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work).

> [!NOTE]
> Einige Browser beinhalten den `CustomError`-Konstruktor in der Stack-Trace, wenn sie ES2015-Klassen verwenden.

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
- [Stack-Trace-API](https://v8.dev/docs/stack-trace-api) in der V8-Dokumentation
