---
title: RegExp.prototype[Symbol.matchAll]()
short-title: "[Symbol.matchAll]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.matchAll]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie sich [`String.prototype.matchAll`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) verhalten soll.

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
  - : Ein {{jsxref("String")}}, in dem nach Übereinstimmungen gesucht wird.

### Rückgabewert

Ein [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) mit Übereinstimmungen, das nicht neu gestartet werden kann. Jede Übereinstimmung ist ein Array mit derselben Struktur wie der Rückgabewert von {{jsxref("RegExp.prototype.exec()")}}.

## Beschreibung

Diese Methode dient dazu, das Verhalten von `matchAll()` in Unterklassen von {{jsxref("RegExp")}} anzupassen. Sie wird intern von {{jsxref("String.prototype.matchAll()")}} aufgerufen. Beispielsweise liefern die folgenden beiden Aufrufe dasselbe Ergebnis.

```js
"abc".matchAll(/a/g);

/a/g[Symbol.matchAll]("abc");
```

Wie [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) erstellt `[Symbol.matchAll]()` zunächst mithilfe von [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) einen neuen regulären Ausdruck. Dadurch wird der ursprüngliche reguläre Ausdruck in keiner Weise verändert. Der Konstruktor erhält `this` und die ursprünglichen Flags. Der Anfangswert von [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) entspricht dem Wert des ursprünglichen regulären Ausdrucks.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Ist der reguläre Ausdruck global (mit dem Flag `g`), wird bei jedem Aufruf der Methode `next()` des zurückgegebenen Iterators [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) aufgerufen und das Ergebnis ausgegeben. Wenn die aktuelle Übereinstimmung eine leere Zeichenfolge ist, wird [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) dennoch erhöht. Hat der reguläre Ausdruck das Flag [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode), rückt die Position um einen Unicode-Codepunkt vor; andernfalls rückt sie um eine UTF-16-Codeeinheit vor.

```js
console.log(Array.from("😄".matchAll(/(?:)/g)));
// [ [ "" ], [ "" ], [ "" ] ]

console.log(Array.from("😄".matchAll(/(?:)/gu)));
// [ [ "" ], [ "" ] ]
```

Ist der reguläre Ausdruck nicht global, gibt der zurückgegebene Iterator das Ergebnis von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) einmal aus und endet dann. (Die Prüfung, ob die Eingabe ein globaler regulärer Ausdruck ist, erfolgt in [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll). `[Symbol.matchAll]()` prüft die Flags von `this` nicht.)

Ist der reguläre Ausdruck sowohl sticky als auch global, sucht er weiterhin nur an der durch `lastIndex` festgelegten Position nach einer Übereinstimmung – Vorkommen hinter `lastIndex` werden also nicht gefunden.

```js
console.log(Array.from("ab-c".matchAll(/[abc]/gy)));
// [ [ "a" ], [ "b" ] ]
```

## Beispiele

### Direkter Aufruf

Diese Methode kann nahezu genauso verwendet werden wie {{jsxref("String.prototype.matchAll()")}}. Unterschiede bestehen im Wert von `this` und in der Reihenfolge der Argumente.

```js
const re = /\d+/g;
const str = "2016-01-02";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// [ "2016", "01", "02" ]
```

### `[Symbol.matchAll]()` in Unterklassen verwenden

Unterklassen von {{jsxref("RegExp")}} können die Methode `[Symbol.matchAll]()` überschreiben, um das Standardverhalten zu ändern.

Um beispielsweise ein {{jsxref("Array")}} statt eines [Iterators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurückzugeben:

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

- [Polyfill für `RegExp.prototype[Symbol.matchAll]` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `RegExp.prototype[Symbol.matchAll]` von es-shims](https://www.npmjs.com/package/string.prototype.matchall)
- {{jsxref("String.prototype.matchAll()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("Symbol.matchAll")}}
