---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`RegExp`**-Objekt wird verwendet, um Text mit einem Muster abzugleichen.

Für eine Einführung in reguläre Ausdrücke lesen Sie das Kapitel [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im JavaScript-Leitfaden. Für detaillierte Informationen zur Syntax von regulären Ausdrücken lesen Sie die [Referenz für reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Beschreibung

### Literal-Notation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: eine _Literal-Notation_ und einen _Konstruktor_.

- Die _Literal-Notation_ verwendet ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) nach dem zweiten Schrägstrich.
- Die _Konstruktor-Funktion_ nimmt entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) als zweiten Parameter.

Die folgenden drei Ausdrücke erzeugen dasselbe reguläre Ausdrucksobjekt:

```js
const re = /ab+c/i; // literal notation
// OR
const re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
// OR
const re = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Übereinstimmungen effizienter durchzuführen. Mehr über den Prozess finden Sie in den [dotnet docs](https://learn.microsoft.com/en-us/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

Die Literal-Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als erstes Argument für den `RegExp()`-Konstruktor, wenn Sie [den regulären Ausdruck aus dynamischen Eingaben erstellen möchten](#einen_regulären_ausdruck_aus_dynamischen_eingaben_erstellen).

### Flags im Konstruktor

Der Ausdruck `new RegExp(/ab+c/, flags)` wird einen neuen `RegExp` unter Verwendung der Quelle des ersten Parameters und der durch den zweiten bereitgestellten [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) erstellen.

Bei der Verwendung der Konstruktorfunktion sind die normalen Escape-Regeln für Zeichenfolgen (Spezialzeichen mit `\` voranstellen, wenn sie in einer Zeichenfolge enthalten sind) erforderlich.

Zum Beispiel sind die folgenden Äquivalente:

```js
const re = /\w+/;
// OR
const re = new RegExp("\\w+");
```

### Spezielle Behandlung für Regexes

> [!NOTE]
> Ob etwas ein "Regex" ist, kann durch [Duck-Typisierung](https://en.wikipedia.org/wiki/Duck_typing) bestimmt werden. Es muss kein `RegExp` sein!

Einige eingebaute Methoden behandeln Regexes speziell. Sie entscheiden, ob `x` ein Regex ist, durch [mehrere Schritte](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp):

1. `x` muss ein Objekt sein (nicht primitiv).
2. Wenn [`x[Symbol.match]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) nicht `undefined` ist, überprüfen Sie, ob es {{Glossary("Truthy", "wahr")}} ist.
3. Andernfalls, wenn `x[Symbol.match]` `undefined` ist, überprüfen Sie, ob `x` mit dem `RegExp`-Konstruktor erstellt wurde. (Dieser Schritt sollte selten vorkommen, da wenn `x` ein `RegExp`-Objekt ist, das nicht manipuliert wurde, es eine `Symbol.match`-Eigenschaft haben sollte.)

Beachten Sie, dass in den meisten Fällen die `Symbol.match`-Überprüfung durchgeführt wird, was bedeutet:

- Ein tatsächliches `RegExp`-Objekt, dessen `Symbol.match`-Eigenschaftswert {{Glossary("Falsy", "falsch")}} ist, aber nicht `undefined` (auch wenn alles andere intakt ist, wie [`exec`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)), kann verwendet werden, als ob es kein Regex wäre.
- Ein Nicht-`RegExp`-Objekt mit einer `Symbol.match`-Eigenschaft wird behandelt, als wäre es ein Regex.

Diese Entscheidung wurde getroffen, weil `[Symbol.match]()` die aussagekräftigste Eigenschaft ist, die darauf hinweist, dass etwas zum Abgleichen verwendet werden soll. (`exec` könnte auch verwendet werden, aber da es sich nicht um eine Symboleigenschaft handelt, würde es zu viele Fehlalarme geben.) Die Orte, die Regexes speziell behandeln, umfassen:

- [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), und [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) werfen einen {{jsxref("TypeError")}}, wenn das erste Argument ein Regex ist.
- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) überprüfen, ob das [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Flag gesetzt ist, wenn das erste Argument ein Regex ist, bevor es seine [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) Methode aufruft.
- Der [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) Konstruktor gibt direkt das `pattern`-Argument zurück, nur wenn `pattern` ein Regex ist (unter einigen anderen Bedingungen). Wenn `pattern` ein Regex ist, würde es auch die `source`- und `flags`-Eigenschaften von `pattern` abfragen, anstatt `pattern` zu einem String zu zwingen.

Zum Beispiel würde [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) alle Eingaben zu Strings zwingen, aber es würde einen Fehler werfen, wenn das Argument ein Regex ist, da es nur dazu gedacht ist, Strings abzugleichen, und die Verwendung eines Regex wahrscheinlich ein Entwicklerfehler ist.

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Sie können die Überprüfung umgehen, indem Sie `[Symbol.match]` auf einen {{Glossary("Falsy", "falschen")}} Wert setzen, der nicht `undefined` ist. Das würde bedeuten, dass der Regex nicht für `String.prototype.match()` verwendet werden kann (da ohne `[Symbol.match]`, `match()` ein neues `RegExp`-Objekt mit den beiden umgebenden Schrägstrichen, die durch [`re.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) hinzugefügt werden, erstellen würde), aber er kann praktisch für alles andere verwendet werden.

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Perl-ähnliche RegExp-Eigenschaften

Beachten Sie, dass mehrere der `RegExp`-Eigenschaften sowohl lange als auch kurze (Perl-ähnliche) Namen haben. Beide Namen beziehen sich immer auf denselben Wert. (Perl ist die Programmiersprache, aus der JavaScript seine regulären Ausdrücke modelliert hat.) Siehe auch [Veraltete `RegExp`-Eigenschaften](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Konstruktor

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Erstellt ein neues `RegExp`-Objekt.

## Statische Eigenschaften

- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) {{deprecated_inline}}
  - : Statische, schreibgeschützte Eigenschaften, die klammernde Teilstringübereinstimmungen enthalten.
- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) {{deprecated_inline}}
  - : Eine statische Eigenschaft, die den letzten String enthält, gegen den ein regulärer Ausdruck erfolgreich abgeglichen wurde.
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den zuletzt abgeglichenen Teilstring enthält.
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die die zuletzt klammernde Teilstringübereinstimmung enthält.
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den vor der letzten Übereinstimmung stehenden Teilstring enthält.
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den nach der letzten Übereinstimmung stehenden Teilstring enthält.
- [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
  - : Die Konstruktorfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

## Statische Methoden

- {{jsxref("RegExp.escape()")}}
  - : [Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) alle potenziellen regulären Ausdrucks-Syntaxzeichen in einem String und gibt einen neuen String zurück, der als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor sicher verwendet werden kann.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `RegExp.prototype` definiert und werden von allen `RegExp`-Instanzen geteilt.

- {{jsxref("Object/constructor", "RegExp.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `RegExp`-Instanzen ist der Anfangswert der {{jsxref("RegExp/RegExp", "RegExp")}} Konstruktor.
- {{jsxref("RegExp.prototype.dotAll")}}
  - : Ob `.` Zeilenumbrüche matched oder nicht.
- {{jsxref("RegExp.prototype.flags")}}
  - : Ein String, der die Flags des `RegExp`-Objekts enthält.
- {{jsxref("RegExp.prototype.global")}}
  - : Ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet wird oder nur gegen die erste.
- {{jsxref("RegExp.prototype.hasIndices")}}
  - : Ob das reguläre Ausdrucksergebnis die Start- und Endindizes der erfassten Teilstrings freilegt.
- {{jsxref("RegExp.prototype.ignoreCase")}}
  - : Ob die Groß- und Kleinschreibung beim Versuch, eine Übereinstimmung in einem String zu finden, ignoriert wird.
- {{jsxref("RegExp.prototype.multiline")}}
  - : Ob in Strings über mehrere Zeilen hinweg gesucht wird oder nicht.
- {{jsxref("RegExp.prototype.source")}}
  - : Der Text des Musters.
- {{jsxref("RegExp.prototype.sticky")}}
  - : Ob die Suche sticky ist oder nicht.
- {{jsxref("RegExp.prototype.unicode")}}
  - : Ob Unicode-Funktionen aktiviert sind oder nicht.
- {{jsxref("RegExp.prototype.unicodeSets")}}
  - : Ob das `v`-Flag, ein Upgrade auf den `u`-Modus, aktiviert ist oder nicht.

Diese Eigenschaften sind eigene Eigenschaften jeder `RegExp`-Instanz.

- {{jsxref("RegExp/lastIndex", "lastIndex")}}
  - : Der Index, an dem die nächste Übereinstimmung starten soll.

## Instanz-Methoden

- {{jsxref("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : (Neu-)kompiliert einen regulären Ausdruck während der Ausführung eines Skripts.
- {{jsxref("RegExp.prototype.exec()")}}
  - : Führt eine Suche nach einer Übereinstimmung in seinem String-Parameter aus.
- {{jsxref("RegExp.prototype.test()")}}
  - : Testet nach einer Übereinstimmung in seinem String-Parameter.
- {{jsxref("RegExp.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
  - : Führt eine Übereinstimmung auf einen gegebenen String aus und gibt das Übereinstimmungsergebnis zurück.
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
  - : Gibt alle Übereinstimmungen des regulären Ausdrucks in einem String zurück.
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
  - : Ersetzt Übereinstimmungen in einem gegebenen String durch einen neuen Teilstring.
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
  - : Sucht die Übereinstimmung in einem gegebenen String und gibt den Index zurück, an dem das Muster im String gefunden wurde.
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
  - : Teilt einen gegebenen String in ein Array, indem der String in Teilstrings aufgetrennt wird.

## Beispiele

### Verwendung eines regulären Ausdrucks zur Änderung des Datenformats

Das folgende Skript verwendet die Methode {{jsxref("String.prototype.replace()")}}, um einen Namen im Format _Vorname Nachname_ abzugleichen und ihn im Format _Nachname, Vorname_ auszugeben.

Im Ersetzungstext verwendet das Skript `$1` und `$2`, um die Ergebnisse der entsprechenden Klammernpaarungen im regulären Ausdrucksmuster anzuzeigen.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr);
```

Dies zeigt `"Cruz, Maria"`.

### Verwendung eines regulären Ausdrucks zum Aufteilen von Zeilen mit unterschiedlichen Zeilenenden/Zeilenumbrüchen

Das Standardzeilenende variiert je nach Plattform (Unix, Windows, usw.). Die in diesem Beispiel gezeigte Zeilenaufteilung funktioniert auf allen Plattformen.

```js
const text = "Some text\nAnd some more\r\nAnd yet\nThis is the end";
const lines = text.split(/\r?\n/);
console.log(lines); // [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

Beachten Sie, dass die Reihenfolge der Muster im regulären Ausdruck von Bedeutung ist.

### Verwendung eines regulären Ausdrucks über mehrere Zeilen hinweg

Standardmäßig stimmt das Zeichen `.` nicht mit Zeilenumbrüchen überein. Um es mit Zeilenumbrüchen übereinstimmen zu lassen, verwenden Sie das `s`-Flag (`dotAll`-Modus).

```js
const s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Returns null

s.match(/yes.*day/s);
// Returns ["yes\nmake my day"]
```

### Verwendung eines regulären Ausdrucks mit dem Sticky-Flag

Das {{jsxref("RegExp/sticky", "sticky")}}-Flag zeigt an, dass der reguläre Ausdruck beim Zielstring ein Sticky-Matching durchführt, indem versucht wird, bei {{jsxref("RegExp.prototype.lastIndex")}} zu beginnen.

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

Mit dem Sticky-Flag `y` muss das nächste Ergebnis an der `lastIndex`-Position auftreten, während mit dem globalen Flag `g` die Übereinstimmung an der `lastIndex`-Position oder später auftreten kann:

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

Mit dem globalen Flag `g` würden alle 6 Ziffern übereinstimmen, nicht nur 3.

### Reguläre Ausdrücke und Unicode-Zeichen

`\w` und `\W` stimmen nur mit ASCII-basierten Zeichen überein; zum Beispiel `a` bis `z`, `A` bis `Z`, `0` bis `9` und `_`.

Um Zeichen aus anderen Sprachen wie Kyrillisch oder Hebräisch abzugleichen, verwenden Sie `\uHHHH`, wobei `HHHH` der Unicode-Wert des Zeichens in hexadezimaler Schreibweise ist.

Dieses Beispiel zeigt, wie man Unicide-Zeichen eines Wortes trennen kann.

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

Die [Unicode-Eigenschaftszeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Funktion bietet eine einfachere Möglichkeit, bestimmte Unicode-Bereiche anzusprechen, indem Anweisungen wie `\p{scx=Cyrl}` (um ein beliebiges kyrillisches Zeichen abzugleichen) oder `\p{L}/u` (um einen Buchstaben aus einer beliebigen Sprache abzugleichen) ermöglicht werden.

### Herausfiltern des Subdomain-Namens aus einer URL

```js
const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> [!NOTE]
> Anstatt reguläre Ausdrücke zum Parsen von URLs zu verwenden, ist es in der Regel besser, den eingebauten URL-Parser des Browsers mit dem [URL API](/de/docs/Web/API/URL_API) zu verwenden.

### Einen regulären Ausdruck aus dynamischen Eingaben erstellen

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

Ab Firefox 34 ist im Fall einer erkennenden Gruppe mit Quantoren, die ihre Übung verhindern, der abgeglichene Text für eine Klammerngruppe nun `undefined` anstelle eines leeren Strings:

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

Beachten Sie, dass aufgrund der Web-Kompatibilität `RegExp.$N` immer noch einen leeren String anstelle von `undefined` zurückgibt ([Bug 1053944](https://bugzil.la/1053944)).

## Siehe auch

- [Polyfill vieler moderner `RegExp`-Funktionen (`dotAll`, `sticky` Flags, benannte Erfassungsgruppen, usw.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
