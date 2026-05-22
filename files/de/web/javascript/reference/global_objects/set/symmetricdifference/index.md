---
title: Set.prototype.symmetricDifference()
short-title: symmetricDifference()
slug: Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **`symmetricDifference()`**-Methode von {{jsxref("Set")}}-Instanzen nimmt eine Menge und gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser Menge oder in der gegebenen Menge, aber nicht in beiden sind.

## Syntax

```js-nolint
symmetricDifference(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}}-Objekt oder ein [mengenähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}}-Objekt, das Elemente enthält, die entweder in dieser Menge oder in der `other`-Menge, aber nicht in beiden sind.

## Beschreibung

In mathematischer Notation wird _symmetrische Differenz_ definiert als:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">A\ominus B = (A\setminus B)\cup(B\setminus A)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und unter Verwendung eines Venn-Diagramms:

![Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Die symmetrische Differenz von A und B ist der Bereich, der entweder von einem Kreis, aber nicht von beiden, abgedeckt wird.](diagram.svg)

`symmetricDifference()` akzeptiert [mengenähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als das `other`-Argument. Es erfordert, dass {{jsxref("this")}} eine tatsächliche {{jsxref("Set")}}-Instanz ist, da es direkt auf die zugrunde liegenden Daten zugreift, die in `this` gespeichert sind, ohne Benutzercode aufzurufen. Es durchläuft dann `other` durch Aufruf seiner `keys()`-Methode und konstruiert eine neue Menge mit allen Elementen in `this`, die in `other` nicht vorhanden sind, und allen Elementen in `other`, die in `this` nicht vorhanden sind.

Die Reihenfolge der Elemente in der zurückgegebenen Menge ist zuerst die in `this`, gefolgt von denen in `other`.

## Beispiele

### Verwendung von symmetricDifference()

Im folgenden Beispiel wird die symmetrische Differenz zwischen der Menge der geraden Zahlen (<10) und der Menge der perfekten Quadrate (<10) berechnet. Das Ergebnis ist die Menge der Zahlen, die entweder gerade oder ein perfektes Quadrat sind, aber nicht beides.

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.symmetricDifference(squares)); // Set(5) { 2, 6, 8, 1, 9 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Set.prototype.symmetricDifference` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [es-shims Polyfill von `Set.prototype.symmetricDifference`](https://www.npmjs.com/package/set.prototype.symmetricdifference)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.union()")}}
