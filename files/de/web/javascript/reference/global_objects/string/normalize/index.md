---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`normalize()`**-Methode von {{jsxref("String")}}-Werten gibt die Unicode-Normalisierungsform dieses Strings zurück.

{{InteractiveExample("JavaScript Demo: String.normalize()", "taller")}}

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
    `"NFKD"`, der die Unicode-Normalisierungsform angibt. Falls ausgelassen oder
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

Ein String, der die Unicode-Normalisierungsform des angegebenen Strings enthält.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `form` keiner der oben genannten Werte ist.

## Beschreibung

Unicode weist jedem Zeichen einen eindeutigen numerischen Wert, genannt _Codepunkt_, zu. Zum Beispiel entspricht der Codepunkt für `"A"` U+0041. Es kann jedoch vorkommen, dass mehr als ein Codepunkt oder eine Codepunkt-Sequenz dasselbe abstrakte Zeichen repräsentieren — das Zeichen `"ñ"` kann zum Beispiel durch eine der folgenden Möglichkeiten dargestellt werden:

- Der einzelne Codepunkt U+00F1.
- Der Codepunkt für `"n"` (U+006E) gefolgt vom Codepunkt für das kombinierende Tilde (U+0303).

```js
const string1 = "\u00F1";
const string2 = "\u006E\u0303";

console.log(string1); // ñ
console.log(string2); // ñ
```

Da die Codepunkte jedoch unterschiedlich sind, behandelt ein String-Vergleich sie nicht als gleich. Und da die Anzahl der Codepunkte in jeder Version unterschiedlich ist, haben sie sogar unterschiedliche Längen.

```js
const string1 = "\u00F1"; // ñ
const string2 = "\u006E\u0303"; // ñ

console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2
```

Die `normalize()`-Methode hilft, dieses Problem zu lösen, indem ein String in eine Normalisierungsform umgewandelt wird, die für alle Sequenzen von Codepunkten, die dieselben Zeichen darstellen, einheitlich ist. Es gibt zwei Hauptnormalisierungsformen, eine basierend auf **kanonischer Äquivalenz** und die andere auf **Kompatibilität**.

### Normalisierung der kanonischen Äquivalenz

In Unicode haben zwei Sequenzen von Codepunkten eine kanonische Äquivalenz, wenn sie dieselben abstrakten Zeichen darstellen und immer dasselbe visuelle Erscheinungsbild und Verhalten haben sollten (zum Beispiel sollten sie immer gleich sortiert werden).

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

Beachten Sie, dass die Länge der normalisierten Form unter `"NFD"` `2` ist. Das liegt daran, dass `"NFD"` die **zerlegte** Version der kanonischen Form liefert, in der einzelne Codepunkte in mehrere kombiniert werden. Die zerlegte kanonische Form für `"ñ"` ist `"\u006E\u0303"`.

Sie können `"NFC"` angeben, um die **zusammengesetzte** kanonische Form zu erhalten, in der, wenn möglich, mehrere Codepunkte in einzelne Codepunkte umgewandelt werden. Die zusammengesetzte kanonische Form für `"ñ"` ist `"\u00F1"`:

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

### Normalisierung der Kompatibilität

In Unicode sind zwei Sequenzen von Codepunkten kompatibel, wenn sie dieselben abstrakten Zeichen darstellen und in manchen — aber nicht unbedingt allen — Anwendungen gleich behandelt werden sollten.

Alle kanonisch äquivalenten Sequenzen sind auch kompatibel, aber nicht umgekehrt.

Beispielsweise:

- Der Codepunkt U+FB00 repräsentiert die {{Glossary("Ligature", "Ligatur")}} `"ﬀ"`. Sie ist kompatibel mit zwei aufeinanderfolgenden U+0066-Codepunkten (`"ff"`).
- Der Codepunkt U+24B9 repräsentiert das Symbol
  `"Ⓓ"`.
  Es ist kompatibel mit dem U+0044-Codepunkt (`"D"`).

In einigen Aspekten (z. B. Sortierung) sollten sie als äquivalent behandelt werden, in anderen (z. B. visuelles Erscheinungsbild) jedoch nicht, weshalb sie nicht kanonisch äquivalent sind.

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

Bei der Anwendung der Kompatibilitäts-Normalisierung ist es wichtig zu berücksichtigen, was Sie mit den Strings beabsichtigen, da die normalisierte Form möglicherweise nicht für alle Anwendungen geeignet ist. Im obigen Beispiel ist die Normalisierung für die Suche geeignet, da sie es einem Benutzer ermöglicht, den String durch Eingabe von `"f"` zu finden. Für die Anzeige könnte sie jedoch ungeeignet sein, da das visuelle Erscheinungsbild unterschiedlich ist.

Wie bei der kanonischen Normalisierung können Sie zerlegte oder zusammengesetzte kompatible Formen anfordern, indem Sie `"NFKD"` bzw. `"NFKC"` übergeben.

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
