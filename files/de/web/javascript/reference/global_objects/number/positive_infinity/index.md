---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.POSITIVE_INFINITY`** repräsentiert den positiven Unendlichkeitswert.

{{EmbedInteractiveExample("pages/js/number-positive-infinity.html")}}

## Wert

Gleicher Wert wie die globale {{jsxref("Infinity")}}-Eigenschaft.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Der `Number.POSITIVE_INFINITY`-Wert verhält sich leicht anders als die mathematische Unendlichkeit:

- Jeder positive Wert, einschließlich `POSITIVE_INFINITY`, multipliziert mit `POSITIVE_INFINITY`, ist `POSITIVE_INFINITY`.
- Jeder negative Wert, einschließlich {{jsxref("Number/NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, multipliziert mit `POSITIVE_INFINITY`, ist {{jsxref("Number/NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- Jede positive Zahl, geteilt durch `POSITIVE_INFINITY`, ist [positive null](https://en.wikipedia.org/wiki/Signed_zero) (wie in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) definiert).
- Jede negative Zahl, geteilt durch `POSITIVE_INFINITY`, ist [negative null](https://en.wikipedia.org/wiki/Signed_zero) (wie in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) definiert).
- Null multipliziert mit `POSITIVE_INFINITY` ist {{jsxref("NaN")}}.
- {{jsxref("NaN")}} multipliziert mit `POSITIVE_INFINITY` ist {{jsxref("NaN")}}.
- `POSITIVE_INFINITY`, geteilt durch jeden negativen Wert außer {{jsxref("Number/NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, ist {{jsxref("Number/NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- `POSITIVE_INFINITY`, geteilt durch jeden positiven Wert außer `POSITIVE_INFINITY`, ist `POSITIVE_INFINITY`.
- `POSITIVE_INFINITY`, geteilt durch entweder {{jsxref("Number/NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} oder `POSITIVE_INFINITY`, ist {{jsxref("NaN")}}.
- `Number.POSITIVE_INFINITY > x` ist wahr für jede Zahl _x_, die nicht `POSITIVE_INFINITY` ist.

Sie könnten die `Number.POSITIVE_INFINITY`-Eigenschaft nutzen, um einen Fehlerzustand anzuzeigen, der eine endliche Zahl im Erfolgsfall zurückgibt. Beachten Sie jedoch, dass {{jsxref("NaN")}} in einem solchen Fall angemessener wäre.

Da `POSITIVE_INFINITY` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.POSITIVE_INFINITY` und nicht als Eigenschaft eines Zahlenwerts.

## Beispiele

### Verwendung von POSITIVE_INFINITY

Im folgenden Beispiel wird der Variablen `bigNumber` ein Wert zugewiesen, der größer als der maximale Wert ist. Wenn die {{jsxref("Statements/if...else", "if")}}-Anweisung ausgeführt wird, hat `bigNumber` den Wert `Infinity`, sodass `bigNumber` auf einen besser handhabbaren Wert gesetzt wird, bevor fortgefahren wird.

```js
let bigNumber = Number.MAX_VALUE * 2;

if (bigNumber === Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite()")}}
