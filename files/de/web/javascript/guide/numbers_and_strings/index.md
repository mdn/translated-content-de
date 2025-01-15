---
title: Zahlen und Zeichenketten
slug: Web/JavaScript/Guide/Numbers_and_strings
l10n:
  sourceCommit: 0785ed06b89a60d6df673504d84e276852017c92
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

Dieses Kapitel führt die beiden grundlegendsten Datentypen in JavaScript ein: Zahlen und Zeichenketten. Wir werden ihre zugrunde liegenden Darstellungen und Funktionen, die zur Arbeit und Berechnung verwendet werden, vorstellen.

## Zahlen

In JavaScript werden Zahlen im [Doppelpräzisions-64-Bit-Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) implementiert (d.h., eine Zahl zwischen ±2^−1022 und ±2^+1023 oder etwa ±10^−308 bis ±10^+308, mit einer numerischen Genauigkeit von 53 Bits). Ganzzahlen bis zu ±2^53 − 1 können exakt dargestellt werden.

Zusätzlich zur Darstellung von Gleitkommazahlen hat der Zahlentyp drei symbolische Werte: {{jsxref("Infinity")}}, `-Infinity` und {{jsxref("NaN")}} (not-a-number).

Siehe auch [JavaScript-Datentypen und -Strukturen](/de/docs/Web/JavaScript/Data_structures) für den Kontext mit anderen primitiven Typen in JavaScript.

Sie können vier Arten von Zahlenliteralen verwenden: dezimal, binär, oktal und hexadezimal.

### Dezimalzahlen

```js-nolint
1234567890
42
```

Dezimalliterale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalziffer, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als eine veraltete Syntax betrachtet, und Zahlenliterale, die mit `0` beginnen, ob nun als oktal oder dezimal interpretiert, verursachen in [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler — daher verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

### Binärzahlen

Die Binärzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Wenn die Ziffern nach `0b` nicht 0 oder 1 sind, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Fehlende Binärziffern nach 0b".

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### Oktalzahlen

Die Standardsyntax für Oktalzahlen besteht darin, ihnen das Präfix `0o` voranzustellen. Zum Beispiel:

```js-nolint
0O755 // 493
0o644 // 420
```

Es gibt auch eine veraltete Syntax für Oktalzahlen — durch Voranstellen der Oktalzahl mit einer Null: `0644 === 420` und `"\045" === "%"`. Wenn die Ziffern nach der `0` außerhalb des Bereichs von 0 bis 7 liegen, wird die Zahl als Dezimalzahl interpretiert.

```js
const n = 0755; // 493
const m = 0644; // 420
```

[Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verbietet diese Oktalsyntax.

### Hexadezimalzahlen

Die Hexadezimalzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Wenn die Ziffern nach 0x außerhalb des Bereichs (0123456789ABCDEF) liegen, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Identifier beginnt unmittelbar nach numerischem Literal".

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

### Exponentiation

```js-nolint
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
```

## Number-Objekt

Das eingebaute {{jsxref("Number")}}-Objekt hat Eigenschaften für numerische Konstanten, wie maximaler Wert, not-a-number und Unendlichkeit. Sie können die Werte dieser Eigenschaften nicht ändern und verwenden sie wie folgt:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

Sie beziehen sich immer auf eine Eigenschaft des vordefinierten `Number`-Objekts wie oben gezeigt und nicht als eine Eigenschaft eines `Number`-Objekts, das Sie selbst erstellen.

Die folgende Tabelle fasst die Eigenschaften des `Number`-Objekts zusammen.

| Eigenschaft                            | Beschreibung                                                                                                                                   |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | Die größte positiv darstellbare Zahl (`1.7976931348623157e+308`)                                                                               |
| {{jsxref("Number.MIN_VALUE")}}         | Die kleinste positiv darstellbare Zahl (`5e-324`)                                                                                              |
| {{jsxref("Number.NaN")}}               | Spezieller "not a number"-Wert                                                                                                                 |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Spezieller negativer Unendlichkeitswert; bei Überlauf zurückgegeben                                                                            |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Spezieller positiver Unendlichkeitswert; bei Überlauf zurückgegeben                                                                            |
| {{jsxref("Number.EPSILON")}}           | Unterschied zwischen `1` und dem kleinsten Wert größer als `1`, der als {{jsxref("Number")}} dargestellt werden kann (`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Minimale sichere Ganzzahl in JavaScript (−2^53 + 1, oder `−9007199254740991`)                                                                  |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Maximale sichere Ganzzahl in JavaScript (+2^53 − 1, oder `+9007199254740991`)                                                                  |

| Methode                              | Beschreibung                                                                                                                                        |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Parsiert ein Zeichenkettenargument und gibt eine Gleitkommazahl zurück. Gleicht der globalen {{jsxref("parseFloat()")}}-Funktion.                   |
| {{jsxref("Number.parseInt()")}}      | Parsiert ein Zeichenkettenargument und gibt eine Ganzzahl mit der angegebenen Basis zurück. Gleicht der globalen {{jsxref("parseInt()")}}-Funktion. |
| {{jsxref("Number.isFinite()")}}      | Bestimmt, ob der übergebene Wert eine endliche Zahl ist.                                                                                            |
| {{jsxref("Number.isInteger()")}}     | Bestimmt, ob der übergebene Wert eine Ganzzahl ist.                                                                                                 |
| {{jsxref("Number.isNaN()")}}         | Bestimmt, ob der übergebene Wert {{jsxref("NaN")}} ist. Robusterer Version der ursprünglichen globalen {{jsxref("isNaN()")}}.                       |
| {{jsxref("Number.isSafeInteger()")}} | Bestimmt, ob der bereitgestellte Wert eine _sichere Ganzzahl_ ist.                                                                                  |

Das `Number`-Prototyp bietet Methoden zum Abrufen von Informationen aus `Number`-Objekten in verschiedenen Formaten. Die folgende Tabelle fasst die Methoden von `Number.prototype` zusammen.

| Methode                                               | Beschreibung                                                                                                 |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| {{jsxref("Number/toExponential", "toExponential()")}} | Gibt eine Zeichenfolge zurück, die die Zahl in Exponentialnotation darstellt.                                |
| {{jsxref("Number/toFixed", "toFixed()")}}             | Gibt eine Zeichenfolge zurück, die die Zahl in Festpunktnotation darstellt.                                  |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | Gibt eine Zeichenfolge zurück, die die Zahl mit einer bestimmten Genauigkeit in Festpunktnotation darstellt. |

## Math-Objekt

Das eingebaute {{jsxref("Math")}}-Objekt verfügt über Eigenschaften und Methoden für mathematische Konstanten und Funktionen. Zum Beispiel hat die `PI`-Eigenschaft des `Math`-Objekts den Wert von Pi (3.141…), den Sie in einer Anwendung wie folgt verwenden würden:

```js
Math.PI;
```

Ähnlich sind Standardmathematische Funktionen Methoden von `Math`. Diese umfassen trigonometrische, logarithmische, exponentielle und andere Funktionen. Wenn Sie beispielsweise die trigonometrische Funktion Sinus verwenden möchten, würden Sie schreiben:

```js
Math.sin(1.56);
```

Beachten Sie, dass alle trigonometrischen Methoden von `Math` Argumente in Bogenmaß nehmen.

Die folgende Tabelle fasst die Methoden des `Math`-Objekts zusammen.

<table class="standard-table">
  <caption>
    Methoden von
    <code>Math</code>
  </caption>
  <thead>
    <tr>
      <th scope="col">Methode</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Math.abs", "abs()")}}</td>
      <td>Betrag</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sin", "sin()")}},
        {{jsxref("Math.cos", "cos()")}},
        {{jsxref("Math.tan", "tan()")}}
      </td>
      <td>Standard trigonometrische Funktionen; mit dem Argument im Bogenmaß.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asin", "asin()")}},
        {{jsxref("Math.acos", "acos()")}},
        {{jsxref("Math.atan", "atan()")}},
        {{jsxref("Math.atan2", "atan2()")}}
      </td>
      <td>Inverse trigonometrische Funktionen; Rückgabewerte im Bogenmaß.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sinh", "sinh()")}},
        {{jsxref("Math.cosh", "cosh()")}},
        {{jsxref("Math.tanh", "tanh()")}}
      </td>
      <td>Hyperbolische Funktionen; Argument im hyperbolischen Winkel.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asinh", "asinh()")}},
        {{jsxref("Math.acosh", "acosh()")}},
        {{jsxref("Math.atanh", "atanh()")}}
      </td>
      <td>Inverse hyperbolische Funktionen; Rückgabewerte im hyperbolischen Winkel.</td>
    </tr>
    <tr>
      <td>
        <p>
          {{jsxref("Math.pow", "pow()")}},
          {{jsxref("Math.exp", "exp()")}},
          {{jsxref("Math.expm1", "expm1()")}},
          {{jsxref("Math.log", "log()")}},
          {{jsxref("Math.log10", "log10()")}},
          {{jsxref("Math.log1p", "log1p()")}},
          {{jsxref("Math.log2", "log2()")}}
        </p>
      </td>
      <td>Exponentielle und logarithmische Funktionen.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.floor", "floor()")}},
        {{jsxref("Math.ceil", "ceil()")}}
      </td>
      <td>
        Gibt die größte/kleinste Ganzzahl zurück, die kleiner/größer oder gleich
        einem Argument ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>
        Gibt den minimalen oder maximalen (jeweils) Wert einer durch Kommata
        getrennten Liste von Zahlen als Argument zurück.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.random", "random()")}}</td>
      <td>Gibt eine zufällige Zahl zwischen 0 und 1 zurück.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.round", "round()")}},
        {{jsxref("Math.fround", "fround()")}},
        {{jsxref("Math.trunc", "trunc()")}},
      </td>
      <td>Rundungs- und Trunkierungsfunktionen.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sqrt", "sqrt()")}},
        {{jsxref("Math.cbrt", "cbrt()")}},
        {{jsxref("Math.hypot", "hypot()")}}
      </td>
      <td>
        Quadratwurzel, Kubikwurzel, Quadratwurzel der Summe der quadratischen Argumente.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.sign", "sign()")}}</td>
      <td>
        Das Vorzeichen einer Zahl, das angibt, ob die Zahl positiv, negativ oder
        null ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.clz32", "clz32()")}},<br />{{jsxref("Math.imul", "imul()")}}
      </td>
      <td>
        Anzahl der führenden Nullbits in der 32-Bit-Binärdarstellung.<br />Das
        Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Argumente.
      </td>
    </tr>
  </tbody>
</table>

Im Gegensatz zu vielen anderen Objekten erstellen Sie nie ein eigenes `Math`-Objekt. Sie verwenden immer das eingebaute `Math`-Objekt.

## BigInts

Ein Nachteil von Zahlenwerten ist, dass sie nur 64 Bits haben. In der Praxis können sie aufgrund der Verwendung der IEEE 754-Codierung keine ganze Zahl, die größer ist als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (was 2<sup>53</sup> - 1 ist), genau darstellen. Um das Bedürfnis nach der Codierung von Binärdaten zu erfüllen und mit anderen Sprachen zu interagieren, die breite Ganzzahlen wie `i64` (64-Bit-Ganzzahlen) und `i128` (128-Bit-Ganzzahlen) bieten, bietet JavaScript auch einen anderen Datentyp zur Darstellung _beliebig großer Ganzzahlen_: [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

Ein BigInt kann als Ganzzahlliteral mit einem nachgestellten `n` definiert werden:

```js
const b1 = 123n;
// Can be arbitrarily large.
const b2 = -1234567890987654321n;
```

BigInts können auch aus Zahlenwerten oder Zeichenkettenwerten unter Verwendung des [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktors erstellt werden.

```js
const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");
```

Konzeptionell ist ein BigInt nur eine beliebig lange Sequenz von Bits, die eine Ganzzahl codiert. Sie können beliebige arithmetische Operationen sicher ohne Präzisionsverlust oder Über-/Unterlauf durchführen.

```js
const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

Im Vergleich zu Zahlen liefern BigInt-Werte eine höhere Präzision, wenn es um die Darstellung großer _Ganzzahlen_ geht; sie können jedoch keine _Gleitkommazahlen_ darstellen. Zum Beispiel würde eine Division auf null runden:

```js
const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt
```

`Math`-Funktionen können nicht auf BigInt-Werte angewendet werden. Es gibt [einen offenen Vorschlag](https://github.com/tc39/proposal-bigint-math), um bestimmte `Math`-Funktionen wie `Math.max()` zu überladen, um BigInt-Werte zuzulassen.

Die Wahl zwischen BigInt und Zahl hängt von Ihrem Anwendungsfall und dem Bereich Ihrer Eingaben ab. Die Präzision der Zahlen sollte in der Lage sein, die meisten alltäglichen Aufgaben bereits zu bewältigen, und BigInts eignen sich am besten zur Handhabung binärer Daten.

Lesen Sie mehr darüber, was Sie mit BigInt-Werten tun können, in dem Abschnitt [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators) oder im [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Zeichenketten

Der {{Glossary("String", "String")}}-Typ von JavaScript wird verwendet, um Textdaten darzustellen. Er ist eine Menge von "Elementen" von 16-Bit-unsigned-Integer-Werten (UTF-16 Code-Einheiten). Jedes Element in der String hat eine Position in der String. Das erste Element befindet sich an Index 0, das nächste an Index 1 und so weiter. Die Länge einer String ist die Anzahl der Elemente in ihr. Sie können Strings unter Verwendung von String-Literalen oder String-Objekten erstellen.

### String-Literale

Sie können Strings im Quellcode entweder mit einfachen oder doppelten Anführungszeichen deklarieren:

```js-nolint
'foo'
"bar"
```

Innerhalb eines String-Literals können die meisten Zeichen im wahrsten Sinne eingegeben werden. Die einzigen Ausnahmen sind der Backslash (`\`, der eine Escape-Sequenz beginnt), das Anführungszeichen, das zur Umschließung der String verwendet wird und die String beendet, und das Newline-Zeichen, das einen Syntaxfehler verursacht, wenn es nicht von einem Backslash gefolgt wird.

Fortschrittlichere Strings können mit Escape-Sequenzen erstellt werden:

#### Hexadezimale Escape-Sequenzen

Die Zahl nach \x wird als [hexadezimale](https://en.wikipedia.org/wiki/Hexadecimal) Zahl interpretiert.

```js-nolint
"\xA9" // "©"
```

#### Unicode-Escape-Sequenzen

Die Unicode-Escape-Sequenzen erfordern mindestens vier hexadezimale Ziffern nach `\u`.

```js-nolint
"\u00A9" // "©"
```

#### Unicode-Codepoint-Escapes

Mit Unicode-Codepoint-Escapes kann jedes Zeichen unter Verwendung hexadezimaler Zahlenmaskierung so entkommen werden, dass die Verwendung von Unicode-Codepoints bis zu `0x10FFFF` möglich ist. Mit den vierstelligen Unicode-Escapes ist es oft notwendig, die Surrogat-Hälften separat zu schreiben, um dasselbe Ergebnis zu erzielen.

Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

```js-nolint
"\u{2F804}"

// the same with simple Unicode escapes
"\uD87E\uDC04"
```

## String-Objekt

Sie können Methoden direkt auf einem String-Wert aufrufen:

```js
console.log("hello".toUpperCase()); // HELLO
```

Die folgenden Methoden sind auf {{jsxref("String")}}-Werten verfügbar:

- Abfrage: Das Abrufen des Buchstabens oder Buchstabencodes an einem bestimmten String-Index. Methoden umfassen {{jsxref("String/at", "at()")}}, {{jsxref("String/charAt", "charAt()")}}, {{jsxref("String/charCodeAt", "charCodeAt()")}}, und {{jsxref("String/codePointAt", "codePointAt()")}}.
- Suche: Holen Sie Informationen über ein Teilstring, das einem Muster entspricht, oder testen Sie, ob ein bestimmtes Teilstring existiert. Methoden umfassen {{jsxref("String/indexOf", "indexOf()")}}, {{jsxref("String/lastIndexOf", "lastIndexOf()")}}, {{jsxref("String/startsWith", "startsWith()")}}, {{jsxref("String/endsWith", "endsWith()")}}, {{jsxref("String/includes", "includes()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, und {{jsxref("String/search", "search()")}}.
- Komposition: Kombinieren Sie Strings zu einem längeren String. Methoden umfassen {{jsxref("String/padStart", "padStart()")}}, {{jsxref("String/padEnd", "padEnd()")}}, {{jsxref("String/concat", "concat()")}}, und {{jsxref("String/repeat", "repeat()")}}.
- Dekomposition: Teilen Sie eine String in kleinere Strings auf. Methoden umfassen {{jsxref("String/split", "split()")}}, {{jsxref("String/slice", "slice()")}}, {{jsxref("String/substring", "substring()")}}, {{jsxref("String/substr", "substr()")}}, {{jsxref("String/trim", "trim()")}}, {{jsxref("String/trimStart", "trimStart()")}}, und {{jsxref("String/trimEnd", "trimEnd()")}}.
- Transformation: Gibt eine neue String zurück, basierend auf dem Inhalt des aktuellen Strings. Methoden umfassen {{jsxref("String/toLowerCase", "toLowerCase()")}}, {{jsxref("String/toUpperCase", "toUpperCase()")}}, {{jsxref("String/toLocaleLowerCase", "toLocaleLowerCase()")}}, {{jsxref("String/toLocaleUpperCase", "toLocaleUpperCase()")}}, {{jsxref("String/normalize", "normalize()")}}, und {{jsxref("String/toWellFormed", "toWellFormed()")}}.

Beim Arbeiten mit Strings gibt es zwei weitere Objekte, die wichtige Funktionalitäten zur String-Manipulation bereitstellen: {{jsxref("RegExp")}} und {{jsxref("Intl")}}. Sie werden in [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) und [Internationalisierung](/de/docs/Web/JavaScript/Guide/Internationalization) eingeführt.

## Template-Literale

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind String-Literale, die eingebettete Ausdrücke zulassen. Sie können mehrzeilige Strings und String-Interpolation mit ihnen nutzen.

Template-Literale werden von Gravis-Zeichen ([Gravis-Akzent](https://en.wikipedia.org/wiki/Grave_accent)) (`` ` ``) umschlossen, anstatt von doppelten oder einfachen Anführungszeichen. Template-Literale können Platzhalter enthalten. Diese werden durch das Dollarzeichen und geschweifte Klammern (`${expression}`) angezeigt.

### Mehrzeilige

Jede in der Quelle eingefügte neue Zeilenzeichen sind Teil des Template-Literals. Mit normalen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

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

### Eingebettete Ausdrücke

Um Ausdrücke innerhalb normaler Strings einzubetten, würden Sie die folgende Syntax verwenden:

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

Jetzt können Sie mit Template-Literalen syntaktischen Zucker wie diesen verwenden, um Substitutionen lesbarer zu machen:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

Für mehr Informationen, lesen Sie über [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}
