---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`test()`**-Methode von {{jsxref("RegExp")}} Instanzen führt eine Suche mit diesem regulären Ausdruck nach einer Übereinstimmung zwischen einem regulären Ausdruck und einem angegebenen String durch. Gibt `true` zurück, wenn eine Übereinstimmung vorhanden ist, andernfalls `false`.

JavaScript {{jsxref("RegExp")}} Objekte sind **zustandsbehaftet**, wenn sie die {{jsxref("RegExp/global", "global")}} oder {{jsxref("RegExp/sticky", "sticky")}} Flags gesetzt haben (z.B. `/foo/g` oder `/foo/y`). Sie speichern ein {{jsxref("RegExp/lastIndex", "lastIndex")}} vom vorherigen Match. Unter Verwendung davon kann `test()` intern verwendet werden, um über mehrere Übereinstimmungen in einem Textstring zu iterieren (mit Capture-Gruppen).

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## Syntax

```js-nolint
test(str)
```

### Parameter

- `str`
  - : Der String, gegen den der reguläre Ausdruck abgeglichen wird. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher bewirkt das Auslassen oder Übergeben von `undefined`, dass `test()` nach dem String `"undefined"` sucht, was selten das Gewünschte ist.

### Rückgabewert

`true` falls es eine Übereinstimmung zwischen dem regulären Ausdruck und dem String `str` gibt. Andernfalls `false`.

## Beschreibung

Verwenden Sie `test()`, wann immer Sie wissen möchten, ob ein Muster in einem String gefunden wird. `test()` gibt einen booleschen Wert zurück, im Gegensatz zur {{jsxref("String.prototype.search()")}}-Methode (die den Index eines Matches oder `-1` zurückgibt, falls kein Match gefunden wird).

Um mehr Informationen zu erhalten (aber mit langsamerer Ausführung), verwenden Sie die {{jsxref("RegExp/exec", "exec()")}}-Methode. (Dies ist ähnlich der {{jsxref("String.prototype.match()")}}-Methode.)

Wie bei `exec()` (oder in Kombination mit dieser) wird `test()` bei mehrfachem Aufruf auf derselben globalen regulären Ausdrucksinstanz über das vorherige Match hinaus fortschreiten.

## Beispiele

### Verwendung von test()

Ein einfaches Beispiel, das testet, ob `"hello"` ganz am Anfang eines Strings enthalten ist und ein boolesches Ergebnis zurückgibt.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

Das folgende Beispiel protokolliert eine Meldung, die vom Erfolg des Tests abhängt:

```js
function testInput(re, str) {
  const midstring = re.test(str) ? "enthält" : "enthält nicht";
  console.log(`${str} ${midstring} ${re.source}`);
}
```

### Verwendung von test() bei einem Regex mit dem "global"-Flag

Wenn ein Regex das [global-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) gesetzt hat, wird `test()` den {{jsxref("RegExp/lastIndex", "lastIndex")}} des Regex voranbringen. ({{jsxref("RegExp.prototype.exec()")}} bringt auch die `lastIndex`-Eigenschaft voran.)

Weitere Aufrufe von `test(str)` setzen die Suche in `str` ab dem `lastIndex` fort. Die Eigenschaft `lastIndex` wird jedes Mal weiter erhöht, wenn `test()` `true` zurückgibt.

> [!NOTE]
> Solange `test()` `true` zurückgibt, wird `lastIndex` _nicht_ zurückgesetzt – auch nicht bei der Prüfung eines anderen Strings!

Wenn `test()` `false` zurückgibt, wird die `lastIndex`-Eigenschaft des aufrufenden Regex auf `0` zurückgesetzt.

Das folgende Beispiel demonstriert dieses Verhalten:

```js
const regex = /foo/g; // das "global"-Flag ist gesetzt

// regex.lastIndex ist bei 0
regex.test("foo"); // true

// regex.lastIndex ist jetzt bei 3
regex.test("foo"); // false

// regex.lastIndex ist bei 0
regex.test("barfoo"); // true

// regex.lastIndex ist bei 6
regex.test("foobar"); // false

// regex.lastIndex ist bei 0
regex.test("foobarfoo"); // true

// regex.lastIndex ist bei 3
regex.test("foobarfoo"); // true

// regex.lastIndex ist bei 9
regex.test("foobarfoo"); // false

// regex.lastIndex ist bei 0
// (...und so weiter)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("RegExp")}}
