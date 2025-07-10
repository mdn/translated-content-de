---
title: Set.prototype.intersection()
short-title: intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`intersection()`** Methode von {{jsxref("Set")}} Instanzen nimmt eine Menge und gibt eine neue Menge zurück, die Elemente sowohl aus dieser Menge als auch aus der übergebenen Menge enthält.

## Syntax

```js-nolint
intersection(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}} Objekt oder [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}} Objekt, das Elemente sowohl aus dieser Menge als auch aus der `other` Menge enthält.

## Beschreibung

In mathematischer Notation ist _intersection_ definiert als:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \\{x\in A\mid x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mithilfe eines Venn-Diagramms:

![Ein Venn-Diagramm, in dem sich zwei Kreise überlappen. Die Schnittmenge von A und B ist der Bereich, in dem sie sich überlappen.](diagram.svg)

`intersection()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other` Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}} Instanz ist, da es direkt die zugrunde liegenden Daten in `this` abruft, ohne Benutzercode aufzurufen. Anschließend hängt sein Verhalten von den Größen von `this` und `other` ab:

- Wenn mehr Elemente in `this` als `other.size` sind, wird über `other` iteriert, indem dessen `keys()` Methode aufgerufen wird, und eine neue Menge wird mit allen erzeugten Elementen erstellt, die auch in `this` vorhanden sind.
- Andernfalls wird über die Elemente in `this` iteriert, und eine neue Menge wird mit allen Elementen `e` in `this` erstellt, die dazu führen, dass `other.has(e)` einen {{Glossary("Truthy", "wahrheitsgemäßen")}} Wert zurückgibt.

Aufgrund dieser Implementierung hängt die Effizienz von `intersection()` hauptsächlich von der Größe der kleineren Menge zwischen `this` und `other` ab (unter der Annahme, dass auf Mengen in unterlinearer Zeit zugegriffen werden kann). Die Reihenfolge der Elemente in der zurückgegebenen Menge entspricht der der kleineren der beiden Mengen, `this` und `other`.

## Beispiele

### Verwendung von intersection()

Das folgende Beispiel berechnet die Schnittmenge zwischen der Menge ungerade Zahlen (<10) und der Menge perfekter Quadrate (<10). Das Ergebnis ist die Menge ungerader Zahlen, die perfekte Quadrate sind.

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
