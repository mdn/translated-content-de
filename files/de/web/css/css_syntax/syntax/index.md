---
title: Syntax
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Das Hauptziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS))-Sprache ist es, einer Browser-Engine zu ermöglichen, Elemente der Seite mit bestimmten Eigenschaften zu gestalten, wie Farben, Positionierung oder Dekorationen. Die _CSS-Syntax_ spiegelt dieses Ziel wider und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, ein Bezeichner, der einen menschenlesbaren _Namen_ darstellt und definiert, welches Merkmal betrachtet wird.
- Der **Wert**, der beschreibt, wie das Merkmal von der Engine gehandhabt werden muss. Jede Eigenschaft hat eine Menge gültiger Werte, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Setzen von CSS-Eigenschaften auf bestimmte Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite anzuwenden sind, um es angemessen zu gestalten und anzuordnen.

In CSS sind sowohl Eigenschaften als auch Werte standardmäßig nicht case-sensitiv. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, jedoch nicht unbedingt innerhalb, werden ignoriert.

![Eine CSS-Deklaration ist ein Eigenschaft-Wert-Paar, mit einem Doppelpunkt, der die beiden Einheiten trennt, und einem Semikolon, das die Deklaration abschließt.](css_syntax_-_declaration.png)

Es gibt [Hunderte verschiedener Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch endlose Anzahl unterschiedlicher Werte. Nicht alle Paare von Eigenschaften und Werten sind erlaubt, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine bestimmte Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ betrachtet und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, die von einer öffnenden Klammer, `{` (U+007B LEFT CURLY BRACKET), und einer schließenden Klammer, `}` (U+007D RIGHT CURLY BRACKET), begrenzt werden. Diese Blöcke können manchmal verschachtelt sein, daher müssen öffnende und schließende Klammern zusammenpassen.

![Zwei Klammern begrenzen den Anfang und das Ende eines CSS-Blocks, mit CSS-Inhalt oder keinem Inhalt zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlicherweise als **Deklarationsblöcke** bezeichnet, und Deklarationen innerhalb dieser werden durch ein Semikolon, `;` (U+003B SEMICOLON), getrennt. Ein Deklarationsblock kann leer sein, d.h. keine Deklaration enthalten. Leerzeichen um Deklarationen herum werden ignoriert. Die letzte Deklaration eines Blocks muss nicht mit einem Semikolon abgeschlossen werden, obwohl es oft als _guter Stil_ angesehen wird, dies zu tun, da es das Vergessen verhindert, es hinzuzufügen, wenn der Block um eine weitere Deklaration erweitert wird.

Ein CSS-Deklarationsblock wird im folgenden Diagramm dargestellt.

![Innerhalb eines CSS-Blocks, der in Klammern eingeschlossen ist, trennen Semikolons die Deklarationen, wobei das letzte Semikolon optional, aber als gute Praxis empfohlen ist.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, d.h. eine Liste von durch Semikolon getrennten Deklarationen, ohne die einleitenden und schließenden Klammern, kann innerhalb eines HTML-[`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs platziert werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, unterschiedliche Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem Deklarationsblöcken Bedingungen zugeordnet werden. Jeder (gültige) Deklarationsblock wird von einem oder mehreren durch Komma getrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangegangen, die Bedingungen darstellen, um einige Elemente der Seite auszuwählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock zusammen werden als **Regelsatz** oder oft als **Regel** bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird in dem folgenden Diagramm dargestellt.

![Eine Gruppe von durch Komma getrennten Selektoren geht dem durch Klammern begrenzten Deklarationsblock voraus, der mehrere Deklarationen enthält, die mit Semikolons enden.](ruleset.png)

Da ein Element der Seite von mehreren Selektoren und damit von mehreren Regeln potenziell mehrfach mit einer gegebenen Eigenschaft, aber unterschiedlichen Werten, übereinstimmen kann, definiert der CSS-Standard, welche Eigenschaft Vorrang hat und angewendet werden muss: Dies wird als Kaskadenalgorithmus bezeichnet (siehe [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass selbst wenn ein Regelsatz, der durch eine Gruppe von Selektoren gekennzeichnet ist, eine Art Abkürzung ersetzt, die Regeln mit jeweils einem einzigen Selektor ersetzt, dies nicht für die Gültigkeit des Regelsatzes selbst gilt.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einzelner Basisselektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudo-Elements oder einer Pseudo-Klasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel als ungültig ignoriert.

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur eine große Liste von ihnen besteht. Aber es gibt andere Informationen, die ein Webautor im Stylesheet vermitteln möchte, wie den Zeichensatz, andere zu importierende externe Stylesheets, Schriftschnitt- oder Listenbeschreibungen und vieles mehr. Dafür werden andere und spezifische Arten von Anweisungen verwendet.

Eine **Anweisung** ist ein Baustein, der mit einem beliebigen Nicht-Leerzeichen-Zeichen beginnt und am ersten schließenden Klammer oder Semikolon endet (außerhalb eines Strings, nicht-escaped und nicht in ein anderes {}, () oder \[] Paar eingeschlossen).

![Ein Venn-Diagramm von Anweisungen, das zeigt, dass alle Regelsätze verschachtelte Anweisungen sind, während einige At-Rules verschachtelte Anweisungen sind, aber die meisten nicht. Alles, was kein At-Rule oder verschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer Bedingung assoziieren, die von einem [Selektor](/de/docs/Web/CSS/CSS_selectors) beschrieben wird.
- **At-Rules**, die mit einem At-Zeichen beginnen, `@` (U+0040 COMMERCIAL AT), gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung fortgesetzt werden, also bis zum nächsten Semikolon (;) außerhalb eines Blocks oder dem Ende des nächsten Blocks. Jede Art von [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule), die durch den Bezeichner definiert wird, kann ihre eigene interne Syntax und Semantik haben. Sie werden verwendet, um Metadateninformationen zu übermitteln (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}).

Jede Anweisung, die weder ein Regelsatz noch ein At-Rule ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine andere Gruppe von Anweisungen – die **verschachtelten Anweisungen**. Diese sind Anweisungen, die in einem bestimmten Unterbereich von At-Rules verwendet werden können – den _Bedingungsgruppenregeln_. Diese Anweisungen gelten nur, wenn eine bestimmte Bedingung erfüllt ist: Der Inhalt der `@media`-At-Rule wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der `@document`-At-Rule-Inhalt wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten innerhalb von Bedingungsgruppenregeln nur _Regelsätze_ verwendet werden. Das war sehr einschränkend und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt, obwohl noch experimentell und nicht von jedem Browser unterstützt, können Bedingungsgruppenregeln eine breitere Auswahl an Inhalten enthalten: Regelsätze, aber auch einige, aber nicht alle, At-Rules.

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
  - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [Shorthand-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
