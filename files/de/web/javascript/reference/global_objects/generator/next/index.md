---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`next()`** Methode von {{jsxref("Generator")}} Instanzen gibt ein Objekt mit den zwei Eigenschaften `done` und `value` zurück. Sie können auch einen Parameter an die `next` Methode übergeben, um einen Wert an den Generator zu senden.

## Syntax

```js-nolint
next()
next(value)
```

### Parameter

- `value` {{optional_inline}}

  - : Der Wert, der an den Generator gesendet werden soll.

    Der Wert wird als Ergebnis eines `yield` Ausdrucks zugewiesen. Zum Beispiel, in `variable = yield expression`, wird der an die `.next()` Funktion übergebene Wert der `variable` zugewiesen.

### Rückgabewert

Ein {{jsxref("Object")}} mit zwei Eigenschaften:

- `done`
  - : Ein booleanischer Wert:
    - `true`, wenn der Generator das Ende seines Kontrollflusses überschritten hat. In diesem Fall gibt `value` den _Rückgabewert_ des Generators an (dieser kann undefiniert sein).
    - `false`, wenn der Generator in der Lage ist, weitere Werte zu produzieren.
- `value`
  - : Jeder von dem Generator erzeugte oder zurückgegebene JavaScript-Wert.

## Beispiele

### Verwendung von next()

Das folgende Beispiel zeigt einen einfachen Generator und das Objekt, das die `next` Methode zurückgibt:

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // Generator { }
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
```

### Verwendung von next() mit einer Liste

In diesem Beispiel nimmt `getPage` eine Liste und "paginates" sie in Stücke der Größe `pageSize`. Jeder Aufruf von `next` wird ein solches Stück zurückgeben.

```js
function* getPage(list, pageSize = 1) {
  for (let index = 0; index < list.length; index += pageSize) {
    yield list.slice(index, index + pageSize);
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const page = getPage(list, 3); // Generator { }

page.next(); // { value: [1, 2, 3], done: false }
page.next(); // { value: [4, 5, 6], done: false }
page.next(); // { value: [7, 8], done: false }
page.next(); // { value: undefined, done: true }
```

### Werte an den Generator senden

In diesem Beispiel wird `next` mit einem Wert aufgerufen.

> [!NOTE]
> Der erste Aufruf gibt nichts aus, da der Generator anfangs nichts liefert.

```js
function* gen() {
  while (true) {
    const value = yield;
    console.log(value);
  }
}

const g = gen();
g.next(1); // Returns { value: undefined, done: false }
// Kein Log an diesem Schritt: Der erste Wert, der durch `next` gesendet wird, geht verloren
g.next(2); // Returns { value: undefined, done: false }
// Logs 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/function*", "function*")}}
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
