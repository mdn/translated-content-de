---
title: RegExp.prototype[Symbol.matchAll]()
short-title: "[Symbol.matchAll]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`[Symbol.matchAll]()`** von {{jsxref("RegExp")}}-Instanzen gibt an, wie [`String.prototype.matchAll`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) verhalten sollte.

{{InteractiveExample("JavaScript Demo: RegExp.prototype[Symbol.matchAll]()", "taller")}}

```js interactive-example
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    }
    return Array.from(result);
  }
}

const re = new MyRegExp("-\\d+", "g");
console.log("2016-01-02|2019-03-07".matchAll(re));
// Expected output: Array [Array ["-01"], Array ["-02"], Array ["-03"], Array ["-07"]]
```

## Syntax

```js-nolint
regexp[Symbol.matchAll](str)
```

### Parameter

- `str`
  - : Ein {{jsxref("String")}}, der das Ziel des Abgleichs darstellt.

### Rückgabewert

Ein [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (das nicht neu gestartet werden kann) der Übereinstimmungen. Jede Übereinstimmung ist ein Array mit derselben Struktur wie der Rückgabewert von {{jsxref("RegExp.prototype.exec()")}}.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.matchAll()")}} aufgerufen. Zum Beispiel liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"abc".matchAll(/a/g);

/a/g[Symbol.matchAll]("abc");
```

Ähnlich wie [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) beginnt `[Symbol.matchAll]()` mit der Verwendung von [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species), um ein neues Regex zu konstruieren, um zu vermeiden, dass das ursprüngliche Regexp in irgendeiner Weise mutiert wird. [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) beginnt mit dem Wert des ursprünglichen Regex.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Die Validierung, dass die Eingabe ein globales Regex ist, erfolgt in [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll). `[Symbol.matchAll]()` validiert die Eingabe nicht. Wenn das Regex nicht global ist, gibt der zurückgegebene Iterator das [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Ergebnis einmal zurück und gibt dann `undefined` zurück. Wenn das Regexp global ist, wird jedes Mal, wenn die `next()`-Methode des zurückgegebenen Iterators aufgerufen wird, das Regex' [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) aufgerufen und das Ergebnis zurückgegeben.

Wenn das Regex sticky und global ist, führt es weiterhin Sticky-Matches durch — das heißt, es matcht keine Vorkommen nach dem `lastIndex`.

```js
console.log(Array.from("ab-c".matchAll(/[abc]/gy)));
// [ [ "a" ], [ "b" ] ]
```

Wenn die aktuelle Übereinstimmung ein leerer String ist, wird der [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) dennoch vorgerückt. Wenn das Regex das [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flag hat, wird um einen Unicode-Codepoint vorgerückt; andernfalls um einen UTF-16-Codepoint.

```js
console.log(Array.from("😄".matchAll(/(?:)/g)));
// [ [ "" ], [ "" ], [ "" ] ]

console.log(Array.from("😄".matchAll(/(?:)/gu)));
// [ [ "" ], [ "" ] ]
```

Diese Methode existiert, um das Verhalten von `matchAll()` in {{jsxref("RegExp")}}-Unterklassen anzupassen.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf dieselbe Weise wie {{jsxref("String.prototype.matchAll()")}} verwendet werden, abgesehen von dem unterschiedlichen Wert von `this` und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /\d+/g;
const str = "2016-01-02";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// [ "2016", "01", "02" ]
```

### Verwendung von `[Symbol.matchAll]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.matchAll]()`-Methode überschreiben, um das Standardverhalten zu ändern.

Zum Beispiel, um ein {{jsxref("Array")}} anstelle eines [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurückzugeben:

```js
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    return result ? Array.from(result) : null;
  }
}

const re = new MyRegExp("(\\d+)-(\\d+)-(\\d+)", "g");
const str = "2016-01-02|2019-03-07";
const result = str.matchAll(re);

console.log(result[0]);
// [ "2016-01-02", "2016", "01", "02" ]

console.log(result[1]);
// [ "2019-03-07", "2019", "03", "07" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `RegExp.prototype[Symbol.matchAll]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `RegExp.prototype[Symbol.matchAll]`](https://www.npmjs.com/package/string.prototype.matchall)
- {{jsxref("String.prototype.matchAll()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("Symbol.matchAll")}}
