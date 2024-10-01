---
title: "Zeichenklasse: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Zeichenklasse** stimmt mit jedem Zeichen innerhalb oder außerhalb einer benutzerdefinierten Zeichenmenge überein. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen von endlicher Länge zu matchen.

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
  - : Kann ein einzelnes Zeichen, eine andere in eckige Klammern eingeschlossene Zeichenklasse, ein [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), ein [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) oder eine Zeichenkette mit der `\q`-Syntax sein.
- `substring`
  - : Eine literale Zeichenkette.

## Beschreibung

Eine Zeichenklasse gibt eine Liste von Zeichen zwischen eckigen Klammern an und stimmt mit jedem Zeichen in der Liste überein. Das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag verändert drastisch die Art und Weise, wie Zeichenklassen geparst und interpretiert werden. Die folgenden Syntaxen sind sowohl im `v`-Modus als auch im Nicht-`v`-Modus verfügbar:

- Ein einzelnes Zeichen: stimmt mit dem Zeichen selbst überein.
- Ein Bereich von Zeichen: stimmt mit jedem Zeichen im eingeschlossenen Bereich überein. Der Bereich wird durch zwei Zeichen angegeben, die durch einen Bindestrich (`-`) getrennt sind. Das erste Zeichen muss im Zeichenwert kleiner sein als das zweite Zeichen. Der _Zeichenwert_ ist der Unicode-Codepunkt des Zeichens. Da Unicode-Codepunkte üblicherweise Alphabete in Reihenfolge zuordnen, spezifiziert `[a-z]` alle Kleinbuchstaben des lateinischen Alphabets, während `[α-ω]` alle Kleinbuchstaben des griechischen Alphabets spezifiziert. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regexe als Sequenz von [BMP](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)-Zeichen interpretiert. Daher stellen Surrogatpaare in Zeichenklassen zwei Zeichen anstelle von einem dar; siehe unten für Details.
- Escape-Sequenzen: `\b`, `\-`, [Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) und andere [Zeichen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

Diese Syntaxen können beliebig oft vorkommen, und die von ihnen dargestellten Zeichensätze werden vereinigt. Zum Beispiel stimmt `/[a-zA-Z0-9]/` mit jedem Buchstaben oder Ziffer überein.

Das `^`-Präfix in einer Zeichenklasse erstellt eine _Komplementklasse_. Zum Beispiel stimmt `[^abc]` mit jedem Zeichen außer `a`, `b` oder `c` überein. Das `^`-Zeichen ist ein literales Zeichen, wenn es in der Mitte einer Zeichenklasse erscheint — zum Beispiel stimmt `[a^b]` mit den Zeichen `a`, `^` und `b` überein.

Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals) führt eine sehr grobe Analyse der Regex-Literale durch, damit das Regex-Literal nicht am `/`-Zeichen endet, das innerhalb einer Zeichenklasse erscheint. Das bedeutet, dass `/[/]/` gültig ist, ohne dass das `/` entkommen werden muss.

Die Grenzen eines Zeichenbereichs dürfen nicht mehr als ein Zeichen angeben, was passiert, wenn Sie ein [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwenden. Zum Beispiel:

```js-nolint example-bad
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Zeichenbereiche, bei denen eine Grenze eine Zeichenklasse ist, dazu führen, dass `-` ein literales Zeichen wird. Dies ist eine [veraltete Syntax zur Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js
/[\s-9]/.test("-"); // true
```

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regexe als eine Sequenz von BMP-Zeichen interpretiert. Daher stellen Surrogatpaare in Zeichenklassen zwei Zeichen anstelle von einem dar.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

Selbst wenn das Muster die [Groß-/Kleinschreibung ignoriert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), ist die Groß-/Kleinschreibung der beiden Enden eines Bereichs entscheidend dafür, welche Zeichen zum Bereich gehören. Zum Beispiel stimmt das Muster `/[E-F]/i` nur mit `E`, `F`, `e` und `f` überein, während das Muster `/[E-f]/i` mit allen Groß- und Kleinbuchstaben des {{Glossary("ASCII", "ASCII")}}-Zeichensatzes (weil es über `E–Z` und `a–f` spannt) übereinstimmt, sowie mit `[`, `\`, `]`, `^`, `_` und `` ` ``.

### Nicht-v-Modus-Zeichenklasse

Nicht-`v`-Modus-Zeichenklassen interpretieren die meisten Zeichen [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und haben weniger Einschränkungen hinsichtlich der Zeichen, die sie enthalten können. Zum Beispiel ist `.` das wörtliche Punktzeichen, nicht der [Platzhalter](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Die einzigen Zeichen, die nicht wörtlich erscheinen dürfen, sind `\`, `]` und `-`.

- In Zeichenklassen werden die meisten Escape-Sequenzen unterstützt, außer `\b`, `\B` und [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` gibt ein Rückschrittzeichen anstelle einer [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) an, während die anderen beiden Syntaxfehler verursachen. Um `\` wörtlich zu verwenden, entkommen Sie es als `\\`.
- Das `]`-Zeichen zeigt das Ende der Zeichenklasse an. Um es wörtlich zu verwenden, entkommen Sie es als `\]`.
- Das Bindestrich (`-`)-Zeichen zeigt, wenn es zwischen zwei Zeichen verwendet wird, einen Bereich an. Wenn es am Anfang oder Ende einer Zeichenklasse erscheint, ist es ein wörtliches Zeichen. Es ist auch ein wörtliches Zeichen, wenn es in den Grenzen eines Bereichs verwendet wird. Zum Beispiel stimmt `[a-]` mit den Zeichen `a` und `-`, `[!--]` stimmt mit den Zeichen `!` bis `-`, und `[--9]` stimmt mit den Zeichen `-` bis `9` überein. Sie können es auch als `\-` entkommen, wenn Sie es irgendwo wörtlich verwenden möchten.

### v-Modus-Zeichenklasse

Die Grundidee von Zeichenklassen im `v`-Modus bleibt die gleiche: Sie können immer noch die meisten Zeichen wörtlich verwenden, `-` verwenden, um Zeichenbereiche anzugeben, und Escape-Sequenzen verwenden. Eines der wichtigsten Merkmale des `v`-Flags ist die _Mengennotation_ innerhalb von Zeichenklassen. Wie bereits erwähnt, können normale Zeichenklassen Vereinigungen durch die Verkettung von zwei Bereichen ausdrücken, wie zum Beispiel die Verwendung von `[A-Z0-9]`, um "die Vereinigung der Menge `[A-Z]` und der Menge `[0-9]`" zu bedeuten. Es gibt jedoch keinen einfachen Weg, andere Operationen mit Zeichensätzen darzustellen, wie z. B. Schnittmenge und Differenz.

Mit dem `v`-Flag wird die Schnittmenge mit `&&` und die Subtraktion mit `--` ausgedrückt. Das Fehlen von beidem impliziert Vereinigung. Die beiden Operanden von `&&` oder `--` können ein Zeichen, ein Zeichen-Escape, ein Zeichenklassen-Escape oder sogar eine andere Zeichenklasse sein. Zum Beispiel, um "ein Wortzeichen, das kein Unterstrich ist" auszudrücken, können Sie `[\w--_]` verwenden. Sie können Operatoren nicht auf derselben Ebene mischen. Zum Beispiel ist `[\w&&[A-z]--_]` ein Syntaxfehler. Da Sie jedoch Zeichenklassen verschachteln können, können Sie explizit schreiben `[\w&&[[A-z]--_]]` oder `[[\w&&[A-z]]--_]` (was beides `[A-Za-z]` bedeutet). Ebenso ist `[AB--C]` ungültig, und Sie müssen schreiben `[A[B--C]]` (was einfach `[AB]` bedeutet).

Im `v`-Modus kann das [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` mit Zeichenketten von endlicher Länge wie Emojis übereinstimmen. Aus Symmetriegründen können reguläre Zeichenklassen auch mehr als ein Zeichen übereinstimmen. Um in einer Zeichenklasse ein "Zeichenkettenliteraler" zu schreiben, umschließen Sie die Zeichenkette mit `\q{...}`. Die einzige in `\q` unterstützte Regex-Syntax ist [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) — abgesehen davon muss `\q` Literale vollständig umschließen (einschließlich entkommener Zeichen). Dies gewährleistet, dass Zeichenklassen nur mit Zeichenketten von endlicher Länge mit endlich vielen Möglichkeiten übereinstimmen können.

Da die Syntax der Zeichenklasse nun ausgefeilter ist, sind mehr Zeichen reserviert und dürfen nicht wörtlich erscheinen.

- Zusätzlich zu `]` und `\` müssen die folgenden Zeichen in Zeichenklassen entkommen werden, wenn sie wörtliche Zeichen darstellen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Diese Liste ist der Liste der [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) etwas ähnlich, außer dass `^`, `$`, `*`, `+` und `?` innerhalb von Zeichenklassen nicht reserviert sind, während `/` und `-` außerhalb von Zeichenklassen nicht reserviert sind (obwohl `/` ein Regex-Literal abgrenzen kann und daher immer noch entkommen werden muss). Alle diese Zeichen können in `u`-Modus-Zeichenklassen auch optional entkommen werden.
- Die folgenden "doppelten Interpunktionszeichen"-Sequenzen müssen ebenfalls entkommen werden (aber sie machen ohne das `v`-Flag sowieso wenig Sinn): `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. Im `u`-Modus können einige dieser Zeichen nur wörtlich innerhalb von Zeichenklassen erscheinen und führen zu einem Syntaxfehler, wenn sie entkommen werden. Im `v`-Modus müssen sie entkommen werden, wenn sie paarweise erscheinen, können aber optional entkommen werden, wenn sie einzeln erscheinen. Zum Beispiel ist `/[\!]/u` ungültig, weil es sich um einen [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) handelt, aber sowohl `/[\!]/v` als auch `/[!]/v` sind gültig, während `/[!!]/v` ungültig ist. Die [Buchstaben](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)-Referenz hat eine detaillierte Tabelle, welche Zeichen entkommen oder unentkommen erscheinen können.

Komplement-Zeichenklassen `[^...]` können nicht mit Zeichenfolgen matchen, die länger als ein Zeichen sind. Zum Beispiel ist `[\q{ab|c}]` gültig und stimmt mit der Zeichenfolge `"ab"` überein, aber `[^\q{ab|c}]` ist ungültig, weil unklar ist, wie viele Zeichen konsumiert werden sollen. Die Überprüfung erfolgt, indem geprüft wird, ob alle `\q` einzelne Zeichen enthalten und alle `\p` Zeichenattribute angeben — für Vereinigungen müssen alle Operanden rein Zeichen sein; für Schnittmengen muss mindestens ein Operand rein Zeichen sein; für Subtraktionen muss der linkeste Operand rein Zeichen sein. Die Überprüfung ist syntaktisch ohne Berücksichtigung des tatsächlich angegebenen Zeichensatzes, was bedeutet, dass obwohl `/[^\q{ab|c}--\q{ab}]/v` gleichwertig mit `/[^c]/v` ist, es dennoch abgelehnt wird.

### Komplementklassen und groß-/kleinschreibungsunabhängiges Matching

Im Nicht-`v`-Modus werden Komplement-Zeichenklassen `[^...]` einfach durch Invertieren des Matchergebnisses implementiert — das heißt, `[^...]` stimmt, wenn `[...]` nicht übereinstimmt, und umgekehrt. Die anderen Komplementklassen, wie `\P{...}` und `\W`, arbeiten durch die eifrige Konstruktion der Menge, die aus allen Zeichen ohne die angegebene Eigenschaft besteht. Sie scheinen dasselbe Verhalten zu erzeugen, sind jedoch komplexer, wenn sie mit [groß-/kleinschreibungsunabhängigem](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Matching kombiniert werden.

Betrachten Sie die folgenden zwei Regexe:

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

Das `r2` ist eine doppelte Verneinung und scheint mit `r1` gleichwertig zu sein. Tatsächlich stimmt `r1` jedoch mit allen Groß- und Kleinbuchstaben des ASCII-Zeichensatzes überein, während `r2` mit keinem übereinstimmt. Um zu veranschaulichen, wie es funktioniert, stellen Sie sich vor, dass wir nur mit ASCII-Zeichen arbeiten, nicht mit dem gesamten Unicode-Zeichensatz, und `r1` und `r2` wie unten angegeben sind:

```js
const r1 = /[a-z]/iu;
const r2 = /[^A-Z]/iu;
```

Denken Sie daran, dass die groß-/kleinschreibungsunabhängige Übereinstimmung durch das Falten sowohl des Musters als auch der Eingabe auf dieselbe Groß-/Kleinschreibung erfolgt (siehe {{jsxref("RegExp/ignoreCase", "ignoreCase")}} für weitere Details). Für `r1` bleibt die Zeichenklasse `a-z` nach dem Groß-/Kleinschreibungsfalten dieselbe, während sowohl Groß- als auch Kleinbuchstaben-ASCII-Zeichenketteneingaben auf Kleinbuchstaben gefaltet werden, sodass `r1` sowohl `"A"` als auch `"a"` übereinstimmen kann. Für `r2` wird die Zeichenklasse `A-Z` auf `a-z` gefaltet; jedoch negiert `^` das Matchergebnis, sodass `[^A-Z]` effektiv nur mit Großbuchstabenzeichen übereinstimmt. Beide ASCII-Zeichenketteneingaben werden jedoch immer noch auf Kleinbuchstaben gefaltet, wodurch `r2` nichts übereinstimmt.

Im `v`-Modus wird dieses Verhalten behoben — `[^...]` konstruiert ebenfalls eifrig die Komplementklasse anstelle des Invertierens des Matchergebnisses. Dies macht `[^\P{Lowercase_Letter}]` und `\p{Lowercase_Letter}` strikt gleichwertig.

## Beispiele

### Hexadezimalziffern matchen

Die folgende Funktion bestimmt, ob eine Zeichenkette eine gültige Hexadezimalzahl enthält:

```js
function isHexadecimal(str) {
  return /^[0-9A-F]+$/i.test(str);
}

isHexadecimal("2F3"); // true
isHexadecimal("beef"); // true
isHexadecimal("undefined"); // false
```

### Verwendung von Schnittmengen

Die folgende Funktion matcht griechische Buchstaben.

```js
function greekLetters(str) {
  return str.match(/[\p{Script_Extensions=Greek}&&\p{Letter}]/gv);
}

// 𐆊 is U+1018A GREEK ZERO SIGN
greekLetters("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### Verwendung von Subtraktionen

Die folgende Funktion matcht alle nicht-ASCII-Zahlen.

```js
function nonASCIINumbers(str) {
  return str.match(/[\p{Decimal_Number}--[0-9]]/gv);
}

// 𑜹 is U+11739 AHOM DIGIT NINE
nonASCIINumbers("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### Zeichenfolgen matchen

Die folgende Funktion stimmt mit allen Zeilenendesequenzen überein, einschließlich der [Zeilenendzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und der Sequenz `\r\n` (CRLF).

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

Dieses Beispiel ist genau äquivalent zu `/(?:\r|\n|\u2028|\u2029|\r\n)/gu` oder `/(?:[\r\n\u2028\u2029]|\r\n)/gu`, nur kürzer.

Der nützlichste Fall von `\q{}` ist, wenn man Subtraktionen und Schnittmengen durchführt. Dies war zuvor mit [mehrfachen Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) möglich. Die folgende Funktion stimmt mit Flaggen überein, die nicht zu den amerikanischen, chinesischen, russischen, britischen und französischen Flaggen gehören.

```js
function notUNSCPermanentMember(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

notUNSCPermanentMember("🇺🇸"); // false
notUNSCPermanentMember("🇩🇪"); // true
```

Dieses Beispiel ist größtenteils äquivalent zu `/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v`, möglicherweise jedoch leistungsfähiger.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wörtlicher Charakter: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [RegExp v-Flag mit Mengennotation und Eigenschaften von Zeichenketten](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
