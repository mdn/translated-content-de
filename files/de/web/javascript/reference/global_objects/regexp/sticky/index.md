---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`sticky`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt an, ob das `y` Flag bei diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html", "taller")}}

## Beschreibung

`RegExp.prototype.sticky` hat den Wert `true`, wenn das `y` Flag verwendet wurde; andernfalls `false`. Das `y` Flag zeigt an, dass der Regex versucht, die Zielzeichenkette nur von dem Index aus zu matchen, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft angegeben wird (und im Gegensatz zu einem globalen Regex nicht versucht, von späteren Indizes aus zu matchen).

Der Set-Accessor von `sticky` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für sowohl sticky Regexe als auch [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Regexe gilt:

- Sie beginnen das Matching bei `lastIndex`.
- Wenn das Matching erfolgreich ist, wird `lastIndex` bis zum Ende des Matches erhöht.
- Wenn `lastIndex` außerhalb der Grenzen der derzeit gematchten Zeichenkette liegt, wird `lastIndex` auf 0 zurückgesetzt.

Jedoch, für die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Methode, ist das Verhalten bei einem fehlgeschlagenen Match unterschiedlich:

- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Methode auf einem sticky Regex aufgerufen wird, und der Regex bei `lastIndex` nicht matchen kann, gibt der Regex sofort `null` zurück und setzt `lastIndex` auf 0 zurück.
- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Methode auf einem globalen Regex aufgerufen wird, und der Regex bei `lastIndex` nicht matchen kann, versucht er, ab dem nächsten Zeichen zu matchen, und so weiter, bis ein Match gefunden wird oder das Ende der Zeichenkette erreicht ist.

Für die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Methode verhält sich ein Regex, der sowohl sticky als auch global ist, wie ein sticky und nicht globaler Regex. Da [`test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) ein einfacher Wrapper um `exec()` ist, würde `test()` das globale Flag ignorieren und auch sticky Matches durchführen. Aufgrund der speziellen Behandlung des Verhaltens globaler Regexe durch viele andere Methoden ist das globale Flag im Allgemeinen orthogonal zum sticky Flag.

- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) (welches [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: `matchAll()` wirft einen Fehler; `[Symbol.matchAll]()` liefert das `exec()` Ergebnis genau einmal, ohne den `lastIndex` des Regex zu aktualisieren.
  - Für `g` oder `gy` Regexe: gibt einen Iterator zurück, der eine Folge von `exec()` Ergebnissen liefert.
- [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) (welches [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: gibt das `exec()` Ergebnis zurück und aktualisiert den `lastIndex` des Regex.
  - Für `g` oder `gy` Regexe: gibt ein Array aller `exec()` Ergebnisse zurück.
- [`String.prototype.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) (welches [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) aufruft): das `g` Flag ist immer irrelevant.
  - Für `y` oder `gy` Regexe: gibt immer `0` (wenn der sehr Beginn der Zeichenkette matcht) oder `-1` (wenn der Beginn nicht matcht) zurück, ohne den `lastIndex` des Regex zu aktualisieren, wenn es beendet ist.
  - Für `g` Regexe: gibt den Index des ersten Matches in der Zeichenkette zurück, oder `-1`, wenn kein Match gefunden wird.
- [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) (welches [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) aufruft): `y`, `g` und `gy` haben alle dasselbe Verhalten.
- [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) (welches [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: ersetzt einmal am aktuellen `lastIndex` und aktualisiert `lastIndex`.
  - Für `g` und `gy` Regexe: ersetzt alle Vorkommen, die von `exec()` gematcht werden.
- [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) (welches [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regexe: `replaceAll()` wirft einen Fehler.
  - Für `g` und `gy` Regexe: ersetzt alle Vorkommen, die von `exec()` gematcht werden.

## Beispiele

### Verwenden eines regulären Ausdrucks mit dem sticky Flag

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex wird mit sticky Flag berücksichtigt)
regex.lastIndex; // 0 (nach fehlgeschlagenem Match zurückgesetzt)
```

### Verankerung des sticky Flags

Für mehrere Versionen hatte die SpiderMonkey-Engine von Firefox [einen Fehler](https://bugzil.la/773687) in Bezug auf die `^`-Assertion und das sticky Flag, der es Ausdrücken mit `^`-Assertion und sticky Flag erlaubte zu matchen, wenn sie es nicht sollten. Der Fehler wurde einige Zeit nach Firefox 3.6 (das das sticky Flag hatte, aber nicht den Fehler) eingeführt und 2015 behoben. Vielleicht aufgrund des Fehlers weist die Spezifikation [speziell darauf hin](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion), dass:

> Selbst wenn das `y` Flag mit einem Muster verwendet wird, matcht `^` immer nur am Anfang von _Input_ oder (wenn _rer_.[[Multiline]] `true` ist) am Anfang einer Zeile.

Beispiele für korrektes Verhalten:

```js
const regex = /^foo/y;
regex.lastIndex = 2;
regex.test("..foo"); // false - Index 2 ist nicht der Anfang der Zeichenkette

const regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test("..foo"); // false - Index 2 ist nicht der Anfang der Zeichenkette oder Zeile
regex2.lastIndex = 2;
regex2.test(".\nfoo"); // true - Index 2 ist der Anfang einer Zeile
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
