---
title: "Unicode-Zeichenklassen-Escape: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: 7d4628c5144f459ddb081a3e58d0e56f0c2db673
---

Ein **Unicode-Zeichenklassen-Escape** ist eine Art von [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), das eine Menge von Zeichen angibt, die durch eine Unicode-Eigenschaft spezifiziert wird. Es wird nur im [Unicode-awareness-Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag aktiviert ist, kann es auch verwendet werden, um endliche Zeichenketten zu matchen.

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
  - : Ein einzelner Unicode-Eigenschaftsname oder -wert, der der gleichen Syntax wie `value` folgt. Er gibt den Wert für die `General_Category`-Eigenschaft oder einen [binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties) an. Im [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Modus kann es auch eine [binäre Unicode-Eigenschaft von Zeichenketten](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings) sein.

    > [!NOTE]
    > [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values)-Syntax erlaubt es, den Eigenschaftsnamen `Script` wegzulassen, aber JavaScript unterstützt dies nicht, da meist `Script_Extensions` nützlicher ist als `Script`.

- `property`
  - : Ein Unicode-Eigenschaftsname. Muss aus {{Glossary("ASCII", "ASCII")}} Buchstaben (`A–Z`, `a–z`) und Unterstrichen (`_`) bestehen und muss einer der [nicht-binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties) sein.
- `value`
  - : Ein Unicode-Eigenschaftswert. Muss aus ASCII-Buchstaben (`A–Z`, `a–z`), Unterstrichen (`_`) und Ziffern (`0–9`) bestehen und muss einer der unterstützten Werte in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) sein.

## Beschreibung

`\p` und `\P` werden nur im [Unicode-awareness-Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-ununawareness-Modus sind sie [Identitäts-Escapezeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das Zeichen `p` oder `P`.

Jedes Unicode-Zeichen hat eine Reihe von Eigenschaften, die es beschreiben. Zum Beispiel hat das Zeichen [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) die Eigenschaft `General_Category` mit dem Wert `Lowercase_Letter` und die Eigenschaft `Script` mit dem Wert `Latn`. Die Escape-Sequenzen `\p` und `\P` ermöglichen es Ihnen, ein Zeichen basierend auf seinen Eigenschaften zu matchen. Zum Beispiel kann `a` durch `\p{Lowercase_Letter}` (der `General_Category`-Eigenschaftsname ist optional) ebenso wie durch `\p{Script=Latn}` gematcht werden. `\P` erstellt eine _Komplementklasse_, die aus Codepunkten ohne die angegebene Eigenschaft besteht.

Wenn das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)-Flag gesetzt ist, werden `\P`-Zeichenklassen in den Modi `u` und `v` leicht unterschiedlich behandelt. Im `u`-Modus erfolgt das Falten von Groß- und Kleinbuchstaben nach der Subtraktion; im `v`-Modus erfolgt das Falten vor der Subtraktion. Konkret bedeutet das, dass im `u`-Modus `\P{property}` `caseFold(allCharacters - charactersWithProperty)` übereinstimmt. Das bedeutet, dass `/\P{Lowercase_Letter}/iu` weiterhin `"a"` matcht, weil `A` kein `Lowercase_Letter` ist. Im `v`-Modus stimmt `\P{property}` mit `caseFold(allCharacters) - caseFold(charactersWithProperty)` überein. Das bedeutet, dass `/\P{Lowercase_Letter}/iv` `"a"` nicht matcht, weil `A` nicht einmal in der Menge aller case-folded Unicode-Zeichen ist. Siehe auch [Komplementklassen und Case-Insensitive-Matching](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Um mehrere Eigenschaften zu kombinieren, verwenden Sie die [Zeichensatzschnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)-Syntax, die mit dem `v`-Flag aktiviert ist, oder sehen Sie sich [Muster-Subtraktion und Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) an.

Im `v`-Modus kann `\p` eine Folge von Codepunkten matchen, die in Unicode als "Eigenschaften von Zeichenketten" definiert sind. Dies ist am nützlichsten für Emojis, die häufig aus mehreren Codepunkten bestehen. `\P` kann jedoch nur Zeichen-Eigenschaften komplementieren.

> [!NOTE]
> Es gibt Pläne, die Eigenschaftsfunktion für Zeichenketten auch auf den `u`-Modus zu portieren.

## Beispiele

### Allgemeine Kategorien

Allgemeine Kategorien werden verwendet, um Unicode-Zeichen zu klassifizieren, und Unterkategorien sind verfügbar, um eine präzisere Klassifizierung zu definieren. Es ist möglich, sowohl kurze als auch lange Formen in Unicode-Eigenschafts-Escapes zu verwenden.

Sie können verwendet werden, um Buchstaben, Zahlen, Symbole, Satzzeichen, Leerzeichen usw. zu matchen. Für eine ausführlichere Liste der allgemeinen Kategorien, konsultieren Sie bitte [die Unicode-Spezifikation](https://unicode.org/reports/tr18/#General_Category_Property).

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

Einige Sprachen verwenden unterschiedliche Schriftsysteme für ihr Schriftsystem. Zum Beispiel wird Englisch und Spanisch mit dem lateinischen Schriftsystem geschrieben, während Arabisch und Russisch mit anderen Schriftsystemen geschrieben werden (nämlich Arabisch und Kyrillisch). Die Unicode-Eigenschaften `Script` und `Script_Extensions` ermöglichen es regulären Ausdrücken, Zeichen entsprechend dem Skript, mit dem sie hauptsächlich verwendet werden (`Script`), oder entsprechend dem Satz von Skripten, zu denen sie gehören (`Script_Extensions`), zu matchen.

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

Für weitere Details konsultieren Sie bitte [die Unicode-Spezifikation](https://unicode.org/reports/tr24/#Script), die [Skripttabelle in der ECMAScript-Spezifikation](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values) und die [ISO 15924-Liste von Skriptcodes](https://unicode.org/iso15924/iso15924-codes.html).

Wenn ein Zeichen in einem begrenzten Satz von Skripten verwendet wird, wird die `Script`-Eigenschaft nur für das "vorherrschend" verwendete Skript matchen. Wenn wir Zeichen basierend auf einem "nicht-vorherrschenden" Skript matchen wollen, könnten wir die `Script_Extensions`-Eigenschaft (`scx` für kurz) verwenden.

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

Mit JavaScript-Regulärausdrücken ist es auch möglich, [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), insbesondere `\w` oder `\d`, zu verwenden, um Buchstaben oder Ziffern zu matchen. Solche Formen matchen jedoch nur Zeichen aus dem _lateinischen_ Skript (mit anderen Worten, `a` bis `z` und `A` bis `Z` für `\w` und `0` bis `9` für `\d`). Wie in [diesem Beispiel](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters) gezeigt, kann es etwas umständlich sein, mit nicht-lateinischen Texten zu arbeiten.

Unicode-Eigenschafts-Escape-Kategorien umfassen viel mehr Zeichen, und `\p{Letter}` oder `\p{Number}` funktionieren für jedes Skript.

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

### Preise matchen

Das folgende Beispiel matcht Preise in einer Zeichenkette:

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

### Zeichenketten matchen

Mit dem `v`-Flag kann `\p{…}` Zeichenketten matchen, die potenziell länger als ein Zeichen sind, indem eine Eigenschaft von Zeichenketten verwendet wird:

```js
const flag = "🇺🇳";
console.log(flag.length); // 4 (two code points, each a surrogate pair)
console.log([...flag].length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

Sie können jedoch `\P` nicht verwenden, um "eine Zeichenkette, die keine Eigenschaft hat" zu matchen, da unklar ist, wie viele Zeichen verbraucht werden sollten.

```js-nolint example-bad
/\P{RGI_Emoji_Flag_Sequence}/v; // SyntaxError: Invalid regular expression: Invalid property name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)-Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeichen-Eigenschaft](https://en.wikipedia.org/wiki/Unicode_character_property) auf Wikipedia
- [ES2018: RegExp Unicode-Eigenschafts-Escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) von Dr. Axel Rauschmayer (2017)
- [Unicode reguläre Ausdrücke § Eigenschaften](https://unicode.org/reports/tr18/#Categories)
- [Unicode Utilities: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp v Flag mit Set-Notation und Eigenschaften von Zeichenketten](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
