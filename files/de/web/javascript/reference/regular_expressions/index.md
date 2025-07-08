---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Ein **regulärer Ausdruck** (_regex_ abgekürzt) ermöglicht Entwicklern, Zeichenfolgen mit einem Muster abzugleichen, Teilinformationen zu extrahieren oder einfach zu testen, ob die Zeichenfolge dem Muster entspricht. Reguläre Ausdrücke werden in vielen Programmiersprachen verwendet, und die Syntax von JavaScript ist inspiriert von [Perl](https://www.perl.org/).

Es wird empfohlen, den [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu lesen, um einen Überblick über die verfügbaren Regex-Syntaxen und deren Funktionsweise zu erhalten.

## Beschreibung

[_Reguläre Ausdrücke_](https://de.wikipedia.org/wiki/Regulärer_Ausdruck) sind ein wichtiges Konzept in der formalen Sprachtheorie. Sie sind eine Möglichkeit, eine möglicherweise unendliche Menge von Zeichenfolgen (genannt eine _Sprache_) zu beschreiben. Ein regulärer Ausdruck benötigt in seinem Kern die folgenden Funktionen:

- Eine Menge von _Zeichen_, die in der Sprache verwendet werden können, das sogenannte _Alphabet_.
- _Konkatenation_: `ab` bedeutet "das Zeichen `a` gefolgt von dem Zeichen `b`".
- _Vereinigung_: `a|b` bedeutet "entweder `a` oder `b`".
- _Kleene-Stern_: `a*` bedeutet "null oder mehr `a` Zeichen".

Unter der Annahme eines endlichen Alphabets (wie die 26 Buchstaben des englischen Alphabets oder das gesamte Unicode-Zeichenset) können alle regulären Sprachen durch die oben genannten Funktionen generiert werden. Natürlich sind viele Muster auf diese Weise sehr mühsam auszudrücken (wie "10 Ziffern" oder "ein Zeichen, das kein Leerzeichen ist"), daher beinhalten JavaScript-reguläre Ausdrücke viele Abkürzungen, die unten eingeführt werden.

> [!NOTE]
> JavaScript-reguläre Ausdrücke sind tatsächlich nicht regulär, aufgrund der Existenz von [Rückverweisen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) (reguläre Ausdrücke müssen endliche Zustände haben). Sie sind jedoch immer noch eine sehr nützliche Funktion.

### Erstellen von regulären Ausdrücken

Ein regulärer Ausdruck wird typischerweise als Literal erstellt, indem ein Muster in Schrägstriche (`/`) eingeschlossen wird:

```js
const regex1 = /ab+c/g;
```

Reguläre Ausdrücke können auch mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor erstellt werden:

```js
const regex2 = new RegExp("ab+c", "g");
```

Sie haben zur Laufzeit keine Unterschiede, obwohl sie Auswirkungen auf die Leistung, statische Analysierbarkeit und Autorenergonomie bei der Escape-Zeichenverwendung haben können. Für weitere Informationen siehe die [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor)-Referenz.

### Regex-Flags

Flags sind spezielle Parameter, die die Art und Weise ändern können, wie ein regulärer Ausdruck interpretiert oder wie er mit dem Eingabetext interagiert. Jedes Flag entspricht einer Zugriffseigenschaft auf dem `RegExp`-Objekt.

| Flag | Beschreibung                                                                                 | Entsprechende Eigenschaft                       |
| ---- | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für Teilzeichenfolgenübereinstimmungen.                                      | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                               | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Groß-/Kleinschreibung ignorieren.                                                            | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Lässt `^` und `$` den Anfang und das Ende jeder Zeile statt des gesamten Strings abgleichen. | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Erlaubt `.` zum Abgleich von Zeilenumbruchzeichen.                                           | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Sequenz von Unicode-Codepunkten.                    | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade zum `u`-Modus mit mehr Unicode-Funktionen.                                       | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine "sticky" Suche durch, die beim aktuellen Index der Zielzeichenkette startet.      | {{jsxref("RegExp/sticky", "sticky")}}           |

Die `i`, `m` und `s` Flags können für bestimmte Teile eines Regex mithilfe der [Modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)-Syntax aktiviert oder deaktiviert werden.

Die folgenden Abschnitte listen alle verfügbaren Regex-Syntaxen auf, gruppiert nach ihrer syntaktischen Natur.

### Assertionen

Assertionen sind Konstrukte, die testen, ob die Zeichenfolge an der angegebenen Position eine bestimmte Bedingung erfüllt, jedoch keine Zeichen konsumieren. Assertionen können nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden.

- [Eingangsgrenzen-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Behauptet, dass die aktuelle Position der Anfang oder das Ende der Eingabe ist, oder der Anfang oder das Ende einer Zeile, wenn das `m`-Flag gesetzt ist.
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Behauptet, dass die aktuelle Position von einem bestimmten Muster gefolgt oder nicht gefolgt wird.
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Behauptet, dass die aktuelle Position von einem bestimmten Muster vorangegangen oder nicht vorangegangen wird.
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Behauptet, dass die aktuelle Position eine Wortgrenze ist.

### Atome

Atome sind die grundlegendsten Einheiten eines regulären Ausdrucks. Jedes Atom _konsumiert_ ein oder mehrere Zeichen in der Zeichenfolge und scheitert entweder an der Übereinstimmung oder erlaubt dem Muster, mit dem nächsten Atom weiter zu übereinstimmen.

- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Passt auf ein zuvor durch eine Gruppe erfasstes Untermuster.
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Passt auf ein Untermuster und merkt sich Informationen über die Übereinstimmung.
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Passt auf jedes Zeichen innerhalb oder außerhalb einer Zeichengruppe. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch auf Zeichenfolgen mit endlicher Länge angewendet werden.
- [Zeichenklassen-Flucht: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Passt auf jedes Zeichen innerhalb oder außerhalb einer vordefinierten Zeichengruppe.
- [Zeichen-Flucht: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Passt auf ein Zeichen, das möglicherweise nicht bequem in seiner literalen Form dargestellt werden kann.
- [Wörtliches Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : Passt auf ein bestimmtes Zeichen.
- [Modifier: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
  - : Übersteuert die Flageinstellungen in einem bestimmten Teil eines regulären Ausdrucks.
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Passt auf ein zuvor durch eine benannte Gruppe erfasstes Untermuster.
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Passt auf ein Untermuster und merkt sich Informationen über die Übereinstimmung. Die Gruppe kann später durch einen benutzerdefinierten Namen anstelle ihres Indexes im Muster identifiziert werden.
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Passt auf ein Untermuster, ohne Informationen über die Übereinstimmung zu merken.
- [Unicode-Zeichenklassen-Flucht: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Passt auf eine Gruppe von Zeichen, die durch eine Unicode-Eigenschaft angegeben sind. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch auf Zeichenfolgen mit endlicher Länge angewendet werden.
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Passt auf jedes Zeichen außer Zeilenbegrenzern, es sei denn, das `s`-Flag ist gesetzt.

### Andere Funktionen

Diese Funktionen legen selbst keine Muster fest, werden jedoch verwendet, um Muster zu komponieren.

- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Passt auf eines von mehreren durch das `|`-Zeichen getrennten Alternativen.
- [Quantor: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Passt ein Atom eine bestimmte Anzahl von Malen.

### Escape-Sequenzen

_Escape-Sequenzen_ in Regexen beziehen sich auf jede Art von Syntax, die durch `\` gefolgt von einem oder mehreren Zeichen gebildet wird. Sie können je nach Folgezustand von `\` sehr unterschiedliche Zwecke erfüllen. Im Folgenden finden Sie eine Liste aller gültigen "Escape-Sequenzen":

| Escape-Sequenz | Gefolgt von                                                              | Bedeutung                                                                                                                      |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `\B`           | Keine                                                                    | [Nicht-Wort-Grenze-Assertion][WBA]                                                                                             |
| `\D`           | Keine                                                                    | [Zeichenklassen-Flucht][CCE], die Nicht-Ziffern-Zeichen repräsentiert                                                          |
| `\P`           | `{`, eine Unicode-Eigenschaft und/oder Wert, dann `}`                    | [Unicode-Zeichenklassen-Flucht][UCCE], die Zeichen ohne die angegebene Unicode-Eigenschaft repräsentiert                       |
| `\S`           | Keine                                                                    | [Zeichenklassen-Flucht][CCE], die Nicht-Leerzeichen-Zeichen repräsentiert                                                      |
| `\W`           | Keine                                                                    | [Zeichenklassen-Flucht][CCE], die Nicht-Wort-Zeichen repräsentiert                                                             |
| `\b`           | Keine                                                                    | [Wort-Grenze-Assertion][WBA]; innerhalb [Zeichenklassen][CC] repräsentiert U+0008 (RÜCKSCHRITT)                                |
| `\c`           | Ein Buchstabe von `A` bis `Z` oder `a` bis `z`                           | Eine [Zeichen-Flucht][CE], die das Steuerzeichen mit einem Wert gleich dem Zeichenwert des Buchstabens modulo 32 repräsentiert |
| `\d`           | Keine                                                                    | [Zeichenklassen-Flucht][CCE], die Ziffernzeichen (`0` bis `9`) repräsentiert                                                   |
| `\f`           | Keine                                                                    | [Zeichen-Flucht][CE], die U+000C (FORMULAR-VORSCHUB) repräsentiert                                                             |
| `\k`           | `<`, ein Bezeichner, dann `>`                                            | Ein [benannter Rückverweis][NBR]                                                                                               |
| `\n`           | Keine                                                                    | [Zeichen-Flucht][CE], die U+000A (LINE FEED) repräsentiert                                                                     |
| `\p`           | `{`, eine Unicode-Eigenschaft und/oder Wert, dann `}`                    | [Unicode-Zeichenklassen-Flucht][UCCE], die Zeichen mit der angegebenen Unicode-Eigenschaft repräsentiert                       |
| `\q`           | `{`, eine Zeichenfolge, dann ein `}`                                     | Nur gültig innerhalb [`v`-Modus-Zeichenklassen][VCC]; repräsentiert die Zeichenfolge, die wörtlich übereinstimmt               |
| `\r`           | Keine                                                                    | [Zeichen-Flucht][CE], die U+000D (CARRIAGE RETURN) repräsentiert                                                               |
| `\s`           | Keine                                                                    | [Zeichenklassen-Flucht][CCE], die Whitespace-Zeichen repräsentiert                                                             |
| `\t`           | Keine                                                                    | [Zeichen-Flucht][CE], die U+0009 (CHARACTERTABULATUR) repräsentiert                                                            |
| `\u`           | 4 hexadezimale Ziffern; oder `{`, 1 bis 6 hexadezimale Ziffern, dann `}` | [Zeichen-Flucht][CE], die das Zeichen mit dem angegebenen Codepunkt repräsentiert                                              |
| `\v`           | Keine                                                                    | [Zeichen-Flucht][CE], die U+000B (LINIEN-TABULATUR) repräsentiert                                                              |
| `\w`           | Keine                                                                    | [Zeichenklassen-Flucht][CCE], die Wort-Zeichen (`A` bis `Z`, `a` bis `z`, `0` bis `9`, `_`) repräsentiert                      |
| `\x`           | 2 hexadezimale Ziffern                                                   | [Zeichen-Flucht][CE], die das Zeichen mit dem angegebenen Wert repräsentiert                                                   |
| `\0`           | Keine                                                                    | [Zeichen-Flucht][CE], die U+0000 (NUL) repräsentiert                                                                           |

[CC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class
[WBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

`\` gefolgt von `0` und einer anderen Ziffer wird zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences), die in [Unicode-bewusstem Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verboten ist. `\` gefolgt von einer beliebigen anderen Ziffernsequenz wird zu einem [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

Darüber hinaus kann `\` von einigen nicht-Buchstaben-oder-Ziffern-Zeichen gefolgt werden, in diesem Fall ist die Escape-Sequenz immer eine [Zeichen-Flucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), die das entkommene Zeichen selbst darstellt:

<!-- Hinweis: die {} müssen doppelt maskiert werden, einmal für Yari -->

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\\{`, `\|`, `\\}`: überall gültig
- `\-`: nur innerhalb [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) gültig
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`: nur innerhalb [`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) gültig

Die anderen {{Glossary("ASCII", "ASCII")}} Zeichen, nämlich Leerzeichen, `"`, `'`, `_` und jeder Buchstabe, der oben nicht erwähnt wurde, sind keine gültigen Escape-Sequenzen. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht eine der obigen sind, zu _Identitäts-Escapes_: sie repräsentieren das Zeichen, das dem Backslash folgt. Zum Beispiel repräsentiert `\a` das Zeichen `a`. Dieses Verhalten beschränkt die Fähigkeit, neue Escape-Sequenzen einzuführen, ohne Kompatibilitätsprobleme rückwärts zu verursachen, und ist daher im Unicode-bewussten Modus verboten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
