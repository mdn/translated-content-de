---
title: Syntax
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: 5f196157779961a38236b925d916992ba4cdb730
---

{{CSSRef}}

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS))-Sprache ist es, einer Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Eigenschaften wie Farben, Positionierung oder Dekorationen zu gestalten. Die _CSS-Syntax_ spiegelt dieses Ziel wider, und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft** (**property**), die ein Bezeichner ist, also ein menschenlesbarer _Name_, der definiert, welche Eigenschaft betrachtet wird.
- Der **Wert** (**value**), der beschreibt, wie die Eigenschaft von der Engine verarbeitet werden muss. Jede Eigenschaft hat eine Reihe gültiger Werte, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Zuweisen von spezifischen Werten zu CSS-Eigenschaften ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden müssen, um ein korrektes Layout und Styling zu gewährleisten.

Sowohl Eigenschaften als auch Werte sind in CSS standardmäßig nicht zwischen Groß- und Kleinschreibung unterscheidbar. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten (aber nicht zwingend dazwischen) werden ignoriert.

![Eine CSS-Deklaration ist ein Paar aus einer Eigenschaft und einem Wert, getrennt durch einen Doppelpunkt und abgeschlossen mit einem Semikolon.](css_syntax_-_declaration.png)

Es gibt [hunderte verschiedene Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und praktisch unendlich viele verschiedene Werte. Nicht alle Kombinationen aus Eigenschaften und Werten sind erlaubt, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine bestimmte Eigenschaft ungültig ist, wird die Deklaration als _ungültig_ betrachtet und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, die durch eine öffnende geschweifte Klammer, `{` (U+007B LEFT CURLY BRACKET), und eine schließende geschweifte Klammer, `}` (U+007D RIGHT CURLY BRACKET), begrenzt sind. Blöcke können manchmal verschachtelt sein, daher müssen öffnende und schließende Klammern übereinstimmen.

![Zwei geschweifte Klammern definieren den Beginn und das Ende eines CSS-Blocks, der Inhalt enthalten kann oder leer sein kann.](css_syntax_-_block.png)

Solche Blöcke werden natürlicherweise **Deklarationsblöcke** genannt, und die Deklarationen in ihnen werden durch ein Semikolon, `;` (U+003B SEMICOLON), getrennt. Ein Deklarationsblock kann leer sein, das heißt keine Deklarationen enthalten. Leerzeichen um Deklarationen herum werden ignoriert. Die letzte Deklaration eines Blocks muss nicht zwingend durch ein Semikolon abgeschlossen werden, es wird jedoch oft als _guter Stil_ betrachtet, dies zu tun, da das Hinzufügen weiterer Deklarationen erleichtert wird.

Ein CSS-Deklarationsblock wird im folgenden Diagramm veranschaulicht.

![In einem CSS-Block, der von geschweiften Klammern eingeschlossen ist, trennen Semikolons die Deklarationen. Das letzte Semikolon ist optional, wird jedoch aus Stilgründen empfohlen.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, also eine Liste von durch Semikolons getrennten Deklarationen ohne die einleitenden und schließenden geschweiften Klammern, kann innerhalb eines HTML-[`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, verschiedene Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem Bedingungen mit Deklarationsblöcken verknüpft werden. Jeder (gültige) Deklarationsblock wird von einem oder mehreren durch Kommas getrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangestellt, die Bedingungen darstellen, um bestimmte Elemente der Seite auszuwählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock werden zusammen als **Regelsatz** (**ruleset**) oder oft einfach als **Regel** bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im folgenden Diagramm veranschaulicht.

![Eine Gruppe von durch Kommas getrennten Selektoren steht vor dem durch geschweifte Klammern begrenzten Deklarationsblock, der mehrere Deklarationen enthält, die mit Semikolons enden.](ruleset.png)

Da ein Element auf der Seite von mehreren Selektoren und somit von mehreren Regeln getroffen werden kann, die möglicherweise eine bestimmte Eigenschaft mehrere Male mit unterschiedlichen Werten enthalten, definiert der CSS-Standard, welche Eigenschaft Vorrang hat und angewendet werden muss: Dies wird als Kaskadenalgorithmus bezeichnet (siehe [Konflikte lösen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass selbst wenn ein Regelsatz, der durch eine Gruppe von Selektoren gekennzeichnet ist, eine Art Kurzform darstellt, die Regelsätze mit einzelnen Selektoren ersetzt, dies nicht für die Gültigkeit des Regelsatzes gilt.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einzelner Basis-Selektor ungültig ist, beispielsweise bei der Verwendung eines unbekannten Pseudo-Elements oder einer Pseudo-Klasse, ist der gesamte _Selektor_ ungültig und damit die gesamte Regel (ebenfalls ungültig).

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste von ihnen besteht. Es gibt jedoch weitere Informationen, die ein Webautor im Stylesheet übermitteln möchte, wie den Zeichensatz, andere zu importierende externe Stylesheets, Font-Face- oder Listenzählerbeschreibungen und vieles mehr. Dafür werden spezielle Arten von Anweisungen verwendet.

Eine **Anweisung** (**statement**) ist ein Baustein, der mit einem beliebigen Nicht-Leerzeichen-Charakter beginnt und bei der ersten schließenden Klammer oder Semikolon endet (außerhalb eines Strings, nicht-escaped und nicht in ein anderes {}, () oder \[]-Paar eingeschlossen).

![Ein Venn-Diagramm von Anweisungen zeigt, dass alle Regelsätze verschachtelte Anweisungen sind, während einige Anweisungen des Typs @-Regel verschachtelt sind, die meisten jedoch nicht. Alles, was weder eine @-Regel noch verschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (**rules**), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer Bedingung verknüpfen, die durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschrieben wird.
- **At-Regeln** (**at-rules**), die mit einem at-Symbol, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Bezeichner und weitergehen bis zum Ende der Anweisung, das entweder das nächste Semikolon (;) außerhalb eines Blocks oder das Ende des nächsten Blocks ist. Jede Art von [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), die durch den Bezeichner definiert ist, kann ihre eigene interne Syntax und Semantik haben. Sie werden verwendet, um Metadaten-Informationen (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}) oder beschreibende Informationen (wie {{ cssxref("@font-face") }}) zu übermitteln.

Jede Anweisung, die weder ein Regelsatz noch eine At-Regel ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **verschachtelten Anweisungen** (**nested statements**). Dies sind Anweisungen, die in einem spezifischen Unterbereich von At-Regeln verwendet werden können – den _bedingten Gruppenregeln_ (**conditional group rules**). Diese Anweisungen gelten nur, wenn eine spezifische Bedingung erfüllt ist: Der Inhalt einer `@media`-At-Regel wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der Inhalt einer `@document`-At-Regel wird nur angewendet, wenn die aktuelle Seite bestimmte Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten in bedingten Gruppenregeln nur _Regelsätze_ verwendet werden. Das war sehr einschränkend, und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt, obwohl noch experimentell und nicht von allen Browsern unterstützt, können bedingte Gruppenregeln eine breitere Palette von Inhalten enthalten: Regelsätze, aber auch einige, jedoch nicht alle At-Regeln.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Struktur von Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- Werte
  - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [Kurzschrift-Eigenschaften (Shorthand Properties)](/de/docs/Web/CSS/Shorthand_properties)
