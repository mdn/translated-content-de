---
title: "CSSNumericValue: to()-Methode"
short-title: to()
slug: Web/API/CSSNumericValue/to
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`to()`**-Methode der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) konvertiert einen numerischen Wert von einer Einheit in eine andere.

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
    - Der `CSSNumericValue`, auf den die Methode angewendet wird, nicht in einen einzelnen Wert und Typ aufgelöst werden kann.
      Dies kann vorkommen, wenn der Wert aus einer Variablen berechnet wird, dessen Wert im Kontext nicht bekannt sein kann.
    - Der Wert nicht in die neue Einheit konvertiert werden kann, da er nicht zur gleichen Kategorie gehört.
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
