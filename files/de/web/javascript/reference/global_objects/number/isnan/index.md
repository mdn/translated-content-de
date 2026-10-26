---
title: Number.isNaN()
short-title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Number.isNaN()`** bestimmt, ob der übergebene Wert der Zahlenwert {{jsxref("NaN")}} ist. Sie gibt `false` zurück, wenn die Eingabe nicht vom Typ Number ist. Sie ist eine robustere Version der ursprünglichen globalen Funktion {{jsxref("isNaN()")}}.

{{InteractiveExample("JavaScript Demo: Number.isNaN()", "taller")}}

```js interactive-example
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  }
  if (isNaN(x)) {
    return "NaN";
  }
}

console.log(typeOfNaN("100F"));
// Expected output: "NaN"

console.log(typeOfNaN(NaN));
// Expected output: "Number NaN"
```

## Syntax

```js-nolint
Number.isNaN(value)
```

### Parameter

- `value`
  - : Der Wert, der auf {{jsxref("NaN")}} geprüft werden soll.

### Rückgabewert

Der boolesche Wert `true`, wenn der angegebene Wert eine Zahl mit dem Wert {{jsxref("NaN")}} ist. Andernfalls `false`.

## Beschreibung

Die Funktion `Number.isNaN()` bietet eine einfache Möglichkeit, einen Wert auf Gleichheit mit `NaN` zu prüfen. Beachten Sie, dass Sie dafür weder den Operator [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) noch den Operator [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) verwenden können: Anders als bei allen anderen Wertvergleichen in JavaScript ergeben diese Vergleiche `false`, sobald einer der Operanden {{jsxref("NaN")}} ist – selbst wenn der andere Operand ebenfalls {{jsxref("NaN")}} ist.

Da `x !== x` unter allen möglichen JavaScript-Werten nur für `NaN` wahr ist, kann `Number.isNaN(x)` auch durch die Prüfung `x !== x` ersetzt werden. Letztere ist allerdings weniger gut lesbar.

Im Gegensatz zur globalen Funktion {{jsxref("isNaN()")}} wandelt die Methode `Number.isNaN()` den Parameter nicht zwangsweise in eine Zahl um. Daher können Sie ihr auch Werte übergeben, die bei einer Umwandlung zwar zu {{jsxref("NaN")}} würden, tatsächlich aber nicht mit {{jsxref("NaN")}} identisch sind. Das bedeutet auch, dass nur Werte vom Typ Number, die zugleich {{jsxref("NaN")}} sind, `true` zurückgeben.

## Beispiele

### isNaN() verwenden

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
Number.isNaN(37); // false
```

### Unterschied zwischen Number.isNaN() und der globalen Funktion isNaN()

`Number.isNaN()` versucht nicht, den Parameter in eine Zahl umzuwandeln. Für Werte, die keine Zahlen sind, gibt die Methode daher immer `false` zurück. Alle folgenden Aufrufe ergeben `false`:

```js
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

Die globale Funktion {{jsxref("isNaN()")}} wandelt ihren Parameter dagegen in eine Zahl um:

```js
isNaN("NaN"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("blabla"); // true
isNaN(true); // false, this is coerced to 1
isNaN(null); // false, this is coerced to 0
isNaN("37"); // false, this is coerced to 37
isNaN("37.37"); // false, this is coerced to 37.37
isNaN(""); // false, this is coerced to 0
isNaN(" "); // false, this is coerced to 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Number.isNaN` in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- [Polyfill für `Number.isNaN` von es-shims](https://www.npmjs.com/package/number.isnan)
- {{jsxref("Number")}}
- {{jsxref("isNaN()")}}
