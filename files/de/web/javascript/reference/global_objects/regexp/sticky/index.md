---
title: RegExp.prototype.sticky
short-title: sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`sticky`** Accessor-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `y`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.sticky", "taller")}}

```js interactive-example
const str1 = "table football";
const regex1 = /foo/y;

regex1.lastIndex = 6;

console.log(regex1.sticky);
// Expected output: true

console.log(regex1.test(str1));
// Expected output: true

console.log(regex1.test(str1));
// Expected output: false
```

## Beschreibung

`RegExp.prototype.sticky` hat den Wert `true`, wenn das `y`-Flag verwendet wurde; andernfalls `false`. Das `y`-Flag gibt an, dass der Regex versucht, die Zielzeichenkette nur ab dem Index abzugleichen, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft angegeben ist (und anders als ein globaler Regex versucht er nicht, ab späteren Indizes abzugleichen).

Der Set-Accessor von `sticky` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Sowohl bei sticky-Regexen als auch bei [globalen](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Regexen:

- Beginnen sie den Abgleich bei `lastIndex`.
- Wenn der Abgleich erfolgreich ist, wird `lastIndex` auf das Ende des Abgleichs vorgerückt.
- Wenn `lastIndex` außerhalb der Grenzen der derzeit abgeglichenen Zeichenkette liegt, wird `lastIndex` auf 0 zurückgesetzt.

Jedoch ist das Verhalten der Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) bei einem fehlgeschlagenen Abgleich unterschiedlich:

- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode auf einen sticky-Regex angewendet wird und der Regex daran scheitert, bei `lastIndex` zu matchen, gibt der Regex sofort `null` zurück und setzt `lastIndex` auf 0 zurück.
- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode auf einen globalen Regex angewendet wird und der Regex daran scheitert, bei `lastIndex` zu matchen, versucht er, ab dem nächsten Zeichen abzugleichen, und so weiter, bis ein Abgleich gefunden oder das Ende der Zeichenkette erreicht ist.

Für die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Methode verhält sich ein Regex, der sowohl sticky als auch global ist, wie ein sticky und nicht-globaler Regex. Da [`test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) ein einfacher Wrapper um `exec()` ist, ignoriert `test()` das globale Flag und führt ebenfalls sticky-Abgleiche durch. Jedoch ist wegen der vielen anderen Methoden, die das Verhalten von globalen Regexen speziell behandeln, das globale Flag im Allgemeinen orthogonal zum sticky-Flag.

- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) (die [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Regexe: `matchAll()` wirft einen Fehler; `[Symbol.matchAll]()` liefert das `exec()`-Ergebnis genau einmal, ohne den `lastIndex` des Regex zu aktualisieren.
  - Für `g` oder `gy`-Regexe: gibt einen Iterator zurück, der eine Folge von `exec()`-Ergebnissen liefert.
- [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) (die [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Regexe: gibt das `exec()`-Ergebnis zurück und aktualisiert den `lastIndex` des Regex.
  - Für `g` oder `gy`-Regexe: gibt ein Array aller `exec()`-Ergebnisse zurück.
- [`String.prototype.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) (die [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) aufruft): das `g`-Flag ist immer irrelevant.
  - Für `y` oder `gy`-Regexe: gibt immer `0` (wenn der Anfang der Zeichenkette übereinstimmt) oder `-1` (wenn der Anfang nicht übereinstimmt) zurück, ohne `lastIndex` des Regex zu aktualisieren, wenn der Suchvorgang beendet ist.
  - Für `g`-Regexe: gibt den Index des ersten Treffers in der Zeichenkette zurück oder `-1`, wenn kein Treffer gefunden wird.
- [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) (die [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) aufruft): `y`, `g` und `gy` haben alle das gleiche Verhalten.
- [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) (die [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Regexe: ersetzt einmal an der aktuellen `lastIndex`-Position und aktualisiert `lastIndex`.
  - Für `g` und `gy`-Regexe: ersetzt alle Vorkommen, die von `exec()` abgeglichen werden.
- [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) (die [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Regexe: `replaceAll()` wirft einen Fehler.
  - Für `g` und `gy`-Regexe: ersetzt alle Vorkommen, die von `exec()` abgeglichen werden.

## Beispiele

### Einen regulären Ausdruck mit dem sticky-Flag verwenden

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### Verankertes sticky-Flag

Über mehrere Versionen hinweg hatte die SpiderMonkey-Engine von Firefox [einen Bug](https://bugzil.la/773687) bezüglich der `^`-Assertion und des sticky-Flags, der es ermöglichte, dass Ausdrücke, die mit der `^`-Assertion beginnen und das sticky-Flag verwenden, übereinstimmen, wenn sie es nicht sollten. Der Bug wurde irgendwann nach Firefox 3.6 (das das sticky-Flag hatte, aber nicht den Bug) eingeführt und 2015 behoben. Vielleicht aufgrund des Bugs hebt die Spezifikation [speziell hervor](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion), dass:

> Selbst wenn das `y`-Flag mit einem Muster verwendet wird, stimmt `^` nur am Anfang von _Eingabe_ überein, oder (wenn _rer_.[[Multiline]] `true` ist) am Anfang einer Zeile.

Beispiele für korrektes Verhalten:

```js
const regex = /^foo/y;
regex.lastIndex = 2;
regex.test("..foo"); // false - index 2 is not the beginning of the string

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

- [Polyfill des `sticky`-Flags in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.unicode")}}
