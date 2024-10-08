---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`test()`**-Methode von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck durch, um eine Übereinstimmung zwischen einem regulären Ausdruck und einer angegebenen Zeichenkette zu finden. Sie gibt `true` zurück, wenn eine Übereinstimmung vorliegt; ansonsten `false`.

JavaScript-{{jsxref("RegExp")}}-Objekte sind **zustandsbehaftet**, wenn sie die {{jsxref("RegExp/global", "global")}}- oder {{jsxref("RegExp/sticky", "sticky")}}-Flags gesetzt haben (z. B. `/foo/g` oder `/foo/y`). Sie speichern einen {{jsxref("RegExp/lastIndex", "lastIndex")}} aus dem vorherigen Match. Durch die interne Nutzung kann `test()` verwendet werden, um über mehrere Übereinstimmungen in einem Textstring zu iterieren (mit Capture-Gruppen).

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## Syntax

```js-nolint
test(str)
```

### Parameter

- `str`
  - : Die Zeichenkette, gegen die der reguläre Ausdruck abgeglichen wird. Alle Werte werden [in Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `test()` nach der Zeichenkette `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

`true`, wenn eine Übereinstimmung zwischen dem regulären Ausdruck und der Zeichenkette `str` vorliegt. Andernfalls `false`.

## Beschreibung

Verwenden Sie `test()`, wenn Sie wissen möchten, ob ein Muster in einer Zeichenkette gefunden wird. `test()` gibt einen booleschen Wert zurück, im Gegensatz zur {{jsxref("String.prototype.search()")}}-Methode (die den Index eines Treffers oder `-1` zurückgibt, wenn kein Treffer gefunden wird).

Um mehr Informationen zu erhalten (jedoch mit langsamerer Ausführung), verwenden Sie die {{jsxref("RegExp/exec", "exec()")}}-Methode. (Dies ist ähnlich der {{jsxref("String.prototype.match()")}}-Methode.)

Wie bei `exec()` (oder in Kombination mit dieser) wird `test()`, das mehrfach auf dieselbe globale RegExp-Instanz angewendet wird, den `lastIndex` über den vorherigen Treffer hinaus verschieben.

## Beispiele

### Verwendung von test()

Einfaches Beispiel, das prüft, ob `"hello"` direkt am Anfang einer Zeichenkette enthalten ist, und ein boolesches Ergebnis zurückgibt.

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

### Verwendung von test() bei einem Regex mit dem "global"-Flag

Wenn ein Regex das [globale Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) gesetzt hat, wird `test()` den {{jsxref("RegExp/lastIndex", "lastIndex")}} des Regex voranbringen. (Auch {{jsxref("RegExp.prototype.exec()")}} erhöht die `lastIndex`-Eigenschaft.)

Weitere Aufrufe von `test(str)` werden die Suche in `str` von `lastIndex` aus fortsetzen. Die `lastIndex`-Eigenschaft wird jedes Mal weiter erhöht, wenn `test()` `true` zurückgibt.

> [!NOTE]
> Solange `test()` `true` zurückgibt, wird `lastIndex` sich _nicht_ zurücksetzen – selbst wenn eine andere Zeichenkette getestet wird!

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

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("RegExp")}}
