---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{JSRef}}

Die **`sticky`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `y` Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.sticky` hat den Wert `true`, wenn das `y` Flag verwendet wurde; andernfalls `false`. Das `y` Flag gibt an, dass der reguläre Ausdruck versucht, die Zielzeichenkette nur ab dem Index zu matchen, der durch die Eigenschaft {{jsxref("RegExp/lastIndex", "lastIndex")}} angegeben wird (und anders als ein globaler Regex nicht versucht, von späteren Indizes zu matchen).

Der Set-Zugriff von `sticky` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für sowohl sticky als auch [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Regexe gilt:

- Sie beginnen bei `lastIndex` zu matchen.
- Wenn der Match erfolgreich ist, wird `lastIndex` auf das Ende des Matches vorgerückt.
- Wenn `lastIndex` außerhalb der Grenzen der aktuell gematchten Zeichenkette liegt, wird `lastIndex` auf 0 zurückgesetzt.

Jedoch ist für die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) das Verhalten bei nicht erfolgreichem Match anders:

- Wenn die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) auf einem sticky Regex aufgerufen wird, und der Regex nicht bei `lastIndex` matched, gibt der Regex sofort `null` zurück und setzt `lastIndex` auf 0 zurück.
- Wenn die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) auf einem globalen Regex aufgerufen wird, und der Regex nicht bei `lastIndex` matched, versucht sie, vom nächsten Zeichen an zu matchen, und so weiter, bis ein Match gefunden wird oder das Ende der Zeichenkette erreicht ist.

Für die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) verhält sich ein Regex, der sowohl sticky als auch global ist, wie ein sticky und nicht globaler Regex. Da [`test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) ein einfacher Wrapper um `exec()` ist, ignoriert `test()` das globale Flag und führt ebenfalls sticky Matches durch. Aufgrund vieler anderer Methoden, die das Verhalten von globalen Regexen speziell behandeln, sind das globale und das sticky Flag im Allgemeinen orthogonal zueinander.

- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) (ruft [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: `matchAll()` wirft einen Fehler; `[Symbol.matchAll]()` gibt das `exec()`-Ergebnis genau einmal aus, ohne den `lastIndex` des Regex zu aktualisieren.
  - Für `g` oder `gy` Regexe: gibt einen Iterator zurück, der eine Sequenz von `exec()`-Ergebnissen liefert.
- [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) (ruft [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: gibt das `exec()`-Ergebnis zurück und aktualisiert den `lastIndex` des Regex.
  - Für `g` oder `gy` Regexe: gibt ein Array aller `exec()`-Ergebnisse zurück.
- [`String.prototype.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) (ruft [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) auf): das `g` Flag ist immer irrelevant.
  - Für `y` oder `gy` Regexe: gibt immer `0` zurück (wenn der Anfang der Zeichenkette passt) oder `-1` (wenn der Anfang nicht passt), ohne den `lastIndex` des Regex zu aktualisieren, wenn er endet.
  - Für `g` Regexe: gibt den Index des ersten Treffers in der Zeichenkette zurück, oder `-1`, wenn kein Treffer gefunden wurde.
- [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) (ruft [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) auf): `y`, `g` und `gy` haben alle dasselbe Verhalten.
- [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) (ruft [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: ersetzt einmal am aktuellen `lastIndex` und aktualisiert `lastIndex`.
  - Für `g` und `gy` Regexe: ersetzt alle Vorkommen, die durch `exec()` gematcht werden.
- [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) (ruft [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: `replaceAll()` wirft einen Fehler.
  - Für `g` und `gy` Regexe: ersetzt alle Vorkommen, die durch `exec()` gematcht werden.

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

Für mehrere Versionen hatte die Firefox SpiderMonkey-Engine [einen Bug](https://bugzil.la/773687) in Bezug auf die `^` Assertion und das sticky Flag, welches es ermöglicht, Ausdrücke, die mit der `^` Assertion beginnen und das sticky Flag verwenden, zu matchen, wenn sie es nicht sollten. Der Bug wurde irgendwann nach Firefox 3.6 eingeführt (welches das sticky Flag hatte, aber nicht den Bug) und 2015 behoben. Vielleicht aufgrund des Bugs spezifiziert die Spezifikation [explizit](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion), dass:

> Auch wenn das `y` Flag mit einem Muster verwendet wird, matcht `^` immer nur am Anfang von _Input_, oder (wenn _rer_.[[Multiline]] `true` ist) am Anfang einer Zeile.

Beispiele korrekten Verhaltens:

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

- [Polyfill des `sticky` Flags in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.unicode")}}
