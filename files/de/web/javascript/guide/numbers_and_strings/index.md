---
title: Zahlen und Zeichenfolgen
slug: Web/JavaScript/Guide/Numbers_and_strings
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

Dieses Kapitel führt die beiden grundlegendsten Datentypen in JavaScript ein: Zahlen und Zeichenfolgen. Wir werden deren zugrundeliegende Repräsentationen sowie Funktionen vorstellen, die zur Bearbeitung und Berechnung mit ihnen verwendet werden.

## Zahlen

In JavaScript werden Zahlen im [Doppelpräzisions-64-Bit-Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) implementiert (d.h. eine Zahl zwischen ±2^−1022 und ±2^+1023, bzw. etwa ±10^−308 bis ±10^+308, mit einer numerischen Präzision von 53 Bits). Ganzzahlen bis zu ±2^53 − 1 können exakt dargestellt werden.

Zusätzlich zur Fähigkeit, Gleitkommazahlen darzustellen, hat der Zahlentyp drei symbolische Werte: {{jsxref("Infinity")}}, `-Infinity` und {{jsxref("NaN")}} (not-a-number).

Siehe auch [JavaScript-Datentypen und -strukturen](/de/docs/Web/JavaScript/Guide/Data_structures) für den Kontext mit anderen primitiven Typen in JavaScript.

Sie können vier Arten von Zahl-Literalen verwenden: dezimal, binär, oktal und hexadezimal.

### Dezimalzahlen

```js-nolint
1234567890
42
```

Dezimalliterale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalziffer. Wenn jedoch alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als eine veraltete Syntax betrachtet, und Zahl-Literale mit einem Vorzeichen `0`, egal ob sie als Oktal oder Dezimal interpretiert werden, führen in [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) zu einem Syntaxfehler – verwenden Sie daher stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

### Binärzahlen

Die binäre Zahl-Syntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben „B“ (`0b` oder `0B`). Wenn die Ziffern nach dem `0b` nicht 0 oder 1 sind, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Missing binary digits after 0b" (Fehlende Binärziffern nach 0b).

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### Oktalzahlen

Die Standard-Syntax für Oktalzahlen besteht darin, ihnen ein `0o` voranzustellen. Zum Beispiel:

```js-nolint
0O755 // 493
0o644 // 420
```

Es gibt auch eine veraltete Syntax für Oktalzahlen – indem der Oktalzahl eine Null vorangestellt wird: `0644 === 420` und `"\045" === "%"`. Wenn die Ziffern nach der `0` außerhalb des Bereichs 0 bis 7 liegen, wird die Zahl als Dezimalzahl interpretiert.

```js
const n = 0755; // 493
const m = 0644; // 420
```

[Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verbietet diese Oktal-Syntax.

### Hexadezimalzahlen

Die hexadezimale Zahlensyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben „X“ (`0x` oder `0X`). Wenn die Ziffern nach 0x außerhalb des Bereichs (0123456789ABCDEF) liegen, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Identifier starts immediately after numeric literal".

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

### Potenzierung

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

Das eingebaute {{jsxref("Number")}}-Objekt verfügt über Eigenschaften für numerische Konstanten, wie z.B. den maximalen Wert, nicht-einer-Zahl und Unendlichkeit. Sie können die Werte dieser Eigenschaften nicht ändern und verwenden sie wie folgt:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

Sie verweisen immer auf eine Eigenschaft des vordefinierten `Number`-Objekts wie oben gezeigt und nicht als Eigenschaft eines selbst erstellten `Number`-Objekts.

Die folgende Tabelle fasst die Eigenschaften des `Number`-Objekts zusammen.

| Eigenschaft                            | Beschreibung                                                                                                                                   |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | Der größte positiv darstellbare Wert (`1.7976931348623157e+308`)                                                                               |
| {{jsxref("Number.MIN_VALUE")}}         | Der kleinste positiv darstellbare Wert (`5e-324`)                                                                                              |
| {{jsxref("Number.NaN")}}               | Spezieller Wert "nicht-eine-Zahl"                                                                                                              |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Spezieller negativer unendlicher Wert, bei Überlauf zurückgegeben                                                                              |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Spezieller positiver unendlicher Wert, bei Überlauf zurückgegeben                                                                              |
| {{jsxref("Number.EPSILON")}}           | Unterschied zwischen `1` und dem kleinsten Wert größer als `1`, der als {{jsxref("Number")}} dargestellt werden kann (`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Minimal sicherer Ganzzahlwert in JavaScript (−2^53 + 1, bzw. `−9007199254740991`)                                                              |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Maximal sicherer Ganzzahlwert in JavaScript (+2^53 − 1, bzw. `+9007199254740991`)                                                              |

| Methode                              | Beschreibung                                                                                                                                          |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Analysiert ein Zeichenfolgenargument und gibt eine Gleitkommazahl zurück. Dasselbe wie die globale Funktion {{jsxref("parseFloat()")}}.               |
| {{jsxref("Number.parseInt()")}}      | Analysiert ein Zeichenfolgenargument und gibt eine Ganzzahl der angegebenen Basis zurück. Dasselbe wie die globale Funktion {{jsxref("parseInt()")}}. |
| {{jsxref("Number.isFinite()")}}      | Bestimmt, ob der übergebene Wert eine endliche Zahl ist.                                                                                              |
| {{jsxref("Number.isInteger()")}}     | Bestimmt, ob der übergebene Wert eine Ganzzahl ist.                                                                                                   |
| {{jsxref("Number.isNaN()")}}         | Bestimmt, ob der übergebene Wert {{jsxref("NaN")}} ist. Robustere Version der ursprünglichen globalen Funktion {{jsxref("isNaN()")}}.                 |
| {{jsxref("Number.isSafeInteger()")}} | Bestimmt, ob der übergebene Wert eine _sichere Ganzzahl_ ist.                                                                                         |

Das `Number`-Prototype bietet Methoden zum Abrufen von Informationen aus `Number`-Objekten in verschiedenen Formaten. Die folgende Tabelle fasst die Methoden von `Number.prototype` zusammen.

| Methode                                               | Beschreibung                                                                                                   |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number/toExponential", "toExponential()")}} | Gibt eine Zeichenfolge zurück, die die Zahl in exponentieller Notation darstellt.                              |
| {{jsxref("Number/toFixed", "toFixed()")}}             | Gibt eine Zeichenfolge zurück, die die Zahl in Festkommadarstellung darstellt.                                 |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | Gibt eine Zeichenfolge zurück, die die Zahl mit einer angegebenen Präzision in Festkommadarstellung darstellt. |

## Math-Objekt

Das eingebaute {{jsxref("Math")}}-Objekt verfügt über Eigenschaften und Methoden für mathematische Konstanten und Funktionen. Zum Beispiel hat die `PI`-Eigenschaft des `Math`-Objekts den Wert von Pi (3.141...), den Sie in einer Anwendung wie folgt verwenden würden:

```js
Math.PI;
```

Ebenso sind Standardmathematische Funktionen Methoden von `Math`. Dazu gehören trigonometrische, logarithmische, exponentielle und andere Funktionen. Zum Beispiel, wenn Sie die trigonometrische Funktion Sinus verwenden möchten, würden Sie schreiben:

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
      <td>Absoluter Wert</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sin", "sin()")}},
        {{jsxref("Math.cos", "cos()")}},
        {{jsxref("Math.tan", "tan()")}}
      </td>
      <td>Standard-Trigonometrische Funktionen; mit dem Argument in Bogenmaß.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asin", "asin()")}},
        {{jsxref("Math.acos", "acos()")}},
        {{jsxref("Math.atan", "atan()")}},
        {{jsxref("Math.atan2", "atan2()")}}
      </td>
      <td>Inverse trigonometrische Funktionen; Rückgabewerte in Bogenmaß.</td>
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
      <td>Exponential- und Logarithmusfunktionen.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.floor", "floor()")}},
        {{jsxref("Math.ceil", "ceil()")}}
      </td>
      <td>
        Gibt die größte/kleinste Ganzzahl zurück, die kleiner/größer gleich einem Argument ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>
        Gibt den minimalen oder maximalen (jeweils) Wert einer durch Kommata getrennten Liste von Argumentzahlen zurück.
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
      <td>Rundungs- und Abrundungsfunktionen.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sqrt", "sqrt()")}},
        {{jsxref("Math.cbrt", "cbrt()")}},
        {{jsxref("Math.hypot", "hypot()")}}
      </td>
      <td>
        Quadratwurzel, Kubikwurzel, Quadratwurzel der Summe der Quadratargumente.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.sign", "sign()")}}</td>
      <td>
        Das Vorzeichen einer Zahl, das angibt, ob die Zahl positiv, negativ oder null ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.clz32", "clz32()")}},<br />{{jsxref("Math.imul", "imul()")}}
      </td>
      <td>
        Anzahl der führenden Null-Bits in der 32-Bit-Binärdarstellung.<br />Das
        Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Argumente.
      </td>
    </tr>
  </tbody>
</table>

Anders als bei vielen anderen Objekten erstellen Sie nie ein eigenes `Math`-Objekt. Sie verwenden immer das eingebaute `Math`-Objekt.

## BigInts

Ein Nachteil von Zahlenwerten besteht darin, dass sie nur 64 Bits haben. In der Praxis, durch die Verwendung der IEEE 754-Codierung, können sie keine ganze Zahl darstellen, die größer ist als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (welche 2<sup>53</sup> - 1 ist), ohne Genauigkeit zu verlieren. Um das Bedürfnis nach der Codierung von Binärdaten zu lösen und um mit anderen Sprachen, die breite Ganzzahlen wie `i64` (64-Bit-Ganzzahlen) und `i128` (128-Bit-Ganzzahlen) bieten, interoperabel zu sein, bietet JavaScript auch einen weiteren Datentyp zur Darstellung von _beliebig großen Ganzzahlen_: [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

Ein BigInt kann als Ganzzahlliteral definiert werden, das mit „n“ endet:

```js
const b1 = 123n;
// Can be arbitrarily large.
const b2 = -1234567890987654321n;
```

BigInts können auch aus Zahlenwerten oder Zeichenfolgewerten unter Verwendung des [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktors erstellt werden.

```js
const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");
```

Konzeptionell ist ein BigInt nur eine beliebig lange Bitfolge, die eine Ganzzahl codiert. Sie können sicher alle arithmetischen Operationen ohne Verlust von Präzision oder Über-/Unterlauf ausführen.

```js
const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

Verglichen mit Zahlen bieten BigInt-Werte eine höhere Präzision bei der Darstellung großer _Ganzzahlen_; sie können jedoch keine _Gleitkommazahlen_ darstellen. Beispielsweise würde die Division auf Null abrunden:

```js
const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt
```

`Math`-Funktionen können nicht auf BigInt-Werte angewendet werden; sie funktionieren nur mit Zahlen.

Die Wahl zwischen BigInt und Zahl hängt von Ihrem Anwendungsfall und dem Bereich Ihrer Eingaben ab. Die Präzision von Zahlen sollte in der Lage sein, die meisten alltäglichen Aufgaben zu bewältigen, und BigInts eignen sich am besten für die Handhabung von Binärdaten.

Lesen Sie mehr darüber, was Sie mit BigInt-Werten tun können, im Abschnitt [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators) oder im [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Zeichenfolgen

Der JavaScript-{{Glossary("String", "String")}}-Typ wird verwendet, um Textdaten darzustellen. Es handelt sich um eine Menge von „Elementen“ mit 16-Bit vorzeichenlosen Ganzzahlen (UTF-16-Code-Einheiten). Jedes Element in der Zeichenfolge nimmt eine Position in der Zeichenfolge ein. Das erste Element befindet sich an Index 0, das nächste an Index 1 usw. Die Länge einer Zeichenfolge ist die Anzahl der Elemente in ihr. Sie können Zeichenfolgen mit Zeichenfolgenliteralen oder Zeichenfolgenobjekten erstellen.

### Zeichenfolgenliterale

Sie können Zeichenfolgen im Quellcode mit einfachen oder doppelten Anführungszeichen deklarieren:

```js-nolint
'foo'
"bar"
```

Innerhalb eines Zeichenfolgenliterals können die meisten Zeichen buchstäblich eingegeben werden. Die einzigen Ausnahmen sind der Backslash (`\`, der eine Escape-Sequenz beginnt), das Anführungszeichen, das verwendet wird, um die Zeichenfolge zu schließen, was die Zeichenfolge beendet, und das neue Zeilenzeichen, das, wenn nicht von einem Backslash gefolgt, einen Syntaxfehler verursacht.

Komplexere Zeichenfolgen können mit Escape-Sequenzen erstellt werden:

#### Hexadezimale Escape-Sequenzen

Die Zahl nach \x wird als [Hexadezimal](https://en.wikipedia.org/wiki/Hexadecimal)-Zahl interpretiert.

```js-nolint
"\xA9" // "©"
```

#### Unicode-Escape-Sequenzen

Die Unicode-Escape-Sequenzen erfordern mindestens vier hexadezimale Ziffern nach `\u`.

```js-nolint
"\u00A9" // "©"
```

#### Unicode-Codepunkt-Escapes

Mit Unicode-Codepunkt-Escapes kann jedes Zeichen unter Verwendung hexadezimaler Zahlen maskiert werden, sodass es möglich ist, Unicode-Codepunkte bis zu `0x10FFFF` zu verwenden. Mit den vierstelligen Unicode-Escapes ist es oft notwendig, die Surrogat-Hälften separat zu schreiben, um dasselbe Ergebnis zu erzielen.

Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

```js-nolint
"\u{2F804}"

// the same with simple Unicode escapes
"\uD87E\uDC04"
```

## String-Objekt

Sie können Methoden direkt auf einen Zeichenfolgenwert aufrufen:

```js
console.log("hello".toUpperCase()); // HELLO
```

Die folgenden Methoden sind für {{jsxref("String")}}-Werte verfügbar:

- Abfrage: Zeichen oder Zeichencode an einem bestimmten Zeichenfolgenindex abrufen. Methoden umfassen {{jsxref("String/at", "at()")}}, {{jsxref("String/charAt", "charAt()")}}, {{jsxref("String/charCodeAt", "charCodeAt()")}}, und {{jsxref("String/codePointAt", "codePointAt()")}}.
- Suche: Informationen über einen Teilstring erhalten, der einem Muster entspricht, oder testen, ob ein bestimmter Teilstring existiert. Methoden umfassen {{jsxref("String/indexOf", "indexOf()")}}, {{jsxref("String/lastIndexOf", "lastIndexOf()")}}, {{jsxref("String/startsWith", "startsWith()")}}, {{jsxref("String/endsWith", "endsWith()")}}, {{jsxref("String/includes", "includes()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, und {{jsxref("String/search", "search()")}}
- Zusammensetzung: Zeichenfolgen zu einer längeren Zeichenfolge kombinieren. Methoden umfassen {{jsxref("String/padStart", "padStart()")}}, {{jsxref("String/padEnd", "padEnd()")}}, {{jsxref("String/concat", "concat()")}}, und {{jsxref("String/repeat", "repeat()")}}.
- Dekonstruktion: Eine Zeichenfolge in kleinere Zeichenfolgen aufteilen. Methoden umfassen {{jsxref("String/split", "split()")}}, {{jsxref("String/slice", "slice()")}}, {{jsxref("String/substring", "substring()")}}, {{jsxref("String/substr", "substr()")}}, {{jsxref("String/trim", "trim()")}}, {{jsxref("String/trimStart", "trimStart()")}}, und {{jsxref("String/trimEnd", "trimEnd()")}}.
- Transformation: Gibt eine neue Zeichenfolge basierend auf dem aktuellen Inhalt der Zeichenfolge zurück. Methoden umfassen {{jsxref("String/toLowerCase", "toLowerCase()")}}, {{jsxref("String/toUpperCase", "toUpperCase()")}}, {{jsxref("String/toLocaleLowerCase", "toLocaleLowerCase()")}}, {{jsxref("String/toLocaleUpperCase", "toLocaleUpperCase()")}}, {{jsxref("String/normalize", "normalize()")}}, und {{jsxref("String/toWellFormed", "toWellFormed()")}}.

Beim Arbeiten mit Zeichenfolgen gibt es zwei andere Objekte, die wichtige Funktionalität für die Manipulation von Zeichenfolgen bereitstellen: {{jsxref("RegExp")}} und {{jsxref("Intl")}}. Sie werden jeweils in [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) und [Internationalisierung](/de/docs/Web/JavaScript/Guide/Internationalization) eingeführt.

## Template-Literale

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind Zeichenfolgenliterale, die eingebettete Ausdrücke erlauben. Sie können damit mehrzeilige Zeichenfolgen und Zeichenfolgen-Interpolation verwenden.

Template-Literale werden von Akzentzeichen ([Gravis-Akzent](https://en.wikipedia.org/wiki/Grave_accent)) (`` ` ``) umschlossen, anstatt von doppelten oder einfachen Anführungszeichen. Template-Literale können Platzhalter enthalten. Diese werden durch das Dollarzeichen und geschweifte Klammern (`${expression}`) angegeben.

### Mehrzeilige Zeichenfolgen

Alle neuen Zeilenzeichen, die im Quelltext eingefügt werden, sind Bestandteil des Template-Literals. Mithilfe normaler Zeichenfolgen müssten Sie die folgende Syntax verwenden, um mehrzeilige Zeichenfolgen zu erhalten:

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

Jetzt können Sie mit Template-Literalen die syntaktische Vereinfachung nutzen, um solche Ersetzungen lesbarer zu machen:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

Für weitere Informationen lesen Sie über [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}
