---
title: AggregateError() Konstruktor
short-title: AggregateError()
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
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

> [!NOTE] > `AggregateError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erstellen eine neue `AggregateError` Instanz.

### Parameter

- `errors`
  - : Ein iterierbares Objekt von Fehlern, die möglicherweise keine {{jsxref("Error")}} Instanzen sind.
- `message` {{optional_inline}}
  - : Eine optionale, menschenlesbare Beschreibung des Sammelfehlers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften besitzt:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt.
        Wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut ausgelöst wird, kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übergeben.

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
- [es-shims polyfill von `AggregateError`](https://www.npmjs.com/package/es-aggregate-error)
- {{jsxref("Promise.any")}}
