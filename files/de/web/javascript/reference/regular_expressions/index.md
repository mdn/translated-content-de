---
title: Regular expressions
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{jsSidebar}}

Ein **regulärer Ausdruck** (_regex_ abgekürzt) ermöglicht es Entwicklern, Zeichenfolgen mit einem Muster abzugleichen, Informationen zu Teilübereinstimmungen zu extrahieren oder einfach zu testen, ob die Zeichenfolge diesem Muster entspricht. Reguläre Ausdrücke werden in vielen Programmiersprachen verwendet, und die JavaScript-Syntax ist inspiriert von [Perl](https://www.perl.org/).

Es wird empfohlen, den [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu lesen, um einen Überblick über die verfügbaren Regex-Syntaxen und deren Funktionsweise zu erhalten.

## Beschreibung

[_Reguläre Ausdrücke_](https://en.wikipedia.org/wiki/Regular_expression) sind ein wichtiges Konzept in der formalen Sprachtheorie. Sie sind eine Möglichkeit, eine möglicherweise unendliche Menge von Zeichenfolgen zu beschreiben (eine _Sprache_ genannt). Ein regulärer Ausdruck benötigt im Wesentlichen die folgenden Funktionen:

- Ein Satz von _Zeichen_, die in der Sprache verwendet werden können, das sogenannte _Alphabet_.
- _Konkatenation_: `ab` bedeutet "das Zeichen `a` gefolgt vom Zeichen `b`".
- _Vereinigung_: `a|b` bedeutet "entweder `a` oder `b`".
- _Kleene-Stern_: `a*` bedeutet "null oder mehr `a`-Zeichen".

Unter der Annahme eines endlichen Alphabets (wie die 26 Buchstaben des englischen Alphabets oder das gesamte Unicode-Zeichensatz) können alle regulären Sprachen durch die obigen Funktionen generiert werden. Natürlich sind viele Muster auf diese Weise sehr mühsam auszudrücken (wie "10 Ziffern" oder "ein Zeichen, das kein Leerzeichen ist"), daher enthalten JavaScript-reguläre Ausdrücke viele Kurzschreibweisen, die unten eingeführt werden.

> [!NOTE]
> JavaScript-Reguläre Ausdrücke sind tatsächlich nicht regulär, aufgrund der Existenz von [Rückverweisen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) (reguläre Ausdrücke müssen endliche Zustände haben). Dennoch sind sie eine sehr nützliche Funktion.

### Erstellen von regulären Ausdrücken

Ein regulärer Ausdruck wird typischerweise als Literal erstellt, indem ein Muster in Schrägstriche (`/`) eingeschlossen wird:

```js
const regex1 = /ab+c/g;
```

Reguläre Ausdrücke können auch mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor erstellt werden:

```js
const regex2 = new RegExp("ab+c", "g");
```

Sie haben keine Laufzeitunterschiede, können jedoch Auswirkungen auf die Leistung, die statische Analysierbarkeit und ergonomische Probleme beim Verfassen mit escape-Zeichen haben. Weitere Informationen finden Sie im [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor) Referenz.

### Regex-Flags

Flags sind spezielle Parameter, die ändern können, wie ein regulärer Ausdruck interpretiert wird oder wie er mit dem Eingabetext interagiert. Jedes Flag entspricht einer Zugriffseigenschaft auf dem `RegExp`-Objekt.

| Flag | Beschreibung                                                                                     | Entsprechende Eigenschaft                        |
| ---- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für Teilmusterübereinstimmungen.                                                | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                  | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Groß-/Kleinschreibung ignorierende Suche.                                                       | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Ermöglicht `^` und `$`, neben Zeilenumbruchzeichen zu übereinstimmen.                           | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Ermöglicht `.` neben Zeilenumbruchzeichen zu übereinstimmen.                                    | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Sequenz von Unicode-Codierungspunkten.                 | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade zum `u`-Modus mit mehr Unicode-Funktionen.                                          | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führen Sie eine "sticky" Suche durch, die ab der aktuellen Position in der Zielzeichenfolge beginnt. | {{jsxref("RegExp/sticky", "sticky")}}           |

Die `i`, `m` und `s` Flags können mit der [Modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Syntax für spezifische Teile eines Regex aktiviert oder deaktiviert werden.

Die folgenden Abschnitte listen alle verfügbaren Regex-Syntaxen auf, gruppiert nach ihrer syntaktischen Natur.

### Assertions

Assertions sind Konstrukte, die testen, ob die Zeichenfolge an der angegebenen Position eine bestimmte Bedingung erfüllt, aber keine Zeichen verbrauchen. Assertions können nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden.

- [Eingabebegrenzungs-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Bestätigt, dass die aktuelle Position der Beginn oder das Ende der Eingabe ist, oder der Anfang oder das Ende einer Zeile, wenn das `m`-Flag gesetzt ist.
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Bestätigt, dass die aktuelle Position von einem bestimmten Muster gefolgt oder nicht gefolgt wird.
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Bestätigt, dass die aktuelle Position von einem bestimmten Muster vorangegangen oder nicht vorangegangen wird.
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Bestätigt, dass die aktuelle Position eine Wortgrenze ist.

### Atome

Atome sind die grundlegendsten Einheiten eines regulären Ausdrucks. Jedes Atom _verbraucht_ ein oder mehrere Zeichen in der Zeichenfolge und scheitert entweder beim Übereinstimmen oder erlaubt dem Muster, mit dem nächsten Atom weiter zu übereinstimmen.

- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Stimmt mit einem zuvor übereinstimmten Untermuster überein, das mit einer Erfassen-Gruppe erfasst wurde.
- [Erfassen-Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Stimmt mit einem Untermuster überein und merkt sich Informationen über die Übereinstimmung.
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Stimmt mit einem Zeichen innerhalb oder außerhalb eines Zeichensatzes überein. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag gesetzt ist, kann es auch verwendet werden, um eine endliche Zeichenkette zu matchen.
- [Zeichenklassen-Flucht: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Stimmt mit einem Zeichen aus einem vordefinierten Zeichensatz überein oder nicht.
- [Zeichen-Flucht: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Stimmt mit einem Zeichen überein, das nicht bequem in seiner direkten Form dargestellt werden kann.
- [Literales Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : Stimmt mit einem bestimmten Zeichen überein.
- [Modifier: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
  - : Überschreibt die Flageinstellungen in einem bestimmten Teil eines regulären Ausdrucks.
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Stimmt mit einem zuvor übereinstimmten Untermuster überein, das mit einer benannten Erfassen-Gruppe erfasst wurde.
- [Benannte Erfassen-Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Stimmt mit einem Untermuster überein und merkt sich Informationen über die Übereinstimmung. Die Gruppe kann später durch einen benutzerdefinierten Namen statt durch ihren Index im Muster identifiziert werden.
- [Nicht-Erfassen-Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Stimmt mit einem Untermuster überein, ohne Informationen über die Übereinstimmung zu speichern.
- [Unicode-Zeichenklassen-Flucht: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Stimmt mit einem durch eine Unicode-Eigenschaft spezifizierten Zeichensatz überein. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag gesetzt ist, kann es auch verwendet werden, um eine endliche Zeichenkette zu matchen.
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Stimmt mit jedem Zeichen außer Zeilenbegrenzer überein, es sei denn, das `s`-Flag ist gesetzt.

### Andere Funktionen

Diese Funktionen spezifizieren selbst kein Muster, werden jedoch verwendet, um Muster zusammenzusetzen.

- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Stimmt mit einer von mehreren Alternativen überein, die durch das Zeichen `|` getrennt sind.
- [Quantifizierung: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Stimmt mit einem Atom eine bestimmte Anzahl von Malen überein.

### Escape-Sequenzen

_Escape-Sequenzen_ in Regexes beziehen sich auf jede Art von Syntax, die durch `\` gefolgt von einem oder mehreren Zeichen gebildet wird. Sie können je nach dem, was `\` folgt, sehr unterschiedliche Zwecke erfüllen. Unten ist eine Liste aller gültigen "Escape-Sequenzen":

| Escape-Sequenz | Gefolgt von                                                         | Bedeutung                                                                                                              |
| -------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `\B`           | None                                                                | [Nicht-Wort-Grenze Assertion][WBA]                                                                                     |
| `\D`           | None                                                                | [Zeichenklassen-Flucht][CCE], die nicht-Zifferzeichen darstellt                                                        |
| `\P`           | `{`, eine Unicode-Eigenschaft und/oder den Wert, dann `}`           | [Unicode-Zeichenklassen-Flucht][UCCE], die Zeichen ohne die angegebene Unicode-Eigenschaft darstellt                   |
| `\S`           | None                                                                | [Zeichenklassen-Flucht][CCE], die nicht-Leerzeichen darstellt                                                          |
| `\W`           | None                                                                | [Zeichenklassen-Flucht][CCE], die nicht-Wortzeichen darstellt                                                          |
| `\b`           | None                                                                | [Wortgrenzen-Assertion][WBA]; innerhalb von [Zeichenklassen][CC], repräsentiert es U+0008 (RÜCKSCHRITT)                |
| `\c`           | Ein Buchstabe von `A` bis `Z` oder `a` bis `z`                      | Eine [Zeichen-Flucht][CE], die das Steuerzeichen mit dem Wert gleich dem Zeichenwert des Buchstabens modulo 32 darstellt |
| `\d`           | None                                                                | [Zeichenklassen-Flucht][CCE], die Ziffernzeichen (`0` bis `9`) darstellt                                               |
| `\f`           | None                                                                | [Zeichen-Flucht][CE], die U+000C (FORM FEED) darstellt                                                                 |
| `\k`           | `<`, eine Kennung, dann `>`                                         | Ein [benannter Rückverweis][NBR]                                                                                      |
| `\n`           | None                                                                | [Zeichen-Flucht][CE], die U+000A (LINE FEED) darstellt                                                                 |
| `\p`           | `{`, eine Unicode-Eigenschaft und/oder den Wert, dann `}`           | [Unicode-Zeichenklassen-Flucht][UCCE], die Zeichen mit der angegebenen Unicode-Eigenschaft darstellt                   |
| `\q`           | `{`, eine Zeichenkette, dann `}`                                    | Nur gültig innerhalb von [`v`-Modus Zeichenklassen][VCC]; stellt die Zeichenkette dar, die wörtlich gematcht werden soll |
| `\r`           | None                                                                | [Zeichen-Flucht][CE], die U+000D (CARRIAGE RETURN) darstellt                                                           |
| `\s`           | None                                                                | [Zeichenklassen-Flucht][CCE], die Leerzeichen darstellt                                                               |
| `\t`           | None                                                                | [Zeichen-Flucht][CE], die U+0009 (ZEICHENTABULATION) darstellt                                                        |
| `\u`           | 4 hexadezimale Ziffern; oder `{`, 1 bis 6 hexadezimale Ziffern, dann `}` | [Zeichen-Flucht][CE], die das Zeichen mit dem gegebenen Codepunkt darstellt                                            |
| `\v`           | None                                                                | [Zeichen-Flucht][CE], die U+000B (LINIENTABULATION) darstellt                                                          |
| `\w`           | None                                                                | [Zeichenklassen-Flucht][CCE], die Wortzeichen (`A` bis `Z`, `a` bis `z`, `0` bis `9`, `_`) darstellt                   |
| `\x`           | 2 hexadezimale Ziffern                                              | [Zeichen-Flucht][CE], die das Zeichen mit dem gegebenen Wert darstellt                                                 |
| `\0`           | None                                                                | [Zeichen-Flucht][CE], die U+0000 (NULL) darstellt                                                                      |

[CC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class
[WBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

`\` gefolgt von einer anderen Ziffer wird zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences), die im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verboten ist.

Zusätzlich kann `\` durch einige andere Nicht-Buchstaben-oder-Zifferzeichen gefolgt werden, in welchem Fall die Escape-Sequenz immer eine [Zeichen-Flucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) darstellt, die das Zeichen selbst repräsentiert:

<!-- Hinweis: die {} müssen doppelt escaped werden, einmal für Yari -->

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\\{`, `\|`, `\\}`: überall gültig
- `\-`: nur gültig innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`: nur gültig innerhalb von [`v`-Modus Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)

Die anderen [ASCII](/de/docs/Glossary/ASCII) Zeichen, nämlich Leerzeichen, `"`, `'`, `_` und jedes Buchstabenzeichen, das oben nicht erwähnt wurde, sind keine gültigen Escape-Sequenzen. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identitätsfluchten_: sie stellen das Zeichen dar, das dem Backslash folgt. Zum Beispiel repräsentiert `\a` das Zeichen `a`. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen einzuführen, ohne Kompatibilitätsprobleme zu verursachen, und ist daher im Unicode-bewussten Modus verboten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("RegExp")}}
