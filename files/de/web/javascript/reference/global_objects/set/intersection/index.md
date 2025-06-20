---
title: Set.prototype.intersection()
short-title: intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`intersection()`** für Instanzen von {{jsxref("Set")}} nimmt eine Menge und gibt eine neue Menge zurück, die Elemente enthält, die sowohl in diesem Set als auch im übergebenen Set vorhanden sind.

## Syntax

```js-nolint
intersection(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-artiges](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente enthält, die sowohl in diesem Set als auch im `other` Set vorhanden sind.

## Beschreibung

In der mathematischen Notation ist _Schnittmenge_ definiert als:

<!-- Hinweis: die {} müssen doppelt escaped sein, einmal für Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \\{x\in A\mid x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit einem Venn-Diagramm:

![Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Der Schnittpunkt von A und B ist der Teil, an dem sie sich überlappen.](diagram.svg)

`intersection()` akzeptiert [set-artige](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other` Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt die zugrunde liegenden Daten in `this` abrufen kann, ohne Benutzercode aufzurufen. Dann hängt sein Verhalten von der Größe von `this` und `other` ab:

- Wenn es mehr Elemente in `this` als in `other.size` gibt, iteriert es über `other`, indem es seine `keys()`-Methode aufruft, und konstruiert ein neues Set mit allen erzeugten Elementen, die auch in `this` vorhanden sind.
- Andernfalls iteriert es über die Elemente in `this` und konstruiert ein neues Set mit allen Elementen `e` in `this`, bei denen `other.has(e)` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt.

Aufgrund dieser Implementierung hängt die Effizienz von `intersection()` hauptsächlich von der Größe der kleineren Menge zwischen `this` und `other` ab (unter der Annahme, dass auf Mengen in unterlinearer Zeit zugegriffen werden kann). Die Reihenfolge der Elemente im zurückgegebenen Set entspricht der der kleineren von `this` und `other`.

## Beispiele

### Verwendung von intersection()

Das folgende Beispiel berechnet die Schnittmenge zwischen der Menge der ungeraden Zahlen (<10) und der Menge der perfekten Quadratzahlen (<10). Das Ergebnis ist die Menge der ungeraden Zahlen, die perfekte Quadrate sind.

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
- [es-shims Polyfill von `Set.prototype.intersection`](https://www.npmjs.com/package/set.prototype.intersection)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
