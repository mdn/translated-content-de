---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{JSRef}}

Das **`RegExp`**-Objekt wird zum Abgleichen von Text mit einem Muster verwendet.

Für eine Einführung in reguläre Ausdrücke lesen Sie das [Kapitel über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im JavaScript-Leitfaden. Für detaillierte Informationen zur Syntax regulärer Ausdrücke lesen Sie die [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Beschreibung

### Literale Notation und Konstruktor

Es gibt zwei Wege, ein `RegExp`-Objekt zu erstellen: Eine _literale Notation_ und ein _Konstruktor_.

- Die _literale Notation_ nimmt ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) nach dem zweiten Schrägstrich.
- Die _Konstruktor-Funktion_ nimmt entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String aus optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) als zweiten Parameter.

Die folgenden drei Ausdrücke erstellen dasselbe reguläre Ausdrucksobjekt:

```js
const re = /ab+c/i; // literal notation
// OR
const re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
// OR
const re = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Übereinstimmungen effizienter durchzuführen. Mehr über den Prozess finden Sie in den [dotnet-Dokumenten](https://learn.microsoft.com/en-us/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

Die literale Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als erstes Argument für den `RegExp()`-Konstruktor, wenn Sie [den regulären Ausdruck aus dynamischen Eingaben erstellen möchten](#erstellen_eines_regulären_ausdrucks_aus_dynamischen_eingaben).

### Flags im Konstruktor

Der Ausdruck `new RegExp(/ab+c/, flags)` erstellt ein neues `RegExp` unter Verwendung der Quelle des ersten Parameters und der durch den zweiten bereitgestellten [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags).

Bei der Verwendung der Konstruktor-Funktion sind die normalen Regeln zum Escape von Zeichen (Vorsetzen von speziellen Zeichen mit `\`, wenn sie in einem String enthalten sind) notwendig.

Zum Beispiel sind die folgenden Ausdrücke äquivalent:

```js
const re = /\w+/;
// OR
const re = new RegExp("\\w+");
```

### Besondere Behandlung von Regexes

> [!NOTE]
> Ob etwas ein "Regex" ist, kann [duck-typed](https://en.wikipedia.org/wiki/Duck_typing) werden. Es muss kein `RegExp` sein!

Einige eingebaute Methoden behandeln Regexes speziell. Sie entscheiden, ob `x` ein Regex ist, durch [mehrere Schritte](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp):

1. `x` muss ein Objekt sein (kein primitiver Wert).
2. Wenn [`x[Symbol.match]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) nicht `undefined` ist, überprüfen Sie, ob es {{Glossary("Truthy", "truthy")}} ist.
3. Andernfalls, wenn `x[Symbol.match]` `undefined` ist, überprüfen Sie, ob `x` mit dem `RegExp`-Konstruktor erstellt wurde. (Dieser Schritt sollte selten vorkommen, da ein `RegExp`-Objekt, das nicht manipuliert wurde, normalerweise eine `Symbol.match`-Eigenschaft hat.)

Beachten Sie, dass in den meisten Fällen die `Symbol.match`-Prüfung durchgeführt wird, was bedeutet:

- Ein tatsächliches `RegExp`-Objekt, dessen `Symbol.match`-Eigenschaftswert {{Glossary("Falsy", "falsy")}} ist, aber nicht `undefined` (auch wenn alles andere intakt ist, wie [`exec`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)), kann verwendet werden, als ob es kein Regex wäre.
- Ein Nicht-`RegExp`-Objekt mit einer `Symbol.match`-Eigenschaft wird behandelt, als ob es ein Regex ist.

Diese Entscheidung wurde getroffen, weil `[Symbol.match]()` die indikativste Eigenschaft ist, dass etwas zum Abgleichen verwendet werden soll. (`exec` könnte auch verwendet werden, aber weil es keine Symbol-Eigenschaft ist, gäbe es zu viele Fehlinterpretationen.) Die Orte, an denen Regexes speziell behandelt werden, sind:

- [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) und [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) werfen einen {{jsxref("TypeError")}}, wenn das erste Argument ein Regex ist.
- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) überprüfen, ob das [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Flag gesetzt ist, wenn das erste Argument ein Regex ist, bevor dessen [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) Methode aufgerufen wird.
- Der [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) Konstruktor gibt direkt das `pattern`-Argument nur dann zurück, wenn `pattern` ein Regex ist (neben ein paar anderen Bedingungen). Wenn `pattern` ein Regex ist, würde er auch dessen `source` und `flags` Eigenschaft verifizieren, anstatt `pattern` zu einem String zu zwingen.

Zum Beispiel würde [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) alle Eingaben zu Strings zwingen, aber es würde einen Fehler werfen, wenn das Argument ein Regex ist, weil es nur für das Abgleichen von Strings entworfen ist und die Verwendung eines Regex wahrscheinlich ein Entwicklerfehler ist.

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Sie können die Überprüfung umgehen, indem Sie `[Symbol.match]` auf einen {{Glossary("Falsy", "falsen")}} Wert setzen, der nicht `undefined` ist. Das würde bedeuten, dass der Regex nicht für `String.prototype.match()` verwendet werden kann (da ohne `[Symbol.match]`, `match()` ein neues `RegExp`-Objekt mit den zwei umschließenden Schrägstrichen erstellt, die durch [`re.toString()`](</de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString()>) hinzugefügt werden), aber er kann für praktisch alles andere verwendet werden.

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Perl-ähnliche RegExp-Eigenschaften

Beachten Sie, dass einige der `RegExp`-Eigenschaften sowohl lange als auch kurze (Perl-ähnliche) Namen haben. Beide Namen beziehen sich immer auf denselben Wert. (Perl ist die Programmiersprache, von der JavaScript seine regulären Ausdrücke übernommen hat.) Siehe auch [veraltete `RegExp`-Eigenschaften](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Konstruktor

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Erstellt ein neues `RegExp`-Objekt.

## Statische Eigenschaften

- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) {{deprecated_inline}}
  - : Statische, schreibgeschützte Eigenschaften, die die übereinstimmenden Klammern des Teilstrings enthalten.
- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) {{deprecated_inline}}
  - : Eine statische Eigenschaft, die den letzten String enthält, gegen den ein regulärer Ausdruck erfolgreich abgeglichen wurde.
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den letzten übereinstimmenden Teilstring enthält.
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die die letzte übereinstimmende Klammer des Teilstrings enthält.
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den Substring vor der letzten Übereinstimmung enthält.
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den Substring nach der letzten Übereinstimmung enthält.
- [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
  - : Die Konstruktor-Funktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

## Statische Methoden

- {{jsxref("RegExp.escape()")}}
  - : [Entfernt](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) alle potenziellen Regex-Syntaxzeichen in einem String und gibt einen neuen String zurück, der sicher als [literales](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwendet werden kann.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `RegExp.prototype` definiert und werden von allen `RegExp`-Instanzen geteilt.

- {{jsxref("Object/constructor", "RegExp.prototype.constructor")}}
  - : Die Konstruktor-Funktion, die das Instanzobjekt erstellt hat. Für `RegExp`-Instanzen ist der Anfangswert der {{jsxref("RegExp/RegExp", "RegExp")}}-Konstruktor.
- {{jsxref("RegExp.prototype.dotAll")}}
  - : Ob `.` Zeilenumbrüche mit einschließt oder nicht.
- {{jsxref("RegExp.prototype.flags")}}
  - : Ein String, der die Flags des `RegExp`-Objekts enthält.
- {{jsxref("RegExp.prototype.global")}}
  - : Ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet wird oder nur gegen die erste.
- {{jsxref("RegExp.prototype.hasIndices")}}
  - : Ob das Ergebnis des regulären Ausdrucks die Start- und Endindizes der erfassten Teilstrings enthält.
- {{jsxref("RegExp.prototype.ignoreCase")}}
  - : Ob bei dem Versuch, eine Übereinstimmung in einem String zu finden, die Groß- und Kleinschreibung ignoriert werden soll.
- {{jsxref("RegExp.prototype.multiline")}}
  - : Ob über mehrere Zeilen hinweg in Strings gesucht werden soll oder nicht.
- {{jsxref("RegExp.prototype.source")}}
  - : Der Text des Musters.
- {{jsxref("RegExp.prototype.sticky")}}
  - : Ob die Suche "sticky" ist oder nicht.
- {{jsxref("RegExp.prototype.unicode")}}
  - : Ob Unicode-Funktionen aktiviert sind oder nicht.
- {{jsxref("RegExp.prototype.unicodeSets")}}
  - : Ob das `v`-Flag, eine Verbesserung des `u`-Modus, aktiviert ist oder nicht.

Diese Eigenschaften sind eigene Eigenschaften jeder `RegExp`-Instanz.

- {{jsxref("RegExp/lastIndex", "lastIndex")}}
  - : Der Index, ab dem die nächste Übereinstimmung beginnen soll.

## Instanz-Methoden

- {{jsxref("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : Kompiliert (oder erneut kompiliert) einen regulären Ausdruck während der Ausführung eines Skripts.
- {{jsxref("RegExp.prototype.exec()")}}
  - : Führt eine Suche nach einer Übereinstimmung in ihrem String-Parameter durch.
- {{jsxref("RegExp.prototype.test()")}}
  - : Testet auf eine Übereinstimmung in ihrem String-Parameter.
- {{jsxref("RegExp.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das angegebene Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
  - : Führt eine Übereinstimmung mit dem gegebenen String durch und gibt das Übereinstimmungsergebnis zurück.
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
  - : Gibt alle Übereinstimmungen des regulären Ausdrucks mit einem String zurück.
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
  - : Ersetzt Übereinstimmungen im gegebenen String mit einem neuen Teilstring.
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
  - : Durchsucht den Treffer im gegebenen String und gibt den Index zurück, an dem das Muster im String gefunden wurde.
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
  - : Teilt den gegebenen String in ein Array, indem der String in Teilstrings aufgeteilt wird.

## Beispiele

### Verwendung eines regulären Ausdrucks zur Änderung des Datenformats

Das folgende Skript verwendet die Methode {{jsxref("String.prototype.replace()")}}, um einen Namen im Format _Vorname Nachname_ zu finden und ihn im Format _Nachname, Vorname_ auszugeben.

Im Ersetzungstext verwendet das Skript `$1` und `$2`, um auf die Ergebnisse der entsprechenden übereinstimmenden Klammern im regulären Ausdrucksmuster zu verweisen.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr);
```

Dies zeigt `"Cruz, Maria"` an.

### Verwendung regulärer Ausdrücke zum Aufteilen von Zeilen mit unterschiedlichen Zeilenenden/Zeilenumbrüchen

Das Standard-Zeilenende variiert je nach Plattform (Unix, Windows, etc.). Das in diesem Beispiel bereitgestellte Zeilen-Splitting funktioniert auf allen Plattformen.

```js
const text = "Some text\nAnd some more\r\nAnd yet\rThis is the end";
const lines = text.split(/\r\n|\r|\n/);
console.log(lines); // [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

Beachten Sie, dass die Reihenfolge der Muster im regulären Ausdruck wichtig ist.

### Verwendung eines regulären Ausdrucks über mehrere Zeilen

```js
const s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Returns null

s.match(/yes[^]*day/);
// Returns ["yes\nmake my day"]
```

### Verwendung eines regulären Ausdrucks mit dem Sticky-Flag

Das {{jsxref("RegExp/sticky", "sticky")}}-Flag zeigt an, dass der reguläre Ausdruck ein Sticky-Matching im Zielstring durchführt, indem versucht wird, ab dem {{jsxref("RegExp.prototype.lastIndex")}} zu matchen.

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### Der Unterschied zwischen dem Sticky-Flag und dem Global-Flag

Mit dem Sticky-Flag `y` muss das nächste Match an der `lastIndex`-Position stattfinden, während mit dem Global-Flag `g` das Match an der `lastIndex`-Position oder später stattfinden kann:

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

Mit dem Global-Flag `g` würden alle 6 Ziffern abgeglichen, nicht nur 3.

### Reguläre Ausdrücke und Unicode-Zeichen

`\w` und `\W` passen nur auf ASCII-basierte Zeichen; z. B. von `a` bis `z`, `A` bis `Z`, `0` bis `9` und `_`.

Um Zeichen aus anderen Sprachen, wie z. B. Kyrillisch oder Hebräisch, zu matchen, verwenden Sie `\uHHHH`, wobei `HHHH` der Unicode-Wert des Zeichens im Hexadezimalformat ist.

Dieses Beispiel demonstriert, wie man Unicode-Zeichen aus einem Wort trennen kann.

```js
const text = "Образец text на русском языке";
const regex = /[\u0400-\u04FF]+/g;

const match = regex.exec(text);
console.log(match[0]); // 'Образец'
console.log(regex.lastIndex); // 7

const match2 = regex.exec(text);
console.log(match2[0]); // 'на' (did not log 'text')
console.log(regex.lastIndex); // 15

// and so on
```

Das [Unicode-Eigenschaftsausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Feature bietet eine einfachere Möglichkeit, bestimmte Unicode-Bereiche zu identifizieren, indem es Aussagen wie `\p{scx=Cyrl}` (um einen kyrillischen Buchstaben zu finden) oder `\p{L}/u` (um einen Buchstaben aus einer beliebigen Sprache zu finden) ermöglicht.

### Extraktion des Subdomänennamens aus der URL

```js
const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> [!NOTE]
> Statt reguläre Ausdrücke zum Parsen von URLs zu verwenden, ist es gewöhnlich besser, den eingebauten URL-Parser des Browsers zu verwenden, indem man die [URL API](/de/docs/Web/API/URL_API) verwendet.

### Erstellen eines regulären Ausdrucks aus dynamischen Eingaben

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

Ab Firefox 34 ist im Falle einer erfassenden Gruppe mit Quantifikatoren, die ihre Ausübung verhindern, der übereinstimmende Text für eine erfassende Gruppe jetzt `undefined` statt eines leeren Strings:

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

Beachten Sie, dass aufgrund der Web-Kompatibilität `RegExp.$N` weiterhin einen leeren String zurückgeben wird, anstatt `undefined` ([bug 1053944](https://bugzil.la/1053944)).

## Siehe auch

- [Polyfill für viele moderne `RegExp`-Funktionen (`dotAll`, `sticky` Flags, benannte Erfassungsgruppen, etc.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
