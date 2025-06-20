---
title: RegExp.prototype[Symbol.replace]()
short-title: "[Symbol.replace]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`[Symbol.replace]()`**-Methode von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) funktionieren sollen, wenn der reguläre Ausdruck als Muster übergeben wird.

{{InteractiveExample("JavaScript Demo: RegExp.prototype[Symbol.replace]()")}}

<!-- cSpell:ignore tball -->

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.replace](str) {
    return RegExp.prototype[Symbol.replace].call(this, str, "#!@?");
  }
}

console.log("football".replace(new RegExp1("foo")));
// Expected output: "#!@?tball"
```

## Syntax

```js-nolint
regexp[Symbol.replace](str, replacement)
```

### Parameter

- `str`
  - : Ein {{jsxref("String")}}, der Ziel der Ersetzung ist.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, wird er den durch den aktuellen RegExp übereinstimmenden Unterstring ersetzen. Eine Reihe spezieller Ersetzungsmuster wird unterstützt; siehe den Abschnitt [Angeben eines Strings als Ersetzung](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement) von `String.prototype.replace`.
    - Wenn es eine Funktion ist, wird sie für jedes Match aufgerufen und der Rückgabewert wird als Ersetzungstext verwendet. Die Argumente, die dieser Funktion übergeben werden, sind im Abschnitt [Angeben einer Funktion als Ersetzung](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement) von `String.prototype.replace` beschrieben.

### Rückgabewert

Ein neuer String, bei dem einer, einige oder alle Vorkommen des Musters durch die angegebene Ersetzung ersetzt werden.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}} aufgerufen, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Beispielsweise liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

Wenn der Regex global (mit dem `g`-Flag) ist, wird die `exec()`-Methode des Regexes wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Andernfalls würde `exec()` nur einmal aufgerufen. Für jedes `exec()`-Ergebnis wird die Ersetzung basierend auf der Beschreibung in [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description) vorbereitet.

Da `[Symbol.replace]()` `exec()` so lange aufruft, bis es `null` zurückgibt und `exec()` automatisch den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des Regexes auf 0 zurücksetzt, wenn das letzte Match fehlschlägt, hat `[Symbol.replace]()` typischerweise keine Nebeneffekte, wenn es beendet wird. Ist der Regex jedoch [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) aber nicht global, wird `lastIndex` nicht zurückgesetzt. In diesem Fall kann jeder Aufruf von `replace()` ein anderes Ergebnis liefern.

```js
const re = /a/y;

for (let i = 0; i < 5; i++) {
  console.log("aaa".replace(re, "b"), re.lastIndex);
}

// baa 1
// aba 2
// aab 3
// aaa 0
// baa 1
```

Wenn der Regex sticky und global ist, würde er trotzdem Sticky-Matches durchführen — d.h. er würde nicht jedem Vorkommen jenseits von `lastIndex` entsprechen.

```js
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

Wenn das aktuelle Match ein Leerstring ist, würde `lastIndex` trotzdem weitergeschaltet werden — wenn der Regex [Unicode-aware](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, um einen Unicode-Codepunkt; andernfalls um eine UTF-16-Codeeinheit.

```js
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

Diese Methode existiert zur Anpassung des Ersetzungsverhaltens in `RegExp`-Unterklassen.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast genauso wie {{jsxref("String.prototype.replace()")}} verwendet werden, abgesehen vom unterschiedlichen `this` und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-01";
const newStr = re[Symbol.replace](str, ".");
console.log(newStr); // 2016.01.01
```

### Verwendung von `[Symbol.replace]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.replace]()`-Methode überschreiben, um das Standardverhalten zu ändern.

```js
class MyRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // Perform [Symbol.replace]() `count` times.
    let result = str;
    for (let i = 0; i < this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

const re = new MyRegExp("\\d", "", 3);
const str = "01234567";
const newStr = str.replace(re, "#"); // String.prototype.replace calls re[Symbol.replace]().
console.log(newStr); // ###34567
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `RegExp.prototype[Symbol.replace]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.replaceAll()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.replace")}}
