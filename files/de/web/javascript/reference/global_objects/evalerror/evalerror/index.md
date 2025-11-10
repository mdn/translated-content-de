---
title: Konstruktor EvalError()
short-title: EvalError()
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`EvalError()`**-Konstruktor erstellt {{jsxref("EvalError")}}-Objekte.

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

> [!NOTE]
> `EvalError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue `EvalError`-Instanz.

### Parameter

- `message` {{optional_inline}}
  - : Eine für Menschen lesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die den spezifischen Grund des Fehlers angibt. Diese Eigenschaft kann verwendet werden, um den ursprünglichen Fehler zu übergeben, wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut ausgelöst wird.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursacht hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursacht hat.

## Beispiele

`EvalError` wird in der aktuellen ECMAScript-Spezifikation nicht verwendet und wird daher nicht zur Laufzeit ausgelöst. Das Objekt selbst bleibt jedoch aus Gründen der Rückwärtskompatibilität mit früheren Versionen der Spezifikation bestehen.

### Ein EvalError erstellen

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
