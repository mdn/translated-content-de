---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{JSRef}}

Das **`RegExp`**-Objekt wird zum Abgleichen von Text mit einem Muster verwendet.

Für eine Einführung in reguläre Ausdrücke lesen Sie das Kapitel [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im JavaScript-Leitfaden. Für detaillierte Informationen zur Syntax von regulären Ausdrücken lesen Sie die [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Beschreibung

### Literalnotation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: eine _Literalnotation_ und einen _Konstruktor_.

- Die _Literalnotation_ nimmt ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) nach dem zweiten Schrägstrich.
- Die _Konstruktorfunktion_ nimmt entweder eine Zeichenkette oder ein `RegExp`-Objekt als ersten Parameter und eine Zeichenkette von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) als zweiten Parameter.

Die folgenden drei Ausdrücke erstellen dasselbe RegExp-Objekt:

```js
const re = /ab+c/i; // literal notation
// OR
const re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
// OR
const re = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Übereinstimmungen effizienter durchzuführen. Mehr über den Prozess erfahren Sie in den [dotnet-Dokumenten](https://learn.microsoft.com/en-us/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

Die Literalnotation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie eine Zeichenkette als erstes Argument für den `RegExp()`-Konstruktor, wenn Sie [den regulären Ausdruck aus dynamischem Input erstellen](#erstellen_eines_regulären_ausdrucks_aus_dynamischen_eingaben) möchten.

### Flags im Konstruktor

Der Ausdruck `new RegExp(/ab+c/, flags)` erstellt ein neues `RegExp`, das die Quelle des ersten Parameters und die durch den zweiten angegebenen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) verwendet.

Bei Verwendung der Konstruktorfunktion sind die normalen Escape-Regeln für Zeichenketten (Sonderzeichen mit `\` maskieren, wenn sie in einer Zeichenkette enthalten sind) erforderlich.

Zum Beispiel sind die folgenden gleichwertig:

```js
const re = /\w+/;
// OR
const re = new RegExp("\\w+");
```

### Spezielle Behandlung für Regex

> [!NOTE]
> Ob etwas ein "regex" ist, kann [duck-typisiert](https://en.wikipedia.org/wiki/Duck_typing) werden. Es muss kein `RegExp` sein!

Einige eingebaute Methoden behandeln regexe speziell. Sie entscheiden, ob `x` ein regex ist, durch [mehrere Schritte](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp):

1. `x` muss ein Objekt sein (kein Primitive).
2. Wenn [`x[Symbol.match]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) nicht `undefined` ist, prüfen Sie, ob es {{Glossary("Truthy", "wahr")}} ist.
3. Andernfalls, wenn `x[Symbol.match]` `undefined` ist, prüfen Sie, ob `x` mit dem `RegExp`-Konstruktor erstellt wurde. (Dieser Schritt sollte selten vorkommen, da wenn `x` ein `RegExp`-Objekt ist, das nicht manipuliert wurde, sollte es eine `Symbol.match`-Eigenschaft haben.)

Beachten Sie, dass in den meisten Fällen die Überprüfung von `Symbol.match` stattfinden würde, was bedeutet:

- Ein tatsächliches `RegExp`-Objekt, dessen `Symbol.match`-Eigenschaftswert {{Glossary("Falsy", "falsch")}} ist, aber nicht `undefined` (sogar mit allem anderen intakt, wie [`exec`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)) kann so verwendet werden, als ob es kein regex wäre.
- Ein Nicht-`RegExp`-Objekt mit einer `Symbol.match`-Eigenschaft wird so behandelt, als ob es ein regex wäre.

Diese Entscheidung wurde getroffen, weil `[Symbol.match]()` die indikativste Eigenschaft ist, dass etwas zum Abgleichen von Werten vorgesehen ist. (`exec` könnte auch verwendet werden, aber da es keine Symboleigenschaft ist, gäbe es zu viele Fehlermeldungen.) Zu den Orten, die regexe speziell behandeln, gehören:

- [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), und [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) werfen ein {{jsxref("TypeError")}}, wenn das erste Argument ein regex ist.
- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) überprüfen, ob das [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Flag gesetzt ist, wenn das erste Argument ein regex ist, bevor die Methode [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) aufgerufen wird.
- Der [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)-Konstruktor gibt das `pattern`-Argument direkt zurück, nur wenn `pattern` ein regex ist (unter einigen anderen Bedingungen). Wenn `pattern` ein regex ist, überprüft es auch die Eigenschaften `source` und `flags` von `pattern`, anstatt `pattern` zu einer Zeichenkette zu zwingen.

Zum Beispiel wird [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) alle Eingaben in Zeichenketten umwandeln, aber es wird eine Ausnahme werfen, wenn das Argument ein regex ist, weil es nur darauf ausgelegt ist, Zeichenketten abzugleichen, und die Verwendung eines regex wahrscheinlich ein Entwicklerfehler ist.

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Sie können die Überprüfung umgehen, indem Sie `[Symbol.match]` auf einen {{Glossary("Falsy", "falschen")}} Wert setzen, der nicht `undefined` ist. Dies bedeutet, dass das regex nicht für `String.prototype.match()` verwendet werden kann (da ohne `[Symbol.match]`, `match()` ein neues `RegExp`-Objekt mit den zwei von [`re.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) hinzugefügten Schrägstrichen erstellen würde), aber es kann für nahezu alles andere verwendet werden.

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Perl-ähnliche RegExp-Eigenschaften

Beachten Sie, dass mehrere der `RegExp`-Eigenschaften sowohl lange als auch kurze (Perl-ähnliche) Namen haben. Beide Namen beziehen sich immer auf denselben Wert. (Perl ist die Programmiersprache, von der JavaScript seine regulären Ausdrücke modelliert hat.) Siehe auch [veraltete `RegExp`-Eigenschaften](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Konstruktor

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Erstellt ein neues `RegExp`-Objekt.

## Statische Eigenschaften

- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) {{deprecated_inline}}
  - : Statische schreibgeschützte Eigenschaften, die übereinstimmende untergeordnete Zeichenfolgen in Klammern enthalten.
- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) {{deprecated_inline}}
  - : Eine statische Eigenschaft, die die letzte Zeichenkette enthält, gegen die ein regulärer Ausdruck erfolgreich abgeglichen wurde.
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die die zuletzt abgeglichene Teilzeichenfolge enthält.
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die den zuletzt abgeglichenen Teilstring in Klammern enthält.
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die die Teilzeichenfolge enthält, die der letzten Übereinstimmung vorausgeht.
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die die Teilzeichenfolge enthält, die der letzten Übereinstimmung folgt.
- [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Statische Methoden

- {{jsxref("RegExp.escape()")}}
  - : [Maskiert](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) alle potenziellen Regex-Syntaxzeichen in einer Zeichenkette und gibt eine neue Zeichenkette zurück, die als [Literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)-Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor sicher verwendet werden kann.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `RegExp.prototype` definiert und werden von allen `RegExp`-Instanzen geteilt.

- {{jsxref("Object/constructor", "RegExp.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `RegExp`-Instanzen ist der Anfangswert der {{jsxref("RegExp/RegExp", "RegExp")}}-Konstruktor.
- {{jsxref("RegExp.prototype.dotAll")}}
  - : Ob `.` Zeilenumbrüche erfasst oder nicht.
- {{jsxref("RegExp.prototype.flags")}}
  - : Eine Zeichenkette, die die Flags des `RegExp`-Objekts enthält.
- {{jsxref("RegExp.prototype.global")}}
  - : Ob der reguläre Ausdruck auf alle möglichen Übereinstimmungen in einer Zeichenkette getestet wird oder nur auf die erste.
- {{jsxref("RegExp.prototype.hasIndices")}}
  - : Ob das Ergebnis des regulären Ausdrucks die Start- und Endindizes der erfassten Teilzeichenfolgen offenlegt.
- {{jsxref("RegExp.prototype.ignoreCase")}}
  - : Ob Groß- und Kleinschreibung beim Versuch, eine Übereinstimmung in einer Zeichenkette zu finden, ignoriert wird.
- {{jsxref("RegExp.prototype.multiline")}}
  - : Ob in Zeichenketten über mehrere Zeilen hinweg gesucht wird oder nicht.
- {{jsxref("RegExp.prototype.source")}}
  - : Der Text des Musters.
- {{jsxref("RegExp.prototype.sticky")}}
  - : Ob die Suche sticky ist oder nicht.
- {{jsxref("RegExp.prototype.unicode")}}
  - : Ob Unicode-Funktionen aktiviert sind oder nicht.
- {{jsxref("RegExp.prototype.unicodeSets")}}
  - : Ob das `v` Flag, ein Upgrade des `u`-Modus, aktiviert ist oder nicht.

Diese Eigenschaften sind eigene Eigenschaften jeder `RegExp`-Instanz.

- {{jsxref("RegExp/lastIndex", "lastIndex")}}
  - : Der Index, bei dem die nächste Übereinstimmung begonnen werden soll.

## Instanz-Methoden

- {{jsxref("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : (Re-)kompiliert einen regulären Ausdruck während der Ausführung eines Skripts.
- {{jsxref("RegExp.prototype.exec()")}}
  - : Führt eine Suche nach einer Übereinstimmung in ihrem Zeichenkettenparameter durch.
- {{jsxref("RegExp.prototype.test()")}}
  - : Testet auf eine Übereinstimmung in ihrem Zeichenkettenparameter.
- {{jsxref("RegExp.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das spezifizierte Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
  - : Führt Übereinstimmung mit einer gegebenen Zeichenkette durch und gibt das Übereinstimmungsergebnis zurück.
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
  - : Gibt alle Übereinstimmungen des regulären Ausdrucks gegen eine Zeichenkette zurück.
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
  - : Ersetzt Übereinstimmungen in einer gegebenen Zeichenkette durch eine neue Teilzeichenfolge.
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
  - : Sucht die Übereinstimmung in einer gegebenen Zeichenkette und gibt den Index des Musters in der Zeichenkette zurück.
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
  - : Teilt eine gegebene Zeichenkette in ein Array, indem die Zeichenkette in Teilzeichenfolgen aufgeteilt wird.

## Beispiele

### Verwendung eines regulären Ausdrucks zur Änderung des Datenformats

Das folgende Skript verwendet die Methode {{jsxref("String.prototype.replace()")}}, um einen Namen im Format _Vorname Nachname_ zu finden und ihn im Format _Nachname, Vorname_ auszugeben.

Im Ersetzungstext verwendet das Skript `$1` und `$2`, um die Ergebnisse der entsprechenden übereinstimmenden Klammern im regulären Ausdrucksmuster anzugeben.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr);
```

Dies zeigt `"Cruz, Maria"` an.

### Verwenden eines regulären Ausdrucks zum Aufteilen von Zeilen mit unterschiedlichen Zeilenendungen/Ende-Zeilen/Zeilenumbrüchen

Das Standardzeilenende variiert je nach Plattform (Unix, Windows usw.). Das in diesem Beispiel bereitgestellte Aufteilen von Zeilen funktioniert auf allen Plattformen.

```js
const text = "Some text\nAnd some more\r\nAnd yet\nThis is the end";
const lines = text.split(/\r?\n/);
console.log(lines); // [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

Beachten Sie, dass die Reihenfolge der Muster im regulären Ausdruck wichtig ist.

### Verwenden eines regulären Ausdrucks über mehrere Zeilen hinweg

Standardmäßig stimmt das Zeichen `.` nicht mit Zeilenumbrüchen überein. Um es mit Zeilenumbrüchen übereinstimmen zu lassen, verwenden Sie das `s`-Flag (`dotAll`-Modus).

```js
const s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Returns null

s.match(/yes.*day/s);
// Returns ["yes\nmake my day"]
```

### Verwenden eines regulären Ausdrucks mit dem Sticky-Flag

Das {{jsxref("RegExp/sticky", "sticky")}}-Flag zeigt an, dass der reguläre Ausdruck eine sticky Übereinstimmung in der Zielzeichenkette durchführt, indem versucht wird, an {{jsxref("RegExp.prototype.lastIndex")}} zu beginnen.

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

Mit dem Sticky-Flag `y` muss die nächste Übereinstimmung an der `lastIndex`-Position erfolgen, während mit dem globalen Flag `g` die Übereinstimmung an der `lastIndex`-Position oder später erfolgen kann:

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

Mit dem globalen Flag `g` würden alle 6 Ziffern erfasst, nicht nur 3.

### Regulärer Ausdruck und Unicode-Zeichen

`\w` und `\W` erfassen nur auf ASCII basierte Zeichen; zum Beispiel `a` bis `z`, `A` bis `Z`, `0` bis `9`, und `_`.

Um Zeichen aus anderen Sprachen wie Kyrillisch oder Hebräisch zu erfassen, verwenden Sie `\uHHHH`, wobei `HHHH` der Unicode-Wert des Zeichens im Hexadezimalformat ist.

Dieses Beispiel zeigt, wie man Unicode-Zeichen von einem Wort trennen kann.

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

Das Merkmal [Unicode-Eigenschafts-Beschreibungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) bietet eine einfachere Möglichkeit, bestimmte Unicode-Bereiche zu Ziel, indem Erklärungen wie `\p{scx=Cyrl}` (um ein beliebiges kirchliches Schriftzeichen zu erfassen) oder `\p{L}/u` (um ein Zeichen aus einer beliebigen Sprache zu erfassen) ermöglicht werden.

### Extrahieren des Subdomain-Namens aus einer URL

```js
const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> [!NOTE]
> Anstelle von regulären Ausdrücken zum Parsen von URLs ist es normalerweise besser, den integrierten URL-Parser der Browser mithilfe der [URL-API](/de/docs/Web/API/URL_API) zu verwenden.

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

### Firefox-spezifische Anmerkungen

Ab Firefox 34 im Falle einer Erfassungsgruppe mit Quantoren, die ihre Übung verhindern, ist der übereinstimmende Text für eine Erfassungsgruppe jetzt `undefined` anstelle einer leeren Zeichenkette:

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

Beachten Sie, dass `RegExp.$N` aufgrund der Web-Kompatibilität weiterhin eine leere Zeichenkette anstelle von `undefined` zurückgibt ([Fehler 1053944](https://bugzil.la/1053944)).

## Siehe auch

- [Polyfill von vielen modernen `RegExp`-Funktionen (`dotAll`, `sticky` Flags, benannte Erfassungsgruppen usw.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
