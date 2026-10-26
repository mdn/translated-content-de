---
title: Set.prototype.union()
short-title: union()
slug: Web/JavaScript/Reference/Global_Objects/Set/union
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`union()`** von {{jsxref("Set")}}-Instanzen nimmt eine Menge entgegen und gibt eine neue Menge zurück, die alle Elemente enthält, die in dieser Menge, in der übergebenen Menge oder in beiden enthalten sind.

## Syntax

```js-nolint
union(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [Set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das alle Elemente enthält, die in dieser Menge, in der Menge `other` oder in beiden enthalten sind.

## Beschreibung

In der mathematischen Notation ist die _Vereinigung_ wie folgt definiert:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mtext>&nbsp;or&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cup B = \\{x\mid x\in A\text{ or }x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Als Venn-Diagramm dargestellt:

![Ein Venn-Diagramm mit zwei überlappenden Kreisen. Die Vereinigung von A und B ist der Bereich innerhalb eines der beiden Kreise oder beider Kreise.](diagram.svg)

`union()` akzeptiert [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als Parameter `other`. {{jsxref("this")}} muss eine tatsächliche {{jsxref("Set")}}-Instanz sein, da die Methode direkt auf die in `this` gespeicherten Daten zugreift, ohne benutzerdefinierten Code aufzurufen. Anschließend durchläuft sie `other`, indem sie dessen Methode `keys()` aufruft, und erstellt eine neue Menge mit allen Elementen aus `this`, gefolgt von allen Elementen aus `other`, die nicht in `this` enthalten sind.

Die Reihenfolge der Elemente in der zurückgegebenen Menge entspricht zunächst der Reihenfolge in `this`, gefolgt von den Elementen aus `other`.

## Beispiele

### union() verwenden

Das folgende Beispiel berechnet die Vereinigung der Menge gerader Zahlen (<10) und der Menge der Quadratzahlen (<10). Das Ergebnis ist die Menge der Zahlen, die gerade, eine Quadratzahl oder beides sind.

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

- [Polyfill für `Set.prototype.union` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-set)
- [Polyfill für `Set.prototype.union` von es-shims](https://www.npmjs.com/package/set.prototype.union)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
