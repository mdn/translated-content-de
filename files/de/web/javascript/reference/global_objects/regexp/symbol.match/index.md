---
title: RegExp.prototype[Symbol.match]()
short-title: "[Symbol.match]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.match]()`** von {{jsxref("RegExp")}}-Instanzen legt fest, wie sich [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) verhält. Darüber hinaus kann das Vorhandensein (oder Fehlen) dieser Methode beeinflussen, ob ein Objekt als regulärer Ausdruck betrachtet wird.

{{InteractiveExample("JavaScript Demo: RegExp.prototype[Symbol.match]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (result) {
      return "VALID";
    }
    return "INVALID";
  }
}

console.log("2012-07-02".match(new RegExp1("(\\d+)-(\\d+)-(\\d+)")));
// Expected output: "VALID"
```

## Syntax

```js-nolint
regexp[Symbol.match](str)
```

### Parameter

- `str`
  - : Ein {{jsxref("String")}}, in dem nach Übereinstimmungen gesucht wird.

### Rückgabewert

Ein {{jsxref("Array")}}, dessen Inhalt davon abhängt, ob das globale Flag (`g`) vorhanden ist, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn keine Übereinstimmungen gefunden werden.

- Wenn das Flag `g` verwendet wird, werden alle Ergebnisse zurückgegeben, die mit dem vollständigen regulären Ausdruck übereinstimmen. Capturing Groups sind jedoch nicht enthalten.
- Wenn das Flag `g` nicht verwendet wird, werden nur die erste vollständige Übereinstimmung und die zugehörigen Capturing Groups zurückgegeben. In diesem Fall gibt `match()` dasselbe Ergebnis wie {{jsxref("RegExp.prototype.exec()")}} zurück (ein Array mit einigen zusätzlichen Eigenschaften).

## Beschreibung

Diese Methode dient dazu, das Verhalten bei der Suche nach Übereinstimmungen in `RegExp`-Unterklassen anzupassen. Sie wird intern von {{jsxref("String.prototype.match()")}} aufgerufen. Beispielsweise liefern die folgenden beiden Ausdrücke dasselbe Ergebnis.

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

Wenn der reguläre Ausdruck global ist (also das Flag `g` besitzt), wird sein [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) zunächst auf 0 gesetzt. Dadurch beginnt die Suche nach Übereinstimmungen immer am Anfang der Zeichenfolge. Anschließend wird die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) des regulären Ausdrucks wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Wenn die aktuelle Übereinstimmung eine leere Zeichenfolge ist, wird `lastIndex` trotzdem erhöht: Ist der reguläre Ausdruck [Unicode-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), erfolgt die Erhöhung um einen Unicode-Codepunkt, andernfalls um eine UTF-16-Codeeinheit.

```js
console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
console.log("😄".match(/(?:)/gu)); // [ '', '' ]
```

Wenn der reguläre Ausdruck nicht global ist, wird `exec()` nur einmal aufgerufen. Sein Ergebnis ist dann der Rückgabewert von `[Symbol.match]()`.

Die Methode `exec()` setzt `lastIndex` automatisch auf 0 zurück, wenn die letzte Suche nach einer Übereinstimmung fehlschlägt. Daher hat `[Symbol.match]()` bei globalen regulären Ausdrücken, deren `lastIndex` anfangs 0 ist, im Allgemeinen keine Nebenwirkungen. Wenn der reguläre Ausdruck jedoch [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky), aber nicht global ist, wird `exec()` nur einmal aufgerufen und setzt `lastIndex` nach einer erfolgreichen Übereinstimmung daher nicht zurück. In diesem Fall kann jeder Aufruf von `match()` ein anderes Ergebnis liefern.

```js
const re = /[abc]/y;
for (let i = 0; i < 5; i++) {
  console.log("abc".match(re), re.lastIndex);
}
// [ 'a' ] 1
// [ 'b' ] 2
// [ 'c' ] 3
// null 0
// [ 'a' ] 1
```

Wenn der reguläre Ausdruck sowohl sticky als auch global ist, sucht er weiterhin nur an der durch `lastIndex` vorgegebenen Position nach Übereinstimmungen. Eine Suche nach weiteren Vorkommen jenseits von `lastIndex` findet also nicht statt.

```js
console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]
```

Außerdem wird die Eigenschaft `[Symbol.match]` verwendet, um zu prüfen, [ob ein Objekt ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beispiele

### Direkter Aufruf

Diese Methode kann _fast_ genauso verwendet werden wie {{jsxref("String.prototype.match()")}}. Allerdings unterscheiden sich `this` und die Reihenfolge der Argumente.

```js
const re = /\d+/g;
const str = "2016-01-02";
const result = re[Symbol.match](str);
console.log(result); // ["2016", "01", "02"]
```

### `[Symbol.match]()` in Unterklassen verwenden

Unterklassen von {{jsxref("RegExp")}} können die Methode `[Symbol.match]()` überschreiben, um das Standardverhalten zu ändern.

```js
class MyRegExp extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      },
    };
  }
}

const re = new MyRegExp("(\\d+)-(\\d+)-(\\d+)");
const str = "2016-01-02";
const result = str.match(re); // String.prototype.match calls re[Symbol.match]().
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `RegExp.prototype[Symbol.match]` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.match")}}
