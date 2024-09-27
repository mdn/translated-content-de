---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{JSRef}}

Das **`RegExp`** Objekt wird verwendet, um Texte mit einem Muster abzugleichen.

Für eine Einführung in reguläre Ausdrücke lesen Sie das [Kapitel über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im JavaScript-Leitfaden. Für detaillierte Informationen zur Syntax von regulären Ausdrücken lesen Sie die [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Beschreibung

### Schreibweise als Literal und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: Eine _literale Notation_ und einen _Konstruktor_.

- Die _literale Notation_ verwendet ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), nach dem zweiten Schrägstrich.
- Die _Konstruktorfunktion_ nimmt entweder eine Zeichenkette oder ein `RegExp`-Objekt als ersten Parameter und eine Zeichenkette mit optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) als zweiten Parameter.

Die folgenden drei Ausdrücke erstellen dasselbe reguläre Ausdrucksobjekt:

```js
const re = /ab+c/i; // literal notation
// OR
const re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
// OR
const re = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Übereinstimmungen effizienter durchzuführen. Mehr über den Prozess finden Sie in den [dotnet docs](https://learn.microsoft.com/en-us/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

Die literal Notation führt zu einer Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zu einer Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie eine Zeichenkette als ersten Parameter des `RegExp()`-Konstruktors, wenn Sie den [regulären Ausdruck aus dynamischen Eingaben erstellen](#erstellen_eines_regulären_ausdrucks_aus_dynamischen_eingaben) möchten.

### Flags im Konstruktor

Der Ausdruck `new RegExp(/ab+c/, flags)` erstellt ein neues `RegExp`, indem die Quelle des ersten Parameters und die durch den zweiten bereitgestellten [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) verwendet werden.

Bei der Verwendung der Konstruktorfunktion sind die normalen String-Escape-Regeln (Sonderzeichen in einem String mit `\` zu versehen) notwendig.

Beispielsweise sind die folgenden äquivalent:

```js
const re = /\w+/;
// OR
const re = new RegExp("\\w+");
```

### Spezielle Behandlung für Regexe

> [!NOTE]
> Ob etwas ein "Regex" ist, kann [duck-typed](https://en.wikipedia.org/wiki/Duck_typing) werden. Es muss kein `RegExp` sein!

Einige eingebaute Methoden würden Regexe speziell behandeln. Sie entscheiden, ob `x` ein Regex ist, durch [mehrere Schritte](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp):

1. `x` muss ein Objekt sein (kein Primitive).
2. Wenn [`x[Symbol.match]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) nicht `undefined` ist, prüfen, ob es [wahrheitsgemäß](/de/docs/Glossary/Truthy) ist.
3. Andernfalls, wenn `x[Symbol.match]` `undefined` ist, prüfen, ob `x` mit dem `RegExp`-Konstruktor erstellt wurde. (Dieser Schritt sollte selten auftreten, da, wenn `x` ein `RegExp`-Objekt ist, das nicht verändert wurde, es sollte eine `Symbol.match`-Eigenschaft haben.)

Beachteen Sie, dass in den meisten Fällen es durch die `Symbol.match`-Prüfung gehen würde, was bedeutet:

- Ein tatsächliches `RegExp`-Objekt, dessen `Symbol.match`-Property-Wert [falsch](/de/docs/Glossary/Falsy) aber nicht `undefined` ist (selbst wenn alles andere intakt ist, wie [`exec`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)) kann verwendet werden, als wäre es kein Regex.
- Ein Nicht-`RegExp`-Objekt mit einer `Symbol.match`-Property wird behandelt, als wäre es ein Regex.

Diese Wahl wurde getroffen, weil `[Symbol.match]()` die deutlichste Aussage darüber ist, dass etwas für das Matching vorgesehen ist. (`exec` könnte auch verwendet werden, aber da es keine Symbol-Property ist, würde es zu viele Fehlalarme geben.) Die Stellen, die Regexe speziell behandeln, umfassen:

- [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), und [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) werfen einen {{jsxref("TypeError")}}, wenn das erste Argument ein Regex ist.
- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) prüfen, ob das [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)-Flag gesetzt ist, wenn das erste Argument ein Regex ist, bevor sie ihre Methode [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) oder [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) aufrufen.
- Der [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)-Konstruktor gibt direkt das `pattern`-Argument nur dann zurück, wenn `pattern` ein Regex ist (unter einigen anderen Bedingungen). Wenn `pattern` ein Regex ist, würde er auch die `source`- und `flags`-Eigenschaften von `pattern` prüfen, anstatt `pattern` in eine Zeichenkette zu zwingen.

Zum Beispiel würde [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) alle Eingaben in Zeichenketten umwandeln, aber einen Fehler werfen, wenn das Argument ein Regex ist, da es nur dafür ausgelegt ist, Zeichenketten zu vergleichen, und die Verwendung eines Regex wahrscheinlich ein Entwicklerfehler ist.

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Sie können die Überprüfung umgehen, indem Sie `[Symbol.match]` auf einen [falschen](/de/docs/Glossary/Falsy) Wert setzen, der nicht `undefined` ist. Das würde bedeuten, dass der Regex nicht für `String.prototype.match()` verwendet werden kann (da ohne `[Symbol.match]` ein neues `RegExp`-Objekt mit den beiden einschließenden Schrägstrichen durch [`re.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) hinzugefügt konstruiert würde), aber er kann für praktisch alles andere verwendet werden.

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Perl-ähnliche `RegExp`-Eigenschaften

Beachten Sie, dass mehrere Eigenschaften des `RegExp` sowohl lange als auch kurze (Perl-ähnliche) Namen haben. Beide Namen beziehen sich immer auf denselben Wert. (Perl ist die Programmiersprache, von der JavaScript seine regulären Ausdrücke modelliert hat.) Siehe auch [veraltete `RegExp`-Eigenschaften](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Konstruktor

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Erstellt ein neues `RegExp`-Objekt.

## Statische Eigenschaften

- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) {{deprecated_inline}}
  - : Statische, schreibgeschützte Eigenschaften, die die in Klammern gesetzten Unterstrichübereinstimmungen enthalten.
- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) {{deprecated_inline}}
  - : Eine statische Eigenschaft, die den letzten String enthält, gegen den ein regulärer Ausdruck erfolgreich abgeglichen wurde.
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die die zuletzt abgeglichene Teilzeichenkette enthält.
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die die zuletzt in Klammern gesetzte Teilzeichenkettenübereinstimmung enthält.
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die die vor der letzten Übereinstimmung stehende Teilzeichenkette enthält.
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die die der letzten Übereinstimmung folgende Teilzeichenkette enthält.
- [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
  - : Die Konstruktionsfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

## Instanzeigenschaften

Diese Eigenschaften sind auf `RegExp.prototype` definiert und werden von allen `RegExp`-Instanzen geteilt.

- {{jsxref("Object/constructor", "RegExp.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `RegExp`-Instanzen ist der Anfangswert der {{jsxref("RegExp/RegExp", "RegExp")}}-Konstruktor.
- {{jsxref("RegExp.prototype.dotAll")}}
  - : Gibt an, ob `.` Zeilenumbrüche abgleicht oder nicht.
- {{jsxref("RegExp.prototype.flags")}}
  - : Eine Zeichenkette, die die Flags des `RegExp`-Objekts enthält.
- {{jsxref("RegExp.prototype.global")}}
  - : Gibt an, ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet werden soll oder nur gegen die erste.
- {{jsxref("RegExp.prototype.hasIndices")}}
  - : Gibt an, ob das Ergebnis des regulären Ausdrucks die Anfangs- und Endindizes der erfassten Teilzeichenketten anzeigt.
- {{jsxref("RegExp.prototype.ignoreCase")}}
  - : Gibt an, ob die Groß-/Kleinschreibung beim Versuch einer Übereinstimmung in einem String ignoriert wird.
- {{jsxref("RegExp.prototype.multiline")}}
  - : Gibt an, ob oder nicht in einem String über mehrere Zeilen hinweg gesucht wird.
- {{jsxref("RegExp.prototype.source")}}
  - : Der Text des Musters.
- {{jsxref("RegExp.prototype.sticky")}}
  - : Gibt an, ob die Suche sticky ist oder nicht.
- {{jsxref("RegExp.prototype.unicode")}}
  - : Gibt an, ob Unicode-Funktionen aktiviert sind oder nicht.
- {{jsxref("RegExp.prototype.unicodeSets")}}
  - : Gibt an, ob das `v`-Flag, ein Upgrade des `u`-Modus, aktiviert ist oder nicht.

Diese Eigenschaften sind eigene Eigenschaften jeder `RegExp`-Instanz.

- {{jsxref("RegExp/lastIndex", "lastIndex")}}
  - : Der Index, bei dem der nächste Abgleich beginnen soll.

## Instanzmethoden

- {{jsxref("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : Kompiliert (erneut) einen regulären Ausdruck während der Ausführung eines Skripts.
- {{jsxref("RegExp.prototype.exec()")}}
  - : Führt eine Suche nach einer Übereinstimmung in seinem String-Parameter durch.
- {{jsxref("RegExp.prototype.test()")}}
  - : Testet auf eine Übereinstimmung in seinem String-Parameter.
- {{jsxref("RegExp.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das angegebene Objekt repräsentiert. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
  - : Führt ein Übereinstimmungsabgleich zur übergebenen Zeichenkette aus und gibt das Übereinstimmungsergebnis zurück.
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
  - : Gibt alle Übereinstimmungen des regulären Ausdrucks gegen eine Zeichenkette zurück.
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
  - : Ersetzt Übereinstimmungen in der gegebenen Zeichenkette durch eine neue Teilzeichenkette.
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
  - : Sucht die Übereinstimmung in der gegebenen Zeichenkette und gibt den Index des Musters zurück, das in der Zeichenkette gefunden wurde.
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
  - : Teilt die gegebene Zeichenkette in ein Array, indem die Zeichenkette in Teilzeichenketten getrennt wird.

## Beispiele

### Verwenden eines regulären Ausdrucks zur Änderung des Datenformats

Das folgende Skript verwendet die Methode {{jsxref("String.prototype.replace()")}}, um einen Namen im Format _Vorname Nachname_ zu finden und ihn im Format _Nachname, Vorname_ auszugeben.

Im Ersetzungstext verwendet das Skript `$1` und `$2`, um die Ergebnisse der entsprechenden Klammerausdrücke im regulären Ausdrucksmuster anzugeben.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

Dies zeigt `"Cruz, Maria"` an.

### Verwenden eines regulären Ausdrucks, um Zeilen mit unterschiedlichen Zeilenenden/Enden von Zeilen/Zeilenumbrüchen zu teilen

Das Standardzeilenende variiert je nach Plattform (Unix, Windows usw.). Die in diesem Beispiel bereitgestellte Zeilenteilung funktioniert auf allen Plattformen.

```js
const text = "Some text\nAnd some more\r\nAnd yet\rThis is the end";
const lines = text.split(/\r\n|\r|\n/);
console.log(lines); // [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

Beachten Sie, dass die Reihenfolge der Muster im regulären Ausdruck wichtig ist.

### Verwenden eines regulären Ausdrucks über mehrere Zeilen

```js
const s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Returns null

s.match(/yes[^]*day/);
// Returns ["yes\nmake my day"]
```

### Verwenden eines regulären Ausdrucks mit dem Sticky-Flag

Das {{jsxref("RegExp/sticky", "sticky")}}-Flag gibt an, dass der reguläre Ausdruck beim Zielstring eine Sticky-Übereinstimmung durchführt, indem versucht wird, ab {{jsxref("RegExp.prototype.lastIndex")}} zu vergleichen.

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

Mit dem Sticky-Flag `y` muss das nächste Match an der `lastIndex`-Position erfolgen, während mit dem Global-Flag `g` das Match an der `lastIndex`-Position oder später erfolgen kann:

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

`\w` und `\W` stimmen nur mit ASCII-basierten Zeichen überein; zum Beispiel, `a` bis `z`, `A` bis `Z`, `0` bis `9`, und `_`.

Um Zeichen aus anderen Sprachen wie Kyrillisch oder Hebräisch zu vergleichen, verwenden Sie `\uhhhh`, wobei `hhhh` der Unicode-Wert des Zeichens im Hexadezimalformat ist.

Dieses Beispiel zeigt, wie man Unicode-Zeichen von einem Wort trennen kann.

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

Die Funktion [Unicode-Property-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) bietet eine einfachere Möglichkeit, bestimmte Unicode-Bereiche anzusprechen, indem sie Aussagen wie `\p{scx=Cyrl}` (um jedes kyrillische Zeichen zu vergleichen) oder `\p{L}/u` (um ein Zeichen aus jeder Sprache zu vergleichen) ermöglicht.

### Subdomain-Namen aus URL extrahieren

```js
const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> [!NOTE]
> Anstatt reguläre Ausdrücke zum Parsen von URLs zu verwenden, ist es normalerweise besser, den integrierten URL-Parser des Browsers mithilfe der [URL API](/de/docs/Web/API/URL_API) zu verwenden.

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

Beginnend mit Firefox 34, im Fall einer erfassten Gruppe mit Quantifizierern, die ihre Ausübung verhindern, ist der abgeglichene Text für eine erfasste Gruppe jetzt `undefined` anstatt eines leeren Strings:

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

Beachten Sie, dass aufgrund der Web-Kompatibilität `RegExp.$N` immer noch einen leeren String anstelle von `undefined` zurückgeben wird ([bug 1053944](https://bugzil.la/1053944)).

## Siehe auch

- [Polyfill für viele moderne `RegExp`-Funktionen (`dotAll`, `sticky`-Flags, benannte Erfassungsgruppen, usw.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
