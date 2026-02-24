---
title: Iterator.prototype.some()
short-title: some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
l10n:
  sourceCommit: dd88a6eb2176fa31f5b744d8964efecf3f1f425b
---

Die **`some()`** Methode von {{jsxref("Iterator")}} Instanzen ähnelt {{jsxref("Array.prototype.some()")}}: Sie gibt `true` zurück, wenn sie ein Element findet, das die bereitgestellte Testfunktion erfüllt. Andernfalls, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden, gibt sie `false` zurück.

## Syntax

```js-nolint
some(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

`true`, wenn die Callback-Funktion für mindestens ein Element einen {{Glossary("truthy", "truthy")}} Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`some()` iteriert über den Iterator und ruft die Funktion `callbackFn` einmal für jedes Element auf. Sie gibt `true` sofort zurück, wenn die Callback-Funktion einen truthy Wert zurückgibt. Andernfalls iteriert sie bis zum Ende des Iterators und gibt `false` zurück. Wenn `some()` `true` zurückgibt, wird der zugrunde liegende Iterator durch Aufruf seiner `return()` Methode geschlossen.

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist, dass sie faul sind, was bedeutet, dass sie nur den nächsten Wert erzeugen, wenn er angefordert wird. Dies vermeidet unnötige Berechnungen und ermöglicht es ihnen auch, mit unendlichen Iteratoren verwendet zu werden. Bei unendlichen Iteratoren gibt `some()` `true` zurück, sobald der erste truthy Wert gefunden wird. Wenn die `callbackFn` immer einen falsy Wert zurückgibt, gibt die Methode nie zurück.

## Beispiele

### Verwendung von some()

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const isEven = (x) => x % 2 === 0;
console.log(fibonacci().some(isEven)); // true

const isNegative = (x) => x < 0;
console.log(fibonacci().take(10).some(isNegative)); // false
console.log(fibonacci().some(isNegative)); // Never completes
```

Der Aufruf von `some()` schließt immer den zugrunde liegenden Iterator, auch wenn die Methode vorzeitig zurückkehrt. Der Iterator wird niemals in einem halbwegs Zustand belassen.

```js
const seq = fibonacci();
console.log(seq.some(isEven)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.some` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims Polyfill von `Iterator.prototype.some`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Array.prototype.some()")}}
