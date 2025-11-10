---
title: "Einführung in die CSS-Syntax: Deklarationen, Regelsätze und Anweisungen"
short-title: Introduction
slug: Web/CSS/Guides/Syntax/Introduction
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS)) Sprache besteht darin, einer Browser-Engine zu ermöglichen, Elemente der Seite mit bestimmten Merkmalen zu gestalten, wie Farben, Positionierung oder Dekorationen. Die _CSS-Syntax_ spiegelt dieses Ziel wider und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner ist, also ein menschenlesbarer _Name_, der definiert, welches Merkmal betrachtet wird.
- Der **Wert**, der beschreibt, wie das Merkmal von der Engine behandelt werden muss. Jede Eigenschaft hat eine Menge gültiger Werte, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Setzen von CSS-Eigenschaften auf bestimmte Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden müssen, um es angemessen zu layouten und zu gestalten.

Sowohl Eigenschaften als auch Werte sind standardmäßig in CSS nicht zwischen Groß- und Kleinschreibung unterscheidend. Das Paar wird durch einen Doppelpunkt, `:` (U+003A KOLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, jedoch nicht unbedingt innerhalb, werden ignoriert.

![Eine CSS-Deklaration ist ein Paar aus Eigenschaftswert, wobei ein Doppelpunkt die beiden Einheiten trennt und ein Semikolon die Deklaration abschließt.](css_syntax_-_declaration.png)

Es gibt [Hunderte verschiedener Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch endlose Anzahl verschiedener Werte. Nicht alle Paare aus Eigenschaften und Werten sind zulässig, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ betrachtet und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, das heißt in einer Struktur eingeschlossen zwischen einer öffnenden Klammer, `{` (U+007B LINKE GESCHWEIFTE KLAMMER), und einer schließenden, `}` (U+007D RECHTE GESCHWEIFTE KLAMMER). Blöcke können manchmal geschachtelt sein, daher müssen öffnende und schließende Klammern übereinstimmen.

![Zwei Klammern begrenzen den Beginn und das Ende eines CSS-Blocks, mit CSS-Inhalt oder ohne Inhalt zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlich **Deklarationsblöcke** genannt, und die Deklarationen in ihnen werden durch ein Semikolon, `;` (U+003B SEMIKOLON), getrennt. Ein Deklarationsblock kann leer sein, das heißt keine Deklaration enthalten. Leerzeichen um Deklarationen herum werden ignoriert. Die letzte Deklaration eines Blocks muss nicht durch ein Semikolon abgeschlossen werden, obwohl es oft als _guter Stil_ betrachtet wird, dies zu tun, da es verhindert, dass man vergisst, es hinzuzufügen, wenn der Block um eine weitere Deklaration erweitert wird.

Ein CSS-Deklarationsblock wird im untenstehenden Diagramm visualisiert.

![Innerhalb eines CSS-Blocks, eingeschlossen in Klammern, trennen Semikola die Deklarationen, wobei das letzte Semikolon optional, aber empfohlen als gute Praxis ist.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, also eine Liste von durch Semikola getrennten Deklarationen, ohne die Anfangs- und Schlussklammern, kann in ein HTML [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut gesetzt werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, unterschiedliche Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS erlaubt dies, indem Bedingungen mit Deklarationsblöcken verknüpft werden. Jeder (gültige) Deklarationsblock wird von einem oder mehreren kommagetrennten [**Selektoren**](/de/docs/Web/CSS/Guides/Selectors) vorangestellt, die Bedingungen sind, die einige Elemente der Seite auswählen. Eine [Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) und ein zugehöriger Deklarationsblock werden zusammen als **Regelsatz** oder oft einfach als **Regel** bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im untenstehenden Diagramm visualisiert.

![Eine Gruppe von kommagetrennten Selektoren geht einem von Klammern umschlossenen Deklarationsblock voraus, der mehrere mit Semikolon endende Deklarationen enthält.](ruleset.png)

Da ein Element der Seite von mehreren Selektoren getroffen werden kann und daher potenziell von mehreren Regeln, die eine gegebene Eigenschaft mehrmals mit unterschiedlichen Werten enthalten, definiert der CSS-Standard, welcher Vorrang hat und angewendet werden muss: dies wird als Kaskade-Algorithmus bezeichnet (siehe [Konfliktbehandlung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass selbst wenn ein Regelsatz, der durch eine Gruppe von Selektoren charakterisiert wird, eine Art Kurzschrift ersetzt, die Regelsätze mit jeweils einem einzelnen Selektor ersetzt, dies nicht auf die Gültigkeit des Regelsatzes selbst zutrifft.
>
> Dies führt zu einer wichtigen Konsequenz: wenn ein einzelner Basis-Selektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudo-Elements oder einer Pseudo-Klasse, ist der ganze _Selektor_ ungültig und daher wird die gesamte Regel ignoriert (ebenfalls als ungültig).

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste von ihnen besteht. Aber es gibt auch andere Informationen, die ein Webautor im Stylesheet vermitteln möchte, wie die Zeichenkodierung, andere externe Stylesheets zum Importieren, Schriftarten oder Listenbeschreibungscounter und vieles mehr. Hierfür werden andere und spezifische Anweisungstypen verwendet.

Eine **Anweisung** ist ein Baustein, der mit einem beliebigen Nicht-Leerzeichen-Zeichen beginnt und beim ersten schließenden Klammerzeichen oder Semikolon (außerhalb eines Strings, nicht-escaped und nicht in einem anderen {}, () oder \[] Paar enthalten) endet.

![Ein Venn-Diagramm von Anweisungen, das zeigt, dass alle Regelsätze geschachtelte Anweisungen sind, während einige At-Regeln geschachtelte Anweisungen sind, aber die meisten nicht. Alles, was weder eine At-Regel noch geschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer Bedingung verknüpfen, die durch einen [Selektor](/de/docs/Web/CSS/Guides/Selectors) beschrieben wird.
- **At-Regeln**, die mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung fortfahren, das heißt bis zum nächsten Semikolon (;) außerhalb eines Blocks oder dem Ende des nächsten Blocks. Jeder Typ von [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules), definiert durch den Bezeichner, kann seine eigene interne Syntax und natürlich Semantik haben. Sie werden verwendet, um Metainformationen zu übermitteln (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}).

Jede Anweisung, die kein Regelsatz oder eine At-Regel ist, ist ungültig und wird ignoriert.

### Geschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **geschachtelten Anweisungen**. Dies sind Anweisungen, die in einer spezifischen Untermenge von At-Regeln verwendet werden können – den _kontextabhängigen Gruppenregeln_. Diese Anweisungen gelten nur, wenn eine spezifische Bedingung erfüllt ist: Der `@media` At-Regel-Inhalt wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der `@document` At-Regel-Inhalt wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt usw. In CSS1 und CSS2.1 konnten nur _Regelsätze_ innerhalb kontextabhängiger Gruppenregeln verwendet werden. Diese Einschränkung war sehr restriktiv und wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/Guides/Conditional_rules) aufgehoben. Nun, obwohl immer noch experimentell und nicht von jedem Browser unterstützt, können kontextabhängige Gruppenregeln eine breitere Palette von Inhalten enthalten: Regelsätze, aber auch einige, aber nicht alle, At-Regeln.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [Selektor-Struktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Wertedefinitions-Syntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- Werte
  - [Anfangswerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Kurzschreibweise für Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
