---
title: Set.prototype.difference()
short-title: difference()
slug: Web/JavaScript/Reference/Global_Objects/Set/difference
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`difference()`** von {{jsxref("Set")}}-Instanzen nimmt eine Menge entgegen und gibt eine neue Menge zurück, die die Elemente dieser Menge enthält, die nicht in der übergebenen Menge enthalten sind.

## Syntax

```js-nolint
difference(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-artiges](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt mit den Elementen dieser Menge, die nicht in der Menge `other` enthalten sind.

## Beschreibung

In mathematischer Schreibweise ist die _Differenz_ wie folgt definiert:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\setminus B = \\{x\in A\mid x\notin B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Als Venn-Diagramm dargestellt:

![Ein Venn-Diagramm mit zwei sich überschneidenden Kreisen. Die Differenz von A und B ist der Teil von A, der sich nicht mit B überschneidet.](diagram.svg)

`difference()` akzeptiert [set-artige](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als Parameter `other`. {{jsxref("this")}} muss eine tatsächliche {{jsxref("Set")}}-Instanz sein, da die Methode direkt auf die in `this` gespeicherten Daten zugreift, ohne benutzerdefinierten Code aufzurufen. Das weitere Verhalten hängt von der Größe von `this` und `other` ab:

- Wenn `this` mehr Elemente als `other.size` enthält, durchläuft die Methode `other` durch Aufruf von dessen `keys()`-Methode und erstellt eine neue Menge mit allen Elementen aus `this`, die nicht in `other` vorkommen.
- Andernfalls durchläuft sie die Elemente in `this` und erstellt eine neue Menge mit allen Elementen `e` aus `this`, für die `other.has(e)` einen {{Glossary("Falsy", "falsy")}}-Wert zurückgibt.

Die Reihenfolge der Elemente in der zurückgegebenen Menge entspricht der Reihenfolge in `this`.

## Beispiele

### difference() verwenden

Das folgende Beispiel berechnet die Differenz zwischen der Menge der ungeraden Zahlen (<10) und der Menge der Quadratzahlen (<10). Das Ergebnis ist die Menge der ungeraden Zahlen, die keine Quadratzahlen sind.

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.difference(squares)); // Set(3) { 3, 5, 7 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Set.prototype.difference` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-set)
- [Polyfill für `Set.prototype.difference` von es-shims](https://www.npmjs.com/package/set.prototype.difference)
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
