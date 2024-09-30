---
title: Set.prototype.difference()
slug: Web/JavaScript/Reference/Global_Objects/Set/difference
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{JSRef}}

Die **`difference()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt eine Menge und gibt eine neue Menge zurück, die Elemente enthält, die in dieser Menge, aber nicht in der angegebenen Menge vorhanden sind.

## Syntax

```js-nolint
difference(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [mengenähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente enthält, die in dieser Menge, aber nicht in der `other`-Menge vorhanden sind.

## Beschreibung

In mathematischer Notation ist _Differenz_ definiert als:

<!-- Hinweis: die {} müssen doppelt maskiert werden, einmal für Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\setminus B = \\{x\in A\mid x\notin B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit einem Venn-Diagramm dargestellt:

![Ein Venn-Diagramm, bei dem sich zwei Kreise überschneiden. Die Differenz von A und B ist der Teil von A, der sich nicht mit B überschneidet.](diagram.svg)

`difference()` akzeptiert [mengenähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other`-Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt auf die zugrunde liegenden Daten von `this` zugreift, ohne benutzerdefinierten Code aufzurufen. Dann hängt sein Verhalten von den Größen von `this` und `other` ab:

- Wenn `this` mehr Elemente als `other.size` hat, iteriert es über `other`, indem es dessen `keys()`-Methode aufruft, und erstellt eine neue Menge mit allen Elementen in `this`, die nicht in `other` vorhanden sind.
- Andernfalls iteriert es über die Elemente in `this` und erstellt eine neue Menge mit allen Elementen `e` in `this`, für die `other.has(e)` einen [falsy](/de/docs/Glossary/Falsy) Wert zurückgibt.

Die Reihenfolge der Elemente in der zurückgegebenen Menge entspricht der in `this`.

## Beispiele

### Verwendung von difference()

Das folgende Beispiel berechnet die Differenz zwischen der Menge der ungeraden Zahlen (<10) und der Menge der perfekten Quadrate (<10). Das Ergebnis ist die Menge der ungeraden Zahlen, die keine perfekten Quadrate sind.

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
