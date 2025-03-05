---
title: Set.prototype.intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`intersection()`** Methode von {{jsxref("Set")}} Instanzen nimmt eine Menge und gibt eine neue Menge zurück, die Elemente enthält, die sowohl in dieser Menge als auch in der gegebenen Menge vorhanden sind.

## Syntax

```js-nolint
intersection(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}} Objekt oder ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}} Objekt, das Elemente enthält, die sowohl in dieser Menge als auch in der `other` Menge vorhanden sind.

## Beschreibung

In mathematischer Notation ist die _Schnittmenge_ definiert als:

<!-- Beachten Sie: die {} müssen doppelt escaped werden, einmal für Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \\{x\in A\mid x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit einem Venn-Diagramm:

![Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Die Schnittmenge von A und B ist der Bereich, in dem sie sich überlappen.](diagram.svg)

`intersection()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other` Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}} Instanz ist, da es direkt die zugrunde liegenden Daten abruft, die in `this` gespeichert sind, ohne benutzerdefinierten Code aufzurufen. Dann hängt das Verhalten von den Größen von `this` und `other` ab:

- Wenn mehr Elemente in `this` als `other.size` vorhanden sind, wird `other` durch Aufrufen seiner `keys()` Methode iteriert, und eine neue Menge wird mit allen produzierten Elementen konstruiert, die auch in `this` vorhanden sind.
- Andernfalls wird über die Elemente in `this` iteriert und eine neue Menge wird mit allen Elementen `e` in `this` konstruiert, für die `other.has(e)` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt.

Aufgrund dieser Implementierung hängt die Effizienz von `intersection()` hauptsächlich von der Größe der kleineren Menge zwischen `this` und `other` ab (unter der Annahme, dass Mengen in sublinearer Zeit zugänglich sind). Die Reihenfolge der Elemente in der zurückgegebenen Menge ist dieselbe wie die der kleineren Menge von `this` und `other`.

## Beispiele

### Verwendung von intersection()

Im folgenden Beispiel wird die Schnittmenge zwischen der Menge der ungeraden Zahlen (<10) und der Menge der perfekten Quadrate (<10) berechnet. Das Ergebnis ist die Menge der ungeraden Zahlen, die perfekte Quadrate sind.

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
