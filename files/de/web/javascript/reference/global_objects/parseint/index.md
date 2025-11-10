---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die Funktion **`parseInt()`** analysiert ein Zeichenfolgen-Argument und gibt eine Ganzzahl der angegebenen [Basis](https://en.wikipedia.org/wiki/Radix) zurück (die Basis in mathematischen Zahlensystemen).

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
  - : Eine Zeichenfolge, die mit einer Ganzzahl beginnt. Führende {{Glossary("whitespace", "Leerzeichen")}} in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}
  - : Eine Ganzzahl zwischen `2` und `36`, die die _Basis_ (die Basis in mathematischen Zahlensystemen) der `string` darstellt. Sie wird zu einer [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt; wenn sie ein nicht-nuller Wert außerhalb des Bereichs \[2, 36] nach der Umwandlung ist, gibt die Funktion immer `NaN` zurück. Wenn `0` oder nicht angegeben, wird die Basis basierend auf dem Wert von `string` abgeleitet. Seien Sie vorsichtig — dies ist _nicht_ immer standardmäßig `10`! Die [untenstehende Beschreibung](#beschreibung) erklärt detaillierter, was passiert, wenn die Basis nicht angegeben ist.

### Rückgabewert

Eine aus der angegebenen `string` geparste Ganzzahl oder {{jsxref("NaN")}} wenn

- die Basis als 32-Bit-Ganzzahl kleiner als `2` oder größer als `36` ist, oder
- das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> Im JavaScript gibt es auf Sprachebene keinen Unterschied zwischen "Gleitkommazahlen" und "Ganzzahlen". `parseInt()` und [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) unterscheiden sich nur in ihrem Parserverhalten, aber nicht notwendigerweise in ihren Rückgabewerten. Zum Beispiel würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die `parseInt`-Funktion [wandelt ihr erstes Argument in eine Zeichenfolge um](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), parst diese Zeichenfolge und gibt dann eine Ganzzahl oder `NaN` zurück.

Wenn nicht `NaN`, wird der Rückgabewert die Ganzzahl sein, die das erste Argument als Zahl in der angegebenen `Basis` ist. (Beispielsweise konvertiert eine `Basis` von `10` aus einer Dezimalzahl, `8` aus einer Oktalzahl, `16` aus einer Hexadezimalzahl usw.)

Das `radix`-Argument wird zu einer Zahl [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Wenn es nicht bereitgestellt wird oder wenn der Wert 0, `NaN` oder `Infinity` wird (`undefined` wird zu `NaN` konvertiert), geht JavaScript wie folgt vor:

1. Wenn die Eingabe-`string`, mit führenden Leerzeichen und möglichen `+`/`-` Zeichen entfernt, mit `0x` oder `0X` (eine Null, gefolgt von einem Klein- oder Großbuchstaben X) beginnt, wird die Basis als `16` angenommen und der Rest der Zeichenfolge als Hexadezimalzahl geparst.
2. Wenn die Eingabe-`string` mit einem anderen Wert beginnt, ist die Basis `10` (Dezimal).

> [!NOTE]
> Andere Präfixe wie `0b`, die in [Zahlliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#binary) gültig sind, werden von `parseInt()` als normale Ziffern behandelt. `parseInt()` behandelt Zeichenfolgen, die mit einem `0`-Zeichen beginnen, _nicht_ als Oktalwerte. Das einzige Präfix, das `parseInt()` erkennt, ist `0x` oder `0X` für Hexadezimalwerte — alles andere wird als Dezimalwert geparst, wenn die Basis fehlt. [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) oder [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) kann stattdessen verwendet werden, um diese Präfixe zu parsen.

Wenn die Basis `16` ist, erlaubt `parseInt()`, dass die Zeichenfolge optional nach dem optionalen Vorzeichenzeichen (`+`/`-`) mit `0x` oder `0X` versehen wird.

Wenn der Basiswert (bei Bedarf erzwungen) nicht im Bereich \[2, 36] (einschließlich) liegt, gibt `parseInt` `NaN` zurück.

Für Basen größer als `10` zeigen Buchstaben des englischen Alphabets Ziffern größer als `9` an. Zum Beispiel werden für Hexadezimalzahlen (Basis `16`) die Buchstaben `A` bis `F` verwendet. Die Buchstaben sind nicht case-sensitiv.

`parseInt` versteht genau zwei Vorzeichen: `+` für positiv und `-` für negativ. Dies wird als erster Schritt im Parsing durchgeführt, nachdem Leerzeichen entfernt wurden. Wenn keine Vorzeichen gefunden werden, geht der Algorithmus zum nächsten Schritt über; andernfalls wird das Vorzeichen entfernt und die Zahlenanalyse auf den Rest der Zeichenfolge angewendet.

Wenn `parseInt` auf ein Zeichen in der Eingabezeichenfolge trifft, das in der angegebenen Basis keine gültige Ziffer ist, ignoriert es dieses und alle folgenden Zeichen und gibt den bis zu diesem Punkt geparsten Ganzzahlwert zurück. Zum Beispiel gibt `parseInt("2", 2)` `NaN` zurück, da `2` im Binärsystem keine gültige Ziffer ist. Auch wenn `1e3` technisch eine Ganzzahl kodiert (und korrekt von [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) in die Ganzzahl `1000` geparst wird), gibt `parseInt("1e3", 10)` `1` zurück, da `e` in der Basis 10 keine gültige Ziffer ist. Da `.` ebenfalls keine Ziffer ist, wird der Rückgabewert immer eine Ganzzahl sein.

Wenn das erste Zeichen nicht mit der verwendeten Basis in eine Zahl umgewandelt werden kann, gibt `parseInt` `NaN` zurück. Führende Leerzeichen sind erlaubt.

Für mathematische Zwecke ist der `NaN`-Wert in keiner Basis eine Zahl. Sie können die Funktion [`Number.isNaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) aufrufen, um festzustellen, ob das Ergebnis von `parseInt` `NaN` ist. Wenn `NaN` an arithmetische Operationen weitergegeben wird, ist das Ergebnis der Operation ebenfalls `NaN`.

Da große Zahlen das `e`-Zeichen in ihrer String-Darstellung verwenden (z.B. `6.022e23` für 6.022 × 10<sup>23</sup>), wird `parseInt` unerwartete Ergebnisse liefern, wenn es auf sehr große oder sehr kleine Zahlen angewendet wird. `parseInt` sollte _nicht_ als Ersatz für {{jsxref("Math.trunc()")}} verwendet werden.

Um eine Zahl in ihre Zeichenfolgenliteralform in einer bestimmten Basis zu konvertieren, verwenden Sie [`thatNumber.toString(radix)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

Da `parseInt()` eine Zahl zurückgibt, kann es zu einem Verlust der Genauigkeit kommen, wenn die von der Zeichenfolge dargestellte Ganzzahl [außerhalb des sicheren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) liegt. Die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) unterstützt das präzise Parsen von Ganzzahlen beliebiger Länge, indem sie ein {{jsxref("BigInt")}} zurückgibt.

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

`parseInt()` verarbeitet keine {{jsxref("BigInt")}}-Werte. Es stoppt am `n`-Zeichen und behandelt die vorhergehende Zeichenfolge als normale Ganzzahl, mit möglichem Präzisionsverlust.

```js example-bad
parseInt("900719925474099267n");
// 900719925474099300
```

Sie sollten die Zeichenfolge stattdessen an die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) ohne das abschließende `n`-Zeichen übergeben.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` funktioniert nicht mit [numerischen Trennern](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators):

```js example-bad
parseInt("123_456"); // 123
```

### Verwendung von parseInt() auf Nicht-Zeichenfolgen

`parseInt()` kann interessante Ergebnisse liefern, wenn es auf Nicht-Zeichenfolgen in Kombination mit einer hohen Basis angewendet wird; zum Beispiel `36` (was alle alphanumerischen Zeichen zu gültigen Ziffern macht).

```js
parseInt(null, 36); // 1112745: The string "null" is 1112745 in base 36
parseInt(undefined, 36); // 86464843759093: The string "undefined" is 86464843759093 in base 36
```

Im Allgemeinen ist es eine schlechte Idee, `parseInt()` auf Nicht-Zeichenfolgen anzuwenden, insbesondere es als Ersatz für {{jsxref("Math.trunc()")}} zu verwenden. Es könnte bei kleinen Zahlen funktionieren:

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

Es passiert jedoch nur, weil die String-Darstellung dieser Zahlen grundlegende Bruchnotation (`"15.99"`, `"-15.1"`) verwendet, wobei `parseInt()` am Dezimalpunkt stoppt. Zahlen größer als oder gleich `1e+21` oder kleiner als oder gleich `1e-7` verwenden in ihrer Zeichenfolgen-Darstellung die Exponentialnotation (`"1.5e+22"`, `"1.51e-8"`), und `parseInt()` wird am `e`-Zeichen oder Dezimalpunkt stoppen, der immer nach der ersten Ziffer kommt. Das bedeutet, dass `parseInt()` bei großen und kleinen Zahlen eine einstellige Ganzzahl zurückgeben wird:

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
