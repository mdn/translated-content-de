---
title: SuppressedError()-Konstruktor
short-title: SuppressedError()
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError/SuppressedError
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Der **`SuppressedError()`**-Konstruktor erzeugt {{jsxref("SuppressedError")}}-Objekte.

## Syntax

```js-nolint
new SuppressedError(error, suppressed)
new SuppressedError(error, suppressed, message)

SuppressedError(error, suppressed)
SuppressedError(error, suppressed, message)
```

> [!NOTE]
> `SuppressedError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Varianten erzeugen eine neue `SuppressedError`-Instanz.

### Parameter

- `error`
  - : Der neue Fehler, der zur Unterdrückung von `suppressed` führt.
- `suppressed`
  - : Der ursprünglich ausgelöste Fehler, der nun unterdrückt wird.
- `message` {{optional_inline}}
  - : Eine optionale, menschenlesbare Beschreibung des aggregierten Fehlers.

> [!NOTE]
> `SuppressedError()` akzeptiert keine `options` wie {{jsxref("Error/Error", "Error()")}} und andere Unterklassen, da die Semantik von {{jsxref("Error/cause", "cause")}} sich mit `suppressed` überschneidet.

## Beispiele

### Erstellen eines SuppressedError

```js
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e.suppressed); // Error: "Original error"
  console.log(e.error); // Error: "New error"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `SuppressedError` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
