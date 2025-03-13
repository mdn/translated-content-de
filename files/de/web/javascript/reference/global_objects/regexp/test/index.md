---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`test()`** Methode von {{jsxref("RegExp")}} Instanzen führt eine Suche mit diesem regulären Ausdruck nach einem Treffer zwischen einem regulären Ausdruck und einem angegebenen String durch. Gibt `true` zurück, wenn es einen Treffer gibt; ansonsten `false`.

JavaScript {{jsxref("RegExp")}} Objekte sind **zustandsbehaftet**, wenn die {{jsxref("RegExp/global", "globalen")}} oder {{jsxref("RegExp/sticky", "sticky")}} Flags gesetzt sind (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen {{jsxref("RegExp/lastIndex", "lastIndex")}} vom vorherigen Treffer. Mithilfe dieses Werts kann `test()` intern verwendet werden, um über mehrere Treffer in einem Textstring zu iterieren (mit Erfassungsgruppen).

{{InteractiveExample("JavaScript Demo: RegExp.prototype.test()", "taller")}}

```js interactive-example
const str = "table football";

const regex = new RegExp("foo*");
const globalRegex = new RegExp("foo*", "g");

console.log(regex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 0

console.log(globalRegex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 9

console.log(globalRegex.test(str));
// Expected output: false
```

## Syntax

```js-nolint
test(str)
```

### Parameter

- `str`
  - : Der String, gegen den der reguläre Ausdruck abgeglichen werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Auslassen oder Übergeben von `undefined` dazu führt, dass `test()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

`true`, wenn es einen Treffer zwischen dem regulären Ausdruck und dem String `str` gibt. Andernfalls `false`.

## Beschreibung

Verwenden Sie `test()`, wann immer Sie wissen möchten, ob ein Muster in einem String gefunden wird. `test()` gibt einen booleschen Wert zurück, im Gegensatz zur {{jsxref("String.prototype.search()")}} Methode (die den Index eines Treffers oder `-1` zurückgibt, wenn kein Treffer gefunden wurde).

Um mehr Informationen zu erhalten (aber mit langsamerer Ausführung), verwenden Sie die {{jsxref("RegExp/exec", "exec()")}} Methode. (Dies ist ähnlich zur {{jsxref("String.prototype.match()")}} Methode.)

Wie bei `exec()` (oder in Kombination mit dieser) wird `test()`, das mehrmals auf derselben globalen regulären Ausdrucksinstanz aufgerufen wird, über den vorherigen Treffer hinaus fortfahren.

## Beispiele

### Verwendung von test()

Dieses Beispiel überprüft, ob `"hello"` ganz am Anfang eines Strings enthalten ist und gibt ein boolesches Ergebnis zurück.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

Das folgende Beispiel protokolliert eine Nachricht, die von der Erfolgsquote des Tests abhängt:

```js
function testInput(re, str) {
  const midString = re.test(str) ? "contains" : "does not contain";
  console.log(`${str} ${midString} ${re.source}`);
}
```

### Verwendung von test() bei einem Regex mit dem "globalen" Flag

Wenn ein Regex das [globale Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) gesetzt hat, wird `test()` den {{jsxref("RegExp/lastIndex", "lastIndex")}} des Regex vorantreiben. ({{jsxref("RegExp.prototype.exec()")}} setzt auch die `lastIndex` Eigenschaft vor).

Weitere Aufrufe von `test(str)` werden die Suche in `str` ab dem `lastIndex` fortsetzen. Die `lastIndex`-Eigenschaft wird jedes Mal weiter erhöht, wenn `test()` `true` zurückgibt.

> [!NOTE]
> Solange `test()` `true` zurückgibt,
> wird `lastIndex` _nicht_ zurückgesetzt – selbst wenn ein anderer String getestet wird!

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

- [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
