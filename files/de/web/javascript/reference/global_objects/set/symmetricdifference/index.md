---
title: Set.prototype.symmetricDifference()
short-title: symmetricDifference()
slug: Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`symmetricDifference()`** von {{jsxref("Set")}}-Instanzen nimmt eine Menge entgegen und gibt eine neue Menge zurück, die alle Elemente enthält, die entweder in dieser Menge oder in der übergebenen Menge vorkommen, aber nicht in beiden.

## Syntax

```js-nolint
symmetricDifference(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-artiges](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt mit den Elementen, die entweder in dieser Menge oder in der Menge `other` vorkommen, aber nicht in beiden.

## Beschreibung

In der mathematischen Notation ist die _symmetrische Differenz_ wie folgt definiert:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">A\ominus B = (A\setminus B)\cup(B\setminus A)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Als Venn-Diagramm dargestellt:

![Ein Venn-Diagramm mit zwei sich überschneidenden Kreisen. Die symmetrische Differenz von A und B ist der Bereich, der in einem der beiden Kreise liegt, aber nicht in beiden.](diagram.svg)

`symmetricDifference()` akzeptiert [set-artige](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als Parameter `other`. {{jsxref("this")}} muss eine tatsächliche {{jsxref("Set")}}-Instanz sein, da die Methode direkt auf die in `this` gespeicherten Daten zugreift, ohne benutzerdefinierten Code aufzurufen. Anschließend durchläuft sie `other`, indem sie dessen Methode `keys()` aufruft, und erstellt eine neue Menge mit allen Elementen aus `this`, die nicht in `other` vorkommen, sowie allen Elementen aus `other`, die nicht in `this` vorkommen.

In der zurückgegebenen Menge stehen zuerst die Elemente aus `this`, gefolgt von denen aus `other`.

## Beispiele

### symmetricDifference() verwenden

Das folgende Beispiel berechnet die symmetrische Differenz zwischen der Menge der geraden Zahlen (<10) und der Menge der Quadratzahlen (<10). Das Ergebnis ist die Menge der Zahlen, die entweder gerade oder eine Quadratzahl sind, aber nicht beides.

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

- [Polyfill für `Set.prototype.symmetricDifference` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-set)
- [Polyfill für `Set.prototype.symmetricDifference` von es-shims](https://www.npmjs.com/package/set.prototype.symmetricdifference)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.union()")}}
