---
title: Math.sumPrecise()
short-title: sumPrecise()
slug: Web/JavaScript/Reference/Global_Objects/Math/sumPrecise
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Math.sumPrecise()`** nimmt ein iterierbares Objekt von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Summieren in einer Schleife, da sie den Verlust von Gleitkomma-Präzision in Zwischenresultaten vermeidet.

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

Eine Zahl, die die Summe der Zahlen im iterierbaren `numbers` darstellt. Wenn das iterierbare Objekt leer ist, ist der Rückgabewert `-0` (_nicht_ `0`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wenn `numbers` kein iterierbares Objekt ist oder wenn eine der Zahlen im iterierbaren Objekt nicht vom Typ Zahl ist.

## Beschreibung

Da `sumPrecise()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.sumPrecise()`, anstatt als eine Methode eines selbst erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Die Methode wird `Math.sumPrecise()` genannt, weil sie präziser ist als das naive Summieren von Zahlen in einer Schleife. Betrachten Sie das folgende Beispiel:

```js
let sum = 0;
const numbers = [1e20, 0.1, -1e20];
for (const number of numbers) {
  sum += number;
}
console.log(sum); // 0
```

Der Ausgang ist 0. Dies liegt daran, dass `1e20 + 0.1` nicht präzise in 64-Bit-Gleitkommazahlen dargestellt werden kann, sodass das Zwischenresultat auf `1e20` gerundet wird. Dann ist die Summe von `1e20` und `-1e20` `0`, sodass das Endergebnis `0` ist.

`Math.sumPrecise()` umgeht dieses Problem durch die Verwendung eines spezialisierten Summierungsalgorithmus. Es funktioniert so, als ob die Gleitkommazahlen unter Verwendung ihrer präzisen mathematischen Werte summiert werden und das Endergebnis dann in das nächstgelegene darstellbare 64-Bit-Gleitkomma umgewandelt wird. Dies kann jedoch das Präzisionsproblem `0.1 + 0.2` nicht vermeiden:

```js
console.log(Math.sumPrecise([0.1, 0.2])); // 0.30000000000000004
```

Da die Gleitkomma-Literale `0.1` und `0.2` bereits mathematische Werte repräsentieren, die größer als `0.1` und `0.2` sind, und ihre Summe die nächstgelegene 64-Bit-Gleitkommadarstellung tatsächlich `0.30000000000000004` ist.

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
