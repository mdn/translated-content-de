---
title: Syntax
slug: Web/CSS/Syntax
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS)) Sprache besteht darin, einer Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Merkmalen wie Farben, Positionierung oder Dekorationen zu versehen. Die _CSS-Syntax_ spiegelt dieses Ziel wider und ihre grundlegenden Bausteine sind:

- Die **Property** ist ein Bezeichner, also ein menschenlesbarer _Name_, der definiert, welches Merkmal betrachtet wird.
- Der **Wert** beschreibt, wie das Merkmal von der Engine gehandhabt werden muss. Jede Property hat eine Menge gültiger Werte, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Festlegen von CSS-Properties auf bestimmte Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Property und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden, um es angemessen zu layouten und zu stylen.

Sowohl Properties als auch Werte sind in CSS standardmäßig groß-/kleinschreibungsunempfindlich. Das Paar wird durch einen Doppelpunkt, '`:`' (`U+003A COLON`), getrennt, und Leerzeichen vor, zwischen und nach Properties und Werten, jedoch nicht unbedingt innerhalb, werden ignoriert.

![css syntax - declaration.png](css_syntax_-_declaration.png)

Es gibt [hunderte verschiedene Properties](/de/docs/Web/CSS/Reference) in CSS und eine praktisch endlose Anzahl verschiedener Werte. Nicht alle Kombinationen von Properties und Werten sind erlaubt, und jede Property definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Property nicht gültig ist, wird die Deklaration als _ungültig_ betrachtet und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcke** gruppiert, also in eine Struktur, die durch eine öffnende Klammer, '`{`' (`U+007B LEFT CURLY BRACKET`), und eine schließende Klammer, '`}`' (`U+007D RIGHT CURLY BRACKET`), begrenzt ist. Blöcke können manchmal verschachtelt sein, daher müssen öffnende und schließende Klammern übereinstimmen.

![css syntax - block.png](css_syntax_-_block.png)

Solche Blöcke werden natürlich als **Deklarationsblöcke** bezeichnet, und die Deklarationen innerhalb werden durch ein Semikolon, '`;`' (`U+003B SEMICOLON`), getrennt. Ein Deklarationsblock kann leer sein, das heißt, keine Deklarationen enthalten. Leerzeichen um Deklarationen werden ignoriert. Die letzte Deklaration eines Blocks muss nicht durch ein Semikolon beendet werden, obwohl es oft als _guter Stil_ angesehen wird, dies zu tun, da es verhindert, das Hinzufügen zu vergessen, wenn der Block um eine weitere Deklaration erweitert wird.

Ein CSS-Deklarationsblock wird im unten stehenden Diagramm dargestellt.

![css syntax - declarations block.png](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, also eine Liste von durch Semikolon getrennten Deklarationen ohne die ersten und abschließenden Klammern, kann in einem HTML [`style`](/de/docs/Web/HTML/Global_attributes#style) Attribut eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, verschiedene Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS erlaubt dies, indem Bedingungen mit Deklarationsblöcken verknüpft werden. Jeder (gültige) Deklarationsblock wird von einem oder mehreren durch Kommas getrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangestellt, bei denen es sich um Bedingungen handelt, die einige Elemente der Seite auswählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock zusammen werden als **Regelsatz** oder oft als **Regel** bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im unten stehenden Diagramm dargestellt.

![css syntax - ruleset.png](ruleset.png)

Da ein Element der Seite durch mehrere Selektoren übereinstimmen kann und daher durch mehrere Regeln potenziell ein gegebenes Merkmal mehrmals mit unterschiedlichen Werten enthalten kann, definiert der CSS-Standard, welche Regel Vorrang hat und angewendet werden muss: Dies wird als [Cascading](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) Algorithmus bezeichnet.

> [!NOTE]
> Es ist wichtig zu beachten, dass, auch wenn ein Regelsatz, der durch eine Gruppe von Selektoren charakterisiert ist, eine Art von Kurzform darstellt, die Regelsätze mit einem einzelnen Selektor jeweils ersetzt, dies nicht für die Gültigkeit des Regelsatzes selbst gilt.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einziger grundlegender Selektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudo-Elements oder einer Pseudo-Klasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel ignoriert (als ebenfalls ungültig).

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste von ihnen besteht. Aber es gibt andere Informationen, die ein Webautor im Stylesheet vermitteln möchte, wie das Zeichensatz, andere externe Stylesheets zum Importieren, Schriftartenbeschreibungen oder Listenzähler Beschreibungen und vieles mehr. Es werden andere und spezifische Arten von Anweisungen verwendet, um das zu tun.

Eine **Anweisung** ist ein Baustein, der mit beliebigen Nicht-Leerzeichen-Zeichen beginnt und am ersten abschließenden Klammer oder Semikolon endet (außerhalb einer Zeichenkette, nicht-escape und nicht in einem anderen {}, () oder \[] Paar enthalten).

![css syntax - statements Venn diag.png](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen an eine Bedingung binden, die durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschrieben wird.
- **At-Regeln**, die mit einem At-Zeichen, '`@`' (`U+0040 COMMERCIAL AT`), beginnen, gefolgt von einem Bezeichner und dann weiter bis zum Ende der Anweisung, das heißt bis zum nächsten Semikolon ( ; ) außerhalb eines Blocks oder das Ende des nächsten Blocks. Jede Art von [At-Regeln](/de/docs/Web/CSS/At-rule), definiert durch den Bezeichner, kann ihre eigene interne Syntax und Semantik haben. Sie werden verwendet, um Meta-Dateninformationen (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}) zu übermitteln.

Jede Anweisung, die weder ein Regelsatz noch eine At-Regel ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine andere Gruppe von Anweisungen - die **verschachtelten Anweisungen**. Diese sind Anweisungen, die in einem spezifischen Unterbereich von At-Regeln – den bedingten Gruppenregeln – verwendet werden können. Diese Anweisungen werden nur angewendet, wenn eine spezifische Bedingung erfüllt ist: Der `@media` At-Regelinhalt wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der `@document` At-Regelinhalt wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, usw. In CSS1 und CSS2.1 konnten nur _Regelsätze_ innerhalb der bedingten Gruppenregeln verwendet werden. Das war sehr einschränkend und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt, obwohl noch experimentell und nicht von jedem Browser unterstützt, können bedingte Gruppenregeln eine breitere Palette von Inhalten enthalten: Regelsätze, aber auch einige, aber nicht alle, At-Regeln.

## Siehe auch

- Grundkonzepte von CSS:
  - **CSS-Syntax**
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzform-Properties](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
