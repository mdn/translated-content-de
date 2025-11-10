---
title: "AggregateError: errors"
short-title: errors
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/errors
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`errors`** Daten-Eigenschaft einer {{jsxref("AggregateError")}}-Instanz enthält ein Array, das die aggregierten Fehler darstellt.

## Wert

Ein {{jsxref("Array")}}, das Werte in derselben Reihenfolge enthält wie das Iterable, das als erstes Argument des {{jsxref("AggregateError/AggregateError", "AggregateError()")}}-Konstruktors übergeben wurde.

{{js_property_attributes(1, 0, 1)}}

## Beispiele

### Verwendung von errors

```js
try {
  throw new AggregateError(
    // An iterable of errors
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
