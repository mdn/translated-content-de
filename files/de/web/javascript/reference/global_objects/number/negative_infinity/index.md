---
title: Number.NEGATIVE_INFINITY
short-title: NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Number.NEGATIVE_INFINITY`** repräsentiert den negativen Unendlichkeitswert.

{{InteractiveExample("JavaScript Demo: Number.NEGATIVE_INFINITY")}}

```js interactive-example
function checkNumber(smallNumber) {
  if (smallNumber === Number.NEGATIVE_INFINITY) {
    return "Process number as -Infinity";
  }
  return smallNumber;
}

console.log(checkNumber(-Number.MAX_VALUE));
// Expected output: -1.7976931348623157e+308

console.log(checkNumber(-Number.MAX_VALUE * 2));
// Expected output: "Process number as -Infinity"
```

## Wert

Entspricht dem negativen Wert der globalen {{jsxref("Infinity")}}-Eigenschaft.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Der Wert `Number.NEGATIVE_INFINITY` verhält sich etwas anders als die mathematische Unendlichkeit:

- Jeder positive Wert, einschließlich {{jsxref("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, multipliziert mit `NEGATIVE_INFINITY` ergibt `NEGATIVE_INFINITY`.
- Jeder negative Wert, einschließlich `NEGATIVE_INFINITY`, multipliziert mit `NEGATIVE_INFINITY` ergibt {{jsxref("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- Jeder positive Wert, geteilt durch `NEGATIVE_INFINITY`, ist [negativ null](https://en.wikipedia.org/wiki/Signed_zero) (wie in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) definiert).
- Jeder negative Wert, geteilt durch `NEGATIVE_INFINITY`, ist [positiv null](https://en.wikipedia.org/wiki/Signed_zero) (wie in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) definiert).
- Null multipliziert mit `NEGATIVE_INFINITY` ist {{jsxref("NaN")}}.
- {{jsxref("NaN")}} multipliziert mit `NEGATIVE_INFINITY` ist {{jsxref("NaN")}}.
- `NEGATIVE_INFINITY`, geteilt durch jeden negativen Wert außer `NEGATIVE_INFINITY`, ist {{jsxref("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- `NEGATIVE_INFINITY`, geteilt durch jeden positiven Wert außer {{jsxref("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, ist `NEGATIVE_INFINITY`.
- `NEGATIVE_INFINITY`, geteilt durch entweder `NEGATIVE_INFINITY` oder {{jsxref("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, ist {{jsxref("NaN")}}.
- `x > Number.NEGATIVE_INFINITY` ist wahr für jede Zahl _x_, die nicht `NEGATIVE_INFINITY` ist.

Sie könnten die `Number.NEGATIVE_INFINITY`-Eigenschaft verwenden, um einen Fehlerzustand anzuzeigen, der im Erfolgsfall eine endliche Zahl zurückgibt. Beachten Sie jedoch, dass {{jsxref("NaN")}} in einem solchen Fall angemessener wäre.

Da `NEGATIVE_INFINITY` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie es immer als `Number.NEGATIVE_INFINITY` und nicht als Eigenschaft eines Zahlenwerts.

## Beispiele

### Verwendung von NEGATIVE_INFINITY

Im folgenden Beispiel wird der Variablen `smallNumber` ein Wert zugewiesen, der kleiner ist als der Mindestwert. Wenn die {{jsxref("Statements/if...else", "if")}}-Anweisung ausgeführt wird, hat `smallNumber` den Wert `-Infinity`, sodass `smallNumber` auf einen besser handhabbaren Wert gesetzt wird, bevor fortgefahren wird.

```js
let smallNumber = -Number.MAX_VALUE * 2;

if (smallNumber === Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite()")}}
