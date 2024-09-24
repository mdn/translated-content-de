---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{jsSidebar}}

Ein **regulärer Ausdruck** (kurz _regex_) ermöglicht Entwicklern, Zeichenfolgen anhand eines Musters zu überprüfen, Informationen über Teilübereinstimmungen zu extrahieren oder einfach nur zu testen, ob die Zeichenfolge diesem Muster entspricht. Reguläre Ausdrücke werden in vielen Programmiersprachen verwendet, und die Syntax in JavaScript ist von [Perl](https://www.perl.org/) inspiriert.

Es wird empfohlen, den [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu lesen, um einen Überblick über die verfügbaren Regex-Syntaxen und deren Funktionsweise zu erhalten.

## Beschreibung

[_Reguläre Ausdrücke_](https://en.wikipedia.org/wiki/Regular_expression) sind ein wichtiges Konzept in der Theorie formaler Sprachen. Sie sind eine Methode, um eine möglicherweise unendliche Menge von Zeichenfolgen (ein _Sprache_ genannt) zu beschreiben. Ein regulärer Ausdruck benötigt im Wesentlichen die folgenden Merkmale:

- Eine Menge von _Zeichen_, die in der Sprache verwendet werden können, das _Alphabet_ genannt.
- _Konkatenation_: `ab` bedeutet „das Zeichen `a` gefolgt von dem Zeichen `b`“.
- _Vereinigung_: `a|b` bedeutet „entweder `a` oder `b`“.
- _Kleene-Stern_: `a*` bedeutet „null oder mehr Zeichen `a`“.

Angenommen, es gibt ein endliches Alphabet (wie die 26 Buchstaben des englischen Alphabets oder das gesamte Unicode-Zeichensatz), können alle regulären Sprachen durch die oben genannten Merkmale generiert werden. Natürlich sind viele Muster auf diese Weise sehr mühsam auszudrücken (wie „10 Ziffern“ oder „ein Zeichen, das kein Leerzeichen ist“), daher enthalten reguläre Ausdrücke in JavaScript viele Abkürzungen, die unten vorgestellt werden.

> [!NOTE]
> JavaScript-Reguläre Ausdrücke sind tatsächlich nicht regulär, wegen der Existenz von [Rückverweisen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) (reguläre Ausdrücke müssen endliche Zustände haben). Dennoch sind sie ein sehr nützliches Feature.

### Reguläre Ausdrücke erstellen

Ein regulärer Ausdruck wird typischerweise als Literal erstellt, indem ein Muster in Schrägstriche (`/`) eingeschlossen wird:

```js
const regex1 = /ab+c/g;
```

Reguläre Ausdrücke können auch mit dem {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor erstellt werden:

```js
const regex2 = new RegExp("ab+c", "g");
```

Sie haben keine Laufzeitunterschiede, obwohl sie möglicherweise Auswirkungen auf die Leistung, die statische Analysebarkeit und ergonomische Probleme beim Autor haben. Für weitere Informationen siehe die [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor) Referenz.

### Regex-Flags

Flags sind spezielle Parameter, die ändern können, wie ein regulärer Ausdruck interpretiert wird oder wie er mit dem Eingabetext interagiert. Jedes Flag entspricht einer Zugriffseigenschaft des `RegExp` Objekts.

| Flag | Beschreibung                                                                                   | Entsprechende Eigenschaft                               |
| ---- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `d`  | Erzeugt Indizes für Teilstring-Übereinstimmungen.                                             | {{jsxref("RegExp/hasIndices", "hasIndices")}}           |
| `g`  | Globale Suche.                                                                                | {{jsxref("RegExp/global", "global")}}                   |
| `i`  | Groß-/Kleinschreibung ignorieren.                                                             | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}           |
| `m`  | Ermöglicht, dass `^` und `$` neben Zeilenumbrüchen übereinstimmen.                            | {{jsxref("RegExp/multiline", "multiline")}}             |
| `s`  | Ermöglicht, dass `.` mit Zeilenumbrüchen übereinstimmt.                                       | {{jsxref("RegExp/dotAll", "dotAll")}}                   |
| `u`  | „Unicode“; behandelt ein Muster als eine Folge von Unicode-Codepunkten.                       | {{jsxref("RegExp/unicode", "unicode")}}                 |
| `v`  | Ein Upgrade auf den `u`-Modus mit mehr Unicode-Funktionen.                                    | {{jsxref("RegExp/unicodeSets", "unicodeSets")}}         |
| `y`  | Führt eine „klebrige“ Suche durch, die ab der aktuellen Position im Zielstring übereinstimmt. | {{jsxref("RegExp/sticky", "sticky")}}                   |

Die Flags `i`, `m` und `s` können für bestimmte Teile eines Regex mit der [Modifikator]-Syntax (/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) aktiviert oder deaktiviert werden.

Die folgenden Abschnitte listen alle verfügbaren Regex-Syntaxen auf, gruppiert nach ihrer syntaktischen Natur.

### Assertions

Assertions sind Konstrukte, die testen, ob die Zeichenfolge an der angegebenen Position eine bestimmte Bedingung erfüllt, aber keine Zeichen verbrauchen. Assertions können nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden.

- [Eingabebegrenzungs-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Behauptet, dass die aktuelle Position der Anfang oder das Ende der Eingabe oder der Anfang oder das Ende einer Zeile ist, wenn das `m`-Flag gesetzt ist.
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Behauptet, dass die aktuelle Position von einem bestimmten Muster gefolgt oder nicht gefolgt wird.
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Behauptet, dass die aktuelle Position von einem bestimmten Muster vorangestellt oder nicht vorangestellt wird.
- [Wortbegrenzungs-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Behauptet, dass die aktuelle Position eine Wortgrenze ist.

### Atome

Atome sind die grundlegendsten Einheiten eines regulären Ausdrucks. Jedes Atom _verbraucht_ ein oder mehr Zeichen in der Zeichenfolge und scheitert entweder an der Übereinstimmung oder lässt das Muster mit dem nächsten Atom weiter übereinstimmen.

- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Entspricht einem zuvor übereinstimmenden Untermuster, das mit einer Erfassungsgruppe erfasst wurde.
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Entspricht einem Untermuster und merkt sich Informationen über die Übereinstimmung.
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Entspricht jedem Zeichen in oder nicht in einer Menge von Zeichen. Wenn das [`v`]-Flag (/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen fester Länge zu entsprechen.
- [Escape der Zeichenklasse: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Entspricht jedem Zeichen in oder nicht in einer vordefinierten Menge von Zeichen.
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Entspricht einem Zeichen, das möglicherweise nicht in seiner literalen Form dargestellt werden kann.
- [Literales Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : Entspricht einem bestimmten Zeichen.
- [Modifikator: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
  - : Überschreibt die Flandereinstellungen in einem bestimmten Teil eines regulären Ausdrucks.
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Entspricht einem zuvor übereinstimmenden Untermuster, das mit einer benannten Erfassungsgruppe erfasst wurde.
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Entspricht einem Untermuster und merkt sich Informationen über die Übereinstimmung. Die Gruppe kann später durch einen benutzerdefinierten Namen anstelle ihres Indexes im Muster identifiziert werden.
- [Nich erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Entspricht einem Untermuster, ohne Informationen über die Übereinstimmung zu merken.
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Entspricht einer Menge von Zeichen, die durch eine Unicode-Eigenschaft angegeben werden. Wenn das [`v`]-Flag (/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen fester Länge zu entsprechen.
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Entspricht jedem Zeichen außer Zeilenbegrenzern, es sei denn, das `s`-Flag ist gesetzt.

### Andere Merkmale

Diese Merkmale legen kein Muster für sich fest, sondern werden verwendet, um Muster zu komponieren.

- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Entspricht jedem der durch das Zeichen `|` getrennten Alternativen.
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Entspricht einem Atom eine bestimmte Anzahl von Malen.

### Escape-Sequenzen

_Escape-Sequenzen_ in Regexen beziehen sich auf jede Art von Syntax, die aus einem `\` gefolgt von einem oder mehreren Zeichen besteht. Sie können sehr unterschiedliche Zwecke erfüllen, abhängig davon, was dem `\` folgt. Im Folgenden finden Sie eine Liste aller gültigen „Escape-Sequenzen“:

| Escape-Sequenz | Gefolgt von                                                       | Bedeutung                                                                                                               |
| -------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `\B`           | Keine                                                             | [Nicht-Wortbegrenzungs-Assertion][WBA]                                                                                 |
| `\D`           | Keine                                                             | [Escape der Zeichenklasse][CCE] stellt nicht-Ziffernzeichen dar                                                        |
| `\P`           | `{`, eine Unicode-Eigenschaft und/oder Wert, dann `}`             | [Escape der Unicode-Zeichenklasse][UCCE] stellt Zeichen ohne die angegebene Unicode-Eigenschaft dar                     |
| `\S`           | Keine                                                             | [Escape der Zeichenklasse][CCE] stellt nicht-Leerzeichen dar                                                           |
| `\W`           | Keine                                                             | [Escape der Zeichenklasse][CCE] stellt nicht-Wortzeichen dar                                                           |
| `\b`           | Keine                                                             | [Wortbegrenzungs-Assertion][WBA]; innerhalb von [Zeichenklassen][CC] stellt U+0008 (RÜCKSCHRITT) dar                    |
| `\c`           | Ein Buchstabe von `A` bis `Z` oder `a` bis `z`                    | Ein [Zeichen-Escape][CE] stellt das Steuerzeichen mit einem Wert dar, der dem Buchstaben-Zeichenwert modulo 32 entspricht|
| `\d`           | Keine                                                             | [Escape der Zeichenklasse][CCE] stellt Ziffernzeichen (`0` bis `9`) dar                                                |
| `\f`           | Keine                                                             | [Zeichen-Escape][CE] stellt U+000C (FORMULARVORSCHUB) dar                                                              |
| `\k`           | `<`, einen Bezeichner, dann `>`                                   | Ein [benannter Rückverweis][NBR]                                                                                       |
| `\n`           | Keine                                                             | [Zeichen-Escape][CE] stellt U+000A (ZEILENVORSCHUB) dar                                                                |
| `\p`           | `{`, eine Unicode-Eigenschaft und/oder Wert, dann `}`             | [Escape der Unicode-Zeichenklasse][UCCE] stellt Zeichen mit der angegebenen Unicode-Eigenschaft dar                    |
| `\q`           | `{`, eine Zeichenkette, dann ein `}`                              | Nur innerhalb von [`v`-Modus-Zeichenklassen][VCC] gültig; stellt die Zeichenkette dar, die buchstäblich übereinstimmen soll |
| `\r`           | Keine                                                             | [Zeichen-Escape][CE] stellt U+000D (WAGENRÜCKLAUF) dar                                                                 |
| `\s`           | Keine                                                             | [Escape der Zeichenklasse][CCE] stellt Leerzeichen dar                                                                 |
| `\t`           | Keine                                                             | [Zeichen-Escape][CE] stellt U+0009 (ZEICHENTABULATOR) dar                                                              |
| `\u`           | 4 hexadezimale Ziffern; oder `{`, 1 bis 6 hexadezimale Ziffern,       dann `}` | [Zeichen-Escape][CE] stellt das Zeichen mit dem angegebenen Codepunkt dar                                             |
| `\v`           | Keine                                                             | [Zeichen-Escape][CE] stellt U+000B (LINIENTABULATOR) dar                                                               |
| `\w`           | Keine                                                             | [Escape der Zeichenklasse][CCE] stellt Wortzeichen dar (`A` bis `Z`, `a` bis `z`, `0` bis `9`, `_`)                   |
| `\x`           | 2 hexadezimale Ziffern                                            | [Zeichen-Escape][CE] stellt das Zeichen mit dem angegebenen Wert dar                                                   |
| `\0`           | Keine                                                             | [Zeichen-Escape][CE] stellt U+0000 (NULL) dar                                                                          |

[CC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class
[WBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

`\` gefolgt von einem anderen Ziffernzeichen wird zu einer [veralteten Oktal-Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences), welche im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verboten ist.

Darüber hinaus kann `\` mit einigen nicht-buchstaben-oder-ziffern Zeichen gefolgt werden, in welchem Fall die Escape-Sequenz immer eine [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) darstellt, die das entkommene Zeichen selbst darstellt:

<!-- Hinweis: die {} müssen doppelt entflohen werden, einmal für Yari -->

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\\{`, `\|`, `\\}`: überall gültig
- `\-`: nur innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) gültig
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`: nur innerhalb von [`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) gültig

Die anderen {{Glossary("ASCII")}}-Zeichen, nämlich Leerzeichen, `"`, `'`, `_`, und alle hier nicht erwähnten Buchstabenzeichen sind keine gültigen Escape-Sequenzen. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden nicht eine der oben genannten Escape-Sequenzen zu _Identitäts-Escapes_: Sie stellen das Zeichen dar, das dem Backslash folgt. Beispielsweise stellt `\a` das Zeichen `a` dar. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen ohne Rückwärtskompatibilitätsprobleme einzuführen, und ist daher im Unicode-bewussten Modus verboten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
