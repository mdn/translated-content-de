---
title: String.prototype.normalize()
short-title: normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`normalize()`**-Methode von {{jsxref("String")}}-Werten gibt die Unicode-Normalisierungsform dieses Strings zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.normalize()", "taller")}}

```js interactive-example
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

console.log(`${name1}, ${name2}`);
// Expected output: "Amélie, Amélie"
console.log(name1 === name2);
// Expected output: false
console.log(name1.length === name2.length);
// Expected output: false

const name1NFC = name1.normalize("NFC");
const name2NFC = name2.normalize("NFC");

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true
```

## Syntax

```js-nolint
normalize()
normalize(form)
```

### Parameter

- `form` {{optional_inline}}
  - : Einer der Werte `"NFC"`, `"NFD"`, `"NFKC"` oder
    `"NFKD"`, der die Unicode-Normalisierungsform angibt. Wenn ausgelassen oder
    {{jsxref("undefined")}}, wird `"NFC"` verwendet.

    Diese Werte haben folgende Bedeutungen:
    - `"NFC"`
      - : Kanonische Dekomposition, gefolgt von kanonischer Komposition.
    - `"NFD"`
      - : Kanonische Dekomposition.
    - `"NFKC"`
      - : Kompatibilitätsdekomposition, gefolgt von kanonischer Komposition.
    - `"NFKD"`
      - : Kompatibilitätsdekomposition.

### Rückgabewert

Ein String, der die Unicode-Normalisierungsform des gegebenen Strings enthält.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `form` nicht einer der oben angegebenen Werte ist.

## Beschreibung

Unicode weist jedem Zeichen einen einzigartigen numerischen Wert, einen _Codepunkt_, zu. Zum Beispiel wird der Codepunkt für `"A"` als U+0041 angegeben. Manchmal können jedoch mehr als ein Codepunkt oder eine Sequenz von Codepunkten dasselbe abstrakte Zeichen darstellen – das Zeichen `"ñ"` zum Beispiel kann durch einen der folgenden dargestellt werden:

- Der einzelne Codepunkt U+00F1.
- Der Codepunkt für `"n"` (U+006E) gefolgt von dem Codepunkt für die kombinierende Tilde (U+0303).

```js
const string1 = "\u00F1";
const string2 = "\u006E\u0303";

console.log(string1); // ñ
console.log(string2); // ñ
```

Da die Codepunkte jedoch unterschiedlich sind, wird die Zeichenfolgenvergleichung sie nicht als gleich behandeln. Und da die Anzahl der Codepunkte in jeder Version unterschiedlich ist, haben sie sogar unterschiedliche Längen.

```js
const string1 = "\u00F1"; // ñ
const string2 = "\u006E\u0303"; // ñ

console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2
```

Die `normalize()`-Methode hilft, dieses Problem zu lösen, indem sie einen String in eine normalisierte Form konvertiert, die für alle Sequenzen von Codepunkten, die dasselbe Zeichen darstellen, einheitlich ist. Es gibt zwei Hauptnormalisierungsformen, eine basierend auf **kanonischer Äquivalenz** und die andere auf **Kompatibilität**.

### Kanonische Äquivalenznormalisierung

In Unicode haben zwei Sequenzen von Codepunkten kanonische Äquivalenz, wenn sie dieselben abstrakten Zeichen darstellen und optisch und vom Verhalten her immer gleich erscheinen sollten (zum Beispiel sollten sie immer auf die gleiche Weise sortiert werden).

Sie können `normalize()` mit den Argumenten `"NFD"` oder `"NFC"` verwenden, um eine Form des Strings zu erzeugen, die für alle kanonisch äquivalenten Strings gleich ist. Im folgenden Beispiel normalisieren wir zwei Darstellungen des Zeichens `"ñ"`:

```js
let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

string1 = string1.normalize("NFD");
string2 = string2.normalize("NFD");

console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2
```

#### Zusammengesetzte und zerlegte Formen

Beachten Sie, dass die Länge der normalisierten Form unter `"NFD"` `2` ist. Das liegt daran, dass `"NFD"` Ihnen die **zerlegte** Version der kanonischen Form gibt, in der einzelne Codepunkte in mehrere kombinierende aufgeteilt werden. Die zerlegte kanonische Form für `"ñ"` ist `"\u006E\u0303"`.

Sie können `"NFC"` angeben, um die **zusammengesetzte** kanonische Form zu erhalten, in der mehrere Codepunkte durch einzelne Codepunkte ersetzt werden, wenn möglich. Die zusammengesetzte kanonische Form für `"ñ"` ist `"\u00F1"`:

```js
let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

string1 = string1.normalize("NFC");
string2 = string2.normalize("NFC");

console.log(string1 === string2); // true
console.log(string1.length); // 1
console.log(string2.length); // 1
console.log(string2.codePointAt(0).toString(16)); // f1
```

### Kompatibilitätsnormalisierung

In Unicode sind zwei Sequenzen von Codepunkten kompatibel, wenn sie dieselben abstrakten Zeichen darstellen und in einigen — aber nicht unbedingt allen — Anwendungen gleich behandelt werden sollten.

Alle kanonisch äquivalenten Sequenzen sind ebenfalls kompatibel, aber nicht umgekehrt.

Zum Beispiel:

- Der Codepunkt U+FB00 stellt die {{Glossary("Ligature", "Ligatur")}} `"ﬀ"` dar. Er ist kompatibel mit zwei aufeinander folgenden U+0066 Codepunkten (`"ff"`).
- Der Codepunkt U+24B9 stellt das Symbol `"Ⓓ"` dar. Er ist kompatibel mit dem U+0044 Codepunkt (`"D"`).

In einigen Aspekten (wie Sortierung) sollten sie als äquivalent behandelt werden – in anderen (wie der visuellen Darstellung) jedoch nicht, daher sind sie nicht kanonisch äquivalent.

Sie können `normalize()` mit den Argumenten `"NFKD"` oder `"NFKC"` verwenden, um eine Form des Strings zu erzeugen, die für alle kompatiblen Strings gleich ist:

```js
let string1 = "\uFB00";
let string2 = "\u0066\u0066";

console.log(string1); // ﬀ
console.log(string2); // ff
console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2

string1 = string1.normalize("NFKD");
string2 = string2.normalize("NFKD");

console.log(string1); // ff <- visual appearance changed
console.log(string2); // ff
console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2
```

Bei der Anwendung der Kompatibilitätsnormalisierung ist es wichtig zu überlegen, was Sie mit den Zeichenfolgen vorhaben, da die normalisierte Form nicht für alle Anwendungen geeignet sein könnte. Im obigen Beispiel ist die Normalisierung für die Suche geeignet, da sie einem Benutzer ermöglicht, die Zeichenfolge durch die Suche nach `"f"` zu finden. Aber sie mag für die Anzeige nicht geeignet sein, da die visuelle Darstellung unterschiedlich ist.

Wie bei der kanonischen Normalisierung können Sie nach zerlegten oder zusammengesetzten kompatiblen Formen fragen, indem Sie `"NFKD"` oder `"NFKC"` entsprechend übergeben.

## Beispiele

### Verwendung von normalize()

```js
// Initial string

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
const str = "\u1E9B\u0323";

// Canonically-composed form (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize("NFC"); // '\u1E9B\u0323'
str.normalize(); // same as above

// Canonically-decomposed form (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFD"); // '\u017F\u0323\u0307'

// Compatibly-composed (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize("NFKC"); // '\u1E69'

// Compatibly-decomposed (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFKD"); // '\u0073\u0323\u0307'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Unicode Standard Annex #15, Unicode Normalization Forms](https://www.unicode.org/reports/tr15/)
- [Unicode-Äquivalenz](https://en.wikipedia.org/wiki/Unicode_equivalence) auf Wikipedia
