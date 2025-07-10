---
title: AggregateError()-Konstruktor
short-title: AggregateError()
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`AggregateError()`**-Konstruktor erzeugt {{jsxref("AggregateError")}}-Objekte.

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
> `AggregateError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufarten erzeugen eine neue `AggregateError`-Instanz.

### Parameter

- `errors`
  - : Ein Iterable von Fehlern, die möglicherweise keine {{jsxref("Error")}}-Instanzen sind.
- `message` {{optional_inline}}
  - : Eine optionale, menschenlesbare Beschreibung des Aggregatfehlers.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt.
        Diese Eigenschaft kann verwendet werden, um den ursprünglichen Fehler zu übergeben, wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut ausgelöst wird.

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
- [Polyfill von `AggregateError` in es-shims](https://www.npmjs.com/package/es-aggregate-error)
- {{jsxref("Promise.any")}}
