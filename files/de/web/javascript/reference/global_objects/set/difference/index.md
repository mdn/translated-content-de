---
title: Set.prototype.difference()
short-title: difference()
slug: Web/JavaScript/Reference/Global_Objects/Set/difference
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`difference()`** Methode von {{jsxref("Set")}} Instanzen nimmt eine Menge und gibt eine neue Menge zurück, die Elemente in dieser Menge, aber nicht in der angegebenen Menge enthält.

## Syntax

```js-nolint
difference(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}} Objekt oder ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}} Objekt, das Elemente in dieser Menge enthält, aber nicht in der `other` Menge.

## Beschreibung

In mathematischer Notation ist _difference_ definiert als:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\setminus B = \\{x\in A\mid x\notin B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und unter Verwendung eines Venn-Diagramms:

![Ein Venn-Diagramm, in dem sich zwei Kreise überschneiden. Die Differenz von A und B ist der Teil von A, der B nicht überschneidet.](diagram.svg)

`difference()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als `other` Parameter. Es erfordert, dass {{jsxref("Operators/this", "this")}} eine tatsächliche {{jsxref("Set")}} Instanz ist, da es direkt die zugrunde liegenden Daten in `this` abruft, ohne jeglichen Benutzercode auszuführen. Dann hängt sein Verhalten von den Größen von `this` und `other` ab:

- Wenn es mehr Elemente in `this` als `other.size` gibt, wird über `other` iteriert, indem seine `keys()` Methode aufgerufen wird, und eine neue Menge mit allen Elementen in `this` konstruiert, die in `other` nicht gesehen werden.
- Andernfalls wird über die Elemente in `this` iteriert und eine neue Menge mit allen Elementen `e` in `this` konstruiert, die `other.has(e)` dazu veranlassen, einen {{Glossary("Falsy", "falsy")}} Wert zurückzugeben.

Die Reihenfolge der Elemente in der zurückgegebenen Menge entspricht der in `this`.

## Beispiele

### Verwendung von difference()

Im folgenden Beispiel wird die Differenz zwischen der Menge der ungeraden Zahlen (<10) und der Menge der perfekten Quadrate (<10) berechnet. Das Ergebnis ist die Menge der ungeraden Zahlen, die keine perfekten Quadrate sind.

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

- [Polyfill von `Set.prototype.difference` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- [es-shims polyfill von `Set.prototype.difference`](https://www.npmjs.com/package/set.prototype.difference)
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
