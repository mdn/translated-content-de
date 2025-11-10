---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Ein **regulärer Ausdruck** (kurz _regex_) ermöglicht es Entwicklern, Zeichenfolgen anhand eines Musters zu überprüfen, Teilübereinstimmungen zu extrahieren oder einfach zu testen, ob die Zeichenfolge diesem Muster entspricht. Reguläre Ausdrücke werden in vielen Programmiersprachen verwendet, und die JavaScript-Syntax ist von [Perl](https://www.perl.org/) inspiriert.

Es wird Ihnen empfohlen, den [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu lesen, um einen Überblick über die verfügbaren Regex-Syntaxen und deren Funktionsweise zu erhalten.

## Beschreibung

[_Reguläre Ausdrücke_](https://en.wikipedia.org/wiki/Regular_expression) sind ein wichtiges Konzept in der formalen Sprachtheorie. Sie sind eine Möglichkeit, eine möglicherweise unendliche Menge von Zeichenfolgen (ein _Language_ genannt) zu beschreiben. Ein regulärer Ausdruck benötigt im Wesentlichen folgende Merkmale:

- Eine Menge von _Zeichen_, die in der Sprache verwendet werden können, genannt das _Alphabet_.
- _Konkatenation_: `ab` bedeutet "das Zeichen `a` gefolgt vom Zeichen `b`".
- _Union_: `a|b` bedeutet "entweder `a` oder `b`".
- _Kleene-Stern_: `a*` bedeutet "null oder mehr `a` Zeichen".

Angenommen, ein endliches Alphabet (wie die 26 Buchstaben des englischen Alphabets oder das gesamte Unicode-Zeichen-Set) ist vorhanden, können alle regulären Sprachen durch die oben genannten Merkmale erzeugt werden. Natürlich sind viele Muster sehr mühsam auf diese Weise auszudrücken (wie "10 Ziffern" oder "ein Zeichen, das kein Leerzeichen ist"), daher beinhalten JavaScript-Reguläre Ausdrücke viele Kurzformen, die unten eingeführt werden.

> [!NOTE]
> JavaScript-Reguläre Ausdrücke sind in der Tat nicht regulär, aufgrund der Existenz von [Rückverweisen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) (reguläre Ausdrücke müssen endliche Zustände haben). Sie sind jedoch immer noch eine sehr nützliche Funktion.

### Erstellen von regulären Ausdrücken

Ein regulärer Ausdruck wird typischerweise als Literal erstellt, indem ein Muster in Schrägstriche (`/`) eingeschlossen wird:

```js
const regex1 = /ab+c/g;
```

Reguläre Ausdrücke können auch mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor erstellt werden:

```js
const regex2 = new RegExp("ab+c", "g");
```

Sie haben keine Laufzeitunterschiede, obwohl sie Auswirkungen auf die Leistung, die statische Analysierbarkeit und ergonomische Probleme beim Autorieren mit Escape-Zeichen haben können. Weitere Informationen finden Sie im [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor) Referenz.

### Regex-Flags

Flags sind spezielle Parameter, die die Art und Weise ändern können, wie ein regulärer Ausdruck interpretiert wird oder wie er mit dem Eingabetext interagiert. Jedes Flag entspricht einer Zugriffseigenschaft des `RegExp`-Objekts.

| Flag | Beschreibung                                                                                 | Entsprechende Eigenschaft                       |
| ---- | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für Teilzeichenfolgenübereinstimmungen.                                      | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                               | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Groß-/Kleinschreibung ignorierende Suche.                                                    | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Lässt `^` und `$` den Anfang und das Ende jeder Zeile anstelle des gesamten Strings treffen. | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Ermöglicht es, dass `.` auch Zeilenumbruchszeichen umfasst.                                  | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als Folge von Unicode-Codes.                                 | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade zum `u`-Modus mit mehr Unicode-Funktionen.                                       | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine "sticky" Suche durch, die ab der aktuellen Position im Zielstring beginnt.        | {{jsxref("RegExp/sticky", "sticky")}}           |

Die `i`, `m` und `s` Flags können für spezifische Teile eines Regex mit der [Modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Syntax aktiviert oder deaktiviert werden.

Die folgenden Abschnitte listen alle verfügbaren Regex-Syntaxen, gruppiert nach ihrer syntaktischen Natur, auf.

### Assertions

Assertions sind Konstrukte, die testen, ob die Zeichenfolge eine bestimmte Bedingung an der angegebenen Position erfüllt, jedoch keine Zeichen konsumieren. Assertions können nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden.

- [Eingabebegrenzungs-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Stellt fest, dass die aktuelle Position der Anfang oder das Ende der Eingabe ist, oder der Anfang oder das Ende einer Zeile, wenn das `m`-Flag gesetzt ist.
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Stellt fest, dass die aktuelle Position von einem bestimmten Muster gefolgt oder nicht gefolgt wird.
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Stellt fest, dass die aktuelle Position von einem bestimmten Muster vorangegangen oder nicht vorangegangen wird.
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Stellt fest, dass die aktuelle Position eine Wortgrenze ist.

### Atome

Atome sind die grundlegendsten Einheiten eines regulären Ausdrucks. Jedes Atom _konsumiert_ ein oder mehr Zeichen in der Zeichenfolge und erlaubt es dem Muster entweder, nicht übereinzustimmen oder mit dem nächsten Atom weiter übereinzustimmen.

- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Entspricht einem zuvor übereinstimmenden Teilmuster, das mit einer Fanggruppe erfasst wurde.
- [Fanggruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Entspricht einem Teilmuster und speichert Informationen über die Übereinstimmung.
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Entspricht einem beliebigen Zeichen in oder nicht in einer Zeichengruppe. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen endlicher Länge zu treffen.
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Entspricht einem beliebigen Zeichen in oder nicht in einem vordefinierten Zeichensatz.
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Entspricht einem Zeichen, das möglicherweise nicht bequem in seiner literalen Form dargestellt werden kann.
- [Literal Character: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : Entspricht einem bestimmten Zeichen.
- [Modifier: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
  - : Überschreibt Flageinstellungen in einem bestimmten Teil eines regulären Ausdrucks.
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Entspricht einem zuvor übereinstimmenden Teilmuster, das mit einer benannten Fanggruppe erfasst wurde.
- [Benannte Fanggruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Entspricht einem Teilmuster und speichert Informationen über die Übereinstimmung. Die Gruppe kann später durch einen benutzerdefinierten Namen statt durch ihren Index im Muster identifiziert werden.
- [Nicht-fangende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Entspricht einem Teilmuster ohne Informationen über die Übereinstimmung zu speichern.
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Entspricht einem Zeichensatz, der durch eine Unicode-Eigenschaft angegeben wird. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen endlicher Länge zu treffen.
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Entspricht jedem Zeichen außer Zeilenabschlusszeichen, es sei denn, das `s`-Flag ist gesetzt.

### Andere Funktionen

Diese Funktionen spezifizieren keine Muster selbst, sondern werden verwendet, um Muster zu komponieren.

- [Disjunction: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Entspricht einem der durch das Zeichen `|` getrennten Alternativen.
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Entspricht einem Atom eine bestimmte Anzahl von Malen.

### Escape-Sequenzen

_Escape-Sequenzen_ in Regexen beziehen sich auf jede Art von Syntax, die durch `\` gefolgt von einem oder mehreren Zeichen gebildet wird. Sie können sehr unterschiedliche Zwecke dienen, abhängig davon, was auf `\` folgt. Unten ist eine Liste aller gültigen "Escape-Sequenzen":

| Escape-Sequenz | Gefolgt von                                                              | Bedeutung                                                                                                            |
| -------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `\B`           | Keiner                                                                   | [Nicht-Wortgrenzen-Assertion][WBA]                                                                                   |
| `\D`           | Keiner                                                                   | [Zeichenklassen-Escape][CCE], der nicht-Ziffern-Zeichen darstellt                                                    |
| `\P`           | `{`, eine Unicode-Eigenschaft und/oder Wert, dann `}`                    | [Unicode-Zeichenklassen-Escape][UCCE], der Zeichen ohne die angegebene Unicode-Eigenschaft darstellt                 |
| `\S`           | Keiner                                                                   | [Zeichenklassen-Escape][CCE], der nicht-Weiße-Zeichen darstellt                                                      |
| `\W`           | Keiner                                                                   | [Zeichenklassen-Escape][CCE], der nicht-Wort-Zeichen darstellt                                                       |
| `\b`           | Keiner                                                                   | [Wortgrenzen-Assertion][WBA]; innerhalb [Zeichenklassen][CC], stellt U+0008 (RÜCKSCHRITT) dar                        |
| `\c`           | Ein Buchstabe von `A` bis `Z` oder `a` bis `z`                           | Ein [Zeichen-Escape][CE], der das Steuerzeichen mit einem Wert gleich dem Buchstaben-Zeichenwert modulo 32 darstellt |
| `\d`           | Keiner                                                                   | [Zeichenklassen-Escape][CCE], der Ziffern-Zeichen (`0` bis `9`) darstellt                                            |
| `\f`           | Keiner                                                                   | [Zeichen-Escape][CE], der U+000C (FORMULAR-VORSCHUB) darstellt                                                       |
| `\k`           | `<`, ein Bezeichner, dann `>`                                            | Ein [benannter Rückverweis][NBR]                                                                                     |
| `\n`           | Keiner                                                                   | [Zeichen-Escape][CE], der U+000A (ZEILENUMBRUCH) darstellt                                                           |
| `\p`           | `{`, eine Unicode-Eigenschaft und/oder Wert, dann `}`                    | [Unicode-Zeichenklassen-Escape][UCCE], der Zeichen mit der angegebenen Unicode-Eigenschaft darstellt                 |
| `\q`           | `{`, eine Zeichenfolge, dann `}`                                         | Nur gültig innerhalb [v-Modus-Zeichenklassen][VCC]; stellt die Zeichenfolge dar, die wörtlich übereinstimmen soll    |
| `\r`           | Keiner                                                                   | [Zeichen-Escape][CE], der U+000D (WAGENRÜCKLAUF) darstellt                                                           |
| `\s`           | Keiner                                                                   | [Zeichenklassen-Escape][CCE], der Leerraum-Zeichen darstellt                                                         |
| `\t`           | Keiner                                                                   | [Zeichen-Escape][CE], der U+0009 (TABULATOR-ZEICHEN) darstellt                                                       |
| `\u`           | 4 hexadezimale Ziffern; oder `{`, 1 bis 6 hexadezimale Ziffern, dann `}` | [Zeichen-Escape][CE], der das Zeichen mit dem angegebenen Codepunkt darstellt                                        |
| `\v`           | Keiner                                                                   | [Zeichen-Escape][CE], der U+000B (ZEILEN-TABULATOR) darstellt                                                        |
| `\w`           | Keiner                                                                   | [Zeichenklassen-Escape][CCE], der Wort-Zeichen (`A` bis `Z`, `a` bis `z`, `0` bis `9`, `_`) darstellt                |
| `\x`           | 2 hexadezimale Ziffern                                                   | [Zeichen-Escape][CE], der das Zeichen mit dem angegebenen Wert darstellt                                             |
| `\0`           | Keiner                                                                   | [Zeichen-Escape][CE], der U+0000 (NULL) darstellt                                                                    |

[CC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class
[WBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

`\` gefolgt von `0` und einer anderen Ziffer wird zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences), die im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verboten ist. `\` gefolgt von einer anderen Ziffernfolge wird zu einem [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

Darüber hinaus kann `\` gefolgt von einigen Nicht-Buchstaben-oder-Ziffer-Zeichen sein, in welchem Fall die Escape-Sequenz immer eine [Zeichen-Escape][CE] darstellt, die das entkommene Zeichen selbst darstellt:

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\\{`, `\|`, `\\}`: überall gültig
- `\-`: nur innerhalb [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) gültig
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`: nur innerhalb [`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) gültig

Die anderen {{Glossary("ASCII", "ASCII")}} Zeichen, nämlich Leerzeichen, `"`, `'`, `_`, und alle Buchstabenzeichen, die oben nicht erwähnt wurden, sind keine gültigen Escape-Sequenzen. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identitäts-Escape-Sequenzen_: sie stellen das Zeichen dar, das dem Backslash folgt. Zum Beispiel repräsentiert `\a` das Zeichen `a`. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen einzuführen, ohne Rückwärtskompatibilitätsprobleme zu verursachen, und ist daher im Unicode-bewussten Modus verboten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
