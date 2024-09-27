---
title: "Zeichenklasse: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Zeichenklasse** stimmt mit jedem Zeichen in oder nicht in einem benutzerdefinierten Satz von Zeichen überein. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen endlicher Länge zu erfassen.

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
  - : Kann ein einzelnes Zeichen, eine andere in eckige Klammern gesetzte Zeichenklasse, eine [Zeichenklassen-Ausweichsequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), eine [Unicode-Zeichenklassen-Ausweichsequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) oder eine Zeichenkette im `\q`-Syntax sein.
- `substring`
  - : Eine literale Zeichenkette.

## Beschreibung

Eine Zeichenklasse spezifiziert eine Liste von Zeichen zwischen eckigen Klammern und stimmt mit jedem Zeichen in der Liste überein. Das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag verändert drastisch, wie Zeichenklassen geparst und interpretiert werden. Die folgenden Syntaxen sind sowohl im `v`-Modus als auch im non-`v`-Modus verfügbar:

- Ein einzelnes Zeichen: stimmt mit dem Zeichen selbst überein.
- Ein Bereich von Zeichen: stimmt mit jedem Zeichen im inklusiven Bereich überein. Der Bereich wird durch zwei Zeichen spezifiziert, die durch einen Bindestrich (`-`) getrennt sind. Das erste Zeichen muss im Zeichenwert kleiner sein als das zweite Zeichen. Der _Zeichenwert_ ist der Unicode-Codepunkt des Zeichens. Da Unicode-Codepunkte normalerweise Alfabete nacheinander zugewiesen werden, spezifiziert `[a-z]` alle kleinen lateinischen Buchstaben, während `[α-ω]` alle kleinen griechischen Buchstaben spezifiziert. Im [Unicode-unbekannten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden reguläre Ausdrücke als eine Sequenz von [BMP](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) Zeichen interpretiert. Daher stellen Stellvertreterpaare in Zeichenklassen zwei Zeichen anstatt einem dar; siehe unten für Details.
- Escape-Sequenzen: `\b`, `\-`, [Zeichenklassen-Ausweichsequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [Unicode-Zeichenklassen-Ausweichsequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) und andere [Zeichenausweichungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

Diese Syntaxen können beliebig oft vorkommen, und die von ihnen repräsentierten Zeichensätze werden vereinigt. Zum Beispiel, `/[a-zA-Z0-9]/` stimmt mit jedem Buchstaben oder Ziffer überein.

Das `^`-Präfix in einer Zeichenklasse erzeugt eine _Komplementklassen_. Zum Beispiel, `[^abc]` stimmt mit jedem Zeichen außer `a`, `b` oder `c` überein. Das `^`-Zeichen ist ein literales Zeichen, wenn es in der Mitte einer Zeichenklasse erscheint – zum Beispiel, `[a^b]` stimmt mit den Zeichen `a`, `^` und `b` überein.

Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals) führt einen sehr groben Parse der Regex-Literale durch, so dass es den Regex-Literal nicht am `/`-Zeichen beendet, das innerhalb einer Zeichenklasse erscheint. Das bedeutet, dass `/[/]/` ohne Notwendigkeit eines `/`-Escape gültig ist.

Die Grenzen eines Zeichenbereichs dürfen nicht mehr als ein Zeichen spezifizieren, was passiert, wenn Sie eine [Zeichenklassen-Ausweichsequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwenden. Zum Beispiel:

```js-nolint example-bad
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

Im [Unicode-unbekannten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) machen Zeichenbereiche, bei denen eine Grenze eine Zeichenklasse ist, den `-` zu einem literalen Zeichen. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie nicht vertrauen sollten.

```js
/[\s-9]/.test("-"); // true
```

Im [Unicode-unbekannten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden reguläre Ausdrücke als eine Sequenz von BMP Zeichen interpretiert. Daher stellen Stellvertreterpaare in Zeichenklassen zwei Zeichen anstatt einem dar.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

Selbst wenn das Muster [Groß-/Kleinschreibung ignoriert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), ist die Groß-/Kleinschreibung der beiden Enden eines Bereichs entscheidend dafür, welche Zeichen in den Bereich gehören. Zum Beispiel stimmt das Muster `/[E-F]/i` nur mit `E`, `F`, `e` und `f` überein, während das Muster `/[E-f]/i` mit allen Groß- und Kleinbuchstaben [ASCII](/de/docs/Glossary/ASCII) (weil es über `E–Z` und `a–f` reicht), sowie `[`, `\`, `]`, `^`, `_` und `` ` `` übereinstimmt.

### Non-v-mode Zeichenklasse

Non-`v`-mode Zeichenklassen interpretieren die meisten Zeichen [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und haben weniger Einschränkungen hinsichtlich der Zeichen, die sie enthalten können. Zum Beispiel ist `.` das literale Punktzeichen, nicht das [Wildcard](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Die einzigen Zeichen, die nicht wörtlich erscheinen können, sind `\`, `]` und `-`.

- In Zeichenklassen werden die meisten Escape-Sequenzen unterstützt, außer `\b`, `\B` und [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` gibt ein Rückschrittzeichen anstelle einer [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) an, während die anderen beiden Syntaxfehler verursachen. Um `\` wörtlich zu verwenden, entkommen Sie es als `\\`.
- Das `]` Zeichen zeigt das Ende der Zeichenklasse an. Um es wörtlich zu verwenden, entkommen Sie es als `\]`.
- Das Bindestrich (`-`) Zeichen, wenn es zwischen zwei Zeichen verwendet wird, zeigt einen Bereich an. Wenn es am Anfang oder Ende einer Zeichenklasse erscheint, ist es ein wörtliches Zeichen. Es ist auch ein wörtliches Zeichen, wenn es in den Grenzen eines Bereichs verwendet wird. Zum Beispiel, `[a-]` stimmt mit den Zeichen `a` und `-` überein, `[!--]` stimmt mit den Zeichen `!` bis `-` überein und `[--9]` stimmt mit den Zeichen `-` bis `9` überein. Sie können es auch als `\-` entkommen, wenn Sie es überall wörtlich verwenden möchten.

### v-mode Zeichenklasse

Die Grundidee von Zeichenklassen im `v`-Modus bleibt die gleiche: Sie können die meisten Zeichen wörtlich verwenden, `-` verwenden, um Zeichenbereiche anzuzeigen und Escapesequenzen verwenden. Eine der wichtigsten Funktionen des `v`-Flags ist die _Mengen-Schreibweise_ innerhalb von Zeichenklassen. Wie bereits erwähnt, können normale Zeichenklassen Vereinigungen durch das Verketten von zwei Bereichen ausdrücken, wie z.B. die Verwendung von `[A-Z0-9]`, um "die Vereinigung der Menge `[A-Z]` und der Menge `[0-9]`" zu bedeuten. Es gibt jedoch keinen einfachen Weg, andere Operationen mit Zeichensätzen wie Schnittmenge und Differenz darzustellen.

Mit dem `v`-Flag wird die Schnittmenge mit `&&` ausgedrückt und die Subtraktion mit `--`. Fehlen beide, wird implizit die Vereinigung angenommen. Die beiden Operanden von `&&` oder `--` können ein Zeichen, ein Zeichen-Escape, eine Zeichenklassen-Ausweichsequenz oder sogar eine andere Zeichenklasse sein. Zum Beispiel, um "ein Wortzeichen, das kein Unterstrich ist" auszudrücken, können Sie `[\w--_]` verwenden. Sie können Operatoren nicht auf derselben Ebene mischen. Zum Beispiel ist `[\w&&[A-z]--_]` ein Syntaxfehler. Da Sie jedoch Zeichenklassen verschachteln können, können Sie explizit werden, indem Sie `[\w&&[[A-z]--_]]` oder `[[\w&&[A-z]]--_]` schreiben (die beide `[A-Za-z]` bedeuten). Ähnlich ist `[AB--C]` ungültig und Sie müssen `[A[B--C]]` schreiben (was einfach `[AB]` bedeutet).

Im `v`-Modus kann die [Unicode-Zeichenklassen-Ausweichsequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` Zeichenfolgen endlicher Länge erfassen, wie z.B. Emojis. Aus Symmetriegründen können reguläre Zeichenklassen auch mehr als ein Zeichen erfassen. Um ein "Zeichenfolgenliteral" in einer Zeichenklasse zu schreiben, umschließen Sie die Zeichenfolge in `\q{...}`. Die einzige unterstützte Regex-Syntax hier ist die [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) — abgesehen davon muss `\q` vollständig Literale (einschließlich escape-Zeichen) einschließen. Dies stellt sicher, dass Zeichenklassen nur Zeichenfolgen endlicher Länge mit endlich vielen Möglichkeiten erfassen können.

Da die Zeichenklassensyntax jetzt ausgeklügelter ist, sind weitere Zeichen reserviert und dürfen nicht wörtlich erscheinen.

- Zusätzlich zu `]` und `\` müssen die folgenden Zeichen in Zeichenklassen entkommen werden, wenn sie literale Zeichen darstellen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Diese Liste ähnelt der Liste der [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character), außer dass `^`, `$`, `*`, `+` und `?` innerhalb von Zeichenklassen nicht reserviert sind, während `/` und `-` außerhalb von Zeichenklassen nicht reserviert sind (obwohl `/` ein Regex-Literal begrenzen kann und daher dennoch entkommen werden muss). All diese Charaktere können auch optional in `u`-Modus Zeichenklassen entkommen werden.
- Die folgenden "doppelten Punktuatoren" Sequenzen müssen ebenfalls entkommen werden (sie machen jedoch ohne das `v` Flag wenig Sinn): `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. Im `u` Modus können einige dieser Zeichen nur wörtlich innerhalb von Zeichenklassen erscheinen und führen zu einem Syntaxfehler, wenn sie entkommen werden. Im `v` Modus müssen sie entkommen werden, wenn sie paarweise erscheinen, können jedoch optional entkommen werden, wenn sie allein erscheinen. Zum Beispiel ist `/[\!]/u` ungültig, weil es ein [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) ist, aber sowohl `/[\!]/v` als auch `/[!]/v` sind gültig, während `/[!!]/v` ungültig ist. Die [wörtliche Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Referenz bietet eine detaillierte Tabelle, welche Zeichen entkommen oder nicht entkommen erscheinen können.

Komplementzeichenklassen `[^...]` können unmöglich Zeichenfolgen länger als ein Zeichen erfassen. Zum Beispiel ist `[\q{ab|c}]` gültig und stimmt mit der Zeichenfolge `"ab"` überein, aber `[^\q{ab|c}]` ist ungültig, weil unklar ist, wie viele Zeichen konsumiert werden sollen. Der Test wird durchgeführt, um zu überprüfen, ob alle `\q` einzelne Zeichen enthalten und alle `\p` Zeichen-Eigenschaften angeben - für Vereinigungen müssen alle Operanden rein Zeichen sein; für Schnittmengen muss mindestens ein Operand rein Zeichen sein; für Subtraktion muss der linkeste Operand rein Zeichen sein. Der Test ist syntaktisch, ohne das tatsächlich spezifizierte Zeichenset zu betrachten, was bedeutet, dass obwohl `/[^\q{ab|c}--\q{ab}]/v` gleichbedeutend ist mit `/[^c]/v`, es weiterhin abgelehnt wird.

### Komplementklassen und Groß-/Kleinschreibungs-unabhängige Übereinstimmung

Im non-`v`-Modus werden Komplementzeichenklassen `[^...]` implementiert, indem einfach das Übereinstimmungsergebnis invertiert wird — das heißt, `[^...]` stimmt überein, wann immer `[...]` nicht übereinstimmt und umgekehrt. Die anderen Komplementklassen, wie `\P{...}` und `\W`, arbeiten, indem eifrig die Menge aller Zeichen ohne die angegebene Eigenschaft konstruiert wird. Sie scheinen das gleiche Verhalten zu produzieren, werden jedoch komplexer, wenn sie mit der [Groß-/Kleinschreibungs-unabhängigen](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Übereinstimmung kombiniert werden.

Betrachten Sie die folgenden zwei Regexe:

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

Das `r2` ist eine doppelte Negation und scheint mit `r1` äquivalent zu sein. Aber in der Tat stimmt `r1` mit allen Klein- und Großbuchstaben ASCII Zeichen überein, während `r2` mit keinem übereinstimmt. Um zu veranschaulichen, wie es funktioniert, stellen Sie sich vor, dass wir nur mit ASCII-Zeichen zu tun haben, nicht mit dem gesamten Unicode-Zeichensatz, und `r1` und `r2` wie unten angegeben sind:

```js
const r1 = /[a-z]/iu;
const r2 = /[^A-Z]/iu;
```

Erinnern Sie sich daran, dass die Groß-/Kleinschreibung durch das Falten sowohl des Musters als auch des Eingangs in dieselbe Hülle ignoriert wird (siehe {{jsxref("RegExp/ignoreCase", "ignoreCase")}} für weitere Details). Bei `r1` bleibt die Zeichenklasse `a-z` nach dem Falten gleich, während sowohl Groß- als auch Kleinbuchstaben ASCII-Zeichenfolgen zu Kleinbuchstaben gefaltet werden, sodass `r1` mit beiden `"A"` und `"a"` übereinstimmt. Bei `r2` wird die Zeichenklasse `A-Z` zu `a-z` gefaltet; jedoch negiert `^` das Übereinstimmungsergebnis, so dass `[^A-Z]` in der Wirkung nur Großbuchstaben-Zeichenfolgen übereinstimmt. Aber sowohl Groß- als auch Kleinbuchstaben ASCII-Zeichenfolgen werden immer noch zu Kleinbuchstaben gefaltet, was dazu führt, dass `r2` mit nichts übereinstimmt.

Im `v` Modus wird dieses Verhalten behoben — `[^...]` konstruiert ebenfalls eifrig die Komplementklasse anstelle der Invertierung des Übereinstimmungsergebnisses. Dies macht `[^\P{Lowercase_Letter}]` und `\p{Lowercase_Letter}` streng äquivalent.

## Beispiele

### Übereinstimmung mit hexadezimalen Ziffern

Die folgende Funktion ermittelt, ob eine Zeichenfolge eine gültige hexadezimale Zahl enthält:

```js
function isHexadecimal(str) {
  return /^[0-9A-F]+$/i.test(str);
}

isHexadecimal("2F3"); // true
isHexadecimal("beef"); // true
isHexadecimal("undefined"); // false
```

### Verwendung der Schnittmenge

Die folgende Funktion stimmt mit griechischen Buchstaben überein.

```js
function greekLetters(str) {
  return str.match(/[\p{Script_Extensions=Greek}&&\p{Letter}]/gv);
}

// 𐆊 is U+1018A GREEK ZERO SIGN
greekLetters("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### Verwendung der Subtraktion

Die folgende Funktion stimmt mit allen nicht-ASCII-Nummern überein.

```js
function nonASCIINumbers(str) {
  return str.match(/[\p{Decimal_Number}--[0-9]]/gv);
}

// 𑜹 is U+11739 AHOM DIGIT NINE
nonASCIINumbers("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### Übereinstimmung mit Zeichenfolgen

Die folgende Funktion stimmt mit allen Zeilenbeendigungssequenzen überein, einschließlich der [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und der Sequenz `\r\n` (CRLF).

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

Dieses Beispiel ist genau äquivalent zu `/(?:\r|\n|\u2028|\u2029|\r\n)/gu` oder `/(?:[\r\n\u2028\u2029]|\r\n)/gu`, jedoch kürzer.

Der nützlichste Fall von `\q{}` ist, wenn Subtraktion und Schnittmenge durchgeführt werden. Zuvor war dies durch [mehrere Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) möglich. Die folgende Funktion stimmt mit Flaggen überein, die nicht zu den amerikanischen, chinesischen, russischen, britischen oder französischen Flaggen gehören.

```js
function notUNSCPermanentMember(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

notUNSCPermanentMember("🇺🇸"); // false
notUNSCPermanentMember("🇩🇪"); // true
```

Dieses Beispiel entspricht größtenteils `/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v`, ist jedoch möglicherweise performanter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklassen-Ausweichsequenz: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Unicode-Zeichenklassen-Ausweichsequenz: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Literalzeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Zeichenausweichung: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [RegExp v-Flag mit Mengen-Schreibweise und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
