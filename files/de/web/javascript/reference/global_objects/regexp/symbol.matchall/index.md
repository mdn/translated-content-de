---
title: RegExp.prototype[Symbol.matchAll]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.matchAll]()`** Methode von {{jsxref("RegExp")}} Instanzen legt fest, wie [`String.prototype.matchAll`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) sich verhalten soll.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@matchall.html", "taller")}}

## Syntax

```js-nolint
regexp[Symbol.matchAll](str)
```

### Parameter

- `str`
  - : Ein {{jsxref("String")}}, der Ziel des Abgleichs ist.

### Rückgabewert

Ein [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (das nicht neu gestartet werden kann) von Übereinstimmungen. Jede Übereinstimmung ist ein Array mit der gleichen Form wie der Rückgabewert von {{jsxref("RegExp.prototype.exec()")}}.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.matchAll()")}} aufgerufen. Zum Beispiel liefern die folgenden beiden Beispiele das gleiche Ergebnis zurück.

```js
"abc".matchAll(/a/g);

/a/g[Symbol.matchAll]("abc");
```

Ähnlich wie [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) beginnt `[Symbol.matchAll]()` damit, mit Hilfe von [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) ein neues Regex zu erstellen, um so eine Veränderung des ursprünglichen Regex zu vermeiden. [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) startet mit dem Wert des ursprünglichen Regex.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Die Validierung, ob die Eingabe ein globales Regex ist, erfolgt in [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll). `[Symbol.matchAll]()` validiert die Eingabe nicht. Wenn das Regex nicht global ist, liefert der zurückgegebene Iterator einmal das Ergebnis von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und gibt dann `undefined` zurück. Wenn das Regex global ist, wird jedes Mal, wenn die `next()`-Methode des zurückgegebenen Iterators aufgerufen wird, das [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) der Regex aufgerufen und das Ergebnis geliefert.

Wenn das Regex sticky und global ist, werden weiterhin sticky Übereinstimmungen durchgeführt — d.h. es werden keine Vorkommen jenseits des `lastIndex` abgeglichen.

```js
console.log(Array.from("ab-c".matchAll(/[abc]/gy)));
// [ [ "a" ], [ "b" ] ]
```

Wenn die aktuelle Übereinstimmung ein leerer String ist, wird der [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) dennoch erhöht. Wenn das Regex das [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) Flag hat, wird um einen Unicode-Codepunkt erhöht; andernfalls wird um einen UTF-16-Codepunkt erhöht.

```js
console.log(Array.from("😄".matchAll(/(?:)/g)));
// [ [ "" ], [ "" ], [ "" ] ]

console.log(Array.from("😄".matchAll(/(?:)/gu)));
// [ [ "" ], [ "" ] ]
```

Diese Methode existiert, um das Verhalten von `matchAll()` in {{jsxref("RegExp")}}-Unterklassen zu individualisieren.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf die gleiche Weise verwendet werden wie {{jsxref("String.prototype.matchAll()")}}, mit Ausnahme des unterschiedlichen Werts von `this` und der unterschiedlichen Argumentreihenfolge.

```js
const re = /[0-9]+/g;
const str = "2016-01-02";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// [ "2016", "01", "02" ]
```

### Verwendung von `[Symbol.matchAll]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.matchAll]()` Methode überschreiben, um das Standardverhalten zu verändern.

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
- {{jsxref("String.prototype.matchAll()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("Symbol.matchAll")}}
