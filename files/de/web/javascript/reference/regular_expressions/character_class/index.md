---
title: "Zeichenklasse: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
l10n:
  sourceCommit: 3bc2e3f837716049da9382fa8459c2ceccdf8950
---

Eine **Zeichenklasse** entspricht jedem Zeichen in oder nicht in einer benutzerdefinierten Zeichensatz. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch zum Abgleich von Zeichenfolgen mit endlicher Länge verwendet werden.

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
  - : Kann ein einzelnes Zeichen, eine andere in eckige Klammern eingeschlossene Zeichenklasse, eine [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), eine [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) oder eine Zeichenfolge im `\q`-Syntax sein.
- `substring`
  - : Eine literale Zeichenfolge.

## Beschreibung

Eine Zeichenklasse gibt eine Liste von Zeichen zwischen eckigen Klammern an und entspricht jedem Zeichen in der Liste. Das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag verändert drastisch, wie Zeichenklassen geparst und interpretiert werden. Es sind folgende Syntaxen sowohl im `v`-Modus als auch im Nicht-`v`-Modus verfügbar:

- Ein einzelnes Zeichen: entspricht dem Zeichen selbst.
- Ein Bereich von Zeichen: entspricht jedem Zeichen im inklusiven Bereich. Der Bereich wird durch zwei Zeichen angegeben, die durch einen Bindestrich (`-`) getrennt sind. Das erste Zeichen muss im Zeichenwert kleiner sein als das zweite Zeichen. Der _Zeichenwert_ ist der Unicode-Codepunkt des Zeichens. Da Unicode-Codepunkte in der Regel alphabetisch zugewiesen werden, spezifiziert `[a-z]` alle lateinischen Kleinbuchstaben, während `[α-ω]` alle griechischen Kleinbuchstaben spezifiziert. Im [Unicode-unwahrnehmbaren Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regex als Sequenz von [BMP](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)-Zeichen interpretiert. Daher repräsentieren Surrogatpaare in Zeichenklassen zwei Zeichen anstelle von einem; siehe unten für Details.
- Escape-Sequenzen: `\b`, `\-`, [Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) und andere [Zeichen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

Diese Syntaxen können beliebig oft vorkommen, und die von ihnen dargestellten Zeichensätze werden vereinigt. Zum Beispiel, `/[a-zA-Z0-9]/` entspricht jedem Buchstaben oder Ziffer.

Das `^`-Präfix in einer Zeichenklasse erzeugt eine _Komplementklasse_. Zum Beispiel entspricht `[^abc]` jedem Zeichen außer `a`, `b` oder `c`. Das `^`-Zeichen ist ein literales Zeichen, wenn es in der Mitte einer Zeichenklasse erscheint — zum Beispiel entspricht `[a^b]` den Zeichen `a`, `^`, und `b`.

Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals) führt eine sehr grobe Analyse von Regex-Literalen durch, sodass es das Regex-Literal nicht bei einem `/`-Zeichen beendet, das innerhalb einer Zeichenklasse erscheint. Dies bedeutet, dass `/[/]/` ohne Notwendigkeit der Escape-Sequenzierung des `/` gültig ist.

Die Grenzen eines Zeichenbereichs dürfen nicht mehr als ein Zeichen angeben, was passiert, wenn Sie ein [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwenden. Zum Beispiel:

```js-nolint example-bad
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

Im [Unicode-unwahrnehmbaren Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verursachen Zeichenbereiche, bei denen eine Grenze eine Zeichenklasse ist, dass das `-` zu einem literal Zeichen wird. Dies ist eine [veraltete Syntax für Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js
/[\s-9]/.test("-"); // true
```

Im [Unicode-unwahrnehmbaren Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regex als eine Sequenz von BMP-Zeichen interpretiert. Daher repräsentieren Surrogatpaare in Zeichenklassen zwei Zeichen statt eines.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

Selbst wenn das Muster [Groß-/Kleinschreibung ignoriert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), ist die Groß-/Kleinschreibung der beiden Enden eines Bereichs signifikant bei der Bestimmung, welche Zeichen zum Bereich gehören. Zum Beispiel entspricht das Muster `/[E-F]/i` nur `E`, `F`, `e`, und `f`, während das Muster `/[E-f]/i` alle Groß- und Kleinbuchstaben {{Glossary("ASCII", "ASCII")}}-Buchstaben trifft (weil es `E–Z` und `a–f` überspannt), sowie `[`, `\`, `]`, `^`, `_`, und `` ` ``.

### Nicht-v-Modus Zeichenklasse

Nicht-`v`-Modus Zeichenklassen interpretieren die meisten Zeichen [buchstäblich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und haben weniger Einschränkungen bezüglich der Zeichen, die sie enthalten können. Zum Beispiel ist `.` der buchstäbliche Punkt und nicht der [Platzhalter](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Die einzigen Zeichen, die nicht buchstäblich erscheinen können, sind `\`, `]`, und `-`.

- In Zeichenklassen werden die meisten Escape-Sequenzen unterstützt, außer `\b`, `\B`, und [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` zeigt ein Rückschrittszeichen anstelle einer [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) an, während die beiden anderen Syntaxfehler verursachen. Um `\` buchstäblich zu verwenden, entziffern Sie es als `\\`.
- Das `]`-Zeichen zeigt das Ende der Zeichenklasse an. Um es buchstäblich zu verwenden, entziffern Sie es als `\]`.
- Das Bindestrich (`-`) Zeichen, wenn es zwischen zwei Zeichen verwendet wird, zeigt einen Bereich an. Wenn es am Anfang oder Ende einer Zeichenklasse erscheint, ist es ein buchstäbliches Zeichen. Es ist auch ein buchstäbliches Zeichen, wenn es im Grenzbereich eines Bereichs verwendet wird. Zum Beispiel entspricht `[a-]` den Zeichen `a` und `-`, `[!--]` entspricht den Zeichen `!` bis `-`, und `[--9]` entspricht den Zeichen `-` bis `9`. Sie können es auch als `\-` entschlüsseln, wenn Sie es irgendwo buchstäblich verwenden möchten.

### v-Modus Zeichenklasse

Das grundlegende Konzept der Zeichenklassen im `v`-Modus bleibt dasselbe: Sie können weiterhin die meisten Zeichen buchstäblich verwenden, `-` verwenden, um Zeichenbereiche zu kennzeichnen, und Escape-Sequenzen verwenden. Eines der wichtigsten Merkmale des `v`-Flags ist die _Mengenotation_ innerhalb der Zeichenklassen. Wie zuvor erwähnt, können normale Zeichenklassen Vereinigungen durch das Aneinanderreihen von zwei Bereichen darstellen, z. B. die Verwendung von `[A-Z0-9]`, um "die Vereinigung der Menge `[A-Z]` und der Menge `[0-9]`" zu bedeuten. Es gibt jedoch keine einfache Möglichkeit, andere Operationen mit Zeichensätzen darzustellen, wie Schnittmenge und Differenz.

Mit dem `v`-Flag wird die Schnittmenge mit `&&` ausgedrückt und die Subtraktion mit `--`. Das Fehlen beider impliziert eine Vereinigung. Die beiden Operanden von `&&` oder `--` können ein Zeichen, Zeichen-Escape, Zeichenklassen-Escape oder sogar eine andere Zeichenklasse sein. Zum Beispiel könnten Sie "ein Wortzeichen, das kein Unterstrich ist" mit `[\w--_]` ausdrücken. Sie können Operatoren nicht auf derselben Ebene mischen. Zum Beispiel ist `[\w&&[A-z]--_]` ein Syntaxfehler. Da Sie jedoch Zeichenklassen verschachteln können, können Sie explizit schreiben, indem Sie `[\w&&[[A-z]--_]]` oder `[[\w&&[A-z]]--_]` schreiben (die beide `[A-Za-z]` bedeuten). In ähnlicher Weise ist `[AB--C]` ungültig und Sie müssen `[A[B--C]]` schreiben (was einfach `[AB]` bedeutet).

Im `v`-Modus kann die [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` Zeichenfolgen mit endlicher Länge abgleichen, wie z. B. Emojis. Der Symmetrie halber können reguläre Zeichenklassen auch mehr als ein Zeichen übereinstimmen. Um einen "Stringliteral" in einer Zeichenklasse zu schreiben, umschließen Sie die Zeichenfolge in `\q{...}`. Die einzige unterstützte Regex-Syntax hier ist die [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) — abgesehen von diesem muss `\q` vollständig literale Zeichen (einschließlich escapierter Zeichen) umschließen. Dies stellt sicher, dass Zeichenklassen nur Zeichenfolgen mit endlicher Länge mit endlich vielen Möglichkeiten übereinstimmen können.

Im Gegensatz zu regulären Disjunktionen spielt die Reihenfolge der Alternativen innerhalb von `\q` keine Rolle, ebenso wenig die Reihenfolge der `\q`-Escape mit dem Rest der verbundeten Operanden. Während des Abgleichs werden alle in einer Zeichenklasse angegebenen Alternativen immer in absteigender Längenreihenfolge versucht, sodass der Abgleich gierig ist. Zum Beispiel werden `[\q{a|ab}]`, `[\q{ab|a}]`, `[\q{ab}a]`, und `[a\q{ab}]`, die auf `"ab"` angewendet werden, alle `"ab"` entsprechen.

Komplementzeichenklassen `[^...]` können keine Zeichenfolgen mit mehr als einem Zeichen übereinstimmen. Zum Beispiel ist `[\q{ab|c}]` gültig und entspricht der Zeichenfolge `"ab"`, aber `[^\q{ab|c}]` ist ungültig, weil es unklar ist, wie viele Zeichen konsumiert werden sollten. Die Überprüfung wird durch Überprüfen durchgeführt, ob alle `\q` einzelne Zeichen enthalten und alle `\p` Zeichen Eigenschaften spezifizieren — für Vereinigungen müssen alle Operanden ausschließlich Zeichen sein; für Schnittmengen muss zumindest ein Operand ausschließlich Zeichen sein; für Subtraktionen muss der linkeste Operand ausschließlich Zeichen sein. Die Überprüfung ist syntaktisch und betrachtet nicht die tatsächlichen Zeichensätze, die spezifiziert werden, was bedeutet, dass obwohl `/[^\q{ab|c}--\q{ab}]/v` gleichwertig mit `/[^c]/v` ist, es immer noch abgelehnt wird.

Da die Syntax der Zeichenklassen jetzt ausgereifter ist, sind mehr Zeichen reserviert und es ist verboten, sie buchstäblich erscheinen zu lassen.

- Zusätzlich zu `]` und `\` müssen die folgenden Zeichen als literale Zeichen in Zeichenklassen entcodiert werden: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Diese Liste ist der Liste der [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) etwas ähnlich, außer dass `^`, `$`, `*`, `+`, und `?` innerhalb von Zeichenklassen nicht reserviert sind, während `/` und `-` außerhalb von Zeichenklassen nicht reserviert sind (obwohl `/` ein Regex-Literal abgrenzen kann und daher immer noch entschlüsselt werden muss). Alle diese Zeichen können auch optional in `u`-Modus-Zeichenklassen entcodiert werden.
- Die folgenden "Doppelpunkte"-Sequenzen müssen ebenfalls entschlüsselt werden (aber sie machen ohne das `v`-Flag sowieso nicht viel Sinn): `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. Im `u`-Modus können einige dieser Zeichen nur buchstäblich innerhalb von Zeichenklassen erscheinen und verursachen einen Syntaxfehler, wenn sie entschlüsselt werden. Im `v`-Modus müssen sie entschlüsselt werden, wenn sie paarweise erscheinen, können aber optional entschlüsselt werden, wenn sie allein erscheinen. Zum Beispiel ist `/[\!]/u` ungültig, weil es ein [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) ist, aber sowohl `/[\!]/v` als auch `/[!]/v` sind gültig, während `/[!!]/v` ungültig ist. Der [literale Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)-Verweis hat eine detaillierte Tabelle, welche Zeichen entschlüsselt oder unentziffert erscheinen können.

### Komplementklassen und case-insensitive Matching

[Case-insensitive](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Matching funktioniert, indem sowohl der erwartete Zeichensatz als auch der abgeglichene String case-gefolded werden. Bei der Spezifikation von Komplementklassen ist die Reihenfolge, in der JavaScript case-folding und Komplementierung durchführt, wichtig. Kurz gesagt, `[^...]` im `u`-Modus entspricht `allCharacters - caseFold(original)`, während im `v`-Modus zu `caseFold(allCharacters) - caseFold(original)` entspricht. Dies stellt sicher, dass alle Komplementklassensyntaxen, einschließlich `[^...]`, `\P`, `\W`, etc., sich gegenseitig ausschließen.

Betrachten Sie die folgenden beiden Regex (um die Dinge zu vereinfachen, nehmen wir an, dass Unicode-Zeichen eine von drei Arten sind: Kleinbuchstabe, Großbuchstabe und caseless, und jeder Großbuchstabe hat einen einzigartigen Kleinbuchstaben-Gegenstück, und umgekehrt):

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

Das `r2` ist eine doppelte Negation und scheint mit `r1` gleichwertig zu sein. Aber tatsächlich entspricht `r1` allen Klein- und Großbuchstaben der ASCII-Buchstaben, während `r2` keine entspricht. Hier ist eine schrittweise Erklärung:

- In `r1` konstruiert `\p{Lowercase_Letter}` eine Menge aller kleinen Buchstaben. Zeichen in dieser Menge werden dann auf ihre Kleinformat umgeformt, sodass sie gleich bleiben. Der Eingabestring wird ebenfalls auf Kleinbuchstaben umgeformt. Daher werden `"A"` und `"a"` zu `"a"` gefaltet und übereinstimmen mit `r1`.
- In `r2` konstruiert `\P{Lowercase_Letter}` zuerst eine Menge aller nicht-Kleinbuchstaben, d.h. Großbuchstaben und caseless Zeichen. Zeichen in dieser Menge werden dann auf ihre Kleinformat umgeformt, sodass der Zeichensatz zu allen kleinen Buchstaben und caseless Zeichen wird. `[^...]` negiert den Abgleich, wodurch es auf alles passt, was _nicht_ in dieser Menge ist, d.h. ein Großbuchstabe. Der Eingabewert wird jedoch immer noch auf Kleinbuchstaben umgeformt, also wird `"A"` auf `"a"` gefaltet und von `r2` nicht übereingestimmt.

Die Hauptbeobachtung hier ist, dass nach dem Negieren des Abgleichs durch `[^...]`, der erwartete Zeichensatz möglicherweise nicht eine Untermenge des Satzes der gefalteten Unicode-Zeichen ist, was dazu führt, dass der gefaltete Eingabewert nicht im erwarteten Zeichensatz enthalten ist. Im `v`-Modus wird auch der Satz aller Zeichen case-gefolded. Der `\P`-Zeichenklassen selbst funktioniert im `v`-Modus leicht anders (siehe [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)). All dies stellt sicher, dass `[^\P{Lowercase_Letter}]` und `\p{Lowercase_Letter}` streng gleichwertig sind.

## Beispiele

### Übereinstimmung von hexadezimalen Ziffern

Die folgende Funktion bestimmt, ob eine Zeichenfolge eine gültige hexadezimale Zahl enthält:

```js
function isHexadecimal(str) {
  return /^[0-9A-F]+$/i.test(str);
}

isHexadecimal("2F3"); // true
isHexadecimal("beef"); // true
isHexadecimal("undefined"); // false
```

### Verwendung von Schnittmengen

Die folgende Funktion passt griechische Buchstaben.

```js
function greekLetters(str) {
  return str.match(/[\p{Script_Extensions=Greek}&&\p{Letter}]/gv);
}

// 𐆊 is U+1018A GREEK ZERO SIGN
greekLetters("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### Verwendung der Subtraktion

Die folgende Funktion entspricht allen nicht-ASCII-Zahlen.

```js
function nonASCIINumbers(str) {
  return str.match(/[\p{Decimal_Number}--\d]/gv);
}

// 𑜹 is U+11739 AHOM DIGIT NINE
nonASCIINumbers("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### Zeichenfolgen abgleichen

Die folgende Funktion entspricht allen Zeilenbeendigungssequenzen, einschließlich der [Zeilenbeendungszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und der Sequenz `\r\n` (CRLF). Die Reihenfolge, in der die Alternativen angegeben sind, spielt keine Rolle, da die längste Alternative, `\r\n`, immer bevorzugt wird.

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

Dieser reguläre Ausdruck ist genau gleichwertig mit `/(?:\r\n|\r|\n|\u2028|\u2029)/gu` oder `/(?:\r\n|[\r\n\u2028\u2029])/gu`. Im regulären Disjunktion spielt jedoch die Reihenfolge der Alternativen eine Rolle, daher muss `\r\n` zuerst spezifiziert werden, damit es bevorzugt wird. Die Verwendung einer Zeichenklasse ist nicht nur kürzer, sondern vermeidet auch diese Falle.

Der nützlichste Fall von `\q{}` ist, wenn Subtraktion und Schnittmengen durchgeführt werden. Bisher war dies möglich mit [mehrfachen Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection). Die folgende Funktion entspricht Flaggen, die nicht eine der amerikanischen, chinesischen, russischen, britischen und französischen Flaggen sind.

```js
function notUNSCPermanentMember(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

notUNSCPermanentMember("🇺🇸"); // false
notUNSCPermanentMember("🇩🇪"); // true
```

Dieses Beispiel ist größtenteils gleichwertig mit `/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v`, vielleicht jedoch performanter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Literales Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [RegExp v-Flag mit Mengennotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
