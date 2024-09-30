---
title: RegExp.prototype[Symbol.split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die Methode **`[Symbol.split]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) funktionieren soll, wenn der reguläre Ausdruck als Trennzeichen übergeben wird.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}

## Syntax

```js-nolint
regexp[Symbol.split](str)
regexp[Symbol.split](str, limit)
```

### Parameter

- `str`
  - : Das Ziel der Aufteilung.
- `limit` {{optional_inline}}
  - : Ein Integer, der ein Limit für die Anzahl der Splits angibt, die gefunden werden sollen. Die Methode `[Symbol.split]()` teilt weiterhin bei jedem Treffer von `diesem` RegExp-Muster auf (oder im obigen Syntax `regexp`), bis die Anzahl der geteilten Elemente das `limit` erreicht oder die Zeichenkette `dieses` Muster nicht mehr erfüllt.

### Rückgabewert

Ein {{jsxref("Array")}}, das Teilstrings als Elemente enthält. Erfassungsgruppen sind enthalten.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.split()")}} aufgerufen, wenn ein `RegExp` als Trennzeichen übergeben wird. Zum Beispiel geben die folgenden beiden Beispiele dasselbe Ergebnis zurück.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Diese Methode existiert, um das Verhalten von `split()` in `RegExp`-Unterklassen anzupassen.

Die Basis-Methode `RegExp.prototype[Symbol.split]()` zeigt folgende Verhaltensweisen:

- Sie beginnt mit der Verwendung von [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) zur Konstruktion eines neuen RegExp, um zu vermeiden, das ursprüngliche RegExp in irgendeiner Weise zu verändern.
- Das `g` ("global")-Flag des RegExps wird ignoriert, und das `y` ("sticky")-Flag wird immer angewendet, selbst wenn es ursprünglich nicht vorhanden war.
- Wenn die Zielzeichenfolge leer ist und der RegExp leere Zeichenfolgen matchen kann (zum Beispiel `/a?/`), wird ein leeres Array zurückgegeben. Andernfalls, wenn der RegExp keine leere Zeichenfolge matchen kann, wird `[""]` zurückgegeben.
- Das Matching erfolgt durch kontinuierliches Aufrufen von `this.exec()`. Da das RegExp immer sticky ist, bewegt es sich entlang der Zeichenfolge, wobei jedes Mal eine übereinstimmende Zeichenfolge, ein Index und alle Erfassungsgruppen geliefert werden.
- Für jeden Treffer wird der Teilstring zwischen dem Ende der letzten übereinstimmenden Zeichenfolge und dem Beginn der aktuellen übereinstimmenden Zeichenfolge zuerst zum Ergebnis-Array hinzugefügt. Dann werden die Werte der Erfassungsgruppen einzeln hinzugefügt.
- Wenn der aktuelle Treffer eine leere Zeichenfolge ist oder wenn das RegExp an der aktuellen Position (da es sticky ist) nicht matcht, wird `lastIndex` dennoch weitergeführt — wenn das RegExp [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, wird es um einen Unicode-Codepunkt erhöht; andernfalls erfolgt die Erhöhung um eine UTF-16-Codeeinheit.
- Wenn das RegExp die Zielzeichenfolge nicht matcht, wird die Zielzeichenfolge unverändert, in einem Array eingeschlossen, zurückgegeben.
- Die Länge des zurückgegebenen Arrays wird niemals das `limit`-Parameter überschreiten, falls angegeben, während versucht wird, so nah wie möglich dran zu sein. Daher können der letzte Treffer und seine Erfassungsgruppen möglicherweise nicht alle im zurückgegebenen Array vorhanden sein, wenn das Array bereits gefüllt ist.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf dieselbe Weise wie {{jsxref("String.prototype.split()")}} verwendet werden, außer dem unterschiedlichen `this` und der unterschiedlichen Argumentreihenfolge.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### Verwendung von `[Symbol.split]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die Methode `[Symbol.split]()` überschreiben, um das Standardverhalten anzupassen.

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
