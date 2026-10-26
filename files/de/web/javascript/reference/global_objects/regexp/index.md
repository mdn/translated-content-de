---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das **`RegExp`**-Objekt wird verwendet, um Text mit einem Muster abzugleichen.

Eine Einführung in reguläre Ausdrücke finden Sie im Kapitel [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) des JavaScript-Leitfadens. Ausführliche Informationen zur Syntax regulärer Ausdrücke finden Sie in der [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Beschreibung

### Literalschreibweise und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: die _Literalschreibweise_ und einen _Konstruktor_.

- Bei der _Literalschreibweise_ steht ein Muster zwischen zwei Schrägstrichen. Nach dem zweiten Schrägstrich können optionale [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) folgen.
- Die _Konstruktorfunktion_ erhält als ersten Parameter entweder einen String oder ein `RegExp`-Objekt und als zweiten Parameter einen String mit optionalen [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags).

Die folgenden drei Ausdrücke erstellen dasselbe Objekt für reguläre Ausdrücke:

```js
const re = /ab+c/i; // literal notation
// OR
const re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
// OR
const re = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dadurch können sie Übereinstimmungen effizienter finden. Weitere Informationen zu diesem Vorgang finden Sie in der [dotnet-Dokumentation](https://learn.microsoft.com/en-us/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

Bei der Literalschreibweise wird der reguläre Ausdruck kompiliert, wenn der Ausdruck ausgewertet wird. Beim Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, wird der reguläre Ausdruck dagegen zur Laufzeit kompiliert.

Verwenden Sie einen String als erstes Argument des Konstruktors `RegExp()`, wenn Sie [den regulären Ausdruck aus dynamischen Eingaben erstellen](#einen_regulären_ausdruck_aus_dynamischen_eingaben_erstellen) möchten.

### Flags im Konstruktor

Der Ausdruck `new RegExp(/ab+c/, flags)` erstellt ein neues `RegExp`-Objekt mit dem Muster des ersten Parameters und den [Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) des zweiten Parameters.

Wenn Sie die Konstruktorfunktion verwenden, gelten die üblichen Regeln zum Escapen von Zeichen in Strings: Sonderzeichen müssen innerhalb eines Strings ein `\` vorangestellt bekommen.

Die folgenden Beispiele sind gleichwertig:

```js
const re = /\w+/;
// OR
const re = new RegExp("\\w+");
```

### Besondere Behandlung regulärer Ausdrücke

> [!NOTE]
> Ob etwas ein „regulärer Ausdruck“ ist, kann per [Duck-Typing](https://en.wikipedia.org/wiki/Duck_typing) bestimmt werden. Es muss kein `RegExp`-Objekt sein!

Einige integrierte Methoden behandeln reguläre Ausdrücke gesondert. Sie bestimmen in [mehreren Schritten](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp), ob `x` ein regulärer Ausdruck ist:

1. `x` muss ein Objekt sein (kein primitiver Wert).
2. Wenn [`x[Symbol.match]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) nicht `undefined` ist, wird geprüft, ob der Wert {{Glossary("Truthy", "truthy")}} ist.
3. Andernfalls, wenn `x[Symbol.match]` den Wert `undefined` hat, wird geprüft, ob `x` mit dem `RegExp`-Konstruktor erstellt wurde. (Dieser Schritt sollte selten vorkommen: Ein unverändertes `RegExp`-Objekt sollte eine `Symbol.match`-Eigenschaft besitzen.)

In den meisten Fällen wird also `Symbol.match` geprüft. Das bedeutet:

- Ein tatsächliches `RegExp`-Objekt, dessen `Symbol.match`-Eigenschaft einen {{Glossary("Falsy", "falsy")}}-Wert hat, der nicht `undefined` ist, kann wie ein Objekt verwendet werden, das kein regulärer Ausdruck ist – selbst wenn alle anderen Eigenschaften und Methoden, etwa [`exec`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), unverändert sind.
- Ein Objekt, das kein `RegExp`-Objekt ist, aber eine `Symbol.match`-Eigenschaft besitzt, wird wie ein regulärer Ausdruck behandelt.

Diese Entscheidung wurde getroffen, weil `[Symbol.match]()` am deutlichsten darauf hinweist, dass etwas für den Musterabgleich vorgesehen ist. (`exec` könnte ebenfalls verwendet werden, würde aber zu viele falsch positive Ergebnisse liefern, da es keine Symbol-Eigenschaft ist.) Zu den Stellen, die reguläre Ausdrücke gesondert behandeln, gehören:

- [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) und [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/includes) lösen einen {{jsxref("TypeError")}} aus, wenn das erste Argument ein regulärer Ausdruck ist.
- [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) prüfen vor dem Aufruf der Methode [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) beziehungsweise [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace), ob das [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)-Flag gesetzt ist, sofern das erste Argument ein regulärer Ausdruck ist.
- Der Konstruktor [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) gibt das Argument `pattern` nur dann direkt zurück, wenn `pattern` ein regulärer Ausdruck ist (und einige weitere Bedingungen erfüllt sind). Ist `pattern` ein regulärer Ausdruck, greift der Konstruktor außerdem auf dessen Eigenschaften `source` und `flags` zu, statt `pattern` in einen String umzuwandeln.

Beispielsweise würde [`String.prototype.endsWith()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) alle Eingaben in Strings umwandeln. Ist das Argument jedoch ein regulärer Ausdruck, löst die Methode einen Fehler aus: Sie ist nur für den Abgleich von Strings vorgesehen, und die Verwendung eines regulären Ausdrucks ist wahrscheinlich ein Fehler bei der Entwicklung.

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Sie können diese Prüfung umgehen, indem Sie `[Symbol.match]` auf einen {{Glossary("Falsy", "falsy")}}-Wert setzen, der nicht `undefined` ist. Der reguläre Ausdruck kann dann nicht mehr mit `String.prototype.match()` verwendet werden (denn ohne `[Symbol.match]` würde `match()` ein neues `RegExp`-Objekt erstellen, wobei die beiden von [`re.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) hinzugefügten umschließenden Schrägstriche übernommen würden). Für praktisch alles andere kann er jedoch weiterhin verwendet werden.

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Perl-ähnliche RegExp-Eigenschaften

Beachten Sie, dass mehrere `RegExp`-Eigenschaften sowohl lange als auch kurze (Perl-ähnliche) Namen haben. Beide Namen beziehen sich stets auf denselben Wert. (Perl ist die Programmiersprache, an deren regulären Ausdrücken sich JavaScript orientiert hat.) Siehe auch [veraltete `RegExp`-Eigenschaften](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Konstruktor

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Erstellt ein neues `RegExp`-Objekt.

## Statische Eigenschaften

- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) {{deprecated_inline}}
  - : Statische, schreibgeschützte Eigenschaften, die Übereinstimmungen von Teilstrings in Klammern enthalten.
- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) {{deprecated_inline}}
  - : Eine statische Eigenschaft, die den letzten String enthält, für den ein regulärer Ausdruck erfolgreich eine Übereinstimmung gefunden hat.
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den zuletzt abgeglichenen Teilstring enthält.
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die die letzte Übereinstimmung mit einem Teilstring in Klammern enthält.
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den Teilstring vor der letzten Übereinstimmung enthält.
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext) {{deprecated_inline}}
  - : Eine statische, schreibgeschützte Eigenschaft, die den Teilstring nach der letzten Übereinstimmung enthält.
- [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
  - : Die Konstruktorfunktion, mit der abgeleitete Objekte erstellt werden.

## Statische Methoden

- {{jsxref("RegExp.escape()")}}
  - : [Escaped](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) alle Zeichen in einem String, die Teil der Syntax regulärer Ausdrücke sein könnten, und gibt einen neuen String zurück, der sicher als [literales](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den Konstruktor {{jsxref("RegExp/RegExp", "RegExp()")}} verwendet werden kann.

## Instanzeigenschaften

Diese Eigenschaften sind auf `RegExp.prototype` definiert und werden von allen `RegExp`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "RegExp.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `RegExp`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("RegExp/RegExp", "RegExp")}}.
- {{jsxref("RegExp.prototype.dotAll")}}
  - : Gibt an, ob `.` auf Zeilenumbrüche passt.
- {{jsxref("RegExp.prototype.flags")}}
  - : Ein String, der die Flags des `RegExp`-Objekts enthält.
- {{jsxref("RegExp.prototype.global")}}
  - : Gibt an, ob der reguläre Ausdruck auf alle möglichen Übereinstimmungen in einem String oder nur auf die erste geprüft wird.
- {{jsxref("RegExp.prototype.hasIndices")}}
  - : Gibt an, ob das Ergebnis des regulären Ausdrucks die Anfangs- und Endindizes erfasster Teilstrings bereitstellt.
- {{jsxref("RegExp.prototype.ignoreCase")}}
  - : Gibt an, ob beim Suchen nach einer Übereinstimmung in einem String die Groß- und Kleinschreibung ignoriert wird.
- {{jsxref("RegExp.prototype.multiline")}}
  - : Gibt an, ob die Suche in Strings über mehrere Zeilen hinweg erfolgt.
- {{jsxref("RegExp.prototype.source")}}
  - : Der Text des Musters.
- {{jsxref("RegExp.prototype.sticky")}}
  - : Gibt an, ob die Suche sticky ist.
- {{jsxref("RegExp.prototype.unicode")}}
  - : Gibt an, ob Unicode-Funktionen aktiviert sind.
- {{jsxref("RegExp.prototype.unicodeSets")}}
  - : Gibt an, ob das `v`-Flag aktiviert ist, eine Erweiterung des `u`-Modus.

Die folgende Eigenschaft ist eine eigene Eigenschaft jeder `RegExp`-Instanz.

- {{jsxref("RegExp/lastIndex", "lastIndex")}}
  - : Der Index, an dem die Suche nach der nächsten Übereinstimmung beginnt.

## Instanzmethoden

- {{jsxref("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : Kompiliert einen regulären Ausdruck während der Ausführung eines Skripts (erneut).
- {{jsxref("RegExp.prototype.exec()")}}
  - : Sucht im übergebenen String nach einer Übereinstimmung.
- {{jsxref("RegExp.prototype.test()")}}
  - : Prüft, ob im übergebenen String eine Übereinstimmung vorliegt.
- {{jsxref("RegExp.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt repräsentiert. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
  - : Führt einen Musterabgleich mit dem angegebenen String durch und gibt das Ergebnis zurück.
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
  - : Gibt alle Übereinstimmungen des regulären Ausdrucks in einem String zurück.
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
  - : Ersetzt Übereinstimmungen im angegebenen String durch einen neuen Teilstring.
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
  - : Sucht im angegebenen String nach einer Übereinstimmung und gibt den Index zurück, an dem das Muster im String gefunden wurde.
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
  - : Teilt den angegebenen String in Teilstrings auf und gibt sie als Array zurück.

## Beispiele

### Mit einem regulären Ausdruck das Datenformat ändern

Das folgende Skript verwendet die Methode {{jsxref("String.prototype.replace()")}}, um einen Namen im Format _Vorname Nachname_ zu erkennen und im Format _Nachname, Vorname_ auszugeben.

Im Ersatztext verwendet das Skript `$1` und `$2` für die Ergebnisse der entsprechenden Klammergruppen im Muster des regulären Ausdrucks.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr);
```

Dies gibt `"Cruz, Maria"` aus.

### Zeilen mit unterschiedlichen Zeilenenden mithilfe eines regulären Ausdrucks aufteilen

Das standardmäßige Zeilenende hängt von der Plattform ab (Unix, Windows usw.). Die in diesem Beispiel gezeigte Aufteilung in Zeilen funktioniert auf allen Plattformen.

```js
const text = "Some text\nAnd some more\r\nAnd yet\nThis is the end";
const lines = text.split(/\r?\n/);
console.log(lines); // [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

Beachten Sie, dass die Reihenfolge der Muster im regulären Ausdruck wichtig ist.

### Einen regulären Ausdruck über mehrere Zeilen verwenden

Standardmäßig passt das Zeichen `.` nicht auf Zeilenumbrüche. Damit es auch auf Zeilenumbrüche passt, verwenden Sie das `s`-Flag (`dotAll`-Modus).

```js
const s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Returns null

s.match(/yes.*day/s);
// Returns ["yes\nmake my day"]
```

### Einen regulären Ausdruck mit dem sticky-Flag verwenden

Das {{jsxref("RegExp/sticky", "sticky")}}-Flag bewirkt, dass der reguläre Ausdruck im Zielstring nur ab der Position {{jsxref("RegExp.prototype.lastIndex")}} nach einer Übereinstimmung sucht.

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### Unterschied zwischen dem sticky-Flag und dem global-Flag

Mit dem sticky-Flag `y` muss die nächste Übereinstimmung an der Position `lastIndex` beginnen. Mit dem global-Flag `g` kann sie an dieser Position oder später beginnen:

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

Mit dem global-Flag `g` würden alle 6 Ziffern abgeglichen, nicht nur 3.

### Reguläre Ausdrücke und Unicode-Zeichen

`\w` und `\W` gleichen nur Zeichen auf ASCII-Basis ab, beispielsweise `a` bis `z`, `A` bis `Z`, `0` bis `9` und `_`.

Um Zeichen aus anderen Sprachen wie Kyrillisch oder Hebräisch abzugleichen, verwenden Sie `\uHHHH`, wobei `HHHH` der hexadezimale Unicode-Wert des Zeichens ist.

Dieses Beispiel zeigt, wie Unicode-Zeichen aus einem Wort herausgetrennt werden können.

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

Mit [Unicode-Eigenschafts-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) lassen sich bestimmte Unicode-Bereiche einfacher auswählen. Dazu können Sie beispielsweise `\p{scx=Cyrl}` (für einen beliebigen kyrillischen Buchstaben) oder `\p{L}/u` (für einen Buchstaben aus einer beliebigen Sprache) verwenden.

### Subdomain-Namen aus einer URL extrahieren

```js
const url = "http://xxx.example.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> [!NOTE]
> Statt URLs mit regulären Ausdrücken zu parsen, ist es in der Regel besser, den integrierten URL-Parser des Browsers über die [URL-API](/de/docs/Web/API/URL_API) zu verwenden.

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

### Hinweise zu Firefox

Seit Firefox 34 ist der abgeglichene Text einer erfassenden Gruppe `undefined` statt eines leeren Strings, wenn Quantifizierer verhindern, dass die Gruppe beim Abgleich verwendet wird:

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

Beachten Sie, dass `RegExp.$N` aus Gründen der Webkompatibilität weiterhin einen leeren String statt `undefined` zurückgibt ([Bug 1053944](https://bugzil.la/1053944)).

## Siehe auch

- [Polyfill für viele moderne `RegExp`-Funktionen (`dotAll`- und `sticky`-Flags, benannte Erfassungsgruppen usw.) in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- Leitfaden zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
