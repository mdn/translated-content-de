---
title: RegExp.prototype.sticky
short-title: sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Accessor-Eigenschaft **`sticky`** von {{jsxref("RegExp")}}-Instanzen gibt an, ob für diesen regulären Ausdruck das Flag `y` verwendet wird.

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

`RegExp.prototype.sticky` hat den Wert `true`, wenn das Flag `y` verwendet wurde; andernfalls hat die Eigenschaft den Wert `false`. Das Flag `y` bewirkt, dass der reguläre Ausdruck nur an dem Index im Zielstring nach einer Übereinstimmung sucht, den die Eigenschaft {{jsxref("RegExp/lastIndex", "lastIndex")}} angibt. Anders als ein globaler regulärer Ausdruck versucht er nicht, an späteren Indizes eine Übereinstimmung zu finden.

Der Set-Accessor von `sticky` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Sowohl für reguläre Ausdrücke mit dem Sticky-Flag als auch für [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) reguläre Ausdrücke gilt:

- Die Suche nach einer Übereinstimmung beginnt bei `lastIndex`.
- Bei einer erfolgreichen Übereinstimmung wird `lastIndex` auf das Ende der Übereinstimmung gesetzt.
- Wenn `lastIndex` außerhalb der Grenzen des Strings liegt, in dem gerade gesucht wird, wird `lastIndex` auf 0 zurückgesetzt.

Bei der Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) unterscheiden sie sich jedoch darin, was bei einer fehlgeschlagenen Suche geschieht:

- Wird die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) für einen regulären Ausdruck mit dem Sticky-Flag aufgerufen und findet dieser bei `lastIndex` keine Übereinstimmung, gibt sie sofort `null` zurück und setzt `lastIndex` auf 0 zurück.
- Wird die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) für einen globalen regulären Ausdruck aufgerufen und findet dieser bei `lastIndex` keine Übereinstimmung, sucht sie ab dem nächsten Zeichen weiter. Dies wird wiederholt, bis eine Übereinstimmung gefunden oder das Ende des Strings erreicht wird.

Bei der Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) verhält sich ein regulärer Ausdruck mit sowohl dem Sticky- als auch dem Global-Flag genauso wie einer mit dem Sticky-Flag, aber ohne das Global-Flag. Da [`test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) lediglich `exec()` aufruft, ignoriert auch `test()` das Global-Flag und sucht nach Übereinstimmungen gemäß dem Sticky-Flag. Da viele andere Methoden globale reguläre Ausdrücke jedoch gesondert behandeln, ist das Global-Flag im Allgemeinen unabhängig vom Sticky-Flag.

- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) (ruft [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) auf): `y`, `g` und `gy` verhalten sich jeweils unterschiedlich.
  - Bei regulären Ausdrücken mit `y`: `matchAll()` löst eine Ausnahme aus; `[Symbol.matchAll]()` liefert das Ergebnis von `exec()` genau einmal, ohne `lastIndex` des regulären Ausdrucks zu aktualisieren.
  - Bei regulären Ausdrücken mit `g` oder `gy`: Gibt einen Iterator zurück, der eine Folge von `exec()`-Ergebnissen liefert.
- [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) (ruft [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) auf): `y`, `g` und `gy` verhalten sich jeweils unterschiedlich.
  - Bei regulären Ausdrücken mit `y`: Gibt das Ergebnis von `exec()` zurück und aktualisiert `lastIndex` des regulären Ausdrucks.
  - Bei regulären Ausdrücken mit `g` oder `gy`: Gibt ein Array mit allen `exec()`-Ergebnissen zurück.
- [`String.prototype.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) (ruft [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) auf): Das Flag `g` ist stets irrelevant.
  - Bei regulären Ausdrücken mit `y` oder `gy`: Gibt immer `0` zurück, wenn der Anfang des Strings übereinstimmt, andernfalls `-1`. `lastIndex` des regulären Ausdrucks wird beim Beenden nicht aktualisiert.
  - Bei regulären Ausdrücken mit `g`: Gibt den Index der ersten Übereinstimmung im String zurück oder `-1`, wenn keine Übereinstimmung gefunden wird.
- [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) (ruft [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) auf): `y`, `g` und `gy` verhalten sich gleich.
- [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) (ruft [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) auf): `y`, `g` und `gy` verhalten sich jeweils unterschiedlich.
  - Bei regulären Ausdrücken mit `y`: Ersetzt einmal an der aktuellen Position von `lastIndex` und aktualisiert `lastIndex`.
  - Bei regulären Ausdrücken mit `g` oder `gy`: Ersetzt alle durch `exec()` gefundenen Übereinstimmungen.
- [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) (ruft [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) auf): `y`, `g` und `gy` verhalten sich jeweils unterschiedlich.
  - Bei regulären Ausdrücken mit `y`: `replaceAll()` löst eine Ausnahme aus.
  - Bei regulären Ausdrücken mit `g` oder `gy`: Ersetzt alle durch `exec()` gefundenen Übereinstimmungen.

## Beispiele

### Einen regulären Ausdruck mit dem Sticky-Flag verwenden

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### Sticky-Flag mit Anfangsanker

Über mehrere Versionen hinweg hatte die SpiderMonkey-Engine von Firefox [einen Fehler](https://bugzil.la/773687) im Zusammenhang mit der Assertion `^` und dem Sticky-Flag. Dadurch konnten Ausdrücke, die mit der Assertion `^` begannen und das Sticky-Flag verwendeten, Übereinstimmungen finden, obwohl sie das nicht hätten tun dürfen. Der Fehler wurde irgendwann nach Firefox 3.6 eingeführt (das Sticky-Flag war dort bereits vorhanden, der Fehler jedoch nicht) und 2015 behoben. Möglicherweise wegen dieses Fehlers weist die Spezifikation [ausdrücklich darauf hin](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion), dass:

> Selbst wenn das Flag `y` mit einem Muster verwendet wird, findet `^` nur am Anfang von _Input_ eine Übereinstimmung oder (wenn _rer_.[[Multiline]] den Wert `true` hat) am Anfang einer Zeile.

Beispiele für das korrekte Verhalten:

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

- [Polyfill für das Flag `sticky` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.unicode")}}
