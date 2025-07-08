---
title: "Unicode-Zeichenklassenflucht: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Ein **Unicode-Zeichenklassenflucht** ist eine Art von [Zeichenklassenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), die eine Menge von Zeichen, die durch eine Unicode-Eigenschaft spezifiziert sind, abgleicht. Sie wird nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag aktiviert ist, kann sie auch zum Abgleichen endlicher Zeichenfolgen verwendet werden.

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
  - : Ein alleinstehender Unicode-Eigenschaftsname oder -wert, der derselben Syntax wie `value` folgt. Er spezifiziert den Wert für die `General_Category`-Eigenschaft oder einen [binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties). Im [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Modus kann er auch eine [binäre Unicode-Eigenschaft von Zeichenfolgen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings) sein.

    > [!NOTE]
    > Die [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values) Syntax erlaubt es auch, den `Script` Eigenschaftsnamen wegzulassen, jedoch unterstützt JavaScript dies nicht, da meistens `Script_Extensions` nützlicher ist als `Script`.

- `property`
  - : Ein Unicode-Eigenschaftsname. Er muss aus {{Glossary("ASCII", "ASCII")}}-Buchstaben (`A–Z`, `a–z`) und Unterstrichen (`_`) bestehen und einer der [nicht-binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties) sein.
- `value`
  - : Ein Unicode-Eigenschaftswert. Er muss aus ASCII-Buchstaben (`A–Z`, `a–z`), Unterstrichen (`_`) und Ziffern (`0–9`) bestehen und muss einer der unterstützten Werte sein, die in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) aufgeführt sind.

## Beschreibung

`\p` und `\P` werden nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-unbewussten Modus sind sie [Identitätsfluchten](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das `p` oder `P` Zeichen.

Jedes Unicode-Zeichen hat eine Reihe von Eigenschaften, die es beschreiben. Zum Beispiel hat das Zeichen [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) die `General_Category`-Eigenschaft mit dem Wert `Lowercase_Letter` und die `Script`-Eigenschaft mit dem Wert `Latn`. Die Escape-Sequenzen `\p` und `\P` erlauben es Ihnen, ein Zeichen basierend auf seinen Eigenschaften abzugleichen. Zum Beispiel kann `a` durch `\p{Lowercase_Letter}` abgeglichen werden (der `General_Category`-Eigenschaftsname ist optional) sowie durch `\p{Script=Latn}`. `\P` erstellt eine _Komplementklasse_, die aus Codepunkten ohne die angegebene Eigenschaft besteht.

Wenn das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Flag gesetzt ist, werden `\P` Zeichenklassen in den `u` und `v` Modi leicht unterschiedlich behandelt. Im `u` Modus erfolgt das Case-Folding nach der Subtraktion; im `v` Modus erfolgt das Case-Folding vor der Subtraktion. Konkret bedeutet das, dass im `u` Modus `\P{property}` `caseFold(allCharacters - charactersWithProperty)` abgleicht. Das bedeutet, `/\P{Lowercase_Letter}/iu` trifft immer noch auf `"a"`, da `A` kein `Lowercase_Letter` ist. Im `v` Modus stimmt `\P{property}` mit `caseFold(allCharacters) - caseFold(charactersWithProperty)` überein. Das bedeutet, `/\P{Lowercase_Letter}/iv` trifft nicht auf `"a"`, da `A` nicht einmal in der Menge aller case-gefalteten Unicode-Zeichen enthalten ist. Siehe auch [Komplementklassen und nicht unterscheidende Übereinstimmung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Um mehrere Eigenschaften zu kombinieren, verwenden Sie die durch das `v` Flag aktivierte [Zeichenmengen-Schnittmennensyntax](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) oder sehen Sie sich [Musterabzug und Schnittmengen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) an.

Im `v` Modus kann `\p` eine Sequenz von Codepunkten abgleichen, die in Unicode als "Eigenschaften von Zeichenfolgen" definiert sind. Dies ist am nützlichsten für Emojis, die oft aus mehreren Codepunkten bestehen. `\P` kann jedoch nur Zeicheneigenschaften komplementieren.

> [!NOTE]
> Es gibt Pläne, das Feature der Eigenschaften von Zeichenfolgen auch auf den `u` Modus zu portieren.

## Beispiele

### Allgemeine Kategorien

Allgemeine Kategorien werden verwendet, um Unicode-Zeichen zu klassifizieren, und es gibt Unterkategorien, die eine genauere Kategorisierung ermöglichen. Es ist möglich, sowohl Kurz- als auch Langformen in Unicode-Eigenschaftsfluchten zu verwenden.

Sie können verwendet werden, um Buchstaben, Zahlen, Symbole, Satzzeichen, Leerzeichen usw. abzugleichen. Für eine ausführlichere Liste der allgemeinen Kategorien konsultieren Sie bitte die [Unicode-Spezifikation](https://unicode.org/reports/tr18/#General_Category_Property).

```js
// finding all the letters of a text
const story = "It's the Cheshire Cat: now I shall have somebody to talk to.";

// Most explicit form
story.match(/\p{General_Category=Letter}/gu);

// It is not mandatory to use the property name for General categories
story.match(/\p{Letter}/gu);

// This is equivalent (short alias):
story.match(/\p{L}/gu);

// This is also equivalent (conjunction of all the subcategories using short aliases)
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### Schriftsysteme und Erweiterungen von Schriftsystemen

Einige Sprachen verwenden unterschiedliche Schriftsysteme für ihre Schrift. Zum Beispiel werden Englisch und Spanisch mit dem lateinischen Schriftsystem geschrieben, während Arabisch und Russisch mit anderen Schriftsystemen (jeweils Arabisch und Kyrillisch) geschrieben werden. Die Unicode-Eigenschaften `Script` und `Script_Extensions` ermöglichen es regulären Ausdrücken, Zeichen je nach dem Schriftsystem, mit dem sie hauptsächlich verwendet werden (`Script`), oder dem Satz von Schriftsystemen, zu dem sie gehören (`Script_Extensions`), abzugleichen.

Zum Beispiel gehört `A` zum `Lateinischen` Schriftsystem und `ε` zum `Griechischen` Schriftsystem.

```js
const mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias (ISO 15924 code) for the script
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Using the short name sc for the Script property
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

Für weitere Details konsultieren Sie bitte die [Unicode-Spezifikation](https://unicode.org/reports/tr24/#Script), die [Tabelle der Schriftsysteme in der ECMAScript-Spezifikation](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values) und die [ISO 15924 Liste der Schriftsystem-Codes](https://unicode.org/iso15924/iso15924-codes.html).

Wenn ein Zeichen in einem begrenzten Satz von Schriftsystemen verwendet wird, stimmt die `Script`-Eigenschaft nur für das "vorherrschend" verwendete Schriftsystem überein. Wenn wir Zeichen basierend auf einem "nicht vorherrschenden" Schriftsystem abgleichen möchten, könnten wir die `Script_Extensions`-Eigenschaft (`Scx` als Kurzform) verwenden.

```js
// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode-Eigenschaftsfluchten vs. Zeichenklassen

Mit regulären JavaScript-Ausdrücken ist es auch möglich, [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) zu verwenden, insbesondere `\w` oder `\d`, um Buchstaben oder Ziffern abzugleichen. Solche Formen stimmen jedoch nur mit Zeichen aus dem _Lateinischen_ Schriftsystem überein (mit anderen Worten, `a` bis `z` und `A` bis `Z` für `\w` und `0` bis `9` für `\d`). Wie in [diesem Beispiel](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters) gezeigt, kann es etwas umständlich sein, mit nicht-lateinischen Texten zu arbeiten.

Unicode-Eigenschaftsfluchten decken viel mehr Zeichen ab, und `\p{Letter}` oder `\p{Number}` funktionieren für jedes Schriftsystem.

```js
// Trying to use ranges to avoid \w limitations:

const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));

// Using Unicode property escapes instead
const regexpUPE = /\p{L}+/gu;
console.table(nonEnglishText.match(regexpUPE));
```

### Preise abgleichen

Das folgende Beispiel gleicht Preise in einem String ab:

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

Mit dem `v` Flag kann `\p{…}` Zeichenfolgen abgleichen, die potenziell länger sind als ein Zeichen, indem eine Eigenschaft von Zeichenfolgen verwendet wird:

```js
const flag = "🇺🇳";
console.log(flag.length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

Es ist jedoch nicht möglich, mit `\P` buchstäblich "eine Zeichenfolge, die keine Eigenschaft hat" abzugleichen, da unklar ist, wie viele Zeichen konsumiert werden sollen.

```js-nolint example-bad
/\P{RGI_Emoji_Flag_Sequence}/v; // SyntaxError: Invalid regular expression: Invalid property name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassenflucht: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichenflucht: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeicheneigenschaft](https://en.wikipedia.org/wiki/Unicode_character_property) auf Wikipedia
- [ES2018: RegExp Unicode-Eigenschaftsfluchten](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) von Dr. Axel Rauschmayer (2017)
- [Unicode reguläre Ausdrücke § Eigenschaften](https://unicode.org/reports/tr18/#Categories)
- [Unicode Utilities: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp v Flag mit Mengenotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
