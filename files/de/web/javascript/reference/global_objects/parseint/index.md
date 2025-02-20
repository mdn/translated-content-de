---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Objects")}}

Die **`parseInt()`**-Funktion analysiert ein Zeichenfolgenargument und gibt eine ganze Zahl des angegebenen [Radix](https://en.wikipedia.org/wiki/Radix) (die Basis in mathematischen Zahlensystemen) zurück.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - parseInt()")}}

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

  - : Eine ganze Zahl zwischen `2` und `36`, die die _basis_ (die Basis in mathematischen Zahlensystemen) der `string` darstellt. Es wird in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt. Wenn es nach der Umwandlung nicht null ist und außerhalb des Bereichs \[2, 36] liegt, wird die Funktion immer `NaN` zurückgeben. Wenn `0` oder nicht angegeben, wird die Basis basierend auf dem Wert der `string` ermittelt. Vorsicht — dies ist _nicht_ immer standardmäßig `10`! Die [Beschreibung unten](#beschreibung) erklärt ausführlicher, was passiert, wenn `radix` nicht angegeben ist.

### Rückgabewert

Eine ganze Zahl, die aus der angegebenen `string` analysiert wurde, oder {{jsxref("NaN")}}, wenn

- die `radix` als 32-Bit-Ganzzahl kleiner als `2` oder größer als `36` ist, oder
- das erste nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen "Gleitkommazahlen" und "ganzen Zahlen". `parseInt()` und [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) unterscheiden sich nur in ihrem Parsing-Verhalten, aber nicht notwendigerweise in ihren Rückgabewerten. Zum Beispiel würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die Funktion `parseInt` [konvertiert ihr erstes Argument in eine Zeichenfolge](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), analysiert diese Zeichenfolge und gibt dann eine ganze Zahl oder `NaN` zurück.

Wenn der Rückgabewert nicht `NaN` ist, ist er die ganze Zahl, die das erste Argument als Zahl in der angegebenen `radix` darstellt. (Zum Beispiel konvertiert eine `radix` von `10` aus einer Dezimalzahl, `8` aus einer Oktalzahl, `16` aus einer Hexadezimalzahl und so weiter.)

Das `radix`-Argument wird [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Wenn es nicht angegeben ist oder wenn der Wert nach der Umwandlung `0`, `NaN` oder `Infinity` ist (`undefined` wird in `NaN` umgewandelt), nimmt JavaScript Folgendes an:

1. Wenn die Eingabe-`string` nach Entfernen führender Leerzeichen und möglicher `+`/`-`-Zeichen mit `0x` oder `0X` (einer Null, gefolgt von einem Klein- oder Großbuchstaben X) beginnt, wird `radix` als `16` angenommen und der Rest der Zeichenfolge als Hexadezimalzahl analysiert.
2. Wenn die Eingabe-`string` mit einem anderen Wert beginnt, ist die Basis `10` (Dezimalwert).

> [!NOTE]
> Andere Präfixe wie `0b`, die in [Zahlliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#binary) gültig sind, werden von `parseInt()` als normale Ziffern behandelt. `parseInt()` behandelt Zeichenfolgen, die mit einem `0`-Zeichen beginnen, auch nicht als Oktalwerte. Das einzige Präfix, das `parseInt()` erkennt, ist `0x` oder `0X` für Hexadezimalwerte — alles andere wird als Dezimalwert analysiert, wenn `radix` fehlt. [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) oder [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) können stattdessen verwendet werden, um diese Präfixe zu analysieren.

Wenn die Basis `16` ist, erlaubt `parseInt()` die Zeichenfolge optional mit `0x` oder `0X` nach dem optionalen Vorzeichenzeichen (`+`/`-`) zu versehen.

Wenn der Basiswert (falls erforderlich, umgewandelt) nicht im Bereich \[2, 36] (einschließlich) liegt, gibt `parseInt` `NaN` zurück.

Für Basen über `10` kennzeichnen Buchstaben des englischen Alphabets Ziffern größer als `9`. Zum Beispiel werden für Hexadezimalzahlen (Basis `16`) `A` bis `F` verwendet. Die Buchstaben sind nicht case-sensitiv.

`parseInt` versteht genau zwei Vorzeichen: `+` für positiv und `-` für negativ. Es wird als erster Schritt der Analyse durchgeführt, nachdem Leerzeichen entfernt wurden. Wenn keine Vorzeichen gefunden werden, geht der Algorithmus zum nächsten Schritt über; andernfalls wird das Vorzeichen entfernt und die Zahl-Parsing-Logik auf den Rest der Zeichenfolge angewendet.

Wenn `parseInt` auf ein Zeichen trifft, das keine Ziffer in der angegebenen `radix` ist, ignoriert es dieses und alle nachfolgenden Zeichen und gibt den bis zu diesem Punkt analysierten Ganzzahlwert zurück. Zum Beispiel, obwohl `1e3` technisch eine Ganzzahl encodiert (und korrekt als Ganzzahl `1000` durch [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) analysiert wird), gibt `parseInt("1e3", 10)` `1` zurück, weil `e` keine gültige Ziffer in Basis 10 ist. Da `.` auch keine Ziffer ist, ist der Rückgabewert immer eine Ganzzahl.

Wenn das erste Zeichen nicht mit der im Radix verwendeten Basis in eine Zahl konvertiert werden kann, gibt `parseInt` `NaN` zurück. Führende Leerzeichen sind zulässig.

Für mathematische Operationen ist der Wert `NaN` keine Zahl in irgendeiner Basis. Sie können die Funktion [`Number.isNaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) verwenden, um festzustellen, ob das Ergebnis von `parseInt` `NaN` ist. Wenn `NaN` an mathematische Operationen übergeben wird, wird das Ergebnis der Operation ebenfalls `NaN` sein.

Da große Zahlen das Zeichen `e` in ihrer Zeichenfolgendarstellung verwenden (z. B. `6.022e23` für 6.022 × 10<sup>23</sup>), führt die Verwendung von `parseInt` zur Kürzung von Zahlen zu unerwarteten Ergebnissen, wenn es auf sehr große oder sehr kleine Zahlen angewendet wird. `parseInt` sollte _nicht_ als Ersatz für {{jsxref("Math.trunc()")}} verwendet werden.

Um eine Zahl als Zeichenfolge in einer bestimmten Basis darzustellen, verwenden Sie [`thatNumber.toString(radix)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

Da `parseInt()` eine Zahl zurückgibt, kann es zu Präzisionsverlust kommen, wenn die durch die Zeichenfolge dargestellte Ganzzahl [außerhalb des sicheren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) liegt. Die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) unterstützt die genaue Analyse von Ganzzahlen beliebiger Länge, indem sie einen {{jsxref("BigInt")}} zurückgibt.

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

`parseInt()` verarbeitet keine {{jsxref("BigInt")}}-Werte. Es stoppt beim Zeichen `n` und behandelt die vorangehende Zeichenfolge als normale Ganzzahl, mit möglichem Präzisionsverlust.

```js example-bad
parseInt("900719925474099267n");
// 900719925474099300
```

Sie sollten die Zeichenfolge stattdessen direkt an die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben, ohne das abschließende `n`-Zeichen.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` funktioniert nicht mit [numerischen Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators):

```js example-bad
parseInt("123_456"); // 123
```

### Verwendung von parseInt() bei Nicht-Zeichenfolgen

`parseInt()` kann interessante Ergebnisse liefern, wenn es auf Nicht-Zeichenfolgen zusammen mit einer hohen Basis angewendet wird; zum Beispiel `36` (was alle alphanumerischen Zeichen als gültige Ziffern zulässt).

```js
parseInt(null, 36); // 1112745: The string "null" is 1112745 in base 36
parseInt(undefined, 36); // 86464843759093: The string "undefined" is 86464843759093 in base 36
```

Im Allgemeinen ist es keine gute Idee, `parseInt()` bei Nicht-Zeichenfolgen zu verwenden, insbesondere um es als Ersatz für {{jsxref("Math.trunc()")}} zu nutzen. Es kann bei kleinen Zahlen funktionieren:

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

Es funktioniert jedoch nur zufällig, weil die Zeichenfolgendarstellung dieser Zahlen die einfache Bruchnotation (`"15.99"`, `"-15.1"`) verwendet, bei der `parseInt()` am Dezimalpunkt stoppt. Zahlen größer oder gleich `1e+21` oder kleiner oder gleich `1e-7` verwenden in ihrer Zeichenfolgendarstellung die exponentielle Notation (`"1.5e+22"`, `"1.51e-8"`), und `parseInt()` wird am Zeichen `e` oder Dezimalpunkt, der immer nach der ersten Ziffer kommt, stoppen. Dies bedeutet, dass bei großen und kleinen Zahlen `parseInt()` eine einstellige Ganzzahl zurückgibt:

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
