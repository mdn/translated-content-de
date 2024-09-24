---
title: Set.prototype.difference()
slug: Web/JavaScript/Reference/Global_Objects/Set/difference
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{JSRef}}

Die **`difference()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt eine Menge und gibt eine neue Menge zurück, die Elemente aus dieser Menge, aber nicht aus der angegebenen Menge enthält.

## Syntax

```js-nolint
difference(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente aus dieser Menge, aber nicht aus der `other`-Menge enthält.

## Beschreibung

In mathematischer Notation wird _difference_ definiert als:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\setminus B = \\{x\in A\mid x\notin B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit einem Venn-Diagramm:

![Ein Venn-Diagramm, bei dem sich zwei Kreise überschneiden. Die Differenz von A und B ist der Teil von A, der sich nicht mit B überschneidet.](diagram.svg)

`difference()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other`-Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt die zugrunde liegenden Daten abruft, die in `this` gespeichert sind, ohne benutzerdefinierten Code aufzurufen. Dann hängt das Verhalten von den Größen von `this` und `other` ab:

- Wenn es in `this` mehr Elemente gibt als `other.size`, dann wird über `other` durch Aufruf der `keys()`-Methode iteriert und eine neue Menge mit allen Elementen in `this` erstellt, die in `other` nicht vorhanden sind.
- Andernfalls wird über die Elemente in `this` iteriert und eine neue Menge mit allen Elementen `e` in `this` erstellt, die dazu führen, dass `other.has(e)` einen [falsy](/de/docs/Glossary/Falsy)-Wert zurückgibt.

Die Reihenfolge der Elemente in der zurückgegebenen Menge ist dieselbe wie in `this`.

## Beispiele

### Verwendung von difference()

Im folgenden Beispiel wird die Differenz zwischen der Menge der ungeraden Zahlen (<10) und der Menge der perfekten Quadrate (<10) berechnet. Das Ergebnis ist die Menge der ungeraden Zahlen, die keine perfekten Quadrate sind.

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.difference(squares)); // Set(3) { 3, 5, 7 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Set.prototype.difference` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
