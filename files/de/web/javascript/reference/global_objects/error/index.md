---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`Error`**-Objekte werden ausgelöst, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Die standardmäßig integrierten Fehlertypen finden Sie weiter unten.

## Beschreibung

Bei Laufzeitfehlern werden neue `Error`-Objekte erstellt und ausgelöst.

`Error` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}. Es kann daher mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) zwischen [Workern](/de/docs/Web/API/Worker) kopiert werden.

### Fehlertypen

Neben dem allgemeinen `Error`-Konstruktor gibt es in JavaScript weitere zentrale Fehlerkonstruktoren. Informationen zu Ausnahmen auf der Clientseite finden Sie unter [Anweisungen zur Ausnahmebehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler im Zusammenhang mit der globalen Funktion {{jsxref("Global_Objects/eval", "eval()")}} repräsentiert.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn eine numerische Variable oder ein numerischer Parameter außerhalb des gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der beim Dereferenzieren einer ungültigen Referenz auftritt.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler repräsentiert.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn eine Variable oder ein Parameter keinen gültigen Typ hat.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn an {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter übergeben werden.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler in einem einzigen Fehler zusammenfasst, wenn eine Operation mehrere Fehler melden muss, beispielsweise {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn die JavaScript-Engine einen internen Fehler auslöst, beispielsweise „too much recursion“.

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error`-Objekt.

## Statische Eigenschaften

- {{jsxref("Error.stackTraceLimit")}} {{non-standard_inline}}
  - : Eine nicht standardisierte numerische Eigenschaft, die begrenzt, wie viele Stack-Frames in einen Fehler-Stack-Trace aufgenommen werden.

## Statische Methoden

- {{jsxref("Error.captureStackTrace()")}}
  - : Eine nicht standardisierte Funktion, die die Eigenschaft {{jsxref("Error/stack", "stack")}} auf dem übergebenen Objekt erstellt.
- {{jsxref("Error.isError()")}}
  - : Gibt `true` zurück, wenn das Argument ein Fehler ist, andernfalls `false`.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht standardisierte Funktion, die von der JavaScript-Engine bei ausgelösten Ausnahmen aufgerufen wird, sofern sie im Benutzercode bereitgestellt wurde. Damit lässt sich die Formatierung von Stack-Traces anpassen. Weitere Informationen finden Sie in der Dokumentation zur [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api#customizing-stack-traces).

## Instanzeigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Error`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Error/Error", "Error")}}.
- {{jsxref("Error.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} stellen eigene `name`-Eigenschaften bereit.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Eigenschaft für einen Stack-Trace.

Die folgenden Eigenschaften gehören jeweils zu einer einzelnen `Error`-Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Die Fehlerursache, die angibt, warum der aktuelle Fehler ausgelöst wurde – üblicherweise ein anderer, zuvor abgefangener Fehler. Bei benutzerseitig erstellten `Error`-Objekten ist dies der Wert der Eigenschaft `cause` im zweiten Argument des Konstruktors.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler verursacht hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler verursacht hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler verursacht hat.
- {{jsxref("Error/message", "message")}}
  - : Die Fehlermeldung. Bei benutzerseitig erstellten `Error`-Objekten ist dies die Zeichenfolge, die als erstes Argument an den Konstruktor übergeben wurde.

## Instanzmethoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das angegebene Objekt repräsentiert. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.

## Beispiele

### Einen allgemeinen Fehler auslösen

Üblicherweise erstellen Sie ein `Error`-Objekt, um es mit dem Schlüsselwort {{jsxref("Statements/throw", "throw")}} auszulösen.
Sie können den Fehler mit der Konstruktion {{jsxref("Statements/try...catch", "try...catch")}} behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Einen bestimmten Fehlertyp behandeln

Sie können gezielt nur bestimmte Fehlertypen behandeln, indem Sie den Fehlertyp mit dem Schlüsselwort {{jsxref("instanceof")}} prüfen:

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

Manchmal kann ein Codeblock aus Gründen fehlschlagen, die eine unterschiedliche Behandlung erfordern, obwohl dabei sehr ähnliche Fehler ausgelöst werden (d.h. Fehler mit demselben Typ und derselben Meldung).

Wenn Sie keinen Einfluss auf die ursprünglich ausgelösten Fehler haben, können Sie diese abfangen und neue `Error`-Objekte mit aussagekräftigeren Meldungen auslösen.
Der ursprüngliche Fehler sollte dem neuen `Error` im Parameter [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#options) des Konstruktors als Eigenschaft `cause` übergeben werden. So stehen der ursprüngliche Fehler und sein Stack-Trace übergeordneten try/catch-Blöcken zur Verfügung.

Das folgende Beispiel zeigt dies für zwei Methoden, die andernfalls mit ähnlichen Fehlern fehlschlagen würden (`doFailSomeWay()` und `doFailAnotherWay()`):

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
> Wenn Sie eine Bibliothek entwickeln, sollten Sie verschiedene ausgelöste Fehler vorzugsweise anhand der Fehlerursache unterscheiden, statt von den Nutzern Ihrer Bibliothek zu verlangen, die Fehlermeldung zu analysieren. Ein Beispiel finden Sie auf der [Seite zur Fehlerursache](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause).

Auch [benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können die Eigenschaft `cause` verwenden, sofern der Konstruktor der Unterklasse beim Aufruf von `super()` den Parameter `options` übergibt. Der Konstruktor der Basisklasse `Error()` liest `options.cause` und definiert die Eigenschaft `cause` auf der neuen Fehlerinstanz.

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

Sie können eigene, von `Error` abgeleitete Fehlertypen definieren. So können Sie mit `throw new MyError()` einen Fehler auslösen und im Ausnahmehandler mit `instanceof MyError` dessen Typ prüfen. Dadurch wird der Code zur Fehlerbehandlung übersichtlicher und einheitlicher.

Eine ausführliche Diskussion finden Sie auf Stack Overflow unter [„What's a good way to extend Error in JavaScript?“](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript).

> [!WARNING]
> Das Erstellen von Unterklassen integrierter Klassen lässt sich nicht zuverlässig in Code für die Zeit vor ES6 transpilierten, da es ohne {{jsxref("Reflect.construct()")}} keine Möglichkeit gibt, die Basisklasse mit einem bestimmten `new.target` zu konstruieren. Sie benötigen eine [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen am Ende des Konstruktors manuell {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} aufrufen. Andernfalls ist die erzeugte Instanz keine `CustomError`-Instanz. Weitere Informationen finden Sie in den [TypeScript-FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work).

> [!NOTE]
> Einige Browser nehmen den Konstruktor `CustomError` in den Stack-Trace auf, wenn ES2015-Klassen verwendet werden.

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

- [Polyfill für `Error` mit Unterstützung für `cause` in `core-js`](https://core-js.io/docs/features/ecmascript/error)
- [es-shims-Polyfill für `Error` und `cause`](https://www.npmjs.com/package/error-cause)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Stack Trace API](https://v8.dev/docs/stack-trace-api) in der V8-Dokumentation
