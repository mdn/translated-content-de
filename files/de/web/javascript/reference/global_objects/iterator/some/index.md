---
title: Iterator.prototype.some()
short-title: some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`some()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich wie {{jsxref("Array.prototype.some()")}}: Sie prüft, ob mindestens ein Element, das vom Iterator erzeugt wird, den Test besteht, der durch die bereitgestellte Funktion implementiert wird. Sie gibt einen booleschen Wert zurück.

## Syntax

```js-nolint
some(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element ausgeführt wird, das vom Iterator erzeugt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

`true`, wenn die Callback-Funktion für mindestens ein Element einen {{Glossary("truthy", "truthy")}} Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`some()` iteriert über den Iterator und ruft die `callbackFn` Funktion einmal für jedes Element auf. Sie gibt sofort `true` zurück, wenn die Callback-Funktion einen truthy Wert zurückgibt. Andernfalls iteriert sie bis zum Ende des Iterators und gibt `false` zurück. Wenn `some()` `true` zurückgibt, wird der zugrunde liegende Iterator durch Aufrufen seiner `return()` Methode geschlossen.

Der Hauptvorteil von Iterator-Methoden gegenüber Array-Methoden ist, dass sie faul sind, was bedeutet, dass sie den nächsten Wert nur bei Bedarf erzeugen. Dies vermeidet unnötige Berechnungen und erlaubt auch die Verwendung mit unendlichen Iteratoren. Bei unendlichen Iteratoren gibt `some()` sofort `true` zurück, sobald der erste truthy Wert gefunden wird. Wenn `callbackFn` immer einen falsy Wert zurückgibt, gibt die Methode nie etwas zurück.

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

Der Aufruf von `some()` schließt immer den zugrunde liegenden Iterator, auch wenn die Methode frühzeitig zurückkehrt. Der Iterator bleibt nie in einem halbwegs Zustand.

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
