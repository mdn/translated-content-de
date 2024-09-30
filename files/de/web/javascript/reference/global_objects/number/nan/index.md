---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.NaN`** steht für Not-A-Number, was dem {{jsxref("NaN")}} entspricht. Für weitere Informationen über das Verhalten von `NaN` sehen Sie sich die [Beschreibung der globalen Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) an.

{{EmbedInteractiveExample("pages/js/number-nan.html", "taller")}}

## Wert

Der Zahlenwert {{jsxref("NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Da `NaN` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie es immer als `Number.NaN` und nicht als Eigenschaft eines Zahlenwertes.

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
