---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{JSRef}}

Die **`test()`** Methode von {{jsxref("RegExp")}} Instanzen führt eine Suche mit diesem regulären Ausdruck durch, um eine Übereinstimmung zwischen einem regulären Ausdruck und einem angegebenen String zu finden. Sie gibt `true` zurück, wenn es eine Übereinstimmung gibt; andernfalls `false`.

JavaScript {{jsxref("RegExp")}} Objekte sind **zustandsbehaftet**, wenn sie die {{jsxref("RegExp/global", "global")}} oder {{jsxref("RegExp/sticky", "sticky")}} Flags gesetzt haben (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen {{jsxref("RegExp/lastIndex", "lastIndex")}} vom vorherigen Treffer. Mithilfe dieses Werts kann `test()` verwendet werden, um über mehrere Treffer in einem Textstring zu iterieren (mit Erfassungsgruppen).

{{InteractiveExample("JavaScript Demo: RegExp.prototype.test()", "taller")}}

```js interactive-example
const str = "table football";

const regex = new RegExp("fo+");
const globalRegex = new RegExp("fo+", "g");

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
  - : Der String, gegen den der reguläre Ausdruck verglichen werden soll. Alle Werte werden [zu Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Auslassen oder das Übergeben von `undefined` dazu, dass `test()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

`true`, wenn es eine Übereinstimmung zwischen dem regulären Ausdruck und dem String `str` gibt. Andernfalls `false`.

## Beschreibung

Verwenden Sie `test()`, wenn Sie wissen möchten, ob ein Muster in einem String gefunden wird. `test()` gibt einen booleschen Wert zurück, im Gegensatz zur {{jsxref("String.prototype.search()")}} Methode (die den Index eines Treffers zurückgibt oder `-1`, wenn kein Treffer gefunden wird).

Um mehr Informationen zu erhalten (aber mit langsamerer Ausführung), verwenden Sie die {{jsxref("RegExp/exec", "exec()")}} Methode. (Dies ist ähnlich der {{jsxref("String.prototype.match()")}} Methode.)

Wie bei `exec()` (oder in Kombination damit) wird `test()`, wenn es mehrmals auf derselben globalen Instanz eines regulären Ausdrucks aufgerufen wird, über das vorherige Match hinausgehen.

## Beispiele

### Verwendung von test()

Dieses Beispiel prüft, ob `"hello"` ganz am Anfang eines Strings enthalten ist und gibt ein boolesches Ergebnis zurück.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

Das folgende Beispiel protokolliert eine Nachricht, abhängig vom Erfolg des Tests:

```js
function testInput(re, str) {
  const midString = re.test(str) ? "contains" : "does not contain";
  console.log(`${str} ${midString} ${re.source}`);
}
```

### Verwendung von test() bei einem Regex mit dem "global"-Flag

Wenn ein Regex das [globale Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) gesetzt hat, wird `test()` den {{jsxref("RegExp/lastIndex", "lastIndex")}} des Regex fortschreiben. ({{jsxref("RegExp.prototype.exec()")}} erhöht ebenfalls die `lastIndex` Eigenschaft.)

Weitere Aufrufe von `test(str)` werden die Suche in `str` fortsetzen, beginnend ab `lastIndex`. Die `lastIndex` Eigenschaft wird jedes Mal steigen, wenn `test()` `true` zurückgibt.

> [!NOTE]
> Solange `test()` `true` zurückgibt, wird `lastIndex` _nicht_ zurückgesetzt—auch nicht beim Testen eines anderen Strings!

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

- [Leitfaden für Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
