---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: ed8ab20ada0827a6acc80e4870861dac5b9f87eb
---

{{jsSidebar}}

Ein **regulärer Ausdruck** (_regex_ für kurz) ermöglicht es Entwicklern, Zeichenfolgen mit einem Muster abzugleichen, Informationen über Teilübereinstimmungen zu extrahieren oder einfach zu testen, ob die Zeichenfolge diesem Muster entspricht. Reguläre Ausdrücke werden in vielen Programmiersprachen verwendet, und die JavaScript-Syntax orientiert sich an [Perl](https://www.perl.org/).

Es wird empfohlen, den [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu lesen, um einen Überblick über die verfügbaren Regex-Syntaxen und deren Funktionsweise zu erhalten.

## Beschreibung

[_Reguläre Ausdrücke_](https://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck) sind ein wichtiges Konzept in der Theorie der formalen Sprachen. Sie sind eine Möglichkeit, eine möglicherweise unendliche Menge von Zeichenfolgen (eine Sprache genannt) zu beschreiben. Ein regulärer Ausdruck benötigt im Wesentlichen die folgenden Merkmale:

- Eine Menge von _Zeichen_, die in der Sprache verwendet werden können, genannt _Alphabet_.
- _Konkatenation_: `ab` bedeutet "das Zeichen `a` gefolgt von dem Zeichen `b`".
- _Vereinigung_: `a|b` bedeutet "entweder `a` oder `b`".
- _Kleenescher Stern_: `a*` bedeutet "null oder mehr `a`-Zeichen".

Bei Annahme eines endlichen Alphabets (wie die 26 Buchstaben des englischen Alphabets oder der gesamte Unicode-Zeichensatz) können alle regulären Sprachen durch die oben genannten Merkmale erzeugt werden. Natürlich sind viele Muster auf diese Weise sehr mühsam auszudrücken (wie "10 Ziffern" oder "ein Zeichen, das kein Leerzeichen ist"), daher beinhalten JavaScript-Regulärausdrücke viele Abkürzungen, die unten eingeführt werden.

> [!NOTE]
> JavaScript-Reguläre Ausdrücke sind tatsächlich nicht regulär, aufgrund des Vorhandenseins von [Rückverweisen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) (reguläre Ausdrücke müssen endliche Zustände haben). Sie sind jedoch immer noch eine sehr nützliche Funktion.

### Erstellen von regulären Ausdrücken

Ein regulärer Ausdruck wird typischerweise als Literal erstellt, indem ein Muster in Schrägstriche (`/`) eingeschlossen wird:

```js
const regex1 = /ab+c/g;
```

Reguläre Ausdrücke können auch mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor erstellt werden:

```js
const regex2 = new RegExp("ab+c", "g");
```

Sie haben keine Laufzeitunterschiede, obwohl sie Auswirkungen auf die Leistung, die statische Analysierbarkeit und Probleme mit der Erstellungs-Ergonomie bei der Zeichenmaskierung haben können. Weitere Informationen finden Sie im [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor)-Referenz.

### Regex-Flags

Flags sind spezielle Parameter, die die Art und Weise ändern können, wie ein regulärer Ausdruck interpretiert wird oder wie er mit dem Eingabetext interagiert. Jedes Flag entspricht einer Zugriffs-Eigenschaft des `RegExp`-Objekts.

| Flag | Beschreibung                                                                                    | Entsprechende Eigenschaft                       |
| ---- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für Teilübereinstimmungen.                                                      | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                  | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Groß-/Kleinschreibung ignorierende Suche.                                                       | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Lässt `^` und `$` den Beginn und das Ende jeder Zeile anstelle des gesamten Strings abgleichen. | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Erlaubt, dass `.` auch Zeilenumbruchzeichen erfasst.                                            | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Sequenz von Unicode-Codepunkten.                       | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade zum `u`-Modus mit mehr Unicode-Funktionen.                                          | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führen Sie eine "haftende" Suche durch, die am aktuellen Ort im Zielstring beginnt.             | {{jsxref("RegExp/sticky", "sticky")}}           |

Die Flags `i`, `m` und `s` können für bestimmte Teile eines Regex unter Verwendung der [Modifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)-Syntax aktiviert oder deaktiviert werden.

Die Abschnitte unten listen alle verfügbaren Regex-Syntaxen auf, gruppiert nach ihrer syntaktischen Natur.

### Assertions

Assertions sind Konstrukte, die testen, ob die Zeichenfolge an der angegebenen Position einer bestimmten Bedingung entspricht, ohne Zeichen zu konsumieren. Assertions können nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden.

- [Eingabezussicherungen: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Bestätigt, dass die aktuelle Position der Beginn oder das Ende der Eingabe ist, oder der Beginn oder das Ende einer Zeile, wenn das `m`-Flag gesetzt ist.
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Bestätigt, dass die aktuelle Position von einem bestimmten Muster gefolgt oder nicht gefolgt wird.
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Bestätigt, dass die aktuelle Position von einem bestimmten Muster vorangegangen oder nicht vorangegangen wird.
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Bestätigt, dass die aktuelle Position eine Wortgrenze ist.

### Atome

Atome sind die grundlegendsten Einheiten eines regulären Ausdrucks. Jedes Atom _konsumiert_ ein oder mehrere Zeichen in der Zeichenfolge und schlägt entweder beim Abgleich fehl oder ermöglicht es dem Muster, mit dem nächsten Atom weiter abzugleichen.

- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Entspricht einem zuvor abgeglichenen Teilmuster, das mit einer erfassenden Gruppe erfasst wurde.
- [Gruppe erfassen: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Entspricht einem Teilmuster und merkt sich Informationen über den Abgleich.
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Entspricht jedem Zeichen in oder nicht in einer Zeichenmenge. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag aktiviert ist, kann es auch verwendet werden, um Zeichenketten mit endlicher Länge zu erfassen.
- [Zeichenklassenescape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Entspricht jedem Zeichen in oder nicht in einer vordefinierten Zeichenmenge.
- [Zeichenescape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Entspricht einem Zeichen, das möglicherweise nicht bequem in seiner literalen Form dargestellt werden kann.
- [Literalzeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : Entspricht einem bestimmten Zeichen.
- [Modifizierer: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
  - : Überschreibt Flag-Einstellungen in einem bestimmten Teil eines regulären Ausdrucks.
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Entspricht einem zuvor abgeglichenen Teilmuster, das mit einer benannten erfassenden Gruppe erfasst wurde.
- [Benannte Erfassen-Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Entspricht einem Teilmuster und merkt sich Informationen über den Abgleich. Die Gruppe kann später durch einen benutzerdefinierten Namen anstelle durch ihren Index im Muster identifiziert werden.
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Entspricht einem Teilmuster ohne das Merken von Informationen über den Abgleich.
- [Unicode-Zeichenklassenescape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Entspricht einer Menge von Zeichen, die durch eine Unicode-Eigenschaft angegeben sind. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag aktiviert ist, kann es auch verwendet werden, um Zeichenketten mit endlicher Länge zu erfassen.
- [Jokerzeichen: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Entspricht jedem Zeichen außer Zeilenendzeichen, es sei denn, das `s`-Flag ist gesetzt.

### Andere Merkmale

Diese Merkmale geben selbst kein Muster an, sondern dienen zur Zusammensetzung von Mustern.

- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Entspricht einem der Alternativen, die durch das `|`-Zeichen getrennt sind.
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Entspricht einem Atom eine bestimmte Anzahl von Malen.

### Escape-Sequenzen

_Escape-Sequenzen_ in Regexen beziehen sich auf jede Art von Syntax, die durch `\` gefolgt von einem oder mehreren Zeichen gebildet wird. Sie können je nachdem, was auf `\` folgt, sehr unterschiedliche Zwecke erfüllen. Unten ist eine Liste aller gültigen "Escape-Sequenzen":

| Escape-Sequenz | Gefolgt von                                                              | Bedeutung                                                                                                                          |
| -------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `\B`           | Keines                                                                   | [Nicht-Wort-Grenzen-Assertion][WBA]                                                                                                |
| `\D`           | Keines                                                                   | [Zeichenklassenescape][CCE], das nicht-Ziffernzeichen darstellt                                                                    |
| `\P`           | `{`, eine Unicode-Eigenschaft und/oder Wert, dann `}`                    | [Unicode-Zeichenklassenescape][UCCE], das Zeichen ohne die angegebene Unicode-Eigenschaft darstellt                                |
| `\S`           | Keines                                                                   | [Zeichenklassenescape][CCE], das nicht-Whitespace-Zeichen darstellt                                                                |
| `\W`           | Keines                                                                   | [Zeichenklassenescape][CCE], das nicht-Wort-Zeichen darstellt                                                                      |
| `\b`           | Keines                                                                   | [Wort-Grenzen-Assertion][WBA]; innerhalb [Zeichenklassen][CC] stellt U+0008 (BACKSPACE) dar                                        |
| `\c`           | Ein Buchstabe von `A` bis `Z` oder `a` bis `z`                           | Ein [Zeichenescape][CE], das das Steuerzeichen mit einem Wert gleich dem Buchstabenwert modulo 32 darstellt                        |
| `\d`           | Keines                                                                   | [Zeichenklassenescape][CCE], das Ziffernzeichen (`0` bis `9`) darstellt                                                            |
| `\f`           | Keines                                                                   | [Zeichenescape][CE], das U+000C (FORM FEED) darstellt                                                                              |
| `\k`           | `<`, eine Kennung, dann `>`                                              | Ein [benannter Rückverweis][NBR]                                                                                                   |
| `\n`           | Keines                                                                   | [Zeichenescape][CE], das U+000A (LINE FEED) darstellt                                                                              |
| `\p`           | `{`, eine Unicode-Eigenschaft und/oder Wert, dann `}`                    | [Unicode-Zeichenklassenescape][UCCE], das Zeichen mit der angegebenen Unicode-Eigenschaft darstellt                                |
| `\q`           | `{`, eine Zeichenfolge, dann `}`                                         | Nur gültig innerhalb von [`v`-Modus-Zeichenklassen][VCC]; repräsentiert die Zeichenfolge, die buchstäblich abgeglichen werden soll |
| `\r`           | Keines                                                                   | [Zeichenescape][CE], das U+000D (CARRIAGE RETURN) darstellt                                                                        |
| `\s`           | Keines                                                                   | [Zeichenklassenescape][CCE], das Leerraumzeichen darstellt                                                                         |
| `\t`           | Keines                                                                   | [Zeichenescape][CE], das U+0009 (CHARACTER TABULATION) darstellt                                                                   |
| `\u`           | 4 hexadezimale Ziffern; oder `{`, 1 bis 6 hexadezimale Ziffern, dann `}` | [Zeichenescape][CE], das das Zeichen mit dem gegebenen Codepunkt darstellt                                                         |
| `\v`           | Keines                                                                   | [Zeichenescape][CE], das U+000B (LINE TABULATION) darstellt                                                                        |
| `\w`           | Keines                                                                   | [Zeichenklassenescape][CCE], das Wortzeichen (`A` bis `Z`, `a` bis `z`, `0` bis `9`, `_`) darstellt                                |
| `\x`           | 2 hexadezimale Ziffern                                                   | [Zeichenescape][CE], das das Zeichen mit dem gegebenen Wert darstellt                                                              |
| `\0`           | Keines                                                                   | [Zeichenescape][CE], das U+0000 (NULL) darstellt                                                                                   |

[CC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class
[WBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

`\` gefolgt von `0` und einer weiteren Ziffer wird zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences), die im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verboten ist. `\` gefolgt von einer anderen Ziffernfolge wird zu einem [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

Zusätzlich kann `\` einigen nicht-buchstaben-oder-ziffer-Zeichen folgen, in welchem Fall die Escape-Sequenz immer ein [Zeichenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) ist, das das entkommene Zeichen selbst darstellt:

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\\{`, `\|`, `\\}`: überall gültig
- `\-`: nur innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) gültig
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`: nur innerhalb von [`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) gültig

Die anderen {{Glossary("ASCII", "ASCII")}}-Zeichen, nämlich Leerzeichen, `"`, `'`, `_`, und jede Zeichencharakter, die oben nicht erwähnt ist, sind keine gültigen Escape-Sequenzen. Im [Unicode-unbewusster Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den obigen gehören, zu _Identitäts-Escapes_: Sie repräsentieren das Zeichen, das dem Backslash folgt. Zum Beispiel repräsentiert `\a` das Zeichen `a`. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen ohne Rückwärtskompatibilitätsprobleme einzuführen, und ist daher im Unicode-bewussten Modus verboten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
