---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.NaN`** repräsentiert "Not-A-Number", was gleichbedeutend mit {{jsxref("NaN")}} ist. Für weitere Informationen über das Verhalten von `NaN`, siehe die [Beschreibung für die globale Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).

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

Der Zahlenwert {{jsxref("NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `NaN` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwendet man sie immer als `Number.NaN` und nicht als eine Eigenschaft eines Zahlenwerts.

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
