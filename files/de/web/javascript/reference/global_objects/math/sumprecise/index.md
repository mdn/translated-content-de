---
title: Math.sumPrecise()
slug: Web/JavaScript/Reference/Global_Objects/Math/sumPrecise
l10n:
  sourceCommit: 7cd2415e24a105ad4a457bb8eba32b0146dea211
---

{{JSRef}}

Die statische Methode **`Math.sumPrecise()`** nimmt ein Iterable von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Summieren in einer Schleife, da sie den Verlust von Gleitkommagenauigkeit in Zwischenergebnissen vermeidet.

{{InteractiveExample("JavaScript Demo: Math.sumPrecise()")}}

```js interactive-example
console.log(Math.sumPrecise([1, 2]));
// Expected output: 3

console.log(Math.sumPrecise([1e20, 0.1, -1e20]));
// Expected output: 0.1
```

## Syntax

```js-nolint
Math.sumPrecise(numbers)
```

### Parameter

- `numbers`
  - : Ein [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen.

### Rückgabewert

Eine Zahl, die die Summe der Zahlen im `numbers` Iterable ist. Wenn das Iterable leer ist, ist der Rückgabewert `-0` (_nicht_ `0`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wenn `numbers` kein Iterable ist oder wenn eine der Zahlen im Iterable nicht vom Typ Zahl ist.

## Beschreibung

Da `sumPrecise()` eine statische Methode von `Math` ist, wird sie immer als `Math.sumPrecise()` verwendet und nicht als Methode eines erstellten `Math` Objekts (`Math` ist kein Konstruktor).

Die Methode wird `Math.sumPrecise()` genannt, weil sie präziser als ein einfaches Aufsummieren der Zahlen in einer Schleife ist. Betrachten Sie das folgende Beispiel:

```js
let sum = 0;
const numbers = [1e20, 0.1, -1e20];
for (const number of numbers) {
  sum += number;
}
console.log(sum); // 0
```

Die Ausgabe ist 0. Dies liegt daran, dass `1e20 + 0.1` in 64-Bit Gleitkommazahlen nicht genau dargestellt werden kann, sodass das Zwischenergebnis auf `1e20` gerundet wird. Dann ergibt die Summe von `1e20` und `-1e20` `0`, sodass das Endergebnis `0` ist.

`Math.sumPrecise()` vermeidet dieses Problem, indem ein spezialisiertes Summenalgorithmus verwendet wird. Es funktioniert, als ob die Gleitkommazahlen mit ihren präzisen mathematischen Werten aufaddiert werden, und das Endergebnis wird dann in die nächstliegende darstellbare 64-Bit Gleitkommazahl umgewandelt. Dies kann immer noch nicht das `0.1 + 0.2`-Genauigkeitsproblem vermeiden:

```js
console.log(Math.sumPrecise([0.1, 0.2])); // 0.30000000000000004
```

Da die Gleitkommaliterale `0.1` und `0.2` bereits mathematische Werte darstellen, die größer sind als `0.1` und `0.2`, und die nächstliegende 64-Bit Gleitkommadarstellung ihrer Summe tatsächlich `0.30000000000000004` ist.

## Beispiele

### Verwendung von Math.sumPrecise()

```js
console.log(Math.sumPrecise([1, 2, 3])); // 6
console.log(Math.sumPrecise([1e20, 0.1, -1e20])); // 0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.sumPrecise` in `core-js`](https://github.com/zloirock/core-js#mathsumprecise)
- [es-shims Polyfill von `Math.sumPrecise`](https://www.npmjs.com/package/math.sumprecise)
- {{jsxref("Array.prototype.reduce()")}}
