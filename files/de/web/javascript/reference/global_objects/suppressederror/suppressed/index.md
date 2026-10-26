---
title: "SuppressedError: suppressed"
short-title: suppressed
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError/suppressed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Dateneigenschaft **`suppressed`** einer {{jsxref("SuppressedError")}}-Instanz enthält eine Referenz auf den ursprünglichen Fehler, der unterdrückt wurde, weil bei seiner Behandlung ein neuer Fehler aufgetreten ist.

## Wert

Ein beliebiger Wert. Wie bei {{jsxref("Error/cause", "cause")}} können Sie nicht davon ausgehen, dass es sich um eine {{jsxref("Error")}}-Instanz handelt, auch wenn das üblicherweise der Fall ist.

{{js_property_attributes(1, 0, 1)}}

## Beispiele

### `suppressed` verwenden

```js
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e.suppressed); // Error: "Original error"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `SuppressedError` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- Leitfaden zu [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- {{jsxref("SuppressedError")}}
- [`Error`: `cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
