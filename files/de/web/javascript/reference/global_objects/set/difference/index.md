---
title: Set.prototype.difference()
short-title: difference()
slug: Web/JavaScript/Reference/Global_Objects/Set/difference
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **`difference()`** Methode von {{jsxref("Set")}} Instanzen nimmt ein Set und gibt ein neues Set zurück, das Elemente aus diesem Set enthält, die nicht im angegebenen Set sind.

## Syntax

```js-nolint
difference(other)
```

### Parameter

- `other`
  - : Ein {{jsxref("Set")}} Objekt oder [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekt.

### Rückgabewert

Ein neues {{jsxref("Set")}} Objekt, das Elemente aus diesem Set enthält, die nicht im `other` Set sind.

## Beschreibung

In mathematischer Notation ist _Differenz_ definiert als:

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\setminus B = \\{x\in A\mid x\notin B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und mit Venn-Diagramm:

![Ein Venn-Diagramm, in dem sich zwei Kreise überschneiden. Die Differenz von A und B ist der Teil von A, der sich nicht mit B überschneidet.](diagram.svg)

`difference()` akzeptiert [set-ähnliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) Objekte als den `other` Parameter. Es erfordert, dass {{jsxref("this")}} eine tatsächliche {{jsxref("Set")}} Instanz ist, da es direkt auf die zugrundeliegenden Daten in `this` zugreift, ohne Benutzercode auszulösen. Dann hängt sein Verhalten von den Größen von `this` und `other` ab:

- Wenn es mehr Elemente in `this` als `other.size` gibt, dann iteriert es über `other`, indem es dessen `keys()` Methode aufruft und ein neues Set mit allen Elementen in `this` erstellt, die in `other` nicht gefunden werden.
- Andernfalls iteriert es über die Elemente in `this` und erstellt ein neues Set mit allen Elementen `e` in `this`, für die `other.has(e)` einen {{Glossary("Falsy", "falsy")}} Wert zurückgibt.

Die Reihenfolge der Elemente im zurückgegebenen Set ist dieselbe wie in `this`.

## Beispiele

### Nutzung von difference()

Das folgende Beispiel berechnet die Differenz zwischen der Menge der ungeraden Zahlen (<10) und der Menge der perfekten Quadrate (<10). Das Ergebnis ist die Menge der ungeraden Zahlen, die keine perfekten Quadrate sind.

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
- [es-shims Polyfill von `Set.prototype.difference`](https://www.npmjs.com/package/set.prototype.difference)
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
