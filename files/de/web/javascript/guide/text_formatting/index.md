---
title: Textformatierung
slug: Web/JavaScript/Guide/Text_formatting
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_expressions")}}

Dieses Kapitel führt ein, wie man mit Zeichenfolgen und Text in JavaScript arbeitet.

## Strings

Der [String](/de/docs/Glossary/String)-Typ in JavaScript wird verwendet, um Textdaten darzustellen. Es ist eine Menge von "Elementen" von 16-Bit-Integer-Werten ohne Vorzeichen (UTF-16-Code-Einheiten). Jedes Element im String nimmt eine Position im String ein. Das erste Element ist an Index 0, das nächste an Index 1 und so weiter. Die Länge eines Strings ist die Anzahl der Elemente in ihm. Sie können Strings mithilfe von String-Literalen oder String-Objekten erstellen.

### String-Literale

Sie können einfache Strings mit einfachen oder doppelten Anführungszeichen erstellen:

```js-nolint
'foo'
"bar"
```

Fortgeschrittenere Strings können mit Escape-Sequenzen erstellt werden:

#### Hexadezimale Escape-Sequenzen

Die Zahl nach \x wird als [hexadezimale](https://de.wikipedia.org/wiki/Hexadezimalsystem) Zahl interpretiert.

```js-nolint
"\xA9" // "©"
```

#### Unicode-Escape-Sequenzen

Die Unicode-Escape-Sequenzen erfordern mindestens vier hexadezimale Ziffern nach `\u`.

```js-nolint
"\u00A9" // "©"
```

#### Unicode-Codepunkt-Escapes

Mit Unicode-Codepunkt-Escapes kann jedes Zeichen durch Hexadezimalzahlen maskiert werden, sodass es möglich ist, Unicode-Codepunkte bis zu `0x10FFFF` zu verwenden. Mit einfachen Unicode-Escapes ist es oft notwendig, die Surrogat-Hälften separat zu schreiben, um dasselbe Ergebnis zu erzielen.

Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

```js-nolint
"\u{2F804}"

// dasselbe mit einfachen Unicode-Escapes
"\uD87E\uDC04"
```

### String-Objekte

Das {{jsxref("String")}}-Objekt ist ein Wrapper um den primitiven Datentyp String.

```js
const foo = new String("foo"); // Erstellt ein String-Objekt
console.log(foo); // [String: 'foo']
typeof foo; // 'object'
```

Sie können jede der Methoden des `String`-Objekts auf einem String-Literalwert aufrufen—JavaScript konvertiert das String-Literal automatisch in ein temporäres `String`-Objekt, ruft die Methode auf und verwirft dann das temporäre `String`-Objekt. Sie können auch die `length`-Eigenschaft mit einem String-Literal verwenden.

Sie sollten String-Literale verwenden, es sei denn, Sie müssen spezifisch ein `String`-Objekt verwenden, da `String`-Objekte ein kontraintuitives Verhalten haben können. Zum Beispiel:

```js
const firstString = "2 + 2"; // Erstellt einen String-Literalwert
const secondString = new String("2 + 2"); // Erstellt ein String-Objekt
eval(firstString); // Gibt die Zahl 4 zurück
eval(secondString); // Gibt ein String-Objekt mit "2 + 2" zurück
```

Ein `String`-Objekt hat eine Eigenschaft, `length`, die die Anzahl der UTF-16-Code-Einheiten im String angibt. Zum Beispiel weist der folgende Code `helloLength` den Wert 13 zu, da "Hello, World!" 13 Zeichen hat, die jeweils durch eine UTF-16-Code-Einheit dargestellt werden. Sie können auf jede Code-Einheit im Stil von Array-Klammern zugreifen. Sie können jedoch keine einzelnen Zeichen ändern, da Strings unveränderbare array-ähnliche Objekte sind:

```js
const hello = "Hello, World!";
const helloLength = hello.length;
hello[0] = "L"; // Dies hat keinen Effekt, da Strings unveränderlich sind
hello[0]; // Dies gibt "H" zurück
```

Zeichen, deren Unicode-Skalarwerte größer als U+FFFF sind (wie einige seltene chinesische/japanische/koreanische/vietnamesische Zeichen und einige Emojis), werden in UTF-16 mit je zwei Surrogat-Codeeinheiten gespeichert. Zum Beispiel hat ein String, der das einzelne Zeichen U+1F600 "Emoji grinsendes Gesicht" enthält, die Länge 2. Der Zugriff auf die einzelnen Code-Einheiten in einem solchen String mit eckigen Klammern kann unerwünschte Konsequenzen haben, wie die Bildung von Strings mit nicht übereinstimmenden Surrogat-Codeeinheiten, was den Unicode-Standard verletzt. (Beispiele sollten zu dieser Seite hinzugefügt werden, nachdem MDN-Bug 857438 behoben ist.) Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

Ein `String`-Objekt hat verschiedene Methoden: zum Beispiel solche, die eine Variation des Strings selbst zurückgeben, wie `substring` und `toUpperCase`.

Die folgende Tabelle fasst die Methoden der {{jsxref("String")}}-Objekte zusammen.

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
        Gibt zurück, ob der String mit einer angegebenen
        Zeichenfolge beginnt, endet oder diese enthält.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/concat", "concat()")}}</td>
      <td>Kombiniert den Text von zwei Strings und gibt einen neuen String zurück.</td>
    </tr>
    <tr>
      <td>{{jsxref("String/split", "split()")}}</td>
      <td>
        Teilt ein <code>String</code>-Objekt in ein Array von Strings, indem
        der String in Substrings aufgeteilt wird.
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
        der Start- und Endindizes oder des Startindex und einer Länge.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}},
        {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}},
        {{jsxref("String/search", "search()")}}
      </td>
      <td>Arbeitet mit regulären Ausdrücken.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/toLowerCase", "toLowerCase()")}},
        {{jsxref("String/toUpperCase", "toUpperCase()")}}
      </td>
      <td>
        <p>
          Gibt den String entweder in komplett klein oder groß zurück.
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
        die die angegebene Anzahl von Malen wiederholt werden.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/trim", "trim()")}}</td>
      <td>Entfernt Leerzeichen vom Anfang und Ende des Strings.</td>
    </tr>
  </tbody>
</table>

### Mehrzeilige Template-Literale

[Template Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind String-Literale, die eingebettete Ausdrücke ermöglichen. Sie können mit ihnen mehrzeilige Strings und String-Interpolation verwenden.

Template-Literale werden mit Backtick-Zeichen (Gravis-Akzent) (`` ` ``) anstelle von doppelten oder einfachen Anführungszeichen umschlossen. Template-Literale können Platzhalter enthalten. Diese werden durch das Dollarzeichen und geschweifte Klammern (`${expression}`) angezeigt.

#### Mehrzeilige

Alle in die Quelle eingefügten neuen Zeilenzeichen sind Teil des Template-Literals. Mit normalen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

Um den gleichen Effekt mit mehrzeiligen Strings zu erzielen, können Sie jetzt schreiben:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

#### Eingebettete Ausdrücke

Um Ausdrücke in normalen Strings einzubetten, würden Sie folgende Syntax verwenden:

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

Jetzt können Sie mit Template-Literalen den syntaktischen Zucker nutzen, um solche Ersetzungen lesbarer zu machen:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

Für weitere Informationen lesen Sie über [Template Literale](/de/docs/Web/JavaScript/Reference/Template_literals) im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).

## Internationalisierung

Das {{jsxref("Intl")}}-Objekt ist der Namensraum für die ECMAScript-Internationalisierungs-API, die sprachensensitive Vergleiche von Strings, Zahlenformatierung und Datums- und Zeitformatierung bietet. Die Konstruktoren der {{jsxref("Intl.Collator")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.DateTimeFormat")}} Objekte sind Eigenschaften des `Intl`-Objekts.

### Datums- und Zeitformatierung

Das {{jsxref("Intl.DateTimeFormat")}}-Objekt ist nützlich für die Formatierung von Datum und Zeit. Das folgende formatiert ein Datum für Englisch, wie es in den Vereinigten Staaten verwendet wird. (Das Ergebnis ist in einer anderen Zeitzone unterschiedlich.)

```js
// 17. Juli 2014 00:00:00 UTC:
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

// Lokale Zeitzonen variieren je nach Ihren Einstellungen
// In CEST: 07/17/14, 02:00 AM GMT+2
// In PDT: 07/16/14, 05:00 PM GMT-7
console.log(americanDateTime(july172014));
```

### Zahlenformatierung

Das {{jsxref("Intl.NumberFormat")}}-Objekt ist nützlich für die Formatierung von Zahlen, beispielsweise Währungen.

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

Das {{jsxref("Intl.Collator")}}-Objekt ist nützlich für den Vergleich und das Sortieren von Strings.

Zum Beispiel gibt es im Deutschen tatsächlich zwei unterschiedliche Sortierordnungen, das _Telefonbuch_ und das _Wörterbuch_. Die Telefonbuchsortierung betont den Klang, und es ist so, als ob "ä", "ö" und so weiter vor dem Sortieren in "ae", "oe" und so weiter erweitert würden.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// als ob Sie ["Hochberg", "Hoenigswald", "Holzman"] sortierten:
console.log(names.sort(germanPhonebook.compare).join(", "));
// "Hochberg, Hönigswald, Holzman"
```

Einige deutsche Wörter konjugieren mit zusätzlichen Umlauten, daher ist es in Wörterbüchern sinnvoll, die Umlaute zu ignorieren (außer beim Sortieren von Wörtern, die sich _nur_ durch Umlaute unterscheiden: _schon_ vor _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// als ob Sie ["Hochberg", "Honigswald", "Holzman"] sortierten:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

Für weitere Informationen zur {{jsxref("Intl")}}-API siehe auch [Einführung in die JavaScript Internationalisierungs-API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/).

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_expressions")}}
