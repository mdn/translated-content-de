---
title: "CSSNumericValue: Methode toSum()"
short-title: toSum()
slug: Web/API/CSSNumericValue/toSum
l10n:
  sourceCommit: f2915027e3c05ac40297581d6d06ef8599a811bb
---

{{APIRef("CSS Typed OM")}}

Die **`toSum()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle konvertiert den Wert des Objekts in ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)-Objekt, um Werte in die angegebenen Einheiten zu ändern.

## Syntax

```js-nolint
toSum(units)
```

### Parameter

- `units`
  - : Die Einheiten, in die konvertiert werden soll.

### Rückgabewert

Ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

```js
let v = CSS.px("23").add(CSS.percent("4")).add(CSS.cm("3")).add(CSS.in("9"));
v.toString(); // => "calc(23px + 4% + 3cm + 9in)"
v.toSum("px", "percent").toString(); // => "calc(1000.39px + 4%)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
