---
title: RegExp.prototype.sticky
short-title: sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`sticky`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `y`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.sticky` hat den Wert `true`, wenn das `y`-Flag verwendet wurde; andernfalls `false`. Das `y`-Flag zeigt an, dass der reguläre Ausdruck versucht, die Zielzeichenkette nur ab dem durch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft angegebenen Index zu matchen (und im Gegensatz zu einem globalen regulären Ausdruck nicht versucht, ab späteren Indizes zu matchen).

Der Set-Zugriffsfunktionsrichtwert von `sticky` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für sowohl sticky als auch [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) reguläre Ausdrücke gilt:

- Sie beginnen das Matchen bei `lastIndex`.
- Wenn das Match erfolgreich ist, wird `lastIndex` auf das Ende des Matches vorgesetzt.
- Wenn `lastIndex` außerhalb der Grenzen der aktuell gematchten Zeichenkette liegt, wird `lastIndex` auf 0 zurückgesetzt.

Allerdings verhält sich die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode anders, wenn das Matchen fehlschlägt:

- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode auf einen sticky-Regulären Ausdruck aufgerufen wird und der Ausdruck bei `lastIndex` nicht matcht, gibt der reguläre Ausdruck sofort `null` zurück und setzt `lastIndex` auf 0 zurück.
- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode auf einen globalen regulären Ausdruck aufgerufen wird und der Ausdruck bei `lastIndex` nicht matcht, versucht sie, ab dem nächsten Zeichen zu matchen und so weiter, bis ein Match gefunden oder das Ende der Zeichenkette erreicht ist.

Für die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode verhält sich ein regulärer Ausdruck, der sowohl sticky als auch global ist, genauso wie ein sticky und nicht-globaler regulärer Ausdruck. Da [`test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) ein einfacher Wrapper um `exec()` ist, würde `test()` das globale Flag ignorieren und ebenfalls sticky Matches durchführen. Aufgrund vieler anderer Methoden, die das Verhalten globaler regulärer Ausdrücke speziell behandeln, ist das globale Flag im Allgemeinen orthogonal zum sticky-Flag.

- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) (welches [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Reguläre Ausdrücke: `matchAll()` wirft einen Fehler; `[Symbol.matchAll]()` liefert das `exec()` Ergebnis genau einmal, ohne den `lastIndex` des regulären Ausdrucks zu aktualisieren.
  - Für `g` oder `gy` reguläre Ausdrücke: gibt einen Iterator zurück, der eine Sequenz von `exec()`-Ergebnissen liefert.
- [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) (welches [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Reguläre Ausdrücke: gibt das `exec()`-Ergebnis zurück und aktualisiert den `lastIndex` des regulären Ausdrucks.
  - Für `g` oder `gy` reguläre Ausdrücke: gibt ein Array aller `exec()`-Ergebnisse zurück.
- [`String.prototype.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) (welches [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) aufruft): Das `g`-Flag ist immer irrelevant.
  - Für `y` oder `gy` reguläre Ausdrücke: gibt immer `0` zurück (wenn der sehr Anfang der Zeichenkette matcht) oder `-1` (wenn der Anfang nicht matcht), ohne den `lastIndex` des regulären Ausdrucks beim Beenden zu aktualisieren.
  - Für `g` reguläre Ausdrücke: Gibt den Index des ersten Matches in der Zeichenkette zurück oder `-1`, wenn kein Match gefunden wird.
- [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) (welches [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) aufruft): `y`, `g` und `gy` haben alle dasselbe Verhalten.
- [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) (welches [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Reguläre Ausdrücke: Ersetzt einmal am aktuellen `lastIndex` und aktualisiert `lastIndex`.
  - Für `g` und `gy` reguläre Ausdrücke: Ersetzt alle Vorkommen, die von `exec()` gematcht werden.
- [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) (welches [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufruft): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Reguläre Ausdrücke: `replaceAll()` wirft einen Fehler.
  - Für `g` und `gy` reguläre Ausdrücke: Ersetzt alle Vorkommen, die von `exec()` gematcht werden.

## Beispiele

### Verwenden eines regulären Ausdrucks mit dem sticky-Flag

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

Für mehrere Versionen hatte die SpiderMonkey-Engine von Firefox einen [Fehler](https://bugzil.la/773687) in Bezug auf die `^`-Assertion und das sticky-Flag, das es Ausdrücken erlaubte, die mit der `^`-Assertion begannen und das sticky-Flag verwendeten, zu matchen, wenn sie es nicht sollten. Der Fehler wurde einige Zeit nach Firefox 3.6 eingeführt (das das sticky-Flag hatte, aber nicht den Fehler) und 2015 behoben. Vielleicht wegen des Fehlers weist die Spezifikation [explizit darauf hin](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion), dass:

> Auch wenn das `y`-Flag mit einem Muster verwendet wird, matcht `^` immer nur am Anfang von _Input_, oder (wenn _rer_.[[Multiline]] `true` ist) am Anfang einer Zeile.

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
