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

  - : Einer von `"NFC"`, `"NFD"`, `"NFKC"` oder
    `"NFKD"`, der die Unicode-Normalisierungsform angibt. Wenn weggelassen oder
    {{jsxref("undefined")}}, wird `"NFC"` verwendet.

    Diese Werte haben folgende Bedeutungen:

    - `"NFC"`
      - : Kanonische Dekomposition, gefolgt von kanonischer Komposition.
    - `"NFD"`
      - : Kanonische Dekomposition.
    - `"NFKC"`
      - : Kompatibilitäts-Dekomposition, gefolgt von kanonischer Komposition.
    - `"NFKD"`
      - : Kompatibilitäts-Dekomposition.

### Rückgabewert

Ein String, der die Unicode-Normalisierungsform des gegebenen Strings enthält.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `form` nicht einer der oben angegebenen Werte ist.

## Beschreibung

Unicode weist jedem Zeichen einen einzigartigen numerischen Wert zu, der als _Codepunkt_ bezeichnet wird. Zum Beispiel wird der Codepunkt für `"A"` als U+0041 angegeben. Es kann jedoch vorkommen, dass mehr als ein Codepunkt oder eine Sequenz von Codepunkten dasselbe abstrakte Zeichen darstellen können – das Zeichen `"ñ"` kann beispielsweise durch eines der folgenden dargestellt werden:

- Der einzelne Codepunkt U+00F1.
- Der Codepunkt für `"n"` (U+006E), gefolgt von dem Codepunkt für die kombinierende Tilde (U+0303).

```js
const string1 = "\u00F1";
const string2 = "\u006E\u0303";

console.log(string1); // ñ
console.log(string2); // ñ
```

Da die Codepunkte jedoch unterschiedlich sind, wird der Stringvergleich sie nicht als gleich behandeln. Und da die Anzahl der Codepunkte in jeder Version unterschiedlich ist, haben sie sogar unterschiedliche Längen.

```js
const string1 = "\u00F1"; // ñ
const string2 = "\u006E\u0303"; // ñ

console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2
```

Die `normalize()`-Methode hilft, dieses Problem zu lösen, indem sie einen String in eine normalisierte Form umwandelt, die für alle Sequenzen von Codepunkten, die dieselben Zeichen darstellen, üblich ist. Es gibt zwei Hauptnormalisierungsformen, die eine basiert auf **kanonischer Äquivalenz** und die andere auf **Kompatibilität**.

### Kanonische Äquivalenz-Normalisierung

In Unicode haben zwei Sequenzen von Codepunkten kanonische Äquivalenz, wenn sie dieselben abstrakten Zeichen darstellen und immer die gleiche visuelle Erscheinung und das gleiche Verhalten haben sollten (zum Beispiel sollten sie immer auf die gleiche Weise sortiert werden).

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

Beachten Sie, dass die Länge der normalisierten Form unter `"NFD"` `2` ist. Das liegt daran, dass `"NFD"` Ihnen die **zerlegte** Version der kanonischen Form gibt, in der einzelne Codepunkte in mehrere kombinierende zerlegt werden. Die zerlegte kanonische Form für `"ñ"` ist `"\u006E\u0303"`.

Sie können `"NFC"` angeben, um die **zusammengesetzte** kanonische Form zu erhalten, in der mehrere Codepunkte nach Möglichkeit durch einzelne Codepunkte ersetzt werden. Die zusammengesetzte kanonische Form für `"ñ"` ist `"\u00F1"`:

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

In Unicode sind zwei Sequenzen von Codepunkten kompatibel, wenn sie dieselben abstrakten Zeichen darstellen und in einigen, aber nicht unbedingt in allen Anwendungen gleich behandelt werden sollten.

Alle kanonisch äquivalenten Sequenzen sind auch kompatibel, aber nicht umgekehrt.

Beispielsweise:

- Der Codepunkt U+FB00 stellt die [Ligatur](/de/docs/Glossary/Ligature) `"ﬀ"` dar. Er ist kompatibel mit zwei aufeinanderfolgenden U+0066-Codepunkten (`"ff"`).
- Der Codepunkt U+24B9 stellt das Symbol `"Ⓓ"` dar. Er ist kompatibel mit dem U+0044-Codepunkt (`"D"`).

In einigen Aspekten (wie etwa der Sortierung) sollten sie als gleichwertig behandelt werden — in anderen (wie der visuellen Erscheinung) nicht, daher sind sie nicht kanonisch äquivalent.

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

Bei der Anwendung der Kompatibilitätsnormalisierung ist es wichtig zu bedenken, was Sie mit den Strings beabsichtigen, da die normalisierte Form möglicherweise nicht für alle Anwendungen geeignet ist. Im obigen Beispiel ist die Normalisierung für die Suche geeignet, da sie es einem Benutzer ermöglicht, den String durch die Suche nach `"f"` zu finden. Sie ist jedoch möglicherweise nicht für die Anzeige geeignet, da die visuelle Darstellung unterschiedlich ist.

Wie bei der kanonischen Normalisierung können Sie durch Übergabe von `"NFKD"` oder `"NFKC"` zerlegte oder zusammengesetzte kompatible Formen anfordern.

## Beispiele

### Verwendung von normalize()

```js
// Anfangsstring

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
const str = "\u1E9B\u0323";

// Kanonisch-zusammengesetzte Form (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize("NFC"); // '\u1E9B\u0323'
str.normalize(); // gleich wie oben

// Kanonisch-zerlegte Form (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFD"); // '\u017F\u0323\u0307'

// Kompatibilitäts-zusammengesetzt (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize("NFKC"); // '\u1E69'

// Kompatibilitäts-zerlegt (NFKD)

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
