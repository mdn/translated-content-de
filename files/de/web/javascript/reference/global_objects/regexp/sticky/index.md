---
title: RegExp.prototype.sticky
short-title: sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Die **`sticky`**-Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob für diesen regulären Ausdruck das `y`-Flag verwendet wird.

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

`RegExp.prototype.sticky` hat den Wert `true`, wenn das `y`-Flag verwendet wurde, andernfalls `false`. Das `y`-Flag bewirkt, dass der reguläre Ausdruck nur an der durch die Eigenschaft {{jsxref("RegExp/lastIndex", "lastIndex")}} angegebenen Position im Zielstring nach einer Übereinstimmung sucht. Anders als ein globaler regulärer Ausdruck versucht er nicht, an späteren Positionen eine Übereinstimmung zu finden.

Der Set-Accessor von `sticky` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Aus historischen Gründen gilt `RegExp.prototype.sticky === undefined`, obwohl `RegExp.prototype` keine `RegExp`-Instanz ist. (Man würde erwarten, dass der Getter einen `TypeError` auslöst, wenn der `this`-Wert keine `RegExp`-Instanz ist.)

Sowohl für reguläre Ausdrücke mit dem `y`-Flag als auch für [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) reguläre Ausdrücke gilt:

- Sie beginnen die Suche nach einer Übereinstimmung bei `lastIndex`.
- Bei einer Übereinstimmung wird `lastIndex` auf die Position hinter deren Ende gesetzt.
- Liegt `lastIndex` außerhalb des aktuell untersuchten Strings, wird `lastIndex` auf 0 zurückgesetzt.

Bei der Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) unterscheiden sie sich jedoch, wenn keine Übereinstimmung gefunden wird:

- Wird [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) für einen regulären Ausdruck mit dem `y`-Flag aufgerufen und findet dieser bei `lastIndex` keine Übereinstimmung, gibt die Methode sofort `null` zurück und setzt `lastIndex` auf 0 zurück.
- Wird [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) für einen globalen regulären Ausdruck aufgerufen und findet dieser bei `lastIndex` keine Übereinstimmung, versucht die Methode es ab dem nächsten Zeichen erneut. Dies setzt sich fort, bis eine Übereinstimmung gefunden oder das Ende des Strings erreicht wird.

Für [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) verhält sich ein regulärer Ausdruck mit sowohl dem `y`- als auch dem `g`-Flag genauso wie einer mit dem `y`-Flag ohne das `g`-Flag. Da [`test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) lediglich eine einfache Hülle um `exec()` ist, ignoriert auch `test()` das globale Flag und sucht nur an der durch `lastIndex` angegebenen Position. Da viele andere Methoden globale reguläre Ausdrücke jedoch gesondert behandeln, ist das globale Flag im Allgemeinen unabhängig vom `y`-Flag.

- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) (ruft [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) auf): `y`, `g` und `gy` verhalten sich jeweils unterschiedlich.
  - Bei regulären Ausdrücken mit `y`: `matchAll()` löst eine Ausnahme aus; `[Symbol.matchAll]()` liefert das Ergebnis von `exec()` genau einmal, ohne `lastIndex` des regulären Ausdrucks zu aktualisieren.
  - Bei regulären Ausdrücken mit `g` oder `gy`: Gibt einen Iterator zurück, der eine Folge von `exec()`-Ergebnissen liefert.
- [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) (ruft [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) auf): `y`, `g` und `gy` verhalten sich jeweils unterschiedlich.
  - Bei regulären Ausdrücken mit `y`: Gibt das Ergebnis von `exec()` zurück und aktualisiert `lastIndex` des regulären Ausdrucks.
  - Bei regulären Ausdrücken mit `g` oder `gy`: Gibt ein Array mit allen `exec()`-Ergebnissen zurück.
- [`String.prototype.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) (ruft [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) auf): Das `g`-Flag spielt dabei nie eine Rolle.
  - Bei regulären Ausdrücken mit `y` oder `gy`: Gibt immer `0` zurück, wenn der Anfang des Strings übereinstimmt, andernfalls `-1`. Beim Beenden bleibt `lastIndex` des regulären Ausdrucks unverändert.
  - Bei regulären Ausdrücken mit `g`: Gibt die Position der ersten Übereinstimmung im String zurück oder `-1`, wenn keine gefunden wird.
- [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) (ruft [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) auf): `y`, `g` und `gy` verhalten sich gleich.
- [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) (ruft [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) auf): `y`, `g` und `gy` verhalten sich jeweils unterschiedlich.
  - Bei regulären Ausdrücken mit `y`: Ersetzt einmal an der aktuellen Position von `lastIndex` und aktualisiert `lastIndex`.
  - Bei regulären Ausdrücken mit `g` oder `gy`: Ersetzt alle von `exec()` gefundenen Übereinstimmungen.
- [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) (ruft [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) auf): `y`, `g` und `gy` verhalten sich jeweils unterschiedlich.
  - Bei regulären Ausdrücken mit `y`: `replaceAll()` löst eine Ausnahme aus.
  - Bei regulären Ausdrücken mit `g` oder `gy`: Ersetzt alle von `exec()` gefundenen Übereinstimmungen.

## Beispiele

### Einen regulären Ausdruck mit dem `y`-Flag verwenden

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### Das `y`-Flag und die Verankerung am Anfang

Über mehrere Versionen hinweg enthielt die SpiderMonkey-Engine von Firefox [einen Fehler](https://bugzil.la/773687) im Zusammenhang mit der `^`-Assertion und dem `y`-Flag. Dadurch konnten Ausdrücke, die mit der `^`-Assertion begannen und das `y`-Flag verwendeten, Übereinstimmungen finden, obwohl dies nicht hätte möglich sein dürfen. Der Fehler wurde irgendwann nach Firefox 3.6 eingeführt (das bereits das `y`-Flag, aber noch nicht den Fehler hatte) und 2015 behoben. Möglicherweise aufgrund dieses Fehlers stellt die Spezifikation [ausdrücklich klar](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion):

> Selbst wenn das `y`-Flag mit einem Muster verwendet wird, stimmt `^` immer nur am Anfang von _Input_ überein oder (wenn _rer_.[[Multiline]] `true` ist) am Anfang einer Zeile.

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

- [Polyfill für das `sticky`-Flag in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.unicode")}}
