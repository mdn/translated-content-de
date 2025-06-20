---
title: Generator.prototype.next()
short-title: next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`next()`** Methode von {{jsxref("Generator")}} Instanzen gibt ein Objekt mit zwei Eigenschaften `done` und `value` zurück. Sie können auch einen Parameter an die `next` Methode übergeben, um einen Wert an den Generator zu senden.

## Syntax

```js-nolint
next()
next(value)
```

### Parameter

- `value` {{optional_inline}}

  - : Der Wert, den Sie an den Generator senden möchten.

    Der Wert wird als Ergebnis eines `yield` Ausdrucks zugewiesen. Zum Beispiel, in `variable = yield expression`, wird der Wert, der der `.next()` Funktion übergeben wird, der `variable` zugewiesen.

### Rückgabewert

Ein {{jsxref("Object")}} mit zwei Eigenschaften:

- `done`
  - : Ein boolean Wert:
    - `true`, wenn der Generator am Ende seines Kontrollflusses ist. In diesem Fall spezifiziert `value` den _Rückgabewert_ des Generators (dieser kann undefiniert sein).
    - `false`, wenn der Generator in der Lage ist, weitere Werte zu erzeugen.
- `value`
  - : Jeder JavaScript-Wert, der vom Generator erzeugt oder zurückgegeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der Generator bereits läuft.

## Beispiele

### Verwendung von next()

Das folgende Beispiel zeigt einen Generator und das Objekt, das die `next` Methode zurückgibt:

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

In diesem Beispiel nimmt `getPage` eine Liste und "paginisiert" sie in Teile der Größe `pageSize`. Jeder Aufruf von `next` gibt ein solches Stück zurück.

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
> Der erste Aufruf protokolliert nichts, da der Generator anfänglich nichts erzeugte.

```js
function* gen() {
  while (true) {
    const value = yield;
    console.log(value);
  }
}

const g = gen();
g.next(1); // Returns { value: undefined, done: false }
// No log at this step: the first value sent through `next` is lost
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
