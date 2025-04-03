---
title: RegExp.prototype[Symbol.replace]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die Methode **`[Symbol.replace]()`** von {{jsxref("RegExp")}}-Instanzen definiert, wie [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) sich verhalten sollen, wenn der reguläre Ausdruck als Muster übergeben wird.

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
  - : Ein {{jsxref("String")}}, der das Ziel des Ersatzes ist.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, ersetzt er den durch den aktuellen RegExp übereinstimmenden Teilstring. Eine Reihe von speziellen Ersatzmustern wird unterstützt; siehe den Abschnitt [Einen String als Ersatz angeben](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement) von `String.prototype.replace`.
    - Wenn es eine Funktion ist, wird sie für jede Übereinstimmung aufgerufen und der Rückgabewert wird als Ersetzungstext verwendet. Die der Funktion übergebenen Argumente sind im Abschnitt [Eine Funktion als Ersatz angeben](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement) von `String.prototype.replace` beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, mehrere oder alle Übereinstimmungen des Musters durch den angegebenen Ersatz ersetzt wurden.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}} aufgerufen, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Zum Beispiel geben die folgenden zwei Beispiele dasselbe Ergebnis zurück.

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

Wenn der Regex global ist (mit dem `g`-Flag), wird die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) des Regex wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Andernfalls würde `exec()` nur einmal aufgerufen werden. Für jedes `exec()`-Ergebnis wird der Ersatz basierend auf der Beschreibung in [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description) vorbereitet.

Da `[Symbol.replace]()` weiter `exec()` aufruft, bis es `null` zurückgibt, und `exec()` automatisch den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des Regex auf 0 zurücksetzt, wenn die letzte Übereinstimmung fehlschlägt, hat `[Symbol.replace]()` normalerweise keine Nebeneffekte, wenn es beendet wird. Wenn der Regex jedoch [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) ist, aber nicht global, wird `lastIndex` nicht zurückgesetzt. In diesem Fall kann jeder Aufruf von `replace()` ein unterschiedliches Ergebnis zurückgeben.

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

Wenn der Regex sticky und global ist, wird er weiterhin Sticky-Matches durchführen – d.h. er wird nicht in der Lage sein, Vorkommen über den `lastIndex` hinaus zu erkennen.

```js
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

Wenn die aktuelle Übereinstimmung ein leerer String ist, wird `lastIndex` trotzdem weitergesetzt – wenn der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, wird er um einen Unicode-Codepunkt weitergesetzt; andernfalls erfolgt die Weiterführung um eine UTF-16-Codeeinheit.

```js
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

Diese Methode existiert zur Anpassung des Ersetzungsverhaltens in `RegExp`-Unterklassen.

## Beispiele

### Direkter Aufruf

Diese Methode kann auf fast die gleiche Weise wie {{jsxref("String.prototype.replace()")}} verwendet werden, abgesehen von dem unterschiedlichen `this` und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-01";
const newstr = re[Symbol.replace](str, ".");
console.log(newstr); // 2016.01.01
```

### Verwendung von `[Symbol.replace]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die Methode `[Symbol.replace]()` überschreiben, um das Standardverhalten zu ändern.

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
const newstr = str.replace(re, "#"); // String.prototype.replace calls re[Symbol.replace]().
console.log(newstr); // ###34567
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
