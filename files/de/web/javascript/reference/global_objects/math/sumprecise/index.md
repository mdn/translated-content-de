---
title: Math.sumPrecise()
slug: Web/JavaScript/Reference/Global_Objects/Math/sumPrecise
l10n:
  sourceCommit: a453c2ec608cd3772e9f02a4af0b81a1d71ebeaa
---

{{JSRef}}

Die statische Methode **`Math.sumPrecise()`** nimmt ein iterierbares Objekt von Zahlen und gibt deren Summe zurück. Sie ist genauer als das Aufsummieren in einer Schleife, da sie den Verlust an Gleitkomma-Präzision bei Zwischenergebnissen vermeidet.

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

Eine Zahl, die die Summe der Zahlen im `numbers`-iterierbaren Objekt darstellt. Wenn das iterierbare Objekt leer ist, ist der Rückgabewert `-0` (_nicht_ `0`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wenn `numbers` kein iterierbares Objekt ist oder wenn eine der Zahlen im iterierbaren Objekt nicht vom Typ Zahl ist.

## Beschreibung

Da `sumPrecise()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.sumPrecise()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Die Methode heißt `Math.sumPrecise()`, weil sie genauer ist als das naive Aufsummieren von Zahlen in einer Schleife. Überlegen Sie sich folgendes Beispiel:

```js
let sum = 0;
const numbers = [1e20, 0.1, -1e20];
for (const number of numbers) {
  sum += number;
}
console.log(sum); // 0
```

Die Ausgabe ist 0. Das liegt daran, dass `1e20 + 0.1` in 64-Bit-Fließkommazahlen nicht genau dargestellt werden kann, sodass das Zwischenergebnis auf `1e20` gerundet wird. Dann ist die Summe von `1e20` und `-1e20` `0`, sodass das Endergebnis `0` ist.

`Math.sumPrecise()` umgeht dieses Problem durch die Verwendung eines spezialisierten Summenalgorithmus. Es funktioniert so, als ob die Gleitkommazahlen unter Verwendung ihrer genauen mathematischen Werte aufsummiert werden, und das Endergebnis wird dann in die nächstliegende darstellbare 64-Bit-Fließkommazahl umgewandelt. Dies kann jedoch das Präzisionsproblem bei `0.1 + 0.2` nicht vermeiden:

```js
console.log(Math.sumPrecise([0.1, 0.2])); // 0.30000000000000004
```

Weil die Gleitkomma-Literale `0.1` und `0.2` bereits mathematische Werte darstellen, die größer als `0.1` und `0.2` sind, und ihre Summe bei der nächsten 64-Bit-Fließkommadarstellung tatsächlich `0.30000000000000004` ist.

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
- {{jsxref("Array.prototype.reduce()")}}
