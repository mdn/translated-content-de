---
title: "Einführung in die CSS-Syntax: Deklarationen, Regeln und Anweisungen"
short-title: Introduction
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS))-Sprache besteht darin, einer Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Funktionen zu gestalten, wie Farben, Positionierung oder Dekorationen. Die _CSS-Syntax_ spiegelt dieses Ziel wider und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner, also ein lesbarer _Name_ ist, der definiert, welche Funktion betrachtet wird.
- Der **Wert**, der beschreibt, wie die Funktion von der Engine behandelt werden soll. Jede Eigenschaft hat einen Satz gültiger Werte, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Festlegen von CSS-Eigenschaften auf spezifische Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden müssen, um sie ordentlich anzuordnen und zu gestalten.

Sowohl Eigenschaften als auch Werte sind standardmäßig in CSS nicht case-sensitiv. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, jedoch nicht notwendigerweise darin, werden ignoriert.

![Eine CSS-Deklaration ist ein Eigenschaft-Wert-Paar, mit einem Doppelpunkt, der die beiden Entitäten trennt, und einem Semikolon, das die Deklaration abschließt.](css_syntax_-_declaration.png)

Es gibt [Hunderte verschiedener Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch unendliche Anzahl verschiedener Werte. Nicht alle Kombinationen von Eigenschaften und Werten sind erlaubt und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ angesehen und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, das heißt in einer Struktur, die durch eine öffnende geschweifte Klammer, `{` (U+007B LEFT CURLY BRACKET), und eine schließende, `}` (U+007D RIGHT CURLY BRACKET), begrenzt ist. Blöcke können manchmal verschachtelt sein, daher müssen öffnende und schließende Klammern zusammenpassen.

![Zwei geschweifte Klammern begrenzen den Anfang und das Ende eines CSS-Blocks, mit CSS-Inhalt oder ohne Inhalt zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlicherweise **Deklarationsblöcke** genannt, und Deklarationen innerhalb von ihnen werden durch ein Semikolon, `;` (U+003B SEMICOLON), getrennt. Ein Deklarationsblock kann leer sein, das heißt, null Deklarationen enthalten. Leerzeichen um Deklarationen werden ignoriert. Die letzte Deklaration eines Blocks muss nicht durch ein Semikolon beendet werden, obwohl es oft als _gute Praxis_ angesehen wird, da es verhindert, dass man vergisst, es hinzuzufügen, wenn der Block um eine weitere Deklaration erweitert wird.

Ein CSS-Deklarationsblock wird im folgenden Diagramm visualisiert.

![Innerhalb eines CSS-Blocks, eingeschlossen in geschweiften Klammern, trennen Semikolons Deklarationen, wobei das letzte Semikolon optional, aber als gute Praxis empfohlen wird.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, das heißt eine Liste von durch Semikolons getrennten Deklarationen, ohne die Anfangs- und Schlussklammern, kann innerhalb eines HTML-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs platziert werden.

## CSS-Regelsets

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel besteht darin, unterschiedliche Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS erlaubt dies, indem Bedingungen mit Deklarationsblöcken verknüpft werden. Jeder (gültige) Deklarationsblock wird von einem oder mehreren durch Komma getrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangestellt, die Bedingungen sind, die einige Elemente der Seite auswählen. Eine [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) und ein zugehöriger Deklarationsblock werden zusammen als **Regelset** oder oft als **Regel** bezeichnet.

Ein CSS-Regelset (oder eine Regel) wird im folgenden Diagramm visualisiert.

![Eine Gruppe von durch Komma getrennten Selektoren geht dem durch geschweifte Klammern begrenzten Deklarationsblock voraus, der mehrere Deklarationen enthält, die in Semikolons enden.](ruleset.png)

Da ein Element der Seite von mehreren Selektoren übereinstimmen kann und daher von mehreren Regeln, die möglicherweise eine gegebene Eigenschaft mehrfach enthalten, mit unterschiedlichen Werten, definiert der CSS-Standard, welche Vorrang hat und angewendet werden muss: dies wird als Kaskadenalgorithmus bezeichnet (siehe [Konfliktbehandlung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass auch wenn ein Regelset, das durch eine Gruppe von Selektoren charakterisiert wird, eine Art Abkürzung ist, die Regelsets mit jeweils einem einzigen Selektor ersetzt, dies nicht auf die Gültigkeit des Regelsets selbst zutrifft.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einziger Basisselektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudo-Elements oder einer Pseudo-Klasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel ignoriert (als ebenfalls ungültig).

## CSS-Anweisungen

Regelsets sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste von ihnen besteht. Es gibt jedoch andere Informationen, die ein Webautor im Stylesheet vermitteln möchte, wie den Zeichensatz, andere zu importierende externe Stylesheets, Schriftarteneinstellungen oder Zählerbeschreibungen und vieles mehr. Dafür werden andere und spezifische Arten von Anweisungen verwendet.

Eine **Anweisung** ist ein Baustein, der mit einem beliebigen Nicht-Leerzeichen-Zeichen beginnt und am ersten schließenden Klammer oder Semikolon endet (außerhalb eines Strings, nicht-escaped und nicht in einem anderen {}, () oder \[]-Paar enthalten).

![Ein Venn-Diagramm von Anweisungen, das zeigt, dass alle Regelsets verschachtelte Anweisungen sind, während einige At-Regeln verschachtelte Anweisungen sind, aber die meisten nicht. Alles, was keine At-Regel oder verschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsets** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen einer Bedingung zuordnen, die durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschrieben wird.
- **At-Regeln**, die mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung fortgesetzt werden, das heißt bis zum nächsten Semikolon (;) außerhalb eines Blocks oder dem Ende des nächsten Blocks. Jeder Typ von [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rules), definiert durch den Bezeichner, kann seine eigene interne Syntax und natürlich Semantik haben. Sie werden verwendet, um Metadateninformationen (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}) zu vermitteln.

Jede Anweisung, die kein Regelset oder eine At-Regel ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **verschachtelten Anweisungen**. Diese sind Anweisungen, die in einem bestimmten Subset von At-Regeln verwendet werden können – den _konditionalen Gruppierungsregeln_. Diese Anweisungen gelten nur, wenn eine spezifische Bedingung erfüllt ist: der Inhalt der `@media`-At-Regel wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die angegebene Bedingung erfüllt; der Inhalt der `@document`-At-Regel wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten innerhalb von konditionalen Gruppierungsregeln nur _Regelsets_ verwendet werden. Diese Einschränkung war sehr restriktiv und wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt, obwohl noch experimentell und nicht von jedem Browser unterstützt, können konditionale Gruppierungsregeln eine breitere Palette von Inhalten enthalten: Regelsets, aber auch einige, jedoch nicht alle, At-Regeln.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Syntax der Wertdefinition](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
- Werte
  - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Kurzformen von Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
