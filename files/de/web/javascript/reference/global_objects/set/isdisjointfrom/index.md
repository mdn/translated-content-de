---
title: Set.prototype.isDisjointFrom()
slug: Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die **`isDisjointFrom()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt eine Menge und gibt einen booleschen Wert zurück, der angibt, ob diese Menge keine gemeinsamen Elemente mit der angegebenen Menge hat.

## Syntax

```js-nolint
isDisjointFrom(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [mengenähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

`true`, wenn diese Menge keine gemeinsamen Elemente mit der `other`-Menge hat, andernfalls `false`.

## Beschreibung

Zwei Mengen sind _disjunkt_, wenn sie keine gemeinsamen Elemente haben. In mathematischer Notation:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mtext>&nbsp;ist disjunkt von&nbsp;</mtext><mi>B</mi><mo stretchy="false">⇔</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\text{ ist disjunkt von }B \Leftrightarrow A\cap B = \empty</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit einem Venn-Diagramm dargestellt:

![Ein Venn-Diagramm mit zwei Kreisen. A und B sind disjunkt, weil die Kreise keine überlappende Region haben.](diagram.svg)

`isDisjointFrom()` akzeptiert [mengenähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other`-Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt die zugrunde liegenden Daten in `this` abruft, ohne Benutzercode aufzurufen. Sein Verhalten hängt dann von der Größe von `this` und `other` ab:

- Wenn es in `this` mehr Elemente als `other.size` gibt, wird über `other` iteriert, indem seine `keys()`-Methode aufgerufen wird. Falls ein Element in `other` in `this` vorhanden ist, gibt es `false` zurück (und schließt den `keys()`-Iterator, indem seine `return()`-Methode aufgerufen wird). Andernfalls gibt es `true` zurück.
- Andernfalls wird über die Elemente in `this` iteriert und `false` zurückgegeben, wenn ein Element `e` in `this` `other.has(e)` dazu veranlasst, einen [truthy](/de/docs/Glossary/Truthy) Wert zurückzugeben. Andernfalls gibt es `true` zurück.

Aufgrund dieser Implementierung hängt die Effizienz von `isDisjointFrom()` hauptsächlich von der Größe der kleineren Menge zwischen `this` und `other` ab (vorausgesetzt, Mengen können in unterlinearer Zeit zugegriffen werden).

## Beispiele

### Verwendung von isDisjointFrom()

Die Menge der perfekten Quadrate (<20) ist disjunkt zur Menge der Primzahlen (<20), weil ein perfektes Quadrat per Definition in das Produkt zweier ganzer Zahlen zerlegbar ist, während 1 auch nicht als Primzahl gilt:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
```

Die Menge der perfekten Quadrate (<20) ist nicht disjunkt zur Menge der zusammengesetzten Zahlen (<20), weil alle nicht-1 perfekten Quadrate per Definition zusammengesetzte Zahlen sind:

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
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
