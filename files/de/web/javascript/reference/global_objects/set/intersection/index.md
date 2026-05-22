---
title: Set.prototype.intersection()
short-title: intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **`intersection()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt eine Menge und gibt eine neue Menge zurück, die Elemente sowohl in dieser Menge als auch in der angegebenen Menge enthält.

## Syntax

```js-nolint
intersection(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente sowohl in dieser Menge als auch in der `other`-Menge enthält.

## Beschreibung

In mathematischer Notation ist _Schnittmenge_ definiert als:

<!-- Hinweis: die {} müssen doppelt escaped werden, einmal für Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \\{x\in A\mid x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit einem Venn-Diagramm:

![Ein Venn-Diagramm, in dem sich zwei Kreise überlappen. Die Schnittmenge von A und B ist der Teil, in dem sie sich überlappen.](diagram.svg)

`intersection()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other`-Parameter. Es erfordert, dass {{jsxref("this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt die zugrunde liegenden Daten speichert, die in `this` gespeichert sind, ohne Benutzercode aufzurufen. Dann hängt sein Verhalten von der Größe von `this` und `other` ab:

- Wenn es in `this` mehr Elemente gibt als `other.size`, dann iteriert es über `other` durch Aufruf der `keys()`-Methode und erstellt eine neue Menge mit allen erzeugten Elementen, die auch in `this` vorhanden sind.
- Andernfalls iteriert es über die Elemente in `this` und erstellt eine neue Menge mit allen Elementen `e` in `this`, die `other.has(e)` dazu veranlassen, einen {{Glossary("Truthy", "truthy")}} Wert zurückzugeben.

Aufgrund dieser Implementierung hängt die Effizienz von `intersection()` hauptsächlich von der Größe der kleineren Menge zwischen `this` und `other` (unter der Annahme, dass auf Mengen in sublinearer Zeit zugegriffen werden kann) ab. Die Reihenfolge der Elemente in der zurückgegebenen Menge ist die gleiche wie bei der kleineren von `this` und `other`.

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
- [es-shims polyfill von `Set.prototype.intersection`](https://www.npmjs.com/package/set.prototype.intersection)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
