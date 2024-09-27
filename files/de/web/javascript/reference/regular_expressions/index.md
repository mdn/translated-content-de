---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{jsSidebar}}

Ein **regulärer Ausdruck** (kurz _regex_) ermöglicht es Entwicklern, Zeichenketten mit einem Muster abzugleichen, Informationen zu extrahieren oder einfach zu testen, ob die Zeichenkette diesem Muster entspricht. Reguläre Ausdrücke werden in vielen Programmiersprachen verwendet, und die Syntax von JavaScript ist von [Perl](https://www.perl.org/) inspiriert.

Es wird empfohlen, den [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu lesen, um einen Überblick über die verfügbaren Regex-Syntaxen und ihre Funktionsweise zu erhalten.

## Beschreibung

[_Reguläre Ausdrücke_](https://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck) sind ein wichtiges Konzept in der formalen Sprachtheorie. Sie bieten eine Möglichkeit, eine potenziell unendliche Menge von Zeichenfolgen (eine _Sprache_ genannt) zu beschreiben. Ein regulärer Ausdruck benötigt im Kern die folgenden Merkmale:

- Ein Satz von _Zeichen_, die in der Sprache verwendet werden können, das sogenannte _Alphabet_.
- _Konkatenation_: `ab` bedeutet "das Zeichen `a` gefolgt von dem Zeichen `b`".
- _Vereinigung_: `a|b` bedeutet "entweder `a` oder `b`".
- _Kleene-Stern_: `a*` bedeutet "null oder mehr `a`-Zeichen".

Angenommen, es gibt ein endliches Alphabet (wie die 26 Buchstaben des englischen Alphabets oder das gesamte Unicode-Zeichenset), können alle regulären Sprachen durch die oben genannten Merkmale generiert werden. Natürlich sind viele Muster auf diese Weise sehr mühsam auszudrücken (wie "10 Ziffern" oder "ein Zeichen, das kein Leerzeichen ist"), daher beinhalten JavaScript-Reguläre-Ausdrücke viele Abkürzungen, die unten eingeführt werden.

> [!NOTE]
> JavaScript-Reguläre-Ausdrücke sind in Wirklichkeit nicht regulär, aufgrund der Existenz von [Rückbezügen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) (reguläre Ausdrücke müssen endliche Zustände haben). Dennoch sind sie eine sehr nützliche Funktion.

### Reguläre Ausdrücke erstellen

Ein regulärer Ausdruck wird typischerweise als Literal erstellt, indem ein Muster in Schrägstriche (`/`) eingeschlossen wird:

```js
const regex1 = /ab+c/g;
```

Reguläre Ausdrücke können auch mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor erstellt werden:

```js
const regex2 = new RegExp("ab+c", "g");
```

Zwischen beiden gibt es zur Laufzeit keine Unterschiede, obwohl sie Auswirkungen auf Leistung, statische Analysierbarkeit und ergonomische Probleme beim Escaping von Zeichen haben können. Weitere Informationen finden Sie im [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor)-Referenz.

### Regex-Flags

Flags sind spezielle Parameter, die ändern können, wie ein regulärer Ausdruck interpretiert wird oder wie er mit dem Eingabetext interagiert. Jedes Flag entspricht einer Zugriffs-Eigenschaft des `RegExp`-Objekts.

| Flag | Beschreibung                                                                                 | Entsprechende Eigenschaft                       |
| ---- | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für Teilzeichenfolgenübereinstimmungen.                                      | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                               | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Groß-/Kleinschreibung ignorieren.                                                            | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Ermöglicht es `^` und `$`, neben Zeilenumbruchszeichen zu stehen.                            | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Ermöglicht es `.` Zeilenumbruchszeichen zu entsprechen.                                      | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Folge von Unicode-Codierungen.                      | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade des `u`-Modus mit mehr Unicode-Funktionen.                                       | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führen Sie eine "haftende" Suche durch, die an der aktuellen Position im Zielstring beginnt. | {{jsxref("RegExp/sticky", "sticky")}}           |

Die Flags `i`, `m` und `s` können für bestimmte Teile eines Regex mithilfe der [Modifikator](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)-Syntax aktiviert oder deaktiviert werden.

Die folgenden Abschnitte listen alle verfügbaren Regex-Syntaxen auf, gruppiert nach ihrer syntaktischen Natur.

### Assertions

Assertions sind Konstrukte, die testen, ob die Zeichenkette eine bestimmte Bedingung an der angegebenen Position erfüllt, aber keine Zeichen verbrauchen. Assertions können nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden.

- [Eingabe-Grenz-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Bestätigt, dass die aktuelle Position der Anfang oder das Ende der Eingabe ist oder, wenn das `m`-Flag gesetzt ist, der Anfang oder das Ende einer Zeile.
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Bestätigt, dass die aktuelle Position von einem bestimmten Muster gefolgt oder nicht gefolgt wird.
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Bestätigt, dass die aktuelle Position von einem bestimmten Muster vorhergegangen oder nicht vorhergegangen wird.
- [Wort-Grenz-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Bestätigt, dass die aktuelle Position eine Wortgrenze ist.

### Atome

Atome sind die grundlegendsten Einheiten eines regulären Ausdrucks. Jedes Atom _verbraucht_ ein oder mehrere Zeichen in der Zeichenkette und scheitert entweder an der Übereinstimmung oder ermöglicht es dem Muster, mit dem nächsten Atom weiter zu übereinstimmen.

- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Entspricht einem zuvor mit einer erfassenden Gruppe erfassten Teilmuster.
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Entspricht einem Teilmuster und merkt sich Informationen über die Übereinstimmung.
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Entspricht jedem Zeichen innerhalb oder außerhalb eines Zeichensatzes. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um Zeichenketten endlicher Länge zu entsprechen.
- [Zeichenklasse-Fluchtsequenz: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Entspricht jedem Zeichen innerhalb oder außerhalb eines vordefinierten Zeichensatzes.
- [Zeichenflucht: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Entspricht einem Zeichen, das möglicherweise nicht bequem in seiner literalen Form dargestellt werden kann.
- [Literalzeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : Entspricht einem bestimmten Zeichen.
- [Modifikator: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
  - : Überschreibt die Flageinstellungen in einem bestimmten Teil eines regulären Ausdrucks.
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Entspricht einem zuvor mit einer benannten erfassenden Gruppe erfassten Teilmuster.
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Entspricht einem Teilmuster und merkt sich Informationen über die Übereinstimmung. Die Gruppe kann später anhand eines benutzerdefinierten Namens anstelle ihres Indexes im Muster identifiziert werden.
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Entspricht einem Teilmuster, ohne Informationen über die Übereinstimmung zu speichern.
- [Unicode-Zeichenklasse-Fluchtsequenz: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Entspricht einem Satz von Zeichen, die durch eine Unicode-Eigenschaft angegeben sind. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag aktiviert ist, kann es auch verwendet werden, um Zeichenketten endlicher Länge zu entsprechen.
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Entspricht jedem Zeichen außer Zeilenbeenden, es sei denn, das `s`-Flag ist gesetzt.

### Andere Merkmale

Diese Merkmale spezifizieren selbst kein Muster, sondern werden verwendet, um Muster zu komponieren.

- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Entspricht einem beliebigen Satz von Alternativen, die durch das `|`-Zeichen getrennt sind.
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Entspricht einem Atom eine bestimmte Anzahl von Malen.

### Escape-Sequenzen

_Escape-Sequenzen_ in Regex beziehen sich auf jede Art von Syntax, gebildet durch `\` gefolgt von einem oder mehreren Zeichen. Sie können sehr unterschiedliche Zwecke erfüllen, je nachdem, was `\` folgt. Unten finden Sie eine Liste aller gültigen "Escape-Sequenzen":

| Escape-Sequenz | Gefolgt von                                                              | Bedeutung                                                                                                                       |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `\B`           | Keinem                                                                   | [Nicht-Wort-Grenz-Assertion][WBA]                                                                                               |
| `\D`           | Keinem                                                                   | [Zeichenklasse-Fluchtsequenz][CCE] repräsentiert Nicht-Ziffernzeichen                                                           |
| `\P`           | `{`, eine Unicode-Eigenschaft und / oder -wert, dann `}`                 | [Unicode-Zeichenklasse-Fluchtsequenz][UCCE] repräsentiert Zeichen ohne die angegebene Unicode-Eigenschaft                       |
| `\S`           | Keinem                                                                   | [Zeichenklasse-Fluchtsequenz][CCE] repräsentiert Nicht-Leerraumzeichen                                                          |
| `\W`           | Keinem                                                                   | [Zeichenklasse-Fluchtsequenz][CCE] repräsentiert Nicht-Wort-Zeichen                                                             |
| `\b`           | Keinem                                                                   | [Wort-Grenz-Assertion][WBA]; innerhalb von [Zeichenklassen][CC] repräsentiert es U+0008 (RÜCKSCHRITT)                           |
| `\c`           | Einem Buchstaben von `A` bis `Z` oder `a` bis `z`                        | Eine [Zeichenflucht][CE] repräsentiert das Steuerzeichen mit dem Wert, der dem Zeichenwert des Buchstabens modulo 32 entspricht |
| `\d`           | Keinem                                                                   | [Zeichenklasse-Fluchtsequenz][CCE] repräsentiert Ziffernzeichen (`0` bis `9`)                                                   |
| `\f`           | Keinem                                                                   | [Zeichenflucht][CE] repräsentiert U+000C (FORM FEED)                                                                            |
| `\k`           | `<`, ein Bezeichner, dann `>`                                            | Ein [benannter Rückverweis][NBR]                                                                                                |
| `\n`           | Keinem                                                                   | [Zeichenflucht][CE] repräsentiert U+000A (Zeilenumbruch)                                                                        |
| `\p`           | `{`, eine Unicode-Eigenschaft und / oder -wert, dann `}`                 | [Unicode-Zeichenklasse-Fluchtsequenz][UCCE] repräsentiert Zeichen mit der angegebenen Unicode-Eigenschaft                       |
| `\q`           | `{`, eine Zeichenkette, dann ein `}`                                     | Nur gültig innerhalb von [`v`-Modus-Zeichenklassen][VCC]; repräsentiert die Zeichenkette, die wörtlich abgeglichen werden soll  |
| `\r`           | Keinem                                                                   | [Zeichenflucht][CE] repräsentiert U+000D (CARRIAGE RETURN)                                                                      |
| `\s`           | Keinem                                                                   | [Zeichenklasse-Fluchtsequenz][CCE] repräsentiert Leerzeichen                                                                    |
| `\t`           | Keinem                                                                   | [Zeichenflucht][CE] repräsentiert U+0009 (HORIZONTALER TAB)                                                                     |
| `\u`           | 4 hexadezimale Ziffern; oder `{`, 1 bis 6 hexadezimale Ziffern, dann `}` | [Zeichenflucht][CE] repräsentiert das Zeichen mit dem angegebenen Codepunkt                                                     |
| `\v`           | Keinem                                                                   | [Zeichenflucht][CE] repräsentiert U+000B (VERTIKALER TAB)                                                                       |
| `\w`           | Keinem                                                                   | [Zeichenklasse-Fluchtsequenz][CCE] repräsentiert Wortzeichen (`A` bis `Z`, `a` bis `z`, `0` bis `9`, `_`)                       |
| `\x`           | 2 hexadezimale Ziffern                                                   | [Zeichenflucht][CE] repräsentiert das Zeichen mit dem gegebenen Wert                                                            |
| `\0`           | Keinem                                                                   | [Zeichenflucht][CE] repräsentiert U+0000 (NULL)                                                                                 |

[CC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class
[WBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

`\` gefolgt von einem anderen Ziffernzeichen wird zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences), die im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verboten ist.

Darüber hinaus kann `\` von einigen Nicht-Buchstaben-oder-Ziffer-Zeichen gefolgt werden, in welchem Fall die Escape-Sequenz immer eine [Zeichenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) ist, die das entkommene Zeichen selbst darstellt:

<!-- Hinweis: die {} müssen doppelt entkommen werden, um Yari zu umgehen -->

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\\{`, `\|`, `\\}`: überall gültig
- `\-`: nur innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) gültig
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`: nur innerhalb von [`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) gültig

Die anderen [ASCII](/de/docs/Glossary/ASCII)-Zeichen, nämlich Leerzeichen, `"`, `'`, `_`, und jeder Buchstabe, der oben nicht erwähnt wurde, sind keine gültigen Escape-Sequenzen. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identitätseskapen_: sie repräsentieren das Zeichen, das auf den Rückstrich folgt. Zum Beispiel repräsentiert `\a` das Zeichen `a`. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen einzuführen, ohne Rückwärtskompatibilitätsprobleme zu verursachen, und ist daher im Unicode-bewussten Modus verboten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
