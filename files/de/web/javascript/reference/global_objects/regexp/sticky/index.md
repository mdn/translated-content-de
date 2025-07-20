---
title: RegExp.prototype.sticky
short-title: sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`sticky`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `y`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.sticky", "taller")}}

```js interactive-example
const str = "table football";
const regex = /foo/y;

regex.lastIndex = 6;

console.log(regex.sticky);
// Expected output: true

console.log(regex.test(str));
// Expected output: true

console.log(regex.test(str));
// Expected output: false
```

## Beschreibung

`RegExp.prototype.sticky` hat den Wert `true`, wenn das `y`-Flag verwendet wurde; andernfalls `false`. Das `y`-Flag zeigt an, dass der reguläre Ausdruck versucht, die Zielzeichenfolge nur vom durch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft angegebenen Index aus zu matchen (und im Gegensatz zu einem globalen regulären Ausdruck nicht versucht, von späteren Indizes zu matchen).

Der Set-Zugang von `sticky` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für sowohl sticky als auch [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) reguläre Ausdrücke gilt:

- Sie beginnen das Matching bei `lastIndex`.
- Wenn das Matching erfolgreich ist, wird `lastIndex` zum Ende des Matches vorgerückt.
- Wenn `lastIndex` außerhalb des Bereichs der aktuell gematchten Zeichenfolge liegt, wird `lastIndex` auf 0 zurückgesetzt.

Jedoch ist das Verhalten, wenn das Matching fehlschlägt, für die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Methode unterschiedlich:

- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Methode auf einem sticky regulären Ausdruck aufgerufen wird und der reguläre Ausdruck beim `lastIndex` kein Match findet, gibt der reguläre Ausdruck sofort `null` zurück und setzt `lastIndex` auf 0 zurück.
- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Methode auf einem globalen regulären Ausdruck aufgerufen wird und der reguläre Ausdruck beim `lastIndex` kein Match findet, versucht sie, vom nächsten Zeichen aus zu matchen, und so weiter, bis ein Match gefunden wird oder das Ende der Zeichenkette erreicht ist.

Für die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Methode verhält sich ein regulärer Ausdruck, der sowohl sticky als auch global ist, genauso wie ein sticky und nicht globaler regulärer Ausdruck. Da [`test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) ein einfacher Wrapper um `exec()` ist, würde `test()` das globale Flag ignorieren und ebenfalls sticky Matches durchführen. Allerdings ist das globale Flag aufgrund vieler anderer Methoden, die speziell das Verhalten globaler regulärer Ausdrücke behandeln, im Allgemeinen orthogonal zum sticky Flag.

- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) (welches [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-reguläre Ausdrücke: `matchAll()` wirft einen Fehler; `[Symbol.matchAll]()` gibt das `exec()` Ergebnis genau einmal zurück, ohne den `lastIndex` des regulären Ausdrucks zu aktualisieren.
  - Für `g`- oder `gy`-reguläre Ausdrücke: gibt einen Iterator zurück, der eine Folge von `exec()` Ergebnissen liefert.
- [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) (welches [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-reguläre Ausdrücke: gibt das `exec()` Ergebnis zurück und aktualisiert den `lastIndex` des regulären Ausdrucks.
  - Für `g`- oder `gy`-reguläre Ausdrücke: gibt ein Array aller `exec()` Ergebnisse zurück.
- [`String.prototype.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) (welches [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) aufruft): das `g`-Flag ist immer irrelevant.
  - Für `y`- oder `gy`-reguläre Ausdrücke: gibt immer `0` (wenn der Anfang der Zeichenkette matcht) oder `-1` (wenn der Anfang nicht matcht) zurück, ohne den `lastIndex` des regulären Ausdrucks beim Verlassen zu aktualisieren.
  - Für `g`-reguläre Ausdrücke: gibt den Index des ersten Matches in der Zeichenkette oder `-1` zurück, wenn kein Match gefunden wird.
- [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) (welches [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) aufruft): `y`, `g` und `gy` haben alle dasselbe Verhalten.
- [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) (welches [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-reguläre Ausdrücke: ersetzt einmal beim aktuellen `lastIndex` und aktualisiert `lastIndex`.
  - Für `g`- und `gy`-reguläre Ausdrücke: ersetzt alle Vorkommen, die von `exec()` gematcht werden.
- [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) (welches [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-reguläre Ausdrücke: `replaceAll()` wirft einen Fehler.
  - Für `g`- und `gy`-reguläre Ausdrücke: ersetzt alle Vorkommen, die von `exec()` gematcht werden.

## Beispiele

### Verwendung eines regulären Ausdrucks mit dem sticky Flag

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### Verankertes sticky Flag

In mehreren Versionen hatte Firefox's SpiderMonkey-Engine [einen Fehler](https://bugzil.la/773687) in Bezug auf die `^`-Assertion und das sticky Flag, der es ermöglichte, dass Ausdrücke, die mit der `^`-Assertion beginnen und das sticky Flag verwenden, matchen konnten, wenn sie es nicht sollten. Der Fehler wurde einige Zeit nach Firefox 3.6 eingeführt (welches das sticky Flag, aber nicht den Fehler hatte) und 2015 behoben. Vielleicht wegen des Fehlers hebt die Spezifikation [ausdrücklich hervor](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion), dass:

> Selbst wenn das `y` Flag mit einem Muster verwendet wird, matcht `^` immer nur am Anfang von _Input_, oder (wenn _rer_.[[Multiline]] `true` ist) am Anfang einer Zeile.

Beispiele für korrektes Verhalten:

```js
const regex1 = /^foo/y;
regex1.lastIndex = 2;
regex1.test("..foo"); // false - index 2 is not the beginning of the string

const regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test("..foo"); // false - index 2 is not the beginning of the string or line
regex2.lastIndex = 2;
regex2.test(".\nfoo"); // true - index 2 is the beginning of a line
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des `sticky` Flags in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.unicode")}}
