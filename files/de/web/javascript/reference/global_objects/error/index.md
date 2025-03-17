---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

**`Error`**-Objekte werden geworfen, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Siehe unten für standardmäßig integrierte Fehlertypen.

## Beschreibung

Laufzeitfehler führen dazu, dass neue `Error`-Objekte erstellt und geworfen werden.

`Error` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann.

### Fehlertypen

Neben dem generischen `Error`-Konstruktor gibt es weitere grundlegende Fehlerkonstruktoren in JavaScript. Für clientseitige Ausnahmen siehe [Ausdruckshandhabungsanweisungen](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der im Zusammenhang mit der globalen Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine numerische Variable oder ein Parameter außerhalb des gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine ungültige Referenz dereferenziert wird.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler darstellt.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine Variable oder ein Parameter nicht vom gültigen Typ ist.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter übergeben werden.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler in einem einzigen Fehler eingeschlossen darstellt, wenn eine Operation mehrere Fehler melden muss, z.B. durch {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn ein interner Fehler in der JavaScript-Engine geworfen wird, z.B. "zuviel Rekursion".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error`-Objekt.

## Statische Eigenschaften

- {{jsxref("Error.stackTraceLimit")}} {{non-standard_inline}}
  - : Eine nicht standardisierte numerische Eigenschaft, die festlegt, wie viele Stapelrahmen in einer Fehlerstackverfolgung enthalten sein sollen.

## Statische Methoden

- {{jsxref("Error.captureStackTrace()")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Funktion, die die {{jsxref("Error/stack", "stack")}}-Eigenschaft für das bereitgestellte Objekt erstellt.
- {{jsxref("Error.isError()")}}
  - : Gibt `true` zurück, wenn das Argument ein Fehler ist, oder `false` andernfalls.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht standardisierte Funktion, die, falls vom Benutzer bereitgestellt, von der JavaScript-Engine für geworfene Ausnahmen aufgerufen wird und es dem Benutzer ermöglicht, eine benutzerdefinierte Formatierung für Stackverfolgungen bereitzustellen. Siehe die [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api#customizing-stack-traces)-Dokumentation.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Error`-Instanzen ist der Anfangswert der {{jsxref("Error/Error", "Error")}}-Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Repräsentiert den Namen für den Fehlertyp. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} stellen ihre eigenen `name`-Eigenschaften bereit.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Eigenschaft für eine Stapelverfolgung.

Diese Eigenschaften sind eigene Eigenschaften jeder `Error`-Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Fehlerursache, die den Grund angibt, warum der aktuelle Fehler geworfen wird — normalerweise ein anderer abgefangener Fehler. Bei benutzererstellten `Error`-Objekten ist dies der Wert, der als `cause`-Eigenschaft des zweiten Arguments des Konstruktors bereitgestellt wird.
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
  - : Gibt eine Zeichenfolge zurück, die das angegebene Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.

## Beispiele

### Werfen eines generischen Fehlers

In der Regel erstellen Sie ein `Error`-Objekt mit der Absicht, es mit dem {{jsxref("Statements/throw", "throw")}}-Schlüsselwort zu werfen. Sie können den Fehler mit der {{jsxref("Statements/try...catch", "try...catch")}}-Konstruktion behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Behandlung eines bestimmten Fehlertyps

Sie können wählen, nur bestimmte Fehlertypen zu behandeln, indem Sie den Fehlertyp mit dem {{jsxref("Operators/instanceof", "instanceof")}}-Operator testen:

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

Manchmal kann ein Codeblock aus Gründen fehlschlagen, die eine unterschiedliche Handhabung erfordern, aber sehr ähnliche Fehler werfen (d.h. mit demselben Typ und derselben Nachricht).

Wenn Sie keine Kontrolle über die ursprünglich geworfenen Fehler haben, ist eine Option, sie abzufangen und neue `Error`-Objekte zu werfen, die spezifischere Nachrichten haben. Der ursprüngliche Fehler sollte dem neuen `Error` im [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#options)-Parameter des Konstruktors als `cause`-Eigenschaft übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und die Stackverfolgung für höherstufige try/catch-Blöcke verfügbar sind.

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
> Wenn Sie eine Bibliothek erstellen, sollten Sie sich darauf beschränken, Fehlerursachen zu verwenden, um zwischen verschiedenen ausgegebenen Fehlern zu unterscheiden, anstatt Ihre Benutzer zu bitten, die Fehlermeldung zu analysieren. Sehen Sie sich die [Fehlerursachenseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel an.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können auch die `cause`-Eigenschaft verwenden, vorausgesetzt, der Konstruktor der Unterklassen übergibt den `options`-Parameter beim Aufruf von `super()`. Der `Error()`-Basisklassen-Konstruktor wird `options.cause` lesen und die `cause`-Eigenschaft auf der neuen Fehlerinstanz definieren.

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

Es kann sinnvoll sein, eigene Fehlertypen abzuleiten, die von `Error` erben, um `throw new MyError()` verwenden zu können und mit `instanceof MyError` zu prüfen, welche Art von Fehler im Ausnahmehandler vorliegt. Das ergibt saubereren und konsistenteren Fehlerbehandlungscode.

Lesen Sie ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf Stack Overflow für eine ausführliche Diskussion.

> [!WARNING]
> Eingebaute Subclassing-Mechanismen können nicht zuverlässig zu Pre-ES6-Code transpiliert werden, da es keine Möglichkeit gibt, die Basisklasse mit einem bestimmten `new.target` ohne {{jsxref("Reflect.construct()")}} zu konstruieren. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen manuell {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} am Ende des Konstruktors aufrufen; andernfalls wird die erstellte Instanz keine `CustomError`-Instanz sein. Siehe [die TypeScript-FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) für weitere Informationen.

> [!NOTE]
> Einige Browser schließen den `CustomError`-Konstruktor in die Stapelverfolgung ein, wenn ES2015-Klassen verwendet werden.

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
- [Stapelverfolgungs-API](https://v8.dev/docs/stack-trace-api) in der V8-Dokumentation
