---
title: "Zeichenklasse: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Eine **Zeichenklasse** findet ein beliebiges Zeichen, das in einer selbst festgelegten Zeichenmenge enthalten oder nicht enthalten ist. Wenn das Flag [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) aktiviert ist, kann sie auch Zeichenfolgen endlicher Länge abgleichen.

## Syntax

```regex
[]
[abc]
[A-Z]

[^]
[^abc]
[^A-Z]

// `v` mode only
[operand1&&operand2]
[operand1--operand2]
[\q{substring}]
```

### Parameter

- `operand1`, `operand2`
  - : Können ein einzelnes Zeichen, eine weitere in eckige Klammern eingeschlossene Zeichenklasse, ein [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), ein [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) oder eine Zeichenfolge mit der `\q`-Syntax sein.
- `substring`
  - : Eine literale Zeichenfolge.

## Beschreibung

Eine Zeichenklasse legt eine Liste von Zeichen zwischen eckigen Klammern fest und findet jedes Zeichen aus dieser Liste. Das Flag [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) verändert grundlegend, wie Zeichenklassen geparst und interpretiert werden. Die folgenden Schreibweisen stehen sowohl im `v`-Modus als auch außerhalb davon zur Verfügung:

- Ein einzelnes Zeichen: findet das Zeichen selbst.
- Ein Zeichenbereich: findet jedes Zeichen innerhalb des Bereichs einschließlich seiner Grenzen. Der Bereich wird durch zwei Zeichen angegeben, die durch einen Bindestrich (`-`) getrennt sind. Der Zeichenwert des ersten Zeichens darf nicht größer sein als der des zweiten. Der _Zeichenwert_ ist der Unicode-Codepunkt des Zeichens. Da Unicode-Codepunkte für Alphabete üblicherweise in ihrer Reihenfolge vergeben werden, bezeichnet `[a-z]` alle lateinischen Kleinbuchstaben und `[α-ω]` alle griechischen Kleinbuchstaben. Im [Modus ohne Unicode-Unterstützung](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden reguläre Ausdrücke als Folge von [BMP](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)-Zeichen interpretiert. Daher stellen Surrogatpaare in Zeichenklassen zwei Zeichen statt eines dar; Einzelheiten finden Sie weiter unten.
- Escape-Sequenzen: `\b`, `\-`, [Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) und andere [Zeichen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

Diese Schreibweisen können beliebig oft vorkommen; die von ihnen dargestellten Zeichenmengen werden vereinigt. Beispielsweise findet `/[a-zA-Z0-9]/` jeden Buchstaben und jede Ziffer.

Das vorangestellte `^` erzeugt in einer Zeichenklasse eine _Komplementklasse_. Beispielsweise findet `[^abc]` jedes Zeichen außer `a`, `b` und `c`. Steht `^` innerhalb einer Zeichenklasse, ist es ein literales Zeichen: `[a^b]` findet beispielsweise die Zeichen `a`, `^` und `b`.

Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals) parst Literale regulärer Ausdrücke nur grob, damit sie ein solches Literal nicht bei einem `/` beendet, das innerhalb einer Zeichenklasse steht. Deshalb ist `/[/]/` gültig, ohne dass `/` maskiert werden muss.

Die Grenzen eines Zeichenbereichs dürfen nicht für mehr als ein Zeichen stehen. Das wäre der Fall, wenn Sie ein [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwenden. Zum Beispiel:

```js-nolint example-bad
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

Im [Modus ohne Unicode-Unterstützung](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) wird `-` in einem Zeichenbereich als literales Zeichen behandelt, wenn eine der Grenzen eine Zeichenklasse ist. Diese [aus Gründen der Webkompatibilität veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) sollten Sie nicht verwenden.

```js
/[\s-9]/.test("-"); // true
```

Im [Modus ohne Unicode-Unterstützung](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden reguläre Ausdrücke als Folge von BMP-Zeichen interpretiert. Daher stellen Surrogatpaare in Zeichenklassen zwei Zeichen statt eines dar.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

Auch wenn das Muster die [Groß- und Kleinschreibung ignoriert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), ist die Schreibweise der beiden Bereichsgrenzen dafür entscheidend, welche Zeichen zum Bereich gehören. Beispielsweise findet das Muster `/[E-F]/i` nur `E`, `F`, `e` und `f`. Das Muster `/[E-f]/i` findet dagegen alle {{Glossary("ASCII", "ASCII")}}-Groß- und Kleinbuchstaben (da es `E–Z` und `a–f` umfasst) sowie `[`, `\`, `]`, `^`, `_` und `` ` ``.

### Zeichenklassen außerhalb des v-Modus

Zeichenklassen außerhalb des `v`-Modus interpretieren die meisten Zeichen [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und schränken die zulässigen Zeichen weniger stark ein. Beispielsweise steht `.` für einen literalen Punkt und nicht für den [Platzhalter](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Nur `\`, `]` und `-` können nicht ohne Weiteres literal vorkommen.

- In Zeichenklassen werden die meisten Escape-Sequenzen unterstützt, ausgenommen `\b`, `\B` und [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` bezeichnet ein Rückschrittzeichen statt einer [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion); die beiden anderen verursachen im Unicode-Modus Syntaxfehler.

  Im Modus ohne Unicode-Unterstützung ist `\B` ein Identity-Escape für `B`, und numerische Escapes werden als veraltete Oktal-Escapes oder Identity-Escapes statt als Rückverweise interpretiert. Beispielsweise findet `\1` U+0001 und `\8` das Zeichen `8`. Um `\` literal zu verwenden, maskieren Sie es als `\\`.

- Das Zeichen `]` markiert das Ende der Zeichenklasse. Um es literal zu verwenden, maskieren Sie es als `\]`.
- Der Bindestrich (`-`) kennzeichnet einen Bereich, wenn er zwischen zwei Zeichen steht. Am Anfang oder Ende einer Zeichenklasse ist er ein literales Zeichen. Er ist auch dann ein literales Zeichen, wenn er als Grenze eines Bereichs verwendet wird. Beispielsweise findet `[a-]` die Zeichen `a` und `-`, `[!--]` die Zeichen von `!` bis `-` und `[--9]` die Zeichen von `-` bis `9`. Sie können ihn auch als `\-` maskieren, um ihn an beliebiger Stelle literal zu verwenden.

### Zeichenklassen im v-Modus

Das Grundprinzip von Zeichenklassen bleibt im `v`-Modus gleich: Sie können die meisten Zeichen weiterhin literal verwenden, mit `-` Zeichenbereiche angeben und Escape-Sequenzen einsetzen. Eine der wichtigsten Funktionen des `v`-Flags ist die _Mengennotation_ innerhalb von Zeichenklassen. Wie bereits erwähnt, können gewöhnliche Zeichenklassen Vereinigungen ausdrücken, indem sie zwei Bereiche aneinanderreihen. So steht `[A-Z0-9]` für „die Vereinigung der Menge `[A-Z]` mit der Menge `[0-9]`“. Andere Operationen mit Zeichenmengen, etwa Schnittmengen und Differenzen, lassen sich auf diese Weise jedoch nicht einfach darstellen.

Mit dem `v`-Flag wird eine Schnittmenge durch `&&` und eine Differenz durch `--` ausgedrückt. Fehlen beide Operatoren, bedeutet das eine Vereinigung. Die beiden Operanden von `&&` oder `--` können ein Zeichen, ein Zeichen-Escape, ein Zeichenklassen-Escape oder sogar eine weitere Zeichenklasse sein. Um beispielsweise „ein Wortzeichen, das kein Unterstrich ist“ auszudrücken, können Sie `[\w--_]` verwenden. Operatoren dürfen nicht auf derselben Ebene gemischt werden. Beispielsweise ist `[\w&&[A-z]--_]` ein Syntaxfehler. Da Sie Zeichenklassen verschachteln können, können Sie stattdessen `[\w&&[[A-z]--_]]` oder `[[\w&&[A-z]]--_]` schreiben (beides bedeutet `[A-Za-z]`). Ebenso ist `[AB--C]` ungültig; Sie müssen `[A[B--C]]` schreiben (was lediglich `[AB]` bedeutet).

Im `v`-Modus kann das [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` Zeichenfolgen endlicher Länge finden, etwa Emojis. Entsprechend können auch gewöhnliche Zeichenklassen mehr als ein Zeichen finden. Um ein „Zeichenfolgenliteral“ in einer Zeichenklasse zu schreiben, schließen Sie die Zeichenfolge in `\q{...}` ein. Die einzige hier unterstützte Regex-Syntax ist die [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction). Abgesehen davon muss `\q` ausschließlich Literale (einschließlich maskierter Zeichen) umschließen. So wird sichergestellt, dass Zeichenklassen nur Zeichenfolgen endlicher Länge mit endlich vielen Möglichkeiten finden können.

Anders als bei einer gewöhnlichen Disjunktion spielt weder die Reihenfolge der Alternativen innerhalb von `\q` noch die Position des `\q`-Escapes unter den übrigen vereinigten Operanden eine Rolle. Beim Abgleich werden alle in einer Zeichenklasse angegebenen Alternativen stets in absteigender Reihenfolge ihrer Länge geprüft; der Abgleich ist also gierig. Beispielsweise finden `[\q{a|ab}]`, `[\q{ab|a}]`, `[\q{ab}a]` und `[a\q{ab}]` bei Anwendung auf `"ab"` alle die Zeichenfolge `"ab"`.

Komplementklassen `[^...]` können keine Zeichenfolgen finden, die länger als ein Zeichen sind. Beispielsweise ist `[\q{ab|c}]` gültig und findet die Zeichenfolge `"ab"`. `[^\q{ab|c}]` ist dagegen ungültig, weil unklar ist, wie viele Zeichen verbraucht werden sollen. Bei der Prüfung wird kontrolliert, ob alle `\q` ausschließlich einzelne Zeichen enthalten und alle `\p` Zeicheneigenschaften angeben: Bei Vereinigungen müssen sämtliche Operanden ausschließlich Zeichen enthalten, bei Schnittmengen mindestens ein Operand und bei Differenzen der am weitesten links stehende Operand. Die Prüfung erfolgt syntaktisch, ohne die tatsächlich angegebene Zeichenmenge zu berücksichtigen. Obwohl `/[^\q{ab|c}--\q{ab}]/v` gleichbedeutend mit `/[^c]/v` ist, wird es daher trotzdem zurückgewiesen.

Da die Syntax von Zeichenklassen nun komplexer ist, sind mehr Zeichen reserviert und dürfen nicht ohne Maskierung literal vorkommen.

- Zusätzlich zu `]` und `\` müssen die folgenden Zeichen in Zeichenklassen maskiert werden, wenn sie literale Zeichen darstellen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Diese Liste ähnelt der Liste der [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character). Allerdings sind `^`, `$`, `*`, `+` und `?` innerhalb von Zeichenklassen nicht reserviert, während `/` und `-` außerhalb von Zeichenklassen nicht reserviert sind (obwohl `/` ein Regex-Literal begrenzen kann und dann weiterhin maskiert werden muss). Alle diese Zeichen dürfen in Zeichenklassen im `u`-Modus ebenfalls optional maskiert werden.
- Auch die folgenden Folgen aus zwei Satzzeichen müssen maskiert werden (ohne das `v`-Flag sind sie ohnehin kaum sinnvoll): `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. Im `u`-Modus dürfen einige dieser Zeichen innerhalb von Zeichenklassen nur unmaskiert vorkommen und verursachen maskiert einen Syntaxfehler. Im `v`-Modus müssen sie maskiert werden, wenn sie paarweise auftreten; einzeln können sie optional maskiert werden. Beispielsweise ist `/[\!]/u` ungültig, weil es sich um ein [Identity-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) handelt. Dagegen sind sowohl `/[\!]/v` als auch `/[!]/v` gültig, während `/[!!]/v` ungültig ist. Die Referenz zu [literalen Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) enthält eine ausführliche Tabelle dazu, welche Zeichen maskiert oder unmaskiert vorkommen dürfen.

### Komplementklassen und Abgleich ohne Berücksichtigung der Groß- und Kleinschreibung

Beim [Abgleich ohne Berücksichtigung der Groß- und Kleinschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) werden sowohl die erwartete Zeichenmenge als auch die abzugleichende Zeichenfolge einer Groß-/Kleinschreibungsfaltung unterzogen. Bei Komplementklassen ist die Reihenfolge wichtig, in der JavaScript die Faltung und die Komplementbildung durchführt. Kurz gesagt findet `[^...]` im `u`-Modus `allCharacters - caseFold(original)`, im `v`-Modus dagegen `caseFold(allCharacters) - caseFold(original)`. Dadurch wird sichergestellt, dass sich alle Schreibweisen für Komplementklassen, darunter `[^...]`, `\P` und `\W`, bei doppelter Negation aufheben.

Betrachten Sie die folgenden beiden regulären Ausdrücke (zur Vereinfachung nehmen wir an, dass Unicode-Zeichen einer von drei Arten angehören: Kleinbuchstaben, Großbuchstaben und Zeichen ohne Groß-/Kleinschreibung. Außerdem hat jeder Großbuchstabe genau ein entsprechendes kleingeschriebenes Gegenstück und umgekehrt):

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

`r2` enthält eine doppelte Negation und scheint gleichbedeutend mit `r1` zu sein. Tatsächlich findet `r1` jedoch alle ASCII-Klein- und Großbuchstaben, während `r2` keinen davon findet. Hier ist die Erklärung Schritt für Schritt:

- In `r1` erzeugt `\p{Lowercase_Letter}` eine Menge aller Kleinbuchstaben. Die Zeichen in dieser Menge werden anschließend auf ihre kleingeschriebene Form gefaltet und bleiben daher unverändert. Auch die Eingabezeichenfolge wird auf Kleinschreibung gefaltet. Somit werden sowohl `"A"` als auch `"a"` zu `"a"` gefaltet und von `r1` gefunden.
- In `r2` erzeugt `\P{Lowercase_Letter}` zunächst eine Menge aller Zeichen, die keine Kleinbuchstaben sind, also Großbuchstaben und Zeichen ohne Groß-/Kleinschreibung. Die Zeichen in dieser Menge werden anschließend auf ihre kleingeschriebene Form gefaltet. Die Zeichenmenge enthält damit alle Kleinbuchstaben und Zeichen ohne Groß-/Kleinschreibung. `[^...]` negiert den Abgleich und findet dadurch alles, was _nicht_ in dieser Menge enthalten ist, also einen Großbuchstaben. Die Eingabe wird jedoch weiterhin auf Kleinschreibung gefaltet. `"A"` wird daher zu `"a"` gefaltet und von `r2` nicht gefunden.

Entscheidend ist hier, dass die erwartete Zeichenmenge nach der Negation durch `[^...]` möglicherweise keine Teilmenge der Menge der gefalteten Unicode-Zeichen ist. Dadurch kann die gefaltete Eingabe außerhalb der erwarteten Zeichenmenge liegen. Im `v`-Modus wird auch die Menge aller Zeichen einer Groß-/Kleinschreibungsfaltung unterzogen. Die Zeichenklasse `\P` selbst verhält sich im `v`-Modus ebenfalls etwas anders (siehe [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)). All dies stellt sicher, dass `[^\P{Lowercase_Letter}]` und `\p{Lowercase_Letter}` vollständig gleichbedeutend sind.

## Beispiele

### Hexadezimalziffern finden

Die folgende Funktion ermittelt, ob eine Zeichenfolge eine gültige Hexadezimalzahl enthält:

```js
function isHexadecimal(str) {
  return /^[0-9A-F]+$/i.test(str);
}

isHexadecimal("2F3"); // true
isHexadecimal("beef"); // true
isHexadecimal("undefined"); // false
```

### Eine Schnittmenge verwenden

Die folgende Funktion findet griechische Buchstaben.

```js
function greekLetters(str) {
  return str.match(/[\p{Script_Extensions=Greek}&&\p{Letter}]/gv);
}

// 𐆊 is U+1018A GREEK ZERO SIGN
greekLetters("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### Eine Differenz verwenden

Die folgende Funktion findet alle Ziffern außerhalb von ASCII.

```js
function nonASCIINumbers(str) {
  return str.match(/[\p{Decimal_Number}--\d]/gv);
}

// 𑜹 is U+11739 AHOM DIGIT NINE
nonASCIINumbers("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### Zeichenfolgen finden

Die folgende Funktion findet alle Zeilenende-Sequenzen, einschließlich der [Zeilenendezeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und der Sequenz `\r\n` (CRLF). Die Reihenfolge der Alternativen spielt keine Rolle, da immer die längste Alternative, `\r\n`, bevorzugt wird.

```js
function getLineTerminatorSequences(str) {
  return str.match(/[\r\n\u2028\u2029\q{\r\n}]/gv);
}

getLineTerminatorSequences(`
A poem\r
Is split\rInto many
Stanzas
`); // ['\n', '\r\n', '\r', '\n', '\n']
```

Dieser reguläre Ausdruck ist genau gleichbedeutend mit `/(?:\r\n|\r|\n|\u2028|\u2029)/gu` oder `/(?:\r\n|[\r\n\u2028\u2029])/gu`. Bei einer gewöhnlichen Disjunktion spielt die Reihenfolge der Alternativen jedoch eine Rolle. Damit `\r\n` bevorzugt wird, muss es zuerst angegeben werden. Eine Zeichenklasse ist nicht nur kürzer, sondern vermeidet auch diese Fehlerquelle.

Besonders nützlich ist `\q{}` bei Differenzen und Schnittmengen. Zuvor war dies mit [mehreren Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) möglich. Die folgende Funktion findet Flaggen, die weder die amerikanische, chinesische, russische, britische noch die französische Flagge sind.

```js
function notUNSCPermanentMember(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

notUNSCPermanentMember("🇺🇸"); // false
notUNSCPermanentMember("🇩🇪"); // true
```

Dieses Beispiel ist weitgehend gleichbedeutend mit `/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v`, möglicherweise jedoch effizienter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden zu [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Literales Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [RegExp-v-Flag mit Mengennotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
