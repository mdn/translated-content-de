---
title: Set.prototype.intersection()
short-title: intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`intersection()`** von {{jsxref("Set")}}-Instanzen nimmt ein Set entgegen und gibt ein neues Set zurück, das die Elemente enthält, die sowohl in diesem als auch im übergebenen Set vorhanden sind.

## Syntax

```js-nolint
intersection(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [Set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das die Elemente enthält, die sowohl in diesem als auch im Set `other` vorhanden sind.

## Beschreibung

In der mathematischen Notation ist die _Schnittmenge_ wie folgt definiert:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \\{x\in A\mid x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Als Venn-Diagramm dargestellt:

![Ein Venn-Diagramm mit zwei sich überschneidenden Kreisen. Die Schnittmenge von A und B ist der Bereich, in dem sie sich überschneiden.](diagram.svg)

`intersection()` akzeptiert [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als Parameter `other`. {{jsxref("this")}} muss eine tatsächliche {{jsxref("Set")}}-Instanz sein, da die Methode direkt auf die in `this` gespeicherten Daten zugreift, ohne benutzerdefinierten Code aufzurufen. Das weitere Verhalten hängt von der Größe von `this` und `other` ab:

- Wenn `this` mehr Elemente enthält als `other.size`, durchläuft die Methode `other` durch Aufruf der Methode `keys()` und erstellt ein neues Set mit allen dabei gelieferten Elementen, die auch in `this` vorhanden sind.
- Andernfalls durchläuft sie die Elemente in `this` und erstellt ein neues Set mit allen Elementen `e` aus `this`, für die `other.has(e)` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt.

Aufgrund dieser Implementierung hängt die Effizienz von `intersection()` hauptsächlich von der Größe des kleineren der beiden Sets `this` und `other` ab (vorausgesetzt, der Zugriff auf Sets ist in sublinearer Zeit möglich). Die Reihenfolge der Elemente im zurückgegebenen Set entspricht der des kleineren der beiden Sets `this` und `other`.

## Beispiele

### intersection() verwenden

Das folgende Beispiel berechnet die Schnittmenge der ungeraden Zahlen (<10) und der Quadratzahlen (<10). Das Ergebnis ist das Set der ungeraden Zahlen, die zugleich Quadratzahlen sind.

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

- [Polyfill für `Set.prototype.intersection` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-set)
- [Polyfill für `Set.prototype.intersection` von es-shims](https://www.npmjs.com/package/set.prototype.intersection)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
