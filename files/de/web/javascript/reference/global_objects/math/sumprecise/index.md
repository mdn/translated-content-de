---
title: Math.sumPrecise()
slug: Web/JavaScript/Reference/Global_Objects/Math/sumPrecise
l10n:
  sourceCommit: 706cbf21987296c604cc96b7f95095ed7aba6bb8
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Math.sumPrecise()`** nimmt ein iterierbares Objekt von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Aufsummieren in einer Schleife, da sie den Verlust an Genauigkeit bei Gleitkommazahlen in Zwischenergebnissen vermeidet.

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
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen.

### Rückgabewert

Eine Zahl, die die Summe der Zahlen im iterierbaren `numbers`-Objekt darstellt. Wenn das iterierbare Objekt leer ist, ist der Rückgabewert `-0` (_nicht_ `0`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wenn `numbers` kein iterierbares Objekt ist oder wenn eine der Zahlen im iterierbaren Objekt nicht vom Typ Zahl ist.

## Beschreibung

Da `sumPrecise()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.sumPrecise()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Die Methode heißt `Math.sumPrecise()`, weil sie präziser ist als das naive Aufsummieren von Zahlen in einer Schleife. Betrachten Sie das folgende Beispiel:

```js
let sum = 0;
const numbers = [1e20, 0.1, -1e20];
for (const number of numbers) {
  sum += number;
}
console.log(sum); // 0
```

Das Ergebnis ist 0. Das liegt daran, dass `1e20 + 0.1` in 64-Bit-Gleitkommazahlen nicht genau dargestellt werden kann, sodass das Zwischenergebnis auf `1e20` gerundet wird. Dann ist die Summe von `1e20` und `-1e20` `0`, sodass das Endergebnis `0` ist.

`Math.sumPrecise()` vermeidet dieses Problem, indem es einen spezialisierten Algorithmus zum Summieren verwendet. Es funktioniert, als ob die Gleitkommazahlen unter Verwendung ihrer präzisen mathematischen Werte summiert werden und das Endergebnis dann in die nächste darstellbare 64-Bit-Gleitkommazahl umgewandelt wird. Dies kann jedoch nicht das Precision-Problem von `0.1 + 0.2` vermeiden:

```js
console.log(Math.sumPrecise([0.1, 0.2])); // 0.30000000000000004
```

Da die Gleitkommazahlenliterale `0.1` und `0.2` bereits mathematische Werte darstellen, die größer sind als `0.1` und `0.2`, und die nächste 64-Bit-Gleitkommazahlendarstellung ihrer Summe tatsächlich `0.30000000000000004` ist.

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
