---
title: RegExp.prototype[Symbol.match]()
short-title: "[Symbol.match]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match
l10n:
  sourceCommit: 07758d01509695fe45ccc3f7687f6597dc3d9e2a
---

Die **`[Symbol.match]()`** Methode von {{jsxref("RegExp")}} Instanzen definiert, wie [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) sich verhalten soll. Außerdem kann seine Anwesenheit (oder Abwesenheit) beeinflussen, ob ein Objekt als regulärer Ausdruck betrachtet wird.

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
  - : Ein {{jsxref("String")}}, der das Ziel des Abgleichs ist.

### Rückgabewert

Ein {{jsxref("Array")}}, dessen Inhalt von der Anwesenheit oder Abwesenheit des globalen (`g`) Flags abhängt, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn keine Treffer gefunden werden.

- Wenn das `g` Flag verwendet wird, werden alle Ergebnisse zurückgegeben, die dem vollständigen regulären Ausdruck entsprechen, aber Capturing-Gruppen sind nicht enthalten.
- Wenn das `g` Flag nicht verwendet wird, wird nur der erste vollständige Treffer und die zugehörigen Capturing-Gruppen zurückgegeben. In diesem Fall liefert `match()` dasselbe Ergebnis wie {{jsxref("RegExp.prototype.exec()")}} (ein Array mit einigen zusätzlichen Eigenschaften).

## Beschreibung

Diese Methode existiert, um das Abgleichsverhalten in `RegExp`-Unterklassen anzupassen. Sie wird intern in {{jsxref("String.prototype.match()")}} aufgerufen. Zum Beispiel geben die folgenden zwei Beispiele dasselbe Ergebnis zurück.

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

Wenn der reguläre Ausdruck global ist (mit dem `g` Flag), wird sein [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) zuerst auf 0 gesetzt, sodass das Matching immer am Anfang des Strings beginnt. Die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) wird wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Wenn der aktuelle Treffer ein leerer String ist, würde `lastIndex` trotzdem erhöht werden — wenn der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, würde er um einen Unicode-Codepunkt erhöht werden; andernfalls wird er um eine UTF-16-Codeeinheit erhöht.

```js
console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
console.log("😄".match(/(?:)/gu)); // [ '', '' ]
```

Wenn der reguläre Ausdruck nicht global ist, würde `exec()` nur einmal aufgerufen werden und sein Ergebnis wird der Rückgabewert von `[Symbol.match]()`.

Die Methode `exec()` setzt `lastIndex` automatisch auf 0 zurück, wenn der letzte Abgleich fehlschlägt, sodass `[Symbol.match]()` in der Regel keine Nebenwirkungen erzeugt, wenn `lastIndex` bei 0 startet. Wenn der reguläre Ausdruck jedoch [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky), aber nicht global ist, wird `exec()` nur einmal aufgerufen und setzt `lastIndex` nicht zurück, falls der Abgleich erfolgreich war. In diesem Fall kann jeder Aufruf von `match()` ein unterschiedliches Ergebnis liefern.

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

Wenn der reguläre Ausdruck sticky und global ist, würde er dennoch sticky Abgleiche durchführen — das heißt, er würde scheitern, Übereinstimmungen jenseits des `lastIndex` zu finden.

```js
console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]
```

Außerdem wird die Eigenschaft `[Symbol.match]` verwendet, um zu überprüfen, [ob ein Objekt ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beispiele

### Direkter Aufruf

Diese Methode kann auf _fast_ die gleiche Weise wie {{jsxref("String.prototype.match()")}} verwendet werden, mit Ausnahme des unterschiedlichen `this` und der abweichenden Argumentreihenfolge.

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
