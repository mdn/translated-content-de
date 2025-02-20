---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`sticky`** Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das `y`-Flag mit diesem regulären Ausdruck verwendet wird.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.sticky", "taller")}}

```js interactive-example
const str1 = "table football";
const regex1 = new RegExp("foo", "y");

regex1.lastIndex = 6;

console.log(regex1.sticky);
// Expected output: true

console.log(regex1.test(str1));
// Expected output: true

console.log(regex1.test(str1));
// Expected output: false
```

## Beschreibung

`RegExp.prototype.sticky` hat den Wert `true`, wenn das `y`-Flag verwendet wurde; ansonsten `false`. Das `y`-Flag zeigt an, dass der reguläre Ausdruck nur ab dem Index übereinstimmen soll, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft angegeben wird (und im Gegensatz zu einem globalen regulären Ausdruck nicht versucht, ab späteren Indizes zu übereinstimmen).

Der Set-Accessor von `sticky` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Sowohl für sticky als auch für [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) reguläre Ausdrücke gilt:

- Sie beginnen mit dem Abgleich bei `lastIndex`.
- Wenn die Übereinstimmung erfolgreich ist, wird `lastIndex` bis zum Ende der Übereinstimmung vorgerückt.
- Wenn `lastIndex` außerhalb der Grenzen der aktuell abgeglichenen Zeichenkette liegt, wird `lastIndex` auf 0 zurückgesetzt.

Für die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode ist das Verhalten bei fehlgeschlagener Übereinstimmung jedoch unterschiedlich:

- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode auf einen sticky regulären Ausdruck angewendet wird, gibt der reguläre Ausdruck sofort `null` zurück und setzt `lastIndex` auf 0 zurück, wenn er bei `lastIndex` nicht übereinstimmt.
- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode auf einen globalen regulären Ausdruck angewendet wird, versucht der reguläre Ausdruck, ab dem nächsten Zeichen und so weiter zu übereinstimmen, bis eine Übereinstimmung gefunden wird oder das Ende der Zeichenkette erreicht ist.

Für die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode verhält sich ein regulärer Ausdruck, der sowohl sticky als auch global ist, genauso wie ein nicht-globaler sticky Regulärer Ausdruck. Da [`test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) ein einfacher Wrapper um `exec()` ist, ignoriert `test()` das globale Flag und führt ebenfalls sticky Abstimmungen durch. Aufgrund vieler anderer Methoden, die das Verhalten globaler regulärer Ausdrücke speziell behandeln, ist das globale Flag im Allgemeinen unabhängig vom sticky Flag.

- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) (ruft [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Ausdrücke: `matchAll()` löst einen Fehler aus; `[Symbol.matchAll]()` gibt das `exec()`-Ergebnis genau einmal zurück, ohne den `lastIndex` des Regulären Ausdrucks zu aktualisieren.
  - Für `g`- oder `gy`-Ausdrücke: Gibt einen Iterator zurück, der eine Sequenz von `exec()`-Ergebnissen liefert.
- [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) (ruft [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Ausdrücke: Gibt das `exec()`-Ergebnis zurück und aktualisiert den `lastIndex` des Regulären Ausdrucks.
  - Für `g`- oder `gy`-Ausdrücke: Gibt ein Array aller `exec()`-Ergebnisse zurück.
- [`String.prototype.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) (ruft [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) auf): Das `g`-Flag ist immer irrelevant.
  - Für `y`- oder `gy`-Ausdrücke: Gibt immer `0` zurück (wenn der Anfang der Zeichenkette übereinstimmt) oder `-1` (wenn der Anfang nicht übereinstimmt), ohne den `lastIndex` des Regulären Ausdrucks zu aktualisieren, wenn es beendet wird.
  - Für `g`-Ausdrücke: Gibt den Index der ersten Übereinstimmung in der Zeichenkette zurück oder `-1`, wenn keine Übereinstimmung gefunden wird.
- [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) (ruft [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) auf): `y`, `g` und `gy` haben das gleiche Verhalten.
- [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) (ruft [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Ausdrücke: Ersetzt einmal an der aktuellen Position von `lastIndex` und aktualisiert `lastIndex`.
  - Für `g`- und `gy`-Ausdrücke: Ersetzt alle Übereinstimmungen, die von `exec()` gefunden werden.
- [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) (ruft [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y`-Ausdrücke: `replaceAll()` löst einen Fehler aus.
  - Für `g`- und `gy`-Ausdrücke: Ersetzt alle Übereinstimmungen, die von `exec()` gefunden werden.

## Beispiele

### Verwendung eines regulären Ausdrucks mit dem sticky-Flag

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

In mehreren Versionen hatte die SpiderMonkey-Engine von Firefox [einen Bug](https://bugzil.la/773687) in Bezug auf die `^`-Assertion und das sticky-Flag, der es Ausdrücken mit beginnender `^`-Assertion und sticky-Flag erlaubte, übereinzustimmen, wenn sie es eigentlich nicht sollten. Der Fehler wurde irgendwann nach Firefox 3.6 eingeführt (das das sticky-Flag hatte, aber nicht den Bug) und 2015 behoben. Möglicherweise wegen dieses Fehlers hebt die Spezifikation [explizit hervor](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion), dass:

> Auch wenn das `y`-Flag mit einem Muster verwendet wird, stimmt `^` immer nur am Anfang von _Input_ oder (wenn _rer_.[[Multiline]] `true` ist) am Anfang einer Zeile überein.

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
