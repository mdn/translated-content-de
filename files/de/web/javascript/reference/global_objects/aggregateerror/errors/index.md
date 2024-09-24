---
title: "AggregateError: errors"
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/errors
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`errors`** Dateneigenschaft einer {{jsxref("AggregateError")}} Instanz enthält ein Array, das die aggregierten Fehler darstellt.

## Wert

Ein {{jsxref("Array")}} mit Werten in derselben Reihenfolge wie das Iterable, das als erstes Argument des {{jsxref("AggregateError/AggregateError", "AggregateError()")}} Konstruktors übergeben wurde.

{{js_property_attributes(1, 0, 1)}}

## Beispiele

### Verwendung von errors

```js
try {
  throw new AggregateError(
    // Ein Iterable von Fehlern
    new Set([new Error("some error"), new Error("another error")]),
    "Multiple errors thrown",
  );
} catch (err) {
  console.log(err.errors);
  // [
  //   Error: some error,
  //   Error: another error
  // ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- {{jsxref("AggregateError")}}
- [`Error`: `cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
