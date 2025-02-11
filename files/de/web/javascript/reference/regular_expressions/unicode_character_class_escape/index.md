---
title: "Unicode-Zeichenklassen-Escape: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar}}

Ein **Unicode-Zeichenklassen-Escape** ist eine Art von [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), die eine Gruppe von Zeichen basierend auf einer Unicode-Eigenschaft abgleicht. Es wird nur im [Unicode-aware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen mit endlicher Länge abzugleichen.

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

  - : Ein alleinstehender Unicode-Eigenschaftsname oder -wert, der demselben Syntaxmuster wie `value` folgt. Er gibt den Wert für die `General_Category`-Eigenschaft an oder einen [binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties). Im [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Modus kann es sich auch um eine [binäre Unicode-Eigenschaft von Zeichenfolgen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings) handeln.

    > **Hinweis:** Die [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values)-Syntax erlaubt es außerdem, den `Script`-Eigenschaftsnamen wegzulassen, aber JavaScript unterstützt dies nicht, da in den meisten Fällen `Script_Extensions` nützlicher ist als `Script`.

- `property`
  - : Ein Unicode-Eigenschaftsname. Muss aus {{Glossary("ASCII", "ASCII")}}-Buchstaben (`A–Z`, `a–z`) und Unterstrichen (`_`) bestehen und muss einer der [nicht-binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties) sein.
- `value`
  - : Ein Unicode-Eigenschaftswert. Muss aus ASCII-Buchstaben (`A–Z`, `a–z`), Unterstrichen (`_`) und Ziffern (`0–9`) bestehen und muss einer der unterstützten Werte sein, die in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) aufgeführt sind.

## Beschreibung

`\p` und `\P` werden nur im [Unicode-aware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-unabhängigen Modus sind sie [Identitäts-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das Zeichen `p` oder `P`.

Jedes Unicode-Zeichen hat eine Reihe von Eigenschaften, die es beschreiben. Zum Beispiel hat das Zeichen [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) die Eigenschaft `General_Category` mit dem Wert `Lowercase_Letter` und die Eigenschaft `Script` mit dem Wert `Latn`. Die Escape-Sequenzen `\p` und `\P` ermöglichen das Abgleichen eines Zeichens basierend auf seinen Eigenschaften. Zum Beispiel kann `a` durch `\p{Lowercase_Letter}` abgeglichen werden (der `General_Category`-Eigenschaftsname ist optional) sowie durch `\p{Script=Latn}`. `\P` erstellt eine _Komplementklasse_, die aus Codepunkten ohne die angegebene Eigenschaft besteht.

Um mehrere Eigenschaften zu kombinieren, verwenden Sie die [Zeichensatz-Schnittmengen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)-Syntax, die mit dem `v`-Flag aktiviert ist, oder sehen Sie sich [Muster-Subtraktion und -Schnittmengen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) an.

Im `v`-Modus kann `\p` eine Sequenz von Codepunkten abgleichen, die in Unicode als „Eigenschaften von Zeichenfolgen“ definiert sind. Dies ist insbesondere für Emojis nützlich, die oft aus mehreren Codepunkten bestehen. `\P` kann jedoch nur Zeichen-Eigenschaften komplementieren.

> [!NOTE]
> Es gibt Pläne, die Eigenschaften von Zeichenfolgen auch in den `u`-Modus zu portieren.

## Beispiele

### Allgemeine Kategorien

Allgemeine Kategorien werden verwendet, um Unicode-Zeichen zu klassifizieren, und Unterkategorien stehen zur Verfügung, um eine genauere Kategorisierung zu definieren. Es ist möglich, sowohl Kurz- als auch Langformen bei Unicode-Eigenschafts-Escapes zu verwenden.

Sie können verwendet werden, um Buchstaben, Zahlen, Symbole, Satzzeichen, Leerzeichen usw. abzugleichen. Für eine umfassendere Liste allgemeiner Kategorien beachten Sie bitte [die Unicode-Spezifikation](https://unicode.org/reports/tr18/#General_Category_Property).

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

Einige Sprachen verwenden verschiedene Schriftsysteme für ihr Schriftsystem. Zum Beispiel werden Englisch und Spanisch mit dem lateinischen Schriftsystem geschrieben, während Arabisch und Russisch mit anderen Schriftsystemen (bzw. Arabisch und Kyrillisch) geschrieben werden. Die Unicode-Eigenschaften `Script` und `Script_Extensions` erlauben regulären Ausdrücken, Zeichen entsprechend dem Schriftsystem abzugleichen, mit dem sie hauptsächlich verwendet werden (`Script`) oder entsprechend der Menge von Schriftsystemen, zu denen sie gehören (`Script_Extensions`).

Zum Beispiel gehört `A` zum lateinischen Schriftsystem, und `ε` gehört zum griechischen Schriftsystem.

```js
const mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias (ISO 15924 code) for the script
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Using the short name sc for the Script property
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

Weitere Details finden Sie in [der Unicode-Spezifikation](https://unicode.org/reports/tr24/#Script), der [Skript-Tabelle in der ECMAScript-Spezifikation](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values) und der [ISO 15924-Liste der Skriptcodes](https://unicode.org/iso15924/iso15924-codes.html).

Wenn ein Zeichen in einer begrenzten Anzahl von Schriftsystemen verwendet wird, entspricht die `Script`-Eigenschaft nur dem „vorherrschend“ verwendeten Schriftsystem. Möchten wir Zeichen basierend auf einem „nicht-vorherrschenden“ Schriftsystem abgleichen, könnten wir die `Script_Extensions`-Eigenschaft verwenden (`Scx` als Kurzform).

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

Mit regulären JavaScript-Ausdrücken ist es ebenfalls möglich, [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) zu verwenden, insbesondere `\w` oder `\d`, um Buchstaben oder Ziffern abzugleichen. Solche Formen gleichen jedoch nur Zeichen aus dem _Lateinischen_ Schriftsystem ab (mit anderen Worten, `a` bis `z` und `A` bis `Z` für `\w` sowie `0` bis `9` für `\d`). Wie in [diesem Beispiel](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters) gezeigt, könnte es etwas umständlich sein, mit nicht Lateinischen Texten zu arbeiten.

Unicode-Eigenschafts-Escape-Kategorien umfassen viel mehr Zeichen, und `\p{Letter}` oder `\p{Number}` funktionieren für jedes Schriftsystem.

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

Mit dem `v`-Flag kann `\p{…}` Zeichenfolgen abgleichen, die möglicherweise länger als ein Zeichen sind, indem eine Eigenschaft von Zeichenfolgen verwendet wird:

```js
const flag = "🇺🇳";
console.log(flag.length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

Sie können jedoch `\P` nicht verwenden, um „eine Zeichenfolge ohne eine Eigenschaft“ abzugleichen, da unklar ist, wie viele Zeichen konsumiert werden sollten.

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
- [Unicode-Zeichen-Eigenschaft](https://en.wikipedia.org/wiki/Unicode_character_property) bei Wikipedia
- [ES2018: RegExp Unicode-Eigenschafts-Escape](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) von Dr. Axel Rauschmayer (2017)
- [Unicode reguläre Ausdrücke § Eigenschaften](https://unicode.org/reports/tr18/#Categories)
- [Unicode Utilities: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp `v`-Flag mit Menge-Notation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
