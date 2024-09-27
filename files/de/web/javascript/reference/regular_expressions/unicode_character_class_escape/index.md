---
title: "Unicode-Zeichenklassen-Escape: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Ein **Unicode-Zeichenklassen-Escape** ist eine Art von [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), das eine Menge von Zeichen entsprechend einer Unicode-Eigenschaft angibt. Es wird nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen mit endlicher Länge abzugleichen.

{{EmbedInteractiveExample("pages/js/regexp-unicode-property-escapes.html", "taller")}}

## Syntax

```regex
\p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value}
```

### Parameter

- `loneProperty`

  - : Ein alleiniger Unicode-Eigenschaftsname oder Wert, der die gleiche Syntax wie `value` verwendet. Er gibt den Wert für die Eigenschaft `General_Category` an oder einen [binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties). Im [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Modus kann es auch eine [binäre Unicode-Eigenschaft von Zeichenfolgen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings) sein.

    > **Note:** Die [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values)-Syntax erlaubt es ebenfalls, den Eigenschaftsnamen `Script` wegzulassen, jedoch unterstützt JavaScript dies nicht, da in den meisten Fällen `Script_Extensions` nützlicher ist als `Script`.

- `property`
  - : Ein Unicode-Eigenschaftsname. Muss aus [ASCII](/de/docs/Glossary/ASCII)-Buchstaben (`A–Z`, `a–z`) und Unterstrichen (`_`) bestehen und einer der [nicht-binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties) sein.
- `value`
  - : Ein Unicode-Eigenschaftswert. Muss aus ASCII-Buchstaben (`A–Z`, `a–z`), Unterstrichen (`_`) und Ziffern (`0–9`) bestehen und einer der unterstützten Werte sein, die in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) aufgeführt sind.

## Beschreibung

`\p` und `\P` werden nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-unbewussten Modus sind sie [Identitäts-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das Zeichen `p` oder `P`.

Jedes Unicode-Zeichen hat eine Reihe von Eigenschaften, die es beschreiben. Zum Beispiel hat das Zeichen [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) die Eigenschaft `General_Category` mit dem Wert `Lowercase_Letter` und die Eigenschaft `Script` mit dem Wert `Latn`. Die Escape-Sequenzen `\p` und `\P` ermöglichen es Ihnen, ein Zeichen basierend auf seinen Eigenschaften zu matchen. Zum Beispiel kann `a` durch `\p{Lowercase_Letter}` (der Eigenschaftsname `General_Category` ist optional) sowie `\p{Script=Latn}` gematched werden. `\P` erstellt eine _Komplementklasse_, die aus Codepunkten ohne die angegebene Eigenschaft besteht.

Um mehrere Eigenschaften zu kombinieren, verwenden Sie die Syntax zur [Zeichenmengen-Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class), die mit dem `v`-Flag aktiviert ist, oder siehe [Muster-Subtraktion und Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection).

Im `v`-Modus kann `\p` eine Sequenz von Codepunkten matchen, die in Unicode als "Eigenschaften von Zeichenfolgen" definiert sind. Dies ist am nützlichsten für Emojis, die oft aus mehreren Codepunkten bestehen. `\P` kann jedoch nur Zeicheneigenschaften komplementieren.

> [!NOTE]
> Es gibt Pläne, das Strings-Eigenschafts-Feature auch in den `u`-Modus zu portieren.

## Beispiele

### Allgemeine Kategorien

Allgemeine Kategorien werden verwendet, um Unicode-Zeichen zu klassifizieren, und Unterkategorien sind verfügbar, um eine genauere Kategorisierung zu definieren. Es ist möglich, sowohl kurze als auch lange Formen in Unicode-Eigenschafts-Escapes zu verwenden.

Sie können verwendet werden, um Buchstaben, Zahlen, Symbole, Satzzeichen, Leerzeichen usw. zu matchen. Für eine erschöpfendere Liste allgemeiner Kategorien verweisen Sie bitte auf [die Unicode-Spezifikation](https://unicode.org/reports/tr18/#General_Category_Property).

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

### Schriftsysteme und Skripterweiterungen

Einige Sprachen verwenden unterschiedliche Schriftsysteme für ihr Schriftsystem. Zum Beispiel werden Englisch und Spanisch mit dem lateinischen Alphabet geschrieben, während Arabisch und Russisch mit anderen Schriftsystemen geschrieben werden (respektive Arabisch und Kyrillisch). Die Unicode-Eigenschaften `Script` und `Script_Extensions` ermöglichen es regulären Ausdrücken, Zeichen gemäß dem Schriftsystem zu matchen, mit dem sie hauptsächlich verwendet werden (`Script`) oder gemäß dem Satz von Schriftsystemen, denen sie angehören (`Script_Extensions`).

Zum Beispiel gehört `A` zum `Latin`-Schriftsystem und `ε` zum `Greek`-Schriftsystem.

```js
const mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias (ISO 15924 code) for the script
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Using the short name sc for the Script property
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

Für weitere Details verweisen Sie auf [die Unicode-Spezifikation](https://unicode.org/reports/tr24/#Script), die [Tabelle der Schriftsysteme in der ECMAScript-Spezifikation](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values), und die [ISO 15924 Liste der Schriftsystemcodes](https://unicode.org/iso15924/iso15924-codes.html).

Wenn ein Zeichen in einem begrenzten Satz von Schriftsystemen verwendet wird, wird die `Script`-Eigenschaft nur für das "vorherrschend" verwendete Schriftsystem matchen. Wenn wir Zeichen basierend auf einem "nicht-vorherrschenden" Schriftsystem matchen wollen, könnten wir die `Script_Extensions`-Eigenschaft (`Scx` als Kurzform) verwenden.

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

Mit regulären JavaScript-Ausdrücken ist es auch möglich, [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und insbesondere `\w` oder `\d` zu verwenden, um Buchstaben oder Ziffern zu matchen. Solche Formen matchen jedoch nur Zeichen aus dem _lateinischen_ Schriftsystem (mit anderen Worten, `a` bis `z` und `A` bis `Z` für `\w` und `0` bis `9` für `\d`). Wie in [diesem Beispiel](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters) gezeigt, kann es etwas umständlich sein, mit nicht-lateinischen Texten zu arbeiten.

Unicode-Eigenschafts-Escapes-Kategorien umfassen viel mehr Zeichen und `\p{Letter}` oder `\p{Number}` funktionieren für jedes Schriftsystem.

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

Das folgende Beispiel matcht Preise in einem String:

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

### Zeichenfolgen matchen

Mit dem `v`-Flag kann `\p{…}` Zeichenfolgen matchen, die potenziell länger als ein Zeichen sind, indem eine Eigenschaft von Zeichenfolgen verwendet wird:

```js
const flag = "🇺🇳";
console.log(flag.length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

Allerdings können Sie nicht `\P` verwenden, um "eine Zeichenfolge, die keine Eigenschaft hat" zu matchen, weil unklar ist, wie viele Zeichen konsumiert werden sollten.

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
- [Unicode-Zeicheneigenschaft](https://en.wikipedia.org/wiki/Unicode_character_property) auf Wikipedia
- [ES2018: RegExp Unicode-Eigenschafts-Escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) von Dr. Axel Rauschmayer (2017)
- [Unicode reguläre Ausdrücke § Eigenschaften](https://unicode.org/reports/tr18/#Categories)
- [Unicode Utilities: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp v-Flag mit Mengennotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
