---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

Ein **regulärer Ausdruck** (kurz _regex_) ermöglicht es Entwicklern, Zeichenfolgen mit einem Muster abzugleichen, Informationen über Übereinstimmungen zu extrahieren oder einfach zu testen, ob die Zeichenfolge diesem Muster entspricht. Reguläre Ausdrücke werden in vielen Programmiersprachen verwendet, und die Syntax von JavaScript ist von [Perl](https://www.perl.org/) inspiriert.

Es wird empfohlen, den [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu lesen, um einen Überblick über die verfügbaren Regex-Syntaxen und deren Funktionsweise zu erhalten.

## Beschreibung

[_Reguläre Ausdrücke_](https://en.wikipedia.org/wiki/Regular_expression) sind ein wichtiges Konzept in der formalen Sprachtheorie. Sie sind eine Möglichkeit, eine möglicherweise unendliche Menge von Zeichenfolgen (eine _Sprache_ genannt) zu beschreiben. Ein regulärer Ausdruck benötigt im Wesentlichen die folgenden Merkmale:

- Eine Menge von _Zeichen_, die in der Sprache verwendet werden können, genannt das _Alphabet_.
- _Konkatenation_: `ab` bedeutet "das Zeichen `a` gefolgt von dem Zeichen `b`".
- _Vereinigung_: `a|b` bedeutet "entweder `a` oder `b`".
- _Kleene-Stern_: `a*` bedeutet "null oder mehr `a` Zeichen".

Angenommen, es gibt ein endliches Alphabet (wie die 26 Buchstaben des englischen Alphabets oder das gesamte Unicode-Zeichensatz), können alle regulären Sprachen durch die oben genannten Merkmale generiert werden. Natürlich sind viele Muster auf diese Weise sehr mühsam auszudrücken (wie "10 Ziffern" oder "ein Zeichen, das kein Leerzeichen ist"), daher umfassen JavaScript-Reguläre Ausdrücke viele Abkürzungen, die im Folgenden eingeführt werden.

> [!NOTE]
> JavaScript-Reguläre Ausdrücke sind eigentlich nicht regulär, aufgrund der Existenz von [Rückverweisen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) (reguläre Ausdrücke müssen endliche Zustände haben). Trotzdem sind sie ein sehr nützliches Merkmal.

### Erstellung von regulären Ausdrücken

Ein regulärer Ausdruck wird typischerweise als Literal erstellt, indem ein Muster in Schrägstriche (`/`) eingeschlossen wird:

```js
const regex1 = /ab+c/g;
```

Reguläre Ausdrücke können auch mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor erstellt werden:

```js
const regex2 = new RegExp("ab+c", "g");
```

Es gibt keine Laufzeitunterschiede, obwohl sie Auswirkungen auf die Leistung, Analysierbarkeit zur Laufzeit und ergonomische Probleme beim Erstellen mit Escape-Zeichen haben können. Weitere Informationen finden Sie in der [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor) Referenz.

### Regex-Flags

Flags sind spezielle Parameter, die die Art und Weise ändern können, wie ein regulärer Ausdruck interpretiert wird oder wie er mit dem Eingabetext interagiert. Jedes Flag entspricht einer Accessor-Eigenschaft des `RegExp`-Objekts.

| Flag | Beschreibung                                                                                      | Entsprechende Eigenschaft                       |
| ---- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für Teilstring-Übereinstimmungen.                                                 | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                    | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Groß-/Kleinschreibung ignorieren.                                                                 | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Lässt `^` und `$` den Anfang und das Ende jeder Zeile statt der ganzen Zeichenfolge abgleichen.   | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Erlaubt `.` das Abgleichen von Zeilenendzeichen.                                                  | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Folge von Unicode-Codepunkten.                           | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Eine Aufrüstung des `u`-Modus mit mehr Unicode-Funktionen.                                        | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Durchführung einer "Sticky"-Suche, die an der aktuellen Position in der Zielzeichenfolge beginnt. | {{jsxref("RegExp/sticky", "sticky")}}           |

Die Flags `i`, `m` und `s` können mithilfe der [Modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)-Syntax für spezifische Teile eines Regex aktiviert oder deaktiviert werden.

Die folgenden Abschnitte listen alle verfügbaren Regex-Syntaxen auf, gruppiert nach ihrer syntaktischen Natur.

### Assertions

Assertions sind Konstrukte, die testen, ob die Zeichenfolge an der angegebenen Position eine bestimmte Bedingung erfüllt, jedoch keine Zeichen aufnehmen. Assertions können nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden.

- [Buffer Boundary Assertion: `\A`, `\z`, `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion)
  - : Bestätigt, dass sich die aktuelle Position in der Zeichenfolge genau am Anfang oder Ende der gesamten Zeichenfolge befindet (`\Z` erlaubt auch ein nachgestelltes Zeilenumbruch), unabhängig von der Anwesenheit des `m`-Flags.
- [Input Boundary Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Bestätigt, dass die aktuelle Position der Anfang oder das Ende der Eingabe ist, oder der Anfang oder das Ende einer Zeile, wenn das `m`-Flag gesetzt ist.
- [Lookahead Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Bestätigt, dass die aktuelle Position von einem bestimmten Muster gefolgt oder nicht gefolgt wird.
- [Lookbehind Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Bestätigt, dass die aktuelle Position von einem bestimmten Muster vorangegangen oder nicht vorangegangen ist.
- [Word Boundary Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Bestätigt, dass die aktuelle Position eine Wortgrenze ist.

### Atome

Atome sind die grundlegendsten Einheiten eines regulären Ausdrucks. Jedes Atom _konsumiert_ ein oder mehrere Zeichen in der Zeichenfolge und führt entweder dazu, dass die Übereinstimmung fehlschlägt oder das Muster mit dem nächsten Atom fortgesetzt wird.

- [Backreference: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Stimmt mit einem zuvor übereingestimmten Teilmuster überein, das mit einer erfassenden Gruppe erfasst wurde.
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Stimmt mit einem Teilmuster überein und merkt sich Informationen über die Übereinstimmung.
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Stimmt mit einem Zeichen in einem Satz von Zeichen oder einem Zeichen, das nicht in einem Satz von Zeichen ist. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen endlicher Länge abzugleichen.
- [Zeichenklassenescape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Stimmt mit einem Zeichen in einem vordefinierten Satz von Zeichen oder einem Charakter, der nicht in diesem Satz von Zeichen ist, überein.
- [Zeichenescape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Stimmt mit einem Zeichen überein, das möglicherweise nicht in seiner literalen Form bequem dargestellt werden kann.
- [Literalzeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : Stimmt mit einem bestimmten Zeichen überein.
- [Modifizierer: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
  - : Überschreibt die Flag-Einstellungen in einem bestimmten Teil eines regulären Ausdrucks.
- [Namentlicher Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Stimmt mit einem zuvor übereingestimmten Teilmuster überein, das mit einer namentlich erfassten Gruppe erfasst wurde.
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Stimmt mit einem Teilmuster überein und merkt sich Informationen über die Übereinstimmung. Die Gruppe kann später durch einen benutzerdefinierten Namen statt durch ihren Index im Muster identifiziert werden.
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Stimmt mit einem Teilmuster überein, ohne Informationen über die Übereinstimmung zu merken.
- [Unicode-Zeichenklassenescape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Stimmt mit einem Satz von Zeichen überein, der durch eine Unicode-Eigenschaft angegeben wird. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen endlicher Länge abzugleichen.
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Stimmt mit jedem Zeichen außer Zeilenendzeichen überein, es sei denn, das `s`-Flag ist gesetzt.

### Andere Merkmale

Diese Merkmale spezifizieren kein Muster selbst, werden jedoch verwendet, um Muster zu komponieren.

- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Stimmt mit einem der Alternativen überein, die durch das `|`-Zeichen getrennt sind.
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Stimmt mit einem Atom eine bestimmte Anzahl von Malen überein.

### Escape-Sequenzen

_Escape-Sequenzen_ in Regexen beziehen sich auf jede Art von Syntax, die durch `\` gefolgt von einem oder mehreren Zeichen gebildet wird. Sie können sehr unterschiedliche Zwecke erfüllen, je nachdem, was `\` folgt. Nachfolgend finden Sie eine Liste aller gültigen "Escape-Sequenzen":

| Escape-Sequenz | Gefolgt von                                                              | Bedeutung                                                                                                                      |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `\A`           | Keine                                                                    | [Buffer Boundary Assertion][BBA]                                                                                               |
| `\B`           | Keine                                                                    | [Nicht-Wort-Grenzen-Assertion][WBA]                                                                                            |
| `\D`           | Keine                                                                    | [Zeichenklassenescape][CCE], das nicht-Ziffern-Zeichen repräsentiert                                                           |
| `\P`           | `{`, eine Unicode-Eigenschaft und/oder Wert, dann `}`                    | [Unicode-Zeichenklassenescape][UCCE], das Zeichen ohne die angegebene Unicode-Eigenschaft repräsentiert                        |
| `\S`           | Keine                                                                    | [Zeichenklassenescape][CCE], das nicht-Leerzeichen-Zeichen repräsentiert                                                       |
| `\W`           | Keine                                                                    | [Zeichenklassenescape][CCE], das nicht-Wort-Zeichen repräsentiert                                                              |
| `\Z`           | Keine                                                                    | [Buffer Boundary Assertion][BBA]                                                                                               |
| `\b`           | Keine                                                                    | [Wort-Grenzen-Assertion][WBA]; innerhalb [Zeichenklassen][CC] repräsentiert es U+0008 (RÜCKSCHRITT)                            |
| `\c`           | Ein Buchstabe von `A` bis `Z` oder `a` bis `z`                           | Ein [Zeichenescape][CE], das das Steuerzeichen mit einem Wert gleich dem Zeichenwert des Buchstabens modulo 32 repräsentiert   |
| `\d`           | Keine                                                                    | [Zeichenklassenescape][CCE], das Ziffern-Zeichen (`0` bis `9`) repräsentiert                                                   |
| `\f`           | Keine                                                                    | [Zeichenescape][CE], das U+000C (SEITENUMBRUCH) repräsentiert                                                                  |
| `\k`           | `<`, ein Bezeichner, dann `>`                                            | Ein [namentlicher Rückverweis][NBR]                                                                                            |
| `\n`           | Keine                                                                    | [Zeichenescape][CE], das U+000A (ZEILENVORSCHUB) repräsentiert                                                                 |
| `\p`           | `{`, eine Unicode-Eigenschaft und/oder Wert, dann `}`                    | [Unicode-Zeichenklassenescape][UCCE], das Zeichen mit der angegebenen Unicode-Eigenschaft repräsentiert                        |
| `\q`           | `{`, eine Zeichenfolge, dann `}`                                         | Nur gültig innerhalb von [`v`-Modus Zeichenklassen][VCC]; repräsentiert die Zeichenfolge, die wörtlich abgeglichen werden soll |
| `\r`           | Keine                                                                    | [Zeichenescape][CE], das U+000D (WAGENRÜCKLAUF) repräsentiert                                                                  |
| `\s`           | Keine                                                                    | [Zeichenklassenescape][CCE], das Leerzeichen-Zeichen repräsentiert                                                             |
| `\t`           | Keine                                                                    | [Zeichenescape][CE], das U+0009 (ZEICHENTABULATOR) repräsentiert                                                               |
| `\u`           | 4 hexadezimale Ziffern; oder `{`, 1 bis 6 hexadezimale Ziffern, dann `}` | [Zeichenescape][CE], das das Zeichen mit dem gegebenen Codepunkt repräsentiert                                                 |
| `\v`           | Keine                                                                    | [Zeichenescape][CE], das U+000B (ZEILENTABULATOR) repräsentiert                                                                |
| `\w`           | Keine                                                                    | [Zeichenklassenescape][CCE], das Wortzeichen (`A` bis `Z`, `a` bis `z`, `0` bis `9`, `_`) repräsentiert                        |
| `\x`           | 2 hexadezimale Ziffern                                                   | [Zeichenescape][CE], das das Zeichen mit dem gegebenen Wert repräsentiert                                                      |
| `\z`           | Keine                                                                    | [Buffer Boundary Assertion][BBA]                                                                                               |
| `\0`           | Keine                                                                    | [Zeichenescape][CE], das U+0000 (NUL) repräsentiert                                                                            |

[BBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion
[CC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class
[WBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

`\` gefolgt von `0` und einer weiteren Ziffer wird zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences), die im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verboten ist. `\` gefolgt von jeder anderen Ziffernfolge wird zu einem [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

Darüber hinaus kann `\` von einigen Nicht-Buchstaben- oder Zifferzeichen gefolgt werden, wobei die Escape-Sequenz immer ein [Zeichenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) ist, das das entkommene Zeichen selbst darstellt:

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\\{`, `\|`, `\\}`: überall gültig
- `\-`: nur innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) gültig
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`: nur innerhalb von [`v`-Modus Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) gültig

Die anderen {{Glossary("ASCII", "ASCII")}} Zeichen, nämlich Leerzeichen, `"`, `'`, `_`, und jeder nicht oben erwähnte Buchstabencharakter, sind keine gültigen Escape-Sequenzen. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identitäts-Escapes_: Sie repräsentieren das Zeichen, das dem Backslash folgt. Zum Beispiel repräsentiert `\a` das Zeichen `a`. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen einzuführen, ohne Rückwärtskompatibilitätsprobleme zu verursachen, und ist daher im Unicode-bewussten Modus verboten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
