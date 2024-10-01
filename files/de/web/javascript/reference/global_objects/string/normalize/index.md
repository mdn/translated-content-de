---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`normalize()`**-Methode von {{jsxref("String")}}-Werten gibt die Unicode-Normalisierungsform dieses Strings zurück.

{{EmbedInteractiveExample("pages/js/string-normalize.html", "taller")}}

## Syntax

```js-nolint
normalize()
normalize(form)
```

### Parameter

- `form` {{optional_inline}}

  - : Eines von `"NFC"`, `"NFD"`, `"NFKC"` oder
    `"NFKD"`, das die Unicode-Normalisierungsform angibt. Wenn es weggelassen oder
    {{jsxref("undefined")}} ist, wird `"NFC"` verwendet.

    Diese Werte haben die folgenden Bedeutungen:

    - `"NFC"`
      - : Kanonische Dekomposition, gefolgt von kanonischer Komposition.
    - `"NFD"`
      - : Kanonische Dekomposition.
    - `"NFKC"`
      - : Kompatibilitäts-Dekomposition, gefolgt von kanonischer Komposition.
    - `"NFKD"`
      - : Kompatibilitäts-Dekomposition.

### Rückgabewert

Ein String, der die Unicode-Normalisierungsform des angegebenen Strings enthält.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `form` nicht eines der oben angegebenen Werte ist.

## Beschreibung

Unicode weist jedem Zeichen einen eindeutigen numerischen Wert zu, der als _Codepunkt_ bezeichnet wird. Zum Beispiel wird der Codepunkt für `"A"` als U+0041 angegeben. Manchmal können jedoch mehr als ein Codepunkt oder eine Sequenz von Codepunkten dasselbe abstrakte Zeichen darstellen — das Zeichen `"ñ"` kann beispielsweise durch einen der folgenden dargestellt werden:

- Der einzelne Codepunkt U+00F1.
- Der Codepunkt für `"n"` (U+006E), gefolgt vom Codepunkt für die kombinierende Tilde (U+0303).

```js
const string1 = "\u00F1";
const string2 = "\u006E\u0303";

console.log(string1); // ñ
console.log(string2); // ñ
```

Da die Codepunkte unterschiedlich sind, behandelt der Stringvergleich diese nicht als gleich. Und da die Anzahl der Codepunkte in jeder Version unterschiedlich ist, haben sie sogar unterschiedliche Längen.

```js
const string1 = "\u00F1"; // ñ
const string2 = "\u006E\u0303"; // ñ

console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2
```

Die `normalize()`-Methode hilft, dieses Problem zu lösen, indem sie einen String in eine normalisierte Form umwandelt, die für alle Sequenzen von Codepunkten, die dieselben Zeichen darstellen, gemeinsam ist. Es gibt zwei Hauptnormalisierungsformen, eine basierend auf der **kanonischen Äquivalenz** und die andere auf der **Kompatibilität**.

### Kanonische Äquivalenz-Normalisierung

In Unicode haben zwei Sequenzen von Codepunkten eine kanonische Äquivalenz, wenn sie dieselben abstrakten Zeichen darstellen und immer dasselbe visuelle Erscheinungsbild und Verhalten aufweisen sollten (zum Beispiel sollten sie immer in derselben Weise sortiert werden).

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

Beachten Sie, dass die Länge der normalisierten Form unter `"NFD"` `2` ist. Das liegt daran, dass `"NFD"` Ihnen die **zerlegte** Version der kanonischen Form gibt, in der einzelne Codepunkte in mehrere kombinierende gespalten werden. Die zerlegte kanonische Form für `"ñ"` ist `"\u006E\u0303"`.

Sie können `"NFC"` angeben, um die **zusammengesetzte** kanonische Form zu erhalten, in der mehrere Codepunkte durch einzelne Codepunkte ersetzt werden, wo möglich. Die zusammengesetzte kanonische Form für `"ñ"` ist `"\u00F1"`:

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

### Kompatibilitäts-Normalisierung

In Unicode sind zwei Sequenzen von Codepunkten kompatibel, wenn sie dieselben abstrakten Zeichen darstellen und möglicherweise in einigen Anwendungen gleich behandelt werden sollten — aber nicht unbedingt in allen.

Alle kanonisch äquivalenten Sequenzen sind auch kompatibel, aber nicht umgekehrt.

Zum Beispiel:

- Der Codepunkt U+FB00 stellt die {{Glossary("Ligature", "Ligatur")}} `"ﬀ"` dar. Es ist kompatibel
  mit zwei aufeinanderfolgenden U+0066 Codepunkten (`"ff"`).
- Der Codepunkt U+24B9 stellt das Symbol
  `"Ⓓ"` dar.
  Es ist kompatibel mit dem U+0044 Codepunkt (`"D"`).

In einigen Aspekten (wie Sortierung) sollten sie als gleichwertig behandelt werden — und in einigen (wie visuelle Erscheinung) nicht, daher sind sie nicht kanonisch äquivalent.

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

Bei der Anwendung der Kompatibilitäts-Normalisierung ist es wichtig zu überlegen, was Sie mit den Strings beabsichtigen, da die normalisierte Form möglicherweise nicht für alle Anwendungen geeignet ist. Im obigen Beispiel ist die Normalisierung für die Suche geeignet, da sie einem Benutzer ermöglicht, den String durch Eingabe von `"f"` zu finden. Aber es ist möglicherweise nicht für die Anzeige geeignet, da die visuelle Darstellung unterschiedlich ist.

Wie bei der kanonischen Normalisierung können Sie zwischen zerlegten oder zusammengesetzten kompatiblen Formen wählen, indem Sie `"NFKD"` bzw. `"NFKC"` angeben.

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
