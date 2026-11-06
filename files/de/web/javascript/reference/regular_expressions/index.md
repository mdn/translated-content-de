---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Ein **regulärer Ausdruck** (kurz _Regex_) ermöglicht es Entwicklern, Zeichenfolgen mit einem Muster abzugleichen, Informationen über übereinstimmende Teilzeichenfolgen zu extrahieren oder einfach zu prüfen, ob eine Zeichenfolge dem Muster entspricht. Reguläre Ausdrücke werden in vielen Programmiersprachen verwendet. Die JavaScript-Syntax ist von [Perl](https://www.perl.org/) inspiriert.

Lesen Sie den [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions), um einen Überblick über die verfügbaren Regex-Syntaxformen und ihre Funktionsweise zu erhalten.

## Beschreibung

[_Reguläre Ausdrücke_](https://en.wikipedia.org/wiki/Regular_expression) sind ein wichtiges Konzept der Theorie formaler Sprachen. Mit ihnen lässt sich eine möglicherweise unendliche Menge von Zeichenfolgen beschreiben (eine sogenannte _Sprache_). Im Kern benötigt ein regulärer Ausdruck die folgenden Bestandteile:

- Eine Menge von _Zeichen_, die in der Sprache verwendet werden können, das sogenannte _Alphabet_.
- _Verkettung_: `ab` bedeutet „das Zeichen `a`, gefolgt vom Zeichen `b`“.
- _Vereinigung_: `a|b` bedeutet „entweder `a` oder `b`“.
- _Kleene-Stern_: `a*` bedeutet „null oder mehr `a`-Zeichen“.

Unter der Annahme eines endlichen Alphabets (etwa der 26 Buchstaben des englischen Alphabets oder des gesamten Unicode-Zeichensatzes) lassen sich alle regulären Sprachen mit den oben genannten Bestandteilen erzeugen. Viele Muster wären auf diese Weise allerdings sehr umständlich auszudrücken (etwa „10 Ziffern“ oder „ein Zeichen, das kein Leerzeichen ist“). Deshalb bieten reguläre Ausdrücke in JavaScript zahlreiche Kurzschreibweisen, die im Folgenden vorgestellt werden.

> [!NOTE]
> Reguläre Ausdrücke in JavaScript sind aufgrund von [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) streng genommen nicht regulär (reguläre Ausdrücke müssen endlich viele Zustände haben). Dennoch sind sie eine sehr nützliche Funktion.

### Reguläre Ausdrücke erstellen

Ein regulärer Ausdruck wird normalerweise als Literal erstellt, indem ein Muster in Schrägstriche (`/`) eingeschlossen wird:

```js
const regex1 = /ab+c/g;
```

Reguläre Ausdrücke können auch mit dem Konstruktor {{jsxref("RegExp/RegExp", "RegExp()")}} erstellt werden:

```js
const regex2 = new RegExp("ab+c", "g");
```

Zur Laufzeit unterscheiden sich die beiden Varianten nicht. Sie können sich jedoch auf die Leistung und die statische Analysierbarkeit auswirken sowie die Erstellung durch erforderliches Escaping von Zeichen unterschiedlich aufwendig machen. Weitere Informationen finden Sie in der Referenz zu [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor).

### Regex-Flags

Flags sind spezielle Parameter, die beeinflussen können, wie ein regulärer Ausdruck interpretiert wird oder wie er mit dem Eingabetext interagiert. Jedem Flag entspricht eine Zugriffseigenschaft des `RegExp`-Objekts.

| Flag | Beschreibung                                                                                                                          | Zugehörige Eigenschaft                          |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für übereinstimmende Teilzeichenfolgen.                                                                               | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                                                        | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Suche ohne Berücksichtigung der Groß- und Kleinschreibung.                                                                            | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Bewirkt, dass `^` und `$` mit dem Anfang und Ende jeder Zeile statt mit dem Anfang und Ende der gesamten Zeichenfolge übereinstimmen. | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Ermöglicht, dass `.` auch mit Zeilenumbruchzeichen übereinstimmt.                                                                     | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | „Unicode“; behandelt ein Muster als Folge von Unicode-Codepunkten.                                                                    | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Eine Erweiterung des `u`-Modus um zusätzliche Unicode-Funktionen.                                                                     | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine „Sticky“-Suche durch, bei der der Abgleich an der aktuellen Position in der Zielzeichenfolge beginnt.                      | {{jsxref("RegExp/sticky", "sticky")}}           |

Die Flags `i`, `m` und `s` können mithilfe der [Modifier-Syntax](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) für bestimmte Teile eines regulären Ausdrucks aktiviert oder deaktiviert werden.

Die folgenden Abschnitte führen alle verfügbaren Regex-Syntaxformen auf, gruppiert nach ihrer syntaktischen Funktion.

### Assertions

Assertions sind Konstrukte, die prüfen, ob die Zeichenfolge an einer bestimmten Position eine Bedingung erfüllt, ohne Zeichen zu verbrauchen. Assertions können nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden.

- [Assertion für die Zeichenfolgengrenze: `\A`, `\z`, `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion)
  - : Prüft, ob die aktuelle Position genau am Anfang oder Ende der gesamten Zeichenfolge liegt (`\Z` lässt auch einen abschließenden Zeilenumbruch zu), unabhängig davon, ob das Flag `m` gesetzt ist.
- [Assertion für die Eingabegrenze: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Prüft, ob die aktuelle Position am Anfang oder Ende der Eingabe liegt oder, wenn das Flag `m` gesetzt ist, am Anfang oder Ende einer Zeile.
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Prüft, ob auf die aktuelle Position ein bestimmtes Muster folgt oder nicht folgt.
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Prüft, ob der aktuellen Position ein bestimmtes Muster vorausgeht oder nicht vorausgeht.
- [Assertion für Wortgrenzen: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Prüft, ob die aktuelle Position eine Wortgrenze ist.

### Atome

Atome sind die grundlegenden Einheiten eines regulären Ausdrucks. Jedes Atom _verbraucht_ null oder mehr Zeichen der Zeichenfolge und bewirkt entweder, dass der Abgleich fehlschlägt, oder ermöglicht die Fortsetzung des Abgleichs mit dem nächsten Atom.

- [Backreference: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Stimmt mit einem zuvor abgeglichenen Teilmuster überein, das mit einer Capturing Group erfasst wurde.
- [Capturing Group: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Stimmt mit einem Teilmuster überein und speichert Informationen über die Übereinstimmung.
- [Character Class: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Stimmt mit einem beliebigen Zeichen aus einer Zeichenmenge beziehungsweise außerhalb dieser Menge überein. Wenn das Flag [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) aktiviert ist, können damit auch Zeichenfolgen endlicher Länge abgeglichen werden.
- [Character-Class-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Stimmt mit einem beliebigen Zeichen aus einer vordefinierten Zeichenmenge beziehungsweise außerhalb dieser Menge überein.
- [Character Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Stimmt mit einem Zeichen überein, das sich möglicherweise nicht gut in seiner literalen Form darstellen lässt.
- [Literales Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : Stimmt mit einem bestimmten Zeichen überein.
- [Modifier: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
  - : Überschreibt Flag-Einstellungen in einem bestimmten Teil eines regulären Ausdrucks.
- [Benannte Backreference: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Stimmt mit einem zuvor abgeglichenen Teilmuster überein, das mit einer benannten Capturing Group erfasst wurde.
- [Benannte Capturing Group: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Stimmt mit einem Teilmuster überein und speichert Informationen über die Übereinstimmung. Die Gruppe kann später anhand eines selbst gewählten Namens statt anhand ihres Index im Muster identifiziert werden.
- [Non-Capturing Group: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Stimmt mit einem Teilmuster überein, ohne Informationen über die Übereinstimmung zu speichern.
- [Unicode-Character-Class-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Stimmt mit einer durch eine Unicode-Eigenschaft festgelegten Zeichenmenge überein. Wenn das Flag [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) aktiviert ist, können damit auch Zeichenfolgen endlicher Länge abgeglichen werden.
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Stimmt mit jedem Zeichen außer Zeilenabschlusszeichen überein, sofern das Flag `s` nicht gesetzt ist.

### Weitere Funktionen

Diese Funktionen legen selbst kein Muster fest, sondern dienen dazu, Muster zusammenzusetzen.

- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Stimmt mit einer von mehreren Alternativen überein, die durch das Zeichen `|` getrennt sind.
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Stimmt mit einem Atom überein, das eine bestimmte Anzahl von Malen vorkommt.

### Escape-Sequenzen

_Escape-Sequenzen_ in regulären Ausdrücken sind Syntaxformen, die aus `\` gefolgt von einem oder mehreren Zeichen bestehen. Je nachdem, was auf `\` folgt, können sie sehr unterschiedliche Zwecke erfüllen. Die folgende Tabelle führt alle gültigen Escape-Sequenzen auf:

| Escape-Sequenz | Gefolgt von                                                                      | Bedeutung                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `\A`           | Nichts                                                                           | [Assertion für die Zeichenfolgengrenze][BBA]                                                                                     |
| `\B`           | Nichts                                                                           | [Assertion für Positionen außerhalb von Wortgrenzen][WBA]                                                                        |
| `\D`           | Nichts                                                                           | [Character-Class-Escape][CCE] für Zeichen, die keine Ziffern sind                                                                |
| `\P`           | `{`, einer Unicode-Eigenschaft und/oder einem Wert, dann `}`                     | [Unicode-Character-Class-Escape][UCCE] für Zeichen ohne die angegebene Unicode-Eigenschaft                                       |
| `\S`           | Nichts                                                                           | [Character-Class-Escape][CCE] für Zeichen, die keine Whitespace-Zeichen sind                                                     |
| `\W`           | Nichts                                                                           | [Character-Class-Escape][CCE] für Zeichen, die keine Wortzeichen sind                                                            |
| `\Z`           | Nichts                                                                           | [Assertion für die Zeichenfolgengrenze][BBA]                                                                                     |
| `\b`           | Nichts                                                                           | [Assertion für Wortgrenzen][WBA]; innerhalb von [Character Classes][CC] steht es für U+0008 (BACKSPACE)                          |
| `\c`           | Einem Buchstaben von `A` bis `Z` oder `a` bis `z`                                | [Character Escape][CE] für das Steuerzeichen, dessen Wert dem Zeichenwert des Buchstabens modulo 32 entspricht                   |
| `\d`           | Nichts                                                                           | [Character-Class-Escape][CCE] für Ziffern (`0` bis `9`)                                                                          |
| `\f`           | Nichts                                                                           | [Character Escape][CE] für U+000C (FORM FEED)                                                                                    |
| `\k`           | `<`, einem Bezeichner, dann `>`                                                  | Eine [benannte Backreference][NBR]                                                                                               |
| `\n`           | Nichts                                                                           | [Character Escape][CE] für U+000A (LINE FEED)                                                                                    |
| `\p`           | `{`, einer Unicode-Eigenschaft und/oder einem Wert, dann `}`                     | [Unicode-Character-Class-Escape][UCCE] für Zeichen mit der angegebenen Unicode-Eigenschaft                                       |
| `\q`           | `{`, einer Zeichenfolge, dann `}`                                                | Nur innerhalb von [Character Classes im `v`-Modus][VCC] gültig; steht für die Zeichenfolge, die wörtlich abgeglichen werden soll |
| `\r`           | Nichts                                                                           | [Character Escape][CE] für U+000D (CARRIAGE RETURN)                                                                              |
| `\s`           | Nichts                                                                           | [Character-Class-Escape][CCE] für Whitespace-Zeichen                                                                             |
| `\t`           | Nichts                                                                           | [Character Escape][CE] für U+0009 (CHARACTER TABULATION)                                                                         |
| `\u`           | 4 Hexadezimalziffern; oder `{`, einer oder mehreren Hexadezimalziffern, dann `}` | [Character Escape][CE] für das Zeichen mit dem angegebenen Codepunkt                                                             |
| `\v`           | Nichts                                                                           | [Character Escape][CE] für U+000B (LINE TABULATION)                                                                              |
| `\w`           | Nichts                                                                           | [Character-Class-Escape][CCE] für Wortzeichen (`A` bis `Z`, `a` bis `z`, `0` bis `9`, `_`)                                       |
| `\x`           | 2 Hexadezimalziffern                                                             | [Character Escape][CE] für das Zeichen mit dem angegebenen Wert                                                                  |
| `\z`           | Nichts                                                                           | [Assertion für die Zeichenfolgengrenze][BBA]                                                                                     |
| `\0`           | Nichts                                                                           | [Character Escape][CE] für U+0000 (NULL)                                                                                         |

[BBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion
[CC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class
[WBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

Auf `\` gefolgt von `0` und einer weiteren Ziffer folgt eine [veraltete oktale Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences), die im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verboten ist. Folgt auf `\` eine andere Ziffernfolge, entsteht eine [Backreference](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

Außerdem können auf `\` bestimmte Zeichen folgen, die weder Buchstaben noch Ziffern sind. In diesem Fall ist die Escape-Sequenz immer ein [Character Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), das für das escapte Zeichen selbst steht:

<!-- Note: the {} need to be double-escaped, once for Yari -->

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\\{`, `\|`, `\\}`: überall gültig
- `\-`: nur innerhalb von [Character Classes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) gültig
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`: nur innerhalb von [Character Classes im `v`-Modus](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) gültig

Die übrigen {{Glossary("ASCII", "ASCII")}}-Zeichen – nämlich das Leerzeichen, `"`, `'`, `_` sowie alle oben nicht genannten Buchstaben – bilden keine gültigen Escape-Sequenzen. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identity Escapes_: Sie stehen für das Zeichen, das auf den Backslash folgt. Beispielsweise steht `\a` für das Zeichen `a`. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen einzuführen, ohne Probleme mit der Abwärtskompatibilität zu verursachen. Daher ist es im Unicode-bewussten Modus verboten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
