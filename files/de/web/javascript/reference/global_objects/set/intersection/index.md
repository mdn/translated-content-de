---
title: Set.prototype.intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{JSRef}}

Die **`intersection()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt eine Menge und gibt eine neue Menge zurück, die Elemente sowohl aus dieser Menge als auch aus der gegebenen Menge enthält.

## Syntax

```js-nolint
intersection(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente sowohl aus dieser Menge als auch aus der `other`-Menge enthält.

## Beschreibung

In der mathematischen Notation ist _Schnitt_ definiert als:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \\{x\in A\mid x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und unter Verwendung eines Venn-Diagramms:

![Ein Venn-Diagramm, in dem sich zwei Kreise überlappen. Der Schnitt von A und B ist der Bereich, in dem sie sich überlappen.](diagram.svg)

`intersection()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other`-Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt die zugrunde liegenden Daten abruft, die in `this` gespeichert sind, ohne jeglichen Benutzer-Code aufzurufen. Dann hängt das Verhalten von der Größe von `this` und `other` ab:

- Wenn es mehr Elemente in `this` als `other.size` gibt, iteriert es über `other`, indem es seine `keys()` Methode aufruft, und erzeugt eine neue Menge mit allen erzeugten Elementen, die auch in `this` vorhanden sind.
- Andernfalls iteriert es über die Elemente in `this` und erzeugt eine neue Menge mit allen Elementen `e` in `this`, bei denen `other.has(e)` einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgibt.

Aufgrund dieser Implementierung hängt die Effizienz von `intersection()` hauptsächlich von der Größe der kleineren Menge zwischen `this` und `other` ab (unter der Annahme, dass auf Mengen in sublinearer Zeit zugegriffen werden kann). Die Reihenfolge der Elemente in der zurückgegebenen Menge entspricht der kleineren Menge von `this` und `other`.

## Beispiele

### Verwendung von intersection()

Das folgende Beispiel berechnet den Schnitt zwischen der Menge der ungeraden Zahlen (<10) und der Menge der perfekten Quadrate (<10). Das Ergebnis ist die Menge der ungeraden Zahlen, die perfekte Quadrate sind.

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Set.prototype.intersection` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
