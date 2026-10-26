---
title: Set.prototype.isSubsetOf()
short-title: isSubsetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`isSubsetOf()`** von {{jsxref("Set")}}-Instanzen nimmt eine Menge entgegen und gibt einen booleschen Wert zurück, der angibt, ob alle Elemente dieser Menge in der angegebenen Menge enthalten sind.

## Syntax

```js-nolint
isSubsetOf(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [Set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

`true`, wenn alle Elemente dieser Menge auch in der Menge `other` enthalten sind; andernfalls `false`.

## Beschreibung

In mathematischer Notation ist eine _Teilmenge_ wie folgt definiert:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊆</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>B</mi></mrow><annotation encoding="TeX">A\subseteq B \Leftrightarrow \forall x\in A,\,x\in B</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und als Venn-Diagramm dargestellt:

![Ein Venn-Diagramm mit zwei Kreisen. A ist eine Teilmenge von B, weil A vollständig in B enthalten ist.](diagram.svg)

> [!NOTE]
> Die Beziehung _Teilmenge_ ist nicht auf _echte Teilmengen_ beschränkt. Daher gibt `isSubsetOf()` auch dann `true` zurück, wenn `this` und `other` dieselben Elemente enthalten.

`isSubsetOf()` akzeptiert [Set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als Parameter `other`. {{jsxref("this")}} muss eine tatsächliche {{jsxref("Set")}}-Instanz sein, da die Methode direkt auf die in `this` gespeicherten Daten zugreift, ohne benutzerdefinierten Code aufzurufen. Das weitere Verhalten hängt von der Größe von `this` und `other` ab:

- Wenn `this` mehr Elemente enthält, als `other.size` angibt, gibt die Methode unmittelbar `false` zurück.
- Andernfalls durchläuft sie die Elemente von `this` und gibt `false` zurück, sobald `other.has(e)` für ein Element `e` aus `this` einen {{Glossary("Falsy", "falsy")}}-Wert zurückgibt. Trifft dies auf kein Element zu, gibt sie `true` zurück.

## Beispiele

### isSubsetOf() verwenden

Die Menge der Vielfachen von 4 (<20) ist eine Teilmenge der geraden Zahlen (<20):

```js
const fours = new Set([4, 8, 12, 16]);
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
console.log(fours.isSubsetOf(evens)); // true
```

Die Menge der Primzahlen (<20) ist keine Teilmenge der ungeraden Zahlen (<20), da 2 eine Primzahl, aber nicht ungerade ist:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(primes.isSubsetOf(odds)); // false
```

Mengen mit denselben Elementen sind jeweils eine Teilmenge der anderen:

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSubsetOf(set2)); // true
console.log(set2.isSubsetOf(set1)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Set.prototype.isSubsetOf` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-set)
- [es-shims-Polyfill für `Set.prototype.isSubsetOf`](https://www.npmjs.com/package/set.prototype.issubsetof)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
