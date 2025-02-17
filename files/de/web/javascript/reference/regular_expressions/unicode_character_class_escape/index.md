---
title: "Unicode-Zeichenklassen-Escape: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: d9e1eba619129f2130d82200d47c41eb6ec51125
---

{{jsSidebar}}

Ein **Unicode-Zeichenklassen-Escape** ist eine Art von [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), die eine Menge von Zeichen abgleicht, die durch eine Unicode-Eigenschaft definiert ist. Es wird nur im [Unicode-Aware-Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um Zeichenketten mit endlicher Länge abzugleichen.

{{InteractiveExample("JavaScript Demo: RegExp Unicode property escapes", "taller")}}

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

  - : Ein alleinstehender Unicode-Eigenschaftsname oder -wert, der der gleichen Syntax wie `value` folgt. Dieser gibt den Wert für die `General_Category`-Eigenschaft oder einen [binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties) an. Im [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Modus kann dies auch eine [binäre Unicode-Eigenschaft von Zeichenketten](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings) sein.

    > **Hinweis:** Die [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values)-Syntax erlaubt das Weglassen des Eigenschaftsnamen `Script`, aber JavaScript unterstützt dies nicht, da in den meisten Fällen `Script_Extensions` nützlicher ist als `Script`.

- `property`
  - : Ein Unicode-Eigenschaftsname. Er muss aus {{Glossary("ASCII", "ASCII")}}-Buchstaben (`A–Z`, `a–z`) und Unterstrichen (`_`) bestehen und einer der [nicht-binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties) sein.
- `value`
  - : Ein Unicode-Eigenschaftswert. Er muss aus ASCII-Buchstaben (`A–Z`, `a–z`), Unterstrichen (`_`) und Ziffern (`0–9`) bestehen und einer der unterstützten Werte sein, die in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) aufgeführt sind.

## Beschreibung

`\p` und `\P` werden nur im [Unicode-Aware-Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-unaware-Modus sind sie [Identitäts-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das `p`- oder `P`-Zeichen.

Jedes Unicode-Zeichen hat eine Reihe von Eigenschaften, die es beschreiben. Zum Beispiel hat das Zeichen [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) die `General_Category`-Eigenschaft mit dem Wert `Lowercase_Letter` und die `Script`-Eigenschaft mit dem Wert `Latn`. Die Escape-Sequenzen `\p` und `\P` ermöglichen es Ihnen, ein Zeichen basierend auf dessen Eigenschaften abzugleichen. Zum Beispiel kann `a` sowohl durch `\p{Lowercase_Letter}` (der `General_Category`-Eigenschaftsname ist optional) als auch durch `\p{Script=Latn}` abgeglichen werden. `\P` erstellt eine _Komplement-Klasse_, die aus Codepunkten ohne die angegebene Eigenschaft besteht.

Wenn das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)-Flag gesetzt ist, werden `\P`-Zeichenklassen in den Modi `u` und `v` etwas unterschiedlich behandelt. Im `u`-Modus erfolgt die Groß-/Kleinschreibungsumwandlung nach der Subtraktion; im `v`-Modus erfolgt sie vor der Subtraktion. Konkret bedeutet dies, dass im `u`-Modus `\P{property}` `caseFold(allCharacters - charactersWithProperty)` entspricht. Dies bedeutet, dass `/\P{Lowercase_Letter}/iu` trotzdem `"a"` abgleicht, da `A` kein `Lowercase_Letter` ist. Im `v`-Modus entspricht `\P{property}` `caseFold(allCharacters) - caseFold(charactersWithProperty)`. Das bedeutet, dass `/\P{Lowercase_Letter}/iv` `"a"` nicht abgleicht, da `A` nicht einmal in der Menge aller caseFolded-Unicode-Zeichen ist. Siehe auch [Komplement-Klassen und Groß-/Kleinschreibungsunabhängiges Matching](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Um mehrere Eigenschaften zu kombinieren, verwenden Sie die [Zeichensatz-Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)-Syntax, die mit dem `v`-Flag aktiviert wird, oder siehe [Muster-Subtraktion und Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection).

Im `v`-Modus kann `\p` eine Sequenz von Codepunkten abgleichen, die in Unicode als "Eigenschaften von Zeichenketten" definiert wird. Dies ist insbesondere bei Emojis nützlich, die oft aus mehreren Codepunkten bestehen. Allerdings kann `\P` nur Zeichen-Eigenschaften komplementieren.

> [!NOTE]
> Es gibt Pläne, die Funktionalität der Zeichenketten-Eigenschaften auch in den `u`-Modus zu übertragen.

## Beispiele

### Allgemeine Kategorien

Allgemeine Kategorien werden verwendet, um Unicode-Zeichen zu klassifizieren, und Unterkategorien sind verfügbar, um eine präzisere Kategorisierung zu ermöglichen. Es ist möglich, sowohl kurze als auch lange Formen in Unicode-Eigenschaften-Escapes zu verwenden.

Sie können verwendet werden, um Buchstaben, Zahlen, Symbole, Satzzeichen, Leerzeichen usw. abzugleichen. Für eine ausführlichere Liste der allgemeinen Kategorien lesen Sie bitte [die Unicode-Spezifikation](https://unicode.org/reports/tr18/#General_Category_Property).

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

### Skripte und Skript-Erweiterungen

Einige Sprachen verwenden unterschiedliche Skripte für ihr Schriftsystem. Zum Beispiel werden Englisch und Spanisch mit dem lateinischen Alphabet geschrieben, während Arabisch und Russisch mit anderen Schriftsystemen (respektiv Arabisch und Kyrillisch) geschrieben werden. Die Unicode-Eigenschaften `Script` und `Script_Extensions` ermöglichen regulären Ausdrücken, Zeichen basierend auf dem Skript, das sie hauptsächlich verwenden (`Script`), oder basierend auf dem Satz von Skripten, zu denen sie gehören (`Script_Extensions`), abzugleichen.

Zum Beispiel gehört `A` zum lateinischen Alphabet und `ε` zum griechischen Alphabet.

```js
const mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias (ISO 15924 code) for the script
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Using the short name sc for the Script property
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

Für weitere Details lesen Sie [die Unicode-Spezifikation](https://unicode.org/reports/tr24/#Script), die [Skript-Tabelle in der ECMAScript-Spezifikation](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values) und die [ISO 15924 Liste der Skript-Codes](https://unicode.org/iso15924/iso15924-codes.html).

Wenn ein Zeichen in einem begrenzten Satz von Skripten verwendet wird, wird die `Script`-Eigenschaft nur für das "vorherrschend" verwendete Skript übereinstimmen. Wenn wir Zeichen basierend auf einem "nicht vorherrschenden" Skript abgleichen möchten, könnten wir die `Script_Extensions`-Eigenschaft (`Scx` abgekürzt) verwenden.

```js
// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode-Eigenschafts-Escapes vs. Zeichenklassen

Mit regulären JavaScript-Ausdrücken ist es ebenfalls möglich, [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) zu verwenden und insbesondere `\w` oder `\d`, um Buchstaben oder Ziffern abzugleichen. Solche Formen gleichen jedoch nur Zeichen aus dem _lateinischen_ Skript ab (in anderen Worten, `a` bis `z` und `A` bis `Z` für `\w` sowie `0` bis `9` für `\d`). Wie in [diesem Beispiel](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters) gezeigt, kann dies mit nicht-lateinischen Texten etwas umständlich sein.

Die Kategorien der Unicode-Eigenschafts-Escapes umfassen viel mehr Zeichen, und `\p{Letter}` oder `\p{Number}` funktionieren für jedes Skript.

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

### Zeichenketten abgleichen

Mit dem `v`-Flag kann `\p{…}` Zeichenketten abgleichen, die möglicherweise länger als ein Zeichen sind, indem eine Eigenschaft von Zeichenketten verwendet wird:

```js
const flag = "🇺🇳";
console.log(flag.length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

Allerdings können Sie `\P` nicht verwenden, um "eine Zeichenkette, die keine Eigenschaft hat" abzugleichen, da unklar ist, wie viele Zeichen konsumiert werden sollten.

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
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeicheneigenschaften](https://en.wikipedia.org/wiki/Unicode_character_property) auf Wikipedia
- [ES2018: RegExp Unicode property escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) von Dr. Axel Rauschmayer (2017)
- [Unicode reguläre Ausdrücke § Eigenschaften](https://unicode.org/reports/tr18/#Categories)
- [Unicode Utilities: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp v-Flag mit Set-Notation und Eigenschaften von Zeichenketten](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
