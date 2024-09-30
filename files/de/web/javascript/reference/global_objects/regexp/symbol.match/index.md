---
title: RegExp.prototype[Symbol.match]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die Methode **`[Symbol.match]()`** von {{jsxref("RegExp")}} Instanzen legt fest, wie [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) funktionieren soll. Außerdem kann ihre Anwesenheit (oder Abwesenheit) beeinflussen, ob ein Objekt als regulärer Ausdruck angesehen wird.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@match.html")}}

## Syntax

```js-nolint
regexp[Symbol.match](str)
```

### Parameter

- `str`
  - : Ein {{jsxref("String")}}, der das Ziel des Abgleichs ist.

### Rückgabewert

Ein {{jsxref("Array")}}, dessen Inhalt von der Anwesenheit oder Abwesenheit des globalen (`g`) Flags abhängt, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn keine Übereinstimmungen gefunden werden.

- Wenn das `g`-Flag verwendet wird, werden alle Ergebnisse zurückgegeben, die dem vollständigen regulären Ausdruck entsprechen, jedoch sind keine erfassten Gruppen enthalten.
- Wenn das `g`-Flag nicht verwendet wird, wird nur die erste vollständige Übereinstimmung und ihre zugehörigen erfassten Gruppen zurückgegeben. In diesem Fall liefert `match()` dasselbe Ergebnis wie {{jsxref("RegExp.prototype.exec()")}} (ein Array mit einigen zusätzlichen Eigenschaften).

## Beschreibung

Diese Methode wird intern bei {{jsxref("String.prototype.match()")}} aufgerufen.

Zum Beispiel liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

Wenn das Regex global ist (mit dem `g`-Flag), wird die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) des Regulären Ausdrucks wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Andernfalls würde `exec()` nur einmal aufgerufen und dessen Ergebnis wird der Rückgabewert von `[Symbol.match]()`.

Da `[Symbol.match]()` `exec()` aufruft, bis es `null` zurückgibt, und `exec()` automatisch den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des Regex auf 0 zurücksetzt, wenn der letzte Abgleich fehlschlägt, hätte `[Symbol.match]()` typischerweise keine Nebenwirkungen beim Beenden. Wenn der Regex jedoch [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) aber nicht global ist, wird der `lastIndex` nicht zurückgesetzt. In diesem Fall kann jeder Aufruf von `match()` ein anderes Ergebnis liefern.

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

Wenn der Regex sticky und global ist, führt er weiterhin Sticky-Abgleiche durch — d.h. es wird keine Übereinstimmungen jenseits des `lastIndex` geben.

```js
console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]
```

Wenn die aktuelle Übereinstimmung ein leerer String ist, wird der `lastIndex` trotzdem weitergeschaltet — wenn der Regex [Unicode-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, wird er um einen Unicode-Codepunkt erhöht; andernfalls wird er um eine UTF-16-Codeeinheit erhöht.

```js
console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
console.log("😄".match(/(?:)/gu)); // [ '', '' ]
```

Diese Methode existiert, um das Abgleichsverhalten innerhalb von `RegExp`-Unterklassen anzupassen.

Zusätzlich wird die Eigenschaft `[Symbol.match]` verwendet, um zu prüfen [ob ein Objekt ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beispiele

### Direkter Aufruf

Diese Methode kann _fast_ auf die gleiche Weise wie {{jsxref("String.prototype.match()")}} verwendet werden, abgesehen von dem unterschiedlichen `this` und der unterschiedlichen Reihenfolge der Argumente.

```js
const re = /[0-9]+/g;
const str = "2016-01-02";
const result = re[Symbol.match](str);
console.log(result); // ["2016", "01", "02"]
```

### Verwendung von `[Symbol.match]()` in Unterklassen

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

const re = new MyRegExp("([0-9]+)-([0-9]+)-([0-9]+)");
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

- [Polyfill von `RegExp.prototype[Symbol.match]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.match")}}
