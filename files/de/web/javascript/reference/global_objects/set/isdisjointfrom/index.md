---
title: Set.prototype.isDisjointFrom()
short-title: isDisjointFrom()
slug: Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`isDisjointFrom()`** Methode von {{jsxref("Set")}} Instanzen nimmt eine Menge und gibt einen booleschen Wert zurück, der angibt, ob diese Menge keine gemeinsamen Elemente mit der angegebenen Menge hat.

## Syntax

```js-nolint
isDisjointFrom(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}} Objekt oder ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

`true`, wenn diese Menge keine gemeinsamen Elemente mit der `other` Menge hat, andernfalls `false`.

## Beschreibung

Zwei Mengen sind _disjunkt_, wenn sie keine gemeinsamen Elemente haben. In mathematischer Notation:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mtext>&nbsp;sind disjunkt zu&nbsp;</mtext><mi>B</mi><mo stretchy="false">⇔</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\text{ sind disjunkt zu }B \Leftrightarrow A\cap B = \empty</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und in einem Venn-Diagramm:

![Ein Venn-Diagramm mit zwei Kreisen. A und B sind disjunkt, da die Kreise keine Überlappungsregion haben.](diagram.svg)

`isDisjointFrom()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other`-Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}} Instanz ist, da es direkt die zugrunde liegenden Daten in `this` abruft, ohne Benutzer-Code aufzurufen. Dann hängt sein Verhalten von den Größen von `this` und `other` ab:

- Wenn `this` mehr Elemente hat als `other.size`, dann iteriert es über `other` durch Aufrufen der `keys()` Methode. Wenn irgendein Element in `other` in `this` vorhanden ist, gibt es `false` zurück (und schließt den `keys()` Iterator durch Aufruf seiner `return()` Methode). Andernfalls gibt es `true` zurück.
- Andernfalls iteriert es über die Elemente in `this` und gibt `false` zurück, wenn irgendein Element `e` in `this` dazu führt, dass `other.has(e)` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt. Andernfalls gibt es `true` zurück.

Aufgrund dieser Implementierung hängt die Effizienz von `isDisjointFrom()` hauptsächlich von der Größe der kleineren Menge zwischen `this` und `other` ab (vorausgesetzt, Mengen können in sublinearer Zeit zugegriffen werden).

## Beispiele

### Verwendung von isDisjointFrom()

Die Menge der perfekten Quadrate (<20) ist disjunkt von der Menge der Primzahlen (<20), da ein perfektes Quadrat per Definition in das Produkt zweier ganzer Zahlen zerlegbar ist, wobei 1 auch nicht als Primzahl gilt:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
```

Die Menge der perfekten Quadrate (<20) ist nicht disjunkt von der Menge der zusammengesetzten Zahlen (<20), da alle nicht mit 1 beginnenden perfekten Quadrate per Definition zusammengesetzte Zahlen sind:

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
