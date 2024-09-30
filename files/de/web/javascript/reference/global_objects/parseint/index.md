---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die Funktion **`parseInt()`** analysiert ein Zeichenfolgenargument und gibt eine Ganzzahl zur angegebenen [Basis](https://en.wikipedia.org/wiki/Radix) (dem Basissystem in mathematischen Zahlensystemen) zurück.

{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}

## Syntax

```js-nolint
parseInt(string)
parseInt(string, radix)
```

### Parameter

- `string`
  - : Eine Zeichenfolge, die mit einer Ganzzahl beginnt. Führende [Whitespace](/de/docs/Glossary/whitespace) in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}

  - : Eine Ganzzahl zwischen `2` und `36`, die die _Basis_ (das Basissystem in mathematischen Zahlensystemen) der `string` darstellt. Sie wird in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt; wenn sie ungleich null und außerhalb des Bereichs von \[2, 36] nach der Umwandlung ist, gibt die Funktion immer `NaN` zurück. Wenn `0` oder nicht angegeben, wird die Basis basierend auf dem Wert der `string` abgeleitet. Vorsicht — dies standardmäßig _nicht_ immer auf `10`! Die [Beschreibung unten](#beschreibung) erklärt detaillierter, was passiert, wenn `radix` nicht angegeben ist.

### Rückgabewert

Eine Ganzzahl, die aus der angegebenen `string` analysiert wurde, oder {{jsxref("NaN")}}, wenn

- die `radix` als 32-Bit-Ganzzahl kleiner als `2` oder größer als `36` ist, oder
- das erste Nicht-Whitespace-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen „Gleitkommazahlen“ und „Ganzzahlen“. `parseInt()` und [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) unterscheiden sich nur in ihrem Parsing-Verhalten, jedoch nicht notwendigerweise in ihren Rückgabewerten. Zum Beispiel geben `parseInt("42")` und `parseFloat("42")` denselben Wert zurück: eine {{jsxref("Number")}} 42.

## Beschreibung

Die Funktion `parseInt` [konvertiert ihr erstes Argument in eine Zeichenfolge](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), analysiert diese Zeichenfolge und gibt eine Ganzzahl oder `NaN` zurück.

Wenn nicht `NaN`, ist der Rückgabewert die Ganzzahl, die das erste Argument genommen als Zahl in der angegebenen `radix` ist. (Beispielsweise konvertiert eine `radix` von `10` aus einer Dezimalzahl, `8` aus einer Oktalzahl, `16` aus einer Hexadezimalzahl usw.)

Das Argument `radix` wird [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ist sie nicht angegeben oder wird der Wert 0, `NaN` oder `Infinity` (`undefined` wird in `NaN` umgewandelt), übernimmt JavaScript Folgendes:

1. Wenn die Eingabe-`string`, ohne führende Whitespaces und mögliche `+`/`-` Zeichen, mit `0x` oder `0X` (eine Null, gefolgt von einem Klein- oder Großbuchstaben X) beginnt, wird die `radix` als `16` angenommen und der Rest der Zeichenfolge als Hexadezimalzahl analysiert.
2. Wenn die Eingabe-`string` mit einem anderen Wert beginnt, ist die Basis `10` (Dezimal).

> [!NOTE]
> Andere Präfixe wie `0b`, die bei [Zahl-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#binary) gültig sind, werden von `parseInt()` als normale Ziffern behandelt. `parseInt()` behandelt Zeichenfolgen, die mit einem `0`-Zeichen beginnen, auch nicht als Oktalwerte. Das einzige von `parseInt()` erkannte Präfix ist `0x` oder `0X` für Hexadezimalwerte — alles andere wird als Dezimalwert analysiert, wenn `radix` fehlt. [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) oder [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) können stattdessen zur Analyse dieser Präfixe verwendet werden.

Wenn die Basis `16` ist, erlaubt `parseInt()`, dass der Zeichenfolge optional ein `0x` oder `0X` nach dem optionalen Vorzeichenzeichen (`+`/`-`) vorangestellt wird.

Wenn der Basenwert (falls erforderlich erzwungen) nicht im Bereich \[2, 36] (einschließlich) liegt, gibt `parseInt` `NaN` zurück.

Für Basen über `10` geben Buchstaben des englischen Alphabets Ziffern größer als `9` an. Zum Beispiel werden für hexadezimale Zahlen (Basis `16`) die Buchstaben `A` bis `F` verwendet. Die Buchstaben sind nicht case-sensitiv.

`parseInt` versteht genau zwei Vorzeichen: `+` für positiv und `-` für negativ. Dies wird als erster Schritt beim Parsen durchgeführt, nachdem Whitespaces entfernt wurden. Wenn keine Vorzeichen gefunden werden, fährt der Algorithmus mit dem nächsten Schritt fort; andernfalls entfernt er das Vorzeichen und führt das Zahlenparsing auf dem Rest der Zeichenfolge aus.

Wenn `parseInt` auf ein Zeichen stößt, das keine Ziffer in der angegebenen `radix` ist, ignoriert es dieses und alle folgenden Zeichen und gibt den bis zu diesem Punkt analysierten Ganzzahlwert zurück. Zum Beispiel, obwohl `1e3` technisch eine Ganzzahl kodiert (und korrekt von [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) in die Ganzzahl `1000` analysiert wird), gibt `parseInt("1e3", 10)` `1` zurück, da `e` keine gültige Ziffer in Basis 10 ist. Da `.` auch keine Ziffer ist, ist der Rückgabewert immer eine Ganzzahl.

Wenn das erste Zeichen nicht mit der verwendeten Basis in eine Zahl umgewandelt werden kann, gibt `parseInt` `NaN` zurück. Führende Whitespaces sind erlaubt.

Für arithmetische Zwecke ist der Wert `NaN` in keiner Basis eine Zahl. Sie können die Funktion [`Number.isNaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) aufrufen, um festzustellen, ob das Ergebnis von `parseInt` `NaN` ist. Wird `NaN` an arithmetische Operationen übergeben, ist das Ergebnis der Operation ebenfalls `NaN`.

Da große Zahlen das Zeichen `e` in ihrer Zeichenfolgenrepräsentation verwenden (z. B. `6.022e23` für 6.022 × 10<sup>23</sup>), führt die Verwendung von `parseInt` zum Abschneiden von Zahlen zu unerwarteten Ergebnissen, wenn sie bei sehr großen oder sehr kleinen Zahlen verwendet wird. `parseInt` sollte _nicht_ als Ersatz für {{jsxref("Math.trunc()")}} verwendet werden.

Um eine Zahl in ihre Zeichenfolgenliterale in einer bestimmten Basis zu konvertieren, verwenden Sie [`thatNumber.toString(radix)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

Da `parseInt()` eine Zahl zurückgibt, kann es zu einem Verlust an Genauigkeit kommen, wenn die Zahl, die durch die Zeichenfolge dargestellt wird, [außerhalb des sicheren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) liegt. Die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) unterstützt das genaue Parsen von Ganzzahlen beliebiger Länge, indem sie ein {{jsxref("BigInt")}} zurückgibt.

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

`parseInt()` verarbeitet keine {{jsxref("BigInt")}}-Werte. Es hält am `n`-Zeichen an und behandelt die vorangegangene Zeichenfolge als normale Ganzzahl, mit möglichem Genauigkeitsverlust.

```js example-bad
parseInt("900719925474099267n");
// 900719925474099300
```

Sie sollten die Zeichenfolge stattdessen an die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) ohne das abschließende `n`-Zeichen übergeben.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` funktioniert nicht mit [Zahl-Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators):

```js example-bad
parseInt("123_456"); // 123
```

### Verwendung von parseInt() auf Nicht-Zeichenfolgen

`parseInt()` kann interessante Ergebnisse liefern, wenn es bei Nicht-Zeichenfolgen in Kombination mit einer hohen Basis verwendet wird; zum Beispiel `36` (was alle alphanumerischen Zeichen als gültige numerische Ziffern macht).

```js
parseInt(null, 36); // 1112745: The string "null" is 1112745 in base 36
parseInt(undefined, 36); // 86464843759093: The string "undefined" is 86464843759093 in base 36
```

Im Allgemeinen ist es eine schlechte Idee, `parseInt()` bei Nicht-Zeichenfolgen zu verwenden, insbesondere um es als Ersatz für {{jsxref("Math.trunc()")}} zu verwenden. Es kann bei kleinen Zahlen funktionieren:

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

Es funktioniert jedoch nur zufällig, weil die Zeichenfolgenrepräsentation dieser Zahlen die grundlegende Bruchschreibweise (`"15.99"`, `"-15.1"`) verwendet, bei der `parseInt()` am Dezimalpunkt stoppt. Zahlen größer oder gleich 1e+21 oder kleiner oder gleich 1e-7 verwenden die exponentielle Notation (`"1.5e+22"`, `"1.51e-8"`) in ihrer Zeichenfolgenrepräsentation, und `parseInt()` wird am `e`-Zeichen oder Dezimalpunkt anhalten, die immer nach der ersten Ziffer kommen. Dies bedeutet, dass `parseInt()` bei großen und kleinen Zahlen eine einstellige Ganzzahl zurückgeben wird:

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
