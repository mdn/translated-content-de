---
title: Fehler
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Error`** Objekte werden ausgelöst, wenn Laufzeitfehler auftreten. Das `Error`-Objekt kann auch als Basisobjekt für benutzerdefinierte Ausnahmen verwendet werden. Siehe unten für standardmäßige eingebaute Fehlertypen.

## Beschreibung

Laufzeitfehler führen dazu, dass neue `Error` Objekte erstellt und geworfen werden.

`Error` ist ein {{Glossary("serializable object")}}, sodass es mit {{domxref("structuredClone()")}} geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit {{domxref("Worker/postMessage()", "postMessage()")}} kopiert werden kann.

### Fehlertypen

Neben dem generischen `Error` Konstruktor gibt es andere grundlegende Fehlerkonstruktoren in JavaScript. Für clientseitige Ausnahmen siehe [Ausnahmebehandlungsanweisungen](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der in Bezug auf die globale Funktion {{jsxref("Global_Objects/eval", "eval()")}} auftritt.
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine numerische Variable oder ein Parameter außerhalb des gültigen Bereichs liegt.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn auf eine ungültige Referenz zugegriffen wird.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Syntaxfehler darstellt.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn eine Variable oder ein Parameter nicht vom richtigen Typ ist.
- {{jsxref("URIError")}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, wenn {{jsxref("encodeURI()")}} oder {{jsxref("decodeURI()")}} ungültige Parameter erhalten.
- {{jsxref("AggregateError")}}
  - : Erstellt eine Instanz, die mehrere Fehler in einem einzelnen Fehler zusammenfasst, wenn eine Operation mehrere Fehler melden muss, beispielsweise durch {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler darstellt, der auftritt, wenn ein interner Fehler in der JavaScript-Engine auftritt. Z.B. "zu viel Rekursion".

## Konstruktor

- {{jsxref("Error/Error", "Error()")}}
  - : Erstellt ein neues `Error` Objekt.

## Statische Methoden

- `Error.captureStackTrace()` {{non-standard_inline}}
  - : Eine nicht standardisierte V8-Funktion, die die Eigenschaft {{jsxref("Error/stack", "stack")}} auf einer Error Instanz erstellt.
- `Error.stackTraceLimit` {{non-standard_inline}}
  - : Eine nicht standardisierte numerische V8-Eigenschaft, die begrenzt, wie viele Stapelrahmen in eine Fehler-Stacktrace aufgenommen werden.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Eine nicht standardisierte V8-Funktion, die, falls vom Benutzer bereitgestellt, von der V8-JavaScript-Engine für geworfene Ausnahmen aufgerufen wird und es dem Benutzer ermöglicht, benutzerdefinierte Formatierungen für Stacktraces bereitzustellen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Error.prototype` definiert und werden von allen `Error` Instanzen geteilt.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Die Konstruktormethode, die das Instanzobjekt erstellt hat. Für `Error` Instanzen ist der ursprüngliche Wert der {{jsxref("Error/Error", "Error")}} Konstruktor.
- {{jsxref("Error.prototype.name")}}
  - : Stellt den Namen für den Fehlertyp dar. Für `Error.prototype.name` ist der ursprüngliche Wert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} bieten ihre eigenen `name` Eigenschaften.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Eigenschaft für eine Stacktrace.

Diese Eigenschaften sind eigene Eigenschaften jeder `Error` Instanz.

- {{jsxref("Error/cause", "cause")}}
  - : Fehlerursache, die den Grund angibt, warum der aktuelle Fehler ausgelöst wird — normalerweise ein anderer abgefangener Fehler. Bei benutzererstellten `Error` Objekten ist dies der Wert, der als `cause` Eigenschaft des zweiten Arguments des Konstruktors bereitgestellt wurde.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für die Spaltennummer in der Zeile, die diesen Fehler verursacht hat.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für den Pfad zur Datei, die diesen Fehler verursacht hat.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Eine nicht standardisierte Mozilla-Eigenschaft für die Zeilennummer in der Datei, die diesen Fehler verursacht hat.
- {{jsxref("Error/message", "message")}}
  - : Fehlermeldung. Bei benutzererstellten `Error` Objekten ist dies der als erstes Argument des Konstruktors bereitgestellte String.

## Instanzmethoden

- {{jsxref("Error.prototype.toString()")}}
  - : Gibt einen String zurück, der das spezifizierte Objekt repräsentiert. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.

## Beispiele

### Einen generischen Fehler auslösen

Normalerweise erstellen Sie ein `Error` Objekt mit der Absicht, es mit dem Schlüsselwort {{jsxref("Statements/throw", "throw")}} auszulösen. Sie können den Fehler mit der Konstruktion {{jsxref("Statements/try...catch", "try...catch")}} behandeln:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Einen bestimmten Fehlertyp behandeln

Sie können wählen, nur bestimmte Fehlertypen zu behandeln, indem Sie den Fehlertyp mit dem Schlüsselwort {{jsxref("Operators/instanceof", "instanceof")}} testen:

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
    // Wenn keiner unserer Fälle zutrifft, den Fehler unbelassen
    throw e;
  }
}
```

### Ähnliche Fehler unterscheiden

Manchmal kann ein Block von Code aus Gründen fehlschlagen, die eine unterschiedliche Behandlung erfordern, die jedoch sehr ähnliche Fehler werfen (z.B. mit demselben Typ und derselben Nachricht).

Wenn Sie keine Kontrolle über die ursprünglich geworfenen Fehler haben, besteht eine Möglichkeit darin, diese abzufangen und neue `Error` Objekte mit spezifischeren Nachrichten zu werfen. Der ursprüngliche Fehler sollte im `options`-Parameter des Konstruktors als `cause`-Eigenschaft an den neuen `Error` übergeben werden. Dies stellt sicher, dass der ursprüngliche Fehler und die Stacktrace höherstufigen try/catch-Blöcken zur Verfügung stehen.

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
> Wenn Sie eine Bibliothek erstellen, sollten Sie die Fehlerursache bevorzugen, um zwischen verschiedenen Fehlern zu unterscheiden, anstatt Ihre Benutzer aufzufordern, die Fehlermeldung zu analysieren. Siehe die [Seite zur Fehlerursache](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) für ein Beispiel.

[Benutzerdefinierte Fehlertypen](#benutzerdefinierte_fehlertypen) können auch die `cause`-Eigenschaft verwenden, vorausgesetzt, der Konstruktor der Unterklassen übergibt den `options`-Parameter beim Aufruf von `super()`. Der Basisklassenkonstruktor `Error()` liest `options.cause` und definiert die `cause`-Eigenschaft auf der neuen Fehlerinstanz.

```js
class MyError extends Error {
  constructor(message, options) {
    // Muss `options` als zweites Parameter übergeben, um die "cause"-Eigenschaft zu installieren.
    super(message, options);
  }
}

console.log(new MyError("test", { cause: new Error("cause") }).cause);
// Error: cause
```

### Benutzerdefinierte Fehlertypen

Möglicherweise möchten Sie Ihre eigenen Fehlertypen von `Error` ableiten, um in der Lage zu sein, `throw new MyError()` zu verwenden und mit `instanceof MyError` die Art des Fehlers im Ausnahmehandler zu überprüfen. Dies führt zu saubererem und konsistenterem Fehlerbehandlungscode.

Siehe ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) auf StackOverflow für eine ausführliche Diskussion.

> [!WARNING]
> Eingebaute Subklassierung kann nicht zuverlässig auf vor-ES6-Code transpiliert werden, da es keine Möglichkeit gibt, die Basisklasse mit einem bestimmten `new.target` ohne {{jsxref("Reflect.construct()")}} zu instanziieren. Sie benötigen [zusätzliche Konfiguration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) oder müssen manuell {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} am Ende des Konstruktors aufrufen; andernfalls wird die erstellte Instanz keine `CustomError` Instanz sein. Siehe [die TypeScript-FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) für weitere Informationen.

> [!NOTE]
> Einige Browser beinhalten den `CustomError` Konstruktor im Stacktrace bei Verwendung von ES2015-Klassen.

```js
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Restliche Argumente (einschließlich spezieller) an den Elternkonstruktor übergeben
    super(...params);

    // Hält den richtigen Stacktrace bei, wo unser Fehler geworfen wurde (nur auf V8 verfügbar)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Benutzerdefinierte Debug-Informationen
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
  console.error(e.stack); // Stacktrace
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Error` mit `cause` Unterstützung in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Stacktrace-API](https://v8.dev/docs/stack-trace-api) in der V8-Dokumentation
