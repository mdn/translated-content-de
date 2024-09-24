---
title: RegExp.prototype[Symbol.split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.split]()`**-Methode von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) funktionieren soll, wenn der reguläre Ausdruck als Trennzeichen übergeben wird.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}

## Syntax

```js-nolint
regexp[Symbol.split](str)
regexp[Symbol.split](str, limit)
```

### Parameter

- `str`
  - : Das Ziel der Split-Operation.
- `limit` {{optional_inline}}
  - : Ein Integer, der eine Begrenzung für die Anzahl der zu findenden Splits angibt. Die `[Symbol.split]()`-Methode teilt weiterhin bei jeder Übereinstimmung dieses RegExp-Musters (oder, in der obigen Syntax, `regexp`), bis die Anzahl der Splitelemente dem `limit` entspricht oder der String nicht mehr dem Muster entspricht.

### Rückgabewert

Ein {{jsxref("Array")}}, das Teilstrings als Elemente enthält. Erfasste Gruppen werden eingeschlossen.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.split()")}} aufgerufen, wenn ein `RegExp` als Trennzeichen übergeben wird. Zum Beispiel liefern die folgenden beiden Beispiele dasselbe Ergebnis.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Diese Methode existiert, um das Verhalten von `split()` in `RegExp`-Unterklassen anzupassen.

Die Basismethode `RegExp.prototype[Symbol.split]()` zeigt die folgenden Verhaltensweisen:

- Sie verwendet zunächst [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species), um ein neues RegExp zu konstruieren und so zu vermeiden, das ursprüngliche RegExp in irgendeiner Weise zu verändern.
- Das `g` ("global") Flag des RegExp wird ignoriert, und das `y` ("sticky") Flag wird immer angewendet, auch wenn es ursprünglich nicht vorhanden war.
- Wenn der Zielstring leer ist und das RegExp leere Strings übereinstimmen kann (zum Beispiel `/a?/`), wird ein leeres Array zurückgegeben. Andernfalls, wenn das RegExp keinen leeren String übereinstimmen kann, wird `[""]` zurückgegeben.
- Die Übereinstimmung erfolgt, indem `this.exec()` kontinuierlich aufgerufen wird. Da das RegExp immer sticky ist, wird es entlang des Strings bewegt und jedes Mal ein übereinstimmender String, Index und eventuelle erfasste Gruppen zurückgegeben.
- Für jedes Match wird zuerst der Teilstring zwischen dem Ende des letzten übereinstimmenden Strings und dem Beginn des aktuellen übereinstimmenden Strings an das Ergebnisarray angehängt. Dann werden die Werte der erfassten Gruppen einzeln angehängt.
- Wenn das aktuelle Match ein leerer String ist oder das RegExp an der aktuellen Position nicht übereinstimmt (da es sticky ist), wird der `lastIndex` dennoch erhöht — wenn das RegExp [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, wird es um einen Unicode-Codepunkt erhöht; andernfalls erhöht es sich um eine UTF-16-Codeeinheit.
- Wenn das RegExp den Zielstring nicht übereinstimmt, wird der Zielstring unverändert als Array zurückgegeben.
- Die Länge des zurückgegebenen Arrays überschreitet niemals den `limit`-Parameter, falls angegeben, während versucht wird, so nah wie möglich zu kommen. Daher sind das letzte Match und seine erfassten Gruppen möglicherweise nicht alle im zurückgegebenen Array enthalten, wenn das Array bereits gefüllt ist.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf die gleiche Weise wie {{jsxref("String.prototype.split()")}} verwendet werden, außer dem unterschiedlichen `this` und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### Verwendung von `[Symbol.split]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.split]()`-Methode überschreiben, um das Standardverhalten zu ändern.

```js
class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => `(${x})`);
  }
}

const re = new MyRegExp("-");
const str = "2016-01-02";
const result = str.split(re); // String.prototype.split ruft re[Symbol.split]() auf.
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
