---
title: Set.prototype.union()
short-title: union()
slug: Web/JavaScript/Reference/Global_Objects/Set/union
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **`union()`** Methode von {{jsxref("Set")}} Instanzen nimmt eine Menge und gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser Menge oder in beiden, dieser und der gegebenen Menge, vorhanden sind.

## Syntax

```js-nolint
union(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}} Objekt oder ein [mengenähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}} Objekt, das Elemente enthält, die entweder in dieser Menge oder in beiden, dieser und der `other` Menge, vorhanden sind.

## Beschreibung

In mathematischer Notation ist die _Vereinigung_ definiert als:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mtext>&nbsp;oder&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cup B = \\{x\mid x\in A\text{ or }x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und unter Verwendung eines Venn-Diagramms:

![Ein Venn-Diagramm, in dem sich zwei Kreise überlappen. Die symmetrische Differenz von A und B ist der Bereich, der entweder von einem oder beiden Kreisen umfasst wird.](diagram.svg)

`union()` akzeptiert [mengenähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other` Parameter. Es erfordert, dass {{jsxref("this")}} eine tatsächliche {{jsxref("Set")}} Instanz ist, da es direkt die zugrunde liegenden Daten in `this` abruft, ohne Benutzercode aufzurufen. Anschließend wird über `other` iteriert, indem die Methode `keys()` aufgerufen wird, und eine neue Menge mit allen Elementen in `this` sowie allen Elementen in `other`, die nicht in `this` vorhanden sind, erstellt.

Die Reihenfolge der Elemente in der zurückgegebenen Menge ist zuerst die in `this`, gefolgt von denen in `other`.

## Beispiele

### Verwendung von union()

Das folgende Beispiel berechnet die Vereinigung zwischen der Menge der geraden Zahlen (<10) und der Menge der perfekten Quadrate (<10). Das Ergebnis ist die Menge von Zahlen, die entweder gerade oder ein perfektes Quadrat oder beides sind.

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
