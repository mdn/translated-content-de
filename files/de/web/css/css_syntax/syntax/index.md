---
title: Syntax
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS))-Sprache ist es, eine Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Merkmalen wie Farben, Positionierung oder Dekorationen zu versehen. Die _CSS-Syntax_ spiegelt dieses Ziel wider, und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, ein Bezeichner, der ein für Menschen lesbarer _Name_ ist und definiert, welches Merkmal berücksichtigt wird.
- Der **Wert**, der beschreibt, wie das Merkmal von der Engine gehandhabt werden muss. Jede Eigenschaft hat eine Menge gültiger Werte, definiert durch eine formale Grammatik, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Festlegen von CSS-Eigenschaften auf spezifische Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden, um es entsprechend zu layouten und zu gestalten.

Sowohl Eigenschaften als auch Werte sind standardmäßig in CSS nicht case-sensitiv. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, dazwischen und nach Eigenschaften und Werten, jedoch nicht notwendigerweise innerhalb, werden ignoriert.

![Eine CSS-Deklaration ist ein Paar aus Eigenschaft und Wert, mit einem Doppelpunkt, der die beiden Entitäten trennt, und einem Semikolon, das die Deklaration abschließt.](css_syntax_-_declaration.png)

Es gibt [Hunderte verschiedener Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch endlose Anzahl verschiedener Werte. Nicht alle Paare aus Eigenschaften und Werten sind erlaubt, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ angesehen und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, das heißt in einer Struktur, die durch eine öffnende Klammer, `{` (U+007B LEFT CURLY BRACKET), und eine schließende, `}` (U+007D RIGHT CURLY BRACKET) begrenzt wird. Blöcke können manchmal verschachtelt werden, daher müssen öffnende und schließende Klammern übereinstimmen.

![Zwei Klammern begrenzen den Anfang und das Ende eines CSS-Blocks, mit CSS-Inhalten oder ohne Inhalte zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlich als **Deklarationsblöcke** bezeichnet, und die Deklarationen innerhalb von ihnen werden durch ein Semikolon, `;` (U+003B SEMICOLON), getrennt. Ein Deklarationsblock kann leer sein, das heißt, dass er keine Deklarationen enthält. Leerzeichen um Deklarationen werden ignoriert. Die letzte Deklaration eines Blocks muss nicht durch ein Semikolon abgeschlossen werden, obwohl es oft als _guter Stil_ angesehen wird, dies zu tun, da es verhindert, dass man vergisst, es hinzuzufügen, wenn der Block um eine weitere Deklaration erweitert wird.

Ein CSS-Deklarationsblock wird im folgenden Diagramm dargestellt.

![Innerhalb eines CSS-Blocks, umschlossen von Klammern, trennen Semikolons Deklarationen, wobei das abschließende Semikolon optional, aber als gute Praxis empfohlen wird.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, das heißt eine Liste von mit Semikolon getrennten Deklarationen ohne die anfänglichen und schließenden Klammern, kann in ein HTML-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style) eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, unterschiedliche Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem Bedingungen mit Deklarationsblöcken verknüpft werden. Jeder (gültige) Deklarationsblock wird von einem oder mehreren durch Kommas getrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangestellt, die Bedingungen darstellen, die einige Elemente der Seite auswählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock werden zusammen als **Regelsatz** oder oft als **Regel** bezeichnet.

Ein CSS-Regelsatz (oder eine Regel) wird im folgenden Diagramm dargestellt.

![Eine Gruppe von durch Kommas getrennten Selektoren steht vor dem durch Klammern begrenzten Deklarationsblock, der mehrere in Semikolons endende Deklarationen enthält.](ruleset.png)

Da ein Element der Seite möglicherweise von mehreren Selektoren ausgewählt wird und daher durch mehrere Regeln, die möglicherweise eine gegebene Eigenschaft mehrmals mit unterschiedlichen Werten enthalten, definiert der CSS-Standard, welche von ihnen Vorrang hat und angewendet werden muss: dies wird als Kaskadenalgorithmus bezeichnet (siehe [Konfliktbehandlung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass selbst wenn ein Regelsatz, der durch eine Gruppe von Selektoren gekennzeichnet ist, eine Art Abkürzung ist, die Regeln mit jeweils einem einzelnen Selektor ersetzt, dies nicht für die Gültigkeit des Regelsatzes selbst gilt.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einziger Basisselektor ungültig ist, z. B. bei der Verwendung eines unbekannten Pseudoelements oder einer Pseudoklasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel (ebenfalls als ungültig) ignoriert.

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste von ihnen besteht. Aber es gibt andere Informationen, die ein Webautor im Stylesheet vermitteln möchte, wie das Zeichensatz, andere externe Stylesheets zum Importieren, Schriftarten oder Zählerbeschreibungen und viele mehr. Dazu werden andere und spezifische Arten von Anweisungen verwendet.

Eine **Anweisung** ist ein Baustein, der mit beliebigen Nicht-Leerzeichen-Zeichen beginnt und beim ersten schließenden Klammer oder Semikolon (außerhalb eines Strings, nicht maskiert und nicht in einem anderen {}, () oder \[] Paar enthalten) endet.

![Ein Venn-Diagramm der Anweisungen, das zeigt, dass alle Regelsätze geschachtelte Anweisungen sind, während einige At-Regeln geschachtelte Anweisungen sind, die meisten jedoch nicht. Alles, was keine At-Regel oder geschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschriebenen Bedingung verknüpfen.
- **At-Regeln**, die mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Bezeichner und dann weiter bis zum Ende der Anweisung, das heißt bis zum nächsten Semikolon (;) außerhalb eines Blocks oder dem Ende des nächsten Blocks. Jeder Typ von [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), definiert durch den Bezeichner, kann seine eigene interne Syntax und Semantik haben. Sie werden verwendet, um Metadaten-Informationen zu übermitteln (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}).

Jede Anweisung, die kein Regelsatz oder eine At-Regel ist, ist ungültig und wird ignoriert.

### Geschachtelte Anweisungen

Es gibt eine andere Gruppe von Anweisungen – die **geschachtelten Anweisungen**. Diese sind Anweisungen, die in einem spezifischen Teilmengen von At-Regeln, den _bedingten Gruppenregeln_, verwendet werden können. Diese Anweisungen werden nur angewendet, wenn eine spezifische Bedingung erfüllt ist: der `@media` At-Regel-Inhalt wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der `@document` At-Regel-Inhalt wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten nur _Regelsätze_ innerhalb bedingter Gruppenregeln verwendet werden. Das war sehr einschränkend und diese Einschränkung wurde in [_CSS Bedingte Regeln Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt können, obwohl immer noch experimentell und nicht von jedem Browser unterstützt, bedingte Gruppenregeln eine breitere Palette von Inhalten enthalten: Regelsätze, aber auch einige, aber nicht alle, At-Regeln.

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
  - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
