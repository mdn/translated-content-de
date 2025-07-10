---
title: RegExp.prototype[Symbol.search]()
short-title: "[Symbol.search]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`[Symbol.search]()`** von {{jsxref("RegExp")}}-Instanzen gibt an, wie [`String.prototype.search`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) funktionieren sollte.

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

Der Index des ersten Treffers zwischen dem regulären Ausdruck und dem gegebenen String oder `-1`, wenn kein Treffer gefunden wurde.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.search()")}} aufgerufen. Zum Beispiel liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"abc".search(/a/);

/a/[Symbol.search]("abc");
```

Diese Methode kopiert den regulären Ausdruck nicht, anders als [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) oder [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll). Allerdings, im Gegensatz zu [`[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), wird es [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) auf 0 setzen, wenn die Ausführung beginnt, und es auf den vorherigen Wert zurücksetzen, wenn es endet, um so im Allgemeinen Nebeneffekte zu vermeiden. Dies bedeutet, dass das `g`-Flag keine Auswirkung mit dieser Methode hat und es immer den ersten Treffer im String zurückgibt, selbst wenn `lastIndex` ungleich null ist. Dies bedeutet auch, dass sticky reguläre Ausdrücke immer strikt am Anfang des Strings suchen werden.

```js
const re = /[abc]/g;
re.lastIndex = 2;
console.log("abc".search(re)); // 0

const re2 = /[bc]/y;
re2.lastIndex = 1;
console.log("abc".search(re2)); // -1
console.log("abc".match(re2)); // [ 'b' ]
```

`[Symbol.search]()` ruft immer genau einmal die `exec()`-Methode des regulären Ausdrucks auf und gibt die `index`-Eigenschaft des Ergebnisses zurück, oder `-1`, wenn das Ergebnis `null` ist.

Diese Methode existiert, um das Suchverhalten in `RegExp`-Subklassen anzupassen.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf dieselbe Weise verwendet werden wie {{jsxref("String.prototype.search()")}}, abgesehen vom unterschiedlichen Wert von `this` und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.search](str);
console.log(result); // 4
```

### Verwendung von `[Symbol.search]()` in Subklassen

Subklassen von {{jsxref("RegExp")}} können die `[Symbol.search]()`-Methode überschreiben, um das Verhalten zu ändern.

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
