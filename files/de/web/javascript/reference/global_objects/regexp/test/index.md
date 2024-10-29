---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{JSRef}}

Die **`test()`**-Methode von {{jsxref("RegExp")}}-Instanzen führt eine Suche nach einem Muster der regulären Ausdrucks in einem angegebenen String aus. Gibt `true` zurück, wenn ein Treffer vorliegt; andernfalls `false`.

JavaScript-{{jsxref("RegExp")}}-Objekte sind **zustandsbehaftet**, wenn ihre {{jsxref("RegExp/global", "global")}}- oder {{jsxref("RegExp/sticky", "sticky")}}-Flags gesetzt sind (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen {{jsxref("RegExp/lastIndex", "lastIndex")}} aus dem vorherigen Treffer. Mit dieser internen Nutzung kann `test()` verwendet werden, um über mehrere Treffer in einem Textstring zu iterieren (mit erfassten Gruppen).

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## Syntax

```js-nolint
test(str)
```

### Parameter

- `str`
  - : Der String, gegen den der reguläre Ausdruck abgeglichen werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `test()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

`true`, wenn ein Treffer zwischen dem regulären Ausdruck und dem String `str` vorliegt. Anderenfalls `false`.

## Beschreibung

Verwenden Sie `test()`, wann immer Sie wissen möchten, ob ein Muster in einem String gefunden wird. `test()` gibt einen booleschen Wert zurück, im Gegensatz zur {{jsxref("String.prototype.search()")}}-Methode (die den Index eines Treffers oder `-1`, wenn kein Treffer gefunden wurde, zurückgibt).

Um mehr Informationen zu erhalten (jedoch mit langsamerer Ausführung), verwenden Sie die {{jsxref("RegExp/exec", "exec()")}}-Methode. (Dies ist ähnlich zur {{jsxref("String.prototype.match()")}}-Methode.)

Wie bei `exec()` (oder in Kombination damit) wird `test()`, wenn es mehrfach auf derselben globalen regulären Ausdrucksinstanz aufgerufen wird, beim vorherigen Treffer fortschreiten.

## Beispiele

### Verwendung von test()

Ein einfaches Beispiel, das überprüft, ob `"hello"` ganz am Anfang eines Strings enthalten ist und ein boolesches Ergebnis zurückgibt.

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

### Verwendung von test() mit einem Regex mit dem "global"-Flag

Wenn ein Regex das [global-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) gesetzt hat, wird `test()` den {{jsxref("RegExp/lastIndex", "lastIndex")}} des Regexes weiterführen. ({{jsxref("RegExp.prototype.exec()")}} führt auch die `lastIndex`-Eigenschaft weiter.)

Weitere Aufrufe von `test(str)` werden die Suche in `str` ab `lastIndex` fortsetzen. Die `lastIndex`-Eigenschaft wird bei jedem Zurückgeben von `true` durch `test()` weiterhin steigen.

> [!NOTE]
> Solange `test()` `true` zurückgibt, wird `lastIndex` _nicht_ zurückgesetzt — sogar beim Testen eines anderen Strings!

Wenn `test()` `false` zurückgibt, wird die `lastIndex`-Eigenschaft des aufrufenden Regexes auf `0` zurückgesetzt.

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
