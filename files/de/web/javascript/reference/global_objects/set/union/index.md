---
title: Set.prototype.union()
slug: Web/JavaScript/Reference/Global_Objects/Set/union
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{JSRef}}

Die **`union()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt ein Set und gibt ein neues Set zurück, das Elemente enthält, die in entweder oder beiden von diesem Set und dem angegebenen Set enthalten sind.

## Syntax

```js-nolint
union(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente enthält, die in entweder oder beiden von diesem Set und dem `other`-Set enthalten sind.

## Beschreibung

In mathematischer Notation ist _Vereinigung_ definiert als:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mtext>&nbsp;or&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cup B = \\{x\midx\in A\text{ or }x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und unter Verwendung eines Venn-Diagramms:

![Ein Venn-Diagramm, in dem sich zwei Kreise überschneiden. Die symmetrische Differenz von A und B ist der Bereich, der entweder von beiden Kreisen oder einem der beiden Kreise umfasst wird.](diagram.svg)

`union()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other`-Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt die zugrunde liegenden Daten abruft, die in `this` gespeichert sind, ohne benutzerdefinierten Code aufzurufen. Dann iteriert es über `other`, indem es dessen `keys()`-Methode aufruft und ein neues Set mit allen Elementen in `this` sowie allen Elementen in `other`, die nicht in `this` vorhanden sind, erstellt.

Die Reihenfolge der Elemente im zurückgegebenen Set ist zuerst die in `this`, gefolgt von denen in `other`.

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
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
