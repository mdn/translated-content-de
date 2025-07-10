---
title: RegExp.prototype[Symbol.split]()
short-title: "[Symbol.split]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`[Symbol.split]()`**-Methode von {{jsxref("RegExp")}}-Instanzen spezifiziert, wie [`String.prototype.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) funktionieren soll, wenn der reguläre Ausdruck als Trennzeichen übergeben wird.

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
- `limit` {{Optional_inline}}
  - : Ein Integer, der ein Limit für die Anzahl an gefundener Teilungen angibt. Die `[Symbol.split]()`-Methode teilt weiterhin bei jedem Treffer des `this`-RegExp-Musters (oder, in der oben stehenden Syntax, `regexp`), bis die Anzahl der Teilungselemente das `limit` erreicht oder der String nicht mehr dem `this`-Muster entspricht.

### Rückgabewert

Ein {{jsxref("Array")}}, das Teilstrings als seine Elemente enthält. Erfasste Gruppen sind enthalten.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.split()")}} aufgerufen, wenn ein `RegExp` als Trennzeichen übergeben wird. Zum Beispiel liefern die folgenden beiden Beispiele das gleiche Ergebnis.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Diese Methode existiert, um das Verhalten von `split()` in `RegExp`-Unterklassen anzupassen.

Die `RegExp.prototype[Symbol.split]()` Basismethode zeigt die folgenden Verhaltensweisen:

- Sie beginnt, indem sie [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) verwendet, um ein neues RegExp zu erstellen, wodurch verhindert wird, dass das ursprüngliche RegExp in irgendeiner Weise verändert wird.
- Das `g` ("global")-Flag des RegExp wird ignoriert, und das `y` ("sticky")-Flag wird immer angewendet, selbst wenn es ursprünglich nicht vorhanden war.
- Wenn der Zielstring leer ist und das RegExp leere Strings abgleichen kann (zum Beispiel `/a?/`), wird ein leeres Array zurückgegeben. Andernfalls wird, wenn das RegExp keinen leeren String abgleichen kann, `[""]` zurückgegeben.
- Die Übereinstimmung erfolgt, indem kontinuierlich `this.exec()` aufgerufen wird. Da das RegExp immer sticky ist, bewegt es sich entlang des Strings und liefert jedes Mal einen übereinstimmenden String, einen Index und alle erfassten Gruppen.
- Für jede Übereinstimmung wird zunächst der Teilstring zwischen dem Ende des letzten übereinstimmenden Strings und dem Anfang des aktuell übereinstimmenden Strings dem Ergebnisarray hinzugefügt. Danach werden die Werte der erfassten Gruppen einzeln hinzugefügt.
- Wenn die aktuelle Übereinstimmung ein leerer String ist oder wenn das RegExp bei der aktuellen Position nicht übereinstimmt (da es sticky ist), wird der `lastIndex` dennoch verschoben - wenn das Regex [Unicode-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, wird um einen Unicode-Codepunkt verschoben; andernfalls um eine UTF-16-Codeeinheit.
- Wenn das RegExp nicht mit dem Zielstring übereinstimmt, wird der Zielstring unverändert in ein Array gewrappt zurückgegeben.
- Die Länge des zurückgegebenen Arrays übersteigt niemals den `limit` Parameter, falls angegeben, während versucht wird, so nah wie möglich zu sein. Daher können die letzte Übereinstimmung und ihre erfassten Gruppen möglicherweise nicht alle im zurückgegebenen Array enthalten sein, wenn das Array bereits gefüllt ist.

## Beispiele

### Direkter Aufruf

Diese Methode kann auf fast die gleiche Weise verwendet werden wie
{{jsxref("String.prototype.split()")}}, außer dem unterschiedlichen `this` und der
unterschiedlichen Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### Verwendung von `[Symbol.split]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.split]()`-Methode überschreiben, um
das Standardverhalten zu verändern.

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
