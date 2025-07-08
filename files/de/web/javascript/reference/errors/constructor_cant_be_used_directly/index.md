---
title: "TypeError: Iterator/AsyncIterator-Konstruktor kann nicht direkt verwendet werden"
slug: Web/JavaScript/Reference/Errors/Constructor_cant_be_used_directly
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "Iterator-Konstruktor kann nicht direkt verwendet werden" oder "AsyncIterator-Konstruktor kann nicht direkt verwendet werden" tritt auf, wenn Sie versuchen, die {{jsxref("Iterator/Iterator", "Iterator()")}}- oder {{jsxref("AsyncIterator/AsyncIterator", "AsyncIterator()")}}-Konstruktoren direkt zur Erstellung von Instanzen zu verwenden. Diese Konstruktoren sind _abstrakte Klassen_ und sollten nur durch Vererbung genutzt werden.

## Meldung

```plain
TypeError: Abstract class Iterator not directly constructable (V8-based)
TypeError: Iterator constructor can't be used directly (Firefox)
TypeError: Iterator cannot be constructed directly (Safari)

TypeError: Abstract class AsyncIterator not directly constructable (V8-based)
TypeError: AsyncIterator constructor can't be used directly (Firefox)
TypeError: AsyncIterator cannot be constructed directly (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Die {{jsxref("Iterator")}}- und {{jsxref("AsyncIterator")}}-Konstruktoren sind abstrakte Klassen und sollten nicht direkt verwendet werden. Sie überprüfen den Wert von [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) und werfen einen Fehler, wenn dieser mit dem Konstruktor selbst übereinstimmt. Die einzige Möglichkeit, diese Konstruktoren zu verwenden, besteht darin, von ihnen in einer Subklasse zu erben und `super()` im Konstruktor der Subklasse aufzurufen. Die Subklasse muss auch eine `next()`-Methode definieren, um nützlich zu sein.

## Beispiele

### Ungültige Fälle

```js example-bad
new Iterator();
```

### Gültige Fälle

```js example-good
class MyIterator extends Iterator {
  #step;
  #end;
  constructor(start, end) {
    // Implicitly calls new Iterator(), but with a different `new.target`
    super();
    this.#step = start;
    this.#end = end;
  }
  next() {
    if (this.#step >= this.#end) {
      return { done: true };
    }
    return { value: this.#step++, done: false };
  }
}

new MyIterator();
```

## Siehe auch

- {{jsxref("AsyncIterator")}}
- {{jsxref("Iterator")}}
