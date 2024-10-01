---
title: Set.prototype.intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{JSRef}}

Die **`intersection()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt ein Set und gibt ein neues Set zurück, das Elemente enthält, die sowohl in diesem Set als auch im angegebenen Set enthalten sind.

## Syntax

```js-nolint
intersection(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects).

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente enthält, die sowohl in diesem Set als auch im `other`-Set vorhanden sind.

## Beschreibung

In mathematischer Notation wird _Schnittmenge_ definiert als:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \\{x\in A\mid x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und unter Verwendung eines Venn-Diagramms:

![Ein Venn-Diagramm, bei dem sich zwei Kreise überschneiden. Die Schnittmenge von A und B ist der Bereich, in dem sie sich überschneiden.](diagram.svg)

`intersection()` akzeptiert [set-ähnliche Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) als `other`-Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da die zugrunde liegenden Daten direkt in `this` abgerufen werden, ohne benutzerdefinierten Code aufzurufen. Dann hängt das Verhalten von den Größen von `this` und `other` ab:

- Wenn `this` mehr Elemente enthält als `other.size`, wird `other` durch Aufrufen seiner `keys()`-Methode iteriert, und ein neues Set wird mit allen erzeugten Elementen erstellt, die auch in `this` vorhanden sind.
- Andernfalls wird über die Elemente von `this` iteriert, und ein neues Set wird mit allen Elementen `e` in `this` erstellt, die `other.has(e)` dazu bringen, einen {{Glossary("Truthy", "wahrheitsgemäßen")}} Wert zurückzugeben.

Aufgrund dieser Implementierung hängt die Effizienz von `intersection()` hauptsächlich von der Größe des kleineren Sets zwischen `this` und `other` ab (vorausgesetzt, dass auf Sets in sublinearer Zeit zugegriffen werden kann). Die Reihenfolge der Elemente im zurückgegebenen Set entspricht der des kleineren von `this` und `other`.

## Beispiele

### Verwendung von intersection()

Das folgende Beispiel berechnet die Schnittmenge zwischen der Menge ungerader Zahlen (<10) und der Menge perfekter Quadrate (<10). Das Ergebnis ist die Menge ungerader Zahlen, die perfekte Quadrate sind.

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
