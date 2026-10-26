---
title: AggregateError()-Konstruktor
short-title: AggregateError()
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`AggregateError()`**-Konstruktor erstellt {{jsxref("AggregateError")}}-Objekte.

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
> `AggregateError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. In beiden Fällen wird eine neue `AggregateError`-Instanz erstellt.

### Parameter

- `errors`
  - : Ein Iterable von Fehlern, die nicht unbedingt {{jsxref("Error")}}-Instanzen sein müssen.
- `message` {{optional_inline}}
  - : Eine optionale, für Menschen lesbare Beschreibung des aggregierten Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die konkrete Ursache des Fehlers angibt.
        Wenn ein Fehler abgefangen und mit einer genaueren oder hilfreicheren Fehlermeldung erneut ausgelöst wird, kann über diese Eigenschaft der ursprüngliche Fehler übergeben werden.

## Beispiele

### Einen AggregateError erstellen

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

- [Polyfill für `AggregateError` in `core-js`](https://core-js.io/docs/features/ecmascript/error)
- [es-shims-Polyfill für `AggregateError`](https://www.npmjs.com/package/es-aggregate-error)
- {{jsxref("Promise.any")}}
