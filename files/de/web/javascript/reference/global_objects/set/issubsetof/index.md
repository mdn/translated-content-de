---
title: Set.prototype.isSubsetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{JSRef}}

Die **`isSubsetOf()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt eine Menge und gibt einen booleschen Wert zurück, der angibt, ob alle Elemente dieser Menge in der angegebenen Menge enthalten sind.

## Syntax

```js-nolint
isSubsetOf(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects).

### Rückgabewert

`true`, wenn alle Elemente in dieser Menge auch in der `other`-Menge sind, und `false` sonst.

## Beschreibung

In mathematischer Notation ist _Teilmenge_ definiert als:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊆</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>B</mi></mrow><annotation encoding="TeX">A\subseteq B \Leftrightarrow \forall x\in A,\,x\in B</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit einem Venn-Diagramm:

![Ein Venn-Diagramm mit zwei Kreisen. A ist eine Teilmenge von B, weil A vollständig in B enthalten ist.](diagram.svg)

> [!NOTE]
> Die _Teilmenge_-Beziehung ist keine _echte Teilmenge_, was bedeutet, dass `isSubsetOf()` `true` zurückgibt, wenn `this` und `other` dieselben Elemente enthalten.

`isSubsetOf()` akzeptiert [set-ähnliche Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) als `other`-Parameter. Dabei muss {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz sein, da es die zugrunde liegenden Daten, die in `this` gespeichert sind, direkt abruft, ohne benutzerdefinierten Code aufzurufen. Das Verhalten hängt dann von der Größe von `this` und `other` ab:

- Wenn es mehr Elemente in `this` gibt als `other.size`, wird direkt `false` zurückgegeben.
- Andernfalls wird über die Elemente in `this` iteriert und `false` zurückgegeben, wenn irgendein Element `e` in `this` dazu führt, dass `other.has(e)` einen [falsy](/de/docs/Glossary/Falsy) Wert zurückgibt. Andernfalls wird `true` zurückgegeben.

## Beispiele

### Verwendung von isSubsetOf()

Die Menge der Vielfachen von 4 (<20) ist eine Teilmenge der geraden Zahlen (<20):

```js
const fours = new Set([4, 8, 12, 16]);
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
console.log(fours.isSubsetOf(evens)); // true
```

Die Menge der Primzahlen (<20) ist keine Teilmenge aller ungeraden Zahlen (<20), da 2 prim aber nicht ungerade ist:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(primes.isSubsetOf(odds)); // false
```

Gleiche Mengen sind Teilmengen voneinander:

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSubsetOf(set2)); // true
console.log(set2.isSubsetOf(set1)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Set.prototype.isSubsetOf` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
