---
title: "Zeichenklasse: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Zeichenklasse** passt zu jedem Zeichen innerhalb oder außerhalb eines benutzerdefinierten Zeichensets. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um endliche Zeichenfolgen zu matchen.

## Syntax

```regex
[]
[abc]
[A-Z]

[^]
[^abc]
[^A-Z]

// Nur im `v`-Modus
[operand1&&operand2]
[operand1--operand2]
[\q{substring}]
```

### Parameter

- `operand1`, `operand2`
  - : Kann ein einzelnes Zeichen, eine andere Zeichenklasse in eckigen Klammern, ein [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), ein [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) oder ein String mit der `\q`-Syntax sein.
- `substring`
  - : Ein literaler String.

## Beschreibung

Eine Zeichenklasse spezifiziert eine Liste von Zeichen zwischen eckigen Klammern und passt zu jedem Zeichen in der Liste. Das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag verändert die Art und Weise, wie Zeichenklassen analysiert und interpretiert werden, erheblich. Die folgenden Syntaxen sind sowohl im `v`-Modus als auch im Nicht-`v`-Modus verfügbar:

- Ein einzelnes Zeichen: passt zu dem Zeichen selbst.
- Ein Bereich von Zeichen: passt zu jedem Zeichen im einschließenden Bereich. Der Bereich wird durch zwei Zeichen angegeben, die durch einen Bindestrich (`-`) getrennt sind. Das erste Zeichen muss im Zeichenwert kleiner sein als das zweite Zeichen. Der _Zeichenwert_ ist der Unicode-Codepunkt des Zeichens. Da Unicode-Codepunkte in der Regel alphabetisch zugeordnet werden, spezifiziert `[a-z]` alle kleinen lateinischen Buchstaben, während `[α-ω]` alle kleinen griechischen Buchstaben spezifiziert. Im [Unicode-unaware Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regexes als Folge von [BMP](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)-Zeichen interpretiert. Daher repräsentieren Surrogatpaare in Zeichenklassen zwei Zeichen statt eines.
- Escape-Sequenzen: `\b`, `\-`, [Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) und andere [Zeichen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

Diese Syntaxen können beliebig oft vorkommen, und die von ihnen repräsentierten Zeichensets werden vereinigt. Zum Beispiel `/[a-zA-Z0-9]/` passt zu jedem Buchstaben oder Ziffer.

Das `^` Präfix in einer Zeichenklasse erzeugt eine _Komplementklasse_. Zum Beispiel passt `[^abc]` zu jedem Zeichen, außer `a`, `b` oder `c`. Das `^` Zeichen ist ein literales Zeichen, wenn es in der Mitte einer Zeichenklasse erscheint — zum Beispiel `[a^b]` passt zu `a`, `^` und `b`.

Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals) führt eine sehr grobe Analyse von Regex-Literalen durch, damit es nicht das Regex-Literal an einem `/` Zeichen beendet, das innerhalb einer Zeichenklasse erscheint. Das bedeutet, `/[/]/` ist valide, ohne dass das `/` escapet werden muss.

Die Grenzen eines Zeichenbereichs dürfen nicht mehr als ein Zeichen angeben, was passiert, wenn Sie einen [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwenden. Zum Beispiel:

```js-nolint example-bad
/[\s-9]/u; // SyntaxError: Ungültiger regulärer Ausdruck: Ungültige Zeichenklasse
```

In [Unicode-unaware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) machen Zeichenbereiche, bei denen eine Grenze eine Zeichenklasse ist, den `-` zu einem literalen Zeichen. Dies ist eine [veraltete Syntax aus Kompatibilitätsgründen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js
/[\s-9]/.test("-"); // true
```

In [Unicode-unaware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regexes als Folge von BMP-Zeichen interpretiert. Daher repräsentieren Surrogatpaare in Zeichenklassen zwei Zeichen statt eines.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Ungültiger regulärer Ausdruck: /[😄-😛]/: Bereichsgrenze in Zeichenklasse in falscher Reihenfolge
/[😄-😛]/u.test("😑"); // true
```

Auch wenn das Muster [Groß- und Kleinschreibung ignoriert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), ist die Groß- und Kleinschreibung der beiden Enden eines Bereichs wichtig, um zu bestimmen, welche Zeichen zum Bereich gehören. Zum Beispiel passt das Muster `/[E-F]/i` nur zu `E`, `F`, `e` und `f`, während das Muster `/[E-f]/i` zu allen Groß- und Kleinbuchstaben der ASCII-Zeichen (weil es über `E–Z` und `a–f` spannt), sowie zu `[`, `\`, `]`, `^`, `_` und `` ` ``.

### Nicht-v-Modus Zeichenklasse

Nicht-`v`-Modus Zeichenklassen interpretieren die meisten Zeichen [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und haben weniger Beschränkungen bezüglich der Zeichen, die sie enthalten können. Zum Beispiel ist `.` der wörtliche Punkt, nicht der [Wildcard](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Die einzigen Zeichen, die nicht wörtlich auftreten können, sind `\`, `]` und `-`.

- In Zeichenklassen werden die meisten Escape-Sequenzen unterstützt, außer `\b`, `\B` und [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` zeigt ein Backspace-Zeichen anstelle eines [Wortgrenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) an, während die anderen beiden Syntaxfehler verursachen. Um `\` wörtlich zu verwenden, sollte es als `\\` escapen werden.
- Das `]` Zeichen zeigt das Ende der Zeichenklasse an. Um es wörtlich zu verwenden, escapen Sie es als `\]`.
- Der Bindestrich (`-`) zeigt, wenn zwischen zwei Zeichen verwendet, einen Bereich an. Wenn er am Anfang oder Ende einer Zeichenklasse erscheint, ist er ein wörtliches Zeichen. Er ist auch ein wörtliches Zeichen, wenn er in der Grenze eines Bereichs verwendet wird. Zum Beispiel enthält `[a-]` die Zeichen `a` und `-`, `[!--]` passt zu den Zeichen von `!` bis `-`, und `[--9]` passt zu den Zeichen von `-` bis `9`. Sie können ihn auch als `\-` escapen, wenn Sie ihn an einer beliebigen Stelle wörtlich verwenden möchten.

### v-Modus Zeichenklasse

Die grundlegende Idee der Zeichenklassen im `v` Modus bleibt gleich: Sie können immer noch die meisten Zeichen wörtlich verwenden, `-` verwenden, um Zeichenbereiche anzuzeigen, und Escape-Sequenzen verwenden. Eine der wichtigsten Funktionen des `v`-Flags ist _Mengennotation_ innerhalb von Zeichenklassen. Wie bereits erwähnt, können normale Zeichenklassen Vereinigungen durch Verkettung zweier Bereiche ausdrücken, wie z. B. durch die Verwendung von `[A-Z0-9]`, um "die Vereinigung der Menge `[A-Z]` und der Menge `[0-9]`" auszudrücken. Es gibt jedoch keinen einfachen Weg, andere Operationen mit Mengen wie Schnittmenge und Differenz darzustellen.

Mit dem `v`-Flag wird die Schnittmenge durch `&&` und die Subtraktion durch `--` ausgedrückt. Das Fehlen beider impliziert die Vereinigung. Die beiden Operanden von `&&` oder `--` können ein Zeichen, ein Zeichen-Escape, ein Zeichenklassen-Escape oder sogar eine andere Zeichenklasse sein. Zum Beispiel können Sie "ein Wortzeichen, das kein Unterstrich ist" mit `[\w--_]` ausdrücken. Sie können keine Operatoren auf derselben Ebene mischen. Zum Beispiel ist `[\w&&[A-z]--_]` ein Syntaxfehler. Sie können jedoch Zeichenklassen verschachteln, um explizit auszudrücken, indem Sie `[\w&&[[A-z]--_]]` oder `[[\w&&[A-z]]--_]` schreiben (die beide `[A-Za-z]` bedeuten). In ähnlicher Weise ist `[AB--C]` ungültig, und Sie müssen `[A[B--C]]` schreiben (was einfach `[AB]` bedeutet).

Im `v`-Modus kann das [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` endliche Zeichenfolgen wie Emojis matchen. Aus Symmetriegründen können reguläre Zeichenklassen auch mehr als ein Zeichen matchen. Um ein "String-Literal" in eine Zeichenklasse zu schreiben, umhüllen Sie den String mit `\q{...}`. Die einzige reguläre Ausdruckssyntax, die hier unterstützt wird, ist die [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) — abgesehen davon muss `\q` die Literale vollständig umschließen (einschließlich escapeter Zeichen). Dies gewährleistet, dass Zeichenklassen nur Zeichenfolgen endlicher Länge mit endlich vielen Möglichkeiten matchen können.

Da die Zeichenklassensyntax jetzt anspruchsvoller ist, sind mehr Zeichen reserviert und dürfen nicht wörtlich auftreten.

- Zusätzlich zu `]` und `\` müssen die folgenden Zeichen in Zeichenklassen escapet werden, wenn sie wörtliche Zeichen darstellen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Diese Liste ist der Liste der [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) weitgehend ähnlich, mit der Ausnahme, dass `^`, `$`, `*`, `+` und `?` innerhalb von Zeichenklassen nicht reserviert sind, während `/` und `-` außerhalb von Zeichenklassen nicht reserviert sind (obwohl `/` ein reguläres Ausdrucksliteral umschließen kann und daher trotzdem escapet werden muss). All diese Zeichen können auch optional in `u`-Modus Zeichenklasse escapet werden.
- Die folgenden "doppelten Interpunktionszeichen"-Sequenzen müssen ebenfalls escapet werden (aber sie ergeben ohne das `v`-Flag ohnehin nicht viel Sinn): `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. Im `u` Modus können einige dieser Zeichen nur wörtlich innerhalb von Zeichenklassen auftreten und verursachen einen Syntaxfehler, wenn sie escapet werden. Im `v` Modus müssen sie escapet werden, wenn sie paarweise auftreten, können aber optional escapet werden, wenn sie alleine auftreten. Zum Beispiel ist `/[\!]/u` ungültig, weil es sich um ein [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) handelt, aber sowohl `/[\!]/v` als auch `/[!]/v` sind gültig, während `/[!!]/v` ungültig ist. Die [wörtliche Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Referenz hat eine detaillierte Tabelle darüber, welche Zeichen escapet oder unescapet auftreten können.

Komplementzeichenklassen `[^...]` können unmöglich Zeichenfolgen länger als ein Zeichen matchen. Zum Beispiel ist `[\q{ab|c}]` gültig und matcht den String `"ab"`, aber `[^\q{ab|c}]` ist ungültig, da unklar ist, wie viele Zeichen konsumiert werden sollen. Die Prüfung erfolgt, indem überprüft wird, ob alle `\q` einzelne Zeichen enthalten und alle `\p` Zeichen-Merkmale spezifizieren — für Vereinigungen müssen alle Operanden reine Zeichen sein; für Schnittmengen muss mindestens ein Operand reine Zeichen sein; für Subtraktionen muss der äußerste Operand reine Zeichen sein. Die Prüfung ist syntaktisch, ohne auf die tatsächlich spezifizierte Zeichenmenge zu schauen, was bedeutet, dass obwohl `/[^\q{ab|c}--\q{ab}]/v` gleichbedeutend mit `/[^c]/v` ist, es dennoch abgelehnt wird.

### Komplementklassen und groß- und kleinschreibung insensitive Übereinstimmung

Im nicht-`v`-Modus werden Komplementzeichenklassen `[^...]` einfach dadurch implementiert, dass das Match-Ergebnis invertiert wird — das heißt, `[^...]` passt, wenn `[...]` nicht passt, und umgekehrt. Die anderen Komplementklassen, wie `\P{...}` und `\W`, arbeiten jedoch, indem sie eifrig die Menge aller Zeichen ohne die angegebene Eigenschaft konstruieren. Sie scheinen das gleiche Verhalten zu erzeugen, werden aber komplexer, wenn sie mit [groß- und Kleinschreibung ignorierender](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Übereinstimmung kombiniert werden.

Betrachten Sie die folgenden zwei Regexe:

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

Das `r2` ist eine doppelte Negation und scheint gleichbedeutend mit `r1` zu sein. Tatsächlich passt `r1` jedoch zu allen Klein- und Großbuchstaben der ASCII-Buchstaben, während `r2` zu keinem passt. Um zu veranschaulichen, wie es funktioniert, nehmen wir an, wir beschäftigen uns nur mit ASCII-Zeichen, nicht mit dem gesamten Unicode-Zeichensatz, und `r1` und `r2` sind wie unten angegeben:

```js
const r1 = /[a-z]/iu;
const r2 = /[^A-Z]/iu;
```

Erinnern Sie sich daran, dass die groß- und Kleinschreibung ignorierende Übereinstimmung durch Case-Folding sowohl des Musters als auch der Eingabe auf dieselbe Groß- und Kleinschreibung erfolgt (siehe {{jsxref("RegExp/ignoreCase", "ignoreCase")}} für weitere Details). Für `r1` bleibt die Zeichenklasse `a-z` nach dem Case-Folding unverändert, während sowohl Groß- als auch Kleinbuchstaben-ASCII-String-Eingaben nach Kleinbuchstaben gefaltet werden, sodass `r1` sowohl `"A"` als auch `"a"` matchen kann. Für `r2` wird die Zeichenklasse `A-Z` zu `a-z` gefaltet; jedoch negiert `^` das Match-Ergebnis, sodass `[^A-Z]` effektiv nur Zeichen im Großbuchstabenbereich passt. Jedoch werden sowohl Groß- als auch Kleinbuchstaben-ASCII-String-Eingaben trotzdem nach Kleinbuchstaben gefaltet, was dazu führt, dass `r2` zu keinem passt.

Im `v`-Modus wird dieses Verhalten behoben — `[^...]` konstruieren auch die Komplementklasse eifrig anstatt das Match-Ergebnis zu negieren. Dadurch sind `[^\P{Lowercase_Letter}]` und `\p{Lowercase_Letter}` streng äquivalent.

## Beispiele

### Übereinstimmung mit Hexadezimalziffern

Die folgende Funktion bestimmt, ob ein String eine gültige Hexadezimalzahl enthält:

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

// 𐆊 ist U+1018A GREEK ZERO SIGN
greekLetters("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### Verwendung der Subtraktion

Die folgende Funktion passt zu allen nicht-ASCII-Zahlen.

```js
function nonASCIINumbers(str) {
  return str.match(/[\p{Decimal_Number}--[0-9]]/gv);
}

// 𑜹 ist U+11739 AHOM DIGIT NINE
nonASCIINumbers("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### Übereinstimmung mit Zeichenfolgen

Die folgende Funktion passt zu allen Zeilenendungssequenzen, einschließlich der [Zeilenendungszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und der Sequenz `\r\n` (CRLF).

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

Der nützlichste Fall von `\q{}` ist beim Ausführen von Subtraktionen und Schnittmengen. Dies war zuvor mit [mehreren Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) möglich. Die folgende Funktion passt zu Flaggen, die nicht eine der amerikanischen, chinesischen, russischen, britischen und französischen Flaggen sind.

```js
function notUNSCPermanentMember(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

notUNSCPermanentMember("🇺🇸"); // false
notUNSCPermanentMember("🇩🇪"); // true
```

Dieses Beispiel entspricht weitgehend `/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v`, außer dass es möglicherweise leistungsfähiger ist.

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
- [RegExp v-Flag mit Mengennotation und Eigenschaften von Zeichenfolgen](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
