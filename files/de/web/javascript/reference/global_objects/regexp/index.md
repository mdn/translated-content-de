---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

Das **`RegExp`**-Objekt wird zum Abgleichen von Texten anhand eines Musters verwendet.

Für eine Einführung in reguläre Ausdrücke lesen Sie das [Kapitel über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im JavaScript-Leitfaden. Für detaillierte Informationen zur Syntax regulärer Ausdrücke lesen Sie die [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Beschreibung

### Literale Notation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: eine _literale Notation_ und einen _Konstruktor_.

- Die _literale Notation_ nimmt ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) nach dem zweiten Schrägstrich.
- Die _Konstruktor-Funktion_ nimmt entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) als zweiten Parameter.

Die folgenden drei Ausdrücke erzeugen dasselbe reguläre Ausdrucksobjekt:

```js
const re = /ab+c/i; // literal notation
// OR
const re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
// OR
const re = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Übereinstimmungen effizienter zu finden. Mehr über den Prozess finden Sie in den [dotnet-Dokumenten](https://learn.microsoft.com/en-us/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

Die literale Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Laufzeit zur Kompilierung des regulären Ausdrucks.

Verwenden Sie einen String als erstes Argument des `RegExp()` Konstruktors, wenn Sie [den regulären Ausdruck aus dynamischen Eingaben erstellen](#erstellung_eines_regulären_ausdrucks_aus_dynamischen_eingaben) wollen.

### Flags im Konstruktor

Der Ausdruck `new RegExp(/ab+c/, flags)` erstellt ein neues `RegExp`, indem die Quelle des ersten Parameters und die vom zweiten bereitgestellten [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) verwendet werden.

Beim Verwenden der Konstruktorfunktion sind die normalen String-Escape-Regeln erforderlich (besondere Zeichen müssen in einem String mit `\` eingefügt werden).

Zum Beispiel sind die folgenden gleichwertig:

```js
const re = /\w+/;
// OR
const re = new RegExp("\\w+");
```

### Spezielle Behandlung von Regexen

> [!NOTE]
> Ob etwas ein "Regex" ist, kann über [Duck-Typing](https://en.wikipedia.org/wiki/Duck_typing) bestimmt werden. Es muss kein `RegExp` sein!

Einige eingebaute Methoden behandeln Regexe speziell. Sie bestimmen in [mehreren Schritten](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp), ob `x` ein Regex ist:

1. `x` muss ein Objekt sein (kein primitiver Typ).
2. Wenn [`x[Symbol.match]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) nicht `undefined` ist, überprüfen Sie, ob es {{Glossary("Truthy", "truthy")}} ist.
3. Andernfalls, wenn `x[Symbol.match]` `undefined` ist, überprüfen Sie, ob `x` mit dem `RegExp`-Konstruktor erstellt wurde. (Dieser Schritt sollte selten auftreten, da, wenn `x` ein `RegExp`-Objekt ist, das nicht verändert wurde, es eine `Symbol.match`-Eigenschaft haben sollte.)

Beachten Sie, dass in den meisten Fällen die `Symbol.match`-Überprüfung durchgeführt wird, was bedeutet:

- Ein tatsächliches `RegExp`-Objekt, dessen `Symbol.match`-Eigenschaftswert {{Glossary("Falsy", "falsy")}} aber nicht `undefined` ist (selbst wenn alles andere intakt bleibt, wie [`exec`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)), kann verwendet werden, als ob es kein Regex wäre.
- Ein Nicht-`RegExp`-Objekt mit einer `Symbol.match`-Eigenschaft wird behandelt, als wäre es ein Regex.

Diese Wahl wurde getroffen, weil `[Symbol.match]()` die am besten indizierende Eigenschaft ist, dass etwas zum Abgleichen verwendet werden soll. (`exec` könnte auch verwendet werden, aber da es keine Symbol-Eigenschaft ist, würde es zu viele Fehlalarme geben.) Zu den Stellen, die Regexe speziell behandeln, gehören:

- [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) und [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) werfen einen {{jsxref("TypeError")}}, wenn das erste Argument ein Regex ist.
- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) überprüfen, ob das [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Flag gesetzt ist, wenn das erste Argument ein Regex ist, bevor seine [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) Methode aufgerufen wird.
- Der [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) Konstruktor gibt direkt das `pattern`-Argument nur dann zurück, wenn `pattern` ein Regex ist (neben einigen anderen Bedingungen). Wenn `pattern` ein Regex ist, würde es auch die `source`- und `flags`-Eigenschaften von `pattern` abfragen, anstatt `pattern` in einen String zu zwingen.

Zum Beispiel würde [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) alle Eingaben in Strings umwandeln, aber es würde eine Ausnahme auslösen, wenn das Argument ein Regex ist, da es nur zum Abgleichen von Strings gedacht ist und die Verwendung eines Regex wahrscheinlich ein Entwicklerfehler ist.

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Sie können die Prüfung umgehen, indem Sie `[Symbol.match]` auf einen {{Glossary("Falsy", "falsy")}} Wert setzen, der nicht `undefined` ist. Dies würde bedeuten, dass das Regex nicht für `String.prototype.match()` verwendet werden kann (da ohne `[Symbol.match]`, `match()` ein neues `RegExp`-Objekt mit den zwei durch [`re.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) hinzugefügten umschließenden Schrägstrichen konstruieren würde), aber es kann für praktisch alles andere verwendet werden.

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Perl-ähnliche Eigenschaften von RegExp

Beachten Sie, dass mehrere der `RegExp`-Eigenschaften sowohl lange als auch kurze (Perl-ähnliche) Namen haben. Beide Namen beziehen sich immer auf denselben Wert. (Perl ist die Programmiersprache, nach der sich JavaScript bei der Modellierung seiner regulären Ausdrücke gerichtet hat.) Siehe auch [veraltete `RegExp`-Eigenschaften](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Konstruktor

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Erstellt ein neues `RegExp`-Objekt.

## Statische Eigenschaften

- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) {{deprecated_inline}}
  - : Statische, schreibgeschützte Eigenschaften, die geklammerte Teilstring-Übereinstimmungen enthalten.
- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) {{deprecated_inline}}
  - : Eine statische Eigenschaft, die den letzten String enthält, gegen den ein regulärer Ausdruck erfolgreich abgeglichen wurde.
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den letzten übereinstimmenden Teilstring enthält.
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die die letzte geklammerte Teilstring-Übereinstimmung enthält.
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den Teilstring vor der zuletzt gefundenen Übereinstimmung enthält.
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den Teilstring nach der zuletzt gefundenen Übereinstimmung enthält.
- [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Statische Methoden

- {{jsxref("RegExp.escape()")}}
  - : [Entfernt](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) alle potenziellen Regex-Syntaxzeichen aus einem String und gibt einen neuen String zurück, der sicher als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `RegExp.prototype` definiert und werden von allen `RegExp`-Instanzen geteilt.

- {{jsxref("Object/constructor", "RegExp.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `RegExp`-Instanzen ist der Anfangswert der {{jsxref("RegExp/RegExp", "RegExp")}}-Konstruktor.
- {{jsxref("RegExp.prototype.dotAll")}}
  - : Ob `.` Zeilenumbrüche abgleicht oder nicht.
- {{jsxref("RegExp.prototype.flags")}}
  - : Ein String, der die Flags des `RegExp`-Objekts enthält.
- {{jsxref("RegExp.prototype.global")}}
  - : Ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet werden soll oder nur gegen die erste.
- {{jsxref("RegExp.prototype.hasIndices")}}
  - : Ob das Ergebnis des regulären Ausdrucks die Anfangs- und Endindices der erfassten Teilstrings freilegt.
- {{jsxref("RegExp.prototype.ignoreCase")}}
  - : Ob die Groß-/Kleinschreibung beim Versuch eines Abgleichs in einem String ignoriert werden soll.
- {{jsxref("RegExp.prototype.multiline")}}
  - : Ob in Strings über mehrere Zeilen hinweg gesucht werden soll oder nicht.
- {{jsxref("RegExp.prototype.source")}}
  - : Der Text des Musters.
- {{jsxref("RegExp.prototype.sticky")}}
  - : Ob die Suche "sticky" ist oder nicht.
- {{jsxref("RegExp.prototype.unicode")}}
  - : Ob Unicode-Funktionen aktiviert sind oder nicht.
- {{jsxref("RegExp.prototype.unicodeSets")}}
  - : Ob das `v`-Flag, ein Upgrade des `u`-Modus, aktiviert ist oder nicht.

Diese Eigenschaften sind eigene Eigenschaften jeder `RegExp`-Instanz.

- {{jsxref("RegExp/lastIndex", "lastIndex")}}
  - : Der Index, an dem die nächste Übereinstimmung starten soll.

## Instanz-Methoden

- {{jsxref("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : Kompiliert den regulären Ausdruck während der Ausführung eines Skripts neu.
- {{jsxref("RegExp.prototype.exec()")}}
  - : Führt eine Suche nach einer Übereinstimmung in seinem Zeichenkettenparameter aus.
- {{jsxref("RegExp.prototype.test()")}}
  - : Testet eine Übereinstimmung in seinem Zeichenkettenparameter.
- {{jsxref("RegExp.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
  - : Führt den Abgleich mit der angegebenen Zeichenfolge durch und gibt das Übereinstimmungsergebnis zurück.
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
  - : Gibt alle Übereinstimmungen des regulären Ausdrucks gegen eine Zeichenfolge zurück.
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
  - : Ersetzt Übereinstimmungen in der angegebenen Zeichenfolge durch einen neuen Teilstring.
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
  - : Sucht die Übereinstimmung in der angegebenen Zeichenfolge und gibt den Index zurück, an dem das Muster in der Zeichenfolge gefunden wurde.
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
  - : Teilt die angegebene Zeichenfolge in ein Array, indem die Zeichenfolge in Teilstrings getrennt wird.

## Beispiele

### Verwendung eines regulären Ausdrucks zur Änderung des Datenformats

Das folgende Skript verwendet die {{jsxref("String.prototype.replace()")}} Methode, um einen Namen im Format _Vorname Nachname_ abzugleichen und in das Format _Nachname, Vorname_ auszugeben.

Im Ersetzungstext verwendet das Skript `$1` und `$2`, um die Ergebnisse der entsprechenden Klammerausdrücke im regulären Ausdrucksmuster anzugeben.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr);
```

Dies zeigt `"Cruz, Maria"` an.

### Verwendung eines regulären Ausdrucks zum Aufteilen von Zeilen mit unterschiedlichen Zeilenendungen/Enden von Zeilen/Zeilenumbrüchen

Das Standard-Zeilenende variiert je nach Plattform (Unix, Windows, etc.). Die Zeilenaufteilung, die in diesem Beispiel bereitgestellt wird, funktioniert auf allen Plattformen.

```js
const text = "Some text\nAnd some more\r\nAnd yet\nThis is the end";
const lines = text.split(/\r?\n/);
console.log(lines); // [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

Beachten Sie, dass die Reihenfolge der Muster im regulären Ausdruck von Bedeutung ist.

### Verwendung eines regulären Ausdrucks über mehrere Zeilen

Standardmäßig stimmt das Zeichen `.` nicht mit Zeilenumbrüchen überein. Um es mit Zeilenumbrüchen übereinstimmen zu lassen, verwenden Sie das `s`-Flag (`dotAll`-Modus).

```js
const s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Returns null

s.match(/yes.*day/s);
// Returns ["yes\nmake my day"]
```

### Verwendung eines regulären Ausdrucks mit dem Sticky-Flag

Das {{jsxref("RegExp/sticky", "sticky")}}-Flag zeigt an, dass der reguläre Ausdruck eine Sticky-Übereinstimmung in der Zielzeichenfolge durchführt, indem versucht wird, abzuklären ab {{jsxref("RegExp.prototype.lastIndex")}} zu beginnen.

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### Der Unterschied zwischen dem Sticky-Flag und dem globalen Flag

Mit dem Sticky-Flag `y` muss das nächste Match an der `lastIndex`-Position stattfinden, während mit dem globalen Flag `g` das Match an der `lastIndex`-Position oder später stattfinden kann:

```js
const re = /\d/y;
let r;
while ((r = re.exec("123 456"))) {
  console.log(r, "AND re.lastIndex", re.lastIndex);
}

// [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
//  … and no more match.
```

Mit dem globalen Flag `g` würden alle 6 Ziffern abgeglichen, nicht nur 3.

### Regulärer Ausdruck und Unicode-Zeichen

`\w` und `\W` stimmen nur mit Zeichen auf ASCII-Basis überein, zum Beispiel von `a` bis `z`, `A` bis `Z`, `0` bis `9` und `_`.

Um Zeichen aus anderen Sprachen wie Kyrillisch oder Hebräisch abzugleichen, verwenden Sie `\uHHHH`, wobei `HHHH` der Unicode-Wert des Zeichens in Hexadezimaldarstellung ist.

Dieses Beispiel zeigt, wie man Unicode-Zeichen aus einem Wort heraustrennen kann.

```js
const text = "Образец text на русском языке";
const regex = /[\u0400-\u04ff]+/g;

const match = regex.exec(text);
console.log(match[0]); // 'Образец'
console.log(regex.lastIndex); // 7

const match2 = regex.exec(text);
console.log(match2[0]); // 'на' (did not log 'text')
console.log(regex.lastIndex); // 15

// and so on
```

Die [Unicode-Eigenschafts-Eskapaden](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Funktion bietet eine einfachere Möglichkeit, bestimmte Unicode-Bereiche zu anvisieren, indem Erklärungen wie `\p{scx=Cyrl}` (um einen beliebigen kyrillischen Buchstaben abzugleichen) oder `\p{L}/u` (um einen Buchstaben aus jeder Sprache abzugleichen) erlaubt werden.

### Extrahierung des Subdomainnamens aus einer URL

```js
const url = "http://xxx.example.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> [!NOTE]
> Anstatt reguläre Ausdrücke zu verwenden, um URLs zu parsen, ist es normalerweise besser, den eingebauten URL-Parser des Browsers mit der Verwendung der [URL API](/de/docs/Web/API/URL_API) zu verwenden.

### Erstellung eines regulären Ausdrucks aus dynamischen Eingaben

```js
const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
const order = "Let me get some bacon and eggs, please";

order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g"));
// Returns ['bacon', 'eggs']
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Firefox-spezifische Hinweise

Beginnend mit Firefox 34 ist im Fall einer Fanggruppe mit Quantoren, die deren Ausführung verhindern, der abgeglichene Text für eine Fanggruppe jetzt `undefined` anstelle eines leeren Strings:

```js
// Firefox 33 or older
"x".replace(/x(.)?/g, (m, group) => {
  console.log(`group: ${JSON.stringify(group)}`);
});
// group: ""

// Firefox 34 or newer
"x".replace(/x(.)?/g, (m, group) => {
  console.log(`group: ${group}`);
});
// group: undefined
```

Beachten Sie, dass aufgrund der Webkompatibilität `RegExp.$N` weiterhin einen leeren String anstelle von `undefined` zurückgeben wird ([Bug 1053944](https://bugzil.la/1053944)).

## Siehe auch

- [Polyfill vieler moderner `RegExp`-Funktionen (`dotAll`, `sticky` Flags, benannte Fanggruppen usw.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
