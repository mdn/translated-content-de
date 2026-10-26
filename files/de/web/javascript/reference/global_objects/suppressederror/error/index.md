---
title: "SuppressedError: error"
short-title: error
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError/error
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Dateneigenschaft **`error`** einer {{jsxref("SuppressedError")}}-Instanz enthält eine Referenz auf den Fehler, der unterdrückt wurde.

## Wert

Ein beliebiger Wert. Wie bei {{jsxref("Error/cause", "cause")}} können Sie nicht davon ausgehen, dass es sich um eine {{jsxref("Error")}}-Instanz handelt, auch wenn dies normalerweise der Fall ist.

{{js_property_attributes(1, 0, 1)}}

## Beispiele

### `error` verwenden

```js
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e.error); // Error: "New error"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `SuppressedError` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) – Leitfaden
- {{jsxref("SuppressedError")}}
- [`Error`: `cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
