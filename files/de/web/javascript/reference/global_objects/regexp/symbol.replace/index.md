---
title: RegExp.prototype[Symbol.replace]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.replace]()`**-Methode von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) sich verhalten sollen, wenn der reguläre Ausdruck als Muster übergeben wird.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@replace.html")}}

## Syntax

```js-nolint
regexp[Symbol.replace](str, replacement)
```

### Parameter

- `str`
  - : Ein {{jsxref("String")}}, das Ziel des Austauschs ist.
- `replacement`
  - : Kann eine Zeichenkette oder eine Funktion sein.
    - Wenn es eine Zeichenkette ist, wird sie den Teilstring ersetzen, der mit dem aktuellen RegExp übereinstimmt. Einige spezielle Ersatzmuster werden unterstützt; siehe den Abschnitt [Specifying a string as the replacement](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement) in `String.prototype.replace`.
    - Wenn es eine Funktion ist, wird diese bei jedem Treffer aufgerufen und der Rückgabewert wird als Ersetzungstext verwendet. Die Argumente, die dieser Funktion übergeben werden, sind im Abschnitt [Specifying a function as the replacement](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement) in `String.prototype.replace` beschrieben.

### Rückgabewert

Eine neue Zeichenkette, bei der ein, einige oder alle Übereinstimmungen des Musters durch den angegebenen Ersatz ersetzt wurden.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}} aufgerufen, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Zum Beispiel geben die folgenden zwei Beispiele dasselbe Ergebnis zurück.

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

Wenn der Regex global ist (mit dem `g`-Flag), wird die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode des Regex wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Andernfalls würde `exec()` nur einmal aufgerufen. Für jedes `exec()`-Ergebnis wird die Ersetzung basierend auf der Beschreibung in [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description) vorbereitet.

Da `[Symbol.replace]()` `exec()` weiter aufrufen würde, bis es `null` zurückgibt, und `exec()` den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des Regex automatisch auf 0 zurücksetzt, wenn der letzte Treffer fehlschlägt, hätte `[Symbol.replace]()` typischerweise keine Nebenwirkungen, wenn es beendet wird. Wenn der Regex jedoch [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky), aber nicht global ist, würde `lastIndex` nicht zurückgesetzt. In diesem Fall kann jeder Aufruf von `replace()` ein unterschiedliches Ergebnis zurückgeben.

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

Wenn der Regex sowohl sticky als auch global ist, werden weiterhin sticky-Übereinstimmungen durchgeführt – d. h., es würde jede Vorkommen jenseits des `lastIndex` nicht treffen.

```js
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

Wenn die aktuelle Übereinstimmung eine leere Zeichenkette ist, würde `lastIndex` trotzdem weitergesetzt werden – wenn der Regex [Unicode-aware](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, würde er um einen Unicode-Codepunkt weitergehen; andernfalls geht es um eine UTF-16-Codeeinheit weiter.

```js
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

Diese Methode existiert, um das Ersetzungsverhalten in `RegExp`-Unterklassen anzupassen.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf dieselbe Weise verwendet werden wie {{jsxref("String.prototype.replace()")}}, mit Ausnahme des unterschiedlichen `this`-Kontexts und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-01";
const newstr = re[Symbol.replace](str, ".");
console.log(newstr); // 2016.01.01
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
