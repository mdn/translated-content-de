---
title: RegExp.prototype[Symbol.search]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.search]()`**-Methode von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.search`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) sich verhalten soll.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@search.html")}}

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

Diese Methode wird intern in {{jsxref("String.prototype.search()")}} aufgerufen. Zum Beispiel liefern die folgenden zwei Beispiele das gleiche Ergebnis.

```js
"abc".search(/a/);

/a/[Symbol.search]("abc");
```

Im Gegensatz zu [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) oder [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) kopiert diese Methode nicht den regulären Ausdruck. Im Gegensatz zu [`[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) wird jedoch [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) auf 0 gesetzt, wenn die Ausführung beginnt, und beim Beenden auf den vorherigen Wert zurückgesetzt, sodass Nebenwirkungen im Allgemeinen vermieden werden. Das bedeutet, dass das `g`-Flag mit dieser Methode keine Wirkung hat und immer den ersten Treffer im String zurückgibt, auch wenn `lastIndex` ungleich null ist. Das bedeutet auch, dass "sticky" Regexps immer strikt am Anfang des Strings suchen.

```js
const re = /[abc]/g;
re.lastIndex = 2;
console.log("abc".search(re)); // 0

const re2 = /[bc]/y;
re2.lastIndex = 1;
console.log("abc".search(re2)); // -1
console.log("abc".match(re2)); // ['b']
```

`[Symbol.search]()` ruft immer die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode des Regex genau einmal auf und gibt die `index`-Eigenschaft des Ergebnisses zurück, oder `-1`, wenn das Ergebnis `null` ist.

Diese Methode existiert, um das Suchverhalten in `RegExp`-Unterklassen anzupassen.

## Beispiele

### Direktaufruf

Diese Methode kann fast genauso verwendet werden wie {{jsxref("String.prototype.search()")}}, außer dass der Wert von `this` und die Reihenfolge der Argumente unterschiedlich sind.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.search](str);
console.log(result); // 4
```

### Verwendung von `[Symbol.search]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.search]()`-Methode überschreiben, um das Verhalten zu ändern.

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
const result = str.search(re); // String.prototype.search ruft re[Symbol.search]() auf.
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
