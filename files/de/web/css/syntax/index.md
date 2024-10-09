---
title: Syntax
slug: Web/CSS/Syntax
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

Das grundlegende Ziel der Cascading Stylesheet- (CSS) Sprache ist es, einer Browser-Engine zu ermöglichen, Elemente der Seite mit bestimmten Merkmalen wie Farben, Positionierung oder Dekorationen zu zeichnen. Die _CSS-Syntax_ spiegelt dieses Ziel wider und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner ist, also ein für Menschen lesbarer _Name_, der definiert, welches Merkmal betrachtet wird.
- Der **Wert**, der beschreibt, wie das Merkmal von der Engine behandelt werden muss. Jede Eigenschaft hat eine Menge gültiger Werte, definiert durch eine formale Grammatik, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

CSS-Eigenschaften auf bestimmte Werte festzulegen ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird **Deklaration** genannt, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden, um es angemessen anzuordnen und zu stylen.

Sowohl Eigenschaften als auch Werte sind standardmäßig in CSS nicht groß- und kleinschreibungssensitiv. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, aber nicht unbedingt innerhalb, werden ignoriert.

![css syntax - declaration.png](css_syntax_-_declaration.png)

Es gibt [Hunderte verschiedene Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch endlose Anzahl verschiedener Werte. Nicht alle Paare von Eigenschaften und Werten sind erlaubt, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine bestimmte Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ angesehen und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, die durch eine öffnende Klammer `{` (U+007B LEFT CURLY BRACKET) und eine schließende Klammer `}` (U+007D RIGHT CURLY BRACKET) begrenzt sind. Blöcke können manchmal geschachtelt werden, daher müssen öffnende und schließende Klammern übereinstimmen.

![css syntax - block.png](css_syntax_-_block.png)

Solche Blöcke werden natürlicherweise **Deklarationsblöcke** genannt, und die darin enthaltenen Deklarationen werden durch ein Semikolon `;` (U+003B SEMICOLON) getrennt. Ein Deklarationsblock kann leer sein, das heißt, keine Deklaration enthalten. Leerzeichen um Deklarationen herum werden ignoriert. Die letzte Deklaration eines Blocks muss nicht durch ein Semikolon abgeschlossen werden, obwohl es oft als _gute Praxis_ betrachtet wird, dies zu tun, da es verhindert, dass man vergisst, es hinzuzufügen, wenn der Block mit einer weiteren Deklaration erweitert wird.

Ein CSS-Deklarationsblock wird im folgenden Diagramm dargestellt.

![css syntax - declarations block.png](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, das heißt, eine Liste von durch Semikolons getrennten Deklarationen, ohne die Anfangs- und Schlussklammern, kann innerhalb eines HTML-`style`-Attributs platziert werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, unterschiedliche Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem es Bedingungen mit Deklarationsblöcken verknüpft. Jeder (gültige) Deklarationsblock wird von einem oder mehreren kommagetrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangegangen, die Bedingungen darstellen, die einige Elemente der Seite auswählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock zusammen werden als **Regelsatz** oder oft als **Regel** bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im folgenden Diagramm dargestellt.

![css syntax - ruleset.png](ruleset.png)

Da ein Element der Seite durch mehrere Selektoren und somit durch mehrere Regeln, die eine bestimmte Eigenschaft mehrmals mit unterschiedlichen Werten enthalten können, übereinstimmen kann, definiert der CSS-Standard, welche Eigenschaft Vorrang vor anderen hat und angewendet werden muss: Dies wird als der [Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)-Algorithmus bezeichnet.

> [!NOTE]
> Es ist wichtig zu beachten, dass selbst wenn ein Regelsatz, der durch eine Gruppe von Selektoren gekennzeichnet ist, eine Art Abkürzung darstellt, die Regeln mit jeweils einem einzelnen Selektor ersetzt, dies nicht für die Gültigkeit des Regelsatzes selbst gilt.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einzelner Grundselektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudoelements oder einer Pseudoklasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel (ebenfalls als ungültig) ignoriert.

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste davon besteht. Es gibt jedoch andere Informationen, die ein Webautor im Stylesheet vermitteln möchte, wie den Zeichensatz, andere zu importierende externe Stylesheets, Schriftartenbeschreibungen oder Zählerlistenbeschreibungen und viele mehr. Dafür werden andere und spezielle Arten von Anweisungen verwendet.

Eine **Anweisung** ist ein Baustein, der mit einem beliebigen Nicht-Leerzeichen-Zeichen beginnt und beim ersten abschließenden oder Semikolon endet (außerhalb einer Zeichenkette, nicht-eskaped und nicht in ein weiteres {}, () oder \[]-Paar einbezogen).

![css syntax - statements Venn diag.png](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer Bedingung verknüpfen, die durch einen [Selector](/de/docs/Web/CSS/CSS_selectors) beschrieben wird.
- **At-Regeln**, die mit einem Klammeraffen `@` (U+0040 COMMERCIAL AT) beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung weitergehen, das heißt, bis zum nächsten Semikolon (;) außerhalb eines Blocks oder zum Ende des nächsten Blocks. Jeder Typ von [At-Regeln](/de/docs/Web/CSS/At-rule), definiert durch den Bezeichner, kann seine eigene interne Syntax und Semantik haben. Sie werden verwendet, um Metadateninformationen (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}) zu übermitteln.

Jede Anweisung, die kein Regelsatz oder eine At-Regel ist, ist ungültig und wird ignoriert.

### Geschachtelte Anweisungen

Es gibt eine andere Gruppe von Anweisungen – die **geschachtelten Anweisungen**. Diese sind Anweisungen, die in einem spezifischen Subset von At-Regeln verwendet werden können – den _bedingten Gruppenregeln_. Diese Anweisungen gelten nur, wenn eine bestimmte Bedingung erfüllt ist: Der Inhalt der At-Regel `@media` wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der Inhalt der `@document`-At-Regel wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten nur _Regelsätze_ innerhalb von bedingten Gruppenregeln verwendet werden. Das war sehr einschränkend, und diese Beschränkung wurde in [_CSS-Bedingungen Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt können, obwohl immer noch experimentell und nicht von jedem Browser unterstützt, bedingte Gruppenregeln eine breitere Palette von Inhalten enthalten: Regelsätze, aber auch einige, jedoch nicht alle, At-Regeln.

## Siehe auch

- Zentrale CSS-Konzepte:
  - **CSS-Syntax**
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modelle](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Gebrauchte Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wert-Definitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise der Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
