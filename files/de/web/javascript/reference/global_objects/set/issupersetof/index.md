---
title: Set.prototype.isSupersetOf()
short-title: isSupersetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **`isSupersetOf()`** Methode von {{jsxref("Set")}} Instanzen nimmt ein Set und gibt einen Boolean zurück, der anzeigt, ob alle Elemente des gegebenen Sets in diesem Set enthalten sind.

## Syntax

```js-nolint
isSupersetOf(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}} Objekt oder ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

`true`, wenn alle Elemente im `other` Set auch in diesem Set sind, andernfalls `false`.

## Beschreibung

In mathematischer Notation ist ein _Superset_ definiert als:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>A</mi></mrow><annotation encoding="TeX">A\supseteq B \Leftrightarrow \forall x\in B,\,x\in A</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und in einem Venn-Diagramm:

![Ein Venn-Diagramm mit zwei Kreisen. A ist ein Superset von B, weil B vollständig in A enthalten ist.](diagram.svg)

> [!NOTE]
> Die _Superset_-Beziehung ist nicht _echtes Superset_, was bedeutet, dass `isSupersetOf()` `true` zurückgibt, wenn `this` und `other` die gleichen Elemente enthalten.

`isSupersetOf()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other` Parameter. Es erfordert, dass {{jsxref("this")}} eine tatsächliche {{jsxref("Set")}} Instanz ist, da es die darunter liegenden Daten direkt extrahiert, die in `this` gespeichert sind, ohne jeglichen Benutzercode aufzurufen. Dann hängt das Verhalten von den Größen von `this` und `other` ab:

- Wenn es weniger Elemente in `this` als `other.size` gibt, wird direkt `false` zurückgegeben.
- Andernfalls iteriert es über `other` und ruft dessen `keys()` Methode auf. Wenn ein Element in `other` nicht in `this` vorhanden ist, gibt es `false` zurück (und schließt den `keys()` Iterator, indem es dessen `return()` Methode aufruft). Andernfalls gibt es `true` zurück.

## Beispiele

### Verwendung von isSupersetOf()

Die Menge der geraden Zahlen (<20) ist ein Superset der Vielfachen von 4 (<20):

```js
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const fours = new Set([4, 8, 12, 16]);
console.log(evens.isSupersetOf(fours)); // true
```

Die Menge aller ungeraden Zahlen (<20) ist kein Superset der Primzahlen (<20), weil 2 eine Primzahl, aber nicht ungerade ist:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(odds.isSupersetOf(primes)); // false
```

Äquivalente Mengen sind Supersets voneinander:

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

- [Polyfill von `Set.prototype.isSupersetOf` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [es-shims Polyfill von `Set.prototype.isSupersetOf`](https://www.npmjs.com/package/set.prototype.issupersetof)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
