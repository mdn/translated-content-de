---
title: "Unicode-Zeichenklassen-Escape: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Ein **Unicode-Zeichenklassen-Escape** ist eine Art von [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), das eine Menge von Zeichen basierend auf einer Unicode-Eigenschaft abgleicht. Es wird nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen mit endlicher Länge abzugleichen.

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

  - : Ein einziger Unicode-Eigenschaftsname oder -wert, der der gleichen Syntax wie `value` folgt. Es gibt den Wert für die `General_Category`-Eigenschaft oder einen [binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties) an. Im [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Modus kann es auch eine [binäre Unicode-Eigenschaft von Zeichenfolgen](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings) sein.

    > **Hinweis:** Die [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values) Syntax erlaubt ebenfalls das Weglassen des `Script`-Eigenschaftsnamens, aber JavaScript unterstützt dies nicht, da meistens `Script_Extensions` nützlicher ist als `Script`.

- `property`
  - : Ein Unicode-Eigenschaftsname. Muss aus {{Glossary("ASCII")}} Buchstaben (`A–Z`, `a–z`) und Unterstrichen (`_`) bestehen und muss einer der [nicht-binären Eigenschaftsnamen](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties) sein.
- `value`
  - : Ein Unicode-Eigenschaftswert. Muss aus ASCII-Buchstaben (`A–Z`, `a–z`), Unterstrichen (`_`) und Ziffern (`0–9`) bestehen und muss einer der unterstützten Werte sein, die in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) aufgeführt sind.

## Beschreibung

`\p` und `\P` werden nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-unbewussten Modus sind sie [Identitäts-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das `p` oder `P` Zeichen.

Jedes Unicode-Zeichen hat eine Reihe von Eigenschaften, die es beschreiben. Zum Beispiel hat das Zeichen [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) die `General_Category`-Eigenschaft mit dem Wert `Lowercase_Letter` und die `Script`-Eigenschaft mit dem Wert `Latn`. Die Escape-Sequenzen `\p` und `\P` ermöglichen es Ihnen, ein Zeichen basierend auf seinen Eigenschaften abzugleichen. Zum Beispiel kann `a` durch `\p{Lowercase_Letter}` (der Name der `General_Category`-Eigenschaft ist optional) sowie durch `\p{Script=Latn}` abgeglichen werden. `\P` erzeugt eine _Komplementklasse_, die aus Codepunkten ohne die angegebene Eigenschaft besteht.

Um mehrere Eigenschaften zu kombinieren, verwenden Sie die [Zeichensatz-Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) Syntax, die mit dem `v`-Flag aktiviert wird, oder siehe [Musterabzug und Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection).

Im `v`-Modus kann `\p` eine Sequenz von Codepunkten abgleichen, die in Unicode als "Eigenschaften von Zeichenfolgen" definiert sind. Dies ist besonders nützlich für Emojis, die häufig aus mehreren Codepunkten bestehen. `\P` kann jedoch nur Zeicheneigenschaften ergänzen.

> [!NOTE]
> Es gibt Pläne, das Feature der Eigenschaften von Zeichenfolgen auch auf den `u`-Modus zu übertragen.

## Beispiele

### Allgemeine Kategorien

Allgemeine Kategorien werden verwendet, um Unicode-Zeichen zu klassifizieren, und Unterkategorien sind verfügbar, um eine genauere Kategorisierung zu definieren. In Unicode-Eigenschafts-Escapes können sowohl kurze als auch lange Formen verwendet werden.

Sie können verwendet werden, um Buchstaben, Zahlen, Symbole, Satzzeichen, Leerzeichen usw. abzugleichen. Eine ausführlichere Liste allgemeiner Kategorien finden Sie in [der Unicode-Spezifikation](https://unicode.org/reports/tr18/#General_Category_Property).

```js
// Alle Buchstaben eines Textes finden
const story = "It's the Cheshire Cat: now I shall have somebody to talk to.";

// Umfangreichste Form
story.match(/\p{General_Category=Letter}/gu);

// Es ist nicht zwingend erforderlich, den Eigenschaftsnamen für allgemeine Kategorien zu verwenden
story.match(/\p{Letter}/gu);

// Dies ist gleichwertig (kurzes Alias):
story.match(/\p{L}/gu);

// Dies ist ebenfalls gleichwertig (Verbindung aller Unterkategorien mit kurzen Aliassen)
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### Skripte und Skripterweiterungen

Einige Sprachen verwenden unterschiedliche Schriften für ihr Schriftsystem. Zum Beispiel werden Englisch und Spanisch in lateinischer Schrift geschrieben, während Arabisch und Russisch mit anderen Schriften geschrieben werden (bzw. Arabisch und Kyrillisch). Die Unicode-Eigenschaften `Script` und `Script_Extensions` ermöglichen regulären Ausdrücken, Zeichen entsprechend der Schrift abzugleichen, mit der sie hauptsächlich verwendet werden (`Script`), oder entsprechend der Menge der Schriften, zu denen sie gehören (`Script_Extensions`).

Zum Beispiel gehört `A` zur `Latin`-Schrift und `ε` zur `Greek`-Schrift.

```js
const mixedCharacters = "aεЛ";

// Verwendung des kanonischen "langen" Namens der Schrift
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Verwendung eines kurzen Aliases (ISO 15924-Code) für die Schrift
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Verwendung des kurzen Namens sc für die Skripteigenschaft
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

Für weitere Details lesen Sie bitte [die Unicode-Spezifikation](https://unicode.org/reports/tr24/#Script), die [Tabelle der Skripte in der ECMAScript-Spezifikation](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values) und die [ISO 15924-Liste der Schriftcodes](https://unicode.org/iso15924/iso15924-codes.html).

Wenn ein Zeichen in einem begrenzten Satz von Schriften verwendet wird, wird die `Script`-Eigenschaft nur für die "überwiegend" verwendete Schrift abgleichen. Wenn wir Zeichen basierend auf einer "nicht überwiegenden" Schrift abgleichen wollen, können wir die `Script_Extensions`-Eigenschaft (`Scx` für Kurz) verwenden.

```js
// ٢ ist die Ziffer 2 im Arabisch-Indischen Notationssystem
// während es überwiegend in der arabischen Schrift geschrieben wird
// kann es auch in der Thaana-Schrift geschrieben werden

"٢".match(/\p{Script=Thaana}/u);
// null, da Thaana nicht die überwiegende Schriftart ist

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode-Eigenschafts-Escapes vs. Zeichenklassen

Mit JavaScript-Regulärausdrücken ist es ebenfalls möglich, [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) zu verwenden, insbesondere `\w` oder `\d`, um Buchstaben oder Ziffern abzugleichen. Solche Formen gleichen jedoch nur Zeichen aus der _lateinischen_ Schrift ab (mit anderen Worten, `a` bis `z` und `A` bis `Z` für `\w` und `0` bis `9` für `\d`). Wie in [diesem Beispiel](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters) gezeigt, kann es etwas umständlich sein, mit nicht-lateinischen Texten zu arbeiten.

Unicode-Eigenschafts-Escape-Kategorien umfassen viel mehr Zeichen, und `\p{Letter}` oder `\p{Number}` funktionieren für jedes Script.

```js
// Versuch, mit Bereichen \w-Begrenzungen zu umgehen:

const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP durchläuft U+0000 bis U+FFFF, aber Leerzeichen ist U+0020

console.table(nonEnglishText.match(regexpBMPWord));

// Verwendung von Unicode-Eigenschafts-Escapes stattdessen
const regexpUPE = /\p{L}+/gu;
console.table(nonEnglishText.match(regexpUPE));
```

### Preise abgleichen

Das folgende Beispiel gleicht Preise in einem String ab:

```js
function getPrices(str) {
  // Sc steht für "Währungssymbol"
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

Jedoch können Sie nicht `\P` verwenden, um "eine Zeichenfolge, die keine Eigenschaft hat" abzugleichen, da unklar ist, wie viele Zeichen konsumiert werden sollen.

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
- [Unicode-Zeichen-Eigenschaft](https://en.wikipedia.org/wiki/Unicode_character_property) auf Wikipedia
- [ES2018: RegExp Unicode property escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) von Dr. Axel Rauschmayer (2017)
- [Unicode reguläre Ausdrücke § Eigenschaften](https://unicode.org/reports/tr18/#Categories)
- [Unicode Utilities: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp v-Flag mit Mengen-Notation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
