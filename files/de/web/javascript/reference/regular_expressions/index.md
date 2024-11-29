---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: a73295d4344aeab38c67262717d0dda8b3b9f0c5
---

{{jsSidebar}}

Ein **regulärer Ausdruck** (kurz _regex_) ermöglicht es Entwicklern, Zeichenketten anhand eines Musters zu überprüfen, Informationen über Teilübereinstimmungen zu extrahieren oder einfach zu testen, ob die Zeichenkette diesem Muster entspricht. Reguläre Ausdrücke werden in vielen Programmiersprachen verwendet, und die Syntax in JavaScript ist von [Perl](https://www.perl.org/) inspiriert.

Es wird empfohlen, den [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu lesen, um einen Überblick über die verfügbaren regex-Syntaxen und deren Funktionsweise zu erhalten.

## Beschreibung

[_Reguläre Ausdrücke_](https://en.wikipedia.org/wiki/Regular_expression) sind ein wichtiges Konzept in der Theorie formaler Sprachen. Sie sind eine Möglichkeit, eine möglicherweise unendliche Menge von Zeichenketten (als _Sprache_ bezeichnet) zu beschreiben. Ein regulärer Ausdruck benötigt im Wesentlichen die folgenden Merkmale:

- Eine Menge von _Zeichen_, die in der Sprache verwendet werden können, genannt das _Alphabet_.
- _Konkatenation_: `ab` bedeutet "das Zeichen `a` gefolgt von dem Zeichen `b`".
- _Vereinigung_: `a|b` bedeutet "entweder `a` oder `b`".
- _Kleene-Stern_: `a*` bedeutet "null oder mehr `a` Zeichen".

Angenommen, es gibt ein endliches Alphabet (wie die 26 Buchstaben des englischen Alphabets oder das gesamte Unicode-Zeichensatz), können alle regulären Sprachen durch die obigen Merkmale generiert werden. Natürlich sind viele Muster auf diese Weise sehr mühsam auszudrücken (wie "10 Ziffern" oder "ein Zeichen, das kein Leerzeichen ist"), daher beinhalten JavaScript-reguläre Ausdrücke viele Abkürzungen, die unten eingeführt werden.

> [!NOTE]
> JavaScript-reguläre Ausdrücke sind in der Tat nicht regulär, aufgrund der Existenz von [Rückverweisen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) (reguläre Ausdrücke müssen endliche Zustände haben). Trotzdem sind sie immer noch ein sehr nützliches Merkmal.

### Reguläre Ausdrücke erstellen

Ein regulärer Ausdruck wird typischerweise als Literal erstellt, indem ein Muster in Schrägstriche (`/`) eingeschlossen wird:

```js
const regex1 = /ab+c/g;
```

Reguläre Ausdrücke können auch mit dem {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor erstellt werden:

```js
const regex2 = new RegExp("ab+c", "g");
```

Sie haben zur Laufzeit keine Unterschiede, obwohl sie Auswirkungen auf die Leistung, die statische Analysierbarkeit und ergonomische Probleme beim Schreiben mit entweichenden Zeichen haben können. Weitere Informationen finden Sie im [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor)-Referenz.

### Regex-Flags

Flags sind spezielle Parameter, die die Interpretation eines regulären Ausdrucks oder seine Interaktion mit dem Eingabetext ändern können. Jedes Flag entspricht einer accessor-Eigenschaft des `RegExp`-Objekts.

| Flag | Beschreibung                                                                                | Entsprechende Eigenschaft                       |
| ---- | ------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für Teilzeichenfolgenübereinstimmungen.                                     | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                              | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Groß-/Kleinschreibung wird ignoriert.                                                       | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Ermöglicht es, dass `^` und `$` neben Zeilenumbrüchen übereinstimmen.                       | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Erlaubt es `.` Zeilenumbrüche zu matchen.                                                   | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Folge von Unicode-Codepunkten.                     | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade zum `u`-Modus mit mehr Unicode-Features.                                        | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine "sticky" Suche durch, die ab der aktuellen Position im Zielstring übereinstimmt. | {{jsxref("RegExp/sticky", "sticky")}}           |

Die Flags `i`, `m` und `s` können für bestimmte Teile eines Regex mit Hilfe der [Modifikator](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)-Syntax aktiviert oder deaktiviert werden.

Die untenstehenden Abschnitte listen alle verfügbaren Regex-Syntaxen auf, gruppiert nach ihrer syntaktischen Natur.

### Assertionen

Assertionen sind Konstrukte, die testen, ob die Zeichenkette an der angegebenen Position eine bestimmte Bedingung erfüllt, ohne jedoch Zeichen zu konsumieren. Assertionen können nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden.

- [Eingriffsgrenze Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Bestätigt, dass die aktuelle Position der Anfang oder das Ende des Eingangs, oder der Anfang oder das Ende einer Zeile ist, wenn das `m`-Flag gesetzt ist.
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Bestätigt, dass die aktuelle Position gefolgt oder nicht gefolgt von einem bestimmten Muster ist.
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Bestätigt, dass die aktuelle Position vorangestellt oder nicht vorangestellt von einem bestimmten Muster ist.
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Bestätigt, dass die aktuelle Position eine Wortgrenze ist.

### Atome

Atome sind die grundlegendsten Einheiten eines regulären Ausdrucks. Jedes Atom _konsumiert_ ein oder mehrere Zeichen in der Zeichenkette und scheitert entweder an der Übereinstimmung oder erlaubt es dem Muster, mit dem nächsten Atom fortzufahren.

- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Entspricht einem zuvor übereinstimmenden Untermuster, das mit einer fangenden Gruppe erfasst wurde.
- [Fangende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Entspricht einem Untermuster und speichert Informationen über die Übereinstimmung.
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Entspricht jedem Zeichen in oder nicht in einer Gruppe von Zeichen. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag gesetzt ist, kann sie auch verwendet werden, um Zeichenketten mit endlicher Länge zu matchen.
- [Zeichenklassenescape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Entspricht einem Zeichen in oder nicht in einer vordefinierten Gruppe von Zeichen.
- [Zeichenescape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Entspricht einem Zeichen, das möglicherweise nicht bequem in seiner literalen Form dargestellt werden kann.
- [Literales Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : Entspricht einem bestimmten Zeichen.
- [Modifikator: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
  - : Überschreibt die Flag-Einstellungen in einem bestimmten Teil eines regulären Ausdrucks.
- [Benannte Rückverweisung: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Entspricht einem zuvor übereinstimmenden Untermuster, das mit einer benannten fangenden Gruppe erfasst wurde.
- [Benannte fangende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Entspricht einem Untermuster und speichert Informationen über die Übereinstimmung. Die Gruppe kann später durch einen benutzerdefinierten Namen anstelle durch ihren Index im Muster identifiziert werden.
- [Nicht-fangende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Entspricht einem Untermuster ohne Speichern von Informationen über die Übereinstimmung.
- [Unicode-Zeichenklassenescape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Entspricht einem Satz von Zeichen, die durch eine Unicode-Eigenschaft angegeben werden. Wenn das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag aktiviert ist, kann es auch verwendet werden, um Zeichenfolgen mit endlicher Länge zu matchen.
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Entspricht jedem Zeichen außer Zeilenumbruch-Zeichen, es sei denn, das `s`-Flag ist gesetzt.

### Andere Funktionen

Diese Funktionen spezifizieren selbst kein Muster, werden aber verwendet, um Muster zu komponieren.

- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Entspricht einem von mehreren Alternativen, die durch das `|`-Zeichen getrennt sind.
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Entspricht einem Atom eine bestimmte Anzahl von Malen.

### Escape-Sequenzen

_Escape-Sequenzen_ in regexes beziehen sich auf jede Art von Syntax, die durch `\` gefolgt von einem oder mehreren Zeichen gebildet wird. Sie können je nach den folgenden `\` sehr unterschiedliche Zwecke erfüllen. Unten ist eine Liste aller gültigen "Escape-Sequenzen":

| Escape-Sequenz | Gefolgt von                                                              | Bedeutung                                                                                                                       |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `\B`           | Keine                                                                    | [Nicht-Wortgrenze-Assertion][WBA]                                                                                               |
| `\D`           | Keine                                                                    | [Zeichenklassenescape][CCE], das nicht-Ziffern-Zeichen repräsentiert                                                            |
| `\P`           | `{`, eine Unicode-Eigenschaft und/oder ein Wert, dann `}`                | [Unicode-Zeichenklassenescape][UCCE], das Zeichen ohne die angegebene Unicode-Eigenschaft repräsentiert                         |
| `\S`           | Keine                                                                    | [Zeichenklassenescape][CCE], das nicht-Leerraum-Zeichen repräsentiert                                                           |
| `\W`           | Keine                                                                    | [Zeichenklassenescape][CCE], das nicht-Wort-Zeichen repräsentiert                                                               |
| `\b`           | Keine                                                                    | [Wortgrenze-Assertion][WBA]; innerhalb von [Zeichenklassen][CC] repräsentiert es U+0008 (RÜCKSCHRITT)                           |
| `\c`           | Ein Buchstabe von `A` bis `Z` oder `a` bis `z`                           | Ein [Zeichenescape][CE], das das Steuerzeichen mit dem Wert gleich dem Charakterwert des Buchstabens modulo 32 repräsentiert    |
| `\d`           | Keine                                                                    | [Zeichenklassenescape][CCE], das Ziffernzeichen (`0` bis `9`) repräsentiert                                                     |
| `\f`           | Keine                                                                    | [Zeichenescape][CE], das U+000C (FORMULARVORSCHUB) repräsentiert                                                                |
| `\k`           | `<`, ein Bezeichner, dann `>`                                            | Ein [benannter Rückverweis][NBR]                                                                                                |
| `\n`           | Keine                                                                    | [Zeichenescape][CE], das U+000A (ZEILENUMBRUCH) repräsentiert                                                                   |
| `\p`           | `{`, eine Unicode-Eigenschaft und/oder ein Wert, dann `}`                | [Unicode-Zeichenklassenescape][UCCE], das Zeichen mit der angegebenen Unicode-Eigenschaft repräsentiert                         |
| `\q`           | `{`, eine Zeichenkette, dann `}`                                         | Nur gültig innerhalb von [`v`-Modus-Zeichenklassen][VCC]; repräsentiert die Zeichenkette, die buchstäblich gematcht werden soll |
| `\r`           | Keine                                                                    | [Zeichenescape][CE], das U+000D (WAGENRÜCKLAUF) repräsentiert                                                                   |
| `\s`           | Keine                                                                    | [Zeichenklassenescape][CCE], das Leerraum-Zeichen repräsentiert                                                                 |
| `\t`           | Keine                                                                    | [Zeichenescape][CE], das U+0009 (ZEICHENTABULATION) repräsentiert                                                               |
| `\u`           | 4 hexadezimale Ziffern; oder `{`, 1 bis 6 hexadezimale Ziffern, dann `}` | [Zeichenescape][CE], das das Zeichen mit dem angegebenen Codepunkt repräsentiert                                                |
| `\v`           | Keine                                                                    | [Zeichenescape][CE], das U+000B (ZEILENTABULATION) repräsentiert                                                                |
| `\w`           | Keine                                                                    | [Zeichenklassenescape][CCE], das Wortzeichen (`A` bis `Z`, `a` bis `z`, `0` bis `9`, `_`) repräsentiert                         |
| `\x`           | 2 hexadezimale Ziffern                                                   | [Zeichenescape][CE], das das Zeichen mit dem gegebenen Wert repräsentiert                                                       |
| `\0`           | Keine                                                                    | [Zeichenescape][CE], das U+0000 (NULL) repräsentiert                                                                            |

[CC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class
[WBA]: /de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

`\` gefolgt von `0` und einer anderen Ziffer wird zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences), die im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verboten ist. `\` gefolgt von einer anderen Ziffernfolge wird zu einem [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

Darüber hinaus kann `\` von einigen nicht-Buchstaben-oder-Ziffern-Zeichen gefolgt werden, wobei die Escape-Sequenz immer ein [Zeichenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) ist, das das entkommene Zeichen selbst repräsentiert:

<!-- Hinweis: die {} müssen doppelt escaped werden, einmal für Yari -->

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\\{`, `\|`, `\\}`: überall gültig
- `\-`: nur gültig innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`: nur gültig innerhalb von [`v`-Modus Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)

Die anderen {{Glossary("ASCII", "ASCII")}}-Zeichen, nämlich das Leerzeichen, `"`, `'`, `_`, und alle Buchstabenzeichen, die oben nicht erwähnt wurden, sind keine gültigen Escape-Sequenzen. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht oben stehen, zu Identitäts-Escapes: Sie repräsentieren das Zeichen, das dem Backslash folgt. Zum Beispiel repräsentiert `\a` das Zeichen `a`. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen einzuführen, ohne Rückwärtskompatibilitätsprobleme zu verursachen, und ist daher im Unicode-bewussten Modus verboten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
