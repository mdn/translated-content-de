---
title: RegExp.prototype.test()
short-title: test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`test()`**-Methode von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck durch, um nach einer Übereinstimmung zwischen einem regulären Ausdruck und einem angegebenen String zu suchen. Sie gibt `true` zurück, wenn eine Übereinstimmung gefunden wird, andernfalls `false`.

JavaScript-{{jsxref("RegExp")}}-Objekte sind **zustandsbehaftet**, wenn sie die Flags {{jsxref("RegExp/global", "global")}} oder {{jsxref("RegExp/sticky", "sticky")}} gesetzt haben (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen {{jsxref("RegExp/lastIndex", "lastIndex")}} aus dem vorherigen Treffer. Intern verwendet kann `test()` verwendet werden, um über mehrere Übereinstimmungen in einem Textstring zu iterieren (mit Erfassungsgruppen).

{{InteractiveExample("JavaScript Demo: RegExp.prototype.test()", "taller")}}

```js interactive-example
const str = "table football";

const regex = /fo+/;
const globalRegex = /fo+/g;

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
  - : Der String, gegen den der reguläre Ausdruck abgeglichen werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `test()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

`true`, wenn eine Übereinstimmung zwischen dem regulären Ausdruck und dem String `str` besteht. Andernfalls `false`.

## Beschreibung

Verwenden Sie `test()`, wann immer Sie wissen möchten, ob ein Muster in einem String gefunden wird. `test()` gibt einen booleschen Wert zurück, anders als die {{jsxref("String.prototype.search()")}}-Methode (die den Index einer Übereinstimmung oder `-1` zurückgibt, wenn keine gefunden wird).

Um mehr Informationen zu erhalten (aber mit langsamerer Ausführung), verwenden Sie die {{jsxref("RegExp/exec", "exec()")}}-Methode. (Dies ist ähnlich wie die {{jsxref("String.prototype.match()")}}-Methode.)

Wie bei `exec()` (oder in Kombination damit) wird `test()`, mehrmals auf derselben globalen regulären Ausdrucksinstanz aufgerufen, über den vorherigen Treffer hinausgehen.

## Beispiele

### Verwendung von test()

Dieses Beispiel überprüft, ob `"hello"` ganz am Anfang eines Strings enthalten ist und gibt einen booleschen Wert zurück.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

Das folgende Beispiel protokolliert eine Nachricht, die von der erfolgreichen Durchführung des Tests abhängt:

```js
function testInput(re, str) {
  const midString = re.test(str) ? "contains" : "does not contain";
  console.log(`${str} ${midString} ${re.source}`);
}
```

### Verwendung von test() bei einem Regex mit dem "global"-Flag

Wenn ein Regex das [global-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) gesetzt hat, wird `test()` den {{jsxref("RegExp/lastIndex", "lastIndex")}} des Regex vorwärts verschieben. ({{jsxref("RegExp.prototype.exec()")}} verschiebt die `lastIndex`-Eigenschaft ebenfalls.)

Weitere Aufrufe von `test(str)` werden die Suche in `str` ab `lastIndex` fortsetzen. Die `lastIndex`-Eigenschaft wird jedes Mal erhöht, wenn `test()` `true` zurückgibt.

> [!NOTE]
> Solange `test()` `true` zurückgibt,
> wird `lastIndex` _nicht_ zurückgesetzt—even bei einem Test mit einem anderen String!

Wenn `test()` `false` zurückgibt, wird die `lastIndex`-Eigenschaft des aufrufenden Regex auf `0` zurückgesetzt.

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

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
