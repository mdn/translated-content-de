---
title: Syntax
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS))-Sprache ist es, einer Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Merkmalen zu gestalten, wie Farben, Positionierung oder Dekorationen. Die _CSS-Syntax_ spiegelt dieses Ziel wider und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner ist, also ein menschenlesbarer _Name_, der definiert, welches Merkmal betrachtet wird.
- Der **Wert**, der beschreibt, wie das Merkmal von der Engine behandelt werden muss. Jede Eigenschaft hat eine Menge gültiger Werte, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Setzen von CSS-Eigenschaften auf spezifische Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden müssen, um es angemessen anzuordnen und zu gestalten.

Sowohl Eigenschaften als auch Werte sind standardmäßig in CSS nicht zwischen Groß- und Kleinschreibung unterscheidend. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, aber nicht notwendigerweise innerhalb, werden ignoriert.

![Eine CSS-Deklaration ist ein Paar aus Eigenschaft und Wert, mit einem Doppelpunkt, der die beiden Entitäten trennt, und einem Semikolon, das die Deklaration abschließt.](css_syntax_-_declaration.png)

In CSS gibt es [Hunderte verschiedener Eigenschaften](/de/docs/Web/CSS/Reference) und eine praktisch endlose Anzahl verschiedener Werte. Nicht alle Paare aus Eigenschaften und Werten sind erlaubt und jede Eigenschaft definiert, welche die gültigen Werte sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ betrachtet und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, das heißt in einer Struktur, die durch eine öffnende geschweifte Klammer, `{` (U+007B LEFT CURLY BRACKET), und eine schließende Klammer, `}` (U+007D RIGHT CURLY BRACKET), begrenzt wird. Blöcke können manchmal verschachtelt werden, daher müssen öffnende und schließende Klammern übereinstimmen.

![Zwei geschweifte Klammern begrenzen den Anfang und das Ende eines CSS-Blocks, mit CSS-Inhalt oder keinem Inhalt zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlich als **Deklarationsblöcke** bezeichnet und die Deklarationen darin sind durch ein Semikolon, `;` (U+003B SEMICOLON), getrennt. Ein Deklarationsblock kann leer sein, das heißt keine Deklaration enthalten. Leerzeichen um Deklarationen herum werden ignoriert. Die letzte Deklaration eines Blocks muss nicht mit einem Semikolon beendet werden, obwohl es oft als _guter Stil_ gilt, es zu tun, da es verhindert, dass man vergisst, es hinzuzufügen, wenn der Block mit einer weiteren Deklaration verlängert wird.

Ein CSS-Deklarationsblock wird im untenstehenden Diagramm visualisiert.

![Innerhalb eines CSS-Blocks, der von Klammern umschlossen ist, trennen Semikolons die Deklarationen, wobei das finale Semikolon optional, aber als gute Praxis empfohlen ist.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, das heißt eine Liste von durch Semikolons getrennten Deklarationen, ohne die initiale und schließende Klammern, kann innerhalb eines HTML [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs platziert werden.

## CSS-Regelsätze

Wenn Stylesheets nur darauf beschränkt wären, einer jeden Element der Webseite eine Deklaration anzuwenden, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, unterschiedliche Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem Bedingungen mit Deklarationsblöcken verknüpft werden. Jeder (gültige) Deklarationsblock wird von einem oder mehreren, durch Kommas getrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangestellt, die als Bedingungen dienen und bestimmte Elemente der Seite auswählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock werden zusammen als **Regelsatz** oder oft als **Regel** bezeichnet.

Ein CSS-Regelsatz (oder eine Regel) wird im untenstehenden Diagramm visualisiert.

![Eine Gruppe aus durch Kommas getrennten Selektoren geht dem von Klammern begrenzten Deklarationsblock voraus, der mehrere Deklarationen enthält, die mit Semikolons enden.](ruleset.png)

Da ein Element der Seite durch mehrere Selektoren und daher durch mehrere Regeln, die möglicherweise eine gegebene Eigenschaft mit unterschiedlichen Werten mehrfach enthalten, übereinstimmen kann, definiert der CSS-Standard, welche den Vorrang vor anderen hat und angewendet werden muss: Dies wird als Kaskadenalgorithmus bezeichnet (siehe [Konflikte beheben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass auch wenn ein durch eine Gruppe von Selektoren gekennzeichneter Regelsatz eine Art Abkürzung darstellt, die Regeln mit jeweils einem einzelnen Selektor ersetzt, dies nicht auf die Gültigkeit des Regelsatzes selbst zutrifft.
>
> Dies hat eine wichtige Konsequenz: Wenn ein einziger Basisselektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudoelements oder einer Pseudoklasse, ist der gesamte _Selektor_ ungültig, und daher wird die gesamte Regel ignoriert (da ebenfalls ungültig).

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste davon besteht. Aber es gibt weitere Informationen, die ein Webautor im Stylesheet vermitteln möchte, wie den Zeichensatz, andere externe Stylesheets zum Importieren, Schriftartenbeschreibungen oder Listen-Header-Beschreibungen und vieles mehr. Es werden andere und spezifische Arten von Anweisungen verwendet, um dies zu tun.

Eine **Anweisung** ist ein Baustein, der mit beliebigen Nicht-Leerzeichen-Zeichen beginnt und am ersten schließenden Klammer oder Semikolon endet (außerhalb einer Zeichenkette, nicht-escaped und nicht in einem anderen {}, () oder \[]-Paar enthalten).

![Ein Venn-Diagramm der Anweisungen stellt fest, dass alle Regelsätze verschachtelte Anweisungen sind, während einige At-Rules verschachtelte Anweisungen sind, die meisten aber nicht. Alles, was kein At-Rule oder verschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschriebenen Bedingung verknüpfen.
- **At-Rules**, die mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung fortgesetzt werden, das heißt bis zum nächsten Semikolon (;) außerhalb eines Blocks oder dem Ende des nächsten Blocks. Jede Art von [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule), die durch den Bezeichner definiert wird, kann ihre eigene interne Syntax und Semantik haben. Sie werden verwendet, um Meta-Daten-Informationen (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}) zu vermitteln.

Jede Anweisung, die kein Regelsatz oder At-Rule ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **verschachtelten Anweisungen**. Diese sind Anweisungen, die in einem spezifischen Unterset von At-Rules – den _bedingten Gruppenregeln_ – verwendet werden können. Diese Anweisungen gelten nur, wenn eine bestimmte Bedingung erfüllt ist: Der Inhalt der `@media`-At-Rule wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der Inhalt der `@document`-At-Rule wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt und so weiter. In CSS1 und CSS2.1 konnten innerhalb von bedingten Gruppenregeln nur _Regelsätze_ verwendet werden. Das war sehr einschränkend, und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt, obwohl noch experimentell und nicht von jedem Browser unterstützt, können bedingte Gruppenregeln eine größere Auswahl an Inhalten enthalten: Regelsätze, aber auch einige, aber nicht alle, At-Rules.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- Werte
  - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
