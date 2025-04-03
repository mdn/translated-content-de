---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Objects")}}

Die **`parseInt()`** Funktion parst ein Zeichenfolgenargument und gibt eine ganze Zahl im angegebenen [Radix](https://en.wikipedia.org/wiki/Radix) (der Basis in mathematischen Zahlensystemen) zurück.

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

  - : Eine ganze Zahl zwischen `2` und `36`, die den _Radix_ (die Basis in mathematischen Zahlensystemen) der `string` darstellt. Sie wird in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt; wenn sie ungleich null und außerhalb des Bereichs von \[2, 36] ist, gibt die Funktion immer `NaN` zurück. Wenn `0` oder nicht angegeben, wird die Basis basierend auf dem Wert von `string` abgeleitet. Seien Sie vorsichtig — dies ist _nicht_ immer `10`! Die [Beschreibung unten](#beschreibung) erklärt im Detail, was passiert, wenn `radix` nicht angegeben wird.

### Rückgabewert

Eine ganze Zahl, die aus der angegebenen `string` geparst wurde, oder {{jsxref("NaN")}}, wenn

- der `radix` als 32-Bit-Ganzzahl kleiner als `2` oder größer als `36` ist, oder
- das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen „Gleitkommazahlen“ und „Ganzzahlen“. `parseInt()` und [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) unterscheiden sich nur in ihrem Verhaltensweise beim Parsen, aber nicht unbedingt in ihren Rückgabewerten. Beispielsweise würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: die {{jsxref("Number")}} 42.

## Beschreibung

Die `parseInt` Funktion [konvertiert ihr erstes Argument zu einer Zeichenfolge](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), parst diese Zeichenfolge und gibt dann eine ganze Zahl oder `NaN` zurück.

Wenn nicht `NaN`, wird der Rückgabewert die ganze Zahl sein, die das erste Argument als Zahl in dem angegebenen `radix` ist. (Zum Beispiel konvertiert ein `radix` von `10` aus einer Dezimalzahl, `8` aus Oktal, `16` aus Hexadezimal usw.)

Das `radix`-Argument wird [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Wenn es nicht angegeben wird oder wenn der Wert 0, `NaN` oder `Infinity` wird (`undefined` wird zu `NaN` umgewandelt), nimmt JavaScript Folgendes an:

1. Wenn die Eingabe-`string`, nach Entfernung führender Leerzeichen und möglicher `+`/`-` Zeichen, mit `0x` oder `0X` (einem Null gefolgt von einem kleinen oder großen X) beginnt, wird `radix` als `16` angenommen und der Rest der Zeichenfolge als Hexadezimalzahl geparst.
2. Wenn die Eingabe-`string` mit einem anderen Wert beginnt, ist die Basis `10` (Dezimal).

> [!NOTE]
> Andere Präfixe wie `0b`, die in [Zahlliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#binary) gültig sind, werden von `parseInt()` als normale Ziffern behandelt. `parseInt()` behandelt Zeichenfolgen, die mit einem `0` Zeichen beginnen, ebenfalls nicht als Oktalwerte. Das einzige von `parseInt()` erkannte Präfix ist `0x` oder `0X` für Hexadezimalwerte — alles andere wird als Dezimalwert geparst, wenn `radix` fehlt. [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) oder [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) kann stattdessen verwendet werden, um diese Präfixe zu parsen.

Wenn der Radix `16` ist, erlaubt `parseInt()`, dass die Zeichenfolge optional mit `0x` oder `0X` nach dem optionalen Vorzeichenzeichen (`+`/`-`) beginnt.

Wenn der Radixwert (bei Bedarf gezwungen) nicht im Bereich \[2, 36] (einschließlich) liegt, gibt `parseInt` `NaN` zurück.

Für Radixe über `10` zeigen Buchstaben des englischen Alphabets Zahlen größer als `9` an. Zum Beispiel werden für Hexadezimalzahlen (Basis `16`) `A` bis `F` verwendet. Die Buchstaben sind nicht groß- und kleinschreibungssensitiv.

`parseInt` versteht genau zwei Vorzeichen: `+` für positiv und `-` für negativ. Es wird als erster Schritt im Parsevorgang durchgeführt, nachdem die Leerzeichen entfernt wurden. Wenn keine Vorzeichen gefunden werden, geht der Algorithmus zum nächsten Schritt über; andernfalls wird das Vorzeichen entfernt und das Zahlen-Parsen auf den Rest der Zeichenfolge angewendet.

Wenn `parseInt` auf ein Zeichen in der Eingabezeichenfolge trifft, das keine gültige Ziffer im angegebenen `radix` ist, ignoriert es dieses und alle nachfolgenden Zeichen und gibt den bis zu diesem Punkt geparsten ganzzahligen Wert zurück. Zum Beispiel gibt `parseInt("2", 2)` `NaN` zurück, weil `2` keine gültige Ziffer im binären Zahlensystem ist. Ebenso, obwohl `1e3` technisch eine ganze Zahl kodiert (und korrekt auf die ganze Zahl `1000` durch [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) geparst würde), gibt `parseInt("1e3", 10)` `1` zurück, weil `e` keine gültige Ziffer in der Basis 10 ist. Da `.` ebenfalls keine Ziffer ist, wird der Rückgabewert immer eine ganze Zahl sein.

Wenn das erste Zeichen nicht in eine Zahl mit dem verwendeten Radix konvertiert werden kann, gibt `parseInt` `NaN` zurück. Führende Leerzeichen sind erlaubt.

Für arithmetische Zwecke ist der `NaN`-Wert keine Zahl in irgendeinem Radix. Sie können die Funktion [`Number.isNaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) aufrufen, um festzustellen, ob das Ergebnis von `parseInt` `NaN` ist. Wenn `NaN` an arithmetische Operationen weitergegeben wird, ist das Ergebnis der Operation ebenfalls `NaN`.

Da große Zahlen das `e`-Zeichen in ihrer Zeichenfolgenrepräsentation verwenden (z.B. `6.022e23` für 6.022 × 10<sup>23</sup>), führt die Verwendung von `parseInt` zum Trunkieren von Zahlen zu unerwarteten Ergebnissen, wenn es auf sehr große oder sehr kleine Zahlen angewendet wird. `parseInt` sollte _nicht_ als Ersatz für {{jsxref("Math.trunc()")}} verwendet werden.

Um eine Zahl in ihre Zeichenfolgenliteral in einem bestimmten Radix zu konvertieren, verwenden Sie [`thatNumber.toString(radix)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

Da `parseInt()` eine Zahl zurückgibt, kann es zu einem Verlust an Genauigkeit führen, wenn die durch die Zeichenfolge dargestellte ganze Zahl [außerhalb des sicheren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) liegt. Die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) unterstützt das genaue Parsen von Ganzzahlen beliebiger Länge, indem sie ein {{jsxref("BigInt")}} zurückgibt.

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

`parseInt()` verarbeitet keine {{jsxref("BigInt")}}-Werte. Es stoppt am `n`-Zeichen und behandelt die vorhergehende Zeichenfolge als normale Ganzzahl, mit möglichem Verlust an Genauigkeit.

```js example-bad
parseInt("900719925474099267n");
// 900719925474099300
```

Sie sollten die Zeichenfolge stattdessen an die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion übergeben, ohne das abschließende `n`-Zeichen.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` funktioniert nicht mit [numerischen Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators):

```js example-bad
parseInt("123_456"); // 123
```

### Verwendung von parseInt() auf Nicht-Zeichenfolgen

`parseInt()` kann interessante Ergebnisse liefern, wenn es auf Nicht-Zeichenfolgen mit einer hohen Basis angewendet wird; zum Beispiel `36` (was alle alphanumerischen Zeichen als gültige Ziffern macht).

```js
parseInt(null, 36); // 1112745: The string "null" is 1112745 in base 36
parseInt(undefined, 36); // 86464843759093: The string "undefined" is 86464843759093 in base 36
```

Im Allgemeinen ist es eine schlechte Idee, `parseInt()` auf Nicht-Zeichenfolgen zu verwenden, insbesondere, um es als Ersatz für {{jsxref("Math.trunc()")}} zu verwenden. Es kann bei kleinen Zahlen funktionieren:

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

Es funktioniert jedoch nur, weil die Zeichenfolgenrepräsentation dieser Zahlen die grundlegende Bruchnotation verwendet (`"15.99"`, `"-15.1"`), wo `parseInt()` am Dezimalpunkt stoppt. Zahlen größer oder gleich 1e+21 oder kleiner oder gleich 1e-7 verwenden in ihrer Zeichenfolgenrepräsentation die exponentielle Notation (`"1.5e+22"`, `"1.51e-8"`), und `parseInt()` stoppt am `e`-Zeichen oder Dezimalpunkt, der immer nach der ersten Ziffer kommt. Das bedeutet, dass für große und kleine Zahlen `parseInt()` eine einstellige Ganzzahl zurückgibt:

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
- [`Number()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
- [`BigInt()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
