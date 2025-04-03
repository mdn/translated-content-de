---
title: RegExp.prototype[Symbol.matchAll]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die Methode **`[Symbol.matchAll]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.matchAll`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) funktionieren soll.

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

const re = new MyRegExp("-[0-9]+", "g");
console.log("2016-01-02|2019-03-07".matchAll(re));
// Expected output: Array [Array ["-01"], Array ["-02"], Array ["-03"], Array ["-07"]]
```

## Syntax

```js-nolint
regexp[Symbol.matchAll](str)
```

### Parameter

- `str`
  - : Ein {{jsxref("String")}}, das das Ziel des Abgleichs ist.

### Rückgabewert

Ein [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (welches nicht neu gestartet werden kann) von Übereinstimmungen. Jede Übereinstimmung ist ein Array mit der gleichen Struktur wie der Rückgabewert von {{jsxref("RegExp.prototype.exec()")}}.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.matchAll()")}} aufgerufen. Zum Beispiel liefern die folgenden beiden Beispiele das gleiche Ergebnis.

```js
"abc".matchAll(/a/g);

/a/g[Symbol.matchAll]("abc");
```

Wie [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) beginnt `[Symbol.matchAll]()` damit, einen neuen Regex mithilfe von [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) zu konstruieren, wodurch vermieden wird, den ursprünglichen Regex in irgendeiner Weise zu verändern. Der [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) beginnt mit dem Wert des ursprünglichen Regex.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Die Validierung, ob die Eingabe ein globaler Regex ist, erfolgt in [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll). `[Symbol.matchAll]()` validiert die Eingabe nicht. Wenn der Regex nicht global ist, liefert der zurückgegebene Iterator das [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Ergebnis einmal und gibt dann `undefined` zurück. Wenn der Regex global ist, wird jedes Mal, wenn die `next()`-Methode des zurückgegebenen Iterators aufgerufen wird, das [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) des Regex aufgerufen und das Ergebnis wird geliefert.

Wenn der Regex sticky und global ist, werden immer noch Sticky-Matches durchgeführt, d.h. es werden keine Vorkommen hinter dem `lastIndex` gematcht.

```js
console.log(Array.from("ab-c".matchAll(/[abc]/gy)));
// [ [ "a" ], [ "b" ] ]
```

Wenn das aktuelle Match eine leere Zeichenkette ist, wird der [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) trotzdem weitergeschaltet. Wenn der Regex das [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flag hat, wird um einen Unicode-Codepunkt vorgerückt; andernfalls um einen UTF-16-Codepunkt.

```js
console.log(Array.from("😄".matchAll(/(?:)/g)));
// [ [ "" ], [ "" ], [ "" ] ]

console.log(Array.from("😄".matchAll(/(?:)/gu)));
// [ [ "" ], [ "" ] ]
```

Diese Methode existiert, um das Verhalten von `matchAll()` in {{jsxref("RegExp")}}-Subklassen anzupassen.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf die gleiche Weise wie {{jsxref("String.prototype.matchAll()")}} verwendet werden, abgesehen von den unterschiedlichen Werten von `this` und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /[0-9]+/g;
const str = "2016-01-02";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// [ "2016", "01", "02" ]
```

### Verwendung von `[Symbol.matchAll]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die Methode `[Symbol.matchAll]()` überschreiben, um das Standardverhalten zu ändern.

Zum Beispiel, um ein {{jsxref("Array")}} anstelle eines [Iterators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurückzugeben:

```js
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    return result ? Array.from(result) : null;
  }
}

const re = new MyRegExp("([0-9]+)-([0-9]+)-([0-9]+)", "g");
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
- [es-shims polyfill von `RegExp.prototype[Symbol.matchAll]`](https://www.npmjs.com/package/string.prototype.matchall)
- {{jsxref("String.prototype.matchAll()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("Symbol.matchAll")}}
