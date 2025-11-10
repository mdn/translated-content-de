---
title: "SuppressedError: error"
short-title: error
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError/error
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`error`** Dateneigenschaft einer {{jsxref("SuppressedError")}}-Instanz enthält eine Referenz auf den Fehler, der zu der Unterdrückung führt.

## Wert

Jeder Wert. Wie bei {{jsxref("Error/cause", "cause")}} können Sie nicht davon ausgehen, dass es sich um eine {{jsxref("Error")}}-Instanz handelt, obwohl dies normalerweise der Fall ist.

{{js_property_attributes(1, 0, 1)}}

## Beispiele

### Verwendung von error

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

- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- {{jsxref("SuppressedError")}}
- [`Error`: `cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
