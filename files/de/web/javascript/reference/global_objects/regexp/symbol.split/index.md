---
title: RegExp.prototype[Symbol.split]()
short-title: "[Symbol.split]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.split]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie sich [`String.prototype.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) verhält, wenn ein regulärer Ausdruck als Trennzeichen übergeben wird.

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
  - : Die Zeichenfolge, die aufgeteilt werden soll.
- `limit` {{optional_inline}}
  - : Eine Ganzzahl, die die maximale Anzahl der zurückgegebenen Teile angibt. Die Methode `[Symbol.split]()` teilt die Zeichenfolge weiterhin bei jedem Treffer des `this`-RegExp-Musters (oder, in der obigen Syntax, von `regexp`), bis die Anzahl der Teile `limit` erreicht oder das Muster im verbleibenden Teil der Zeichenfolge nicht mehr vorkommt.

### Rückgabewert

Ein {{jsxref("Array")}} mit Teilzeichenfolgen als Elementen. Capturing Groups sind ebenfalls enthalten.

## Beschreibung

Mit dieser Methode lässt sich das Verhalten von `split()` in `RegExp`-Unterklassen anpassen. Sie wird intern von {{jsxref("String.prototype.split()")}} aufgerufen, wenn ein `RegExp` als Trennzeichen übergeben wird. Die folgenden beiden Beispiele liefern dasselbe Ergebnis.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Wie [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) verwendet `[Symbol.split]()` zunächst [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species), um einen neuen regulären Ausdruck zu erstellen. Dadurch wird vermieden, den ursprünglichen regulären Ausdruck zu verändern. Der Konstruktor erhält `this` und die ursprünglichen Flags sowie das Flag `y` („sticky“), falls es noch nicht vorhanden ist. Das Flag `g` („global“) hat keinen Einfluss auf das Verhalten der Methode. Aufgrund des Verhaltens des `RegExp()`-Konstruktors hat [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) standardmäßig zunächst den Wert 0.

Wenn die Zeichenfolge leer ist und der reguläre Ausdruck leere Zeichenfolgen finden kann (beispielsweise `/a?/`), wird ein leeres Array zurückgegeben. Kann der reguläre Ausdruck dagegen keine leere Zeichenfolge finden, wird `[""]` zurückgegeben.

Die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) des regulären Ausdrucks wird wiederholt aufgerufen, wobei `lastIndex` jedes Mal erhöht wird, bis das Ende der Zeichenfolge erreicht ist. Wenn der aktuelle Treffer eine leere Zeichenfolge ist oder der reguläre Ausdruck an der aktuellen Position keinen Treffer liefert (da er „sticky“ ist), wird `lastIndex` dennoch erhöht: Ist der reguläre Ausdruck [Unicode-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), geschieht dies um einen Unicode-Codepunkt, andernfalls um eine UTF-16-Codeeinheit.

```js
console.log("😄".split(/(?:)/g)); // [ '\ud83d', '\ude04' ]
console.log("😄".split(/(?:)/gu)); // [ '😄' ]
```

Für jeden Treffer wird zunächst die Teilzeichenfolge zwischen dem Ende des vorherigen Treffers und dem Anfang des aktuellen Treffers an das Ergebnis-Array angehängt. Anschließend werden die Werte der Capturing Groups einzeln angehängt. Die Länge des zurückgegebenen Arrays überschreitet den Parameter `limit` nicht, sofern er angegeben wurde; zugleich wird versucht, möglichst nahe an diesen Wert heranzukommen. Daher sind der letzte Treffer und seine Capturing Groups möglicherweise nicht vollständig im zurückgegebenen Array enthalten, wenn es bereits gefüllt ist.

Wenn an keiner Stelle der Zeichenfolge ein Treffer gefunden wurde, wird die ursprüngliche Zeichenfolge unverändert in einem Array zurückgegeben.

## Beispiele

### Direkter Aufruf

Diese Methode kann fast genauso wie {{jsxref("String.prototype.split()")}} verwendet werden. Allerdings unterscheiden sich `this` und die Reihenfolge der Argumente.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### `[Symbol.split]()` in Unterklassen verwenden

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

- [Polyfill für `RegExp.prototype[Symbol.split]` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("String.prototype.split()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.split")}}
