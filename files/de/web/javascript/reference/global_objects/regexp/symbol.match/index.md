---
title: RegExp.prototype[Symbol.match]()
short-title: "[Symbol.match]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match
l10n:
  sourceCommit: 5b3aa7e4e8cd54f1b662534d8c97074e522b7fc4
---

Die **`[Symbol.match]()`** Methode der {{jsxref("RegExp")}} Instanzen spezifiziert, wie [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) sich verhalten soll. Zusätzlich kann ihre Anwesenheit (oder Abwesenheit) beeinflussen, ob ein Objekt als regulärer Ausdruck betrachtet wird.

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
  - : Ein {{jsxref("String")}}, der das Ziel des Matches ist.

### Rückgabewert

Ein {{jsxref("Array")}}, dessen Inhalt von der Anwesenheit oder Abwesenheit des globalen (`g`) Flags abhängt, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn keine Übereinstimmungen gefunden werden.

- Wenn das `g` Flag verwendet wird, werden alle Ergebnisse, die mit dem vollständigen regulären Ausdruck übereinstimmen, zurückgegeben, aber keine Capture-Gruppen sind enthalten.
- Wenn das `g` Flag nicht verwendet wird, wird nur die erste vollständige Übereinstimmung und ihre zugehörigen Capture-Gruppen zurückgegeben. In diesem Fall gibt `match()` dasselbe Ergebnis wie {{jsxref("RegExp.prototype.exec()")}} zurück (ein Array mit einigen zusätzlichen Eigenschaften).

## Beschreibung

Diese Methode existiert zur Anpassung des Match-Verhaltens innerhalb von `RegExp`-Unterklassen. Sie wird intern in {{jsxref("String.prototype.match()")}} aufgerufen. Zum Beispiel liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

Wenn der Regex global ist (mit dem `g` Flag), wird sein [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) zuerst auf 0 gesetzt, sodass das Matching immer vom Anfang des Strings beginnt, und die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) des Regex wird wiederholt aufgerufen, bis `exec()` `null` zurückgibt. Wenn die aktuelle Übereinstimmung eine leere Zeichenkette ist, würde der `lastIndex` trotzdem weiter geschoben — wenn der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, würde er um einen Unicode-Codepunkte weiter schieben; andernfalls schiebt er um eine UTF-16-Codeeinheit weiter.

```js
console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
console.log("😄".match(/(?:)/gu)); // [ '', '' ]
```

Wenn der Regex nicht global ist, würde `exec()` nur einmal aufgerufen und sein Ergebnis wird der Rückgabewert von `[Symbol.match]()`.

Die `exec()` Methode setzt `lastIndex` automatisch auf 0 zurück, wenn die letzte Übereinstimmung fehlschlägt, sodass für globale Regexe mit `lastIndex`, der bei 0 beginnt, `[Symbol.match]()` im Allgemeinen keine Nebeneffekte erzeugt. Wenn der Regex jedoch [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) ist, aber nicht global, wird `exec()` nur einmal aufgerufen und setzt daher `lastIndex` nicht zurück, wenn die Übereinstimmung erfolgreich war. In diesem Fall kann jeder Aufruf von `match()` ein anderes Ergebnis liefern.

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

Wenn der Regex sticky und global ist, würde er trotzdem sticky Matches durchführen — d.h. er würde keine Vorkommen jenseits des `lastIndex` finden.

```js
console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]
```

Darüber hinaus wird die `[Symbol.match]` Eigenschaft verwendet, um [zu prüfen, ob ein Objekt ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beispiele

### Direkter Aufruf

Diese Methode kann auf _fast_ dieselbe Weise wie {{jsxref("String.prototype.match()")}} verwendet werden, außer der unterschiedlichen `this` und der unterschiedlichen Argumentreihenfolge.

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
