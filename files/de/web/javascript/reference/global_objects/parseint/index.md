---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: 0c3c464abb1422b0534a5e3f5e81e9bbae13544c
---

Die Funktion **`parseInt()`** analysiert ein String-Argument und gibt eine Ganzzahl mit der angegebenen [Basis](https://en.wikipedia.org/wiki/Radix) (der Basis eines mathematischen Zahlensystems) zurück.

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
  - : Ein String, der mit einer Ganzzahl beginnt. Vorangestellte {{Glossary("whitespace", "Leerraumzeichen")}} in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}
  - : Eine Ganzzahl zwischen `2` und `36`, die die _Basis_ (die Basis eines mathematischen Zahlensystems) von `string` angibt. Sie wird in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt. Wenn sie nach der Umwandlung nicht null ist und außerhalb des Bereichs \[2, 36] liegt, gibt die Funktion immer `NaN` zurück. Wenn sie `0` ist oder nicht angegeben wird, wird die Basis aus dem Wert von `string` abgeleitet. Beachten Sie: Der Standardwert ist dabei _nicht_ immer `10`! Die [Beschreibung unten](#beschreibung) erläutert genauer, was geschieht, wenn `radix` nicht angegeben wird.

### Rückgabewert

Eine aus dem angegebenen `string` gelesene Ganzzahl oder {{jsxref("NaN")}}, wenn

- `radix` als 32-Bit-Ganzzahl ungleich null und kleiner als `2` oder größer als `36` ist oder
- das erste Zeichen, das kein Leerraumzeichen ist, nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen „Gleitkommazahlen“ und „Ganzzahlen“. `parseInt()` und [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) unterscheiden sich nur darin, wie sie Eingaben analysieren, nicht aber zwangsläufig in ihren Rückgabewerten. Beispielsweise geben `parseInt("42")` und `parseFloat("42")` denselben Wert zurück: eine {{jsxref("Number")}} mit dem Wert 42.

## Beschreibung

Die Funktion `parseInt` [wandelt ihr erstes Argument in einen String um](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), analysiert diesen String und gibt anschließend eine Ganzzahl oder `NaN` zurück.

Ist der Rückgabewert nicht `NaN`, entspricht er der Ganzzahl, die sich ergibt, wenn das erste Argument als Zahl mit der angegebenen Basis `radix` interpretiert wird. (Beispielsweise wird bei `radix` `10` eine Dezimalzahl umgewandelt, bei `8` eine Oktalzahl, bei `16` eine Hexadezimalzahl und so weiter.)

Das Argument `radix` wird [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Wenn es nicht angegeben wird oder bei der Umwandlung `0`, `NaN` oder `Infinity` ergibt (`undefined` wird in `NaN` umgewandelt), geht JavaScript von Folgendem aus:

1. Wenn der eingegebene `string` nach dem Entfernen vorangestellter Leerraumzeichen und möglicher `+`- oder `-`-Vorzeichen mit `0x` oder `0X` beginnt (einer Null gefolgt von einem kleinen oder großen X), wird für `radix` der Wert `16` angenommen und der restliche String als Hexadezimalzahl analysiert.
2. Wenn der eingegebene `string` mit etwas anderem beginnt, ist die Basis `10` (dezimal).

> [!NOTE]
> Andere Präfixe wie `0b`, die in [Zahlenliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#binary) gültig sind, werden von `parseInt()` wie gewöhnliche Ziffern behandelt. `parseInt()` behandelt Strings, die mit dem Zeichen `0` beginnen, auch _nicht_ als Oktalwerte. Die einzigen Präfixe, die `parseInt()` erkennt, sind `0x` und `0X` für Hexadezimalwerte. Wenn `radix` fehlt, wird alles andere als Dezimalwert analysiert. Stattdessen können [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) oder [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) verwendet werden, um diese Präfixe zu verarbeiten.

Wenn die Basis `16` ist, erlaubt `parseInt()` nach einem optionalen Vorzeichen (`+`/`-`) ein optionales Präfix `0x` oder `0X` im String.

Wenn der Wert von `radix` (gegebenenfalls nach einer Umwandlung) ungleich null ist und nicht im Bereich \[2, 36] einschließlich der Grenzen liegt, gibt `parseInt` `NaN` zurück.

Bei Basen über `10` stehen Buchstaben des englischen Alphabets für Ziffern größer als `9`. Bei Hexadezimalzahlen (Basis `16`) werden beispielsweise `A` bis `F` verwendet. Dabei wird nicht zwischen Groß- und Kleinschreibung unterschieden.

`parseInt` erkennt genau zwei Vorzeichen: `+` für positiv und `-` für negativ. Die Prüfung auf ein Vorzeichen erfolgt zu Beginn der Analyse, nachdem Leerraumzeichen entfernt wurden. Wird kein Vorzeichen gefunden, fährt der Algorithmus mit dem nächsten Schritt fort. Andernfalls entfernt er das Vorzeichen und analysiert den restlichen String als Zahl.

Wenn `parseInt` im Eingabestring auf ein Zeichen trifft, das für die angegebene Basis `radix` keine gültige Ziffer ist, ignoriert es dieses und alle folgenden Zeichen. Es gibt dann die bis dahin gelesene Ganzzahl zurück. Beispielsweise gibt `parseInt("2", 2)` `NaN` zurück, weil `2` im binären Zahlensystem keine gültige Ziffer ist. Ebenso gibt `parseInt("1e3", 10)` `1` zurück, weil `e` zur Basis 10 keine gültige Ziffer ist – obwohl `1e3` technisch gesehen eine Ganzzahl darstellt (und von [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) korrekt als Ganzzahl `1000` gelesen wird). Da auch `.` keine Ziffer ist, ist der Rückgabewert immer eine Ganzzahl.

Wenn das erste Zeichen mit der verwendeten Basis nicht in eine Zahl umgewandelt werden kann, gibt `parseInt` `NaN` zurück. Vorangestellte Leerraumzeichen sind zulässig.

Für arithmetische Zwecke ist der Wert `NaN` in keiner Basis eine Zahl. Sie können die Funktion [`Number.isNaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) aufrufen, um festzustellen, ob das Ergebnis von `parseInt` `NaN` ist. Wird `NaN` in arithmetischen Operationen verwendet, ist auch deren Ergebnis `NaN`.

Da große Zahlen in ihrer String-Darstellung das Zeichen `e` verwenden (z. B. `6.022e23` für 6,022 × 10<sup>23</sup>), führt die Verwendung von `parseInt` zum Abschneiden von Nachkommastellen bei sehr großen oder sehr kleinen Zahlen zu unerwarteten Ergebnissen. `parseInt` sollte _nicht_ als Ersatz für {{jsxref("Math.trunc()")}} verwendet werden.

Um eine Zahl in ihre String-Darstellung mit einer bestimmten Basis umzuwandeln, verwenden Sie [`thatNumber.toString(radix)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

Da `parseInt()` eine Zahl zurückgibt, kann es zu einem Genauigkeitsverlust kommen, wenn die durch den String dargestellte Ganzzahl [außerhalb des sicheren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) liegt. Die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) kann Ganzzahlen beliebiger Länge genau verarbeiten, indem sie ein {{jsxref("BigInt")}} zurückgibt.

## Beispiele

### parseInt() verwenden

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

`parseInt()` verarbeitet {{jsxref("BigInt")}}-Werte nicht. Es stoppt beim Zeichen `n` und behandelt den vorangehenden String als gewöhnliche Ganzzahl, wobei ein Genauigkeitsverlust möglich ist.

```js example-bad
parseInt("900719925474099267n");
// 900719925474099300
```

Übergeben Sie den String stattdessen ohne das abschließende Zeichen `n` an die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt).

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` funktioniert nicht mit [numerischen Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators):

```js example-bad
parseInt("123_456"); // 123
```

### parseInt() mit Werten verwenden, die keine Strings sind

`parseInt()` kann interessante Ergebnisse liefern, wenn es auf Werte angewendet wird, die keine Strings sind, und dabei eine hohe Basis verwendet wird, beispielsweise `36` (bei der alle alphanumerischen Zeichen gültige Ziffern sind).

```js
parseInt(null, 36); // 1112745: The string "null" is 1112745 in base 36
parseInt(undefined, 36); // 86464843759093: The string "undefined" is 86464843759093 in base 36
```

Im Allgemeinen ist es keine gute Idee, `parseInt()` auf Werte anzuwenden, die keine Strings sind – insbesondere nicht als Ersatz für {{jsxref("Math.trunc()")}}. Bei kleinen Zahlen kann es funktionieren:

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

Das funktioniert allerdings nur zufällig, weil die String-Darstellung dieser Zahlen die übliche Dezimalschreibweise (`"15.99"`, `"-15.1"`) verwendet, bei der `parseInt()` am Dezimalpunkt stoppt. Endliche Zahlen ungleich null mit einem Absolutwert größer oder gleich 1e+21 oder kleiner als 1e-6 verwenden in ihrer String-Darstellung die Exponentialschreibweise (`"1.5e+22"`, `"1.51e-8"`). `parseInt()` stoppt dann beim Zeichen `e` oder beim Dezimalpunkt, die beide immer nach der ersten Ziffer stehen. Das bedeutet, dass `parseInt()` bei sehr großen und sehr kleinen Zahlen eine einstellige Ganzzahl zurückgibt:

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
