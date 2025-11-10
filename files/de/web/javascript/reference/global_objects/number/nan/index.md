---
title: Number.NaN
short-title: NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Number.NaN`** repräsentiert Not-A-Number, was dem {{jsxref("NaN")}} entspricht. Für weitere Informationen über das Verhalten von `NaN`, siehe [die Beschreibung der globalen Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).

{{InteractiveExample("JavaScript Demo: Number.NaN", "taller")}}

```js interactive-example
function clean(x) {
  if (x === Number.NaN) {
    // Can never be true
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// Expected output: 0
```

## Wert

Der numerische Wert {{jsxref("NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `NaN` eine statische Eigenschaft von {{jsxref("Number")}} ist, wird sie immer als `Number.NaN` verwendet und nicht als Eigenschaft eines Zahlenwertes.

## Beispiele

### Überprüfung, ob Werte numerisch sind

```js
function sanitize(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
