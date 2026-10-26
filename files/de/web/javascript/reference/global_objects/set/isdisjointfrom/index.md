---
title: Set.prototype.isDisjointFrom()
short-title: isDisjointFrom()
slug: Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`isDisjointFrom()`** von {{jsxref("Set")}}-Instanzen nimmt eine Menge entgegen und gibt einen booleschen Wert zurück, der angibt, ob diese Menge keine gemeinsamen Elemente mit der übergebenen Menge hat.

## Syntax

```js-nolint
isDisjointFrom(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [Set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

`true`, wenn diese Menge keine gemeinsamen Elemente mit der Menge `other` hat, andernfalls `false`.

## Beschreibung

Zwei Mengen sind _disjunkt_, wenn sie keine gemeinsamen Elemente haben. In mathematischer Schreibweise:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mtext>&nbsp;ist disjunkt zu&nbsp;</mtext><mi>B</mi><mo stretchy="false">⇔</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\text{ ist disjunkt zu }B \Leftrightarrow A\cap B = \empty</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Als Venn-Diagramm:

![Ein Venn-Diagramm mit zwei Kreisen. A und B sind disjunkt, weil sich die Kreise nicht überlappen.](diagram.svg)

`isDisjointFrom()` akzeptiert [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als Parameter `other`. {{jsxref("this")}} muss eine tatsächliche {{jsxref("Set")}}-Instanz sein, da die Methode direkt auf die in `this` gespeicherten Daten zugreift, ohne benutzerdefinierten Code aufzurufen. Das weitere Verhalten hängt von der Größe von `this` und `other` ab:

- Wenn `this` mehr Elemente enthält als durch `other.size` angegeben, durchläuft die Methode `other`, indem sie dessen Methode `keys()` aufruft. Ist ein Element von `other` in `this` enthalten, gibt sie `false` zurück (und schließt den `keys()`-Iterator durch Aufruf seiner Methode `return()`). Andernfalls gibt sie `true` zurück.
- Andernfalls durchläuft sie die Elemente von `this` und gibt `false` zurück, wenn für ein Element `e` aus `this` der Aufruf `other.has(e)` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt. Andernfalls gibt sie `true` zurück.

Aufgrund dieser Implementierung hängt die Effizienz von `isDisjointFrom()` hauptsächlich von der Größe der kleineren der beiden Mengen `this` und `other` ab (vorausgesetzt, der Zugriff auf Mengen ist in sublinearer Zeit möglich).

## Beispiele

### isDisjointFrom() verwenden

Die Menge der Quadratzahlen (<20) ist disjunkt zur Menge der Primzahlen (<20), da sich eine Quadratzahl definitionsgemäß als Produkt zweier ganzer Zahlen darstellen lässt und 1 ebenfalls nicht als Primzahl gilt:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
```

Die Menge der Quadratzahlen (<20) ist nicht disjunkt zur Menge der zusammengesetzten Zahlen (<20), da alle Quadratzahlen außer 1 definitionsgemäß zusammengesetzte Zahlen sind:

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

- [Polyfill für `Set.prototype.isDisjointFrom` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-set)
- [es-shims-Polyfill für `Set.prototype.isDisjointFrom`](https://www.npmjs.com/package/set.prototype.isdisjointfrom)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
