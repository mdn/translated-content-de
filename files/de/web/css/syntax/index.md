---
title: Syntax
slug: Web/CSS/Syntax
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS)) Sprache ist es, einer Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Eigenschaften wie Farben, Positionierungen oder Dekorationen darzustellen. Die _CSS-Syntax_ spiegelt dieses Ziel wider, und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner ist, ein lesbarer _Name_, der definiert, welche Eigenschaft berücksichtigt wird.
- Der **Wert**, der beschreibt, wie die Eigenschaft von der Engine behandelt werden muss. Jede Eigenschaft hat eine Menge gültiger Werte, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Setzen von CSS-Eigenschaften auf spezifische Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden, um es entsprechend zu gestalten und zu layouten.

Sowohl Eigenschaften als auch Werte sind standardmäßig in CSS nicht case-sensitiv. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, aber nicht unbedingt innerhalb, werden ignoriert.

![css syntax - declaration.png](css_syntax_-_declaration.png)

Es gibt [Hunderte verschiedener Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und praktisch eine endlose Anzahl verschiedener Werte. Nicht alle Paare aus Eigenschaften und Werten sind zulässig, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ betrachtet und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, das heißt in einer Struktur, die durch eine öffnende Klammer, `{` (U+007B LEFT CURLY BRACKET), und eine schließende Klammer, `}` (U+007D RIGHT CURLY BRACKET), begrenzt ist. Blöcke können manchmal verschachtelt sein, daher müssen öffnende und schließende Klammern übereinstimmen.

![css syntax - block.png](css_syntax_-_block.png)

Solche Blöcke werden naturgemäß **Deklarationsblöcke** genannt, und die Deklarationen darin werden durch ein Semikolon, `;` (U+003B SEMICOLON), getrennt. Ein Deklarationsblock kann leer sein, das heißt, keine Deklarationen enthalten. Leerzeichen um Deklarationen werden ignoriert. Die letzte Deklaration eines Blocks muss nicht durch ein Semikolon abgeschlossen werden, obwohl es oft als _guter Stil_ betrachtet wird, dies zu tun, da es verhindert, dass man es vergisst, wenn man den Block um eine weitere Deklaration erweitert.

Ein CSS-Deklarationsblock wird im folgenden Diagramm visualisiert.

![css syntax - declarations block.png](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, das heißt eine Liste von Semikolon-separierten Deklarationen, ohne die öffnende und schließende Klammer, kann in ein HTML-[`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur jede Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, unterschiedliche Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem es Bedingungen mit Deklarationsblöcken verknüpft. Jeder (gültige) Deklarationsblock wird von einem oder mehreren Komma-separierten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangestellt, die Bedingungen sind, durch die einige Elemente der Seite ausgewählt werden. Eine [Selektorenliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock werden zusammen als **Regelsatz**, oder oft einfach als **Regel**, bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im folgenden Diagramm visualisiert.

![css syntax - ruleset.png](ruleset.png)

Da ein Element der Seite durch mehrere Selektoren und daher durch mehrere Regeln potenziell mehrfach mit unterschiedlichen Werten versehen werden kann, definiert der CSS-Standard, welche von ihnen Vorrang hat und angewendet werden muss: Dies wird als Kaskadenalgorithmus bezeichnet (siehe [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass selbst wenn ein Regelsatz, der durch eine Gruppe von Selektoren charakterisiert ist, eine Art Abkürzung darstellt, um Regelsätze mit jeweils einem einzelnen Selektor zu ersetzen, dies nicht auf die Gültigkeit des Regelsatzes selbst zutrifft.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einzelner Basisselektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudo-Elements oder einer Pseudoklasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel als ungültig ebenfalls ignoriert.

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste davon besteht. Aber es gibt auch andere Informationen, die ein Webautor im Stylesheet vermitteln möchte, wie der Zeichensatz, weitere externe Stylesheets zum Importieren, Schriftarten oder Listenbeschreibungen und viele mehr. Um dies zu tun, werden andere und spezifische Arten von Anweisungen verwendet.

Eine **Anweisung** ist ein Baustein, der mit einem beliebigen Nicht-Leerzeichen beginnt und am ersten schließenden Klammerzeichen oder Semikolon endet (außerhalb eines Strings, nicht-escaped und nicht in ein weiteres {}, () oder []-Paar eingeschlossen).

![css syntax - statements Venn diag.png](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer Bedingung verbinden, die durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschrieben wird.
- **At-Regeln**, die mit einem @-Zeichen, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Bezeichner, und dann bis zum Ende der Anweisung fortfahren, das bis zum nächsten Semikolon (;) außerhalb eines Blocks oder bis zum Ende des nächsten Blocks reicht. Jeder Typ von [At-Regeln](/de/docs/Web/CSS/At-rule), definiert durch den Bezeichner, kann seine eigene interne Syntax und natürlich seine eigene Semantik haben. Sie werden verwendet, um Metadateninformationen zu übermitteln (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), konditionale Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}).

Jede Anweisung, die weder ein Regelsatz noch eine At-Regel ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **verschachtelten Anweisungen**. Diese sind Anweisungen, die in einem spezifischen Unterset von At-Regeln – den _konditionalen Gruppenregeln_ – verwendet werden können. Diese Anweisungen gelten nur, wenn eine spezifische Bedingung erfüllt ist: Der Inhalt der `@media`-At-Regel wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der Inhalt der `@document`-At-Regel wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten innerhalb konditionaler Gruppenregeln nur _Regelsätze_ verwendet werden. Das war sehr einschränkend und diese Beschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Nun können, obwohl noch experimentell und nicht von jedem Browser unterstützt, konditionale Gruppenregeln eine breitere Palette von Inhalten enthalten: Regelsätze, aber auch einige, jedoch nicht alle, At-Regeln.

## Siehe auch

- Wesentliche CSS-Konzepte:
  - **CSS-Syntax**
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randzusammenbruch](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
