---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

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

  - : Einer von `"NFC"`, `"NFD"`, `"NFKC"` oder
    `"NFKD"`, der die Unicode-Normalisierungsform angibt. Wenn weggelassen oder
    {{jsxref("undefined")}}, wird `"NFC"` verwendet.

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

Ein String, der die Unicode-Normalisierungsform des gegebenen Strings enthält.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `form` nicht einer der oben angegebenen Werte ist.

## Beschreibung

Unicode weist jedem Zeichen einen eindeutigen numerischen Wert zu, der als _Codepunkt_ bezeichnet wird. Zum Beispiel wird der Codepunkt für `"A"` als U+0041 angegeben. Manchmal können jedoch mehr als ein Codepunkt oder eine Folge von Codepunkten dasselbe abstrakte Zeichen darstellen — das Zeichen `"ñ"` kann z.B. entweder durch:

- Den einzelnen Codepunkt U+00F1.
- Den Codepunkt für `"n"` (U+006E) gefolgt von dem Codepunkt für die kombinierte Tilde (U+0303).

```js
const string1 = "\u00F1";
const string2 = "\u006E\u0303";

console.log(string1); // ñ
console.log(string2); // ñ
```

Da die Codepunkte unterschiedlich sind, werden sie bei einem String-Vergleich nicht als gleich betrachtet. Und da die Anzahl der Codepunkte in jeder Version unterschiedlich ist, haben sie sogar unterschiedliche Längen.

```js
const string1 = "\u00F1"; // ñ
const string2 = "\u006E\u0303"; // ñ

console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2
```

Die `normalize()`-Methode hilft, dieses Problem zu lösen, indem sie einen String in eine normale Form umwandelt, die für alle Folgen von Codepunkten, die dieselben Zeichen darstellen, gleich ist. Es gibt zwei Hauptnormalisierungsformen, eine basierend auf **kanonischer Äquivalenz** und die andere auf **Kompatibilität**.

### Kanonische Äquivalenz-Normalisierung

In Unicode gelten zwei Folgen von Codepunkten als kanonisch äquivalent, wenn sie dieselben abstrakten Zeichen darstellen und immer dasselbe visuelle Erscheinungsbild und Verhalten haben sollten (zum Beispiel sollten sie immer auf dieselbe Weise sortiert werden).

Sie können `normalize()` mit den Argumenten `"NFD"` oder `"NFC"` verwenden, um eine Form des Strings zu erzeugen, die für alle kanonisch äquivalenten Strings gleich sein wird. Im folgenden Beispiel normalisieren wir zwei Darstellungen des Zeichens `"ñ"`:

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

Sie können `"NFC"` angeben, um die **zusammengesetzte** kanonische Form zu erhalten, in der mehrere Codepunkte, wo möglich, durch einzelne Codepunkte ersetzt werden. Die zusammengesetzte kanonische Form für `"ñ"` ist `"\u00F1"`:

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

In Unicode sind zwei Folgen von Codepunkten kompatibel, wenn sie dieselben abstrakten Zeichen darstellen und in einigen — aber nicht unbedingt allen — Anwendungen gleich behandelt werden sollten.

Alle kanonisch äquivalenten Folgen sind auch kompatibel, aber nicht umgekehrt.

Zum Beispiel:

- Der Codepunkt U+FB00 stellt die {{Glossary("Ligature", "Ligatur")}} `"ﬀ"` dar. Er ist kompatibel mit zwei aufeinanderfolgenden U+0066 Codepunkten (`"ff"`).
- Der Codepunkt U+24B9 stellt das Symbol `"Ⓓ"` dar. Es ist kompatibel mit dem U+0044 Codepunkt (`"D"`).

In einigen Hinblicken (wie Sortierung) sollten sie als gleichwertig behandelt werden — und in einigen (wie bei der visuellen Erscheinung) sollten sie es nicht, weshalb sie nicht kanonisch äquivalent sind.

Sie können `normalize()` mit den Argumenten `"NFKD"` oder `"NFKC"` verwenden, um eine Form des Strings zu erzeugen, die für alle kompatiblen Zeichenfolgen gleich ist:

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

Wenn Sie Kompatibilitätsnormalisierung anwenden, ist es wichtig, zu überlegen, was Sie mit den Strings vorhaben, da die normalisierte Form möglicherweise nicht für alle Anwendungen geeignet ist. Im obigen Beispiel ist die Normalisierung für die Suche geeignet, da sie es einem Benutzer ermöglicht, den String durch die Suche nach `"f"` zu finden. Für die Anzeige könnte sie jedoch unpassend sein, da das visuelle Erscheinungsbild unterschiedlich ist.

Wie bei der kanonischen Normalisierung können Sie durch Übergabe von `"NFKD"` oder `"NFKC"` nach zerlegten oder zusammengesetzten kompatiblen Formen fragen.

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
- [Unicode-Äquivalenz](https://de.wikipedia.org/wiki/Unicode-%C3%84quivalenz) auf Wikipedia
