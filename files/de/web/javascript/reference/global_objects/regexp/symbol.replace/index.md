---
title: RegExp.prototype[Symbol.replace]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die Methode **`[Symbol.replace]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) funktionieren sollen, wenn der reguläre Ausdruck als Muster übergeben wird.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@replace.html")}}

## Syntax

```js-nolint
regexp[Symbol.replace](str, replacement)
```

### Parameter

- `str`
  - : Ein {{jsxref("String")}}, der das Ziel des Ersetzens ist.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, wird der durch den aktuellen RegExp gematchte Teilstring ersetzt. Eine Reihe von speziellen Ersetzungsmustern werden unterstützt; siehe den Abschnitt [Angeben eines Strings als Ersetzung](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement) von `String.prototype.replace`.
    - Wenn es eine Funktion ist, wird sie für jedes Vorkommen aufgerufen und der Rückgabewert wird als Ersetzungstext verwendet. Die Argumente, die dieser Funktion übergeben werden, sind im Abschnitt [Angeben einer Funktion als Ersetzung](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement) von `String.prototype.replace` beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, einige oder alle Vorkommen des Musters durch die angegebene Ersetzung ersetzt wurden.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}} aufgerufen, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Zum Beispiel ergeben die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

Wenn der Regex global (mit dem `g`-Flag) ist, wird die `exec()`-Methode des Regex wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Andernfalls würde `exec()` nur einmal aufgerufen werden. Für jedes `exec()`-Ergebnis wird die Ersetzung basierend auf der Beschreibung in [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description) vorbereitet.

Da `[Symbol.replace]()` `exec()` wiederholt aufrufen würde, bis es `null` zurückgibt, und `exec()` den Regex-`lastIndex` automatisch auf 0 zurücksetzt, wenn das letzte Vorkommen fehlschlägt, hätte `[Symbol.replace]()` typischerweise keine Nebeneffekte, wenn es beendet wird. Wenn der Regex jedoch [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) aber nicht global ist, würde `lastIndex` nicht zurückgesetzt. In diesem Fall könnte jeder Aufruf von `replace()` ein anderes Ergebnis zurückgeben.

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

Wenn der Regex sticky und global ist, würden dennoch sticky Matches durchgeführt — das heißt, es würden keine Vorkommen über den `lastIndex` hinaus gematcht.

```js
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

Wenn das aktuelle Vorkommen ein leerer String ist, würde der `lastIndex` dennoch erhöht werden — wenn der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, würde er um einen Unicode-Codepunkt erhöht werden; andernfalls erhöht er sich um eine UTF-16-Codeeinheit.

```js
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

Diese Methode existiert, um das Ersetzungsverhalten in `RegExp`-Unterklassen anzupassen.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast genauso verwendet werden wie {{jsxref("String.prototype.replace()")}}, abgesehen vom unterschiedlichen `this` und der unterschiedlichen Argumentreihenfolge.

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
