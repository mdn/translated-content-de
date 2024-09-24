---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die Funktion **`parseInt()`** analysiert ein Zeichenfolgenargument und gibt eine ganze Zahl der angegebenen [Basis](https://en.wikipedia.org/wiki/Radix) (die Grundlage in mathematischen Zahlsystemen) zurück.

{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}

## Syntax

```js-nolint
parseInt(string)
parseInt(string, radix)
```

### Parameter

- `string`
  - : Eine Zeichenkette, die mit einer ganzen Zahl beginnt. Führende {{Glossary("whitespace")}} innerhalb dieses Arguments werden ignoriert.
- `radix` {{optional_inline}}

  - : Eine ganze Zahl zwischen `2` und `36`, die die _Basis_ (die Grundlage in mathematischen Zahlsystemen) der `string` darstellt. Sie wird in eine [32-Bit Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt; wenn sie nach der Umwandlung ungleich null und außerhalb des Bereichs von \[2, 36] liegt, gibt die Funktion immer `NaN` zurück. Wenn `0` oder nicht angegeben, wird die Basis auf der Grundlage des `string`-Wertes abgeleitet. Vorsicht — dies ist _nicht_ immer standardmäßig `10`! Die [Beschreibung unten](#beschreibung) erklärt ausführlicher, was passiert, wenn `radix` nicht angegeben wird.

### Rückgabewert

Eine aus der angegebenen `string` geparste ganze Zahl oder {{jsxref("NaN")}}, wenn

- die `radix` als 32-Bit-Ganzzahl kleiner als `2` oder größer als `36` ist oder
- das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen „Fließkommazahlen“ und „ganzen Zahlen“. `parseInt()` und [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) unterscheiden sich nur in ihrem Analyseverhalten, aber nicht unbedingt in ihren Rückgabewerten. Zum Beispiel würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die Funktion `parseInt` [wandelt ihr erstes Argument in eine Zeichenkette um](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), analysiert diese Zeichenkette und gibt dann eine ganze Zahl oder `NaN` zurück.

Wenn nicht `NaN`, ist der Rückgabewert die ganze Zahl, die das erste Argument als Zahl in der angegebenen `radix` darstellt. (Zum Beispiel konvertiert eine `radix` von `10` aus einer Dezimalzahl, `8` aus Oktal, `16` aus Hexadezimal und so weiter.)

Das Argument `radix` wird [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Wenn es nicht bereitgestellt wird oder wenn der Wert 0, `NaN` oder `Infinity` ist (`undefined` wird in `NaN` umgewandelt), nimmt JavaScript Folgendes an:

1. Wenn die Eingabe-`string`, mit entferntem führenden Leerraum und möglichen `+`/`-` Zeichen, mit `0x` oder `0X` (eine Null, gefolgt von einem Kleinbuchstaben oder Großbuchstaben X) beginnt, wird angenommen, dass die `radix` `16` ist und der Rest der Zeichenfolge als Hexadezimalzahl geparst wird.
2. Wenn die Eingabe-`string` mit einem anderen Wert beginnt, ist die `radix` `10` (dezimal).

> [!NOTE]
> Andere Präfixe wie `0b`, die in [Zahlliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#binary) gültig sind, werden von `parseInt()` wie normale Ziffern behandelt. `parseInt()` behandelt Zeichenfolgen, die mit einem `0`-Zeichen beginnen, ebenfalls nicht als Oktalwerte. Das einzige Präfix, das `parseInt()` erkennt, ist `0x` oder `0X` für Hexadezimalwerte — alles andere wird als Dezimalwert geparst, wenn `radix` fehlt. [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) oder [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) können stattdessen verwendet werden, um diese Präfixe zu parsen.

Wenn die Radix `16` ist, erlaubt `parseInt()`, dass die Zeichenkette optional mit `0x` oder `0X` nach dem optionalen Vorzeichenzeichen (`+`/`-`) versehen wird.

Wenn der Radixwert (falls erforderlich) nicht im Bereich \[2, 36] (einschließlich) liegt, gibt `parseInt` `NaN` zurück.

Für Radices über `10` kennzeichnen Buchstaben des englischen Alphabets Zahlen größer als `9`. Zum Beispiel werden für Hexadezimalzahlen (Basis `16`) `A` bis `F` verwendet. Die Buchstaben sind nicht case-sensitiv.

`parseInt` versteht genau zwei Vorzeichen: `+` für positiv und `-` für negativ. Dies geschieht als ein erster Schritt im Parsing, nachdem Leerzeichen entfernt wurden. Wenn keine Vorzeichen gefunden werden, bewegt sich der Algorithmus zum nächsten Schritt; andernfalls wird das Vorzeichen entfernt, und die Zahlenanalyse wird auf den Rest der Zeichenkette angewendet.

Wenn `parseInt` auf ein Zeichen trifft, das keine Zahl in der angegebenen `radix` ist, ignoriert es dieses und alle folgenden Zeichen und gibt den bis zu diesem Punkt geparsten Ganzzahlwert zurück. Zum Beispiel, obwohl `1e3` technisch gesehen eine ganze Zahl codiert (und durch [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) korrekt zur ganzen Zahl `1000` geparst wird), gibt `parseInt("1e3", 10)` `1` zurück, weil `e` ist keine gültige Ziffer in Basis 10. Da `.` ebenfalls keine Ziffer ist, wird der Rückgabewert immer eine ganze Zahl sein.

Wenn das erste Zeichen nicht mit der in der Verwendung stehenden Radix in eine Zahl umgewandelt werden kann, gibt `parseInt` `NaN` zurück. Führende Leerzeichen sind erlaubt.

Für arithmetische Zwecke ist der Wert `NaN` keine Zahl in irgendeiner Radix. Sie können die Funktion [`Number.isNaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) aufrufen, um festzustellen, ob das Ergebnis von `parseInt` `NaN` ist. Wenn `NaN` an arithmetische Operationen weitergegeben wird, ist das Ergebnis der Operation ebenfalls `NaN`.

Da große Zahlen das Zeichen `e` in ihrer String-Darstellung verwenden (z.B. `6.022e23` für 6,022 × 10<sup>23</sup>), führt die Verwendung von `parseInt` zum Trunkieren von Zahlen zu unerwarteten Ergebnissen, wenn sie auf sehr große oder sehr kleine Zahlen angewendet wird. `parseInt` sollte _nicht_ als Ersatz für {{jsxref("Math.trunc()")}} verwendet werden.

Um eine Zahl in ihre Zeichenkettenliteral in einer bestimmten Radix zu konvertieren, verwenden Sie [`thatNumber.toString(radix)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

Da `parseInt()` eine Zahl zurückgibt, kann es zu Präzisionsverlusten führen, wenn die durch den String dargestellte ganze Zahl [außerhalb des sicheren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) liegt. Die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) unterstützt das genaue Parsen von Ganzzahlen beliebiger Länge, indem sie einen {{jsxref("BigInt")}} zurückgibt.

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
parseInt("Hello", 8); // Keine Zahl
parseInt("546", 2); // Ziffern außer 0 oder 1 sind für binäre Radix ungültig
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

`parseInt()` handhabt keine {{jsxref("BigInt")}}-Werte. Es stoppt am `n`-Zeichen und behandelt die vorhergehende Zeichenkette als normale Ganzzahl, mit möglichem Präzisionsverlust.

```js example-bad
parseInt("900719925474099267n");
// 900719925474099300
```

Sie sollten die Zeichenkette stattdessen ohne das nachgestellte `n`-Zeichen an die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` funktioniert nicht mit [numerischen Trennern](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators):

```js example-bad
parseInt("123_456"); // 123
```

### Verwendung von parseInt() auf Nicht-Zeichenketten

`parseInt()` kann interessante Ergebnisse liefern, wenn es auf Nicht-Zeichenketten mit einer hohen Radix angewendet wird; beispielsweise `36` (was alle alphanumerischen Zeichen als gültige numerische Ziffern macht).

```js
parseInt(null, 36); // 1112745: Die Zeichenkette "null" ist 1112745 in Basis 36
parseInt(undefined, 36); // 86464843759093: Die Zeichenkette "undefined" ist 86464843759093 in Basis 36
```

Im Allgemeinen ist es eine schlechte Idee, `parseInt()` auf Nicht-Zeichenketten zu verwenden, insbesondere es als Ersatz für {{jsxref("Math.trunc()")}} zu verwenden. Es kann bei kleinen Zahlen funktionieren:

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

Es funktioniert jedoch nur, weil die Zeichenfolgenrepräsentation dieser Zahlen die einfache Bruchschreibweise verwendet (`"15.99"`, `"-15.1"`), wobei `parseInt()` beim Dezimalpunkt stoppt. Zahlen, die größer oder gleich 1e+21 oder kleiner oder gleich 1e-7 sind, verwenden eine wissenschaftliche Notation (`"1.5e+22"`, `"1.51e-8"`) in ihrer Zeichenfolgenrepräsentation, und `parseInt()` stoppt beim `e`-Zeichen oder Dezimalpunkt, der stets nach der ersten Ziffer kommt. Das bedeutet, für große und kleine Zahlen gibt `parseInt()` eine einstellige Ganzzahl zurück:

```js example-bad
parseInt(4.7 * 1e22, 10); // Sehr große Zahl wird zu 4
parseInt(0.00000000000434, 10); // Sehr kleine Zahl wird zu 4

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
