---
title: Syntax
slug: Web/CSS/Syntax
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS)) Sprache ist es, einer Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Merkmalen wie Farben, Positionierung oder Dekorationen darzustellen. Die _CSS-Syntax_ spiegelt dieses Ziel wider, und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner ist, ein leicht lesbarer _Name_, der definiert, welches Merkmal betrachtet wird.
- Der **Wert**, der beschreibt, wie das Merkmal von der Engine behandelt werden muss. Jede Eigenschaft hat eine Menge gültiger Werte, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Setzen von CSS-Eigenschaften auf spezifische Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden müssen, um es entsprechend zu layouten und zu gestalten.

Sowohl Eigenschaften als auch Werte sind standardmäßig in CSS nicht case-sensitiv. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten werden ignoriert, nicht jedoch innerhalb.

![css syntax - declaration.png](css_syntax_-_declaration.png)

Es gibt [Hunderte von verschiedenen Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch endlose Anzahl unterschiedlicher Werte. Nicht alle Paare von Eigenschaften und Werten sind erlaubt, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Eigenschaft ungültig ist, wird die Deklaration als _ungültig_ betrachtet und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, d.h. in einer Struktur, die durch eine öffnende geschweifte Klammer, `{` (U+007B LEFT CURLY BRACKET), und eine schließende, `}` (U+007D RIGHT CURLY BRACKET), begrenzt wird. Blöcke können manchmal verschachtelt werden, daher müssen öffnende und schließende Klammern übereinstimmen.

![css syntax - block.png](css_syntax_-_block.png)

Solche Blöcke werden natürlicherweise **Deklarationsblöcke** genannt und die darin enthaltenen Deklarationen werden durch ein Semikolon, `;` (U+003B SEMICOLON), getrennt. Ein Deklarationsblock kann leer sein, d.h. keine Deklaration enthalten. Leerzeichen um Deklarationen werden ignoriert. Die letzte Deklaration eines Blocks muss nicht durch ein Semikolon beendet werden, obwohl es oft als _guter Stil_ angesehen wird, dies zu tun, da es verhindert, das Hinzufügen zu vergessen, wenn der Block mit einer weiteren Deklaration erweitert wird.

Ein CSS-Deklarationsblock wird im unten stehenden Diagramm visualisiert.

![css syntax - declarations block.png](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, das heißt eine Liste von Semikolon-getrennten Deklarationen ohne die anfänglichen und schließenden Klammern, kann innerhalb eines HTML [`style`](/de/docs/Web/HTML/Global_attributes#style) Attributs eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur einer Erklärung auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, verschiedene Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem es Bedingungen mit Deklarationsblöcken verknüpft. Jeder (gültige) Deklarationsblock wird von einem oder mehreren kommagetrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangestellt, die Bedingungen sind, um einige Elemente der Seite auszuwählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock werden zusammen als **Regelsatz**, oder oft einfach als **Regel**, bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im folgenden Diagramm visualisiert.

![css syntax - ruleset.png](ruleset.png)

Da ein Element der Seite von mehreren Selektoren und daher von mehreren Regeln, die möglicherweise eine gegebene Eigenschaft mehrfach mit unterschiedlichen Werten enthalten, übereinstimmen kann, definiert der CSS-Standard, welche Vorrang hat und angewendet werden muss: dies wird als [Kaskadenalgorithmus](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) bezeichnet.

> [!NOTE]
> Es ist wichtig zu beachten, dass, auch wenn ein Regelsatz, der durch eine Gruppe von Selektoren gekennzeichnet ist, eine Art Abkürzung darstellt, die Regelsätze mit jeweils einem einzelnen Selektor ersetzt, dies nicht für die Gültigkeit des Regelsatzes selbst gilt.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einzelner Basisselektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudoelements oder einer Pseudoklasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel ignoriert (als ebenfalls ungültig).

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft aus nur einer großen Liste von ihnen besteht. Aber es gibt andere Informationen, die ein Webautor im Stylesheet vermitteln möchte, wie das Zeichensatz, andere externe Stylesheets zum Importieren, Schriftgesicht- oder Listenanzeigebeschreibungen und viele mehr. Dafür werden andere und spezifische Arten von Anweisungen verwendet.

Eine **Anweisung** ist ein Baustein, der mit beliebigen nicht-leeren Zeichen beginnt und am ersten schließenden Klammer oder Semikolon endet (außerhalb eines Strings, nicht-escape und nicht in ein anderes {}, () oder \[]-Paar eingeschlossen).

![css syntax - statements Venn diag.png](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, einer Bedingung, die durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschrieben wird, eine Sammlung von CSS-Deklarationen zuordnen.
- **At-Rules**, die mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung fortfahren, also bis zum nächsten Semikolon (;) außerhalb eines Blocks oder dem Ende des nächsten Blocks. Jeder Typ von [At-Rules](/de/docs/Web/CSS/At-rule), definiert durch den Bezeichner, kann seine eigene interne Syntax und natürlich Semantik haben. Sie werden verwendet, um Meta-Daten-Informationen (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}) zu übermitteln.

Jede Anweisung, die kein Regelsatz oder eine At-Rule ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **verschachtelten Anweisungen**. Diese sind Anweisungen, die in einem spezifischen Unterbereich von At-Rules – den _bedingten Gruppenregeln_ – verwendet werden können. Diese Anweisungen gelten nur, wenn eine spezifische Bedingung erfüllt ist: der Inhalt der `@media`-Regel wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der Inhalt der `@document`-Regel wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten nur _Regelsätze_ innerhalb bedingter Gruppenregeln verwendet werden. Das war sehr einschränkend und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt können, obwohl noch experimentell und nicht von jedem Browser unterstützt, bedingte Gruppenregeln eine breitere Palette von Inhalten enthalten: Regelsätze, aber auch einige, aber nicht alle, At-Rules.

## Siehe auch

- Wichtige Konzepte in CSS:
  - **CSS-Syntax**
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randzusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wert-Definitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
