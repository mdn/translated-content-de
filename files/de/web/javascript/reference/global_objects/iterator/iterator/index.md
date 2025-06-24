---
title: Iterator() Konstruktor
short-title: Iterator()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Iterator
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Iterator()`**-Konstruktor ist vorgesehen, um als [Superklasse](/de/docs/Web/JavaScript/Reference/Classes/extends) anderer Klassen verwendet zu werden, die Iteratoren erstellen. Wenn er eigenständig konstruiert wird, wirft er einen Fehler.

## Syntax

```js-nolint
new Iterator()
```

> [!NOTE] > `Iterator()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, ihn ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}. Darüber hinaus kann `Iterator()` selbst nicht tatsächlich konstruiert werden — er wird normalerweise implizit durch Aufrufe von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) im Konstruktor einer Unterklasse erstellt.

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wenn [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die `Iterator`-Funktion selbst ist, d.h. wenn der `Iterator`-Konstruktor selbst konstruiert wird.

## Beschreibung

`Iterator` stellt eine _abstrakte Klasse_ dar — eine Klasse, die allgemeine Werkzeuge für ihre Unterklassen bereitstellt, selbst jedoch nicht instanziiert werden soll. Sie ist die Superklasse aller anderen Iterator-Klassen und wird genutzt, um Unterklassen zu erstellen, die spezifische Iterationsalgorithmen implementieren — nämlich, alle Unterklassen von `Iterator` müssen eine `next()`-Methode implementieren, wie es durch das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) verlangt wird. Da `Iterator` die `next()`-Methode tatsächlich nicht bereitstellt, macht es keinen Sinn, einen `Iterator` direkt zu konstruieren.

Sie können auch {{jsxref("Iterator.from()")}} verwenden, um eine `Iterator`-Instanz aus einem vorhandenen Iterable- oder Iterator-Objekt zu erstellen.

## Beispiele

### Subclassing von Iterator

Das folgende Beispiel definiert eine benutzerdefinierte Datenstruktur, `Range`, die Iteration ermöglicht. Um ein Objekt iterierbar zu machen, können wir eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode in Form einer Generatorfunktion bereitstellen:

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

Dies funktioniert, ist aber nicht so elegant wie die Arbeitsweise der eingebauten Iteratoren. Es gibt zwei Probleme:

- Der zurückgegebene Iterator erbt von {{jsxref("Generator")}}, was bedeutet, dass Änderungen an `Generator.prototype` den zurückgegebenen Iterator betreffen, was ein Leck der Abstraktion darstellt.
- Der zurückgegebene Iterator erbt nicht von einem benutzerdefinierten Prototyp, was es schwieriger macht, wenn wir beabsichtigen, zusätzliche Methoden zum Iterator hinzuzufügen.

Wir können die Implementierung eingebauter Iteratoren, wie z.B. [Karten-Iteratoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator), nachahmen, indem wir `Iterator` erweitern. Dies ermöglicht es uns, zusätzliche Eigenschaften wie [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) zu definieren, während die Iterator-Hilfsmethoden auf dem zurückgegebenen Iterator verfügbar sind.

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

Das Subclassing-Muster ist nützlich, wenn Sie viele benutzerdefinierte Iteratoren erstellen möchten. Wenn Sie ein vorhandenes Iterable- oder Iterator-Objekt haben, das nicht von `Iterator` erbt, und Sie nur die Iterator-Hilfsmethoden darauf aufrufen möchten, können Sie {{jsxref("Iterator.from()")}} verwenden, um eine einmalige `Iterator`-Instanz zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims Polyfill von `Iterator` und zugehörigen Hilfsfunktionen](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
