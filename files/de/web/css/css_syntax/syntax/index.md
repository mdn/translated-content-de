---
title: Syntax
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Das grundlegende Ziel der Sprache Cascading Stylesheet ([CSS](/de/docs/Web/CSS)) besteht darin, einer Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Merkmalen wie Farben, Positionierungen oder Dekorationen darzustellen. Die _CSS-Syntax_ spiegelt dieses Ziel wider, und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner ist, ein für Menschen lesbarer _Name_, der definiert, welches Merkmal betrachtet wird.
- Der **Wert**, der beschreibt, wie das Merkmal von der Engine behandelt werden muss. Jede Eigenschaft hat eine Reihe von gültigen Werten, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine umgesetzt wird.

## CSS-Deklarationen

Das Festlegen von CSS-Eigenschaften auf bestimmte Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen für jedes einzelne Element einer Seite gelten, um es entsprechend zu layouten und zu gestalten.

Standardmäßig sind sowohl Eigenschaften als auch Werte in CSS nicht zwischen Groß- und Kleinschreibung unterscheidend. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, aber nicht unbedingt innerhalb, werden ignoriert.

![Eine CSS-Deklaration ist ein Paar aus Eigenschaft und Wert, mit einem Doppelpunkt zur Trennung der beiden Entitäten und einem Semikolon zum Abschluss der Deklaration.](css_syntax_-_declaration.png)

Es gibt [Hunderte verschiedener Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch endlose Anzahl unterschiedlicher Werte. Nicht alle Paare aus Eigenschaften und Werten sind zulässig, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ betrachtet und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, das heißt, in einer Struktur, die durch eine öffnende Klammer, `{` (U+007B LEFT CURLY BRACKET), und eine schließende Klammer, `}` (U+007D RIGHT CURLY BRACKET), begrenzt ist. Blöcke können manchmal geschachtelt sein, sodass öffnende und schließende Klammern übereinstimmen müssen.

![Zwei Klammern begrenzen den Anfang und das Ende eines CSS-Blocks, mit CSS-Inhalten oder keinen Inhalten zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlich als **Deklarationsblöcke** bezeichnet, und die Deklarationen darin werden durch ein Semikolon, `;` (U+003B SEMICOLON), getrennt. Ein Deklarationsblock kann leer sein, das heißt, keine Deklarationen enthalten. Leerzeichen um Deklarationen werden ignoriert. Die letzte Deklaration eines Blocks muss nicht durch ein Semikolon abgeschlossen werden, obwohl es oft als _guter Stil_ betrachtet wird, dies zu tun, da es verhindert, dass das Hinzufügen eines weiteren Semikolons beim Erweitern des Blocks vergessen wird.

Ein CSS-Deklarationsblock wird im folgenden Diagramm visualisiert.

![Innerhalb eines CSS-Blocks, der in Klammern eingeschlossen ist, trennen Semikolons Deklarationen, wobei das abschließende Semikolon optional, aber als gute Praxis empfohlen ist.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, das ist eine Liste von durch Semikolon getrennten Deklarationen, ohne die Anfangs- und Schlussklammern, kann innerhalb eines HTML-[`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, verschiedene Deklarationen auf unterschiedliche Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem es Bedingungen mit Deklarationsblöcken in Verbindung bringt. Jeder (gültige) Deklarationsblock wird von einem oder mehreren, durch Komma getrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangestellt, die Bedingungen sind, um bestimmte Elemente der Seite auszuwählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock zusammen werden als **Regelsatz** oder oft als **Regel** bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im folgenden Diagramm visualisiert.

![Eine Gruppe von durch Komma getrennten Selektoren steht vor dem durch Klammern begrenzten Deklarationsblock, der mehrere durch Semikolons abgeschlossene Deklarationen enthält.](ruleset.png)

Da ein Seitenelement durch mehrere Selektoren und daher durch mehrere Regeln, die möglicherweise eine gegebene Eigenschaft mehrmals mit unterschiedlichen Werten enthalten, übereinstimmen kann, definiert der CSS-Standard, welche Eigenschaft Vorrang vor der anderen hat und angewendet werden muss: Dies wird als Kaskadenalgorithmus bezeichnet (siehe [Konfliktbehandlung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass auch wenn ein Regelsatz, der durch eine Gruppe von Selektoren charakterisiert ist, eine Art Abkürzung darstellt, die Regelsätze mit jeweils einem Selektor ersetzt, dies nicht auf die Gültigkeit des Regelsatzes selbst zutrifft.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einzelner Basis-Selektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudo-Elements oder Pseudo-Klasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel ignoriert (ebenfalls ungültig).

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das häufig nur aus einer großen Liste derselben besteht. Aber es gibt andere Informationen, die ein Web-Entwickler im Stylesheet übermitteln möchte, wie den Zeichensatz, andere externe Stylesheets zum Importieren, Schriftbild- oder Listenbeschreibungen und vieles mehr. Dafür werden andere und spezifische Arten von Anweisungen verwendet.

Eine **Anweisung** ist ein Baustein, der mit einem beliebigen nicht-leeren Zeichen beginnt und beim ersten schließenden Klammer oder Semikolon endet (außerhalb eines Strings, nicht-escaped und nicht in einem anderen {}, () oder \[]-Paar enthalten).

![Ein Venn-Diagramm von Anweisungen, das darauf hinweist, dass alle Regelsätze verschachtelte Anweisungen sind, während einige At-Regeln verschachtelte Anweisungen sind, aber die meisten nicht. Alles, was keine At-Regel oder verschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschriebenen Bedingung in Verbindung bringen.
- **At-Regeln**, die mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung fortgesetzt werden, das ist bis zum nächsten Semikolon (;) außerhalb eines Blocks oder das Ende des nächsten Blocks. Jeder Typ von [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), definiert durch den Bezeichner, kann seine eigene interne Syntax und selbstverständlich Semantik haben. Sie werden verwendet, um Metadateninformationen (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}) zu übermitteln.

Jede Anweisung, die weder ein Regelsatz noch eine At-Regel ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **verschachtelten Anweisungen**. Dies sind Anweisungen, die in einem bestimmten Teilmengensatz von At-Regeln verwendet werden können – den _bedingten Gruppenregeln_. Diese Anweisungen gelten nur, wenn eine spezifische Bedingung erfüllt ist: der Inhalt der `@media`-At-Regel wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der Inhalt der `@document`-At-Regel wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt und so weiter. In CSS1 und CSS2.1 konnten nur _Regelsätze_ innerhalb der bedingten Gruppenregeln verwendet werden. Das war sehr einschränkend, und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Nun können, obwohl noch experimentell und nicht von jedem Browser unterstützt, bedingte Gruppenregeln eine breitere Palette von Inhalten enthalten: Regelsätze, aber auch einige, jedoch nicht alle, At-Regeln.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- Werte
  - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value)
- [Kurzform-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
