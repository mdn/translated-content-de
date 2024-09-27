---
title: Textformatierung
slug: Web/JavaScript/Guide/Text_formatting
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_expressions")}}

Dieses Kapitel führt Sie in die Arbeit mit Strings und Text in JavaScript ein.

## Strings

Der JavaScript-[String](/de/docs/Glossary/String)-Typ wird verwendet, um Textdaten darzustellen. Es handelt sich um eine Menge von „Elementen“ aus 16-Bit-Integer-Werten (UTF-16-Codeeinheiten). Jedes Element im String nimmt eine Position im String ein. Das erste Element befindet sich an Index 0, das nächste an Index 1 und so weiter. Die Länge eines Strings ist die Anzahl der darin enthaltenen Elemente. Sie können Strings mithilfe von String-Literalen oder String-Objekten erstellen.

### String-Literale

Sie können einfache Strings erstellen, indem Sie entweder einfache oder doppelte Anführungszeichen verwenden:

```js-nolint
'foo'
"bar"
```

Komplexere Strings können mit Escape-Sequenzen erstellt werden:

#### Hexadezimale Escape-Sequenzen

Die Zahl nach \x wird als [Hexadezimalzahl](https://en.wikipedia.org/wiki/Hexadecimal) interpretiert.

```js-nolint
"\xA9" // "©"
```

#### Unicode-Escape-Sequenzen

Die Unicode-Escape-Sequenzen erfordern mindestens vier hexadezimale Ziffern nach `\u`.

```js-nolint
"\u00A9" // "©"
```

#### Unicode-Codepoint-Escapes

Mit Unicode-Codepoint-Escapes kann jedes Zeichen mit hexadezimalen Zahlen escapet werden, sodass es möglich ist, Unicode-Codepunkte bis zu `0x10FFFF` zu verwenden. Bei einfachen Unicode-Escapes ist es häufig notwendig, die Surrogathälften separat zu schreiben, um dasselbe Ergebnis zu erzielen.

Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

```js-nolint
"\u{2F804}"

// the same with simple Unicode escapes
"\uD87E\uDC04"
```

### String-Objekte

Das {{jsxref("String")}}-Objekt ist ein Wrapper um den primitiven Datentyp String.

```js
const foo = new String("foo"); // Creates a String object
console.log(foo); // [String: 'foo']
typeof foo; // 'object'
```

Sie können jede der Methoden des `String`-Objekts auf einem String-Literalwert aufrufen—JavaScript konvertiert das String-Literal automatisch in ein temporäres `String`-Objekt, ruft die Methode auf und verwirft dann das temporäre `String`-Objekt. Sie können auch die `length`-Eigenschaft mit einem String-Literal verwenden.

Sie sollten String-Literale verwenden, es sei denn, Sie müssen explizit ein `String`-Objekt verwenden, da `String`-Objekte ein kontraintuitives Verhalten haben können. Zum Beispiel:

```js
const firstString = "2 + 2"; // Creates a string literal value
const secondString = new String("2 + 2"); // Creates a String object
eval(firstString); // Returns the number 4
eval(secondString); // Returns a String object containing "2 + 2"
```

Ein `String`-Objekt besitzt eine Eigenschaft, `length`, die die Anzahl der UTF-16-Codeeinheiten im String angibt. Zum Beispiel weist der folgende Code `helloLength` den Wert 13 zu, weil "Hello, World!" 13 Zeichen hat, die jeweils durch eine UTF-16-Codeeinheit dargestellt werden. Sie können auf jedes Codeeinheit mithilfe eines Array-Klammern-Stils zugreifen. Sie können einzelne Zeichen nicht ändern, da Strings unveränderliche array-ähnliche Objekte sind:

```js
const hello = "Hello, World!";
const helloLength = hello.length;
hello[0] = "L"; // This has no effect, because strings are immutable
hello[0]; // This returns "H"
```

Zeichen, deren Unicode-Skalare Werte größer als U+FFFF sind (wie einige seltene chinesische/japanische/koreanische/vietnamesische Zeichen und einige Emojis), werden in UTF-16 mit jeweils zwei Surrogatcodeeinheiten gespeichert. Zum Beispiel hat ein String, der das Einzelzeichen U+1F600 "Emoji grinsendes Gesicht" enthält, die Länge 2. Das Zugreifen auf die einzelnen Codeeinheiten in einem solchen String mittels eckiger Klammern kann unerwünschte Konsequenzen haben, wie die Bildung von Strings mit unpassenden Surrogatcodeeinheiten, entgegen dem Unicode-Standard. (Beispiele sollten dieser Seite hinzugefügt werden, nachdem MDN-Bug 857438 behoben ist.) Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

Ein `String`-Objekt hat verschiedene Methoden: zum Beispiel diejenigen, die eine Variation des Strings selbst zurückgeben, wie `substring` und `toUpperCase`.

Die folgende Tabelle fasst die Methoden von {{jsxref("String")}}-Objekten zusammen.

<table class="standard-table">
  <caption>
    <h4 id="Methods_of_String">Methoden von <code>String</code></h4>
  </caption>
  <thead>
    <tr>
      <th scope="col">Methode</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("String/charAt", "charAt()")}}, {{jsxref("String/charCodeAt", "charCodeAt()")}},
        {{jsxref("String/codePointAt", "codePointAt()")}}
      </td>
      <td>
        Gibt das Zeichen oder den Zeichencode an der angegebenen Position im
        String zurück.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/indexOf", "indexOf()")}},
        {{jsxref("String/lastIndexOf", "lastIndexOf()")}}
      </td>
      <td>
        Gibt die Position des angegebenen Substrings im String oder die letzte
        Position des angegebenen Substrings zurück.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/startsWith", "startsWith()")}},
        {{jsxref("String/endsWith", "endsWith()")}},
        {{jsxref("String/includes", "includes()")}}
      </td>
      <td>
        Gibt zurück, ob der String mit einem bestimmten String beginnt, endet
        oder diesen enthält.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/concat", "concat()")}}</td>
      <td>Kombiniert den Text von zwei Strings und gibt einen neuen String zurück.</td>
    </tr>
    <tr>
      <td>{{jsxref("String/split", "split()")}}</td>
      <td>
        Teilt ein <code>String</code>-Objekt in ein Array von Strings, indem es den
        String in Substrings trennt.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/slice", "slice()")}}</td>
      <td>Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/substring", "substring()")}},
        {{jsxref("String/substr", "substr()")}}
      </td>
      <td>
        Gibt das angegebene Teilstück des Strings zurück, entweder durch Angabe
        des Start- und Endindexes oder des Startindexes sowie einer Länge.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}},
        {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}},
        {{jsxref("String/search", "search()")}}
      </td>
      <td>Arbeiten mit regulären Ausdrücken.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/toLowerCase", "toLowerCase()")}},
        {{jsxref("String/toUpperCase", "toUpperCase()")}}
      </td>
      <td>
        <p>
          Gibt den String entweder in Klein- oder Großbuchstaben zurück.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/normalize", "normalize()")}}</td>
      <td>
        Gibt die Unicode-Normalisierungsform des aufrufenden String-Werts zurück.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/repeat", "repeat()")}}</td>
      <td>
        Gibt einen String zurück, der aus den Elementen des Objekts besteht,
        die die angegebenen Male wiederholt werden.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/trim", "trim()")}}</td>
      <td>Trimmt Leerzeichen vom Anfang und Ende des Strings.</td>
    </tr>
  </tbody>
</table>

### Mehrzeilige Template-Literals

[Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) sind String-Literale, die eingebettete Ausdrücke ermöglichen. Sie können damit mehrzeilige Strings und Interpolationsfunktionen verwenden.

Template Literals werden durch Backticks ([Gravis](https://en.wikipedia.org/wiki/Grave_accent)) (`) anstatt durch doppelte oder einfache Anführungszeichen eingeschlossen. Template Literals können Platzhalter enthalten, die durch ein Dollarzeichen und geschweifte Klammern (`${expression}`) angezeigt werden.

#### Mehrzeilige

Alle neuen Zeilenzeichen, die in den Quellcode eingefügt werden, sind Teil des Template-Literals. Mit normalen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

Um denselben Effekt mit mehrzeiligen Strings zu erzielen, können Sie jetzt schreiben:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

#### Eingebettete Ausdrücke

Um Ausdrücke in normale Strings einzubetten, würden Sie die folgende Syntax verwenden:

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

Jetzt können Sie mit Template Literals den syntaktischen Zucker nutzen, um solche Substitutionen lesbarer zu machen:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

Für weitere Informationen lesen Sie über [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).

## Internationalisierung

Das {{jsxref("Intl")}}-Objekt ist der Namensraum für die ECMAScript-Internationalisierungs-API, die sprachsensitiven String-Vergleich, Zahlenformatierung und Datums- und Uhrzeit-Formatierung bietet. Die Konstruktoren für {{jsxref("Intl.Collator")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.DateTimeFormat")}}-Objekte sind Eigenschaften des `Intl`-Objekts.

### Datums- und Uhrzeit-Formatierung

Das {{jsxref("Intl.DateTimeFormat")}}-Objekt ist nützlich zur Formatierung von Datum und Uhrzeit. Das folgende Beispiel formatiert ein Datum für Englisch, wie es in den Vereinigten Staaten verwendet wird. (Das Ergebnis ist in einer anderen Zeitzone unterschiedlich.)

```js
// July 17, 2014 00:00:00 UTC:
const july172014 = new Date("2014-07-17");

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

// Local timezone vary depending on your settings
// In CEST, logs: 07/17/14, 02:00 AM GMT+2
// In PDT, logs: 07/16/14, 05:00 PM GMT-7
console.log(americanDateTime(july172014));
```

### Zahlenformatierung

Das {{jsxref("Intl.NumberFormat")}}-Objekt ist nützlich zur Formatierung von Zahlen, beispielsweise Währungen.

```js
const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```

### Sortierung

Das {{jsxref("Intl.Collator")}}-Objekt ist nützlich zum Vergleichen und Sortieren von Strings.

Zum Beispiel gibt es im Deutschen tatsächlich zwei verschiedene Sortierreihenfolgen: _Telefonbuch_ und _Wörterbuch_. Die Telefonbuchsortierung betont den Klang, und es ist, als ob "ä", "ö" und so weiter vor dem Sortieren in "ae", "oe" und so weiter expandiert würden.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// "Hochberg, Hönigswald, Holzman"
```

Einige deutsche Wörter konjugieren mit zusätzlichen Umlauten, daher ist es in Wörterbüchern sinnvoll, Umlauten beim Ordnen zu ignorieren (außer beim Ordnen von Wörtern, die sich _nur_ durch Umlaute unterscheiden: _schon_ vor _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

Für weitere Informationen zur {{jsxref("Intl")}}-API siehe auch [Introducing the JavaScript Internationalization API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/).

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_expressions")}}
