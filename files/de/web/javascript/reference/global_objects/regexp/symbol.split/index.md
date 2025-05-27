---
title: RegExp.prototype[Symbol.split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
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
  - : Das Ziel der Teilungsoperation.
- `limit` {{optional_inline}}
  - : Ganzzahl, die eine Begrenzung der Anzahl der gefundenen Teilungen angibt. Die Methode `[Symbol.split]()` teilt bei jedem Treffer von `diesem` regulären Ausdrucksmuster (oder, in der obigen Syntax, `regexp`), bis die Anzahl der geteilten Elemente das `limit` erreicht oder der String nicht mehr das Muster erfüllt.

### Rückgabewert

Ein {{jsxref("Array")}}, das Teilstrings als Elemente enthält. Eingefangene Gruppen werden einbezogen.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.split()")}} aufgerufen, wenn ein `RegExp` als Trennzeichen übergeben wird. Zum Beispiel liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Diese Methode existiert, um das Verhalten von `split()` in `RegExp`-Unterklassen anzupassen.

Die Basismethode `RegExp.prototype[Symbol.split]()` zeigt die folgenden Verhaltensweisen:

- Sie beginnt mit dem Verwenden von [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species), um einen neuen Regulären Ausdruck zu erstellen, und vermeidet so jede Veränderung des ursprünglichen regulären Ausdrucks.
- Das `g` ("global")-Flag des regulären Ausdrucks wird ignoriert, und das `y` ("sticky")-Flag wird immer angewendet, auch wenn es ursprünglich nicht vorhanden war.
- Wenn der Zielstring leer ist und der reguläre Ausdruck leere Strings treffen kann (zum Beispiel `/a?/`), wird ein leeres Array zurückgegeben. Andernfalls, wenn der reguläre Ausdruck keinen leeren String treffen kann, wird `[""]` zurückgegeben.
- Die Übereinstimmung erfolgt, indem kontinuierlich `this.exec()` aufgerufen wird. Da der reguläre Ausdruck immer sticky ist, bewegt er sich entlang des Strings, wobei er jedes Mal einen passenden String, Index und alle eingefangenen Gruppen liefert.
- Für jeden Treffer wird zuerst der Teilstring zwischen dem Ende des letzten Übereinstimmungsstrings und dem Anfang des aktuellen Übereinstimmungsstrings dem Ergebnisarray hinzugefügt. Dann werden die Werte der eingefangenen Gruppen einzeln hinzugefügt.
- Wenn der aktuelle Treffer ein leerer String ist oder der reguläre Ausdruck an der aktuellen Position nicht trifft (da er sticky ist), wird der `lastIndex` trotzdem vorgerückt — wenn der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, wird er um einen Unicode-Codepunkt vorgerückt; ansonsten um eine UTF-16-Codeeinheit.
- Wenn der reguläre Ausdruck den Zielstring nicht trifft, wird der Zielstring unverändert in einem Array zurückgegeben.
- Die Länge des zurückgegebenen Arrays wird nie die `limit`-Grenze überschreiten, wenn angegeben, während versucht wird, so nah wie möglich daran zu kommen. Daher könnten der letzte Treffer und seine eingefangenen Gruppen möglicherweise nicht alle im zurückgegebenen Array enthalten sein, wenn das Array bereits gefüllt ist.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf die gleiche Weise wie {{jsxref("String.prototype.split()")}} verwendet werden, außer der unterschiedlichen `this`-Referenz und der anderen Reihenfolge der Argumente.

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
