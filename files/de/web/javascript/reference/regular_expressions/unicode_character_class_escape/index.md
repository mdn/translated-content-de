---
title: "Unicode-Zeichenklassen-Escape: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Ein **Unicode-Zeichenklassen-Escape** ist eine Art von [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), das mit einer durch eine Unicode-Eigenschaft festgelegten Menge von Zeichen übereinstimmt. Es wird nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Wenn das Flag [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) aktiviert ist, kann es auch mit Zeichenfolgen endlicher Länge übereinstimmen.

{{InteractiveExample("JavaScript Demo: Regex Unicode character class escape", "taller")}}

```js interactive-example
const sentence = "A ticket to 大阪 costs ¥2000 👌.";

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));
// Expected output: Array ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));
// Expected output: Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation));
// Expected output: Array ["¥", "."]
```

## Syntax

```regex
\p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value}
```

### Parameter

- `loneProperty`
  - : Ein einzelner Unicode-Eigenschaftsname oder -wert mit derselben Syntax wie `value`. Er gibt einen Wert für die Eigenschaft `General_Category` oder einen [binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties) an. Im Modus [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) kann es sich auch um eine [binäre Unicode-Eigenschaft von Zeichenfolgen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings) handeln.

    > [!NOTE]
    > Die [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values)-Syntax erlaubt es auch, den Eigenschaftsnamen `Script` wegzulassen. JavaScript unterstützt dies jedoch nicht, da `Script_Extensions` meist nützlicher ist als `Script`.

- `property`
  - : Ein Unicode-Eigenschaftsname. Er darf nur aus {{Glossary("ASCII", "ASCII")}}-Buchstaben (`A–Z`, `a–z`) und Unterstrichen (`_`) bestehen und muss einer der [nichtbinären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties) sein.
- `value`
  - : Ein Unicode-Eigenschaftswert. Er darf nur aus ASCII-Buchstaben (`A–Z`, `a–z`), Unterstrichen (`_`) und Ziffern (`0–9`) bestehen und muss einer der in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) aufgeführten unterstützten Werte sein.

## Beschreibung

`\p` und `\P` werden nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im nicht Unicode-bewussten Modus sind sie [Identity-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das Zeichen `p` beziehungsweise `P`.

Jedes Unicode-Zeichen besitzt eine Reihe von Eigenschaften, die es beschreiben. Beispielsweise hat das Zeichen [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) für die Eigenschaft `General_Category` den Wert `Lowercase_Letter` und für die Eigenschaft `Script` den Wert `Latn`. Mit den Escape-Sequenzen `\p` und `\P` können Sie Zeichen anhand ihrer Eigenschaften abgleichen. Beispielsweise stimmt `a` sowohl mit `\p{Lowercase_Letter}` (der Eigenschaftsname `General_Category` ist optional) als auch mit `\p{Script=Latn}` überein. `\P` erzeugt eine _Komplementklasse_, die aus Codepunkten ohne die angegebene Eigenschaft besteht.

Wenn das Flag [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) gesetzt ist, werden `\P`-Zeichenklassen in den Modi `u` und `v` leicht unterschiedlich behandelt. Im Modus `u` erfolgt das Case-Folding nach der Subtraktion, im Modus `v` davor. Genauer gesagt stimmt `\P{property}` im Modus `u` mit `caseFold(allCharacters - charactersWithProperty)` überein. Daher stimmt `/\P{Lowercase_Letter}/iu` weiterhin mit `"a"` überein, weil `A` kein `Lowercase_Letter` ist. Im Modus `v` stimmt `\P{property}` dagegen mit `caseFold(allCharacters) - caseFold(charactersWithProperty)` überein. Daher stimmt `/\P{Lowercase_Letter}/iv` nicht mit `"a"` überein, weil `A` nicht einmal zur Menge aller Zeichen nach dem Case-Folding gehört. Siehe auch [Komplementklassen und Abgleich ohne Beachtung der Groß- und Kleinschreibung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Um mehrere Eigenschaften zu kombinieren, verwenden Sie die mit dem Flag `v` verfügbare Syntax für die [Schnittmenge von Zeichenmengen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) oder lesen Sie den Abschnitt [Subtraktion und Schnittmenge von Mustern](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection).

Im Modus `v` kann `\p` mit einer Folge von Codepunkten übereinstimmen, die in Unicode als „Eigenschaften von Zeichenfolgen“ definiert sind. Das ist besonders bei Emojis nützlich, die häufig aus mehreren Codepunkten bestehen. `\P` kann jedoch nur das Komplement von Zeicheneigenschaften bilden.

> [!NOTE]
> Es gibt Pläne, die Unterstützung für Eigenschaften von Zeichenfolgen auch auf den Modus `u` zu übertragen.

## Beispiele

### Allgemeine Kategorien

Allgemeine Kategorien dienen dazu, Unicode-Zeichen zu klassifizieren. Unterkategorien ermöglichen eine genauere Einordnung. In Unicode-Eigenschafts-Escapes können sowohl Kurz- als auch Langformen verwendet werden.

Damit lassen sich Buchstaben, Zahlen, Symbole, Satzzeichen, Leerzeichen usw. abgleichen. Eine ausführlichere Liste der allgemeinen Kategorien finden Sie in der [Unicode-Spezifikation](https://unicode.org/reports/tr18/#General_Category_Property).

```js
// finding all the letters of a text
const story = "It's the Cheshire Cat: now I shall have somebody to talk to.";

// Most explicit form
story.match(/\p{General_Category=Letter}/gu);

// It is not mandatory to use the property name for General categories
story.match(/\p{Letter}/gu);

// This is equivalent (short alias):
story.match(/\p{L}/gu);

// This is also equivalent (disjunction of all the subcategories using short aliases)
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### Schriftsysteme und Erweiterungen von Schriftsystemen

Manche Sprachen verwenden unterschiedliche Schriftsysteme. Englisch und Spanisch werden beispielsweise in lateinischer Schrift geschrieben, während Arabisch und Russisch andere Schriftsysteme verwenden (arabische beziehungsweise kyrillische Schrift). Mit den Unicode-Eigenschaften `Script` und `Script_Extensions` können reguläre Ausdrücke Zeichen anhand des Schriftsystems abgleichen, in dem sie hauptsächlich verwendet werden (`Script`), beziehungsweise anhand aller Schriftsysteme, denen sie angehören (`Script_Extensions`).

Beispielsweise gehört `A` zum Schriftsystem `Latin` und `ε` zum Schriftsystem `Greek`.

```js
const mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias (ISO 15924 code) for the script
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Using the short name sc for the Script property
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

Weitere Einzelheiten finden Sie in der [Unicode-Spezifikation](https://unicode.org/reports/tr24/#Script), der [Tabelle der Schriftsysteme in der ECMAScript-Spezifikation](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values) und der [ISO-15924-Liste der Schriftsystem-Codes](https://unicode.org/iso15924/iso15924-codes.html).

Wenn ein Zeichen in einer begrenzten Anzahl von Schriftsystemen verwendet wird, stimmt die Eigenschaft `Script` nur mit dem „vorherrschenden“ Schriftsystem überein. Um Zeichen anhand eines „nicht vorherrschenden“ Schriftsystems abzugleichen, können Sie die Eigenschaft `Script_Extensions` verwenden (kurz `scx`).

```js
// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode-Eigenschafts-Escapes im Vergleich zu Zeichenklassen

In regulären JavaScript-Ausdrücken können Sie auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und insbesondere `\w` oder `\d` verwenden, um Buchstaben oder Ziffern abzugleichen. Diese Formen stimmen jedoch nur mit Zeichen aus dem _lateinischen_ Schriftsystem überein (genauer gesagt mit ASCII-Buchstaben, Ziffern und dem Unterstrich bei `\w` sowie mit ASCII-Ziffern bei `\d`). Wie [dieses Beispiel](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters) zeigt, können Zeichenklassen bei nichtlateinischem Text umständlich sein.

Kategorien von Unicode-Eigenschafts-Escapes decken wesentlich mehr Zeichen ab. `\p{Letter}` und `\p{Number}` funktionieren mit jedem Schriftsystem.

```js
// Trying to use ranges to avoid \w limitations:

const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u001F\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));

// Using Unicode property escapes instead
const regexpUPE = /\p{L}+/gu;
console.table(nonEnglishText.match(regexpUPE));
```

### Preise abgleichen

Das folgende Beispiel gleicht Preise in einer Zeichenfolge ab:

```js
function getPrices(str) {
  // Sc stands for "currency symbol"
  return [...str.matchAll(/\p{Sc}\s*[\d.,]+/gu)].map((match) => match[0]);
}

const str = `California rolls $6.99
Crunchy rolls $8.49
Shrimp tempura $10.99`;
console.log(getPrices(str)); // ["$6.99", "$8.49", "$10.99"]

const str2 = `US store $19.99
Europe store €18.99
Japan store ¥2000`;
console.log(getPrices(str2)); // ["$19.99", "€18.99", "¥2000"]
```

### Zeichenfolgen abgleichen

Mit dem Flag `v` kann `\p{…}` mithilfe einer Eigenschaft von Zeichenfolgen auch Zeichenfolgen abgleichen, die länger als ein Zeichen sein können:

```js
const flag = "🇺🇳";
console.log(flag.length); // 4 (two code points, each a surrogate pair)
console.log([...flag].length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

Mit `\P` können Sie dagegen keine „Zeichenfolge ohne eine bestimmte Eigenschaft“ abgleichen, da unklar ist, wie viele Zeichen dabei erfasst werden sollen.

```js-nolint example-bad
/\P{RGI_Emoji_Flag_Sequence}/v; // SyntaxError: Invalid regular expression: Invalid property name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden zu [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Alternative: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeicheneigenschaft](https://en.wikipedia.org/wiki/Unicode_character_property) auf Wikipedia
- [ES2018: RegExp Unicode property escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) von Dr. Axel Rauschmayer (2017)
- [Reguläre Unicode-Ausdrücke § Eigenschaften](https://unicode.org/reports/tr18/#Categories)
- [Unicode Utilities: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp-v-Flag mit Mengennotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
