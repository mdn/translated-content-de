---
title: Set.prototype.union()
slug: Web/JavaScript/Reference/Global_Objects/Set/union
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{JSRef}}

Die **`union()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt eine Menge und gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser Menge oder in der angegebenen Menge vorhanden sind, oder in beiden.

## Syntax

```js-nolint
union(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [mengenähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente enthält, die entweder in dieser Menge oder in der `other`-Menge oder in beiden vorhanden sind.

## Beschreibung

In der mathematischen Notation wird _Vereinigung_ wie folgt definiert:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mtext>&nbsp;oder&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cup B = \\{x\midx\in A\text{ or }x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und unter Verwendung eines Venn-Diagramms:

![Ein Venn-Diagramm, in dem zwei Kreise überlappen. Der symmetrische Unterschied von A und B ist der Bereich, der entweder von einem oder beiden Kreisen enthalten ist.](diagram.svg)

`union()` akzeptiert [mengenähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als das `other`-Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt auf die zugrunde liegenden Daten in `this` zugreift, ohne Benutzercode aufzurufen. Dann iteriert es über `other`, indem es dessen `keys()`-Methode aufruft und eine neue Menge mit allen Elementen in `this` erstellt, gefolgt von allen Elementen in `other`, die in `this` nicht vorhanden sind.

Die Reihenfolge der Elemente in der zurückgegebenen Menge ist zuerst die in `this`, gefolgt von denen in `other`.

## Beispiele

### Verwendung von union()

Im folgenden Beispiel wird die Vereinigung zwischen der Menge der geraden Zahlen (<10) und der Menge der perfekten Quadrate (<10) berechnet. Das Ergebnis ist die Menge der Zahlen, die entweder gerade sind oder ein perfektes Quadrat, oder beides.

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.union(squares)); // Set(6) { 2, 4, 6, 8, 1, 9 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Set.prototype.union` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
