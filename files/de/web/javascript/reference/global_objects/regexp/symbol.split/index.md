---
title: RegExp.prototype[Symbol.split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.split]()`**-Methode von Instanzen des {{jsxref("RegExp")}} gibt an, wie [`String.prototype.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) sich verhalten soll, wenn der reguläre Ausdruck als Trennzeichen übergeben wird.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}

## Syntax

```js-nolint
regexp[Symbol.split](str)
regexp[Symbol.split](str, limit)
```

### Parameter

- `str`
  - : Das Ziel der Auftrennung.
- `limit` {{optional_inline}}
  - : Ganzzahl, die eine Begrenzung der Anzahl von zu findenden Aufteilungen angibt. Die `[Symbol.split]()`-Methode teilt immer noch bei jedem Treffer des `this` RegExp-Musters (oder im obigen Syntaxteil `regexp`), bis die Anzahl der geteilten Elemente dem `limit` entspricht oder der String das Muster nicht mehr erfüllt.

### Rückgabewert

Ein {{jsxref("Array")}}, das Teilstrings als seine Elemente enthält. Erfasste Gruppen sind enthalten.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.split()")}} aufgerufen, wenn ein `RegExp` als Trennzeichen übergeben wird. Zum Beispiel liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Diese Methode existiert, um das Verhalten von `split()` in `RegExp`-Unterklassen anzupassen.

Die Basismethode `RegExp.prototype[Symbol.split]()` zeigt folgende Verhaltensweisen:

- Sie beginnt, indem [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) verwendet wird, um einen neuen Regexp zu erstellen, wodurch eine Veränderung des ursprünglichen Regexp vermieden wird.
- Das `g`-Flag ("global") des Regexp wird ignoriert, und das `y`-Flag ("sticky") wird immer angewendet, auch wenn es ursprünglich nicht vorhanden war.
- Wenn der Zielstring leer ist und der Regexp leere Strings abgleichen kann (z. B. `/a?/`), wird ein leeres Array zurückgegeben. Andernfalls, wenn der Regexp keinen leeren String abgleichen kann, wird `[""]` zurückgegeben.
- Der Abgleich erfolgt durch fortlaufendes Aufrufen von `this.exec()`. Da der Regexp immer sticky ist, bewegt sich dieser entlang des Strings und liefert jedes Mal einen übereinstimmenden String, einen Index und etwaige erfasste Gruppen.
- Für jeden Treffer wird zuerst der Teilstring zwischen dem Ende des zuletzt übereinstimmenden Strings und dem Anfang des aktuell übereinstimmenden Strings dem Ergebnisarray hinzugefügt. Dann werden die Werte der erfassten Gruppen einzeln hinzugefügt.
- Wenn der aktuelle Treffer ein leerer String ist oder wenn der Regexp an der aktuellen Position nicht übereinstimmt (da er sticky ist), wird `lastIndex` trotzdem weiter erhoben – wenn der Regexp [unicodebewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, würde es um einen Unicode-Codepunkt erhöht; andernfalls wird es um eine UTF-16-Codeeinheit erhöht.
- Wenn der Regexp nicht mit dem Zielstring übereinstimmt, wird der Zielstring unverändert zurückgegeben, in ein Array eingewickelt.
- Die Länge des zurückgegebenen Arrays überschreitet niemals den `limit`-Parameter, falls angegeben, während sie versucht, so nah wie möglich zu sein. Daher könnten der letzte Treffer und seine erfassten Gruppen im zurückgegebenen Array nicht alle enthalten sein, wenn das Array bereits gefüllt ist.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast auf die gleiche Weise verwendet werden wie
{{jsxref("String.prototype.split()")}}, außer dass `this` und die
Reihenfolge der Argumente unterschiedlich sind.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### Verwendung von `[Symbol.split]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.split]()`-Methode überschreiben, um
das Standardverhalten zu ändern.

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
