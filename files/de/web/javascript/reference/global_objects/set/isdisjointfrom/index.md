---
title: Set.prototype.isDisjointFrom()
short-title: isDisjointFrom()
slug: Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **`isDisjointFrom()`** Methode von {{jsxref("Set")}} Instanzen nimmt eine Menge und gibt einen Booleschen Wert zurück, der anzeigt, ob diese Menge keine gemeinsamen Elemente mit der gegebenen Menge hat.

## Syntax

```js-nolint
isDisjointFrom(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}} Objekt oder [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

`true`, wenn diese Menge keine gemeinsamen Elemente mit der `other` Menge hat, andernfalls `false`.

## Beschreibung

Zwei Mengen sind _disjunkt_, wenn sie keine gemeinsamen Elemente haben. In mathematischer Notation:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mtext>&nbsp;ist disjunkt von&nbsp;</mtext><mi>B</mi><mo stretchy="false">⇔</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\text{ ist disjunkt von }B \Leftrightarrow A\cap B = \empty</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit dem Venn-Diagramm:

![Ein Venn-Diagramm mit zwei Kreisen. A und B sind disjunkt, weil die Kreise keinen Überlappungsbereich haben.](diagram.svg)

`isDisjointFrom()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other` Parameter. Es erfordert, dass {{jsxref("this")}} eine tatsächliche {{jsxref("Set")}} Instanz ist, da es direkt die zugrunde liegenden Daten in `this` abruft, ohne dass Benutzercode aufgerufen wird. Anschließend hängt das Verhalten von der Größe von `this` und `other` ab:

- Wenn es mehr Elemente in `this` gibt als `other.size`, durchläuft es `other` durch Aufruf der `keys()` Methode, und wenn irgendein Element in `other` in `this` vorhanden ist, gibt es `false` zurück (und schließt den `keys()` Iterator, indem es dessen `return()` Methode aufruft). Andernfalls gibt es `true` zurück.
- Andernfalls durchläuft es die Elemente in `this` und gibt `false` zurück, wenn irgendein Element `e` in `this` verursacht, dass `other.has(e)` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt. Andernfalls gibt es `true` zurück.

Aufgrund dieser Implementierung hängt die Effizienz von `isDisjointFrom()` hauptsächlich von der Größe der kleineren Menge zwischen `this` und `other` ab (vorausgesetzt, dass auf Mengen in unterlinearer Zeit zugegriffen werden kann).

## Beispiele

### Verwendung von isDisjointFrom()

Die Menge der perfekten Quadrate (<20) ist disjunkt von der Menge der Primzahlen (<20), da ein perfektes Quadrat per Definition in das Produkt zweier ganzer Zahlen zerlegbar ist, während 1 auch nicht als Primzahl angesehen wird:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
```

Die Menge der perfekten Quadrate (<20) ist nicht disjunkt von der Menge der zusammengesetzten Zahlen (<20), da alle nicht-1 perfekten Quadrate per Definition zusammengesetzte Zahlen sind:

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
