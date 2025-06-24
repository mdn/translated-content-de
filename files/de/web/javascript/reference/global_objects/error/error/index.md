---
title: Error() Konstruktor
short-title: Error()
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
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

> [!NOTE] > `Error()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Error` Instanz.

### Parameter

- `message` {{optional_inline}}
  - : Eine menschenlesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften besitzt:
    - `cause` {{optional_inline}}
      - : Ein Wert, der die spezifische Ursache des Fehlers angibt und in der {{jsxref("Error/cause", "cause")}} Eigenschaft widergespiegelt wird. Beim Abfangen und erneuten Auslösen eines Fehlers mit einer spezifischeren oder nützlicheren Fehlermeldung kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler weiterzugeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Pfad zu der Datei, die diesen Fehler ausgelöst hat, widergespiegelt in der {{jsxref("Error/fileName", "fileName")}} Eigenschaft. Standardmäßig ist dies der Name der Datei, die den `Error()` Konstruktor aufgerufen hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer innerhalb der Datei, in der der Fehler ausgelöst wurde, widergespiegelt in der {{jsxref("Error/lineNumber", "lineNumber")}} Eigenschaft. Standardmäßig ist dies die Zeilennummer der `Error()` Konstruktoraufruf.

## Beispiele

### Funktionsaufruf oder neuer Konstruktor

Wenn `Error` wie eine Funktion verwendet wird, also ohne {{jsxref("Operators/new", "new")}}, wird ein `Error` Objekt zurückgegeben. Daher erzeugt ein einfacher Aufruf von `Error` die gleiche Ausgabe wie das Konstruieren eines `Error` Objekts über das `new` Schlüsselwort.

```js
const x = Error("I was created using a function call!");

// above has the same functionality as following
const y = new Error('I was constructed via the "new" keyword!');
```

### Einen Fehler mit einer Ursache erneut werfen

Es kann manchmal nützlich sein, einen Fehler abzufangen und ihn mit einer neuen Nachricht erneut zu werfen. In diesem Fall sollten Sie den ursprünglichen Fehler in den Konstruktor des neuen `Error` übergeben, wie gezeigt.

```js
try {
  frameworkThatCanThrow();
} catch (err) {
  throw new Error("New error message", { cause: err });
}
```

Für ein detaillierteres Beispiel siehe [Error > Between similar errors unterscheiden](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Optionen-Argument weglassen

JavaScript versucht nur `options.cause` zu lesen, wenn `options` ein Objekt ist – das vermeidet Mehrdeutigkeiten mit der anderen nicht standardmäßigen `Error(message, fileName, lineNumber)` Signatur, die den zweiten Parameter als Zeichenfolge erfordert. Wenn Sie `options` weglassen, einen primitiven Wert als `options` übergeben oder ein Objekt ohne die `cause` Eigenschaft übergeben, dann wird das erstellte `Error` Objekt keine `cause` Eigenschaft haben.

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
- [es-shims Polyfill von Error `cause`](https://www.npmjs.com/package/error-cause)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Error causes](https://v8.dev/features/error-cause) auf v8.dev (2021)
