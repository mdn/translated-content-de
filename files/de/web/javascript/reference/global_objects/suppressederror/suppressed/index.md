---
title: "SuppressedError: suppressed"
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError/suppressed
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`suppressed`** Daten-Eigenschaft einer {{jsxref("SuppressedError")}}-Instanz enthält einen Verweis auf den ursprünglichen Fehler, der unterdrückt wurde, weil ein neuer Fehler bei der Behandlung desselben erzeugt wurde.

## Wert

Jeder Wert. Wie bei {{jsxref("Error/cause", "cause")}} können Sie nicht davon ausgehen, dass es sich um eine {{jsxref("Error")}}-Instanz handelt, auch wenn dies normalerweise der Fall ist.

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

- [Steuerfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- {{jsxref("SuppressedError")}}
- [`Error`: `cause`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
