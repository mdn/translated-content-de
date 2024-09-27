---
title: Error() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Der **`Error()`** Konstruktor erstellt {{jsxref("Error")}} Objekte.

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

> **Note:** `Error()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Varianten erstellen eine neue `Error` Instanz.

### Parameter

- `message` {{optional_inline}}
  - : Eine lesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `cause` {{optional_inline}}
      - : Ein Wert, der die spezifische Ursache des Fehlers angibt, wiedergegeben in der {{jsxref("Error/cause", "cause")}}-Eigenschaft. Wenn man einen Fehler mit einer spezifischeren oder nützlicheren Fehlermeldung auffängt und erneut wirft, kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übergeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Pfad zur Datei, die diesen Fehler verursacht hat, wiedergegeben in der {{jsxref("Error/fileName", "fileName")}}-Eigenschaft. Standardmäßig ist dies der Name der Datei, die den `Error()` Konstruktor aufgerufen hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer innerhalb der Datei, an der der Fehler ausgelöst wurde, wiedergegeben in der {{jsxref("Error/lineNumber", "lineNumber")}}-Eigenschaft. Standardmäßig ist dies die Zeilennummer, welche die `Error()`-Konstruktoraufruf enthält.

## Beispiele

### Funktionsaufruf oder neue Konstruktion

Wenn `Error` als Funktion verwendet wird, das heißt ohne {{jsxref("Operators/new", "new")}}, wird ein `Error` Objekt zurückgegeben.
Ein einfacher Aufruf von `Error` erzeugt somit dasselbe Ergebnis wie die Erstellung eines `Error` Objekts mit dem `new` Schlüsselwort.

```js
const x = Error("I was created using a function call!");

// above has the same functionality as following
const y = new Error('I was constructed via the "new" keyword!');
```

### Einen Fehler mit einer Ursache erneut auslösen

Es ist manchmal nützlich, einen Fehler abzufangen und ihn mit einer neuen Meldung erneut auszulösen. In diesem Fall sollten Sie den ursprünglichen Fehler dem Konstruktor für den neuen `Error` übergeben, wie gezeigt.

```js
try {
  frameworkThatCanThrow();
} catch (err) {
  throw new Error("New error message", { cause: err });
}
```

Ein detaillierteres Beispiel finden Sie unter [Error > Unterschiedliche Fehler unterscheiden](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Auslassen des options-Arguments

JavaScript versucht nur dann, `options.cause` zu lesen, wenn `options` ein Objekt ist — dies vermeidet Mehrdeutigkeiten mit der anderen nicht-standardmäßigen `Error(message, fileName, lineNumber)` Signatur, die erfordert, dass der zweite Parameter ein String ist. Wenn Sie `options` auslassen, einen primitiven Wert als `options` übergeben oder ein Objekt ohne die `cause` Eigenschaft übergeben, dann wird das erstellte `Error` Objekt keine `cause` Eigenschaft haben.

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

- [Polyfill von `Error` mit `cause` Unterstützung in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Error Causes](https://v8.dev/features/error-cause) auf v8.dev (2021)
