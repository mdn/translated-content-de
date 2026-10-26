---
title: RegExp.prototype[Symbol.search]()
short-title: "[Symbol.search]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.search]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie sich [`String.prototype.search`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) verhalten soll.

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
  - : Ein {{jsxref("String")}}, in dem gesucht wird.

### Rückgabewert

Der Index der ersten Übereinstimmung zwischen dem regulären Ausdruck und dem angegebenen String oder `-1`, wenn keine Übereinstimmung gefunden wurde.

## Beschreibung

Diese Methode ermöglicht es, das Suchverhalten in `RegExp`-Unterklassen anzupassen. Sie wird intern von {{jsxref("String.prototype.search()")}} aufgerufen. Die folgenden beiden Beispiele liefern dasselbe Ergebnis.

```js
"abc".search(/a/);

/a/[Symbol.search]("abc");
```

`[Symbol.search]()` ruft die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode des regulären Ausdrucks immer genau einmal auf und gibt die `index`-Eigenschaft des Ergebnisses zurück oder `-1`, wenn das Ergebnis `null` ist. Das `g`-Flag hat bei dieser Methode keine Wirkung.

Anders als [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) oder [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) kopiert diese Methode den regulären Ausdruck nicht. Im Gegensatz zu [`[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) setzt sie [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) jedoch vor Beginn der Ausführung immer auf 0 und stellt beim Beenden den vorherigen Wert wieder her. Dadurch werden Nebenwirkungen im Allgemeinen vermieden. Das bedeutet, dass sie immer die erste Übereinstimmung im String zurückgibt, selbst wenn `lastIndex` nicht 0 ist. Reguläre Ausdrücke mit dem `y`-Flag suchen dabei immer ausschließlich am Anfang des Strings.

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

Diese Methode kann fast genauso wie {{jsxref("String.prototype.search()")}} verwendet werden. Lediglich der Wert von `this` und die Reihenfolge der Argumente unterscheiden sich.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.search](str);
console.log(result); // 4
```

### Verwendung von `[Symbol.search]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die Methode `[Symbol.search]()` überschreiben, um ihr Verhalten zu ändern.

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

- [Polyfill für `RegExp.prototype[Symbol.search]` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("String.prototype.search()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.search")}}
