---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`sticky`** Accessor-Eigenschaft der {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `y`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html", "taller")}}

## Beschreibung

`RegExp.prototype.sticky` hat den Wert `true`, wenn das `y`-Flag verwendet wurde; ansonsten `false`. Das `y`-Flag zeigt an, dass der reguläre Ausdruck versucht, die Zielzeichenfolge nur ab dem Index abzugleichen, der durch die Eigenschaft {{jsxref("RegExp/lastIndex", "lastIndex")}} angegeben ist (und im Gegensatz zu einem globalen Regex nicht versucht, ab späteren Indizes zu matchen).

Der set-Accessor von `sticky` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für sowohl sticky Regex als auch [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Regex gilt:

- Sie beginnen am `lastIndex` zu matchen.
- Wenn der Match erfolgreich ist, wird `lastIndex` auf das Ende des Matches fortgeschrieben.
- Wenn `lastIndex` außerhalb der Grenzen der aktuell abgeglichenen Zeichenfolge liegt, wird `lastIndex` auf 0 zurückgesetzt.

Jedoch, für die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) ist das Verhalten bei fehlgeschlagenem Abgleich unterschiedlich:

- Wenn die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) auf einem sticky Regex aufgerufen wird, gibt der Regex sofort `null` zurück und setzt `lastIndex` auf 0 zurück, wenn der Abgleich bei `lastIndex` fehlschlägt.
- Wenn die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) auf einem globalen Regex aufgerufen wird, versucht der Regex, von dem nächsten Zeichen an zu matchen, und so weiter, bis ein Match gefunden wird oder das Ende der Zeichenfolge erreicht ist.

Für die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) verhält sich ein Regex, der sowohl sticky als auch global ist, genauso wie ein sticky und nicht-globaler Regex. Da [`test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) ein einfacher Wrapper um `exec()` ist, würde `test()` das globale Flag ignorieren und ebenfalls sticky Matches durchführen. Aufgrund vieler anderer Methoden, die das Verhalten von globalen Regexen speziell behandeln, ist das globale Flag im Allgemeinen orthogonal zum sticky Flag.

- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) (welches [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: `matchAll()` wirft einen Fehler; `[Symbol.matchAll]()` liefert das Ergebnis von `exec()` genau einmal, ohne den `lastIndex` des Regex zu aktualisieren.
  - Für `g` oder `gy` Regexe: Gibt einen Iterator zurück, der eine Sequenz von `exec()`-Ergebnissen liefert.
- [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) (welches [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: Gibt das Ergebnis von `exec()` zurück und aktualisiert den `lastIndex` des Regex.
  - Für `g` oder `gy` Regexe: Gibt ein Array aller `exec()`-Ergebnisse zurück.
- [`String.prototype.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) (welches [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) aufruft): Das `g`-Flag ist immer irrelevant.
  - Für `y` oder `gy` Regexe: Gibt immer `0` (wenn der sehr Anfang der Zeichenfolge passt) oder `-1` (wenn der Anfang nicht passt) zurück, ohne den `lastIndex` des Regex beim Verlassen zu aktualisieren.
  - Für `g` Regexe: Gibt den Index des ersten Matches in der Zeichenfolge zurück, oder `-1`, wenn kein Match gefunden wird.
- [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) (welches [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) aufruft): `y`, `g` und `gy` haben alle das gleiche Verhalten.
- [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) (welches [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: Ersetzt einmal beim aktuellen `lastIndex` und aktualisiert `lastIndex`.
  - Für `g` und `gy` Regexe: Ersetzt alle Vorkommen, die von `exec()` erfasst werden.
- [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) (welches [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: `replaceAll()` wirft einen Fehler.
  - Für `g` und `gy` Regexe: Ersetzt alle Vorkommen, die von `exec()` erfasst werden.

## Beispiele

### Verwenden eines regulären Ausdrucks mit dem sticky Flag

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

Für mehrere Versionen hatte die SpiderMonkey-Engine von Firefox einen [Bug](https://bugzil.la/773687) bezüglich der `^`-Assertion und dem sticky Flag, der es ermöglichte, dass Ausdrücke, die mit der `^`-Assertion beginnen und das sticky Flag verwenden, matchten, obwohl sie es nicht sollten. Der Bug wurde irgendwann nach Firefox 3.6 (der das sticky Flag hatte, aber nicht den Bug) eingeführt und 2015 behoben. Vielleicht wegen des Bugs weist die Spezifikation [explizit darauf hin](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion), dass:

> Selbst wenn das `y`-Flag mit einem Muster verwendet wird, matcht `^` immer nur am Anfang von _Input_, oder (wenn _rer_.[[Multiline]] `true` ist) am Anfang einer Zeile.

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
