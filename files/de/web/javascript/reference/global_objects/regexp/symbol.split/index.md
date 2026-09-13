---
title: RegExp.prototype[Symbol.split]()
short-title: "[Symbol.split]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: 5b3aa7e4e8cd54f1b662534d8c97074e522b7fc4
---

Die Methode **`[Symbol.split]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) funktionieren soll, wenn der reguläre Ausdruck als Trennzeichen übergeben wird.

{{InteractiveExample("JavaScript Demo: RegExp.prototype[Symbol.split]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => `(${x})`);
  }
}

console.log("2016-01-02".split(new RegExp1("-")));
// Expected output: Array ["(2016)", "(01)", "(02)"]

console.log("2016-01-02".split(/-/));
// Expected output: Array ["2016", "01", "02"]
```

## Syntax

```js-nolint
regexp[Symbol.split](str)
regexp[Symbol.split](str, limit)
```

### Parameter

- `str`
  - : Das Ziel der Split-Operation.
- `limit` {{optional_inline}}
  - : Ganzzahl, die ein Limit für die Anzahl der zu findenden Splits angibt. Die `[Symbol.split]()`-Methode teilt weiterhin bei jedem Treffer des `this` RegExp-Musters (oder, in der obigen Syntax, `regexp`), bis die Anzahl der Split-Elemente dem `limit` entspricht oder der String das `this`-Muster nicht mehr erfüllt.

### Rückgabewert

Ein {{jsxref("Array")}}, das Teilstrings als Elemente enthält. Erfassungsgruppen sind eingeschlossen.

## Beschreibung

Diese Methode existiert, um das Verhalten von `split()` in `RegExp`-Unterklassen anzupassen. Sie wird intern in {{jsxref("String.prototype.split()")}} aufgerufen, wenn ein `RegExp` als Trennzeichen übergeben wird. Zum Beispiel liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Ähnlich wie [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) beginnt `[Symbol.split]()` mit der Verwendung von [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species), um einen neuen regulären Ausdruck zu konstruieren und somit eine Veränderung des ursprünglichen Regulären Ausdrucks zu vermeiden. Der Konstruktor erhält `this` und die ursprünglichen Flags, plus das `y` ("sticky") Flag, falls es ursprünglich nicht vorhanden war. Das `g` ("global") Flag ist für das Verhalten der Methode irrelevant. Standardmäßig beginnt aufgrund des Verhaltens des `RegExp()`-Konstruktors [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) bei 0.

Wenn der Zielstring leer ist und der reguläre Ausdruck leere Strings treffen kann (zum Beispiel `/a?/`), wird ein leeres Array zurückgegeben. Andernfalls, wenn der reguläre Ausdruck keinen leeren String treten kann, wird `[""]` zurückgegeben.

Die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) des regulären Ausdrucks wird wiederholt aufgerufen und der `lastIndex` wird jedes Mal erhöht, bis das Ende des Strings erreicht ist. Wenn der aktuelle Treffer ein leerer String ist oder der reguläre Ausdruck an der aktuellen Position nicht trifft (da er sticky ist), wird der `lastIndex` dennoch erhöht — wenn der reguläre Ausdruck [Unicode-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, wird er um einen Unicode-Codepunkt erhöht; andernfalls um eine UTF-16-Codeeinheit.

```js
console.log("😄".split(/(?:)/g)); // [ '\ud83d', '\ude04' ]
console.log("😄".split(/(?:)/gu)); // [ '😄' ]
```

Für jeden Treffer wird zuerst der Teilstring zwischen dem Ende des letzten übereinstimmenden Strings und dem Anfang des aktuell übereinstimmenden Strings dem Ergebnis-Array hinzugefügt. Dann werden die Werte der Erfassungsgruppen einzeln hinzugefügt. Die Länge des zurückgegebenen Arrays wird das `limit`-Parameter niemals überschreiten, falls vorhanden, während versucht wird, so nah wie möglich zu kommen. Daher mögen der letzte Treffer und seine Erfassungsgruppen möglicherweise nicht alle im zurückgegebenen Array vorhanden sein, wenn das Array bereits gefüllt ist.

Wenn es keinen erfolgreichen Treffer im gesamten String gab, wird der Zielstring unverändert zurückgegeben, in ein Array eingeschlossen.

## Beispiele

### Direkter Aufruf

Diese Methode kann auf fast dieselbe Weise verwendet werden wie {{jsxref("String.prototype.split()")}}, außer mit einem anderen `this` und einer anderen Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### Verwendung von `[Symbol.split]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.split]()`-Methode überschreiben, um das Standardverhalten anzupassen.

```js
class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => `(${x})`);
  }
}

const re = new MyRegExp("-");
const str = "2016-01-02";
const result = str.split(re); // String.prototype.split calls re[Symbol.split]().
console.log(result); // ["(2016)", "(01)", "(02)"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `RegExp.prototype[Symbol.split]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.split()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.split")}}
