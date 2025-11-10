---
title: RegExp.prototype[Symbol.replace]()
short-title: "[Symbol.replace]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`[Symbol.replace]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) funktionieren sollen, wenn der reguläre Ausdruck als Muster übergeben wird.

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
  - : Ein {{jsxref("String")}}, der das Ziel des Ersetzens ist.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, ersetzt er den Teilstring, der vom aktuellen Regexp übereingestimmt wird. Eine Reihe von speziellen Ersetzungsmustern wird unterstützt; siehe den Abschnitt [Einen String als Ersetzung angeben](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement) von `String.prototype.replace`.
    - Wenn es eine Funktion ist, wird diese für jedes Übereinstimmung aufgerufen und der Rückgabewert wird als Ersetzungstext verwendet. Die an diese Funktion übergebenen Argumente sind im Abschnitt [Eine Funktion als Ersetzung angeben](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement) von `String.prototype.replace` beschrieben.

### Rückgabewert

Ein neuer String, bei dem eines, einige oder alle Übereinstimmungen des Musters durch die angegebene Ersetzung ersetzt werden.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}} aufgerufen, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. So geben zum Beispiel die folgenden zwei Beispiele das gleiche Ergebnis zurück.

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

Wenn der Regex global ist (mit dem `g`-Flag), wird die Methode `exec()` des Regex wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Andernfalls würde `exec()` nur einmal aufgerufen werden. Für jedes Ergebnis von `exec()` wird die Ersetzung basierend auf der Beschreibung in [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description) vorbereitet.

Da `[Symbol.replace]()` `exec()` weiterhin aufrufen würde, bis es `null` zurückgibt, und `exec()` den `lastIndex` des Regex automatisch auf 0 zurücksetzt, wenn die letzte Übereinstimmung fehlschlägt, hätte `[Symbol.replace]()` typischerweise keine Nebeneffekte, wenn es beendet wird. Wenn der Regex jedoch [haftend](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) ist, aber nicht global, würde `lastIndex` nicht zurückgesetzt werden. In diesem Fall könnte jeder Aufruf von `replace()` ein anderes Ergebnis liefern.

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

Wenn der Regex haftend und global ist, würde er weiterhin haftende Übereinstimmungen durchführen — d.h. er würde keine Vorkommen jenseits des `lastIndex` übereinstimmen.

```js
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

Wenn die aktuelle Übereinstimmung ein leerer String ist, würde der `lastIndex` trotzdem erhöht werden — wenn der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, würde er um einen Unicode-Codepunkt erhöht; andernfalls wird er um eine UTF-16-Codeeinheit erhöht.

```js
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

Diese Methode existiert, um das Ersetzungsverhalten in `RegExp`-Unterklassen anzupassen.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast genauso wie {{jsxref("String.prototype.replace()")}} verwendet werden, mit Ausnahme der unterschiedlichen `this`-Objekte und der unterschiedlichen Argumentreihenfolge.

```js
const re = /-/g;
const str = "2016-01-01";
const newStr = re[Symbol.replace](str, ".");
console.log(newStr); // 2016.01.01
```

### Verwendung von `[Symbol.replace]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die Methode `[Symbol.replace]()` überschreiben, um das Standardverhalten zu verändern.

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
