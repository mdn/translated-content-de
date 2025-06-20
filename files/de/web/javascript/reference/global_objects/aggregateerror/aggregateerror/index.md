---
title: AggregateError() Konstruktor
short-title: AggregateError()
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

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

> **Note:** `AggregateError()` kann sowohl mit als auch ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide rufen eine neue Instanz von `AggregateError` ins Leben.

### Parameter

- `errors`
  - : Ein iterierbares Objekt von Fehlern, die möglicherweise keine tatsächlichen Instanzen von {{jsxref("Error")}} sind.
- `message` {{optional_inline}}
  - : Eine optionale, menschenlesbare Beschreibung des Aggregatfehlers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften aufweist:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt.
        Wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung neu geworfen wird, kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler weiterzugeben.

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

- [Polyfill von `AggregateError` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [es-shims Polyfill von `AggregateError`](https://www.npmjs.com/package/es-aggregate-error)
- {{jsxref("Promise.any")}}
