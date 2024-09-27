---
title: "TypeError: Iterator/AsyncIterator-Konstruktor kann nicht direkt verwendet werden"
slug: Web/JavaScript/Reference/Errors/Constructor_cant_be_used_directly
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Iterator constructor can't be used directly" oder "AsyncIterator constructor can't be used directly" tritt auf, wenn Sie versuchen, die {{jsxref("Iterator/Iterator", "Iterator()")}}- oder {{jsxref("AsyncIterator/AsyncIterator", "AsyncIterator()")}}-Konstruktoren direkt zu verwenden, um Instanzen zu erstellen. Diese Konstruktoren sind _abstrakte Klassen_ und sollten nur geerbt werden.

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

Die {{jsxref("Iterator")}}- und {{jsxref("AsyncIterator")}}-Konstruktoren sind abstrakte Klassen und sollten nicht direkt verwendet werden. Sie überprüfen den Wert von [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) und werfen einen Fehler, wenn dieser mit dem Konstruktor selbst übereinstimmt. Der einzige Weg, diese Konstruktoren zu verwenden, besteht darin, von ihnen in einer Unterklasse zu erben und `super()` im Konstruktor der Unterklasse aufzurufen. Die Unterklasse muss auch eine `next()`-Methode definieren, um nützlich zu sein.

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
    if (this.#step < this.#end) {
      return { value: this.#step++, done: false };
    } else {
      return { done: true };
    }
  }
}

new MyIterator();
```

## Siehe auch

- {{jsxref("AsyncIterator")}}
- {{jsxref("Iterator")}}
