---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`sticky`** Zugriffseigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `y`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html", "taller")}}

## Beschreibung

`RegExp.prototype.sticky` hat den Wert `true`, wenn das `y`-Flag verwendet wurde; andernfalls `false`. Das `y`-Flag zeigt an, dass der reguläre Ausdruck versucht, die Zielzeichenfolge nur ab dem Index abzugleichen, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft angegeben wird (und im Gegensatz zu einem globalen Regex, versucht nicht, von späteren Indizes abzugleichen).

Der Set-Zugriff von `sticky` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für sowohl sticky Regex als auch [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Regex:

- Sie beginnen mit dem Abgleich bei `lastIndex`.
- Wenn der Abgleich erfolgreich ist, wird `lastIndex` auf das Ende des Abgleichs verschoben.
- Wenn `lastIndex` außerhalb der Grenzen der derzeit abgeglichenen Zeichenfolge liegt, wird `lastIndex` auf 0 zurückgesetzt.

Beim [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode ist das Verhalten bei einem fehlschlagenden Abgleich unterschiedlich:

- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode bei einem sticky Regex aufgerufen wird und der Regex den Abgleich bei `lastIndex` nicht schafft, gibt der Regex sofort `null` zurück und setzt `lastIndex` auf 0 zurück.
- Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode bei einem globalen Regex aufgerufen wird und der Regex den Abgleich bei `lastIndex` nicht schafft, versucht es, ab dem nächsten Zeichen abzugleichen, und so weiter, bis ein Abgleich gefunden wird oder das Ende der Zeichenfolge erreicht ist.

Für die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode verhält sich ein Regex, das sowohl sticky als auch global ist, wie ein sticky und nicht-globales Regex. Da [`test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) ein einfacher Wrapper um `exec()` ist, würde `test()` das globale Flag ignorieren und ebenfalls sticky-Abgleiche durchführen. Aufgrund vieler anderer Methoden, die das Verhalten von globalen Regexen speziell behandeln, ist das globale Flag im Allgemeinen orthogonal zum sticky Flag.

- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) (ruft [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regex: `matchAll()` wirft einen Fehler; `[Symbol.matchAll]()` gibt das `exec()`-Ergebnis genau einmal zurück, ohne den `lastIndex` des Regex zu aktualisieren.
  - Für `g` oder `gy` Regex: Gibt einen Iterator zurück, der eine Sequenz von `exec()`-Ergebnissen liefert.
- [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) (ruft [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regex: Gibt das `exec()`-Ergebnis zurück und aktualisiert den `lastIndex` des Regex.
  - Für `g` oder `gy` Regex: Gibt ein Array aller `exec()`-Ergebnisse zurück.
- [`String.prototype.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) (ruft [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) auf): das `g`-Flag ist immer irrelevant.
  - Für `y` oder `gy` Regex: Gibt immer `0` zurück (wenn der Anfang der Zeichenfolge übereinstimmt) oder `-1` (wenn der Anfang nicht übereinstimmt), ohne den `lastIndex` des Regex bei Beendigung zu aktualisieren.
  - Für `g` Regex: Gibt den Index der ersten Übereinstimmung in der Zeichenfolge zurück oder `-1`, wenn keine Übereinstimmung gefunden wird.
- [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) (ruft [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) auf): `y`, `g` und `gy` verhalten sich gleich.
- [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) (ruft [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regex: Ersetzt einmal am aktuellen `lastIndex` und aktualisiert `lastIndex`.
  - Für `g` und `gy` Regex: Ersetzt alle Vorkommen, die von `exec()` abgeglichen werden.
- [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) (ruft [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) auf): `y`, `g` und `gy` sind alle unterschiedlich.
  - Für `y` Regex: `replaceAll()` wirft einen Fehler.
  - Für `g` und `gy` Regex: Ersetzt alle Vorkommen, die von `exec()` abgeglichen werden.

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

Für mehrere Versionen hatte die SpiderMonkey-Engine von Firefox [einen Fehler](https://bugzil.la/773687) in Bezug auf die `^`-Assertion und das sticky-Flag, der es Ausdrücken, die mit der `^`-Assertion beginnen und das sticky-Flag verwenden, erlaubte, Übereinstimmungen zu finden, wenn sie es nicht sollten. Der Fehler wurde irgendwann nach Firefox 3.6 eingeführt (welches das sticky-Flag hatte, aber nicht den Fehler) und 2015 behoben. Vielleicht wegen des Fehlers ruft die Spezifikation [explizit](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion) den Fakt auf:

> Auch wenn das `y`-Flag mit einem Muster verwendet wird, passt `^` immer nur am Anfang von _Input_ oder (wenn _rer_.[[Multiline]] `true` ist) am Anfang einer Zeile.

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
