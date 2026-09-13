---
title: RegExp.prototype[Symbol.matchAll]()
short-title: "[Symbol.matchAll]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll
l10n:
  sourceCommit: 5b3aa7e4e8cd54f1b662534d8c97074e522b7fc4
---

Die Methode **`[Symbol.matchAll]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.matchAll`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) sich verhalten soll.

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
  - : Ein {{jsxref("String")}}, das das Ziel des Abgleichs ist.

### Rückgabewert

Ein [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (das nicht neu gestartet werden kann) von Übereinstimmungen. Jede Übereinstimmung ist ein Array mit derselben Struktur wie der Rückgabewert von {{jsxref("RegExp.prototype.exec()")}}.

## Beschreibung

Diese Methode existiert, um das Verhalten von `matchAll()` in Unterklassen von {{jsxref("RegExp")}} anzupassen. Sie wird intern in {{jsxref("String.prototype.matchAll()")}} aufgerufen. Beispielsweise liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"abc".matchAll(/a/g);

/a/g[Symbol.matchAll]("abc");
```

Ähnlich wie [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) beginnt `[Symbol.matchAll]()` damit, [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) zu verwenden, um ein neues Regex zu erstellen, wodurch vermieden wird, dass das originale RegExp in irgendeiner Weise verändert wird. Der Konstruktor erhält `this` und die ursprünglichen Flags. [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) beginnt mit dem Wert des ursprünglichen Regex.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Wenn das Regex global ist (mit dem `g`-Flag), wird jedes Mal, wenn die `next()`-Methode des zurückgegebenen Iterators aufgerufen wird, das RegExp's [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) aufgerufen und das Ergebnis wird zurückgegeben. Wenn die aktuelle Übereinstimmung ein leerer String ist, wird der [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) dennoch weitergeschaltet. Wenn das Regex das [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flag besitzt, schreitet es um einen Unicode-Codepunkt voran; andernfalls schreitet es um einen UTF-16-Codepunkt voran.

```js
console.log(Array.from("😄".matchAll(/(?:)/g)));
// [ [ "" ], [ "" ], [ "" ] ]

console.log(Array.from("😄".matchAll(/(?:)/gu)));
// [ [ "" ], [ "" ] ]
```

Wenn das Regex nicht global ist, gibt der zurückgegebene Iterator einmal das [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Ergebnis zurück und beendet dann. (Die Validierung, dass der Input ein globales Regex ist, erfolgt in [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll). `[Symbol.matchAll]()` validiert die Flags von `this` nicht.)

Wenn das Regex sticky und global ist, wird es trotzdem sticky Abgleiche durchführen — d.h. es wird keine Vorkommen jenseits des `lastIndex` abgleichen.

```js
console.log(Array.from("ab-c".matchAll(/[abc]/gy)));
// [ [ "a" ], [ "b" ] ]
```

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf dieselbe Weise wie {{jsxref("String.prototype.matchAll()")}} verwendet werden, abgesehen vom unterschiedlichen Wert von `this` und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /\d+/g;
const str = "2016-01-02";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// [ "2016", "01", "02" ]
```

### Verwendung von `[Symbol.matchAll]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die Methode `[Symbol.matchAll]()` überschreiben, um das Standardverhalten zu ändern.

Zum Beispiel, um ein {{jsxref("Array")}} statt eines [Iterators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurückzugeben:

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
