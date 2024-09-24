---
title: Set.prototype.symmetricDifference()
slug: Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die **`symmetricDifference()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt ein Set und gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem Set oder im angegebenen Set, aber nicht in beiden sind.

## Syntax

```js-nolint
symmetricDifference(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente enthält, die entweder in diesem Set oder im `other`-Set, aber nicht in beiden sind.

## Beschreibung

In der mathematischen Notation wird der _symmetrische Unterschied_ definiert als:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">A\ominus B = (A\setminus B)\cup(B\setminus A)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit einem Venn-Diagramm:

![Ein Venn-Diagramm mit zwei sich überschneidenden Kreisen. Der symmetrische Unterschied von A und B ist der Bereich, der entweder im einen oder im anderen Kreis enthalten ist, aber nicht in beiden.](diagram.svg)

`symmetricDifference()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other`-Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt auf die zugrunde liegenden Daten in `this` zugreift, ohne Benutzercode aufzurufen. Anschließend wird `other` durch Aufruf der `keys()`-Methode iteriert, und es wird ein neues Set mit allen Elementen in `this` erstellt, die in `other` nicht vorhanden sind, sowie allen Elementen in `other`, die in `this` nicht vorhanden sind.

Die Reihenfolge der Elemente im zurückgegebenen Set ist zuerst die in `this`, gefolgt von denen in `other`.

## Beispiele

### Verwendung von symmetricDifference()

Das folgende Beispiel berechnet den symmetrischen Unterschied zwischen dem Set der geraden Zahlen (<10) und dem Set der perfekten Quadrate (<10). Das Ergebnis ist das Set von Zahlen, die entweder gerade oder ein perfektes Quadrat sind, aber nicht beides.

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.symmetricDifference(squares)); // Set(5) { 2, 6, 8, 1, 9 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Set.prototype.symmetricDifference` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.union()")}}
