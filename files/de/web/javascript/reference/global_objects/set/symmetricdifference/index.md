---
title: Set.prototype.symmetricDifference()
short-title: symmetricDifference()
slug: Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`symmetricDifference()`**-Methode von {{jsxref("Set")}} Instanzen nimmt ein Set und gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem Set oder im angegebenen Set, aber nicht in beiden enthalten sind.

## Syntax

```js-nolint
symmetricDifference(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente enthält, die entweder in diesem Set oder im `other`-Set, aber nicht in beiden enthalten sind.

## Beschreibung

In mathematischer Notation wird der Begriff _symmetrische Differenz_ wie folgt definiert:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">A\ominus B = (A\setminus B)\cup(B\setminus A)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mittels Venn-Diagramm:

![Ein Venn-Diagramm, in dem sich zwei Kreise überlappen. Die symmetrische Differenz von A und B ist der Bereich, der entweder im einen oder anderen Kreis, aber nicht in beiden enthalten ist.](diagram.svg)

`symmetricDifference()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als das `other`-Argument. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt die darunter liegenden Daten extrahiert, die in `this` gespeichert sind, ohne benutzerdefinierten Code aufzurufen. Es iteriert dann über `other`, indem es dessen `keys()`-Methode aufruft und ein neues Set mit allen Elementen in `this` erstellt, die nicht in `other` vorkommen, und allen Elementen in `other`, die nicht in `this` vorkommen.

Die Reihenfolge der Elemente im zurückgegebenen Set ist zuerst die in `this`, gefolgt von denen in `other`.

## Beispiele

### Verwendung von symmetricDifference()

Im folgenden Beispiel wird die symmetrische Differenz zwischen der Menge der geraden Zahlen (<10) und der Menge der perfekten Quadrate (<10) berechnet. Das Ergebnis ist die Menge der Zahlen, die entweder gerade oder ein perfektes Quadrat, aber nicht beides sind.

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
- [es-shims Polyfill von `Set.prototype.symmetricDifference`](https://www.npmjs.com/package/set.prototype.symmetricdifference)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.union()")}}
