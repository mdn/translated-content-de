---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Die **`test()`**-Methode von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck nach einer Übereinstimmung zwischen einem regulären Ausdruck und einem angegebenen String aus. Gibt `true` zurück, wenn es eine Übereinstimmung gibt; andernfalls `false`.

JavaScript-{{jsxref("RegExp")}}-Objekte sind **zustandsbehaftet**, wenn sie die {{jsxref("RegExp/global", "global")}}- oder {{jsxref("RegExp/sticky", "sticky")}}-Flags gesetzt haben (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen {{jsxref("RegExp/lastIndex", "lastIndex")}} von der vorherigen Übereinstimmung. Durch die interne Nutzung dieser Information kann `test()` verwendet werden, um über mehrere Übereinstimmungen in einem Textstring zu iterieren (mit Erfassungsgruppen).

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## Syntax

```js-nolint
test(str)
```

### Parameter

- `str`
  - : Der String, gegen den der reguläre Ausdruck abgeglichen wird. Alle Werte werden [zu Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `test()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

`true`, wenn es eine Übereinstimmung zwischen dem regulären Ausdruck und dem String `str` gibt. Andernfalls `false`.

## Beschreibung

Verwenden Sie `test()`, wann immer Sie wissen möchten, ob ein Muster in einem String gefunden wird. `test()` gibt einen Boolean zurück, im Gegensatz zur Methode {{jsxref("String.prototype.search()")}} (die den Index einer Übereinstimmung oder `-1` zurückgibt, wenn nichts gefunden wird).

Um genauere Informationen zu erhalten (aber mit langsamerer Ausführung), verwenden Sie die Methode {{jsxref("RegExp/exec", "exec()")}}. (Dies ist ähnlich zur Methode {{jsxref("String.prototype.match()")}}.)

Wie bei `exec()` (oder in Kombination damit), sorgt `test()`, das mehrmals auf derselben globalen Regulären-Ausdruck-Instanz aufgerufen wird, dafür, dass weiter als die vorherige Übereinstimmung vorangeschritten wird.

## Beispiele

### Verwendung von test()

Dieses Beispiel testet, ob `"hello"` am Anfang eines Strings enthalten ist, und gibt das Ergebnis als Boolean zurück.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

Das folgende Beispiel protokolliert eine Nachricht, die vom Erfolg des Tests abhängt:

```js
function testInput(re, str) {
  const midString = re.test(str) ? "contains" : "does not contain";
  console.log(`${str} ${midString} ${re.source}`);
}
```

### Verwendung von test() bei einem Regex mit dem "global"-Flag

Wenn ein Regex das [global-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) gesetzt hat, wird `test()` den {{jsxref("RegExp/lastIndex", "lastIndex")}} des Regex voranschreiten lassen. ({{jsxref("RegExp.prototype.exec()")}} erhöht ebenfalls die `lastIndex`-Eigenschaft.)

Weitere Aufrufe von `test(str)` werden die Suche in `str` ab dem `lastIndex` fortsetzen. Die `lastIndex`-Eigenschaft wird weiter zunehmen, jedes Mal, wenn `test()` `true` zurückgibt.

> [!NOTE]
> Solange `test()` `true` zurückgibt, wird der `lastIndex` _nicht_ zurückgesetzt—auch wenn ein anderer String getestet wird!

Wenn `test()` `false` zurückgibt, wird die `lastIndex`-Eigenschaft des aufrufenden Regex auf `0` zurückgesetzt.

Das folgende Beispiel zeigt dieses Verhalten:

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

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
