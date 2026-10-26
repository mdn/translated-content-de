---
title: RegExp.prototype.test()
short-title: test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`test()`** von {{jsxref("RegExp")}}-Instanzen prüft, ob ein regulärer Ausdruck mit einer angegebenen Zeichenfolge übereinstimmt. Sie gibt `true` zurück, wenn eine Übereinstimmung vorliegt, andernfalls `false`.

JavaScript-{{jsxref("RegExp")}}-Objekte sind **zustandsbehaftet**, wenn die Flags {{jsxref("RegExp/global", "global")}} oder {{jsxref("RegExp/sticky", "sticky")}} gesetzt sind (z. B. `/foo/g` oder `/foo/y`). Sie speichern in {{jsxref("RegExp/lastIndex", "lastIndex")}}, an welcher Position die vorherige Übereinstimmung endete. Dadurch kann `test()` verwendet werden, um mehrere Übereinstimmungen in einer Zeichenfolge zu durchlaufen (auch mit Erfassungsgruppen).

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
  - : Die Zeichenfolge, mit der der reguläre Ausdruck abgeglichen wird. Alle Werte werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn Sie den Parameter weglassen oder `undefined` übergeben, sucht `test()` daher nach der Zeichenfolge `"undefined"` – was nur selten beabsichtigt ist.

### Rückgabewert

`true`, wenn der reguläre Ausdruck mit der Zeichenfolge `str` übereinstimmt. Andernfalls `false`.

## Beschreibung

Verwenden Sie `test()`, wenn Sie wissen möchten, ob ein Muster in einer Zeichenfolge vorkommt. Anders als die Methode {{jsxref("String.prototype.search()")}}, die den Index einer Übereinstimmung oder bei ausbleibender Übereinstimmung `-1` zurückgibt, liefert `test()` einen booleschen Wert.

Wenn Sie weitere Informationen benötigen, verwenden Sie die Methode {{jsxref("RegExp/exec", "exec()")}}. Ihre Ausführung ist allerdings langsamer. (Sie ähnelt der Methode {{jsxref("String.prototype.match()")}}.)

Wie bei `exec()` – oder in Kombination damit – setzt jeder weitere Aufruf von `test()` auf derselben globalen Instanz eines regulären Ausdrucks die Suche hinter der vorherigen Übereinstimmung fort.

## Beispiele

### test() verwenden

Dieses Beispiel prüft, ob `"hello"` ganz am Anfang einer Zeichenfolge steht, und gibt einen booleschen Wert zurück.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

Das folgende Beispiel gibt abhängig vom Ergebnis der Prüfung eine Meldung aus:

```js
function testInput(re, str) {
  const midString = re.test(str) ? "contains" : "does not contain";
  console.log(`${str} ${midString} ${re.source}`);
}
```

### test() mit einem regulären Ausdruck mit dem Flag „global“ verwenden

Wenn bei einem regulären Ausdruck das [Flag „global“](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) gesetzt ist, erhöht `test()` dessen {{jsxref("RegExp/lastIndex", "lastIndex")}}. (Auch {{jsxref("RegExp.prototype.exec()")}} erhöht die Eigenschaft `lastIndex`.)

Weitere Aufrufe von `test(str)` setzen die Suche in `str` ab `lastIndex` fort. Die Eigenschaft `lastIndex` steigt mit jedem Aufruf von `test()`, der `true` zurückgibt.

> [!NOTE]
> Solange `test()` `true` zurückgibt, wird `lastIndex` _nicht_ zurückgesetzt – auch dann nicht, wenn eine andere Zeichenfolge geprüft wird!

Wenn `test()` `false` zurückgibt, wird die Eigenschaft `lastIndex` des verwendeten regulären Ausdrucks auf `0` zurückgesetzt.

Das folgende Beispiel veranschaulicht dieses Verhalten:

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

- [Polyfill für `RegExp.prototype.test` mit Unterstützung für benannte Erfassungsgruppen, `dotAll` und `sticky` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
