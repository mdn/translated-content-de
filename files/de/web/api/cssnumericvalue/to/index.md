---
title: "CSSNumericValue: to() Methode"
short-title: to()
slug: Web/API/CSSNumericValue/to
l10n:
  sourceCommit: fd00eae27011b7b1f65a442b927efab5400b0296
---

{{APIRef("CSS Typed OM")}}

Die **`to()`** Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle konvertiert einen numerischen Wert von einer Einheit in eine andere.

## Syntax

```js-nolint
to(unit)
```

### Parameter

- `unit`
  - : Die Einheit, in die Sie konvertieren möchten.

### Rückgabewert

Ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine ungültige Einheit an die Methode übergeben wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der `CSSNumericValue`, auf dem die Methode aufgerufen wird, nicht auf einen einzigen Wert und Typ aufgelöst werden kann.
      Dies könnte passieren, wenn der Wert aus einer Variablen berechnet wird, deren Wert im Kontext nicht bekannt sein kann.
    - Der Wert nicht in die neue Einheit umgewandelt werden kann, weil er nicht zur gleichen Kategorie gehört.
      Zum Beispiel kann man Meter nicht in Sekunden umwandeln.

## Beispiele

### Grundlegende Verwendung

```js
// Prints "0.608542cm"
console.log(CSS.px("23").to("cm").toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
