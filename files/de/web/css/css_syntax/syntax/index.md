---
title: "Einführung in die CSS-Syntax: Deklarationen, Regelsätze und Anweisungen"
short-title: Introduction
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS)) Sprache besteht darin, einer Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Eigenschaften, wie Farben, Positionierung oder Dekorationen, zu zeichnen. Die _CSS-Syntax_ spiegelt dieses Ziel wider und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner ist, also ein menschenlesbarer _Name_, der definiert, welche Funktion betrachtet wird.
- Der **Wert**, der beschreibt, wie die Funktion von der Engine gehandhabt werden muss. Jede Eigenschaft hat eine Reihe gültiger Werte, definiert durch eine formale Grammatik, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Setzen von CSS-Eigenschaften auf spezifische Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite anzuwenden sind, um es angemessen zu layouten und zu gestalten.

Sowohl Eigenschaften als auch Werte sind standardmäßig in CSS groß-/kleinschreibungsunabhängig. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, aber nicht notwendigerweise innerhalb, werden ignoriert.

![Eine CSS-Deklaration ist ein Paar aus Eigenschaft und Wert, mit einem Doppelpunkt zwischen den beiden Entitäten und einem Semikolon, das die Deklaration abschließt.](css_syntax_-_declaration.png)

Es gibt [hunderte verschiedene Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch unbegrenzte Anzahl verschiedener Werte. Nicht alle Paare aus Eigenschaften und Werten sind erlaubt, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ betrachtet und vollständig von der CSS-Engine ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, das heißt in einer Struktur, die durch eine öffnende Klammer, `{` (U+007B LEFT CURLY BRACKET), und eine schließende Klammer, `}` (U+007D RIGHT CURLY BRACKET), begrenzt ist. Blöcke können manchmal verschachtelt sein, daher müssen öffnende und schließende Klammern übereinstimmen.

![Zwei Klammern begrenzen den Anfang und das Ende eines CSS-Blocks, mit CSS-Inhalt oder keinem Inhalt zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlicherweise als **Deklarationsblöcke** bezeichnet, und die Deklarationen innerhalb dieser Blöcke werden durch ein Semikolon, `;` (U+003B SEMICOLON), getrennt. Ein Deklarationsblock kann leer sein, also keine Deklaration enthalten. Leerzeichen um Deklarationen herum werden ignoriert. Die letzte Deklaration eines Blocks muss nicht mit einem Semikolon abgeschlossen werden, obwohl es oft als _guter Stil_ betrachtet wird, dies zu tun, da es verhindert, das Hinzufügen eines weiteren Deklarationselements zu vergessen, wenn der Block erweitert wird.

Ein CSS-Deklarationsblock wird im Diagramm unten visualisiert.

![Innerhalb eines CSS-Blocks, der in Klammern eingeschlossen ist, trennen Semikolons Deklarationen, wobei das letzte Semikolon optional, aber als gute Praxis empfohlen wird.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, also eine Liste von durch Semikolons getrennten Deklarationen, ohne die anfänglichen und abschließenden Klammern, kann innerhalb eines HTML [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributs eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur Deklarationen auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, verschiedene Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem es Bedingungen mit Deklarationsblöcken assoziiert. Jeder (gültige) Deklarationsblock wird durch einen oder mehrere kommaseparierte [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangehenden, die Bedingungen darstellen, durch die einige Elemente der Seite ausgewählt werden. Eine [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) und ein damit verbundener Deklarationsblock werden zusammen als **Regelsatz**, oder oft als **Regel**, bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im Diagramm unten visualisiert.

![Eine Gruppe von durch Kommas getrennten Selektoren geht dem durch Klammern abgegrenzten Deklarationsblock voraus, der mehrere Deklarationen enthält, die mit Semikolons enden.](ruleset.png)

Da ein Element der Seite durch mehrere Selektoren und daher durch mehrere Regeln potenziell mehrmals mit einer gegebenen Eigenschaft, aber mit unterschiedlichen Werten übereinstimmen kann, definiert der CSS-Standard, welche Eigenschaft Vorrang vor der anderen hat und angewendet werden muss: Dies wird als Kaskadenalgorithmus bezeichnet (siehe [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass auch wenn ein durch eine Gruppe von Selektoren charakterisierter Regelsatz eine Art Kurzschrift ist, die Regelsätze mit einem Einzelselektor ersetzt, dies nicht auf die Gültigkeit des Regelsatzes selbst zutrifft.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einziger Basisselektor ungültig ist, wie zum Beispiel bei der Verwendung eines unbekannten Pseudoelements oder einer Pseudoklasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel ignoriert (als ebenfalls ungültig).

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das häufig nur aus einer großen Liste von ihnen besteht. Aber es gibt andere Informationen, die ein Webautor im Stylesheet vermitteln möchte, wie den Zeichensatz, andere externe Stylesheets zum Importieren, Schriftgesicht- oder Listen-Zählerbeschreibungen und viele mehr. Dafür werden andere und spezifische Arten von Anweisungen verwendet.

Eine **Anweisung** ist ein Baustein, der mit nicht-leeren Zeichen beginnt und beim ersten abschließenden Klammerzeichen oder Semikolon endet (außerhalb eines Strings, nicht maskiert und nicht in ein anderes {}, () oder \[] Paar eingeschlossen).

![Ein Venn-Diagramm von Anweisungen zeigt, dass alle Regelsätze verschachtelte Anweisungen sind, während einige At-Regeln verschachtelte Anweisungen sind, aber die meisten nicht. Alles, was weder eine At-Regel noch verschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschriebenen Bedingung verknüpfen.
- **At-Regeln**, die mit einem at-Zeichen, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung weitergehen, also bis zum nächsten Semikolon (;) außerhalb eines Blocks oder dem Ende des nächsten Blocks. Jeder Art von [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), definiert durch den Bezeichner, kann ihre eigene interne Syntax und Semantik haben. Sie werden zur Übermittlung von Metadateninformationen (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingten Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibenden Informationen (wie {{ cssxref("@font-face") }}) verwendet.

Jede Anweisung, die weder ein Regelsatz noch eine At-Regel ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **verschachtelten Anweisungen**. Diese sind Anweisungen, die in einer bestimmten Untergruppe von At-Regeln verwendet werden können – den _bedingten Gruppenregeln_. Diese Anweisungen gelten nur, wenn eine bestimmte Bedingung erfüllt ist: der `@media` At-Regelinhalt wird nur angewendet, wenn das Gerät, auf dem der Browser ausgeführt wird, der ausgedrückten Bedingung entspricht; der `@document` At-Regelinhalt wird nur angewendet, wenn die aktuelle Seite einigen Bedingungen entspricht und so weiter. In CSS1 und CSS2.1 konnten nur _Regelsätze_ innerhalb bedingter Gruppenregeln verwendet werden. Das war sehr einschränkend und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt, obwohl noch experimentell und nicht von jedem Browser unterstützt, können bedingte Gruppenregeln eine breitere Palette an Inhalten enthalten: Regelsätze, aber auch einige, jedoch nicht alle, At-Regeln.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
- Werte
  - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Kurzschreibweiseigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
