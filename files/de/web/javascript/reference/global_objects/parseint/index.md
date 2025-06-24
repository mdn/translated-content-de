---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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
  - : Eine Zeichenfolge, die mit einer ganzen Zahl beginnt. Führende {{Glossary("whitespace", "Leerzeichen")}} in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}
  - : Eine ganze Zahl zwischen `2` und `36`, die den _Radix_ (die Basis in mathematischen Zahlensystemen) der `string` darstellt. Sie wird in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt; wenn sie ungleich null und außerhalb des Bereichs von \[2, 36] nach der Umwandlung ist, gibt die Funktion immer `NaN` zurück. Wenn `0` oder nicht angegeben, wird der Radix basierend auf dem Wert von `string` abgeleitet. Seien Sie vorsichtig — dies wird _nicht_ immer auf `10` gesetzt! Die [Beschreibung unten](#beschreibung) erklärt detaillierter, was passiert, wenn `radix` nicht angegeben wird.

### Rückgabewert

Eine ganze Zahl, die aus der angegebenen `string` analysiert wurde, oder {{jsxref("NaN")}}, wenn

- der `radix` als 32-Bit-Ganzzahl kleiner als `2` oder größer als `36` ist, oder
- das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen "Gleitkommazahlen" und "Ganzzahlen". `parseInt()` und [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) unterscheiden sich nur in ihrem Analyseverhalten, jedoch nicht notwendigerweise in ihren Rückgabewerten. Zum Beispiel würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die `parseInt`-Funktion [wandelt ihr erstes Argument in eine Zeichenfolge um](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), analysiert diese Zeichenfolge und gibt dann eine ganze Zahl oder `NaN` zurück.

Wenn nicht `NaN`, ist der Rückgabewert die ganze Zahl, die das erste Argument als Zahl im angegebenen `radix` ist. (Zum Beispiel wandelt ein `radix` von `10` aus einer Dezimalzahl um, `8` aus einer Oktalzahl, `16` aus einer Hexadezimalzahl usw.)

Das `radix`-Argument wird [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Wenn es nicht angegeben ist, oder wenn der Wert `0`, `NaN` oder `Infinity` wird (`undefined` wird in `NaN` umgewandelt), geht JavaScript von folgenden Annahmen aus:

1. Wenn die Eingabe-`string`, mit entfernten führenden Leerzeichen und möglichen `+`/`-`-Zeichen, mit `0x` oder `0X` beginnt (eine Null, gefolgt von einem kleinen oder großen X), wird `radix` als `16` angenommen und der Rest der Zeichenfolge wird als Hexadezimalzahl analysiert.
2. Wenn die Eingabe-`string` mit einem anderen Wert beginnt, ist der Radix `10` (Dezimal).

> [!NOTE]
> Andere Präfixe wie `0b`, die in [Zahlliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#binary) gültig sind, werden von `parseInt()` als normale Ziffern behandelt. `parseInt()` behandelt Zeichenfolgen, die mit einem `0`-Zeichen beginnen, auch nicht als Oktalwerte. Das einzige Präfix, das `parseInt()` erkennt, ist `0x` oder `0X` für Hexadezimalwerte — alles andere wird als Dezimalwert analysiert, wenn `radix` fehlt. [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) oder [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) können stattdessen verwendet werden, um diese Präfixe zu analysieren.

Wenn der Radix `16` ist, erlaubt `parseInt()`, dass die Zeichenfolge optional mit `0x` oder `0X` nach dem optionalen Vorzeichenzeichen (`+`/`-`) versehen wird.

Wenn der Radix-Wert (falls erforderlich, umgewandelt) nicht im Bereich \[2, 36] (inklusive) liegt, gibt `parseInt` `NaN` zurück.

Für Radixe über `10` zeigen Buchstaben des englischen Alphabets Ziffern größer als `9` an. Beispielsweise werden für Hexadezimalzahlen (Basis `16`) `A` bis `F` verwendet. Die Buchstaben sind nicht case-sensitiv.

`parseInt` versteht exakt zwei Vorzeichen: `+` für positiv und `-` für negativ. Dies geschieht als erster Schritt bei der Analyse, nachdem Leerzeichen entfernt wurden. Wenn keine Vorzeichen gefunden werden, fährt der Algorithmus mit dem nächsten Schritt fort; sonst wird das Vorzeichen entfernt und die Zahl-Parsing auf den Rest der Zeichenfolge angewandt.

Wenn `parseInt` ein Zeichen in der Eingabezeichenfolge antrifft, das keine gültige Ziffer im angegebenen `radix` ist, ignoriert es es und alle folgenden Zeichen und gibt den bis zu diesem Punkt analysierten ganzzahligen Wert zurück. Zum Beispiel gibt `parseInt("2", 2)` `NaN` zurück, weil `2` im binären Zahlensystem keine gültige Ziffer ist. Ebenso kodiert `1e3` technisch gesehen eine ganze Zahl (und wird korrekt in die ganze Zahl `1000` durch [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) analysiert), aber `parseInt("1e3", 10)` gibt `1` zurück, da `e` keine gültige Ziffer in der Basis 10 ist. Weil auch `.` keine Ziffer ist, ist der Rückgabewert immer eine ganze Zahl.

Wenn das erste Zeichen nicht in eine Zahl mit dem verwendeten Radix umgewandelt werden kann, gibt `parseInt` `NaN` zurück. Führende Leerzeichen sind erlaubt.

Für arithmetische Zwecke ist der `NaN`-Wert in keinem Radix eine Zahl. Sie können die Funktion [`Number.isNaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) aufrufen, um festzustellen, ob das Ergebnis von `parseInt` `NaN` ist. Wenn `NaN` an arithmetische Operationen übergeben wird, ist das Ergebnis der Operation ebenfalls `NaN`.

Da große Zahlen das `e`-Zeichen in ihrer Zeichenfolgenrepräsentation verwenden (z.B. `6.022e23` für 6.022 × 10<sup>23</sup>), führt die Verwendung von `parseInt`, um Zahlen zu kürzen, zu unerwarteten Ergebnissen, wenn sie auf sehr große oder sehr kleine Zahlen angewendet wird. `parseInt` sollte _nicht_ als Ersatz für {{jsxref("Math.trunc()")}} verwendet werden.

Um eine Zahl in ihren Zeichenfolgenliteral in einem bestimmten Radix umzuwandeln, verwenden Sie [`thatNumber.toString(radix)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

Da `parseInt()` eine Zahl zurückgibt, kann es zu einem Verlust der Genauigkeit kommen, wenn die von der Zeichenfolge dargestellte ganze Zahl außerhalb des [sicheren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) liegt. Die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) unterstützt das genaue Analysieren von Ganzzahlen beliebiger Länge, indem sie ein {{jsxref("BigInt")}} zurückgibt.

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

`parseInt()` behandelt keine {{jsxref("BigInt")}}-Werte. Es stoppt am `n`-Zeichen und behandelt die vorhergehende Zeichenfolge als normale ganze Zahl, mit eventuell möglichem Präzisionsverlust.

```js example-bad
parseInt("900719925474099267n");
// 900719925474099300
```

Sie sollten die Zeichenfolge stattdessen an die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion übergeben, ohne das abschließende `n`-Zeichen.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` funktioniert nicht mit [Zifferntrennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators):

```js example-bad
parseInt("123_456"); // 123
```

### Verwendung von parseInt() auf Nicht-Zeichenfolgen

`parseInt()` kann interessante Ergebnisse liefern, wenn es auf Nicht-Zeichenfolgen angewendet wird, kombiniert mit einem hohen Radix; zum Beispiel `36` (was alle alphanumerischen Zeichen zu gültigen Ziffern macht).

```js
parseInt(null, 36); // 1112745: The string "null" is 1112745 in base 36
parseInt(undefined, 36); // 86464843759093: The string "undefined" is 86464843759093 in base 36
```

Im Allgemeinen ist es eine schlechte Idee, `parseInt()` auf Nicht-Zeichenfolgen zu verwenden, insbesondere als Ersatz für {{jsxref("Math.trunc()")}}. Es kann bei kleinen Zahlen funktionieren:

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

Dies passiert jedoch nur, weil die Zeichenfolgenrepräsentation dieser Zahlen die grundlegende Bruchnotation verwendet (`"15.99"`, `"-15.1"`), wobei `parseInt()` am Dezimalpunkt stoppt. Zahlen größer als oder gleich 1e+21 oder kleiner als oder gleich 1e-7 verwenden in ihrer Zeichenfolgenrepräsentation die Exponentialnotation (`"1.5e+22"`, `"1.51e-8"`), und `parseInt()` stoppt am `e`-Zeichen oder Dezimalpunkt, der immer nach der ersten Ziffer kommt. Dies bedeutet, dass `parseInt()` für große und kleine Zahlen eine einstellige ganze Zahl zurückgibt:

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
