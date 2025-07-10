---
title: Fehler
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Error`**-Objekte werden ausgelöst, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Siehe unten für standardmäßig eingebaute Fehlertypen.

## Beschreibung

Laufzeitfehler führen zur Erstellung und zum Auslösen neuer `Error`-Objekte.

`Error` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}} und kann daher mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) zwischen [Workers](/de/docs/Web/API/Worker) kopiert werden.

### Fehlertypen

Neben dem allgemeinen `Error`-Konstruktor gibt es andere Kernfehlerkonstruktoren in JavaScript. Für clientseitige Ausnahmen siehe [Ausnahmekontrollanweisungen](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der im Zusammenhang mit der globalen Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine numerische Variable oder ein Parameter außerhalb des gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn auf eine ungültige Referenz zugegriffen wird.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler darstellt.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine Variable oder ein Parameter nicht vom gültigen Typ ist.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter übergeben werden.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler in einem einzigen Fehler zusammenfasst, wenn eine Operation mehrere Fehler berichten muss, zum Beispiel durch {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn ein interner Fehler in der JavaScript-Engine ausgelöst wird, z.B. "zu viel Rekursion".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error`-Objekt.

## Statische Eigenschaften

- {{jsxref("Error.stackTraceLimit")}} {{non-standard_inline}}
  - : Eine nicht-standard numerische Eigenschaft, die begrenzt, wie viele Stack-Frames in einem Fehler-Stack-Trace enthalten sein sollen.

## Statische Methoden

- {{jsxref("Error.captureStackTrace()")}}
  - : Eine nicht-standard Funktion, die die {{jsxref("Error/stack", "stack")}}-Eigenschaft auf dem bereitgestellten Objekt erstellt.
- {{jsxref("Error.isError()")}}
  - : Gibt `true` zurück, wenn das Argument ein Fehler ist, oder `false` anderenfalls.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht-standard Funktion, die, wenn sie von Benutzer-Code bereitgestellt wird, von der JavaScript-Engine für ausgelöste Ausnahmen aufgerufen wird, um dem Benutzer zu ermöglichen, benutzerdefinierte Formatierungen für Stack-Traces bereitzustellen. Siehe die [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api#customizing-stack-traces) Dokumentation.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Error`-Instanzen ist der Anfangswert der {{jsxref("Error/Error", "Error")}}-Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Repräsentiert den Namen für die Art des Fehlers. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} bieten ihre eigenen `name`-Eigenschaften.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht-standard Eigenschaft für einen Stack-Trace.

Diese Eigenschaften sind eigene Eigenschaften jeder `Error`-Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Fehlerursache, die den Grund angibt, warum der aktuelle Fehler ausgelöst wird — normalerweise ein anderer gefangener Fehler. Bei benutzererstellten `Error`-Objekten ist dies der Wert, der als die `cause`-Eigenschaft des zweiten Arguments des Konstruktors bereitgestellt wird.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht-standard Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht-standard Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht-standard Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler ausgelöst hat.
- {{jsxref("Error/message", "message")}}
  - : Fehlermeldung. Bei benutzererstellten `Error`-Objekten ist dies der String, der als erstes Argument des Konstruktors bereitgestellt wird.

## Instanzmethoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt einen String zurück, der das spezifizierte Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.

## Beispiele

### Werfen eines allgemeinen Fehlers

Normalerweise erstellt man ein `Error`-Objekt mit der Absicht, es mit dem {{jsxref("Statements/throw", "throw")}}-Schlüsselwort auszulösen.
Sie können den Fehler mit der {{jsxref("Statements/try...catch", "try...catch")}}-Konstruktion behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Behandlung eines spezifischen Fehlertyps

Sie können sich dafür entscheiden, nur spezifische Fehlertypen zu behandeln, indem Sie den Fehlertyp mit dem {{jsxref("Operators/instanceof", "instanceof")}}-Schlüsselwort testen:

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

Manchmal kann ein Codeblock aus Gründen scheitern, die eine unterschiedliche Behandlung erfordern, aber sehr ähnliche Fehler werfen (d.h. mit demselben Typ und derselben Meldung).

Wenn Sie keine Kontrolle über die ursprünglich geworfenen Fehler haben, ist eine Möglichkeit, sie abzufangen und neue `Error`-Objekte mit spezifischeren Nachrichten zu werfen.
Der ursprüngliche Fehler sollte im `options`-Parameter des Konstruktors als seine `cause`-Eigenschaft an das neue `Error` übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und der Stack-Trace für höherstufige try/catch-Blöcke verfügbar sind.

Das folgende Beispiel zeigt dies für zwei Methoden, die andernfalls mit ähnlichen Fehlern scheitern würden (`doFailSomeWay()` und `doFailAnotherWay()`):

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
> Wenn Sie eine Bibliothek erstellen, sollten Sie es bevorzugen, die Fehlerursache zu verwenden, um zwischen verschiedenen ausgegebenen Fehlern zu unterscheiden — anstatt von Ihren Nutzern zu verlangen, die Fehlermeldung zu analysieren. Siehe die [Error Cause-Seite](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können ebenfalls die `cause`-Eigenschaft verwenden, vorausgesetzt, dass der Konstruktor der Unterklassen den `options`-Parameter beim Aufruf von `super()` übergibt. Der `Error()`-Basis-Konstruktor wird `options.cause` lesen und die `cause`-Eigenschaft an der neuen Fehlerinstanz definieren.

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

Sie könnten Ihre eigenen Fehlertypen definieren, die sich von `Error` ableiten, um `throw new MyError()` nutzen zu können und mit `instanceof MyError` die Art des Fehlers im Ausnahmebehandler zu überprüfen. Dies führt zu saubererem und konsistenterem Fehlerbehandlungscode.

Siehe ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf Stack Overflow für eine eingehende Diskussion.

> [!WARNING]
> Eingebaute Vererbungen können nicht zuverlässig in Code vor-ES6 transpiliert werden, da es keine Möglichkeit gibt, die Basisklasse mit einem bestimmten `new.target` ohne {{jsxref("Reflect.construct()")}} zu konstruieren. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder rufen manuell {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} am Ende des Konstruktors auf; andernfalls wird die konstruierte Instanz nicht eine `CustomError`-Instanz sein. Siehe [die TypeScript FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) für mehr Informationen.

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
- [es-shims Polyfill von Error `cause`](https://www.npmjs.com/package/error-cause)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Stack Trace API](https://v8.dev/docs/stack-trace-api) in den V8-Dokumenten
