---
title: Set.prototype.union()
short-title: union()
slug: Web/JavaScript/Reference/Global_Objects/Set/union
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`union()`** Methode von {{jsxref("Set")}} Instanzen nimmt ein Set an und gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem Set, im gegebenen Set oder in beiden enthalten sind.

## Syntax

```js-nolint
union(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}} Objekt oder ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}} Objekt, das Elemente enthält, die entweder in diesem Set, im `other` Set oder in beiden enthalten sind.

## Beschreibung

In der mathematischen Notation ist _Vereinigung_ definiert als:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mtext>&nbsp;oder&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cup B = \\{x\mid x\in A\text{ oder }x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und unter Verwendung des Venn-Diagramms:

![Ein Venn-Diagramm, in dem sich zwei Kreise überschneiden. Die symmetrische Differenz von A und B ist der Bereich, der von einem oder beiden Kreisen umfasst wird.](diagram.svg)

`union()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other` Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}} Instanz ist, da es direkt die zugrunde liegenden Daten aus `this` abruft, ohne benutzerdefinierten Code aufzurufen. Dann wird über `other` iteriert, indem dessen `keys()` Methode aufgerufen wird, und ein neues Set wird mit allen Elementen in `this` konstruiert, gefolgt von allen Elementen in `other`, die nicht in `this` enthalten sind.

Die Reihenfolge der Elemente im zurückgegebenen Set ist zuerst die in `this`, gefolgt von den in `other`.

## Beispiele

### Verwendung von union()

Das folgende Beispiel berechnet die Vereinigung zwischen dem Set der geraden Zahlen (<10) und dem Set der perfekten Quadrate (<10). Das Ergebnis ist das Set von Zahlen, die entweder gerade, ein perfektes Quadrat oder beides sind.

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
- [es-shims Polyfill von `Set.prototype.union`](https://www.npmjs.com/package/set.prototype.union)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
