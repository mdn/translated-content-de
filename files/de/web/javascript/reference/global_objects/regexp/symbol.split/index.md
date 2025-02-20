---
title: RegExp.prototype[Symbol.split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`[Symbol.split]()`**-Methode von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) funktionieren soll, wenn der reguläre Ausdruck als Trennzeichen übergeben wird.

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

console.log("2016-01-02".split(new RegExp("-")));
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
  - : Eine Ganzzahl, die eine Begrenzung für die Anzahl der gefundenen Splits angibt. Die `[Symbol.split]()`-Methode teilt dennoch bei jedem Treffer des `this` RegExp-Musters (oder wie oben in der Syntax beschrieben des `regexp`), bis die Anzahl der geteilten Elemente dem `limit` entspricht oder der String keinem `this`-Muster mehr entspricht.

### Rückgabewert

Ein {{jsxref("Array")}}, das Unterstrings als Elemente enthält. Capturing Groups werden einbezogen.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.split()")}} aufgerufen, wenn ein `RegExp` als Trennzeichen verwendet wird. Zum Beispiel liefern die folgenden zwei Beispiele das gleiche Ergebnis.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Diese Methode existiert, um das Verhalten von `split()` in `RegExp`-Subklassen anzupassen.

Die `RegExp.prototype[Symbol.split]()`-Basismethode weist die folgenden Verhaltensweisen auf:

- Sie verwendet [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species), um ein neues RegExp zu erstellen, wodurch verhindert wird, dass das ursprüngliche RegExp in irgendeiner Weise verändert wird.
- Das `g`- ("global")-Flag des RegExp wird ignoriert, und das `y`- ("sticky")-Flag wird immer angewendet, auch wenn es ursprünglich nicht vorhanden war.
- Wenn der Zielstring leer ist und das RegExp leere Strings treffen kann (zum Beispiel `/a?/`), wird ein leeres Array zurückgegeben. Andernfalls, wenn das RegExp mit einem leeren String nicht übereinstimmen kann, wird `[""]` zurückgegeben.
- Die Übereinstimmung erfolgt durch kontinuierliche Aufrufe von `this.exec()`. Da das RegExp immer sticky ist, bewegt es sich entlang des Strings und gibt jedes Mal einen passenden String, einen Index und alle capturing groups zurück.
- Für jede Übereinstimmung wird zuerst der Substring zwischen dem Ende des zuletzt gematchten Strings und dem Anfang des aktuell gematchten Strings zum Ergebnis-Array hinzugefügt. Anschließend werden die Werte der capturing groups einzeln hinzugefügt.
- Wenn der aktuelle Treffer ein leerer String ist oder das RegExp an der aktuellen Position nicht übereinstimmt (da es sticky ist), wird der `lastIndex` dennoch vorgerückt — falls das RegExp [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, um einen Unicode-Codepunkt; andernfalls um eine UTF-16-Codeeinheit.
- Wenn das RegExp nicht mit dem Zielstring übereinstimmt, wird der Zielstring unverändert in ein Array eingebettet zurückgegeben.
- Die Länge des zurückgegebenen Arrays wird niemals das angegebene `limit`-Parameter überschreiten (falls vorhanden), wobei trotzdem versucht wird, so nah wie möglich heranzukommen. Daher können der letzte Treffer und dessen capturing groups möglicherweise nicht vollständig im zurückgegebenen Array enthalten sein, wenn das Array bereits gefüllt ist.

## Beispiele

### Direkter Aufruf

Diese Methode kann nahezu genauso genutzt werden wie {{jsxref("String.prototype.split()")}}, mit Ausnahme des unterschiedlichen `this` und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### Verwendung von `[Symbol.split]()` in Subklassen

Subklassen von {{jsxref("RegExp")}} können die `[Symbol.split]()`-Methode überschreiben, um das Standardverhalten zu ändern.

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
