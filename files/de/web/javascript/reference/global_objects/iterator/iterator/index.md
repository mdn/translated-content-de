---
title: Iterator()-Konstruktor
short-title: Iterator()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Iterator
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`Iterator()`**-Konstruktor ist als [Oberklasse](/de/docs/Web/JavaScript/Reference/Classes/extends) für andere Klassen gedacht, die Iteratoren erzeugen. Wird er selbst direkt instanziiert, löst er einen Fehler aus.

## Syntax

```js-nolint
new Iterator()
```

> [!NOTE]
> `Iterator()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus. Außerdem kann `Iterator()` nicht direkt instanziiert werden – die Instanziierung erfolgt normalerweise implizit durch einen Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) im Konstruktor einer Unterklasse.

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wenn [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die `Iterator`-Funktion selbst ist, der `Iterator`-Konstruktor also direkt instanziiert wird.

## Beschreibung

`Iterator` ist eine _abstrakte Klasse_: Sie stellt ihren Unterklassen gemeinsame Funktionen bereit, ist aber nicht dafür vorgesehen, selbst instanziiert zu werden. Sie ist die Oberklasse aller anderen Iterator-Klassen und dient als Grundlage für Unterklassen, die bestimmte Iterationsalgorithmen implementieren. Dazu muss jede Unterklasse von `Iterator` eine `next()`-Methode implementieren, wie es das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) verlangt. Da `Iterator` selbst keine `next()`-Methode bereitstellt, ist es nicht sinnvoll, `Iterator` direkt zu instanziieren.

Sie können auch {{jsxref("Iterator.from()")}} verwenden, um aus einem vorhandenen iterierbaren Objekt oder Iterator-Objekt eine `Iterator`-Instanz zu erstellen.

## Beispiele

### Eine Unterklasse von Iterator erstellen

Das folgende Beispiel definiert eine benutzerdefinierte Datenstruktur namens `Range`, über die iteriert werden kann. Um ein Objekt iterierbar zu machen, können wir eine [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode in Form einer Generatorfunktion bereitstellen:

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

Das funktioniert, ist aber nicht so elegant wie die Funktionsweise integrierter Iteratoren. Es gibt zwei Probleme:

- Der zurückgegebene Iterator erbt von {{jsxref("Generator")}}. Dadurch wirken sich Änderungen an `Generator.prototype` auf ihn aus, was die Abstraktion durchbricht.
- Der zurückgegebene Iterator erbt nicht von einem benutzerdefinierten Prototyp. Das erschwert es, dem Iterator zusätzliche Methoden hinzuzufügen.

Wir können die Implementierung integrierter Iteratoren, etwa der [Map-Iteratoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator), nachbilden, indem wir eine Unterklasse von `Iterator` erstellen. So können wir zusätzliche Eigenschaften wie [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) definieren, während die Iterator-Hilfsmethoden für den zurückgegebenen Iterator verfügbar sind.

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

Dieses Muster eignet sich, wenn Sie viele benutzerdefinierte Iteratoren erstellen möchten. Wenn Sie bereits ein iterierbares Objekt oder Iterator-Objekt haben, das nicht von `Iterator` erbt, und lediglich Iterator-Hilfsmethoden darauf aufrufen möchten, können Sie mit {{jsxref("Iterator.from()")}} eine einmalige `Iterator`-Instanz erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [es-shims-Polyfill für `Iterator` und zugehörige Hilfsmethoden](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
