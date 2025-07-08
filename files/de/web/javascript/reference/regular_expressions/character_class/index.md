---
title: "Zeichenklasse: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **Zeichenklasse** passt zu jedem Zeichen in oder nicht in einer benutzerdefinierten Menge von Zeichen. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag aktiviert ist, kann sie auch verwendet werden, um endliche Zeichenfolgen zu matchen.

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
  - : Kann ein einzelnes Zeichen sein, eine andere in eckige Klammern eingeschlossene Zeichenklasse, ein [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), ein [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) oder eine Zeichenfolge mit der `\q` Syntax.
- `substring`
  - : Eine literale Zeichenfolge.

## Beschreibung

Eine Zeichenklasse spezifiziert eine Liste von Zeichen zwischen eckigen Klammern und passt zu jedem Zeichen in der Liste. Das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag verändert drastisch, wie Zeichenklassen geparst und interpretiert werden. Die folgenden Syntaxen sind sowohl im `v`-Modus als auch im Nicht-`v`-Modus verfügbar:

- Ein einzelnes Zeichen: passt zu dem Zeichen selbst.
- Ein Bereich von Zeichen: passt zu jedem Zeichen im inklusiven Bereich. Der Bereich wird durch zwei Zeichen angegeben, die durch einen Bindestrich (`-`) getrennt sind. Das erste Zeichen muss im Zeichencode kleiner sein als das zweite Zeichen. Der _Zeichencode_ ist der Unicode-Codepunkt des Zeichens. Da Unicode-Codepunkte normalerweise den Alphabeten in Reihenfolge zugewiesen werden, spezifiziert `[a-z]` alle Kleinbuchstaben des lateinischen Alphabets, während `[α-ω]` alle Kleinbuchstaben des griechischen Alphabets spezifiziert. Im [Unicode-unempfindlichen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regexe als eine Sequenz von [BMP](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) Zeichen interpretiert. Daher repräsentieren Surrogatpaare in Zeichenklassen zwei Zeichen anstatt eines; siehe unten für Details.
- Escape-Sequenzen: `\b`, `\-`, [Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) und andere [Zeichen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

Diese Syntaxen können beliebig oft auftreten, und die von ihnen repräsentierten Zeichensätze werden vereinigt. Zum Beispiel passt `/[a-zA-Z0-9]/` zu jedem Buchstaben oder Ziffer.

Das `^` Präfix in einer Zeichenklasse erzeugt eine _Komplementklasse_. Zum Beispiel passt `[^abc]` zu jedem Zeichen außer `a`, `b` oder `c`. Das Zeichen `^` ist ein wörtliches Zeichen, wenn es in der Mitte einer Zeichenklasse erscheint — zum Beispiel passt `[a^b]` zu den Zeichen `a`, `^` und `b`.

Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals) macht ein sehr grobes Parsen von Regex-Literalen, sodass das Regex-Literal nicht bei einem `/` Zeichen endet, das innerhalb einer Zeichenklasse erscheint. Dies bedeutet, dass `/[/]/` gültig ist, ohne dass das `/` maskiert werden muss.

Die Grenzen eines Zeichenbereichs dürfen nicht mehr als ein Zeichen angeben, was passiert, wenn Sie ein [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwenden. Zum Beispiel:

```js-nolint example-bad
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

Im [Unicode-unempfindlichen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) bewirken Zeichenbereiche, bei denen eine Grenze eine Zeichenklasse ist, dass `-` ein wörtliches Zeichen wird. Dies ist eine [veraltete Syntax für die Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js
/[\s-9]/.test("-"); // true
```

Im [Unicode-unempfindlichen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regexe als eine Sequenz von BMP-Zeichen interpretiert. Deshalb repräsentieren Surrogatpaare in Zeichenklassen zwei Zeichen statt eines.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

Auch wenn das Muster [die Groß- und Kleinschreibung ignoriert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), ist die Groß- und Kleinschreibung der beiden Enden eines Bereichs entscheidend dafür, welche Zeichen zum Bereich gehören. Zum Beispiel passt das Muster `/[E-F]/i` nur zu `E`, `F`, `e` und `f`, während das Muster `/[E-f]/i` zu allen Groß- und Kleinbuchstaben {{Glossary("ASCII", "ASCII")}} passt (da es über `E–Z` und `a–f` hinausgeht) sowie `[`, `\`, `]`, `^`, `_` und `` ` ``.

### Nicht-v-Modus Zeichenklasse

Nicht-`v`-Modus Zeichenklassen interpretieren die meisten Zeichen [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und haben weniger Einschränkungen hinsichtlich der Zeichen, die sie enthalten können. Zum Beispiel ist `.` das wörtliche Punktzeichen, nicht der [Wildcards](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Die einzigen Zeichen, die nicht wörtlich erscheinen können, sind `\`, `]` und `-`.

- In Zeichenklassen werden die meisten Escape-Sequenzen unterstützt, außer `\b`, `\B` und [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` zeigt ein Rückschrittzeichen anstatt einer [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) an, während die anderen beiden Syntaxfehler verursachen. Um `\` wörtlich zu verwenden, maskieren Sie es als `\\`.
- Das Zeichen `]` zeigt das Ende der Zeichenklasse an. Um es wörtlich zu verwenden, maskieren Sie es als `\]`.
- Das Zeichen `-`, wenn es zwischen zwei Zeichen verwendet wird, zeigt einen Bereich an. Wenn es am Anfang oder Ende einer Zeichenklasse erscheint, ist es ein wörtliches Zeichen. Es ist auch ein wörtliches Zeichen, wenn es in der Grenze eines Bereichs verwendet wird. Zum Beispiel passt `[a-]` zu den Zeichen `a` und `-`, `[!--]` passt zu den Zeichen `!` bis `-`, und `[--9]` passt zu den Zeichen `-` bis `9`. Sie können es auch als `\-` maskieren, wenn Sie es wörtlich verwenden möchten.

### v-Modus Zeichenklasse

Die grundlegende Idee der Zeichenklassen im `v` Modus bleibt dieselbe: Sie können immer noch die meisten Zeichen wörtlich verwenden, `-` verwenden, um Zeichenbereiche anzugeben, und Escape-Sequenzen verwenden. Eine der wichtigsten Funktionen des `v` Flags ist die _Mengen-Notation_ innerhalb von Zeichenklassen. Wie bereits erwähnt, können normale Zeichenklassen Vereinigungen durch das Aneinanderreihen von zwei Bereichen ausdrücken, wie `[A-Z0-9]`, um "die Vereinigung der Menge `[A-Z]` und der Menge `[0-9]`" anzugeben. Es gibt jedoch keinen einfachen Weg, andere Operationen mit Zeichensätzen darzustellen, wie Schnittmenge und Differenz.

Mit dem `v` Flag wird die Schnittmenge mit `&&` ausgedrückt, und die Subtraktion mit `--`. Das Fehlen von beidem impliziert eine Vereinigung. Die beiden Operanden von `&&` oder `--` können ein Zeichen, Zeichen-Escape, Zeichenklassen-Escape oder sogar eine andere Zeichenklasse sein. Zum Beispiel, um "ein Wortzeichen, das kein Unterstrich ist" zu exprimieren, können Sie `[\w--_]` verwenden. Sie können keine Operatoren auf derselben Ebene mixen. Zum Beispiel ist `[\w&&[A-z]--_]` ein Syntaxfehler. Da Sie jedoch Zeichenklassen verschachteln können, können Sie explizit schreiben `[\w&&[[A-z]--_]]` oder `[[\w&&[A-z]]--_]` (die beide `[A-Za-z]` bedeuten). Ebenso ist `[AB--C]` ungültig und Sie müssen `[A[B--C]]` schreiben (was einfach `[AB]` bedeutet).

Im `v` Modus kann das [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` endliche Zeichenfolgen matchen, wie Emojis. Zur Symmetrie können reguläre Zeichenklassen ebenfalls mehr als ein Zeichen matchen. Um ein "Literal einer Zeichenkette" in einer Zeichenklasse zu schreiben, umschließen Sie die Zeichenkette mit `\q{...}`. Die einzige in diesem Fall unterstützte Regex-Syntax ist [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) — abgesehen davon muss `\q` Literalzeichen (einschließlich maskierter Zeichen) vollständig umschließen. Dies stellt sicher, dass Zeichenklassen nur endliche Zeichenfolgen mit einer endlichen Anzahl von Möglichkeiten matchen können.

Da die Zeichenklassensyntax jetzt ausgefeilter ist, sind mehr Zeichen reserviert und dürfen nicht mehr wörtlich erscheinen.

- Zusätzlich zu `]` und `\` müssen die folgenden Zeichen in Zeichenklassen maskiert werden, wenn sie wörtliche Zeichen darstellen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Diese Liste ähnelt der Liste der [Syntax-Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character), mit der Ausnahme, dass `^`, `$`, `*`, `+` und `?` in Zeichenklassen nicht reserviert sind, während `/` und `-` außerhalb von Zeichenklassen nicht reserviert sind (obwohl `/` ein Regex-Literal begrenzen kann und daher trotzdem maskiert werden muss). Alle diese Zeichen können auch optional in `u`-Modus-Zeichenklassen maskiert werden.
- Die folgenden "doppelten Interpunktionszeichen"-Sequenzen müssen ebenfalls maskiert werden (sie machen ohne das `v` Flag sowieso nicht viel Sinn): `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. Im `u` Modus können einige dieser Zeichen nur wörtlich innerhalb von Zeichenklassen erscheinen und verursachen einen Syntaxfehler, wenn sie maskiert werden. Im `v` Modus müssen sie maskiert werden, wenn sie paarweise erscheinen, können aber optional maskiert werden, wenn sie alleine erscheinen. Zum Beispiel ist `/[\!]/u` ungültig, weil es ein [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) ist, aber sowohl `/[\!]/v` als auch `/[!]/v` sind gültig, während `/[!!]/v` ungültig ist. Der [wörtliche Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Verweis enthält eine detaillierte Tabelle, welche Zeichen maskiert oder nicht maskiert erscheinen können.

Komplementzeichenklassen `[^...]` können nicht länger als ein Zeichen lange Zeichenfolgen matchen. Zum Beispiel ist `[\q{ab|c}]` gültig und passt zur Zeichenfolge `"ab"`, aber `[^\q{ab|c}]` ist ungültig, weil unklar ist, wie viele Zeichen verbraucht werden sollen. Die Überprüfung erfolgt, indem sichergestellt wird, dass alle `\q` einzeln Zeichen enthalten und alle `\p` Zeichen-Eigenschaften angeben — für Vereinigungen müssen alle Operanden reine Zeichen sein; für Schnittmengen muss mindestens ein Operand reine Zeichen sein; für Subtraktion muss der linke Operand reine Zeichen sein. Die Überprüfung ist syntaktisch ohne das eigentliche Zeichenset zu betrachten, was bedeutet, dass obwohl `/[^\q{ab|c}--\q{ab}]/v` äquivalent zu `/[^c]/v` ist, es trotzdem abgelehnt wird.

### Komplementklassen und groß-/kleinschreibungsempfindliches Matching

[Groß-/Kleinschreibungsempfindliches](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Matching funktioniert, indem sowohl der erwartete Zeichensatz als auch die gematchte Zeichenfolge in Kleinschreibung gefaltet werden. Beim Spezifizieren von Komplementklassen ist die Reihenfolge, in der JavaScript die Groß-/Kleinschreibungsumwandlung und die Komplemente ausführt, wichtig. Kurz gesagt, `[^...]` im `u` Modus passt zu `allCharacters - caseFold(original)`, während es im `v` Modus zu `caseFold(allCharacters) - caseFold(original)` passt. Dies stellt sicher, dass alle Komplementklassensyntaxen, einschließlich `[^...]`, `\P`, `\W`, usw., sich gegenseitig aufheben.

Betrachten Sie die folgenden zwei Regexe (um die Dinge zu vereinfachen, nehmen wir an, dass Unicode-Zeichen eine von drei Arten sind: Kleinbuchstaben, Großbuchstaben und ohne Kleinschreibung, und jeder Großbuchstabe ein einzigartiges Kleinbuchstabenäquivalent hat und umgekehrt):

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

Das `r2` ist eine doppelte Verneinung und scheint äquivalent zu `r1` zu sein. Aber tatsächlich passt `r1` zu allen Klein- und Großbuchstaben der ASCII-Zeichen, während `r2` zu keinen passt. Hier ist eine Schritt-für-Schritt-Erklärung:

- In `r1` konstruiert `\p{Lowercase_Letter}` eine Menge aller Kleinbuchstaben. Zeichen in dieser Menge werden dann in ihre kleingeschriebene Form gefaltet, sodass sie gleich bleiben. Die Eingabezeichenfolge wird ebenfalls in Kleinbuchstaben gefaltet. Daher werden `"A"` und `"a"` beide zu `"a"` gefaltet und von `r1` gematcht.
- In `r2` konstruiert `\P{Lowercase_Letter}` zuerst eine Menge aller nicht-Kleinbuchstaben, d.h. aller Großbuchstaben und Zeichen ohne Kleinschreibung. Zeichen in dieser Menge werden dann in ihre kleinbuchstabige Form gefaltet, sodass der Zeichensatz aus allen Kleinbuchstaben und Zeichen ohne Klein- oder Großschreibung besteht. `[^...]` negiert das Match, wodurch es zu allem passt, was _nicht_ in dieser Menge ist, d.h. einem Großbuchstaben. Allerdings wird die Eingabe immer noch in Kleinbuchstaben gefaltet, sodass `"A"` zu `"a"` gefaltet wird und nicht von `r2` gematcht wird.

Die Hauptbeobachtung hier ist, dass nach der Negation mit `[^...]` das erwartete Zeichenset möglicherweise kein Teil des gefalteten Zeichensatzes der Unicode-Zeichen ist, was dazu führt, dass die gefaltete Eingabe nicht im erwarteten Zeichensatz liegt. Im `v` Modus wird die Menge aller Zeichen ebenfalls gefaltet. Die `\P` Zeichenklasse selbst funktioniert im `v` Modus auch etwas anders (siehe [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)). All dies stellt sicher, dass `[^\P{Lowercase_Letter}]` und `\p{Lowercase_Letter}` strikt äquivalent sind.

## Beispiele

### Hexadezimale Ziffern matching

Die folgende Funktion bestimmt, ob eine Zeichenfolge eine gültige hexadezimale Zahl enthält:

```js
function isHexadecimal(str) {
  return /^[0-9A-F]+$/i.test(str);
}

isHexadecimal("2F3"); // true
isHexadecimal("beef"); // true
isHexadecimal("undefined"); // false
```

### Verwendung der Schnittmenge

Die folgende Funktion passt zu griechischen Buchstaben.

```js
function greekLetters(str) {
  return str.match(/[\p{Script_Extensions=Greek}&&\p{Letter}]/gv);
}

// 𐆊 is U+1018A GREEK ZERO SIGN
greekLetters("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### Verwendung der Subtraktion

Die folgende Funktion passt zu allen nicht-ASCII-Zahlen.

```js
function nonASCIINumbers(str) {
  return str.match(/[\p{Decimal_Number}--\d]/gv);
}

// 𑜹 is U+11739 AHOM DIGIT NINE
nonASCIINumbers("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### Zeichenfolgen matching

Die folgende Funktion passt zu allen Zeilenbeendungssequenzen, einschließlich der [Zeilenendzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und der Sequenz `\r\n` (CRLF).

```js
function getLineTerminators(str) {
  return str.match(/[\r\n\u2028\u2029\q{\r\n}]/gv);
}

getLineTerminators(`
A poem\r
Is split\r\n
Into many
Stanzas
`); // [ '\r', '\r\n', '\n' ]
```

Dieses Beispiel ist genau äquivalent zu `/(?:\r|\n|\u2028|\u2029|\r\n)/gu` oder `/(?:[\r\n\u2028\u2029]|\r\n)/gu`, außer dass es kürzer ist.

Der nützlichste Fall für `\q{}` ist, wenn Subtraktion und Schnittmenge durchgeführt werden. Dies war vorher mit [mehreren Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) möglich. Die folgende Funktion passt zu Flaggen, die nicht die amerikanische, chinesische, russische, britische oder französische Flagge sind.

```js
function notUNSCPermanentMember(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

notUNSCPermanentMember("🇺🇸"); // false
notUNSCPermanentMember("🇩🇪"); // true
```

Dieses Beispiel ist größtenteils äquivalent zu `/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v`, außer dass es vielleicht performanter ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wörtliches Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [RegExp v Flag mit Mengen-Notation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
