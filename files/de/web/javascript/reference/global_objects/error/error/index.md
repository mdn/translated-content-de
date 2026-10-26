---
title: Error()-Konstruktor
short-title: Error()
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`Error()`**-Konstruktor erstellt {{jsxref("Error")}}-Objekte.

## Syntax

```js-nolint
new Error()
new Error(message)
new Error(message, options)
new Error(message, fileName)
new Error(message, fileName, lineNumber)

Error()
Error(message)
Error(message, options)
Error(message, fileName)
Error(message, fileName, lineNumber)
```

> [!NOTE]
> `Error()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. In beiden Fällen wird eine neue `Error`-Instanz erstellt.

### Parameter

- `message` {{optional_inline}}
  - : Eine für Menschen lesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Ein Wert, der die konkrete Ursache des Fehlers angibt und in der Eigenschaft {{jsxref("Error/cause", "cause")}} gespeichert wird. Wenn ein Fehler abgefangen und mit einer genaueren oder hilfreicheren Fehlermeldung erneut ausgelöst wird, kann über diese Eigenschaft der ursprüngliche Fehler weitergegeben werden.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Pfad zur Datei, in der der Fehler aufgetreten ist. Er wird in der Eigenschaft {{jsxref("Error/fileName", "fileName")}} gespeichert. Der Standardwert ist der Name der Datei mit dem Code, der den `Error()`-Konstruktor aufgerufen hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer innerhalb der Datei, in der der Fehler aufgetreten ist. Sie wird in der Eigenschaft {{jsxref("Error/lineNumber", "lineNumber")}} gespeichert. Der Standardwert ist die Zeilennummer des Aufrufs des `Error()`-Konstruktors.

## Beispiele

### Funktionsaufruf oder Konstruktion mit new

Wenn `Error` wie eine Funktion verwendet wird, also ohne {{jsxref("new")}}, gibt es ein `Error`-Objekt zurück.
Ein einfacher Aufruf von `Error` liefert daher dasselbe Ergebnis wie die Erstellung eines `Error`-Objekts mit dem Schlüsselwort `new`.

```js
const x = Error("I was created using a function call!");

// above has the same functionality as following
const y = new Error('I was constructed via the "new" keyword!');
```

### Erneutes Auslösen eines Fehlers mit einer Ursache

Manchmal ist es sinnvoll, einen Fehler abzufangen und mit einer neuen Meldung erneut auszulösen.
Übergeben Sie in diesem Fall den ursprünglichen Fehler an den Konstruktor des neuen `Error`-Objekts, wie hier gezeigt.

```js
try {
  frameworkThatCanThrow();
} catch (err) {
  throw new Error("New error message", { cause: err });
}
```

Ein ausführlicheres Beispiel finden Sie unter [Error > Ähnliche Fehler unterscheiden](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Weglassen des options-Arguments

JavaScript versucht nur dann, `options.cause` auszulesen, wenn `options` ein Objekt ist. Dadurch werden Mehrdeutigkeiten mit der anderen, nicht standardisierten Signatur `Error(message, fileName, lineNumber)` vermieden, bei der der zweite Parameter ein String sein muss. Wenn Sie `options` weglassen, einen primitiven Wert als `options` übergeben oder ein Objekt ohne die Eigenschaft `cause` übergeben, besitzt das erstellte `Error`-Objekt keine Eigenschaft `cause`.

```js
// Omitting options
const error1 = new Error("Error message");
console.log("cause" in error1); // false

// Passing a primitive value
const error2 = new Error("Error message", "");
console.log("cause" in error2); // false

// Passing an object without a cause property
const error3 = new Error("Error message", { details: "http error" });
console.log("cause" in error3); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Error` mit Unterstützung für `cause` in `core-js`](https://core-js.io/docs/features/ecmascript/error)
- [es-shims-Polyfill für Error `cause`](https://www.npmjs.com/package/error-cause)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Fehlerursachen](https://v8.dev/features/error-cause) auf v8.dev (2021)
