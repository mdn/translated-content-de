---
title: Iterator() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Iterator
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Der **`Iterator()`** Konstruktor soll als [Superklasse](/de/docs/Web/JavaScript/Reference/Classes/extends) anderer Klassen verwendet werden, die Iterators erstellen. Er löst einen Fehler aus, wenn er selbstständig konstruiert wird.

## Syntax

```js-nolint
new Iterator()
```

> **Hinweis:** `Iterator()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus. Außerdem kann `Iterator()` nicht tatsächlich selbst konstruiert werden – es wird normalerweise implizit durch Aufrufe von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) im Konstruktor einer Unterklasse konstruiert.

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wenn [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die `Iterator`-Funktion selbst ist, d.h. wenn der `Iterator`-Konstruktor selbst konstruiert wird.

## Beschreibung

`Iterator` stellt eine _abstrakte Klasse_ dar — eine Klasse, die allgemeine Hilfsfunktionen für ihre Unterklassen bereitstellt, aber nicht selbst instanziiert werden soll. Es ist die Superklasse aller anderen Iteratorklassen und wird verwendet, um Unterklassen zu erstellen, die spezifische Iterationsalgorithmen implementieren — nämlich müssen alle Unterklassen von `Iterator` eine `next()`-Methode implementieren, wie vom [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) verlangt. Da `Iterator` die `next()`-Methode nicht tatsächlich bereitstellt, macht es keinen Sinn, direkt einen `Iterator` zu konstruieren.

Sie können auch {{jsxref("Iterator.from()")}} verwenden, um eine `Iterator`-Instanz aus einem vorhandenen iterierbaren oder Iterator-Objekt zu erstellen.

## Beispiele

### Iterator-Unterklassenbildung

Im folgenden Beispiel wird eine benutzerdefinierte Datenstruktur `Range` definiert, die Iteration ermöglicht. Um ein Objekt iterierbar zu machen, können wir eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode in Form einer Generatorfunktion bereitstellen:

```js
class Range {
  #start;
  #end;
  #step;

  constructor(start, end, step = 1) {
    this.#start = start;
    this.#end = end;
    this.#step = step;
  }

  *[Symbol.iterator]() {
    for (let value = this.#start; value <= this.#end; value += this.#step) {
      yield value;
    }
  }
}

const range = new Range(1, 5);
for (const num of range) {
  console.log(num);
}
```

Dies funktioniert, aber es ist nicht so elegant wie die Funktionsweise eingebauter Iteratoren. Es gibt zwei Probleme:

- Der zurückgegebene Iterator erbt von {{jsxref("Generator")}}, was bedeutet, dass Modifikationen an `Generator.prototype` den zurückgegebenen Iterator beeinflussen werden, was einen Abstraktionsverlust darstellt.
- Der zurückgegebene Iterator erbt nicht von einem benutzerdefinierten Prototypen, was es schwieriger macht, wenn wir beabsichtigen, zusätzliche Methoden zum Iterator hinzuzufügen.

Wir können die Implementierung eingebauter Iteratoren, wie z.B. [Map-Iteratoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator), imitieren, indem wir `Iterator` unterklassen. Dies ermöglicht es uns, zusätzliche Eigenschaften zu definieren, wie [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag), während die Iterator-Hilfsmethoden auf dem zurückgegebenen Iterator verfügbar sind.

```js
class Range {
  #start;
  #end;
  #step;

  constructor(start, end, step = 1) {
    this.#start = start;
    this.#end = end;
    this.#step = step;
  }

  static #RangeIterator = class extends Iterator {
    #cur;
    #s;
    #e;
    constructor(range) {
      super();
      this.#cur = range.#start;
      this.#s = range.#step;
      this.#e = range.#end;
    }
    static {
      Object.defineProperty(this.prototype, Symbol.toStringTag, {
        value: "Range Iterator",
        configurable: true,
        enumerable: false,
        writable: false,
      });

      // Avoid #RangeIterator from being accessible outside
      delete this.prototype.constructor;
    }
    next() {
      if (this.#cur > this.#e) {
        return { value: undefined, done: true };
      }
      const res = { value: this.#cur, done: false };
      this.#cur += this.#s;
      return res;
    }
  };

  [Symbol.iterator]() {
    return new Range.#RangeIterator(this);
  }
}

const range = new Range(1, 5);
for (const num of range) {
  console.log(num);
}
```

Das Unterklassenmuster ist nützlich, wenn Sie viele benutzerdefinierte Iteratoren erstellen möchten. Wenn Sie ein vorhandenes iterierbares oder Iterator-Objekt haben, das nicht von `Iterator` erbt, und Sie nur die Iterator-Hilfsmethoden darauf aufrufen möchten, können Sie {{jsxref("Iterator.from()")}} verwenden, um eine einmalige `Iterator`-Instanz zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims Polyfill von `Iterator` und zugehörige Helfer](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
