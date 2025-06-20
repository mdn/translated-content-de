---
title: Set.prototype.isDisjointFrom()
short-title: isDisjointFrom()
slug: Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`isDisjointFrom()`** Methode von {{jsxref("Set")}} Instanzen nimmt eine Menge und gibt einen booleschen Wert zurück, der angibt, ob diese Menge keine gemeinsamen Elemente mit der angegebenen Menge hat.

## Syntax

```js-nolint
isDisjointFrom(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}} Objekt oder ein [mengenähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects).

### Rückgabewert

`true`, wenn diese Menge keine gemeinsamen Elemente mit der `other` Menge hat, und `false` andernfalls.

## Beschreibung

Zwei Mengen sind _disjoint_ (disjunkt), wenn sie keine gemeinsamen Elemente haben. In mathematischer Notation:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mtext>&nbsp;disjunkt zu&nbsp;</mtext><mi>B</mi><mo stretchy="false">⇔</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\text{ is disjoint from }B \Leftrightarrow A\cap B = \empty</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mittels Venn-Diagramm:

![Ein Venn-Diagramm mit zwei Kreisen. A und B sind disjunkt, weil die Kreise keinen Überlappungsbereich haben.](diagram.svg)

`isDisjointFrom()` akzeptiert [mengenähnliche Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) als `other` Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}} Instanz ist, da es direkt die zugrunde liegenden Daten in `this` abruft, ohne Benutzercode auszuführen. Dann hängt das Verhalten von den Größen von `this` und `other` ab:

- Wenn es mehr Elemente in `this` als `other.size` gibt, iteriert es über `other` durch Aufruf der `keys()` Methode, und wenn irgendein Element in `other` in `this` vorhanden ist, gibt es `false` zurück (und schließt den `keys()` Iterator durch Aufruf der `return()` Methode). Andernfalls gibt es `true` zurück.
- Andernfalls iteriert es über die Elemente in `this` und gibt `false` zurück, wenn irgendein Element `e` in `this` dazu führt, dass `other.has(e)` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt. Andernfalls gibt es `true` zurück.

Aufgrund dieser Implementierung hängt die Effizienz von `isDisjointFrom()` hauptsächlich von der Größe der kleineren Menge zwischen `this` und `other` ab (unter der Annahme, dass Mengen in sublinearer Zeit abgerufen werden können).

## Beispiele

### Verwendung von isDisjointFrom()

Die Menge perfekter Quadrate (<20) ist disjunkt zur Menge der Primzahlen (<20), da ein perfektes Quadrat per Definition in das Produkt von zwei ganzen Zahlen zerlegbar ist, während 1 auch nicht als Primzahl gilt:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
```

Die Menge perfekter Quadrate (<20) ist nicht disjunkt zur Menge der zusammengesetzten Zahlen (<20), da alle nicht-1 perfekten Quadrate per Definition zusammengesetzte Zahlen sind:

```js
const composites = new Set([4, 6, 8, 9, 10, 12, 14, 15, 16, 18]);
const squares = new Set([1, 4, 9, 16]);
console.log(composites.isDisjointFrom(squares)); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Set.prototype.isDisjointFrom` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [es-shims Polyfill von `Set.prototype.isDisjointFrom`](https://www.npmjs.com/package/set.prototype.isdisjointfrom)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
