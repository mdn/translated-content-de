---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`test()`**-Methode von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck durch, um eine Übereinstimmung zwischen einem regulären Ausdruck und einem angegebenen String zu finden. Gibt `true` zurück, wenn eine Übereinstimmung vorliegt, andernfalls `false`.

JavaScript-{{jsxref("RegExp")}}-Objekte sind **zustandsbehaftet**, wenn sie die
{{jsxref("RegExp/global", "global")}}- oder {{jsxref("RegExp/sticky", "sticky")}}-Flags gesetzt haben (z. B. `/foo/g` oder `/foo/y`). Sie speichern einen
{{jsxref("RegExp/lastIndex", "lastIndex")}} aus der vorherigen Übereinstimmung. Intern kann `test()` verwendet werden, um über mehrere Übereinstimmungen in einem Textstring (mit Erfassungsgruppen) zu iterieren.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.test", "taller")}}

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
  - : Der String, gegen den der reguläre Ausdruck abgeglichen wird. Alle Werte werden [zu Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn er ausgelassen wird oder `undefined` übergeben wird, sucht `test()` nach dem String `"undefined"`, was selten gewünscht ist.

### Rückgabewert

`true`, wenn eine Übereinstimmung zwischen dem regulären Ausdruck und dem String
`str` gefunden wird. Andernfalls `false`.

## Beschreibung

Verwenden Sie `test()`, wann immer Sie wissen möchten, ob ein Muster in einem
String gefunden wird. `test()` gibt einen Boolean zurück, im Gegensatz zur
{{jsxref("String.prototype.search()")}}-Methode (die den Index einer Übereinstimmung oder
`-1` zurückgibt, falls keine gefunden wurde).

Um mehr Informationen zu erhalten (aber mit langsamerer Ausführung), verwenden Sie die
{{jsxref("RegExp/exec", "exec()")}}-Methode. (Dies ist vergleichbar mit der
{{jsxref("String.prototype.match()")}}-Methode.)

Wie bei `exec()` (oder in Kombination damit) wird `test()`, wenn es
mehrfach auf derselben globalen Instanz eines regulären Ausdrucks aufgerufen wird, über die vorherige Übereinstimmung hinaus fortschreiten.

## Beispiele

### Verwendung von test()

Dieses Beispiel überprüft, ob `"hello"` sich direkt am Anfang eines
Strings befindet und gibt ein Boolean-Ergebnis zurück.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

Das folgende Beispiel gibt eine Nachricht aus, abhängig vom Erfolg des Tests:

```js
function testInput(re, str) {
  const midString = re.test(str) ? "contains" : "does not contain";
  console.log(`${str} ${midString} ${re.source}`);
}
```

### Verwendung von test() mit einem Regex mit dem "global"-Flag

Hat ein Regex das [global-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) gesetzt,
wird der {{jsxref("RegExp/lastIndex", "lastIndex")}} des Regex durch `test()` vorangetrieben.
({{jsxref("RegExp.prototype.exec()")}} treibt ebenfalls die `lastIndex`-Eigenschaft voran.)

Weitere Aufrufe von `test(str)` setzen die Suche in
`str` ab der Position `lastIndex` fort. Die
`lastIndex`-Eigenschaft erhöht sich bei jedem `true` von `test()` weiter.

> [!NOTE]
> Solange `test()` `true` zurückgibt,
> wird `lastIndex` _nicht_ zurückgesetzt—auch nicht beim Testen eines anderen Strings!

Wenn `test()` `false` zurückgibt, wird die `lastIndex`-Eigenschaft des aufrufenden Regex
auf `0` zurückgesetzt.

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
