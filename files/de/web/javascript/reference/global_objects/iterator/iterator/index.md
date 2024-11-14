---
title: Iterator() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Iterator
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Der **`Iterator()`** Konstruktor soll als [Superklasse](/de/docs/Web/JavaScript/Reference/Classes/extends) anderer Klassen verwendet werden, die Iteratoren erstellen. Er löst einen Fehler aus, wenn er selbstständig konstruiert wird.

## Syntax

```js-nolint
new Iterator()
```

> **Note:** `Iterator()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus. Außerdem kann der `Iterator()` eigentlich nicht selbst konstruiert werden — er wird normalerweise implizit durch [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super)-Aufrufe innerhalb des Konstruktors einer Unterklasse konstruiert.

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wenn [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die `Iterator`-Funktion selbst ist, d.h. wenn der `Iterator`-Konstruktor selbst konstruiert wird.

## Beschreibung

`Iterator` repräsentiert eine _abstrakte Klasse_ — eine Klasse, die gemeinsame Funktionen für ihre Unterklassen bereitstellt, aber nicht selbst instanziiert werden soll. Es ist die Superklasse aller anderen Iterator-Klassen und wird verwendet, um Unterklassen zu erstellen, die spezifische Iterationsalgorithmen implementieren — nämlich müssen alle Unterklassen von `Iterator` eine `next()` Methode implementieren, wie es das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) erfordert. Da `Iterator` die `next()` Methode nicht tatsächlich bereitstellt, macht es keinen Sinn, einen `Iterator` direkt zu konstruieren.

Sie können auch {{jsxref("Iterator.from()")}} verwenden, um eine `Iterator`-Instanz aus einem vorhandenen Iterable oder Iterator-Objekt zu erstellen.

## Beispiele

### Subklassierung von Iterator

Im folgenden Beispiel wird eine benutzerdefinierte Datenstruktur `Range` definiert, die die Iteration ermöglicht. Um ein Objekt iterierbar zu machen, können wir eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode in Form einer Generator-Funktion bereitstellen:

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

Das funktioniert, ist aber nicht so elegant wie die Funktionsweise von eingebauten Iteratoren. Es gibt zwei Probleme:

- Der zurückgegebene Iterator erbt von {{jsxref("Generator")}}, was bedeutet, dass Änderungen an `Generator.prototype` den zurückgegebenen Iterator betreffen, was ein Durchbruch der Abstraktion ist.
- Der zurückgegebene Iterator erbt nicht von einem benutzerdefinierten Prototyp, was es schwieriger macht, wenn wir beabsichtigen, zusätzliche Methoden zum Iterator hinzuzufügen.

Wir können die Implementierung von eingebauten Iteratoren, wie z.B. [Karten-Iteratoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator), nachahmen, indem wir `Iterator` subklassieren. Dies ermöglicht es uns, zusätzliche Eigenschaften zu definieren, wie zum Beispiel [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag), während die Iterator-Hilfsmethoden auf dem zurückgegebenen Iterator verfügbar sind.

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

Das Subklassierungsmuster ist nützlich, wenn Sie viele benutzerdefinierte Iteratoren erstellen möchten. Wenn Sie ein vorhandenes Iterable oder Iterator-Objekt haben, das nicht von `Iterator` erbt, und Sie einfach Iterator-Hilfsmethoden darauf aufrufen möchten, können Sie {{jsxref("Iterator.from()")}} verwenden, um eine einmalige `Iterator`-Instanz zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
