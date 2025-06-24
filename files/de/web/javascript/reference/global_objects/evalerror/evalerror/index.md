---
title: EvalError() Konstruktor
short-title: EvalError()
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`EvalError()`** Konstruktor erstellt {{jsxref("EvalError")}} Objekte.

## Syntax

```js-nolint
new EvalError()
new EvalError(message)
new EvalError(message, options)
new EvalError(message, fileName)
new EvalError(message, fileName, lineNumber)

EvalError()
EvalError(message)
EvalError(message, options)
EvalError(message, fileName)
EvalError(message, fileName, lineNumber)
```

> [!NOTE] > `EvalError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erstellen eine neue `EvalError` Instanz.

### Parameter

- `message` {{optional_inline}}
  - : Menschlich lesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften besitzt:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt.
        Beim Abfangen und erneuten Werfen eines Fehlers mit einer spezifischeren oder nützlicheren Fehlermeldung kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übergeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursacht hat
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursacht hat

## Beispiele

`EvalError` wird in der aktuellen ECMAScript-Spezifikation nicht verwendet und wird daher nicht vom Laufzeitsystem ausgelöst. Das Objekt selbst bleibt jedoch zur Abwärtskompatibilität mit früheren Versionen der Spezifikation erhalten.

### Erstellen eines EvalError

```js
try {
  throw new EvalError("Hello");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // Stack of the error
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
