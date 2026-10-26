---
title: SuppressedError()-Konstruktor
short-title: SuppressedError()
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError/SuppressedError
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`SuppressedError()`**-Konstruktor erstellt {{jsxref("SuppressedError")}}-Objekte.

## Syntax

```js-nolint
new SuppressedError(error, suppressed)
new SuppressedError(error, suppressed, message)

SuppressedError(error, suppressed)
SuppressedError(error, suppressed, message)
```

> [!NOTE]
> `SuppressedError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. In beiden Fällen wird eine neue `SuppressedError`-Instanz erstellt.

### Parameter

- `error`
  - : Der neue Fehler, der dazu führt, dass `suppressed` unterdrückt wird.
- `suppressed`
  - : Der Fehler, der ursprünglich ausgelöst wurde und nun unterdrückt wird.
- `message` {{optional_inline}}
  - : Eine optionale, für Menschen lesbare Beschreibung des zusammengefassten Fehlers.

> [!NOTE]
> `SuppressedError()` akzeptiert anders als {{jsxref("Error/Error", "Error()")}} und andere Unterklassen kein `options`, da sich die Bedeutung von {{jsxref("Error/cause", "cause")}} mit der von `suppressed` überschneidet.

## Beispiele

### Einen SuppressedError erstellen

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

- [Polyfill für `SuppressedError` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
