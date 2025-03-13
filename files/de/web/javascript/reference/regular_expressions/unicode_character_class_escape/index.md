---
title: "Unicode-Zeichenklassen-Escape: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar}}

Ein **Unicode-Zeichenklassen-Escape** ist eine Art von [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), das eine Gruppe von Zeichen anhand einer Unicode-Eigenschaft abgleicht. Es wird nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um Zeichenketten fester Länge abzugleichen.

{{InteractiveExample("JavaScript Demo: Regex Unicode-Zeichenklassen-Escape", "taller")}}

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

  - : Ein einzelner Unicode-Eigenschaftsname oder -wert, der dieselbe Syntax wie `value` verwendet. Es spezifiziert den Wert für die `General_Category`-Eigenschaft oder einen [binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties). Im [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Modus kann es auch eine [binäre Unicode-Eigenschaft von Zeichenfolgen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings) sein.

    > **Note:** Die [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values)-Syntax erlaubt es, den `Script`-Eigenschaftsnamen ebenfalls wegzulassen, aber JavaScript unterstützt dies nicht, da meist `Script_Extensions` nützlicher als `Script` ist.

- `property`
  - : Ein Unicode-Eigenschaftsname. Muss aus {{Glossary("ASCII", "ASCII")}}-Buchstaben (`A–Z`, `a–z`) und Unterstrichen (`_`) bestehen und muss einer der [nicht-binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties) sein.
- `value`
  - : Ein Unicode-Eigenschaftswert. Muss aus ASCII-Buchstaben (`A–Z`, `a–z`), Unterstrichen (`_`) und Ziffern (`0–9`) bestehen und muss einer der unterstützten Werte sein, die in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) aufgeführt sind.

## Beschreibung

`\p` und `\P` werden nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-unbewussten Modus sind sie [Identitätsescapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das `p`- oder `P`-Zeichen.

Jedes Unicode-Zeichen hat eine Reihe von Eigenschaften, die es beschreiben. Zum Beispiel hat das Zeichen [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) die `General_Category`-Eigenschaft mit dem Wert `Lowercase_Letter` und die `Script`-Eigenschaft mit dem Wert `Latn`. Die Escape-Sequenzen `\p` und `\P` ermöglichen es, ein Zeichen anhand seiner Eigenschaften abzugleichen. Beispielsweise kann `a` durch `\p{Lowercase_Letter}` (der `General_Category`-Eigenschaftsname ist optional) sowie `\p{Script=Latn}` abgeglichen werden. `\P` erstellt eine _Komplementklasse_, die aus Codepunkten ohne die angegebene Eigenschaft besteht.

Wenn das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)-Flag gesetzt ist, werden `\P`-Zeichenklassen im `u`- und `v`-Modus leicht unterschiedlich behandelt. Im `u`-Modus erfolgt Case-Folding nach der Subtraktion; im `v`-Modus erfolgt Case-Folding vor der Subtraktion. Konkret bedeutet dies, dass im `u`-Modus `\P{property}` `caseFold(allCharacters - charactersWithProperty)` abgleicht. Das bedeutet, dass `/\P{Lowercase_Letter}/iu` immer noch `"a"` abgleicht, weil `A` kein `Lowercase_Letter` ist. Im `v`-Modus gleicht `\P{property}` `caseFold(allCharacters) - caseFold(charactersWithProperty)` ab. Dies bedeutet, dass `/\P{Lowercase_Letter}/iv` `"a"` nicht abgleicht, weil `A` nicht einmal in der Menge aller case-folded Unicode-Zeichen ist. Siehe auch [Komplementklassen und case-insensitives Matching](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Um mehrere Eigenschaften zu kombinieren, verwenden Sie die [Zeichenmengen-Überschneidung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)-Syntax, die mit dem `v`-Flag aktiviert ist, oder siehe [Muster-Subtraktion und -Intersection](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection).

Im `v`-Modus kann `\p` eine Sequenz von Codepunkten abgleichen, die in Unicode als "Eigenschaften von Zeichenfolgen" definiert sind. Dies ist besonders nützlich für Emojis, die oft aus mehreren Codepunkten bestehen. Allerdings kann `\P` nur Zeichen-Eigenschaften komplementieren.

> [!NOTE]
> Es gibt Pläne, das Feature für Eigenschaften von Zeichenfolgen auch in den `u`-Modus zu portieren.

## Beispiele

### Allgemeine Kategorien

Allgemeine Kategorien werden verwendet, um Unicode-Zeichen zu klassifizieren, und es sind Unterkategorien verfügbar, um eine genauere Kategorisierung zu ermöglichen. Es ist möglich, sowohl kurze als auch lange Formen in Unicode-Eigenschaftsescapes zu verwenden.

Sie können genutzt werden, um Buchstaben, Zahlen, Symbole, Interpunktionen, Leerzeichen usw. abzugleichen. Für eine umfassendere Liste der allgemeinen Kategorien, beachten Sie bitte [die Unicode-Spezifikation](https://unicode.org/reports/tr18/#General_Category_Property).

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

### Skripte und Skripterweiterungen

Einige Sprachen verwenden unterschiedliche Skripte für ihr Schriftsystem. Beispielsweise wird Englisch und Spanisch mit dem lateinischen Skript geschrieben, während Arabisch und Russisch mit anderen Skripten (respektive Arabisch und Kyrillisch) geschrieben werden. Die Unicode-Eigenschaften `Script` und `Script_Extensions` ermöglichen es regulären Ausdrücken, Zeichen abhängig von dem Skript abzugleichen, mit dem sie hauptsächlich verwendet werden (`Script`) oder abhängig von der Menge der Skripte, denen sie angehören (`Script_Extensions`).

Zum Beispiel gehört `A` zum lateinischen Skript und `ε` zum griechischen Skript.

```js
const mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias (ISO 15924 code) for the script
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Using the short name sc for the Script property
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

Für weitere Details beachten Sie bitte [die Unicode-Spezifikation](https://unicode.org/reports/tr24/#Script), die [Skript-Tabelle in der ECMAScript-Spezifikation](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values) und die [ISO 15924 Liste der Skript-Codes](https://unicode.org/iso15924/iso15924-codes.html).

Wenn ein Zeichen in einem begrenzten Satz von Skripten verwendet wird, wird die `Script`-Eigenschaft nur für das "vorherrschende" Skript verwenden. Wenn wir Zeichen basierend auf einem "nicht-vorherrschenden" Skript abgleichen wollen, könnten wir die `Script_Extensions`-Eigenschaft verwenden (`Scx` für kurz).

```js
// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode-Eigenschaftsescapes vs. Zeichengruppen

Mit regulären Ausdrücken in JavaScript ist es auch möglich, [Zeichengruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) zu verwenden, insbesondere `\w` oder `\d`, um Buchstaben oder Ziffern abzugleichen. Solche Formen gleichen jedoch nur Zeichen aus dem _lateinischen_ Skript ab (mit anderen Worten, `a` bis `z` und `A` bis `Z` für `\w` und `0` bis `9` für `\d`). Wie in [diesem Beispiel](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters) gezeigt, könnte es etwas ungeschickt sein, mit nicht-lateinischen Texten zu arbeiten.

Unicode-Eigenschaftsescapes-Kategorien umfassen viel mehr Zeichen, und `\p{Letter}` oder `\p{Number}` wird für jedes Skript funktionieren.

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

Das folgende Beispiel gleicht Preise in einer Zeichenkette ab:

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

Mit dem `v`-Flag kann `\p{…}` Zeichenfolgen abgleichen, die potenziell länger als ein Zeichen sind, indem eine Eigenschaft von Zeichenfolgen verwendet wird:

```js
const flag = "🇺🇳";
console.log(flag.length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

Allerdings können Sie `\P` nicht verwenden, um "eine Zeichenfolge ohne Eigenschaft" abzugleichen, da unklar ist, wie viele Zeichen verbraucht werden sollten.

```js-nolint example-bad
/\P{RGI_Emoji_Flag_Sequence}/v; // SyntaxError: Invalid regular expression: Invalid property name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichengruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichengruppe: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Escape-Sequenz: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeicheneigenschaft](https://en.wikipedia.org/wiki/Unicode_character_property) auf Wikipedia
- [ES2018: RegExp Unicode property escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) von Dr. Axel Rauschmayer (2017)
- [Unicode reguläre Ausdrücke § Properties](https://unicode.org/reports/tr18/#Categories)
- [Unicode Utilities: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp v-Flag mit Mengennotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
