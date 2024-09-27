---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die **`parseInt()`**-Funktion analysiert ein Zeichenfolgenargument und gibt eine Ganzzahl der angegebenen [Basis](https://de.wikipedia.org/wiki/Zahlensystem) (die Basis in mathematischen Zahlensystemen) zurück.

{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}

## Syntax

```js-nolint
parseInt(string)
parseInt(string, radix)
```

### Parameter

- `string`
  - : Eine Zeichenfolge, die mit einer Ganzzahl beginnt. Vorangestellte [Leerzeichen](/de/docs/Glossary/whitespace) in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}

  - : Eine Ganzzahl zwischen `2` und `36`, die die _Basis_ (die Basis in mathematischen Zahlensystemen) der `string` darstellt. Sie wird in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) konvertiert; ist sie ungleich null und nach der Konvertierung außerhalb des Bereichs \[2, 36], gibt die Funktion immer `NaN` zurück. Wenn `0` oder nicht angegeben, wird die Basis basierend auf dem Wert von `string` inferiert. Seien Sie vorsichtig – dies wird _nicht_ immer standardmäßig auf `10` gesetzt! Die [Beschreibung unten](#beschreibung) erklärt ausführlicher, was passiert, wenn `radix` nicht angegeben wird.

### Rückgabewert

Eine aus der angegebenen `string` analysierte Ganzzahl oder {{jsxref("NaN")}}, wenn

- die `radix` als 32-Bit-Ganzzahl kleiner als `2` oder größer als `36` ist, oder
- das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen "Gleitkommazahlen" und "Ganzzahlen". `parseInt()` und [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) unterscheiden sich nur in ihrem Parsing-Verhalten, aber nicht unbedingt in ihren Rückgabewerten. Beispielsweise geben `parseInt("42")` und `parseFloat("42")` denselben Wert zurück: eine {{jsxref("Number")}} 42.

## Beschreibung

Die `parseInt`-Funktion [konvertiert ihr erstes Argument in eine Zeichenfolge](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), analysiert diese Zeichenfolge und gibt dann eine Ganzzahl oder `NaN` zurück.

Wenn nicht `NaN`, ist der Rückgabewert die Ganzzahl, die das erste Argument als Zahl in der angegebenen `radix` darstellt. (Beispielsweise konvertiert eine `radix` von `10` von einer Dezimalzahl, `8` von Oktal, `16` von Hexadezimal usw.)

Das `radix`-Argument wird [in eine Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Wenn es nicht angegeben wird oder der Wert zu 0, `NaN` oder `Infinity` wird (`undefined` wird zu `NaN` gezwungen), nimmt JavaScript Folgendes an:

1. Wenn die Eingabe `string`, mit entfernten vorangestellten Leerzeichen und möglichen `+`/`-` Zeichen, mit `0x` oder `0X` (eine Null, gefolgt von einem kleinen oder großen X) beginnt, wird `radix` als `16` angenommen und der Rest der Zeichenfolge als Hexadezimalzahl geparst.
2. Wenn die Eingabe `string` mit einem anderen Wert beginnt, ist die Basis `10` (dezimal).

> [!NOTE]
> Andere Präfixe wie `0b`, die in [Zahlenliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#binary) gültig sind, werden von `parseInt()` als normale Ziffern behandelt. `parseInt()` behandelt Zeichenfolgen, die mit einem `0`-Zeichen beginnen, auch nicht als oktale Werte. Das einzige Präfix, das `parseInt()` erkennt, ist `0x` oder `0X` für Hexadezimalwerte – alles andere wird als Dezimalwert geparst, wenn `radix` fehlt. [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) oder [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) können stattdessen verwendet werden, um diese Präfixe zu parsen.

Wenn die Basis `16` ist, erlaubt `parseInt()`, dass die Zeichenfolge optional mit `0x` oder `0X` nach dem optionalen Vorzeichen (`+`/`-`) beginnt.

Wenn der radix-Wert (bei Bedarf erzwungen) nicht im Bereich \[2, 36] (einschließlich) liegt, gibt `parseInt` `NaN` zurück.

Für Basen über `10` stehen Buchstaben des englischen Alphabets für Zahlen größer als `9`. Zum Beispiel werden bei hexadezimalen Zahlen (Basis `16`) `A` bis `F` verwendet. Die Buchstaben sind nicht zwischen Groß- und Kleinschreibung zu unterscheiden.

`parseInt` versteht genau zwei Zeichen: `+` für positiv und `-` für negativ. Dies erfolgt als erster Schritt beim Parsen, nachdem Leerzeichen entfernt wurden. Wenn keine Vorzeichen gefunden werden, geht der Algorithmus zum nächsten Schritt über; andernfalls entfernt er das Vorzeichen und führt das Zahlenparsing auf dem Rest der Zeichenfolge aus.

Wenn `parseInt` auf ein Zeichen trifft, das in der angegebenen `radix` keine Zahl ist, ignoriert es dieses und alle nachfolgenden Zeichen und gibt den bis zu diesem Punkt geparsten Ganzzahlenwert zurück. Zum Beispiel kodiert `1e3` technisch eine Ganzzahl (und wird korrekt von [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) in die Ganzzahl `1000` geparst), `parseInt("1e3", 10)` gibt jedoch `1` zurück, da `e` in der Basis 10 keine gültige Zahl ist. Da `.` auch keine Zahl ist, wird der Rückgabewert immer eine Ganzzahl sein.

Wenn das erste Zeichen nicht mit der in Gebrauch befindlichen Basis in eine Zahl umgewandelt werden kann, gibt `parseInt` `NaN` zurück. Ein vorangestelltes Leerzeichen ist erlaubt.

Für arithmetische Zwecke ist der Wert `NaN` in keiner Basis eine Zahl. Sie können die Funktion [`Number.isNaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) aufrufen, um festzustellen, ob das Ergebnis von `parseInt` `NaN` ist. Wenn `NaN` an arithmetische Operationen weitergegeben wird, ist das Ergebnis der Operation ebenfalls `NaN`.

Da große Zahlen den `e`-Buchstaben in ihrer Zeichenfolgen-Darstellung verwenden (z.B. `6.022e23` für 6.022 × 10<sup>23</sup>), führt die Verwendung von `parseInt`, um Zahlen zu kürzen, zu unerwarteten Ergebnissen, wenn sie auf sehr große oder sehr kleine Zahlen angewendet werden. `parseInt` sollte _nicht_ als Ersatz für {{jsxref("Math.trunc()")}} verwendet werden.

Um eine Zahl in ihre Zeichenfolgen-Repräsentation in einer bestimmten Basis zu konvertieren, verwenden Sie [`thatNumber.toString(radix)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

Da `parseInt()` eine Zahl zurückgibt, kann es zu einem Präzisionsverlust kommen, wenn die durch die Zeichenfolge dargestellte Ganzzahl [außerhalb des sicheren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) liegt. Die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) unterstützt das präzise Parsen von Ganzzahlen beliebiger Länge, indem sie ein {{jsxref("BigInt")}} zurückgibt.

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

Sie sollten die Zeichenfolge stattdessen der Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben, ohne das nachgestellte `n`-Zeichen.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` funktioniert nicht mit [Zahlenseparatoren](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators):

```js example-bad
parseInt("123_456"); // 123
```

### Verwendung von parseInt() auf Nicht-Zeichenfolgen

`parseInt()` kann interessante Ergebnisse liefern, wenn es auf Nicht-Zeichenfolgen in Kombination mit einer hohen Basis angewendet wird; zum Beispiel `36` (wodurch alle alphanumerischen Zeichen gültige Ziffern werden).

```js
parseInt(null, 36); // 1112745: The string "null" is 1112745 in base 36
parseInt(undefined, 36); // 86464843759093: The string "undefined" is 86464843759093 in base 36
```

Im Allgemeinen ist es keine gute Idee, `parseInt()` auf Nicht-Zeichenfolgen anzuwenden, insbesondere nicht als Ersatz für {{jsxref("Math.trunc()")}}. Es kann bei kleinen Zahlen funktionieren:

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

Dies funktioniert jedoch nur, weil die Zeichenfolgen-Darstellung dieser Zahlen einfache Bruchnotation verwendet (`"15.99"`, `"-15.1"`), bei der `parseInt()` beim Dezimalpunkt stoppt. Zahlen größer oder gleich 1e+21 oder kleiner oder gleich 1e-7 verwenden exponentielle Notation (`"1.5e+22"`, `"1.51e-8"`) in ihrer Zeichenfolgen-Darstellung, und `parseInt()` wird am `e`-Zeichen oder Dezimalpunkt stoppen, der immer nach der ersten Ziffer kommt. Das bedeutet, dass `parseInt()` bei großen und kleinen Zahlen eine einstellige Ganzzahl zurückgeben wird:

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
