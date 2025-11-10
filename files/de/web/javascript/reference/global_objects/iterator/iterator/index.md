---
title: "`Iterator()` Konstruktor"
short-title: Iterator()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Iterator
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Der **`Iterator()`** Konstruktor ist vorgesehen, als [Oberklasse](/de/docs/Web/JavaScript/Reference/Classes/extends) anderer Klassen verwendet zu werden, die Iteratoren erstellen. Er erzeugt einen Fehler, wenn er alleine instanziiert wird.

## Syntax

```js-nolint
new Iterator()
```

> [!NOTE]
> `Iterator()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus. Außerdem kann `Iterator()` nicht wirklich selbst konstruiert werden – es wird normalerweise implizit durch [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) Aufrufe innerhalb des Konstruktors einer Unterklasse konstruiert.

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Iterator")}} Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wenn [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die `Iterator` Funktion selbst ist, d.h. wenn der `Iterator` Konstruktor selbst konstruiert wird.

## Beschreibung

`Iterator` stellt eine _abstrakte Klasse_ dar — eine Klasse, die allgemeine Dienstprogramme für ihre Unterklassen bereitstellt, aber nicht selbst instanziiert werden soll. Sie ist die Oberklasse aller anderen Iterator-Klassen und wird verwendet, um Unterklassen zu erstellen, die spezifische Iterationsalgorithmen implementieren — nämlich müssen alle Unterklassen von `Iterator` eine `next()` Methode implementieren, wie es das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) erfordert. Da `Iterator` die `next()` Methode tatsächlich nicht bereitstellt, macht es keinen Sinn, einen `Iterator` direkt zu konstruieren.

Sie können auch {{jsxref("Iterator.from()")}} verwenden, um eine `Iterator` Instanz aus einem vorhandenen iterierbaren oder Iterator-Objekt zu erstellen.

## Beispiele

### Unterklassen von Iterator

Das folgende Beispiel definiert eine benutzerdefinierte Datenstruktur, `Range`, die Iteration ermöglicht. Um ein Objekt iterierbar zu machen, können wir eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) Methode in Form einer Generatorfunktion bereitstellen:

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

Dies funktioniert, ist aber nicht so elegant wie die Arbeitsweise eingebauter Iteratoren. Es gibt zwei Probleme:

- Der zurückgegebene Iterator erbt von {{jsxref("Generator")}}, was bedeutet, dass Änderungen an `Generator.prototype` den zurückgegebenen Iterator beeinflussen, was ein Abstraktionsleck darstellt.
- Der zurückgegebene Iterator erbt nicht von einem benutzerdefinierten Prototyp, wodurch es schwieriger wird, wenn wir zusätzliche Methoden zum Iterator hinzufügen möchten.

Wir können die Implementierung eingebauter Iteratoren, wie z.B. [Map-Iteratoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator), nachahmen, indem wir `Iterator` als Unterklasse verwenden. Dies ermöglicht es uns, zusätzliche Eigenschaften zu definieren, wie z.B. [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag), während die Iterator-Hilfsmethoden auf dem zurückgegebenen Iterator verfügbar sind.

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

Das Unterklassenmuster ist nützlich, wenn Sie viele benutzerdefinierte Iteratoren erstellen möchten. Wenn Sie ein vorhandenes iterierbares oder Iterator-Objekt haben, das nicht von `Iterator` erbt, und Sie nur die Iterator-Hilfsmethoden aufrufen möchten, können Sie {{jsxref("Iterator.from()")}} verwenden, um eine einmalige `Iterator` Instanz zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims Polyfill von `Iterator` und zugehörige Hilfsfunktionen](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
