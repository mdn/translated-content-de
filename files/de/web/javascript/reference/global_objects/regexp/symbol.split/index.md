---
title: RegExp.prototype[Symbol.split]()
short-title: "[Symbol.split]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`[Symbol.split]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) sich verhalten soll, wenn der reguläre Ausdruck als Trennzeichen übergeben wird.

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
  - : Ganzzahl, die eine Begrenzung der Anzahl der zu findenden Splits angibt. Die Methode `[Symbol.split]()` teilt dennoch bei jeder Übereinstimmung des Musters `this` (`regexp` im obigen Syntax), bis die Anzahl der geteilten Elemente dem `limit` entspricht oder der String nicht mehr mit dem Muster `this` übereinstimmt.

### Rückgabewert

Ein {{jsxref("Array")}}, das Teilstrings als Elemente enthält. Erfassungsgruppen sind enthalten.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.split()")}} aufgerufen, wenn ein `RegExp` als Trennzeichen übergeben wird. Zum Beispiel liefern die folgenden beiden Beispiele das gleiche Ergebnis.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Diese Methode existiert, um das Verhalten von `split()` in `RegExp`-Unterklassen zu ändern.

Die Basis-Methode `RegExp.prototype[Symbol.split]()` weist die folgenden Verhaltensweisen auf:

- Sie beginnt, indem sie [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) verwendet, um ein neues RegExp zu erstellen, wodurch vermieden wird, dass das ursprüngliche RegExp in irgendeiner Weise verändert wird.
- Das `g`-Flag ("global") des RegExps wird ignoriert, und das `y`-Flag ("sticky") wird immer angewendet, auch wenn es ursprünglich nicht vorhanden war.
- Wenn der Zielstring leer ist und das RegExp leere Strings abgleichen kann (zum Beispiel `/a?/`), wird ein leeres Array zurückgegeben. Ansonsten, wenn das RegExp keinen leeren String abgleichen kann, wird `[""]` zurückgegeben.
- Das Matching erfolgt durch kontinuierliches Aufrufen von `this.exec()`. Da das RegExp immer sticky ist, bewegt es sich entlang des Strings und liefert jedes Mal einen übereinstimmenden String, einen Index und alle Erfassungsgruppen.
- Für jeden Match wird zuerst der Teilstring zwischen dem Ende des letzten übereinstimmenden Strings und dem Anfang des aktuellen übereinstimmenden Strings dem Ergebnis-Array hinzugefügt. Danach werden die Werte der Erfassungsgruppen einzeln angehängt.
- Wenn der aktuelle Match ein leerer String ist oder wenn das RegExp an der aktuellen Position (da es sticky ist) nicht übereinstimmt, würde `lastIndex` dennoch weitergeschoben — wenn das RegExp [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, würde es um einen Unicode-Codepunkt verschoben; andernfalls erhöht es um ein UTF-16 Code-Einheit.
- Wenn das RegExp nicht mit dem Zielstring übereinstimmt, wird der Zielstring unverändert als Array zurückgegeben.
- Die Länge des zurückgegebenen Arrays wird niemals den übergebenen `limit`-Parameter überschreiten, falls vorhanden, während versucht wird, so nah wie möglich heranzukommen. Daher können der letzte Match und seine Erfassungsgruppen möglicherweise nicht vollständig im zurückgegebenen Array vorhanden sein, wenn das Array bereits voll ist.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf die gleiche Weise wie {{jsxref("String.prototype.split()")}} verwendet werden, außer dem unterschiedlichen `this` und der anderen Anordnung der Argumente.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### Verwendung von `[Symbol.split]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die Methode `[Symbol.split]()` überschreiben, um das Standardverhalten zu ändern.

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
