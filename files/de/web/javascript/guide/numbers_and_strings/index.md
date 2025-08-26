---
title: Zahlen und Zeichenfolgen
slug: Web/JavaScript/Guide/Numbers_and_strings
l10n:
  sourceCommit: 82617295992be4d9dc4ca74499ee63f8d2e5984b
---

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

In diesem Kapitel werden die beiden grundlegendsten Datentypen in JavaScript vorgestellt: Zahlen und Zeichenfolgen. Wir erläutern ihre zugrunde liegenden Darstellungen und die Funktionen, die verwendet werden, um mit ihnen zu arbeiten und Berechnungen durchzuführen.

## Zahlen

In JavaScript werden Zahlen im [Doppelpräzisions-64-Bit-Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) implementiert (d.h. eine Zahl zwischen ±2^−1022 und ±2^+1023, oder etwa ±10^−308 bis ±10^+308, mit einer numerischen Präzision von 53 Bit). Ganze Zahlen bis zu ±2^53 − 1 können genau dargestellt werden.

Zusätzlich zur Darstellung von Gleitkommazahlen hat der Zahlentyp drei symbolische Werte: {{jsxref("Infinity")}}, `-Infinity` und {{jsxref("NaN")}} (not-a-number).

Siehe auch [JavaScript-Datentypen und -strukturen](/de/docs/Web/JavaScript/Guide/Data_structures) für den Kontext mit anderen primitiven Typen in JavaScript.

Sie können vier Arten von Zahlenliteralen verwenden: dezimal, binär, oktal und hexadezimal.

### Dezimalzahlen

```js-nolint
1234567890
42
```

Dezimale Literale können mit einer Null (`0`) beginnen, gefolgt von einer anderen Dezimalziffer, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax angesehen, und Zahlenliterale, die mit `0` beginnen, ob als Oktal oder Dezimal interpretiert, verursachen in [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler — verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

### Binärzahlen

Die Binärzahlensyntax verwendet eine führende Null, gefolgt von einem Klein- oder Großbuchstaben "B" (`0b` oder `0B`). Wenn die Ziffern nach dem `0b` nicht 0 oder 1 sind, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Fehlende Binärziffern nach 0b".

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### Oktalzahlen

Die Standardsyntax für Oktalzahlen besteht darin, sie mit `0o` zu prefixen. Zum Beispiel:

```js-nolint
0O755 // 493
0o644 // 420
```

Es gibt auch eine veraltete Syntax für Oktalzahlen — indem man die Oktalzahl mit einer Null prefixed: `0644 === 420` und `"\045" === "%"`. Wenn die Ziffern nach dem `0` außerhalb des Bereichs 0 bis 7 liegen, wird die Zahl als Dezimalzahl interpretiert.

```js
const n = 0755; // 493
const m = 0644; // 420
```

[Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verbietet diese Oktalsyntax.

### Hexadezimalzahlen

Hexadezimalzahlensyntax verwendet eine führende Null, gefolgt von einem Klein- oder Großbuchstaben "X" (`0x` oder `0X`). Wenn die Ziffern nach 0x außerhalb des Bereichs (0123456789ABCDEF) liegen, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Kennung beginnt direkt nach dem numerischen Literal".

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
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

### Numerische Trennzeichen

Für alle oben gezeigten Literal-Syntaxen kann ein Unterstrich (`_`) zwischen Ziffern eingefügt werden, um die Lesbarkeit zu verbessern.

```js-nolint
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xA0_B0_C0
1_000_000_000_000_000_000_000n
```

Siehe die Referenz [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) für weitere Details zu Zahlenliteralen.

## Number-Objekt

Das eingebaute {{jsxref("Number")}}-Objekt hat Eigenschaften für numerische Konstanten, wie z.B. maximaler Wert, Not-a-Number und Unendlichkeit. Sie können die Werte dieser Eigenschaften nicht ändern und verwenden sie folgendermaßen:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

Sie beziehen sich immer auf eine Eigenschaft des vordefinierten `Number`-Objekts wie oben gezeigt und nicht auf eine Eigenschaft eines `Number`-Objekts, das Sie selbst erstellen.

Die folgende Tabelle fasst die Eigenschaften des `Number`-Objekts zusammen.

| Eigenschaft                            | Beschreibung                                                                                                                                           |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("Number.MAX_VALUE")}}         | Die größte positive darstellbare Zahl (`1.7976931348623157e+308`)                                                                                      |
| {{jsxref("Number.MIN_VALUE")}}         | Die kleinste positive darstellbare Zahl (`5e-324`)                                                                                                     |
| {{jsxref("Number.NaN")}}               | Spezieller "not a number"-Wert                                                                                                                         |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Spezieller negativer unendlicher Wert; wird bei Überlauf zurückgegeben                                                                                 |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Spezieller positiver unendlicher Wert; wird bei Überlauf zurückgegeben                                                                                 |
| {{jsxref("Number.EPSILON")}}           | Unterschied zwischen `1` und dem kleinsten Wert, der größer als `1` ist und als {{jsxref("Number")}} dargestellt werden kann (`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Minimale sichere Ganze Zahl in JavaScript (−2^53 + 1, oder `−9007199254740991`)                                                                        |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Maximale sichere Ganze Zahl in JavaScript (+2^53 − 1, oder `+9007199254740991`)                                                                        |

| Methode                              | Beschreibung                                                                                                                            |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Parst ein String-Argument und gibt eine Gleitkommazahl zurück. Entspricht der globalen {{jsxref("parseFloat()")}}-Funktion.             |
| {{jsxref("Number.parseInt()")}}      | Parst ein String-Argument und gibt ein Integer der angegebenen Basis zurück. Entspricht der globalen {{jsxref("parseInt()")}}-Funktion. |
| {{jsxref("Number.isFinite()")}}      | Bestimmt, ob der übergebene Wert eine endliche Zahl ist.                                                                                |
| {{jsxref("Number.isInteger()")}}     | Bestimmt, ob der übergebene Wert ein Integer ist.                                                                                       |
| {{jsxref("Number.isNaN()")}}         | Bestimmt, ob der übergebene Wert {{jsxref("NaN")}} ist. Eine robustere Version der ursprünglichen globalen {{jsxref("isNaN()")}}.       |
| {{jsxref("Number.isSafeInteger()")}} | Bestimmt, ob der angegebene Wert eine _sichere ganze Zahl_ ist.                                                                         |

Das `Number`-Prototyp stellt Methoden zum Abrufen von Informationen von `Number`-Objekten in verschiedenen Formaten bereit. Die folgende Tabelle fasst die Methoden von `Number.prototype` zusammen.

| Methode                                               | Beschreibung                                                                                                    |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number/toExponential", "toExponential()")}} | Gibt einen String zurück, der die Zahl in Exponentialschreibweise darstellt.                                    |
| {{jsxref("Number/toFixed", "toFixed()")}}             | Gibt einen String zurück, der die Zahl in Festkommaschreibweise darstellt.                                      |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | Gibt einen String zurück, der die Zahl mit einer spezifizierten Genauigkeit in Festkommaschreibweise darstellt. |

## Math-Objekt

Das eingebaute {{jsxref("Math")}}-Objekt verfügt über Eigenschaften und Methoden für mathematische Konstanten und Funktionen. Zum Beispiel hat die `Math`-Eigenschaft `PI` den Wert von Pi (3.141…), den Sie in einer Anwendung folgendermaßen verwenden würden:

```js
Math.PI;
```

Ebenso sind Standardmathematische Funktionen Methoden von `Math`. Dazu gehören trigonometrische, logarithmische, exponentielle und andere Funktionen. Wenn Sie beispielsweise die trigonometrische Funktion Sinus verwenden möchten, würden Sie schreiben:

```js
Math.sin(1.56);
```

Beachten Sie, dass alle trigonometrischen Methoden von `Math` Argumente in Bogenmaß verwenden.

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
      <td>Absolutwert</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sin", "sin()")}},
        {{jsxref("Math.cos", "cos()")}},
        {{jsxref("Math.tan", "tan()")}}
      </td>
      <td>Standard-trigonometrische Funktionen; mit dem Argument im Bogenmaß.</td>
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
      <td>Hyperbolische Funktionen; Argument im hyperbolischen Winkelmaß.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asinh", "asinh()")}},
        {{jsxref("Math.acosh", "acosh()")}},
        {{jsxref("Math.atanh", "atanh()")}}
      </td>
      <td>Inverse hyperbolische Funktionen; Rückgabewerte im hyperbolischen Winkelmaß.</td>
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
        Gibt den größten/kleinsten Integer zurück, der kleiner/größer oder gleich einen
        Argument ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>
        Gibt den minimalen oder maximalen (jeweils) Wert einer durch Komma getrennten
        Liste von Zahlen als Argumente zurück.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.random", "random()")}}</td>
      <td>Gibt eine Zufallszahl zwischen 0 und 1 zurück.</td>
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
        Das Vorzeichen einer Zahl, um anzuzeigen, ob die Zahl positiv,
        negativ oder null ist.
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

Im Gegensatz zu vielen anderen Objekten erstellen Sie niemals ein eigenes `Math`-Objekt. Sie verwenden immer das eingebaute `Math`-Objekt.

## BigInts

Ein Manko von Zahlenwerten ist, dass sie nur 64 Bit umfassen. In der Praxis können sie aufgrund der Verwendung des IEEE 754-Codings keine ganze Zahl genau darstellen, die größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (was 2<sup>53</sup> - 1 ist) ist. Um das Bedürfnis nach der Codierung von Binärdaten zu lösen und mit anderen Sprachen, die große Ganzzahlen wie `i64` (64-Bit-Ganzzahlen) und `i128` (128-Bit-Ganzzahlen) bieten, zu interagieren, bietet JavaScript einen weiteren Datentyp zur Darstellung von _beliebig großen Ganzzahlen_: [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

Ein BigInt kann als Ganzzahlenliteral definiert werden, das mit `n` postfixiert wird:

```js
const b1 = 123n;
// Can be arbitrarily large.
const b2 = -1234567890987654321n;
```

BigInts können auch aus Zahlenwerten oder Zeichenfolgenwerten konstruiert werden, indem der [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor verwendet wird.

```js
const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");
```

Konzeptionell ist ein BigInt einfach eine beliebig lange Folge von Bits, die eine ganze Zahl kodiert. Sie können sicher alle arithmetischen Operationen durchführen, ohne Präzision zu verlieren oder Über-/Unterläufe zu verursachen.

```js
const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

Im Vergleich zu Zahlen liefern BigInt-Werte eine höhere Präzision bei der Darstellung großer _ganzer Zahlen_; sie können jedoch keine _Gleitkommazahlen_ darstellen. Zum Beispiel würde eine Division auf null gerundet:

```js
const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt
```

`Math`-Funktionen können nicht auf BigInt-Werten verwendet werden; sie funktionieren nur mit Zahlen.

Die Auswahl zwischen BigInt und Number hängt von Ihrem Anwendungsfall und dem Bereich Ihrer Eingabe ab. Die Präzision von Zahlen sollte in der Lage sein, die meisten alltäglichen Aufgaben bereits zu bewältigen, und BigInts sind am besten zum Umgang mit Binärdaten geeignet.

Lesen Sie mehr darüber, was Sie mit BigInt-Werten tun können, im Abschnitt [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators) oder in der [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Zeichenfolgen

Der JavaScript-{{Glossary("String", "String")}}-Typ wird verwendet, um Textdaten darzustellen. Er ist eine Menge von "Elementen" von 16-Bit vorzeichenlosen Integer-Werten (UTF-16-Codeeinheiten). Jedes Element im String nimmt eine Position im String ein. Das erste Element befindet sich an Index 0, das nächste an Index 1, und so weiter. Die Länge eines Strings ist die Anzahl der Elemente darin. Sie können Zeichenfolgen mithilfe von Zeichenfolgenliteralen oder Zeichenfolgenobjekten erstellen.

### Zeichenfolgenliterale

Sie können Zeichenfolgen im Quellcode unter Verwendung von einfachen oder doppelten Anführungszeichen deklarieren:

```js-nolint
'foo'
"bar"
```

Innerhalb eines Zeichenfolgenliterals können die meisten Zeichen wörtlich eingegeben werden. Die einzigen Ausnahmen sind der Rückwärtsschrägstrich (`\`, der eine Escape-Sequenz startet), das Anführungszeichen, das zur Umfassung des Strings verwendet wird und ihn beendet, und das Zeilenumbruchzeichen, das einen Syntaxfehler verursacht, wenn es nicht von einem Rückwärtsschrägstrich gefolgt wird.

Komplexere Zeichenfolgen können mithilfe von Escape-Sequenzen erstellt werden:

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

Mit Unicode-Codepoint-Escapes kann jedes Zeichen unter Verwendung hexadezimaler Zahlen so maskiert werden, dass es möglich ist, Unicode-Codepunkte bis zu `0x10FFFF` zu verwenden. Mit den vierstelligen Unicode-Escapes ist es oft notwendig, die Surrogathälften separat zu schreiben, um das gleiche Ergebnis zu erzielen.

Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

```js-nolint
"\u{2F804}"

// the same with simple Unicode escapes
"\uD87E\uDC04"
```

## String-Objekt

Sie können Methoden direkt auf einem Zeichenfolgenwert aufrufen:

```js
console.log("hello".toUpperCase()); // HELLO
```

Die folgenden Methoden sind auf {{jsxref("String")}}-Werten verfügbar:

- Abfrage: Holen Sie das Zeichen oder den Zeichencode an einem bestimmten String-Index. Methoden umfassen {{jsxref("String/at", "at()")}}, {{jsxref("String/charAt", "charAt()")}}, {{jsxref("String/charCodeAt", "charCodeAt()")}}, und {{jsxref("String/codePointAt", "codePointAt()")}}.
- Suche: Informationen über ein Teilstring erhalten, das einem Muster entspricht, oder testen, ob ein bestimmtes Teilstring vorhanden ist. Methoden umfassen {{jsxref("String/indexOf", "indexOf()")}}, {{jsxref("String/lastIndexOf", "lastIndexOf()")}}, {{jsxref("String/startsWith", "startsWith()")}}, {{jsxref("String/endsWith", "endsWith()")}}, {{jsxref("String/includes", "includes()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, und {{jsxref("String/search", "search()")}}.
- Komposition: Zeichenfolgen zu einer längeren Zeichenfolge kombinieren. Methoden umfassen {{jsxref("String/padStart", "padStart()")}}, {{jsxref("String/padEnd", "padEnd()")}}, {{jsxref("String/concat", "concat()")}}, und {{jsxref("String/repeat", "repeat()")}}.
- Zerlegung: Eine Zeichenfolge in kleinere Zeichenfolgen aufbrechen. Methoden umfassen {{jsxref("String/split", "split()")}}, {{jsxref("String/slice", "slice()")}}, {{jsxref("String/substring", "substring()")}}, {{jsxref("String/substr", "substr()")}}, {{jsxref("String/trim", "trim()")}}, {{jsxref("String/trimStart", "trimStart()")}}, und {{jsxref("String/trimEnd", "trimEnd()")}}.
- Transformation: Eine neue Zeichenfolge basierend auf dem Inhalt der aktuellen Zeichenfolge zurückgeben. Methoden umfassen {{jsxref("String/toLowerCase", "toLowerCase()")}}, {{jsxref("String/toUpperCase", "toUpperCase()")}}, {{jsxref("String/toLocaleLowerCase", "toLocaleLowerCase()")}}, {{jsxref("String/toLocaleUpperCase", "toLocaleUpperCase()")}}, {{jsxref("String/normalize", "normalize()")}}, und {{jsxref("String/toWellFormed", "toWellFormed()")}}.

Beim Arbeiten mit Zeichenfolgen gibt es zwei weitere Objekte, die wichtige Funktionen zur Zeichenfolgenmanipulation bereitstellen: {{jsxref("RegExp")}} und {{jsxref("Intl")}}. Sie werden in [Regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) und [Internationalisierung](/de/docs/Web/JavaScript/Guide/Internationalization) vorgestellt.

## Template-Literale

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind Zeichenfolgenliterale, die eingebettete Ausdrücke ermöglichen. Sie können sie für mehrzeilige Zeichenfolgen und Stringinterpolation verwenden.

Template-Literale werden durch Backticks ([Gravis](https://en.wikipedia.org/wiki/Grave_accent)) anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen. Template-Literale können Platzhalter enthalten, die durch das Dollarzeichen und geschweifte Klammern (`${expression}`) angezeigt werden.

### Mehrzeilige Zeichenfolgen

Alle in den Quellcode eingefügten Zeilenumbrüche sind Teil des Template-Literals. Bei normalen Zeichenfolgen müssten Sie die folgende Syntax verwenden, um mehrzeilige Zeichenfolgen zu erhalten:

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

Um denselben Effekt mit mehrzeiligen Zeichenfolgen zu erzielen, können Sie jetzt schreiben:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### Eingebettete Ausdrücke

Um Ausdrücke innerhalb normaler Zeichenfolgen einzubetten, würden Sie die folgende Syntax verwenden:

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

Mit Template-Literalen können Sie nun das syntaktische Zucker nutzen, um solche Ersetzungen lesbarer zu machen:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

Weitere Informationen finden Sie unter [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}
