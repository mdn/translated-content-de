---
title: "Zeichenklasse: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
l10n:
  sourceCommit: d9e1eba619129f2130d82200d47c41eb6ec51125
---

{{jsSidebar}}

Eine **Zeichenklasse** stimmt mit einem beliebigen Zeichen innerhalb oder außerhalb einer benutzerdefinierten Zeichenmenge überein. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann sie auch verwendet werden, um Zeichenketten mit endlicher Länge zu erfassen.

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
  - : Kann ein einzelnes Zeichen, eine weitere in eckige Klammern eingeschlossene Zeichenklasse, eine [Zeichenklassenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), eine [Unicode-Zeichenklassenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) oder eine Zeichenkette mit der Syntax `\q` sein.
- `substring`
  - : Eine Literalzeichenkette.

## Beschreibung

Eine Zeichenklasse spezifiziert eine Liste von Zeichen innerhalb eckiger Klammern und stimmt mit einem beliebigen Zeichen aus der Liste überein. Das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag verändert drastisch, wie Zeichenklassen geparst und interpretiert werden. Die folgenden Syntaxen sind sowohl im `v`-Modus als auch im Nicht-`v`-Modus verfügbar:

- Ein einzelnes Zeichen: stimmt mit dem Zeichen selbst überein.
- Ein Bereich von Zeichen: stimmt mit einem beliebigen Zeichen im inklusiven Bereich überein. Der Bereich wird durch zwei Zeichen definiert, die durch einen Bindestrich (`-`) getrennt sind. Das erste Zeichen muss im Zeichenwert kleiner sein als das zweite Zeichen. Der _Zeichenwert_ ist der Unicode-Codepunkt des Zeichens. Da Unicode-Codepunkte normalerweise alphabetisch zugeordnet werden, spezifiziert `[a-z]` alle lateinischen Kleinbuchstaben, während `[α-ω]` alle griechischen Kleinbuchstaben spezifiziert. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regexes als Sequenz von [BMP](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)-Zeichen interpretiert. Daher repräsentieren Surrogatpaare in Zeichenklassen zwei Zeichen statt eines; siehe unten für Details.
- Escape-Sequenzen: `\b`, `\-`, [Zeichenklassenfluchten](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [Unicode-Zeichenklassenfluchten](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) und andere [Zeichenfluchten](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

Diese Syntaxen können beliebig oft auftreten, und die dargestellten Zeichensätze werden vereinigt. Beispielsweise stimmt `/[a-zA-Z0-9]/` mit jedem Buchstaben oder Ziffer überein.

Das Präfix `^` in einer Zeichenklasse erzeugt eine _Komplementklasse_. Zum Beispiel stimmt `[^abc]` mit jedem Zeichen außer `a`, `b` oder `c` überein. Das `^`-Zeichen ist ein Literalzeichen, wenn es in der Mitte einer Zeichenklasse erscheint — zum Beispiel stimmt `[a^b]` mit den Zeichen `a`, `^` und `b` überein.

Die [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals) führt eine sehr grobe Analyse von Regex-Literalen durch, sodass das Regex-Literal nicht beim `/`-Zeichen endet, das innerhalb einer Zeichenklasse erscheint. Dies bedeutet, dass `/[/]/` gültig ist, ohne dass das `/` maskiert werden muss.

Die Grenzen eines Zeichenbereichs dürfen nicht mehr als ein Zeichen definieren; dies geschieht, wenn eine [Zeichenklassenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwendet wird. Zum Beispiel:

```js-nolint example-bad
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) wird bei Zeichenbereichen, bei denen eine Grenze eine Zeichenklasse ist, das `-` zu einem Literalzeichen. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht verwendet werden.

```js
/[\s-9]/.test("-"); // true
```

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Regexes als Sequenz von BMP-Zeichen interpretiert. Daher repräsentieren Surrogatpaare in Zeichenklassen zwei Zeichen statt eines.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

Auch wenn das Muster [Groß-/Kleinschreibung ignoriert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), ist die Groß-/Kleinschreibung der beiden Enden eines Bereichs entscheidend, um zu bestimmen, welche Zeichen zum Bereich gehören. Zum Beispiel stimmt das Muster `/[E-F]/i` nur mit `E`, `F`, `e` und `f` überein, während das Muster `/[E-f]/i` alle Groß- und Kleinbuchstaben des {{Glossary("ASCII", "ASCII")}}-Zeichensatzes erfasst (da es über `E–Z` und `a–f` hinweggeht), sowie `[`, `\`, `]`, `^`, `_` und `` ` ``.

### Zeichenklasse im Nicht-v-Modus

Zeichenklassen im Nicht-`v`-Modus interpretieren die meisten Zeichen [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und haben weniger Einschränkungen, welche Zeichen enthalten sein können. Zum Beispiel ist `.` ein wörtliches Punktzeichen und kein [Wildcard](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Die einzigen Zeichen, die nicht wörtlich erscheinen dürfen, sind `\`, `]` und `-`.

- In Zeichenklassen werden die meisten Escape-Sequenzen unterstützt, außer `\b`, `\B` und [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` gibt ein Rückschrittzeichen an, anstatt eine [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion), während die anderen beiden Syntaxfehler verursachen. Um `\` wörtlich zu verwenden, maskieren Sie es mit `\\`.
- Das `]`-Zeichen gibt das Ende der Zeichenklasse an. Um es wörtlich zu verwenden, maskieren Sie es mit `\]`.
- Das Bindestrichzeichen (`-`), wenn es zwischen zwei Zeichen verwendet wird, gibt einen Bereich an. Wenn es am Anfang oder Ende einer Zeichenklasse erscheint, ist es ein wörtliches Zeichen. Es ist auch ein wörtliches Zeichen, wenn es in der Grenze eines Bereichs verwendet wird. Zum Beispiel stimmt `[a-]` mit den Zeichen `a` und `-` überein, `[!--]` stimmt mit den Zeichen `!` bis `-` überein, und `[--9]` stimmt mit den Zeichen `-` bis `9` überein. Sie können es auch als `\-` maskieren, wenn Sie es überall wörtlich verwenden möchten.

### Zeichenklasse im v-Modus

Die Grundidee von Zeichenklassen im `v`-Modus bleibt dieselbe: Sie können die meisten Zeichen wörtlich verwenden, `-` zur Kennzeichnung von Zeichenbereichen verwenden und Escape-Sequenzen nutzen. Eine der wichtigsten Funktionen des `v`-Flags ist die _Mengen-Notation_ innerhalb von Zeichenklassen. Wie bereits erwähnt, können normale Zeichenklassen Vereinigungen durch Verkettung von zwei Bereichen ausdrücken, etwa durch die Verwendung von `[A-Z0-9]`, um "die Vereinigung der Menge `[A-Z]` und der Menge `[0-9]`" darzustellen. Es gibt jedoch keine einfache Möglichkeit, andere Operationen mit Zeichenmengen darzustellen, wie etwa Schnittmenge und Differenz.

Mit dem `v`-Flag wird die Schnittmenge mit `&&` und die Subtraktion mit `--` ausgedrückt. Das Fehlen beider impliziert eine Vereinigung. Die beiden Operanden von `&&` oder `--` können ein Zeichen, eine Zeichenflucht, eine Zeichenklassenflucht oder sogar eine andere Zeichenklasse sein. Zum Beispiel: Um "ein Wortzeichen, das kein Unterstrich ist" auszudrücken, können Sie `[\w--_]` verwenden. Sie können Operatoren nicht auf derselben Ebene mischen. Zum Beispiel ist `[\w&&[A-z]--_]` ein Syntaxfehler. Da Sie jedoch Zeichenklassen verschachteln können, können Sie dies explizit schreiben: `[\w&&[[A-z]--_]]` oder `[[\w&&[A-z]]--_]` (die beide `[A-Za-z]` bedeuten). Ebenso ist `[AB--C]` ungültig, und Sie müssen `[A[B--C]]` schreiben (was einfach `[AB]` bedeutet).

Im `v`-Modus kann die [Unicode-Zeichenklassenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` Zeichenketten mit endlicher Länge erfassen, wie z. B. Emojis. Der Vollständigkeit halber können reguläre Zeichenklassen ebenfalls mehr als ein Zeichen erfassen. Um ein "Zeichenkettenliteral" in einer Zeichenklasse zu schreiben, verwenden Sie das Format `\q{...}`. Die einzige unterstützte Regex-Syntax ist [Alternation](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) — darüber hinaus muss `\q` vollständig Literale (einschließlich maskierter Zeichen) umschließen. Dies stellt sicher, dass Zeichenklassen nur Zeichenketten mit endlicher Länge und endlich vielen Möglichkeiten erfassen können.

Da die Syntax von Zeichenklassen nun komplexer ist, sind mehr Zeichen reserviert und dürfen nicht wörtlich erscheinen.

- Zusätzlich zu `]` und `\` müssen die folgenden Zeichen in Zeichenklassen maskiert werden, wenn sie wörtlich dargestellt werden sollen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Diese Liste ähnelt der Liste der [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character), außer dass `^`, `$`, `*`, `+`, und `?` innerhalb von Zeichenklassen nicht reserviert sind, während `/` und `-` außerhalb von Zeichenklassen nicht reserviert sind (obwohl `/` möglicherweise ein Regex-Literal begrenzt und daher immer noch maskiert werden muss). Alle diese Zeichen können in `u`-Modus-Zeichenklassen optional maskiert werden.
- Die folgenden "Doppel-Punktuator"-Sequenzen müssen ebenfalls maskiert werden (machen jedoch ohne das `v`-Flag kaum Sinn): `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ````,`~~`. Im `u`-Modus können einige dieser Zeichen nur wörtlich in Zeichenklassen erscheinen und verursachen beim Maskieren einen Syntaxfehler. Im `v`-Modus müssen sie maskiert werden, wenn sie paarweise auftreten, können jedoch optional maskiert werden, wenn sie allein auftreten. Zum Beispiel ist `/[\!]/u`ungültig, da es sich um eine [Identitätsflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) handelt, aber sowohl`/[\!]/v`als auch`/[!]/v`sind gültig, während`/[!!]/v` ungültig ist. Die [Literalzeichen]-Referenz (/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) enthält eine detaillierte Tabelle darüber, welche Zeichen maskiert oder unmaskiert erscheinen können.

Komplementzeichenklassen `[^...]` können unmöglich mit Zeichenketten übereinstimmen, die länger als ein Zeichen sind. Zum Beispiel ist `[\q{ab|c}]` gültig und stimmt mit der Zeichenkette `"ab"` überein, aber `[^\q{ab|c}]` ist ungültig, da unklar ist, wie viele Zeichen verbraucht werden sollen. Die Prüfung erfolgt, indem überprüft wird, ob alle `\q` einzelne Zeichen enthalten und alle `\p` Zeichenattribute spezifizieren — für Vereinigungen müssen alle Operanden reine Zeichen sein; für Schnittmengen muss mindestens ein Operand reine Zeichen enthalten; für Subtraktionen muss der linkeste Operand reine Zeichen enthalten. Die Prüfung ist syntaktisch, ohne den tatsächlich angegebenen Zeichensatz zu berücksichtigen. Das bedeutet, dass obwohl `/[^\q{ab|c}--\q{ab}]/v` gleichwertig mit `/[^c]/v` ist, es dennoch abgelehnt wird.

### Komplementklassen und Groß-/Kleinschreibung ignorierendes Matching

[Groß-/Kleinschreibung ignorierendes Matching](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) funktioniert, indem sowohl die erwartete Zeichensatzmenge als auch die zugehörige Zeichenkette case-gefoldet werden. Beim Festlegen von Komplementklassen ist die Reihenfolge, in der JavaScript das Case-Folding und das Komplementieren durchführt, wichtig. Kurz gesagt, `[^...]` im `u`-Modus stimmt mit `allCharacters - caseFold(original)` überein, während es im `v`-Modus mit `caseFold(allCharacters) - caseFold(original)` übereinstimmt. Dadurch wird sichergestellt, dass alle Komplementklassensyntaxen, einschließlich `[^...]`, `\P`, `\W` usw., sich gegenseitig aufheben.

Betrachten Sie die folgenden zwei Regexe (vereinfachend sei angenommen, dass Unicode-Zeichen eine von drei Kategorien haben: Kleinbuchstaben, Großbuchstaben und caseless Zeichen, und dass jeder Großbuchstabe genau einen Kleinbuchstaben-Gegenpart hat und umgekehrt):

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

`r2` ist eine doppelte Negation und scheint gleichwertig mit `r1` zu sein. Tatsächlich stimmt `r1` jedoch mit allen ASCII-Groß- und Kleinbuchstaben überein, während `r2` mit keinem übereinstimmt.

Hier ist eine schrittweise Erklärung:

- In `r1` konstruiert `\p{Lowercase_Letter}` eine Menge aller Kleinbuchstaben. Zeichen in dieser Menge werden dann auf ihre Kleinbuchstabenform gefaltet und bleiben daher gleich. Die Eingabezeichenkette wird ebenfalls auf Kleinbuchstaben gefaltet. Daher werden `"A"` und `"a"` beide zu `"a"` gefaltet und stimmen mit `r1` überein.
- In `r2` konstruiert `\P{Lowercase_Letter}` zuerst eine Menge aller nicht-kleinen Buchstaben, d.h. Großbuchstaben und caseless Zeichen. Zeichen in dieser Menge werden dann auf ihre Kleinbuchstabenform gefaltet, sodass der Zeichensatz alle Kleinbuchstaben und caseless Zeichen wird. `[^...]` negiert die Übereinstimmung, was dazu führt, dass alles übereinstimmt, was _nicht_ in dieser Menge ist, d.h. ein Großbuchstabe. Die Eingabe wird jedoch weiterhin auf Kleinbuchstaben gefaltet, sodass `"A"` zu `"a"` gefaltet wird und nicht mit `r2` übereinstimmt.

Die Hauptbeobachtung hier ist, dass nach der Negation der erwartete Zeichensatz möglicherweise keine Teilmenge der Menge case-gefoldeter Unicode-Zeichen ist, was dazu führt, dass die case-gefoldete Eingabe nicht im erwarteten Zeichensatz enthalten ist. Im `v`-Modus wird auch die Menge aller Zeichen case-gefoldet. Die `\P`-Zeichenklasse funktioniert ebenfalls leicht anders im `v`-Modus (siehe [Unicode-Zeichenklassenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)). All dies stellt sicher, dass `[^\P{Lowercase_Letter}]` und `\p{Lowercase_Letter}` streng gleichwertig sind.

## Beispiele

### Hexadezimalziffern erfassen

Die folgende Funktion bestimmt, ob eine Zeichenkette eine gültige Hexadezimalzahl enthält:

```js
function isHexadecimal(str) {
  return /^[0-9A-F]+$/i.test(str);
}

isHexadecimal("2F3"); // true
isHexadecimal("beef"); // true
isHexadecimal("undefined"); // false
```

### Verwendung der Schnittmenge

Die folgende Funktion erfasst griechische Buchstaben.

```js
function greekLetters(str) {
  return str.match(/[\p{Script_Extensions=Greek}&&\p{Letter}]/gv);
}

// 𐆊 is U+1018A GREEK ZERO SIGN
greekLetters("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### Verwendung der Subtraktion

Die folgende Funktion erfasst alle nicht-ASCII-Zahlen.

```js
function nonASCIINumbers(str) {
  return str.match(/[\p{Decimal_Number}--[0-9]]/gv);
}

// 𑜹 is U+11739 AHOM DIGIT NINE
nonASCIINumbers("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### Zeichenketten erfassen

Die folgende Funktion erfasst alle Zeilenumbruchsequenzen, einschließlich der [Zeilenumbruchzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) und der Sequenz `\r\n` (CRLF).

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

Dieses Beispiel ist exakt äquivalent zu `/(?:\r|\n|\u2028|\u2029|\r\n)/gu` oder `/(?:[\r\n\u2028\u2029]|\r\n)/gu`, jedoch kürzer.

Der nützlichste Fall von `\q{}` ist bei Subtraktionen und Schnittmengen. Frühere Umsetzungen waren durch [mehrfache Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection) möglich. Die folgende Funktion erfasst Flaggen, die nicht die der Vereinigten Staaten, Chinas, Russlands, Großbritanniens oder Frankreichs sind.

```js
function notUNSCPermanentMember(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

notUNSCPermanentMember("🇺🇸"); // false
notUNSCPermanentMember("🇩🇪"); // true
```

Dieses Beispiel ist in etwa gleichwertig zu `/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v`, möglicherweise jedoch leistungsfähiger.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)-Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklassenflucht: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Unicode-Zeichenklassenflucht: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Literalzeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Zeichenflucht: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [RegExp v-Flag mit Mengen-Notation und Zeichenketteneigenschaften](https://v8.dev/features/regexp-v-flag) auf v8.dev (2022)
