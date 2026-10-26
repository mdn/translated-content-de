---
title: Math.sumPrecise()
short-title: sumPrecise()
slug: Web/JavaScript/Reference/Global_Objects/Math/sumPrecise
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.sumPrecise()`** nimmt ein Iterable von Zahlen entgegen und gibt deren Summe zurück. Sie ist präziser als das Addieren der Zahlen in einer Schleife, da sie Genauigkeitsverluste bei Zwischenergebnissen mit Gleitkommazahlen vermeidet.

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
  - : Ein [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Zahlen (beispielsweise ein {{jsxref("Array")}}).

### Rückgabewert

Eine Zahl, die der Summe der Zahlen im Iterable `numbers` entspricht. Ist das Iterable leer, lautet der Rückgabewert `-0` (_nicht_ `0`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wenn `numbers` kein Iterable ist oder wenn ein Wert im Iterable nicht vom Typ Number ist.

## Beschreibung

Da `sumPrecise()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.sumPrecise()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Die Methode heißt `Math.sumPrecise()`, weil sie präziser ist als das einfache Addieren von Zahlen in einer Schleife. Betrachten Sie das folgende Beispiel:

```js
let sum = 0;
const numbers = [1e20, 0.1, -1e20];
for (const number of numbers) {
  sum += number;
}
console.log(sum); // 0
```

Die Ausgabe ist 0. Der Grund dafür ist, dass `1e20 + 0.1` mit 64-Bit-Gleitkommazahlen nicht exakt dargestellt werden kann. Daher wird das Zwischenergebnis auf `1e20` gerundet. Die Summe von `1e20` und `-1e20` ist dann `0`, sodass auch das Endergebnis `0` ist.

`Math.sumPrecise()` vermeidet dieses Problem durch einen speziellen Summierungsalgorithmus. Die Methode verhält sich so, als würden die Gleitkommazahlen anhand ihrer exakten mathematischen Werte addiert und erst das Endergebnis in die nächstgelegene darstellbare 64-Bit-Gleitkommazahl umgewandelt. Das Genauigkeitsproblem bei `0.1 + 0.2` lässt sich dadurch allerdings nicht vermeiden:

```js
console.log(Math.sumPrecise([0.1, 0.2])); // 0.30000000000000004
```

Das liegt daran, dass die Gleitkommazahl-Literale `0.1` und `0.2` bereits mathematische Werte darstellen, die größer als 0,1 beziehungsweise 0,2 sind. Die 64-Bit-Gleitkommazahl, die ihrer Summe am nächsten kommt, ist tatsächlich `0.30000000000000004`.

## Beispiele

### Math.sumPrecise() verwenden

```js
console.log(Math.sumPrecise([1, 2, 3])); // 6
console.log(Math.sumPrecise([1e20, 0.1, -1e20])); // 0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Math.sumPrecise` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- [Polyfill für `Math.sumPrecise` von es-shims](https://www.npmjs.com/package/math.sumprecise)
- {{jsxref("Array.prototype.reduce()")}}
