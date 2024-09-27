---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`test()`** Methode von {{jsxref("RegExp")}} Instanzen führt eine Suche mit diesem regulären Ausdruck nach einer Übereinstimmung zwischen einem regulären Ausdruck und einem angegebenen String durch. Gibt `true` zurück, wenn es eine Übereinstimmung gibt; andernfalls `false`.

JavaScript {{jsxref("RegExp")}} Objekte sind **zustandsbehaftet**, wenn sie die {{jsxref("RegExp/global", "global")}} oder {{jsxref("RegExp/sticky", "sticky")}} Flags gesetzt haben (z. B. `/foo/g` oder `/foo/y`). Sie speichern einen {{jsxref("RegExp/lastIndex", "lastIndex")}} des vorherigen Matches. Indem `test()` dies intern nutzt, kann es verwendet werden, um über mehrere Übereinstimmungen in einem Text-String (mit Erfassungsgruppen) zu iterieren.

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## Syntax

```js-nolint
test(str)
```

### Parameter

- `str`
  - : Der String, gegen den der reguläre Ausdruck gematcht werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder das Übergeben von `undefined` dazu, dass `test()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

`true`, wenn es eine Übereinstimmung zwischen dem regulären Ausdruck und dem String `str` gibt. Andernfalls `false`.

## Beschreibung

Verwenden Sie `test()`, wann immer Sie wissen möchten, ob ein Muster in einem String gefunden wird. `test()` gibt einen booleschen Wert zurück, im Gegensatz zur {{jsxref("String.prototype.search()")}} Methode (die den Index eines Matches oder `-1` zurückgibt, wenn nichts gefunden wurde).

Um mehr Informationen zu erhalten (aber mit langsamerer Ausführung), verwenden Sie die {{jsxref("RegExp/exec", "exec()")}} Methode. (Dies ist ähnlich zur {{jsxref("String.prototype.match()")}} Methode.)

Wie bei `exec()` (oder in Kombination damit) wird `test()`, mehrmals auf derselben globalen regulären Ausdrucksinstanz aufgerufen, über das vorherige Match hinausgehen.

## Beispiele

### Verwendung von test()

Ein einfaches Beispiel, das prüft, ob `"hello"` ganz am Anfang eines Strings enthalten ist und ein boolesches Ergebnis zurückgibt.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

Das folgende Beispiel protokolliert eine Nachricht, die vom Erfolg des Tests abhängt:

```js
function testInput(re, str) {
  const midstring = re.test(str) ? "contains" : "does not contain";
  console.log(`${str} ${midstring} ${re.source}`);
}
```

### Verwendung von test() bei einem Regex mit dem "global" Flag

Wenn ein Regex das [globale Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) gesetzt hat, wird `test()` den {{jsxref("RegExp/lastIndex", "lastIndex")}} des Regex weiterführen. ({{jsxref("RegExp.prototype.exec()")}} führt auch die `lastIndex` Eigenschaft weiter.)

Weitere Aufrufe von `test(str)` setzen die Suche in `str` ab `lastIndex` fort. Die `lastIndex` Eigenschaft wird jedes Mal weiter erhöht, wenn `test()` `true` zurückgibt.

> [!NOTE]
> Solange `test()` `true` zurückgibt, wird `lastIndex` _nicht_ zurückgesetzt—auch nicht, wenn ein anderer String getestet wird!

Wenn `test()` `false` zurückgibt, wird die `lastIndex` Eigenschaft des aufrufenden Regex auf `0` zurückgesetzt.

Das folgende Beispiel demonstriert dieses Verhalten:

```js
const regex = /foo/g; // the "global" flag is set

// regex.lastIndex is at 0
regex.test("foo"); // true

// regex.lastIndex is now at 3
regex.test("foo"); // false

// regex.lastIndex is at 0
regex.test("barfoo"); // true

// regex.lastIndex is at 6
regex.test("foobar"); // false

// regex.lastIndex is at 0
regex.test("foobarfoo"); // true

// regex.lastIndex is at 3
regex.test("foobarfoo"); // true

// regex.lastIndex is at 9
regex.test("foobarfoo"); // false

// regex.lastIndex is at 0
// (...and so on)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("RegExp")}}
