---
title: "Unicode-Zeichenklassen-Flucht: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: fce3e005d0d2566741e2db7acc8f83c708d1c1cc
---

Ein **Unicode-Zeichenklassen-Flucht** ist eine Art von [Zeichenklassen-Flucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), die eine Menge von Zeichen anhand einer Unicode-Eigenschaft abgleicht. Sie wird nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann sie auch genutzt werden, um endliche Zeichenketten zu vergleichen.

{{InteractiveExample("JavaScript Demo: Regex Unicode-Zeichenklassen-Flucht", "taller")}}

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
  - : Ein einzelner Unicode-Eigenschaftsname oder Wert, der der gleichen Syntax wie `value` folgt. Er gibt den Wert für die Eigenschaft `General_Category` an oder einen [binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties). Im [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Modus kann es sich auch um eine [binäre Unicode-Eigenschaft von Zeichenketten](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings) handeln.

    > [!NOTE]
    > Die [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values)-Syntax erlaubt es, den Eigenschaftsnamen `Script` ebenfalls wegzulassen, aber JavaScript unterstützt dies nicht, da `Script_Extensions` meist nützlicher ist als `Script`.

- `property`
  - : Ein Unicode-Eigenschaftsname. Muss aus {{Glossary("ASCII", "ASCII")}}-Buchstaben (`A–Z`, `a–z`) und Unterstrichen (`_`) bestehen und muss einer der [nicht-binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties) sein.
- `value`
  - : Ein Unicode-Eigenschaftswert. Muss aus ASCII-Buchstaben (`A–Z`, `a–z`), Unterstrichen (`_`) und Ziffern (`0–9`) bestehen und muss einer der unterstützten Werte sein, die in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) aufgeführt sind.

## Beschreibung

`\p` und `\P` werden nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-unbewussten Modus sind sie [Identitätsausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das Zeichen `p` oder `P`.

Jedes Unicode-Zeichen hat eine Reihe von Eigenschaften, die es beschreiben. Zum Beispiel hat das Zeichen [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) die `General_Category`-Eigenschaft mit dem Wert `Lowercase_Letter` und die `Script`-Eigenschaft mit dem Wert `Latn`. Die Escape-Sequenzen `\p` und `\P` ermöglichen es, ein Zeichen basierend auf seinen Eigenschaften abzugleichen. Zum Beispiel kann `a` durch `\p{Lowercase_Letter}` (der `General_Category` Eigenschaftsname ist optional) sowie `\p{Script=Latn}` abgeglichen werden. `\P` erstellt eine _Komplementklasse_, die aus Codepunkten ohne die angegebene Eigenschaft besteht.

Wenn das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)-Flag gesetzt ist, werden `\P` Zeichenklassen im `u`- und `v`-Modus leicht unterschiedlich behandelt. Im `u`-Modus erfolgt die Kleinschreibung nach der Subtraktion, im `v`-Modus erfolgt die Kleinschreibung vor der Subtraktion. Konkret gesagt, im `u`-Modus entspricht `\P{property}` `caseFold(allCharacters - charactersWithProperty)`. Das bedeutet, dass `/\P{Lowercase_Letter}/iu` immer noch `"a"` trifft, weil `A` kein `Lowercase_Letter` ist. Im `v`-Modus entspricht `\P{property}` `caseFold(allCharacters) - caseFold(charactersWithProperty)`. Das bedeutet, dass `/\P{Lowercase_Letter}/iv` `"a"` nicht trifft, weil `A` nicht einmal in der Menge aller klein geschriebenen Unicode-Zeichen enthalten ist. Siehe auch [Komplementklassen und kasusinsensitives Matching](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Um mehrere Eigenschaften zu kombinieren, verwenden Sie die [Zeichensatz-Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)-Syntax, die mit dem `v`-Flag aktiviert wird, oder sehen Sie sich die [Muster-Subtraktion und Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) an.

Im `v`-Modus kann `\p` eine Sequenz von Codepunkten treffen, die in Unicode als "Eigenschaften von Zeichenketten" definiert sind. Dies ist besonders nützlich für Emojis, die oft aus mehreren Codepunkten bestehen. `\P` kann jedoch nur Zeichen-Eigenschaften komplementieren.

> [!NOTE]
> Es gibt Pläne, die Funktion "Eigenschaften von Zeichenketten" auch in den `u`-Modus zu portieren.

## Beispiele

### Allgemeine Kategorien

Allgemeine Kategorien werden verwendet, um Unicode-Zeichen zu klassifizieren, und Unterkategorien sind verfügbar, um eine genauere Kategorisierung zu definieren. Es ist möglich, sowohl kurze als auch lange Formen in Unicode-Eigenschaftsausdrücken zu verwenden.

Sie können verwendet werden, um Buchstaben, Zahlen, Symbole, Satzzeichen, Leerzeichen usw. zu vergleichen. Für eine ausführlichere Liste der allgemeinen Kategorien, verweisen wir auf [die Unicode-Spezifikation](https://unicode.org/reports/tr18/#General_Category_Property).

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

Einige Sprachen verwenden unterschiedliche Skripte für ihr Schriftsystem. Zum Beispiel werden Englisch und Spanisch im lateinischen Skript geschrieben, während Arabisch und Russisch mit anderen Skripten (respektive Arabisch und Kyrillisch) geschrieben werden. Die Unicode-Eigenschaften `Script` und `Script_Extensions` erlauben regulären Ausdrücken, Zeichen entsprechend dem Skript abzugleichen, mit dem sie hauptsächlich verwendet werden (`Script`) oder entsprechend der Menge der Skripte, zu denen sie gehören (`Script_Extensions`).

Zum Beispiel gehört `A` zum `Latin`-Skript und `ε` zum `Greek`-Skript.

```js
const mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias (ISO 15924 code) for the script
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Using the short name sc for the Script property
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

Für mehr Details verweisen wir auf [die Unicode-Spezifikation](https://unicode.org/reports/tr24/#Script), die [Skripttabelle in der ECMAScript-Spezifikation](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values), und die [ISO 15924 Liste der Skriptcodes](https://unicode.org/iso15924/iso15924-codes.html).

Wenn ein Zeichen in einem begrenzten Satz von Skripten verwendet wird, wird die `Script`-Eigenschaft nur für das "vorherrschend" verwendete Skript übereinstimmen. Wenn wir Zeichen basierend auf einem "nicht-vorherrschenden" Skript abgleichen möchten, könnten wir die `Script_Extensions`-Eigenschaft (kurz `scx`) verwenden.

```js
// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode-Eigenschaftsflüchte vs. Zeichenklassen

Mit JavaScript-Regulären Ausdrücken ist es auch möglich, [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und insbesondere `\w` oder `\d` zu verwenden, um Buchstaben oder Ziffern abzugleichen. Solche Formen treffen jedoch nur Zeichen des _lateinischen_ Skripts (mit anderen Worten, `a` bis `z` und `A` bis `Z` für `\w` und `0` bis `9` für `\d`). Wie in [diesem Beispiel](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters) gezeigt, könnte es etwas umständlich sein, mit nicht-lateinischen Texten zu arbeiten.

Unicode-Eigenschaftsausdrucks-Kategorien umfassen viel mehr Zeichen und `\p{Letter}` oder `\p{Number}` funktionieren für jedes Skript.

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

Mit dem `v`-Flag kann `\p{…}` Zeichenketten abgleichen, die potenziell länger als ein Zeichen sind, indem eine Eigenschaft von Zeichenketten verwendet wird:

```js
const flag = "🇺🇳";
console.log(flag.length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

Sie können jedoch nicht `\P` verwenden, um "eine Zeichenkette ohne eine Eigenschaft" abzugleichen, da unklar ist, wie viele Zeichen konsumiert werden sollen.

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
- [Zeichenklassen-Flucht: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichenflucht: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeicheneigenschaft](https://en.wikipedia.org/wiki/Unicode_character_property) auf Wikipedia
- [ES2018: RegExp Unicode Property Escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) von Dr. Axel Rauschmayer (2017)
- [Unicode reguläre Ausdrücke § Eigenschaften](https://unicode.org/reports/tr18/#Categories)
- [Unicode-Dienstprogramme: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp v-Flag mit Mengenotation und Eigenschaften von Zeichenketten](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
