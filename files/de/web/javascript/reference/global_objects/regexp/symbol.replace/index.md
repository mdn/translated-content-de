---
title: RegExp.prototype[Symbol.replace]()
short-title: "[Symbol.replace]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
l10n:
  sourceCommit: 5b3aa7e4e8cd54f1b662534d8c97074e522b7fc4
---

Die Methode **`[Symbol.replace]()`** von {{jsxref("RegExp")}}-Instanzen gibt an, wie [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) sich verhalten sollen, wenn der reguläre Ausdruck als Muster übergeben wird.

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
  - : Ein {{jsxref("String")}}, auf den die Ersetzung abzielt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, wird die Teilzeichenkette ersetzt, die dem aktuellen RegExp entspricht. Eine Anzahl von speziellen Ersetzungsmustern wird unterstützt; siehe den Abschnitt [Einen String als Ersetzung angeben](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement) von `String.prototype.replace`.
    - Wenn es eine Funktion ist, wird sie für jedes Vorkommen aufgerufen und der Rückgabewert wird als Ersetzungstext verwendet. Die Argumente, die dieser Funktion übergeben werden, sind im Abschnitt [Eine Funktion als Ersetzung angeben](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement) von `String.prototype.replace` beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, einige oder alle Muster durch die angegebene Ersetzung ersetzt wurden.

## Beschreibung

Diese Methode existiert zur Anpassung des Ersetzungsverhaltens in `RegExp`-Unterklassen. Sie wird intern in {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}} aufgerufen, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Zum Beispiel liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

Wenn der reguläre Ausdruck global ist (mit dem `g`-Flag), wird dessen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) zuerst auf 0 gesetzt, sodass das Matching immer am Anfang des Strings beginnt, und die `exec()`-Methode des regulären Ausdrucks wird wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Wenn das aktuelle Vorkommen ein leerer String ist, würde `lastIndex` trotzdem erhöht — wenn der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, würde er um einen Unicode-Codepunkt erhöht; andernfalls erhöht er sich um eine UTF-16-Codierungseinheit.

```js
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

Wenn der reguläre Ausdruck nicht global ist, würde `exec()` nur einmal aufgerufen werden.

Die Ersetzung erfolgt, nachdem alle passenden Teilzeichenketten identifiziert wurden. Für jedes erfolgreiche `exec()`-Ergebnis wird ein Ersetzungsstring basierend auf dem `replacement`-Argument erstellt, dessen Prozess in [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description) beschrieben ist.

Die Methode `exec()` setzt `lastIndex` automatisch auf 0 zurück, wenn das letzte Matching fehlschlägt; für globale reguläre Ausdrücke mit `lastIndex`, das bei 0 beginnt, erzeugt `[Symbol.replace]()` im Allgemeinen keine Nebenwirkungen. Ist der reguläre Ausdruck jedoch [klebrig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky), aber nicht global, wird `exec()` nur einmal aufgerufen und setzt daher `lastIndex` nicht zurück, wenn das Matching erfolgreich war. In diesem Fall kann jeder Aufruf von `replace()` ein anderes Ergebnis liefern.

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

Wenn der reguläre Ausdruck klebrig und global ist, würde er trotzdem klebrige Übereinstimmungen durchführen — das heißt, er würde es nicht schaffen, Vorkommen jenseits des `lastIndex` zu finden.

```js
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf die gleiche Weise wie {{jsxref("String.prototype.replace()")}} verwendet werden, außer, dass `this` und die Argumentreihenfolge unterschiedlich sind.

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
