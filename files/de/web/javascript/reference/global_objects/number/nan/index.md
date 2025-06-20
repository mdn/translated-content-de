---
title: Number.NaN
short-title: NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.NaN`** repräsentiert Not-A-Number, was äquivalent zu {{jsxref("NaN")}} ist. Für weitere Informationen über das Verhalten von `NaN` sehen Sie die [Beschreibung für die globale Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).

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

Da `NaN` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie es immer als `Number.NaN` und nicht als Eigenschaft eines Zahlenwertes.

## Beispiele

### Überprüfen, ob Werte numerisch sind

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
