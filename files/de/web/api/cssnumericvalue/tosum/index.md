---
title: "CSSNumericValue: toSum()-Methode"
short-title: toSum()
slug: Web/API/CSSNumericValue/toSum
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`toSum()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle wandelt den Wert des Objekts in ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)-Objekt um, um Werte der angegebenen Einheit darzustellen.

## Syntax

```js-nolint
toSum(units)
```

### Parameter

- `units`
  - : Die Einheiten, in die umgewandelt werden soll.

### Rückgabewert

Ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wird.

## Beispiele

### Grundlegende Verwendung

```js
let v = CSS.px("23").add(CSS.percent("4")).add(CSS.cm("3")).add(CSS.in("9"));
v.toString(); // => "calc(23px + 4% + 3cm + 9in)"
v.toSum("px", "percent").toString(); // => "calc(1000.39px + 4%)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
