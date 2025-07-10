---
title: RegExp.prototype[Symbol.match]()
short-title: "[Symbol.match]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`[Symbol.match]()`** Methode von {{jsxref("RegExp")}}-Instanzen gibt an, wie [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) sich verhalten soll. Zusätzlich kann ihre Anwesenheit (oder Abwesenheit) beeinflussen, ob ein Objekt als regulärer Ausdruck betrachtet wird.

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
  - : Ein {{jsxref("String")}}, der Ziel des Abgleichs ist.

### Rückgabewert

Ein {{jsxref("Array")}}, dessen Inhalt von der Anwesenheit oder Abwesenheit des globalen (`g`) Flags abhängt, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn keine Übereinstimmungen gefunden werden.

- Wenn das `g` Flag verwendet wird, werden alle Ergebnisse, die dem kompletten regulären Ausdruck entsprechen, zurückgegeben, aber Erfassungsgruppen sind nicht enthalten.
- Wenn das `g` Flag nicht verwendet wird, wird nur die erste vollständige Übereinstimmung und ihre zugehörigen Erfassungsgruppen zurückgegeben. In diesem Fall liefert `match()` das gleiche Ergebnis wie {{jsxref("RegExp.prototype.exec()")}} (ein Array mit einigen zusätzlichen Eigenschaften).

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.match()")}} aufgerufen.

Zum Beispiel geben die folgenden zwei Beispiele das gleiche Ergebnis zurück.

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

Wenn der reguläre Ausdruck global ist (mit dem `g` Flag), wird die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Methode des regulären Ausdrucks wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Andernfalls würde `exec()` nur einmal aufgerufen und dessen Ergebnis würde der Rückgabewert von `[Symbol.match]()`.

Da `[Symbol.match]()` `exec()` so lange aufruft, bis es `null` zurückgibt, und `exec()` den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des regulären Ausdrucks automatisch auf 0 zurücksetzt, wenn die letzte Übereinstimmung fehlschlägt, würde `[Symbol.match]()` typischerweise keine Nebeneffekte haben, wenn es beendet wird. Wenn der reguläre Ausdruck jedoch [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) aber nicht global ist, würde `lastIndex` nicht zurückgesetzt. In diesem Fall kann jeder Aufruf von `match()` ein anderes Ergebnis liefern.

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

Wenn der reguläre Ausdruck sticky und global ist, würde er weiterhin sticky Übereinstimmungen durchführen — d.h. er würde keine Vorkommen jenseits des `lastIndex` finden.

```js
console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]
```

Wenn die aktuelle Übereinstimmung ein leerer String ist, würde der `lastIndex` trotzdem weitergeschoben — wenn der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, würde er um einen Unicode-Codepunkt weitergeschoben; andernfalls wird er um eine UTF-16-Codeeinheit weitergeschoben.

```js
console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
console.log("😄".match(/(?:)/gu)); // [ '', '' ]
```

Diese Methode existiert, um das Abgleichverhalten innerhalb von `RegExp` Unterklassen anzupassen.

Zusätzlich wird die `[Symbol.match]`-Eigenschaft verwendet, um zu überprüfen, [ob ein Objekt ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beispiele

### Direkter Aufruf

Diese Methode kann auf _fast_ die gleiche Weise wie {{jsxref("String.prototype.match()")}} verwendet werden, außer dem unterschiedlichen `this` und der unterschiedlichen Argumentreihenfolge.

```js
const re = /\d+/g;
const str = "2016-01-02";
const result = re[Symbol.match](str);
console.log(result); // ["2016", "01", "02"]
```

### Verwendung von `[Symbol.match]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.match]()` Methode überschreiben, um das Standardverhalten zu ändern.

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

- [Polyfill von `RegExp.prototype[Symbol.match]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.match")}}
