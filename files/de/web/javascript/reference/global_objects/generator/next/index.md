---
title: Generator.prototype.next()
short-title: next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`next()`** Methode von {{jsxref("Generator")}}-Instanzen gibt ein
Objekt mit zwei Eigenschaften `done` und `value` zurück. Sie können auch
einen Parameter an die `next`-Methode übergeben, um dem Generator einen Wert zu senden.

## Syntax

```js-nolint
next()
next(value)
```

### Parameter

- `value` {{optional_inline}}
  - : Der Wert, der an den Generator gesendet wird.

    Der Wert wird als Resultat eines `yield`-Ausdrucks zugewiesen. Zum
    Beispiel, in `variable = yield expression`, wird der Wert,
    der an die `.next()` Funktion übergeben wird, der
    `variable` zugewiesen.

### Rückgabewert

Ein {{jsxref("Object")}} mit zwei Eigenschaften:

- `done`
  - : Ein boolean Wert:
    - `true`, wenn der Generator das Ende seines Kontrollflusses überschritten hat. In diesem Fall gibt `value` den _Rückgabewert_ des Generators an (der möglicherweise undefined ist).
    - `false`, wenn der Generator noch weitere Werte erzeugen kann.
- `value`
  - : Jeder JavaScript-Wert, der vom Generator erzeugt oder zurückgegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Generator bereits läuft.

## Beispiele

### Nutzung von next()

Das folgende Beispiel zeigt einen Generator und das Objekt, das die
`next`-Methode zurückgibt:

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

### Nutzung von next() mit einer Liste

In diesem Beispiel nimmt `getPage` eine Liste und "paginates" sie in Teile der Größe `pageSize`. Jeder Aufruf von `next` liefert ein solches Teilstück.

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

### Senden von Werten an den Generator

In diesem Beispiel wird `next` mit einem Wert aufgerufen.

> [!NOTE]
> Der erste Aufruf protokolliert nichts, da der Generator anfangs nichts hervorbrachte.

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
- [Iterators und generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
