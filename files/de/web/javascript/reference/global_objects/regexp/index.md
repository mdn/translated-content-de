---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{JSRef}}

Das **`RegExp`**-Objekt wird verwendet, um Text mit einem Muster abzugleichen.

Für eine Einführung in reguläre Ausdrücke lesen Sie das [Kapitel zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) im JavaScript-Leitfaden. Für detaillierte Informationen zur Syntax von regulären Ausdrücken lesen Sie die [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Beschreibung

### Literale Notation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: eine _literale Notation_ und einen _Konstruktor_.

- Die _literale Notation_ umfasst ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) nach dem zweiten Schrägstrich.
- Die _Konstruktorfunktion_ akzeptiert entweder einen String oder ein `RegExp`-Objekt als erstes Argument und einen String mit optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) als zweites Argument.

Die folgenden drei Ausdrücke erstellen dasselbe reguläre Ausdrucksobjekt:

```js
const re = /ab+c/i; // literal notation
// OR
const re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
// OR
const re = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Übereinstimmungen effizienter zu finden. Mehr über den Prozess finden Sie in den [dotnet docs](https://learn.microsoft.com/en-us/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

Die literale Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als erstes Argument für den `RegExp()`-Konstruktor, wenn Sie [den regulären Ausdruck aus dynamischen Eingaben erstellen](#erstellen_eines_regulären_ausdrucks_aus_dynamischen_eingaben) möchten.

### Flags im Konstruktor

Der Ausdruck `new RegExp(/ab+c/, flags)` erstellt ein neues `RegExp`-Objekt, das die Quelle des ersten Parameters und die durch den zweiten bereitgestellten [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) verwendet.

Bei der Verwendung der Konstruktorfunktion sind die normalen String-Escape-Regeln (wodurch spezielle Zeichen mit `\` in einem String eingeschlossen werden) erforderlich.

Zum Beispiel sind die folgenden äquivalent:

```js
const re = /\w+/;
// OR
const re = new RegExp("\\w+");
```

### Spezielle Behandlung von Regexes

> [!NOTE]
> Ob etwas ein "Regex" ist, kann [duck-typed](https://en.wikipedia.org/wiki/Duck_typing) werden. Es muss kein `RegExp` sein!

Einige eingebaute Methoden behandeln Regexes auf besondere Weise. Sie bestimmen, ob `x` ein Regex ist, durch [mehrere Schritte](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp):

1. `x` muss ein Objekt (kein primitiver Wert) sein.
2. Wenn [`x[Symbol.match]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) nicht `undefined` ist, überprüfen Sie, ob es [truthy](/de/docs/Glossary/Truthy) ist.
3. Andernfalls, wenn `x[Symbol.match]` `undefined` ist, prüfen Sie, ob `x` mit dem `RegExp`-Konstruktor erstellt wurde. (Dieser Schritt sollte selten vorkommen, da, wenn `x` ein `RegExp`-Objekt ist, das nicht manipuliert wurde, es eine `Symbol.match`-Eigenschaft haben sollte.)

Beachten Sie, dass in den meisten Fällen die `Symbol.match`-Überprüfung durchgeführt wird, was bedeutet:

- Ein echtes `RegExp`-Objekt, dessen `Symbol.match`-Eigenschaftswert [falsy](/de/docs/Glossary/Falsy), aber nicht `undefined` ist (selbst wenn alles andere intakt ist, wie [`exec`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)), kann verwendet werden, als wäre es kein Regex.
- Ein Nicht-`RegExp`-Objekt mit einer `Symbol.match`-Eigenschaft wird als Regex behandelt.

Diese Entscheidung wurde getroffen, weil `[Symbol.match]()` die aussagekräftigste Eigenschaft ist, dass etwas für das Matching verwendet werden soll. (`exec` könnte auch verwendet werden, aber da es keine Symbol-Eigenschaft ist, gäbe es zu viele Fehlinterpretationen.) Die Orte, die Regexes speziell behandeln, umfassen:

- [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) und [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) werfen einen {{jsxref("TypeError")}}, wenn das erste Argument ein Regex ist.
- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) überprüfen, ob das [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)-Flag gesetzt ist, wenn das erste Argument ein Regex ist, bevor die Methode [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufgerufen wird.
- Der [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)-Konstruktor gibt direkt das `pattern`-Argument nur dann zurück, wenn `pattern` ein Regex ist (neben einigen anderen Bedingungen). Wenn `pattern` ein Regex ist, werden auch die `source`- und `flags`-Eigenschaften von `pattern` überprüft, anstatt `pattern` in einen String umzuwandeln.

Zum Beispiel würde [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) alle Eingaben in Strings umwandeln, aber es würde einen Fehler werfen, wenn das Argument ein Regex ist, weil es nur dafür ausgelegt ist, Strings zu matchen, und die Verwendung eines Regex wahrscheinlich ein Entwicklerfehler ist.

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Sie können die Überprüfung umgehen, indem Sie `[Symbol.match]` auf einen [falschen](/de/docs/Glossary/Falsy) Wert setzen, der nicht `undefined` ist. Das würde bedeuten, dass der Regex nicht für `String.prototype.match()` verwendet werden kann (da ohne `[Symbol.match]` `match()` ein neues `RegExp`-Objekt mit den beiden umschließenden Schrägstrichen, die von [`re.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) hinzugefügt wurden, konstruieren würde), aber er kann praktisch für alles andere verwendet werden.

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Perl-ähnliche RegExp-Eigenschaften

Beachten Sie, dass viele der `RegExp`-Eigenschaften sowohl lange als auch kurze (Perl-ähnliche) Namen haben. Beide Namen beziehen sich immer auf denselben Wert. (Perl ist die Programmiersprache, aus der JavaScript seine regulären Ausdrücke modellierte.) Siehe auch [veraltete `RegExp`-Eigenschaften](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Konstruktor

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Erstellt ein neues `RegExp`-Objekt.

## Statische Eigenschaften

- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) {{deprecated_inline}}
  - : Statische schreibgeschützte Eigenschaften, die geklammerte Teilstring-Übereinstimmungen enthalten.
- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) {{deprecated_inline}}
  - : Eine statische Eigenschaft, die den letzten String enthält, der erfolgreich mit einem regulären Ausdruck abgeglichen wurde.
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die den zuletzt abgeglichenen Teilstring enthält.
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die den letzten geklammerten Teilstring-Abgleich enthält.
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die den Teilstring vor der letzten Übereinstimmung enthält.
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die den Teilstring nach der letzten Übereinstimmung enthält.
- [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
  - : Die Konstrukturfunktion, die zur Erstellung abgeleiteter Objekte verwendet wird.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `RegExp.prototype` definiert und werden von allen `RegExp`-Instanzen geteilt.

- {{jsxref("Object/constructor", "RegExp.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `RegExp`-Instanzen ist der Anfangswert der {{jsxref("RegExp/RegExp", "RegExp")}}-Konstruktor.
- {{jsxref("RegExp.prototype.dotAll")}}
  - : Ob `.` Zeilenumbrüche matched oder nicht.
- {{jsxref("RegExp.prototype.flags")}}
  - : Ein String, der die Flags des `RegExp`-Objekts enthält.
- {{jsxref("RegExp.prototype.global")}}
  - : Ob der reguläre Ausdruck alle möglichen Übereinstimmungen in einem String testet oder nur die erste.
- {{jsxref("RegExp.prototype.hasIndices")}}
  - : Ob das reguläre Ausdrucksergebnis die Start- und Endindizes der erfassten Teilstrings freigibt.
- {{jsxref("RegExp.prototype.ignoreCase")}}
  - : Ob bei einem Match-Versuch in einem String die Groß-/Kleinschreibung ignoriert wird.
- {{jsxref("RegExp.prototype.multiline")}}
  - : Ob in Strings über mehrere Zeilen hinweg gesucht wird oder nicht.
- {{jsxref("RegExp.prototype.source")}}
  - : Der Text des Musters.
- {{jsxref("RegExp.prototype.sticky")}}
  - : Ob die Suche sticky ist oder nicht.
- {{jsxref("RegExp.prototype.unicode")}}
  - : Ob Unicode-Funktionen aktiviert sind oder nicht.
- {{jsxref("RegExp.prototype.unicodeSets")}}
  - : Ob das `v`-Flag, ein Upgrade zum `u`-Modus, aktiviert ist.

Diese Eigenschaften sind eigene Eigenschaften jeder `RegExp`-Instanz.

- {{jsxref("RegExp/lastIndex", "lastIndex")}}
  - : Der Index, an dem der nächste Abgleich beginnen soll.

## Instanz-Methoden

- {{jsxref("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : Kompiliert (neu) einen regulären Ausdruck während der Ausführung eines Skripts.
- {{jsxref("RegExp.prototype.exec()")}}
  - : Führt eine Suche nach einem Match in seinem String-Parameter durch.
- {{jsxref("RegExp.prototype.test()")}}
  - : Testet auf ein Match in seinem String-Parameter.
- {{jsxref("RegExp.prototype.toString()")}}
  - : Gibt einen String zurück, der das spezifizierte Objekt repräsentiert. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
  - : Führt einen Abgleich mit einem gegebenen String durch und gibt das Abgleichsergebnis zurück.
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
  - : Gibt alle Übereinstimmungen des regulären Ausdrucks mit einem String zurück.
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
  - : Ersetzt Übereinstimmungen in einem gegebenen String mit einem neuen Teilstring.
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
  - : Sucht nach dem Abgleich in einem gegebenen String und gibt den Index zurück, an dem das Muster im String gefunden wurde.
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
  - : Teilt einen gegebenen String in ein Array, indem der String in Teilstrings geteilt wird.

## Beispiele

### Verwendung eines regulären Ausdrucks zur Änderung des Datenformats

Das folgende Skript verwendet die Methode {{jsxref("String.prototype.replace()")}}, um einen Namen im Format _Vorname Nachname_ zu finden und ihn im Format _Nachname, Vorname_ auszugeben.

Im Ersetzungstext verwendet das Skript `$1` und `$2`, um die Ergebnisse der entsprechenden klammer-lokalisierten Parenthesen im regulären Ausdrucksmuster anzuzeigen.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

Dies zeigt `"Cruz, Maria"` an.

### Verwendung eines regulären Ausdrucks, um Zeilen mit unterschiedlichen Zeilenenden/Zeilenumbrüchen aufzuteilen

Das Standardzeilenende variiert je nach Plattform (Unix, Windows usw.). Die Zeilenaufteilung, die in diesem Beispiel bereitgestellt wird, funktioniert auf allen Plattformen.

```js
const text = "Some text\nAnd some more\r\nAnd yet\rThis is the end";
const lines = text.split(/\r\n|\r|\n/);
console.log(lines); // [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

Beachten Sie, dass die Reihenfolge der Muster im regulären Ausdruck wichtig ist.

### Verwendung eines regulären Ausdrucks auf mehreren Zeilen

```js
const s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Returns null

s.match(/yes[^]*day/);
// Returns ["yes\nmake my day"]
```

### Verwendung eines regulären Ausdrucks mit dem Sticky-Flag

Das {{jsxref("RegExp/sticky", "sticky")}}-Flag zeigt an, dass der reguläre Ausdruck ein sticky Matching im Zielstring durchführt, indem versucht wird, bei {{jsxref("RegExp.prototype.lastIndex")}} zu matchen.

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

Mit dem Sticky-Flag `y` muss das nächste Match an der `lastIndex`-Position auftreten, während mit dem Global-Flag `g` das Match an der `lastIndex`-Position oder später stattfinden kann:

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

Mit dem Global-Flag `g` würden alle 6 Ziffern gematcht, nicht nur 3.

### Reguläre Ausdrücke und Unicode-Zeichen

`\w` und `\W` vergleichen nur ASCII-basierte Zeichen; zum Beispiel `a` bis `z`, `A` bis `Z`, `0` bis `9` und `_`.

Um Zeichen aus anderen Sprachen wie Kyrillisch oder Hebräisch zu vergleichen, verwenden Sie `\uhhhh`, wobei `hhhh` der Unicode-Wert des Zeichens im Hexadezimalformat ist.

Dieses Beispiel zeigt, wie man Unicode-Zeichen aus einem Wort trennen kann.

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

Das [Unicode-Eigenschafts-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)-Feature bietet eine einfachere Möglichkeit, bestimmte Unicode-Bereiche zu haben, indem Anweisungen wie `\p{scx=Cyrl}` (zum Matchen eines beliebigen kyrillischen Buchstabens) oder `\p{L}/u` (zum Matchen eines Buchstabens aus jeder Sprache) erlaubt sind.

### Extrahieren des Subdomain-Namens aus einer URL

```js
const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> [!NOTE]
> Anstatt reguläre Ausdrücke zum Parsen von URLs zu verwenden, ist es in der Regel besser, den eingebauten URL-Parser des Browsers zu verwenden, indem Sie die [URL-API](/de/docs/Web/API/URL_API) verwenden.

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

Beginnend mit Firefox 34 ist im Fall einer Fanggruppe mit Quantifizierern, die ihre Ausübung verhindern, der abgeglichene Text für eine Fanggruppe jetzt `undefined` anstelle eines leeren Strings:

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

Beachten Sie, dass `RegExp.$N` aufgrund der Web-Kompatibilität immer noch einen leeren String anstelle von `undefined` zurückgibt ([bug 1053944](https://bugzil.la/1053944)).

## Siehe auch

- [Polyfill vieler moderner `RegExp`-Funktionen (`dotAll`, `sticky`-Flags, benannte Erfassungsgruppen, usw.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
