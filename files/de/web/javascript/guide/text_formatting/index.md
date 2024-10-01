---
title: Textformatierung
slug: Web/JavaScript/Guide/Text_formatting
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_expressions")}}

Dieses Kapitel führt ein, wie man mit Zeichenketten und Text in JavaScript arbeitet.

## Strings

Der {{Glossary("String", "String")}} Typ in JavaScript wird verwendet, um textuelle Daten darzustellen. Es handelt sich um eine Menge von "Elementen" aus 16-Bit-Integer-Werten ohne Vorzeichen (UTF-16 Code-Einheiten). Jedes Element im String nimmt eine Position im String ein. Das erste Element befindet sich am Index 0, das nächste am Index 1, und so weiter. Die Länge eines Strings ist die Anzahl der Elemente darin. Sie können Strings mit Hilfe von String-Literalen oder String-Objekten erstellen.

### String-Literale

Sie können einfache Strings mit einfachen oder doppelten Anführungszeichen erstellen:

```js-nolint
'foo'
"bar"
```

Fortgeschrittenere Strings können mit Escape-Sequenzen erstellt werden:

#### Hexadezimale Escape-Sequenzen

Die Zahl nach \x wird als [hexadezimale](https://en.wikipedia.org/wiki/Hexadecimal) Nummer interpretiert.

```js-nolint
"\xA9" // "©"
```

#### Unicode-Escape-Sequenzen

Die Unicode-Escape-Sequenzen erfordern mindestens vier hexadezimale Ziffern nach `\u`.

```js-nolint
"\u00A9" // "©"
```

#### Unicode Code Point Escapes

Mit Unicode Code Point Escapes kann jedes Zeichen mit hexadezimalen Zahlen entkommen werden, sodass es möglich ist, Unicode-Codepunkte bis zu `0x10FFFF` zu verwenden. Mit einfachen Unicode-Escapes ist es oft notwendig, die Surrogat-Hälften separat zu schreiben, um dasselbe Ergebnis zu erzielen.

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

Sie können jede der Methoden des `String`-Objekts auf einen String-Literal-Wert aufrufen—JavaScript konvertiert den String-Literal-Wert automatisch zu einem temporären `String`-Objekt, ruft die Methode auf und verwirft dann das temporäre `String`-Objekt. Sie können auch die Eigenschaft `length` mit einem String-Literal verwenden.

Sie sollten String-Literale verwenden, es sei denn, Sie müssen speziell ein `String`-Objekt verwenden, da `String`-Objekte ein widersprüchliches Verhalten haben können. Beispiel:

```js
const firstString = "2 + 2"; // Creates a string literal value
const secondString = new String("2 + 2"); // Creates a String object
eval(firstString); // Returns the number 4
eval(secondString); // Returns a String object containing "2 + 2"
```

Ein `String`-Objekt hat eine Eigenschaft, `length`, die die Anzahl der UTF-16-Codeeinheiten im String angibt. Zum Beispiel weist der folgende Code `helloLength` den Wert 13 zu, weil "Hello, World!" 13 Zeichen hat, die jeweils durch eine UTF-16-Codeeinheit dargestellt werden. Sie können auf jede Codeeinheit mit einer Array-Klammer-Syntax zugreifen. Sie können keine einzelnen Zeichen ändern, da Strings unveränderliche array-ähnliche Objekte sind:

```js
const hello = "Hello, World!";
const helloLength = hello.length;
hello[0] = "L"; // This has no effect, because strings are immutable
hello[0]; // This returns "H"
```

Zeichen, deren Unicode-Skalarwerte größer sind als U+FFFF (wie einige seltene chinesische/japanische/koreanische/vietnamesische Zeichen und einige Emojis), werden in UTF-16 mit jeweils zwei Surrogat-Codeeinheiten gespeichert. Beispielsweise hat ein String, der das einzelne Zeichen U+1F600 "Emoji grinning face" enthält, die Länge 2. Der Zugriff auf die einzelnen Codeeinheiten in einem solchen String mit eckigen Klammern kann unerwünschte Konsequenzen haben, wie die Bildung von Strings mit nicht übereinstimmenden Surrogat-Codeeinheiten, was gegen den Unicode-Standard verstößt. (Beispiele sollten dieser Seite hinzugefügt werden, nachdem der MDN-Fehler 857438 behoben ist.) Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

Ein `String`-Objekt bietet eine Vielzahl von Methoden: Zum Beispiel solche, die eine Variation des Strings selbst zurückgeben, wie `substring` und `toUpperCase`.

Die folgende Tabelle fasst die Methoden von {{jsxref("String")}} Objekten zusammen.

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
        Gibt das Zeichen oder den Zeichen-Code an der angegebenen Position im
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
        Gibt zurück, ob der String mit einem bestimmten String beginnt, endet oder
        ihn enthält.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/concat", "concat()")}}</td>
      <td>Verbindet den Text von zwei Strings und gibt einen neuen String zurück.</td>
    </tr>
    <tr>
      <td>{{jsxref("String/split", "split()")}}</td>
      <td>
        Teilt ein <code>String</code>-Objekt in ein Array von Strings, indem der
        String in Substrings aufgeteilt wird.
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
        Gibt den angegebenen Teil des Strings zurück, entweder durch Angabe der
        Start- und Endindizes oder des Startindex und einer Länge.
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
          Gibt den String in komplett kleingeschriebenem oder großgeschriebenem Format zurück.
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
        Gibt einen String zurück, der aus den wiederholten Elementen des Objekts
        in der angegebenen Anzahl besteht.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/trim", "trim()")}}</td>
      <td>Entfernt Leerzeichen vom Anfang und Ende des Strings.</td>
    </tr>
  </tbody>
</table>

### Mehrzeilige Template-Literale

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind String-Literale, die eingebettete Ausdrücke ermöglichen. Sie können mehrzeilige Strings und String-Interpolation mit ihnen verwenden.

Template-Literale werden von Backticks ([Gravis](https://en.wikipedia.org/wiki/Grave_accent)) (` ` `) umschlossen, anstelle von doppelten oder einfachen Anführungszeichen. Template-Literale können Platzhalter enthalten, die durch das Dollarzeichen und geschweifte Klammern (`${expression}`) angegeben werden.

#### Mehrzeilig

Alle neuen Zeilenzeichen, die in der Quelle eingefügt werden, sind Teil des Template-Literals. Bei normalen Strings müssten Sie folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

Um denselben Effekt mit mehrzeiligen Strings zu erzielen, können Sie jetzt Folgendes schreiben:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

#### Eingebettete Ausdrücke

Um Ausdrücke innerhalb normaler Strings einzubetten, würden Sie folgende Syntax verwenden:

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

Jetzt können Sie mit Template-Literalen die syntaktische Zuckung verwenden, um solche Ersetzungen lesbarer zu machen:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

Weitere Informationen finden Sie im Artikel über [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).

## Internationalisierung

Das {{jsxref("Intl")}}-Objekt ist der Namensraum für die ECMAScript Internationalization API, die sprachsensitive Zeichenfolgenvergleiche, Zahlenformate und Datums- und Uhrzeitformate bietet. Die Konstruktoren für {{jsxref("Intl.Collator")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.DateTimeFormat")}} Objekte sind Eigenschaften des `Intl`-Objekts.

### Datums- und Uhrzeitformatierung

Das {{jsxref("Intl.DateTimeFormat")}}-Objekt ist nützlich für die Formatierung von Datum und Uhrzeit. Im Folgenden wird ein Datum für Englisch, wie in den Vereinigten Staaten verwendet, formatiert. (Das Ergebnis ist in einer anderen Zeitzone unterschiedlich.)

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

### Kollision

Das {{jsxref("Intl.Collator")}}-Objekt ist nützlich zum Vergleichen und Sortieren von Zeichenfolgen.

Zum Beispiel gibt es im Deutschen tatsächlich zwei verschiedene Sortierreihenfolgen, _Telefonbuch_ und _Wörterbuch_. Die Telefonbuchsortierung betont den Klang, und es ist, als ob "ä", "ö" und so weiter vor dem Sortieren zu "ae", "oe" und so weiter ausgeweitet würden.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// "Hochberg, Hönigswald, Holzman"
```

Einige deutsche Wörter werden mit zusätzlichen Umlauten konjugiert, daher ist es in Wörterbüchern sinnvoll, Umlauten zu ignorieren (außer beim Sortieren von Wörtern, die sich nur durch Umlaute unterscheiden: _schon_ vor _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

Weitere Informationen zur {{jsxref("Intl")}} API finden Sie im Artikel [Introducing the JavaScript Internationalization API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/).

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_expressions")}}
