---
title: RegExp.prototype[Symbol.search]()
short-title: "[Symbol.search]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search
l10n:
  sourceCommit: 5b3aa7e4e8cd54f1b662534d8c97074e522b7fc4
---

Die **`[Symbol.search]()`** Methode von {{jsxref("RegExp")}}-Instanzen gibt an, wie [`String.prototype.search`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) sich verhalten soll.

{{InteractiveExample("JavaScript Demo: RegExp.prototype[Symbol.search]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  constructor(str) {
    super(str);
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

console.log("table football".search(new RegExp1("foo")));
// Expected output: 6
```

## Syntax

```js-nolint
regexp[Symbol.search](str)
```

### Parameter

- `str`
  - : Ein {{jsxref("String")}}, der das Ziel der Suche ist.

### Rückgabewert

Der Index des ersten Treffers zwischen dem regulären Ausdruck und dem gegebenen String, oder `-1`, wenn kein Treffer gefunden wurde.

## Beschreibung

Diese Methode existiert, um das Suchverhalten in `RegExp`-Unterklassen anzupassen. Sie wird intern in {{jsxref("String.prototype.search()")}} aufgerufen. Zum Beispiel geben die folgenden zwei Beispiele das gleiche Ergebnis zurück.

```js
"abc".search(/a/);

/a/[Symbol.search]("abc");
```

`[Symbol.search]()` ruft immer die `exec()`-Methode des regulären Ausdrucks genau einmal auf und gibt die `index`-Eigenschaft des Ergebnisses zurück, oder `-1`, wenn das Ergebnis `null` ist. Das `g`-Flag hat bei dieser Methode keine Wirkung.

Diese Methode kopiert den regulären Ausdruck nicht, im Gegensatz zu [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) oder [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll). Im Unterschied zu [`[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) wird jedoch immer [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) auf 0 gesetzt, wenn die Ausführung beginnt, und beim Beenden auf den vorherigen Wert zurückgesetzt, um im Allgemeinen Nebenwirkungen zu vermeiden. Das bedeutet, dass immer der erste Treffer im String zurückgegeben wird, auch wenn `lastIndex` ungleich null ist, und Sticky-Regexe immer strikt am Anfang des Strings suchen.

```js
const re = /[abc]/g;
re.lastIndex = 2;
console.log("abc".search(re)); // 0

const re2 = /[bc]/y;
re2.lastIndex = 1;
console.log("abc".search(re2)); // -1
console.log("abc".match(re2)); // [ 'b' ]
```

## Beispiele

### Direkter Aufruf

Diese Methode kann auf fast die gleiche Weise wie {{jsxref("String.prototype.search()")}} verwendet werden, mit Ausnahme des unterschiedlichen Werts von `this` und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.search](str);
console.log(result); // 4
```

### Verwendung von `[Symbol.search]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.search]()` Methode überschreiben, um das Verhalten zu ändern.

```js
class MyRegExp extends RegExp {
  constructor(str) {
    super(str);
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

const re = new MyRegExp("a+b");
const str = "ab a+b";
const result = str.search(re); // String.prototype.search calls re[Symbol.search]().
console.log(result); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `RegExp.prototype[Symbol.search]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.search()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.search")}}
