---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{JSRef}}

Das **`RegExp`**-Objekt wird verwendet, um Text mit einem Muster abzugleichen.

Für eine Einführung in reguläre Ausdrücke lesen Sie das [Kapitel über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im JavaScript-Guide. Für detaillierte Informationen zur Syntax regulärer Ausdrücke lesen Sie die [Referenz für reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Beschreibung

### Literale Notation und Konstruktor

Es gibt zwei Wege, um ein `RegExp`-Objekt zu erstellen: eine _literale Notation_ und einen _Konstruktor_.

- Die _literale Notation_ nimmt ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), nach dem zweiten Schrägstrich.
- Die _Konstruktorfunktion_ nimmt entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String optionaler [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) als zweiten Parameter.

Die folgenden drei Ausdrücke erstellen dasselbe reguläre Ausdrucksobjekt:

```js
const re = /ab+c/i; // literale Notation
// ODER
const re = new RegExp("ab+c", "i"); // Konstruktor mit String-Muster als erstes Argument
// ODER
const re = new RegExp(/ab+c/, "i"); // Konstruktor mit regulärem Ausdruck-Literal als erstes Argument
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Abgleiche effizienter durchzuführen. Mehr über den Prozess finden Sie in den [dotnet-Dokumenten](https://learn.microsoft.com/en-us/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

Die literale Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als erstes Argument des `RegExp()`-Konstruktors, wenn Sie den [regulären Ausdruck aus dynamischen Eingaben erstellen möchten](#erstellen_eines_regulären_ausdrucks_aus_dynamischen_eingaben).

### Flags im Konstruktor

Der Ausdruck `new RegExp(/ab+c/, flags)` erstellt einen neuen `RegExp` mit der Quelle des ersten Parameters und den vom zweiten Parameter bereitgestellten [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags).

Bei der Verwendung der Konstruktorfunktion sind die normalen String-Escape-Regeln (spezielle Zeichen mit `\` versehen, wenn sie in einem String enthalten sind) erforderlich.

Zum Beispiel sind die folgenden äquivalent:

```js
const re = /\w+/;
// ODER
const re = new RegExp("\\w+");
```

### Spezielle Behandlung für Regex

> [!NOTE]
> Ob etwas ein "Regex" ist, kann [duck-typed](https://en.wikipedia.org/wiki/Duck_typing) werden. Es muss kein `RegExp` sein!

Einige integrierte Methoden behandeln Regexe besonders. Sie entscheiden, ob `x` ein Regex ist, durch [mehrere Schritte](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp):

1. `x` muss ein Objekt sein (kein primitiver Datentyp).
2. Wenn [`x[Symbol.match]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) nicht `undefined` ist, prüfen Sie, ob es [truthy](/de/docs/Glossary/Truthy) ist.
3. Andernfalls, wenn `x[Symbol.match]` `undefined` ist, prüfen Sie, ob `x` mit dem `RegExp`-Konstruktor erstellt wurde. (Dieser Schritt sollte selten vorkommen, da, wenn `x` ein `RegExp`-Objekt ist, das nicht manipuliert wurde, es eine `Symbol.match`-Eigenschaft haben sollte.)

Beachten Sie, dass in den meisten Fällen die `Symbol.match`-Überprüfung erfolgt, was bedeutet:

- Ein tatsächliches `RegExp`-Objekt, dessen `Symbol.match` Eigenschaftswert [falsy](/de/docs/Glossary/Falsy) ist, aber nicht `undefined` (sogar wenn alles andere intakt ist, wie [`exec`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)) kann verwendet werden, als ob es kein Regex wäre.
- Ein Nicht-`RegExp`-Objekt mit einer `Symbol.match`-Eigenschaft wird behandelt, als ob es ein Regex wäre.

Diese Entscheidung wurde getroffen, weil `[Symbol.match]()` die aussagekräftigste Eigenschaft ist, die darauf hinweist, dass etwas zum Abgleichen verwendet werden soll. (`exec` könnte auch verwendet werden, aber da es keine Symboleigenschaft ist, würde es zu viele Fehlalarme geben.) Die Stellen, die Regexe speziell behandeln, umfassen:

- [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), und [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) werfen einen {{jsxref("TypeError")}}, wenn das erste Argument ein Regex ist.
- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) prüfen, ob das [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) Flag gesetzt ist, wenn das erste Argument ein Regex ist, bevor die Methode [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol.replace) aufgerufen wird.
- Der [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) Konstruktor gibt das `pattern`-Argument nur direkt zurück, wenn `pattern` ein Regex ist (unter einigen anderen Bedingungen). Ist `pattern` ein Regex, werden auch die `source` und `flags`-Eigenschaften von `pattern` untersucht, anstatt `pattern` zu einem String zu zwingen.

Zum Beispiel zwingt [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) alle Eingaben zu Strings, wirft jedoch einen Fehler, wenn das Argument ein Regex ist, da es nur für das Abgleichen von Strings ausgelegt ist und die Verwendung eines Regex wahrscheinlich ein Entwicklerfehler ist.

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Sie können die Überprüfung umgehen, indem Sie `[Symbol.match]` auf einen [falsy](/de/docs/Glossary/Falsy) Wert setzen, der nicht `undefined` ist. Dies würde bedeuten, dass das Regex nicht für `String.prototype.match()` verwendet werden kann (da `match()` ohne `[Symbol.match]` ein neues `RegExp`-Objekt mit den beiden umschließenden Schrägstrichen erstellt, die durch [`re.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) hinzugefügt wurden), aber es kann für praktisch alles andere verwendet werden.

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Perl-ähnliche RegExp-Eigenschaften

Beachten Sie, dass mehrere der `RegExp`-Eigenschaften sowohl lange als auch kurze (Perl-ähnliche) Namen haben. Beide Namen beziehen sich immer auf denselben Wert. (Perl ist die Programmiersprache, der JavaScript seine regulären Ausdrücke nachempfunden hat.) Siehe auch [veraltete `RegExp`-Eigenschaften](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Konstruktor

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Erstellt ein neues `RegExp`-Objekt.

## Statische Eigenschaften

- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) {{deprecated_inline}}
  - : Statische schreibgeschützte Eigenschaften, die geklammerte Teilzeichenfolgen-Übereinstimmungen enthalten.
- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) {{deprecated_inline}}
  - : Eine statische Eigenschaft, die die letzte Zeichenfolge enthält, mit der ein regulärer Ausdruck erfolgreich übereingestimmt wurde.
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die die zuletzt übereinstimmende Teilzeichenfolge enthält.
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die die zuletzt übereinstimmende geklammerte Teilzeichenfolge enthält.
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die die Teilzeichenfolge enthält, die dem letzten Match vorausging.
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext) {{deprecated_inline}}
  - : Eine statische schreibgeschützte Eigenschaft, die die Teilzeichenfolge enthält, die dem letzten Match folgte.
- [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `RegExp.prototype` definiert und werden von allen `RegExp`-Instanzen geteilt.

- {{jsxref("Object/constructor", "RegExp.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `RegExp`-Instanzen ist der Anfangswert der {{jsxref("RegExp/RegExp", "RegExp")}}-Konstruktor.
- {{jsxref("RegExp.prototype.dotAll")}}
  - : Ob `.` Zeilenumbrüche abgleicht oder nicht.
- {{jsxref("RegExp.prototype.flags")}}
  - : Ein String, der die Flags des `RegExp`-Objekts enthält.
- {{jsxref("RegExp.prototype.global")}}
  - : Ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet wird oder nur gegen die erste.
- {{jsxref("RegExp.prototype.hasIndices")}}
  - : Ob das Ergebnis des regulären Ausdrucks die Start- und Endindizes der erfassten Teilstrings offenlegt.
- {{jsxref("RegExp.prototype.ignoreCase")}}
  - : Ob beim Versuch, eine Übereinstimmung in einer Zeichenfolge zu finden, die Groß-/Kleinschreibung ignoriert wird.
- {{jsxref("RegExp.prototype.multiline")}}
  - : Ob oder nicht über mehrere Zeilen hinweg in Zeichenfolgen gesucht wird.
- {{jsxref("RegExp.prototype.source")}}
  - : Der Text des Musters.
- {{jsxref("RegExp.prototype.sticky")}}
  - : Ob die Suche anhält.
- {{jsxref("RegExp.prototype.unicode")}}
  - : Ob Unicode-Funktionen aktiviert sind oder nicht.
- {{jsxref("RegExp.prototype.unicodeSets")}}
  - : Ob das `v` Flag, ein Upgrade des `u` Modus, aktiviert ist oder nicht.

Diese Eigenschaften sind eigene Eigenschaften jeder `RegExp`-Instanz.

- {{jsxref("RegExp/lastIndex", "lastIndex")}}
  - : Der Index, bei dem der nächste Abgleich beginnt.

## Instanzmethoden

- {{jsxref("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : (Re-)kompiliert einen regulären Ausdruck während der Ausführung eines Skripts.
- {{jsxref("RegExp.prototype.exec()")}}
  - : Führt eine Suche nach einer Übereinstimmung in seinem Zeichenfolgenparameter aus.
- {{jsxref("RegExp.prototype.test()")}}
  - : Testet, ob eine Übereinstimmung in seinem Zeichenfolgenparameter vorliegt.
- {{jsxref("RegExp.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das spezifizierte Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
  - : Führt den Abgleich zur angegebenen Zeichenfolge aus und gibt das Abgleichergebnis zurück.
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
  - : Gibt alle Übereinstimmungen des regulären Ausdrucks gegen eine Zeichenfolge zurück.
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
  - : Ersetzt Übereinstimmungen in einer angegebenen Zeichenfolge durch eine neue Teilzeichenfolge.
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
  - : Sucht das Muster in einer gegebenen Zeichenfolge und gibt den Index zurück, an dem das Muster in der Zeichenfolge gefunden wurde.
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
  - : Teilt die gegebene Zeichenfolge in ein Array, indem die Zeichenfolge in Teilzeichenfolgen getrennt wird.

## Beispiele

### Verwendung eines regulären Ausdrucks zur Änderung des Datenformats

Das folgende Skript verwendet die {{jsxref("String.prototype.replace()")}} Methode, um einen Namen im Format _Vorname Nachname_ zu erkennen und ihn im Format _Nachname, Vorname_ auszugeben.

Im Ersetzungstext verwendet das Skript `$1` und `$2`, um die Ergebnisse der entsprechenden Klammern im regulären Ausdrucksmuster anzuzeigen.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

Dies zeigt `"Cruz, Maria"` an.

### Verwendung eines regulären Ausdrucks zum Teilen von Zeilen mit unterschiedlichen Zeilenenden

Das Standardzeilenende variiert je nach Plattform (Unix, Windows, etc.). Die hier gezeigte Trennung von Zeilen funktioniert auf allen Plattformen.

```js
const text = "Some text\nAnd some more\r\nAnd yet\rThis is the end";
const lines = text.split(/\r\n|\r|\n/);
console.log(lines); // [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

Beachten Sie, dass die Reihenfolge der Muster im regulären Ausdruck von Bedeutung ist.

### Verwendung eines regulären Ausdrucks über mehrere Zeilen

```js
const s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Gibt null zurück

s.match(/yes[^]*day/);
// Gibt ["yes\nmake my day"] zurück
```

### Verwendung eines regulären Ausdrucks mit dem Sticky-Flag

Das {{jsxref("RegExp/sticky", "sticky")}}-Flag zeigt an, dass der reguläre Ausdruck in der Zielzeichenfolge ein hartnäckiges Matching durchführt, indem es versucht, bei {{jsxref("RegExp.prototype.lastIndex")}} zu beginnen.

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex wird bei Sticky-Flag berücksichtigt)
regex.lastIndex; // 0 (zurücksetzen nach fehlgeschlagenem Match)
```

### Der Unterschied zwischen dem Sticky-Flag und dem globalen Flag

Mit dem Sticky-Flag `y` muss das nächste Match an der Position `lastIndex` stattfinden, während es mit dem globalen Flag `g` an der Position `lastIndex` oder später erfolgen kann:

```js
const re = /\d/y;
let r;
while ((r = re.exec("123 456"))) {
  console.log(r, "UND re.lastIndex", re.lastIndex);
}

// [ '1', Index: 0, Eingabe: '123 456', Gruppen: undefined ] UND re.lastIndex 1
// [ '2', Index: 1, Eingabe: '123 456', Gruppen: undefined ] UND re.lastIndex 2
// [ '3', Index: 2, Eingabe: '123 456', Gruppen: undefined ] UND re.lastIndex 3
//  … und kein weiteres Match.
```

Mit dem globalen Flag `g` würden alle 6 Ziffern abgeglichen, nicht nur 3.

### Regulärer Ausdruck und Unicode-Zeichen

`\w` und `\W` stimmen nur mit ASCII-basierten Zeichen überein; zum Beispiel, `a` bis `z`, `A` bis `Z`, `0` bis `9`, und `_`.

Um Zeichen aus anderen Sprachen wie Kyrillisch oder Hebräisch zu erfassen, verwenden Sie `\uhhhh`, wobei `hhhh` der Unicode-Wert des Zeichens im Hexadezimalsystem ist.

Dieses Beispiel zeigt, wie man Unicode-Zeichen aus einem Wort trennen kann.

```js
const text = "Образец text на русском языке";
const regex = /[\u0400-\u04FF]+/g;

const match = regex.exec(text);
console.log(match[0]); // 'Образец'
console.log(regex.lastIndex); // 7

const match2 = regex.exec(text);
console.log(match2[0]); // 'на' (hat nicht 'text' geloggt)
console.log(regex.lastIndex); // 15

// und so weiter
```

Die [Unicode-Eigenschaftsausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) bieten eine einfachere Methode, um bestimmte Unicode-Bereiche anzusprechen, indem sie Aussagen wie `\p{scx=Cyrl}` (um jeden kyrillischen Buchstaben zu erfassen) oder `\p{L}/u` (um einen Buchstaben aus jeder Sprache zu erfassen) ermöglichen.

### Extrahieren des Subdomain-Namens aus einer URL

```js
const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> [!NOTE]
> Anstatt reguläre Ausdrücke zum Parsen von URLs zu verwenden, ist es in der Regel besser, den integrierten URL-Parser des Browsers zu verwenden, indem man die [URL-API](/de/docs/Web/API/URL_API) nutzt.

### Erstellen eines regulären Ausdrucks aus dynamischen Eingaben

```js
const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
const order = "Let me get some bacon and eggs, please";

order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g"));
// Gibt ['bacon', 'eggs'] zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Firefox-spezifische Hinweise

Beginnend mit Firefox 34 ist im Fall einer erfassten Gruppe mit Quantifizierern, die deren Ausführung verhindern, der übereinstimmende Text für eine erfasste Gruppe jetzt `undefined` statt eines leeren Strings:

```js
// Firefox 33 oder älter
"x".replace(/x(.)?/g, (m, group) => {
  console.log(`group: ${JSON.stringify(group)}`);
});
// group: ""

// Firefox 34 oder neuer
"x".replace(/x(.)?/g, (m, group) => {
  console.log(`group: ${group}`);
});
// group: undefined
```

Beachten Sie, dass aus Gründen der Webkompatibilität `RegExp.$N` immer noch einen leeren String statt `undefined` zurückgeben wird ([bug 1053944](https://bugzil.la/1053944)).

## Siehe auch

- [Polyfill vieler moderner `RegExp`-Funktionen (`dotAll`, `sticky` Flags, benannte Erfassungsgruppen, etc.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Guide
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
