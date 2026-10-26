---
title: RegExp.prototype[Symbol.replace]()
short-title: "[Symbol.replace]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.replace]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie sich [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) verhalten, wenn ihnen der reguläre Ausdruck als Suchmuster übergeben wird.

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
  - : Ein {{jsxref("String")}}, in dem die Ersetzung vorgenommen wird.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es sich um einen String handelt, ersetzt er den Teilstring, auf den der aktuelle reguläre Ausdruck zutrifft. Dabei werden mehrere spezielle Ersetzungsmuster unterstützt; siehe den Abschnitt [Einen String als Ersetzung angeben](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement) zu `String.prototype.replace`.
    - Wenn es sich um eine Funktion handelt, wird sie für jede Übereinstimmung aufgerufen und ihr Rückgabewert als Ersetzungstext verwendet. Die an diese Funktion übergebenen Argumente sind im Abschnitt [Eine Funktion als Ersetzung angeben](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement) zu `String.prototype.replace` beschrieben.

### Rückgabewert

Ein neuer String, in dem eine, mehrere oder alle Übereinstimmungen mit dem Muster durch die angegebene Ersetzung ersetzt wurden.

## Beschreibung

Diese Methode dient dazu, das Ersetzungsverhalten in Unterklassen von `RegExp` anzupassen. Sie wird intern von {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}} aufgerufen, wenn das Argument `pattern` ein {{jsxref("RegExp")}}-Objekt ist. Die folgenden beiden Beispiele liefern etwa dasselbe Ergebnis.

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

Wenn der reguläre Ausdruck global ist (also das `g`-Flag hat), wird sein [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) zunächst auf 0 gesetzt, sodass die Suche immer am Anfang des Strings beginnt. Anschließend wird die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) des regulären Ausdrucks wiederholt aufgerufen, bis `exec()` den Wert `null` zurückgibt. Wenn eine Übereinstimmung ein leerer String ist, wird `lastIndex` dennoch erhöht: Bei einem [Unicode-bewussten](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) regulären Ausdruck um einen Unicode-Codepunkt, andernfalls um eine UTF-16-Codeeinheit.

```js
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

Wenn der reguläre Ausdruck nicht global ist, wird `exec()` nur einmal aufgerufen.

Die Ersetzung erfolgt, nachdem alle übereinstimmenden Teilstrings ermittelt wurden. Für jedes erfolgreiche Ergebnis von `exec()` wird anhand des Arguments `replacement` ein Ersetzungsstring erzeugt. Dieser Vorgang ist unter [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description) beschrieben.

Die Methode `exec()` setzt `lastIndex` automatisch auf 0 zurück, wenn die letzte Suche keine Übereinstimmung findet. Daher hat `[Symbol.replace]()` bei globalen regulären Ausdrücken, deren `lastIndex` anfangs 0 ist, im Allgemeinen keine Nebeneffekte. Wenn der reguläre Ausdruck jedoch [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky), aber nicht global ist, wird `exec()` nur einmal aufgerufen und setzt `lastIndex` bei einer erfolgreichen Übereinstimmung daher nicht zurück. In diesem Fall kann jeder Aufruf von `replace()` ein anderes Ergebnis liefern.

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

Wenn der reguläre Ausdruck sowohl sticky als auch global ist, sucht er weiterhin nur nach Übereinstimmungen an der durch `lastIndex` vorgegebenen Position. Übereinstimmungen an späteren Positionen werden also nicht gefunden, wenn an dieser Position keine Übereinstimmung vorliegt.

```js
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

## Beispiele

### Direkter Aufruf

Diese Methode lässt sich fast genauso verwenden wie {{jsxref("String.prototype.replace()")}}. Allerdings unterscheiden sich der Wert von `this` und die Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-01";
const newStr = re[Symbol.replace](str, ".");
console.log(newStr); // 2016.01.01
```

### `[Symbol.replace]()` in Unterklassen verwenden

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
const newStr = str.replace(re, "#"); // String.prototype.replace calls re[Symbol.replace]().
console.log(newStr); // ###34567
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `RegExp.prototype[Symbol.replace]` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.replaceAll()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.replace")}}
