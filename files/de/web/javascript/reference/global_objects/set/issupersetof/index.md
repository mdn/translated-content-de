---
title: Set.prototype.isSupersetOf()
short-title: isSupersetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`isSupersetOf()`** von {{jsxref("Set")}}-Instanzen nimmt eine Menge entgegen und gibt einen booleschen Wert zurück, der angibt, ob alle Elemente der übergebenen Menge auch in dieser Menge enthalten sind.

## Syntax

```js-nolint
isSupersetOf(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [set-like](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects)-Objekt.

### Rückgabewert

`true`, wenn alle Elemente der Menge `other` auch in dieser Menge enthalten sind, andernfalls `false`.

## Beschreibung

In mathematischer Notation ist eine _Obermenge_ wie folgt definiert:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>A</mi></mrow><annotation encoding="TeX">A\supseteq B \Leftrightarrow \forall x\in B,\,x\in A</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Als Venn-Diagramm dargestellt:

![Ein Venn-Diagramm mit zwei Kreisen. A ist eine Obermenge von B, da B vollständig in A enthalten ist.](diagram.svg)

> [!NOTE]
> Die Beziehung _Obermenge_ bedeutet nicht _echte Obermenge_. Daher gibt `isSupersetOf()` auch dann `true` zurück, wenn `this` und `other` dieselben Elemente enthalten.

`isSupersetOf()` akzeptiert [set-like](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects)-Objekte als Parameter `other`. {{jsxref("this")}} muss eine tatsächliche {{jsxref("Set")}}-Instanz sein, da die Methode direkt auf die in `this` gespeicherten Daten zugreift, ohne benutzerdefinierten Code aufzurufen. Das weitere Verhalten hängt von der Größe von `this` und `other` ab:

- Wenn `this` weniger Elemente als `other.size` enthält, gibt die Methode sofort `false` zurück.
- Andernfalls durchläuft sie `other`, indem sie dessen Methode `keys()` aufruft. Ist ein Element aus `other` nicht in `this` enthalten, gibt sie `false` zurück und schließt den `keys()`-Iterator durch Aufrufen seiner Methode `return()`. Andernfalls gibt sie `true` zurück.

## Beispiele

### isSupersetOf() verwenden

Die Menge der geraden Zahlen (<20) ist eine Obermenge der Vielfachen von 4 (<20):

```js
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const fours = new Set([4, 8, 12, 16]);
console.log(evens.isSupersetOf(fours)); // true
```

Die Menge aller ungeraden Zahlen (<20) ist keine Obermenge der Primzahlen (<20), da 2 eine Primzahl, aber nicht ungerade ist:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(odds.isSupersetOf(primes)); // false
```

Gleiche Mengen sind gegenseitig Obermengen voneinander:

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSupersetOf(set2)); // true
console.log(set2.isSupersetOf(set1)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Set.prototype.isSupersetOf` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-set)
- [es-shims-Polyfill für `Set.prototype.isSupersetOf`](https://www.npmjs.com/package/set.prototype.issupersetof)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
