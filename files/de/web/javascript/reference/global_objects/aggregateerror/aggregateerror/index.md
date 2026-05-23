---
title: AggregateError() Konstruktor
short-title: AggregateError()
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
l10n:
  sourceCommit: f5ff65031db62ca1d855f2043525462b00455d1b
---

Der **`AggregateError()`** Konstruktor erstellt {{jsxref("AggregateError")}} Objekte.

## Syntax

```js-nolint
new AggregateError(errors)
new AggregateError(errors, message)
new AggregateError(errors, message, options)

AggregateError(errors)
AggregateError(errors, message)
AggregateError(errors, message, options)
```

> [!NOTE]
> `AggregateError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `AggregateError` Instanz.

### Parameter

- `errors`
  - : Ein iterierbares Objekt von Fehlern, die möglicherweise keine {{jsxref("Error")}} Instanzen sind.
- `message` {{optional_inline}}
  - : Eine optionale, für Menschen lesbare Beschreibung des Sammelfehlers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften hat:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt.
        Beim Abfangen und erneuten Auslösen eines Fehlers mit einer genaueren oder nützlicheren Fehlermeldung kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übermitteln.

## Beispiele

### Erstellen eines AggregateError

```js
try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `AggregateError` in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- [es-shims Polyfill von `AggregateError`](https://www.npmjs.com/package/es-aggregate-error)
- {{jsxref("Promise.any")}}
