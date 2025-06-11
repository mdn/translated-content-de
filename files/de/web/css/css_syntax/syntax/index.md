---
title: "Einführung in die CSS-Syntax: Deklarationen, Regelsätze und Anweisungen"
short-title: Introduction
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS))-Sprache besteht darin, einer Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Eigenschaften zu versehen, wie Farben, Positionierung oder Dekorationen. Die _CSS-Syntax_ spiegelt dieses Ziel wider und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner ist, also ein lesbarer _Name_, der definiert, welche Funktion betrachtet wird.
- Der **Wert**, der beschreibt, wie die Funktion von der Engine gehandhabt werden muss. Jede Eigenschaft hat eine Reihe von gültigen Werten, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Zuweisen spezifischer Werte an CSS-Eigenschaften ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden, um diese entsprechend zu layouten und zu gestalten.

In CSS sind sowohl Eigenschaften als auch Werte standardmäßig nicht zwischen Groß- und Kleinschreibung unterscheidbar. Das Paar wird durch einen Doppelpunkt, `:` (U+003A KOLON), getrennt und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, aber nicht notwendigerweise innerhalb, werden ignoriert.

![Eine CSS-Deklaration ist ein Paar von Eigenschaft und Wert, mit einem Doppelpunkt, der die beiden Entitäten trennt, und einem Semikolon, das die Deklaration schließt.](css_syntax_-_declaration.png)

Es gibt [Hunderte unterschiedlicher Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und praktisch eine endlose Anzahl unterschiedlicher Werte. Nicht alle Paare aus Eigenschaften und Werten sind erlaubt, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ angesehen und vom CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, das heißt in einer Struktur, die von einer öffnenden Klammer, `{` (U+007B LINKE GESCHWEIFTE KLAMMER), und einer schließenden Klammer, `}` (U+007D RECHTE GESCHWEIFTE KLAMMER), begrenzt wird. Blöcke können manchmal verschachtelt sein, daher müssen die öffnenden und schließenden Klammern übereinstimmen.

![Zwei geschweifte Klammern begrenzen den Beginn und das Ende eines CSS-Blocks, mit CSS-Inhalt oder ohne Inhalt zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlich als **Deklarationsblöcke** bezeichnet, und Deklarationen innerhalb von ihnen werden durch ein Semikolon, `;` (U+003B SEMIKOLON), getrennt. Ein Deklarationsblock kann leer sein, das heißt, eine null Deklaration enthalten. Leerzeichen um Deklarationen herum werden ignoriert. Die letzte Deklaration eines Blocks muss nicht mit einem Semikolon abgeschlossen werden, obwohl es oft als _guter Stil_ angesehen wird, dies zu tun, da es verhindert, es zu vergessen, wenn der Block durch eine weitere Deklaration erweitert wird.

Ein CSS-Deklarationsblock wird im Diagramm unten visualisiert.

![Innerhalb eines CSS-Blocks, der in geschweifte Klammern eingeschlossen ist, trennen Semikolons die Deklarationen, wobei das letzte Semikolon optional, aber als gute Praxis empfohlen ist.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, also eine Liste von Semikolon-getrennten Deklarationen ohne die anfänglichen und schließenden Klammern, kann in einem HTML-`[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, verschiedene Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies durch die Zuordnung von Bedingungen zu Deklarationsblöcken. Jeder (gültige) Deklarationsblock wird von einem oder mehreren durch Kommas getrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangegangen, die Bedingungen darstellen, die einige Elemente der Seite auswählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugeordneter Deklarationsblock zusammen werden als **Regelsatz** oder oft als **Regel** bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im Diagramm unten visualisiert.

![Eine Gruppe von durch Kommas getrennten Selektoren geht dem durch Klammern begrenzten Deklarationsblock voraus, der mehrere Deklarationen enthält, die mit Semikolons enden.](ruleset.png)

Da ein Element der Seite möglicherweise von mehreren Selektoren erfasst wird und daher von mehreren Regeln, die möglicherweise eine gegebene Eigenschaft mehrmals mit unterschiedlichen Werten enthalten, definiert der CSS-Standard, welche Vorrang haben und angewendet werden müssen: das nennt man das Kaskade-Algorithmus (siehe [Konfliktbehandlung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass auch wenn ein durch eine Gruppe von Selektoren gekennzeichneter Regelsatz eine Art Kurzform ist, die Regelsätze mit jeweils einem einzelnen Selektor ersetzt, dies nicht auf die Gültigkeit des Regelsatzes selbst zutrifft.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einziger Basisselektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudo-Elements oder einer Pseudo-Klasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel ignoriert (ebenfalls ungültig).

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste davon besteht. Aber es gibt andere Informationen, die ein Webautor im Stylesheet übermitteln möchte, wie den Zeichensatz, andere externe Stylesheets zum Importieren, Schriftart-Darstellungen oder Zählbeschreibungen und vieles mehr. Dazu werden andere und spezifische Arten von Anweisungen verwendet.

Eine **Anweisung** ist ein Baustein, der mit einem beliebigen, nicht-leerzeichen Zeichen beginnt und an der ersten schließenden Klammer oder Semikolon endet (außerhalb eines Strings, nicht-escaped und nicht in ein anderes {}, () oder \[]-Paar eingeschlossen).

![Ein Venn-Diagramm von Anweisungen, das feststellt, dass alle Regelsätze verschachtelte Anweisungen sind, während einige at-Regeln verschachtelte Anweisungen sind, aber die meisten nicht. Alles, was keine at-Regel oder verschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen einer durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschriebenen Bedingung zuordnen.
- **At-Regeln**, die mit einem At-Zeichen, `@` (U+0040 KOMMERZIELLES AT), beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung fortfahren, das ist bis zum nächsten Semikolon (;) außerhalb eines Blocks oder dem Ende des nächsten Blocks. Jede Art von [at-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), definiert durch den Bezeichner, kann ihre eigene interne Syntax haben, und selbstverständlich auch Semantik. Sie werden verwendet, um Meta-Informationen zu übermitteln (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}).

Jede Anweisung, die weder ein Regelsatz noch eine at-Regel ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **verschachtelten Anweisungen**. Diese Anweisungen können in einem spezifischen Unterset von at-Regeln verwendet werden – den _bedingten Gruppenregeln_. Diese Anweisungen gelten nur, wenn eine bestimmte Bedingung erfüllt ist: Der Inhalt der `@media`-at-Regel wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der Inhalt der `@document`-at-Regel wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten nur _Regelsätze_ innerhalb der bedingten Gruppenregeln verwendet werden. Das war sehr einschränkend und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt, obwohl noch experimentell und nicht von jedem Browser unterstützt, können bedingte Gruppenregeln einen breiteren Inhalt enthalten: Regelsätze, aber auch einige, jedoch nicht alle, at-Regeln.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Wertdefinierungssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- Werte
  - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Kurzschreibweise für Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
