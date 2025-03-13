---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Objects")}}

Die **`parseInt()`**-Funktion analysiert ein Zeichenfolgenargument und gibt eine ganze Zahl im angegebenen [Radix](https://en.wikipedia.org/wiki/Radix) (der Basis in mathematischen Zahlensystemen) zurück.

{{InteractiveExample("JavaScript Demo: parseInt()")}}

```js interactive-example
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)
console.log(parseInt("ff", 16));
// 255 (lower-case hexadecimal)
console.log(parseInt("0xFF", 16));
// 255 (upper-case hexadecimal with "0x" prefix)
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)
```

## Syntax

```js-nolint
parseInt(string)
parseInt(string, radix)
```

### Parameter

- `string`
  - : Eine Zeichenkette, die mit einer ganzen Zahl beginnt. Führende {{Glossary("whitespace", "Leerzeichen")}} in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}

  - : Eine ganze Zahl zwischen `2` und `36`, die den _Radix_ (die Basis in mathematischen Zahlensystemen) der `string` darstellt. Es wird in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt; wenn es ungleich Null ist und außerhalb des Bereichs von \[2, 36] nach der Umwandlung liegt, wird die Funktion immer `NaN` zurückgeben. Wenn `0` oder nicht angegeben, wird der Radix basierend auf dem Wert von `string` abgeleitet. Vorsicht — dies wird _nicht_ immer standardmäßig auf `10` gesetzt! Die [unten stehende Beschreibung](#beschreibung) erklärt detaillierter, was passiert, wenn `radix` nicht angegeben ist.

### Rückgabewert

Eine aus der gegebenen `string` geparste Ganzzahl oder {{jsxref("NaN")}}, wenn

- der `radix` als 32-Bit-Ganzzahl kleiner als `2` oder größer als `36` ist, oder
- das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet nicht zwischen "Gleitkommazahlen" und "Ganzzahlen" auf Sprachebene. `parseInt()` und [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) unterscheiden sich nur in ihrem Analyseverhalten, nicht unbedingt in ihren Rückgabewerten. Zum Beispiel würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die Funktion `parseInt` [konvertiert ihr erstes Argument in eine Zeichenfolge](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), analysiert diese Zeichenfolge und gibt dann eine Ganzzahl oder `NaN` zurück.

Falls nicht `NaN`, ist der Rückgabewert die Ganzzahl, die das erste Argument als Zahl im angegebenen `radix` darstellt. (Zum Beispiel konvertiert ein `radix` von `10` aus einer Dezimalzahl, `8` aus Oktal, `16` aus Hexadezimal, und so weiter.)

Das Argument `radix` wird [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Wenn es nicht angegeben ist oder der Wert 0, `NaN` oder `Infinity` wird (`undefined` wird in `NaN` umgewandelt), nimmt JavaScript Folgendes an:

1. Wenn die Eingabe-`string`, mit entfernten führenden Leerzeichen und möglichen `+`/`-`-Zeichen, mit `0x` oder `0X` (eine Null, gefolgt von einem kleinen oder großen X) beginnt, wird `radix` als `16` angenommen und der Rest der Zeichenfolge wird als Hexadezimalzahl interpretiert.
2. Wenn die Eingabe-`string` mit einem anderen Wert beginnt, ist der Radix `10` (Dezimal).

> [!NOTE]
> Andere Präfixe wie `0b`, die in [Zahlliteralien](/de/docs/Web/JavaScript/Reference/Lexical_grammar#binary) gültig sind, werden von `parseInt()` als normale Ziffern behandelt. `parseInt()` behandelt Zeichenfolgen, die mit einem `0`-Zeichen beginnen, auch nicht als Oktalwerte. Das einzige Präfix, das von `parseInt()` erkannt wird, ist `0x` oder `0X` für Hexadezimalwerte — alles andere wird als Dezimalwert geparst, wenn `radix` fehlt. [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) oder [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) können stattdessen verwendet werden, um diese Präfixe zu interpretieren.

Wenn der Radix `16` ist, erlaubt `parseInt()` der Zeichenkette, optional mit `0x` oder `0X` nach dem optionalen Vorzeichenzeichen (`+`/`-`) versehen zu sein.

Wenn der Radixwert (bei Bedarf erzwungen) nicht im Bereich \[2, 36] (einschließlich) liegt, gibt `parseInt` `NaN` zurück.

Für Radices über `10` geben Buchstaben des englischen Alphabets Ziffern größer als `9` an. Zum Beispiel werden für Hexadezimalzahlen (Basis `16`) `A` bis `F` verwendet. Die Buchstaben sind nicht case-sensitiv.

`parseInt` versteht genau zwei Vorzeichen: `+` für positiv und `-` für negativ. Dies geschieht als initialer Schritt im Parsing, nachdem Leerzeichen entfernt wurden. Wenn keine Vorzeichen gefunden werden, geht der Algorithmus zum nächsten Schritt über; andernfalls entfernt es das Vorzeichen und führt die Zahlenanalyse auf dem Rest der Zeichenkette aus.

Wenn `parseInt` ein Zeichen in der Eingangszeichenfolge entdeckt, das keine gültige Ziffer im angegebenen `radix` ist, ignoriert es dieses und alle folgenden Zeichen und gibt den bis zu diesem Punkt geparsten Ganzzahlenwert zurück. Zum Beispiel gibt `parseInt("2", 2)` `NaN` zurück, weil `2` keine gültige Ziffer im binären Zahlensystem ist. Ebenso, obwohl `1e3` technisch eine Ganzzahl codiert (und korrekt in die Ganzzahl `1000` durch [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) geparst wird), gibt `parseInt("1e3", 10)` `1` zurück, weil `e` keine gültige Ziffer in Basis 10 ist. Da `.` ebenfalls kein Ziffer ist, wird der Rückgabewert immer eine Ganzzahl sein.

Wenn das erste Zeichen nicht in eine Zahl im verwendeten Radix umgewandelt werden kann, gibt `parseInt` `NaN` zurück. Führende Leerzeichen sind erlaubt.

Für arithmetische Zwecke ist der `NaN`-Wert in keinem Radix eine Zahl. Sie können die Funktion [`Number.isNaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) aufrufen, um festzustellen, ob das Ergebnis von `parseInt` `NaN` ist. Wenn `NaN` an arithmetische Operationen weitergegeben wird, wird das Ergebnis der Operation ebenfalls `NaN` sein.

Da große Zahlen das `e`-Zeichen in ihrer Zeichenfolgen-Darstellung verwenden (z.B. `6.022e23` für 6.022 × 10<sup>23</sup>), führt die Verwendung von `parseInt` zur Abschneidung von Zahlen zu unerwarteten Ergebnissen, wenn es auf sehr große oder sehr kleine Zahlen angewendet wird. `parseInt` sollte _nicht_ als Ersatz für {{jsxref("Math.trunc()")}} verwendet werden.

Um eine Zahl in ihre Zeichenfolgen-Darstellung in einem bestimmten Radix zu konvertieren, verwenden Sie [`thatNumber.toString(radix)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

Da `parseInt()` eine Zahl zurückgibt, kann es zu Verlusten an Genauigkeit kommen, wenn die durch die Zeichenfolge dargestellte Ganzzahl [außerhalb des sicheren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) liegt. Die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) unterstützt das präzise Parsen von Ganzzahlen beliebiger Länge, indem sie ein {{jsxref("BigInt")}} zurückgibt.

## Beispiele

### Verwendung von parseInt()

Die folgenden Beispiele geben alle `15` zurück:

```js
parseInt("0xF", 16);
parseInt("F", 16);
parseInt("17", 8);
parseInt("015", 10);
parseInt("15,123", 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15 * 3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
```

Die folgenden Beispiele geben alle `NaN` zurück:

```js
parseInt("Hello", 8); // Not a number at all
parseInt("546", 2); // Digits other than 0 or 1 are invalid for binary radix
```

Die folgenden Beispiele geben alle `-15` zurück:

```js
parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt("-17", 8);
parseInt("-15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);
```

Das folgende Beispiel gibt `224` zurück:

```js
parseInt("0e0", 16);
```

`parseInt()` kann keine {{jsxref("BigInt")}}-Werte verarbeiten. Es stoppt am `n`-Zeichen und behandelt die vorhergehende Zeichenkette als normale Ganzzahl, mit möglichem Präzisionsverlust.

```js example-bad
parseInt("900719925474099267n");
// 900719925474099300
```

Sie sollten die Zeichenkette stattdessen ohne das nachfolgende `n`-Zeichen an die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion übergeben.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` funktioniert nicht mit [numerischen Trennern](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators):

```js example-bad
parseInt("123_456"); // 123
```

### Verwendung von parseInt() auf Nicht-Zeichenfolgen

`parseInt()` kann interessante Ergebnisse liefern, wenn es auf Nicht-Zeichenfolgen in Kombination mit einer hohen Basis angewendet wird; zum Beispiel `36` (was alle alphanumerischen Zeichen als gültige Ziffern behandelt).

```js
parseInt(null, 36); // 1112745: The string "null" is 1112745 in base 36
parseInt(undefined, 36); // 86464843759093: The string "undefined" is 86464843759093 in base 36
```

Im Allgemeinen ist es eine schlechte Idee, `parseInt()` auf Nicht-Zeichenfolgen anzuwenden, besonders es als Ersatz für {{jsxref("Math.trunc()")}} zu verwenden. Es kann bei kleinen Zahlen funktionieren:

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

Es passiert jedoch nur so, weil die Zeichenfolgen-Darstellung dieser Zahlen die grundlegende Bruchnotation (`"15.99"`, `"-15.1"`) verwendet, bei der `parseInt()` am Dezimalpunkt stoppt. Zahlen größer oder gleich 1e+21 oder kleiner oder gleich 1e-7 verwenden die exponentielle Notation (`"1.5e+22"`, `"1.51e-8"`) in ihrer Zeichenfolgen-Darstellung, und `parseInt()` wird entweder am `e`-Zeichen oder am Dezimalpunkt stoppen, der immer nach der ersten Ziffer kommt. Das bedeutet, dass `parseInt()` bei großen und kleinen Zahlen eine einstellige Ganzzahl zurückgeben wird:

```js example-bad
parseInt(4.7 * 1e22, 10); // Very large number becomes 4
parseInt(0.00000000000434, 10); // Very small number becomes 4

parseInt(0.0000001, 10); // 1
parseInt(0.000000123, 10); // 1
parseInt(1e-7, 10); // 1
parseInt(1000000000000000000000, 10); // 1
parseInt(123000000000000000000000, 10); // 1
parseInt(1e21, 10); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("parseFloat()")}}
- [`Number()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
- [`BigInt()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
