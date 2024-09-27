---
title: Set.prototype.isSupersetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die Methode **`isSupersetOf()`** von {{jsxref("Set")}}-Instanzen nimmt eine Menge und gibt einen Boolean-Wert zurück, der anzeigt, ob alle Elemente der angegebenen Menge in dieser Menge enthalten sind.

## Syntax

```js-nolint
isSupersetOf(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [mengenähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects).

### Rückgabewert

`true`, wenn alle Elemente in der `other`-Menge auch in dieser Menge sind, andernfalls `false`.

## Beschreibung

In mathematischer Notation ist eine _Obermenge_ definiert als:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>A</mi></mrow><annotation encoding="TeX">A\supseteq B \Leftrightarrow \forall x\in B,\,x\in A</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit einem Diagramm:

![Ein Venn-Diagramm mit zwei Kreisen. A ist eine Obermenge von B, weil B vollständig in A enthalten ist.](diagram.svg)

> [!NOTE]
> Die Beziehung der _Obermenge_ ist keine _echte Obermenge_, was bedeutet, dass `isSupersetOf()` `true` zurückgibt, wenn `this` und `other` die gleichen Elemente enthalten.

`isSupersetOf()` akzeptiert [mengenähnliche Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) als den `other`-Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine echte {{jsxref("Set")}}-Instanz ist, da es die zugrunde liegenden Daten direkt abruft, die in `this` gespeichert sind, ohne Benutzercode auszuführen. Dann hängt sein Verhalten von der Größe von `this` und `other` ab:

- Wenn es weniger Elemente in `this` gibt als in `other.size`, gibt es direkt `false` zurück.
- Andernfalls iteriert es über `other`, indem es dessen `keys()`-Methode aufruft. Wenn ein Element in `other` nicht in `this` vorhanden ist, gibt es `false` zurück (und schließt den `keys()`-Iterator, indem es dessen `return()`-Methode aufruft). Andernfalls gibt es `true` zurück.

## Beispiele

### Verwendung von isSupersetOf()

Die Menge der geraden Zahlen (<20) ist eine Obermenge der Vielfachen von 4 (<20):

```js
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const fours = new Set([4, 8, 12, 16]);
console.log(evens.isSupersetOf(fours)); // true
```

Die Menge aller ungeraden Zahlen (<20) ist keine Obermenge der Primzahlen (<20), da 2 eine Primzahl, aber nicht ungerade ist:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(odds.isSupersetOf(primes)); // false
```

Gleiche Mengen sind gegenseitige Obermengen:

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSupersetOf(set2)); // true
console.log(set2.isSupersetOf(set1)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Set.prototype.isSupersetOf` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
