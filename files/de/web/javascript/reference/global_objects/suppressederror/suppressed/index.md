---
title: "SuppressedError: suppressed"
short-title: suppressed
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError/suppressed
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`suppressed`** Dateneigenschaft einer Instanz von {{jsxref("SuppressedError")}} enthält einen Verweis auf den ursprünglichen Fehler, der unterdrückt wurde, weil bei dessen Behandlung ein neuer Fehler erzeugt wurde.

## Wert

Jeder beliebige Wert. Wie bei {{jsxref("Error/cause", "cause")}}, kann nicht davon ausgegangen werden, dass es sich um eine Instanz von {{jsxref("Error")}} handelt, obwohl dies normalerweise der Fall ist.

{{js_property_attributes(1, 0, 1)}}

## Beispiele

### Verwendung von suppressed

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

- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- {{jsxref("SuppressedError")}}
- [`Error`: `cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
