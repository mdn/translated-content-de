---
title: "Zeichenklasse: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
l10n:
  sourceCommit: bccce51ad7f3fd5e5ff7e4231b6391a000c8faf6
---

{{jsSidebar}}

Eine **Zeichenklasse** passt auf jedes Zeichen, das in einer benutzerdefinierten Menge von Zeichen enthalten ist oder nicht. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen mit endlicher Länge zu matchen.

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
  - : Kann ein einzelnes Zeichen, eine andere in eckige Klammern eingeschlossene Zeichenklasse, ein [Character Class Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), ein [Unicode Character Class Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) oder eine Zeichenkette im `\q`-Format sein.
- `substring`
  - : Ein wörtlicher String.

## Beschreibung

Eine Zeichenklasse spezifiziert eine Liste von Zeichen in eckigen Klammern und passt auf jedes Zeichen in der Liste. Das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag ändert drastisch, wie Zeichenklassen geparst und interpretiert werden. Die folgenden Syntaxen sind sowohl im `v`-Modus als auch im Nicht-`v`-Modus verfügbar:

- Ein einzelnes Zeichen: passt auf das Zeichen selbst.
- Ein Bereich von Zeichen: passt auf jedes Zeichen im eingeschlossenen Bereich. Der Bereich wird durch zwei Zeichen angegeben, die durch einen Bindestrich (`-`) getrennt sind. Das erste Zeichen muss kleiner im Zeichenwert sein als das zweite Zeichen. Der _Zeichenwert_ ist der Unicode-Codepunkt des Zeichens. Da Unicode-Codepunkte normalerweise Alphabete in Reihenfolge zugewiesen sind, spezifiziert `[a-z]` alle lateinischen Kleinbuchstaben, während `[α-ω]` alle griechischen Kleinbuchstaben spezifiziert. Im [Unicode-unaware Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regexe als eine Folge von [BMP](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)-Zeichen interpretiert. Daher stellen Surrogatpaare in Zeichenklassen zwei Zeichen statt eines dar; siehe unten für Details.
- Escape-Sequenzen: `\b`, `\-`, [Character Class Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [Unicode Character Class Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) und andere [Character Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

Diese Syntaxen können mehrfach vorkommen, und die von ihnen repräsentierten Zeichensätze werden vereinigt. Zum Beispiel, `/[a-zA-Z0-9]/` passt auf jeden Buchstaben oder jede Ziffer.

Das `^`-Präfix in einer Zeichenklasse erzeugt eine _Komplementklasse_. Zum Beispiel, `[^abc]` passt auf jedes Zeichen außer `a`, `b` oder `c`. Das `^`-Zeichen ist ein wörtliches Zeichen, wenn es in der Mitte einer Zeichenklasse erscheint — zum Beispiel, `[a^b]` passt auf die Zeichen `a`, `^` und `b`.

Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals) führt eine sehr grobe Analyse von Regex-Literalen durch, sodass diese nicht am `/`-Zeichen endet, das innerhalb einer Zeichenklasse erscheint. Das bedeutet, dass `/[/]/` ohne das Escapieren des `/` gültig ist.

Die Grenzen eines Zeichenbereichs dürfen nicht mehr als ein Zeichen spezifizieren, was passiert, wenn Sie einen [Character Class Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwenden. Zum Beispiel:

```js-nolint example-bad
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

Im [Unicode-unaware Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) führt ein Zeichenbereich, bei dem eine Grenze eine Zeichenklasse ist, dazu, dass das `-` zu einem wörtlichen Zeichen wird. Dies ist eine [veraltete Syntax für die Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js
/[\s-9]/.test("-"); // true
```

Im [Unicode-unaware Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regexe als eine Folge von BMP-Zeichen interpretiert. Daher stellen Surrogatpaare in Zeichenklassen zwei Zeichen statt eines dar.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

Selbst wenn das Muster [die Groß-/Kleinschreibung ignoriert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), ist die Groß-/Kleinschreibung der beiden Enden eines Bereichs entscheidend dafür, welche Zeichen zum Bereich gehören. Zum Beispiel passt das Muster `/[E-F]/i` nur auf `E`, `F`, `e` und `f`, während das Muster `/[E-f]/i` auf alle Groß- und Kleinbuchstaben {{Glossary("ASCII", "ASCII")}} (weil es über `E–Z` und `a–f` reicht), sowie auf `[`, `\`, `]`, `^`, `_` und `` ` ``.

### Nicht-`v`-Modus Zeichenklasse

Nicht-`v`-Modus Zeichenklassen interpretieren die meisten Zeichen [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und haben weniger Einschränkungen bezüglich der Zeichen, die sie enthalten können. Zum Beispiel ist `.` das wörtliche Punktzeichen, nicht das [Wildcard](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Die einzigen Zeichen, die nicht wörtlich erscheinen können, sind `\`, `]` und `-`.

- In Zeichenklassen werden die meisten Escape-Sequenzen unterstützt, außer `\b`, `\B`, und [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` zeigt ein Rückszugszeichen anstelle eines [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion), während die anderen beiden Syntaxfehler verursachen. Um `\` wörtlich zu verwenden, escapen Sie es als `\\`.
- Das `]`-Zeichen zeigt das Ende der Zeichenklasse an. Um es wörtlich zu verwenden, escapen Sie es als `\]`.
- Das Bindestrich (`-`) Zeichen gibt, wenn es zwischen zwei Zeichen verwendet wird, einen Bereich an. Wenn es am Anfang oder Ende einer Zeichenklasse erscheint, ist es ein wörtliches Zeichen. Es ist auch ein wörtliches Zeichen, wenn es in der Begrenzung eines Bereichs verwendet wird. Zum Beispiel passt `[a-]` auf die Zeichen `a` und `-`, `[!--]` auf die Zeichen `!` bis `-`, und `[--9]` auf die Zeichen `-` bis `9`. Sie können es auch als `\-` escapen, wenn Sie es irgendwo wörtlich verwenden möchten.

### `v`-Modus Zeichenklasse

Die Grundidee von Zeichenklassen im `v`-Modus bleibt dieselbe: Sie können weiterhin die meisten Zeichen wörtlich verwenden, `-` verwenden, um Zeichenbereiche anzugeben, und Escape-Sequenzen verwenden. Eine der wichtigsten Funktionen des `v`-Flags ist die _Mengenotation_ innerhalb von Zeichenklassen. Wie bereits erwähnt, können normale Zeichenklassen Vereinigungen ausdrücken, indem sie zwei Bereiche verbinden, wie etwa die Verwendung von `[A-Z0-9]`, um "die Vereinigung der Menge `[A-Z]` und der Menge `[0-9]`" auszudrücken. Es gibt jedoch keinen einfachen Weg, um andere Operationen mit Zeichensätzen darzustellen, wie Schnittmengen und Differenzen.

Mit dem `v`-Flag wird die Schnittmenge mit `&&` und die Subtraktion mit `--` ausgedrückt. Das Fehlen beider impliziert eine Vereinigung. Die beiden Operanden von `&&` oder `--` können ein Zeichen, ein Zeichen-Escape, ein Character Class Escape oder sogar eine andere Zeichenklasse sein. Zum Beispiel können Sie, um "ein Wortzeichen, das kein Unterstrich ist" auszudrücken, `[\w--_]` verwenden. Sie können keine Operatoren auf derselben Ebene mischen. Zum Beispiel ist `[\w&&[A-z]--_]` ein Syntaxfehler. Da Sie jedoch Zeichenklassen verschachteln können, können Sie explizit sein, indem Sie `[\w&&[[A-z]--_]]` oder `[[\w&&[A-z]]--_]` schreiben (was beides `[A-Za-z]` bedeutet). Ebenso ist `[AB--C]` ungültig und Sie müssen `[A[B--C]]` schreiben (was einfach `[AB]` bedeutet).

Im `v`-Modus kann der [Unicode Character Class Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` auf Zeichenfolgen mit endlicher Länge matchen, wie Emojis. Symmetrisch dazu können reguläre Zeichenklassen auch auf mehr als ein Zeichen passen. Um ein "String-Literal" in einer Zeichenklasse zu schreiben, schließen Sie den String in `\q{...}` ein. Die einzige unterstützte Regex-Syntax hier ist [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) — abgesehen davon muss `\q` wörtliche Zeichen (einschließlich escapeter Zeichen) vollständig einschließen. Dies stellt sicher, dass Zeichenklassen nur auf Zeichenfolgen mit endlicher Länge passen, die endlich viele Möglichkeiten haben.

Da die Zeichenklassensyntax jetzt ausgefeilter ist, sind mehr Zeichen reserviert und dürfen nicht wörtlich vorkommen.

- Zusätzlich zu `]` und `\` müssen die folgenden Zeichen in Zeichenklassen escapet werden, wenn sie wörtliche Zeichen darstellen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Diese Liste ist etwas ähnlich der Liste der [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character), abgesehen davon, dass `^`, `$`, `*`, `+` und `?` innerhalb von Zeichenklassen nicht reserviert sind, während `/` und `-` außerhalb von Zeichenklassen nicht reserviert sind (obwohl `/` ein Regex-Literal begrenzen kann und daher dennoch escapet werden muss). All diese Zeichen können auch in `u`-Modus Zeichenklassen optional escapet werden.
- Die folgenden "doppelten Satzzeichensequenzen" müssen ebenfalls escapet werden (aber sie haben ohnehin keinen großen Sinn ohne das `v`-Flag): `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. Im `u`-Modus können einige dieser Zeichen nur wörtlich innerhalb von Zeichenklassen erscheinen und verursachen einen Syntaxfehler, wenn sie escapet werden. Im `v`-Modus müssen sie beim Erscheinen in Paaren escapet werden, können jedoch optional escapet werden, wenn sie allein erscheinen. Zum Beispiel ist `/[\!]/u` ungültig, weil es ein [Identitätseescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) ist, aber sowohl `/[\!]/v` als auch `/[!]/v` sind gültig, während `/[!!]/v` ungültig ist. Die [Literal Character](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Referenz enthält eine detaillierte Tabelle darüber, welche Zeichen escapet oder unescapet auftreten können.

Komplement-Zeichenklassen `[^...]` können unmöglich auf Zeichenfolgen passen, die länger als ein Zeichen sind. Zum Beispiel ist `[\q{ab|c}]` gültig und passt auf die Zeichenfolge `"ab"`, aber `[^\q{ab|c}]` ist ungültig, weil nicht klar ist, wie viele Zeichen konsumiert werden sollen. Die Überprüfung erfolgt, indem überprüft wird, ob alle `\q` einzelne Zeichen enthalten und alle `\p` Zeichenattribute angeben — für Vereinigungen müssen alle Operanden rein aus Zeichen bestehen; für Schnitte muss mindestens ein Operand rein aus Zeichen bestehen; für Subtraktionen muss der linkeste Operand rein aus Zeichen bestehen. Die Überprüfung ist syntaktisch, ohne das tatsächliche angegebene Zeichensatz zu betrachten, was bedeutet, dass obwohl `/[^\q{ab|c}--\q{ab}]/v` gleichwertig mit `/[^c]/v` ist, es dennoch abgelehnt wird.

### Komplement-Klassen und Groß-/Kleinschreibungsunsauberkeit

[Groß-/Kleinschreibungsunsauberheit](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) funktioniert, indem sowohl der erwartete Zeichensatz als auch die gematchte Zeichenfolge gefaltet werden. Beim Spezifizieren von Komplementklassen ist die Reihenfolge, in der JavaScript die Faltung und das Komplementieren durchführt, wichtig. Kurz gesagt, `[^...]` im `u`-Modus passt auf `allCharacters - caseFold(original)`, während es im `v`-Modus auf `caseFold(allCharacters) - caseFold(original)` passt. Dies stellt sicher, dass alle Komplementklassensyntaxen, einschließlich `[^...]`, `\P`, `\W` usw., sich gegenseitig auslöschen.

Betrachten Sie die folgenden zwei Regexe (um die Dinge zu vereinfachen, nehmen wir an, dass Unicode-Zeichen eines von drei Arten sind: lowercase, uppercase und caseless, und jeder uppercase-Buchstabe hat ein einzigartiges Lowercase-Gegenstück, und umgekehrt):

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

Das `r2` ist eine doppelte Negation und scheint mit `r1` gleichwertig zu sein. Aber in der Tat, `r1` passt auf alle lower- und uppercase ASCII-Buchstaben, während `r2` auf keinen passt. Hier ist eine schrittweise Erklärung:

- Im `r1` konstruiert `\p{Lowercase_Letter}` eine Menge aller Kleinbuchstaben. Zeichen in dieser Menge werden dann in ihre Kleinbuchstabenform umgefaltet, sodass sie gleich bleiben. Die Eingabezeichenfolge wird ebenfalls in Kleinbuchstaben umgefaltet. Daher werden `"A"` und `"a"` beide zu `"a"` umgefaltet und von `r1` gematcht.
- Im `r2` konstruiert `\P{Lowercase_Letter}` zuerst eine Menge aller nicht-Kleinbuchstaben, d.h. Großbuchstaben und caseless Zeichen. Zeichen in dieser Menge werden dann in ihre Kleinbuchstabenform umgefaltet, sodass der Zeichensatz zu allen Kleinbuchstaben und caseless Zeichen wird. `[^...]` negiert das Match, was dazu führt, dass es auf alles passt, was _nicht_ in dieser Menge ist, d.h. ein Großbuchstabe. Die Eingabe wird jedoch immer noch in Kleinbuchstaben umgefaltet, sodass `"A"` zu `"a"` umgefaltet wird und nicht von `r2` gematcht wird.

Die Hauptbeobachtung hier ist, dass nach der Negation durch `[^...]`, der erwartete Zeichensatz möglicherweise keine Teilmenge der gefalteten Unicode-Zeichenmenge ist, was dazu führt, dass die gefaltete Eingabe nicht im erwarteten Zeichensatz ist. Im `v`-Modus wird auch die Menge aller Zeichen umgefaltet. Der `\P` Character Class Escape funktioniert auch im `v`-Modus leicht anders (siehe [Unicode Character Class Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)). All dies stellt sicher, dass `[^\P{Lowercase_Letter}]` und `\p{Lowercase_Letter}` streng gleichwertig sind.

## Beispiele

### Hexadezimale Ziffern matchen

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

Die folgende Funktion matcht griechische Buchstaben.

```js
function greekLetters(str) {
  return str.match(/[\p{Script_Extensions=Greek}&&\p{Letter}]/gv);
}

// 𐆊 is U+1018A GREEK ZERO SIGN
greekLetters("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### Verwendung der Subtraktion

Die folgende Funktion matcht alle nicht-ASCII-Zahlen.

```js
function nonASCIINumbers(str) {
  return str.match(/[\p{Decimal_Number}--\d]/gv);
}

// 𑜹 is U+11739 AHOM DIGIT NINE
nonASCIINumbers("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### Zeichenfolgen matchen

Die folgende Funktion matcht alle Zeilenendesequenzen, einschließlich der [Zeilenendezeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und der Sequenz `\r\n` (CRLF).

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

Dieses Beispiel ist genau gleichwertig mit `/(?:\r|\n|\u2028|\u2029|\r\n)/gu` oder `/(?:[\r\n\u2028\u2029]|\r\n)/gu`, aber kürzer.

Der nützlichste Fall von `\q{}` ist, wenn man Subtraktion und Schnittmenge durchführt. Dies war zuvor mit [mehrfachen Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) möglich. Die folgende Funktion matcht Flaggen, die nicht zu den amerikanischen, chinesischen, russischen, britischen und französischen Flaggen gehören.

```js
function notUNSCPermanentMember(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

notUNSCPermanentMember("🇺🇸"); // false
notUNSCPermanentMember("🇩🇪"); // true
```

Dieses Beispiel ist größtenteils gleichwertig mit `/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v`, möglicherweise jedoch leistungsfähiger.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Unicode Character Class Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Literal Character: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Character Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunction: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [RegExp v Flag mit Mengenotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) on v8.dev (2022)
