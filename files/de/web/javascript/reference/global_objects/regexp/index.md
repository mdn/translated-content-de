---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: a73295d4344aeab38c67262717d0dda8b3b9f0c5
---

{{JSRef}}

Das **`RegExp`**-Objekt wird verwendet, um Text mit einem Muster abzugleichen.

Für eine Einführung in reguläre Ausdrücke lesen Sie das [Kapitel über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im JavaScript-Leitfaden. Für detaillierte Informationen zur Syntax von regulären Ausdrücken lesen Sie die [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Beschreibung

### Literale Notation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: eine _literale Notation_ und einen _Konstruktor_.

- Die _literale Notation_ nimmt ein Muster zwischen zwei Schrägstrichen an, gefolgt von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) nach dem zweiten Schrägstrich.
- Die _Konstruktorfunktion_ nimmt entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) als zweiten Parameter.

Die folgenden drei Ausdrücke erstellen das gleiche reguläre Ausdrucksobjekt:

```js
const re = /ab+c/i; // literal notation
// OR
const re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
// OR
const re = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Übereinstimmungen effizienter durchzuführen. Mehr über den Prozess finden Sie in den [dotnet-Dokumentationen](https://learn.microsoft.com/en-us/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

Die literale Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Kompilierung des regulären Ausdrucks zur Laufzeit.

Verwenden Sie einen String als erstes Argument für den `RegExp()`-Konstruktor, wenn Sie [den regulären Ausdruck aus dynamischen Eingaben erstellen](#erstellen_eines_regulären_ausdrucks_aus_dynamischen_eingaben) möchten.

### Flags im Konstruktor

Der Ausdruck `new RegExp(/ab+c/, flags)` erstellt ein neues `RegExp`, indem die Quelle des ersten Parameters und die [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) bereitgestellt durch den zweiten verwendet werden.

Bei Verwendung der Konstruktorfunktion sind die normalen Escape-Regeln für Strings erforderlich (besondere Zeichen mit `\` kennzeichnen, wenn sie in einem String enthalten sind).

Zum Beispiel sind die folgenden gleichwertig:

```js
const re = /\w+/;
// OR
const re = new RegExp("\\w+");
```

### Spezielle Behandlung von Regexen

> [!NOTE]
> Ob etwas ein "Regex" ist, kann [duck-typed](https://en.wikipedia.org/wiki/Duck_typing) sein. Es muss kein `RegExp` sein!

Einige eingebaute Methoden würden Regexe speziell behandeln. Sie entscheiden, ob `x` ein Regex ist, durch [mehrere Schritte](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp):

1. `x` muss ein Objekt sein (kein primitiver Typ).
2. Wenn [`x[Symbol.match]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) nicht `undefined` ist, prüfen, ob es {{Glossary("Truthy", "wahrheitsgemäß")}} ist.
3. Andernfalls, wenn `x[Symbol.match]` `undefined` ist, prüfen, ob `x` mit dem `RegExp`-Konstruktor erstellt wurde. (Dieser Schritt sollte selten vorkommen, da, wenn `x` ein `RegExp`-Objekt ist, das nicht manipuliert wurde, es eine `Symbol.match`-Eigenschaft haben sollte.)

Beachten Sie, dass in den meisten Fällen die `Symbol.match`-Prüfung durchlaufen würde, was bedeutet:

- Ein tatsächliches `RegExp`-Objekt, dessen `Symbol.match` Eigenschaftswert {{Glossary("Falsy", "falschmäßig")}} ist, aber nicht `undefined` (selbst wenn alles andere intakt ist, wie [`exec`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)), kann verwendet werden, als ob es kein Regex wäre.
- Ein Nicht-`RegExp`-Objekt mit einer `Symbol.match` Eigenschaft wird behandelt, als ob es ein Regex wäre.

Diese Wahl wurde getroffen, weil `[Symbol.match]()` die am meisten indikative Eigenschaft dafür ist, dass etwas zum Abgleichen verwendet werden soll. (`exec` könnte auch verwendet werden, aber da es keine Symbol-Eigenschaft ist, gäbe es zu viele falsche Positive.) Die Orte, die Regexe speziell behandeln, umfassen:

- [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) und [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) werfen einen {{jsxref("TypeError")}}, wenn das erste Argument ein Regex ist.
- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) überprüfen, ob das [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Flag gesetzt ist, wenn das erste Argument ein Regex ist, bevor die Methoden [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) aufgerufen werden.
- Der [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) Konstruktor gibt direkt das `pattern`-Argument nur zurück, wenn `pattern` ein Regex ist (unter einigen anderen Bedingungen). Wenn `pattern` ein Regex ist, würde er auch die `source`- und `flags`-Eigenschaften des `pattern` abfragen, anstatt `pattern` in einen String zu erzwingen.

Zum Beispiel würde [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) alle Eingaben in Strings konvertieren, aber es würde eine Ausnahme werfen, wenn das Argument ein Regex ist, weil es nur für den Abgleich von Strings entworfen ist, und die Verwendung eines Regex wahrscheinlich ein Entwicklerfehler ist.

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Sie können die Überprüfung umgehen, indem Sie `[Symbol.match]` auf einen {{Glossary("Falsy", "falschmäßigen")}} Wert setzen, der nicht `undefined` ist. Das würde bedeuten, dass das Regex nicht für `String.prototype.match()` verwendet werden kann (da ohne `[Symbol.match]`, `match()` ein neues `RegExp`-Objekt mit den beiden von [`re.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) hinzugefügten umschließenden Schrägstrichen konstruieren würde), aber es kann für praktisch alles andere verwendet werden.

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Perl-ähnliche RegExp-Eigenschaften

Beachten Sie, dass mehrere der `RegExp`-Eigenschaften sowohl lange als auch kurze (Perl-ähnliche) Namen haben. Beide Namen beziehen sich immer auf denselben Wert. (Perl ist die Programmiersprache, von der JavaScript seine regulären Ausdrücke abgeleitet hat.) Siehe auch [veraltete `RegExp`-Eigenschaften](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Konstruktor

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Erstellt ein neues `RegExp`-Objekt.

## Statische Eigenschaften

- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) {{deprecated_inline}}
  - : Statische, nur lesbare Eigenschaften, die Klammer-Teilzeichenfolgenübereinstimmungen enthalten.
- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) {{deprecated_inline}}
  - : Eine statische Eigenschaft, die die letzte Zeichenfolge enthält, bei der ein regulärer Ausdruck erfolgreich abgeglichen wurde.
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) {{deprecated_inline}}
  - : Eine statische, nur lesbare Eigenschaft, die die zuletzt abgeglichene Teilzeichenfolge enthält.
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen) {{deprecated_inline}}
  - : Eine statische, nur lesbare Eigenschaft, die das zuletzt in Klammern gesetzte Teilzeichenfolgenübereinstimmung enthält.
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext) {{deprecated_inline}}
  - : Eine statische, nur lesbare Eigenschaft, die die vor der letzten Übereinstimmung stehende Teilzeichenfolge enthält.
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext) {{deprecated_inline}}
  - : Eine statische, nur lesbare Eigenschaft, die die nach der letzten Übereinstimmung stehende Teilzeichenfolge enthält.
- [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Statische Methoden

- {{jsxref("RegExp.escape()")}}
  - : [Entweicht](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) alle potenziellen Syntaxzeichen eines Regex in einem String und gibt einen neuen String zurück, der sicher als [literales](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwendet werden kann.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `RegExp.prototype` definiert und werden von allen `RegExp`-Instanzen geteilt.

- {{jsxref("Object/constructor", "RegExp.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `RegExp`-Instanzen ist der Anfangswert der {{jsxref("RegExp/RegExp", "RegExp")}}-Konstruktor.
- {{jsxref("RegExp.prototype.dotAll")}}
  - : Ob `.` Zeilenumbrüche abgleicht oder nicht.
- {{jsxref("RegExp.prototype.flags")}}
  - : Ein String, der die Flags des `RegExp`-Objekts enthält.
- {{jsxref("RegExp.prototype.global")}}
  - : Ob der reguläre Ausdruck auf alle möglichen Übereinstimmungen in einer Zeichenfolge testet oder nur auf die erste.
- {{jsxref("RegExp.prototype.hasIndices")}}
  - : Ob das Ergebnis des regulären Ausdrucks die Start- und Endindizes der erfassten Teilzeichenfolgen anzeigt.
- {{jsxref("RegExp.prototype.ignoreCase")}}
  - : Ob beim Versuch, eine Übereinstimmung in einem String zu finden, die Groß-/Kleinschreibung ignoriert wird.
- {{jsxref("RegExp.prototype.multiline")}}
  - : Ob in Zeichenfolgen über mehrere Zeilen hinweg gesucht wird oder nicht.
- {{jsxref("RegExp.prototype.source")}}
  - : Der Text des Musters.
- {{jsxref("RegExp.prototype.sticky")}}
  - : Ob der Suchvorgang unmittelbarer Natur ist oder nicht.
- {{jsxref("RegExp.prototype.unicode")}}
  - : Ob Unicode-Funktionen aktiviert sind oder nicht.
- {{jsxref("RegExp.prototype.unicodeSets")}}
  - : Ob das `v`-Flag, ein Upgrade zum `u`-Modus, aktiviert ist oder nicht.

Diese Eigenschaften sind eigene Eigenschaften jeder `RegExp`-Instanz.

- {{jsxref("RegExp/lastIndex", "lastIndex")}}
  - : Der Index, an dem die nächste Übereinstimmung beginnen soll.

## Instanz-Methoden

- {{jsxref("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : Kompiliert (erneut) einen regulären Ausdruck während der Ausführung eines Skripts.
- {{jsxref("RegExp.prototype.exec()")}}
  - : Führt eine Suche nach einem Muster in seinem String-Parameter durch.
- {{jsxref("RegExp.prototype.test()")}}
  - : Testet auf eine Übereinstimmung in seinem String-Parameter.
- {{jsxref("RegExp.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das spezifizierte Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
  - : Führt einen Abgleich mit der gegebenen Zeichenfolge durch und gibt das Übereinstimmungsergebnis zurück.
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
  - : Gibt alle Übereinstimmungen des regulären Ausdrucks in einer Zeichenfolge zurück.
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
  - : Ersetzt Übereinstimmungen in der gegebenen Zeichenfolge durch eine neue Teilzeichenfolge.
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
  - : Durchsucht die Übereinstimmung in einer gegebenen Zeichenfolge und gibt den Index des Musters in der Zeichenfolge zurück.
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
  - : Teilt die gegebene Zeichenfolge in ein Array, indem es die Zeichenfolge in Teilzeichenfolgen aufteilt.

## Beispiele

### Verwendung eines regulären Ausdrucks zur Änderung des Datenformats

Das folgende Skript verwendet die Methode {{jsxref("String.prototype.replace()")}}, um einen Namen im Format _Vorname Nachname_ zu finden und im Format _Nachname, Vorname_ auszugeben.

In dem Ersetzungstext verwendet das Skript `$1` und `$2`, um die Ergebnisse der entsprechenden übereinstimmenden Klammern im regulären Ausdrucksmuster anzugeben.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

Dies zeigt `"Cruz, Maria"` an.

### Verwendung eines regulären Ausdrucks zum Teilen von Zeilen mit verschiedenen Zeilenenden/Zeilenumbrüchen

Das Standard-Zeilenende variiert je nach Plattform (Unix, Windows, etc.). Die in diesem Beispiel bereitgestellte Zeilenaufteilung funktioniert auf allen Plattformen.

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

### Verwendung eines regulären Ausdrucks mit der sticky-Flagge

Die {{jsxref("RegExp/sticky", "sticky")}}-Flagge zeigt an, dass der reguläre Ausdruck eine sticky-Suche in der Zielzeichenfolge durchführt, indem versucht wird, ab dem {{jsxref("RegExp.prototype.lastIndex")}} zu suchen.

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### Der Unterschied zwischen der sticky-Flagge und der global-Flagge

Mit der sticky-Flagge `y` muss die nächste Übereinstimmung an der `lastIndex`-Position erfolgen, während sie mit der global-Flagge `g` an der `lastIndex`-Position oder später erfolgen kann:

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

Mit der globalen Flagge `g` würden alle 6 Ziffern abgeglichen, nicht nur 3.

### Regulärer Ausdruck und Unicode-Zeichen

`\w` und `\W` stimmen nur mit ASCII-Zeichen überein; zum Beispiel `a` bis `z`, `A` bis `Z`, `0` bis `9` und `_`.

Um Zeichen aus anderen Sprachen wie Kyrillisch oder Hebräisch abzugleichen, verwenden Sie `\uhhhh`, wobei `hhhh` der Unicode-Wert des Zeichens in Hexadezimalform ist.

Dieses Beispiel zeigt, wie man Unicode-Zeichen aus einem Wort herausfiltern kann.

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

Die Funktion [Unicode-Eigenschaft-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) bietet eine einfachere Möglichkeit, bestimmte Unicode-Bereiche zu zielen, indem sie Aussagen wie `\p{scx=Cyrl}` (um einen beliebigen kyrillischen Buchstaben zu finden) oder `\p{L}/u` (um einen Buchstaben aus einer beliebigen Sprache zu finden) ermöglicht.

### Extrahieren des Subdomänennamens von der URL

```js
const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> [!NOTE]
> Anstatt reguläre Ausdrücke zur URL-Analyse zu verwenden, ist es in der Regel besser, den integrierten URL-Parser des Browsers über die [URL API](/de/docs/Web/API/URL_API) zu verwenden.

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

Beginnend mit Firefox 34 ist im Fall einer Gruppenerfassung mit Quantoren, die ihre Ausführung verhindern, der abgeglichene Text für eine Gruppenerfassung jetzt `undefined` anstelle eines leeren Strings:

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

Beachten Sie, dass aufgrund der Webkompatibilität `RegExp.$N` weiterhin einen leeren String anstelle von `undefined` zurückgibt ([Fehler 1053944](https://bugzil.la/1053944)).

## Siehe auch

- [Polyfill vieler moderner `RegExp`-Funktionen (`dotAll`, `sticky` Flags, benannte Erfassungsgruppen, etc.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Leitfaden zu [Regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
