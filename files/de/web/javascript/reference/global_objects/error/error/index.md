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

> **Note:** `Error()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue `Error` Instanz.

### Parameter

- `message` {{optional_inline}}
  - : Eine menschenlesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Ein Wert, der die spezifische Ursache des Fehlers angibt, reflektiert in der {{jsxref("Error/cause", "cause")}} Eigenschaft. Beim Abfangen und erneuten Auslösen eines Fehlers mit einer spezifischeren oder nützlicheren Fehlermeldung kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übergeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Pfad zur Datei, die diesen Fehler ausgelöst hat, reflektiert in der {{jsxref("Error/fileName", "fileName")}} Eigenschaft. Standardmäßig der Name der Datei, die den `Error()` Konstruktor aufgerufen hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer in der Datei, in der der Fehler ausgelöst wurde, reflektiert in der {{jsxref("Error/lineNumber", "lineNumber")}} Eigenschaft. Standardmäßig die Zeilennummer, die den `Error()` Konstruktoraufruf enthält.

## Beispiele

### Funktionsaufruf oder neue Konstruktion

Wenn `Error` wie eine Funktion verwendet wird, also ohne {{jsxref("Operators/new", "new")}}, wird es ein `Error` Objekt zurückgeben.
Daher wird ein einfacher Aufruf von `Error` das gleiche Ergebnis liefern wie das Erstellen eines `Error` Objekts mit dem `new` Schlüsselwort.

```js
const x = Error("I was created using a function call!");

// oben hat die gleiche Funktionalität wie das Folgende
const y = new Error('I was constructed via the "new" keyword!');
```

### Erneutes Auslösen eines Fehlers mit einer Ursache

Es ist manchmal nützlich, einen Fehler abzufangen und mit einer neuen Nachricht erneut auszulösen.
In diesem Fall sollten Sie den ursprünglichen Fehler in den Konstruktor für den neuen `Error` übergeben, wie gezeigt.

```js
try {
  frameworkThatCanThrow();
} catch (err) {
  throw new Error("New error message", { cause: err });
}
```

Für ein detaillierteres Beispiel siehe [Error > Zwischen ähnlichen Fehlern unterscheiden](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Weglassen des `options` Parameters

JavaScript versucht nur `options.cause` zu lesen, wenn `options` ein Objekt ist – dies vermeidet Mehrdeutigkeiten mit der anderen nicht standardmäßigen `Error(message, fileName, lineNumber)` Signatur, die den zweiten Parameter als String erfordert. Wenn Sie `options` weglassen, einen primitiven Wert als `options` übergeben oder ein Objekt ohne die `cause` Eigenschaft übergeben, hat das erstellte `Error` Objekt keine `cause` Eigenschaft.

```js
// Weglassen der options
const error1 = new Error("Error message");
console.log("cause" in error1); // false

// Übergeben eines primitiven Wertes
const error2 = new Error("Error message", "");
console.log("cause" in error2); // false

// Übergeben eines Objekts ohne cause Eigenschaft
const error3 = new Error("Error message", { details: "http error" });
console.log("cause" in error3); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des `Error` mit `cause` Unterstützung in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Error causes](https://v8.dev/features/error-cause) auf v8.dev (2021)