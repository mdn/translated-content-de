---
title: Error() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

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

> **Note:** `Error()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufarten erstellen eine neue `Error`-Instanz.

### Parameter

- `message` {{optional_inline}}
  - : Eine menschenlesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Ein Wert, der die spezifische Ursache des Fehlers angibt, widergespiegelt in der {{jsxref("Error/cause", "cause")}}-Eigenschaft. Beim Abfangen und erneuten Auslösen eines Fehlers mit einer spezifischeren oder nützlicheren Fehlermeldung kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übergeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Pfad zur Datei, die diesen Fehler verursacht hat, widergespiegelt in der {{jsxref("Error/fileName", "fileName")}}-Eigenschaft. Standardmäßig ist dies der Name der Datei, die den `Error()`-Konstruktor aufgerufen hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer innerhalb der Datei, in der der Fehler aufgetreten ist, widergespiegelt in der {{jsxref("Error/lineNumber", "lineNumber")}}-Eigenschaft. Standardmäßig ist dies die Zeilennummer, die den `Error()`-Konstruktor aufruft.

## Beispiele

### Funktionsaufruf oder Erstellung mit new

Wenn `Error` wie eine Funktion verwendet wird, also ohne {{jsxref("Operators/new", "new")}}, wird ein `Error`-Objekt zurückgegeben. Ein einfacher Aufruf von `Error` erzeugt daher dieselbe Ausgabe, die das Erstellen eines `Error`-Objekts mit dem `new`-Schlüsselwort erzeugen würde.

```js
const x = Error("I was created using a function call!");

// above has the same functionality as following
const y = new Error('I was constructed via the "new" keyword!');
```

### Einen Fehler mit einer Ursache erneut auslösen

Es ist manchmal nützlich, einen Fehler abzufangen und diesen mit einer neuen Nachricht erneut auszulösen. In diesem Fall sollten Sie den ursprünglichen Fehler in den Konstruktor des neuen `Error` übergeben, wie gezeigt.

```js
try {
  frameworkThatCanThrow();
} catch (err) {
  throw new Error("New error message", { cause: err });
}
```

Für ein detaillierteres Beispiel siehe [Error > Zwischen ähnlichen Fehlern unterscheiden](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Weglassen des options-Arguments

JavaScript versucht nur `options.cause` zu lesen, wenn `options` ein Objekt ist — dies vermeidet Mehrdeutigkeit mit der anderen nicht standardmäßigen `Error(message, fileName, lineNumber)`-Signatur, die als zweiten Parameter eine Zeichenkette erfordert. Wenn Sie `options` weglassen, einen primitiven Wert als `options` übergeben oder ein Objekt ohne die `cause`-Eigenschaft übergeben, dann wird das erstellte `Error`-Objekt keine `cause`-Eigenschaft haben.

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

- [Polyfill von `Error` mit `cause`-Unterstützung in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- [es-shims polyfill von Error `cause`](https://www.npmjs.com/package/error-cause)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Error-Ursachen](https://v8.dev/features/error-cause) auf v8.dev (2021)
