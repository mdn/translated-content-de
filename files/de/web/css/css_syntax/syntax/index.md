---
title: Syntax
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS))-Sprache ist es, einem Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Merkmalen wie Farben, Positionierung oder Dekorationen darzustellen. Die _CSS-Syntax_ spiegelt dieses Ziel wider und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Identifikator ist, das heißt ein lesbarer _Name_, der definiert, welches Merkmal betrachtet wird.
- Der **Wert**, der beschreibt, wie das Merkmal von der Engine gehandhabt werden muss. Jede Eigenschaft hat einen Satz von gültigen Werten, definiert durch eine formale Grammatik, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Die Zuordnung von CSS-Eigenschaften zu spezifischen Werten ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden, um es angemessen zu layouten und zu stylen.

In CSS sind Eigenschaften und Werte standardmäßig nicht zwischen Groß- und Kleinschreibung unterscheidend. Das Paar wird durch einen Doppelpunkt `:` (U+003A COLON) getrennt, und Leerzeichen vor, zwischen und nach den Eigenschaften und Werten, aber nicht notwendigerweise innerhalb davon, werden ignoriert.

![Eine CSS-Deklaration ist ein Eigenschaft-Wert-Paar, mit einem Doppelpunkt, der die beiden Elemente trennt und einem Semikolon, das die Deklaration abschließt.](css_syntax_-_declaration.png)

Es gibt [Hunderte verschiedene Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch endlose Anzahl unterschiedlicher Werte. Nicht alle Paare aus Eigenschaften und Werten sind zulässig und jede Eigenschaft definiert, welche die gültigen Werte sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ angesehen und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, die durch eine öffnende Klammer `{` (U+007B LEFT CURLY BRACKET) und eine schließende Klammer `}` (U+007D RIGHT CURLY BRACKET) abgegrenzt werden. Blöcke können manchmal verschachtelt sein, daher müssen die öffnenden und schließenden Klammern übereinstimmen.

![Zwei Klammern begrenzen den Anfang und das Ende eines CSS-Blocks, mit CSS-Inhalt oder keinem Inhalt zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlich als **Deklarationsblöcke** bezeichnet und die Deklarationen innerhalb dieser werden durch ein Semikolon `;` (U+003B SEMICOLON) getrennt. Ein Deklarationsblock kann leer sein, das heißt keine Deklarationen enthalten. Leerzeichen um Deklarationen werden ignoriert. Die letzte Deklaration eines Blocks muss nicht mit einem Semikolon beendet werden, obwohl es oft als _guter Stil_ betrachtet wird, da es verhindert, dass man vergisst, es hinzuzufügen, wenn der Block um eine weitere Deklaration erweitert wird.

Ein CSS-Deklarationsblock wird im folgenden Diagramm visualisiert.

![Innerhalb eines CSS-Blocks, eingefasst in Klammern, trennen Semikolons die Deklarationen, wobei das finale Semikolon optional, aber als gute Praxis empfohlen wird.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, das heißt eine Liste von durch Semikolons getrennten Deklarationen, ohne die Anfangs- und Schlussklammern, kann in einem HTML-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style) eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, verschiedene Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem Bedingungen mit Deklarationsblöcken verknüpft werden. Jeder (gültige) Deklarationsblock wird durch einen oder mehrere kommagetrennte [**Selektoren**](/de/docs/Web/CSS/CSS_selectors), die Bedingungen darstellen, die einige Elemente der Seite auswählen, vorangestellt. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock werden zusammen als ein **Regelsatz** oder oft als **Regel** bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im folgenden Diagramm visualisiert.

![Eine Gruppe von kommagetrennten Selektoren geht dem durch Klammern begrenzten Deklarationsblock voraus, der mehrere Deklarationen enthält, die in Semikolons enden.](ruleset.png)

Da ein Element der Seite durch mehrere Selektoren und daher durch mehrere Regeln, die möglicherweise eine gegebene Eigenschaft mehrmals enthalten, mit unterschiedlichen Werten, ausgewählt werden kann, definiert der CSS-Standard, welche Priortät die andere übertrifft und angewendet werden muss: dies wird als Cascade-Algorithmus bezeichnet (siehe [Konfliktbehandlung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass selbst wenn ein Regelsatz, der durch eine Gruppe von Selektoren gekennzeichnet ist, eine Art Abkürzung darstellt, die Regelsätze mit jeweils einem einzelnen Selektor ersetzt, dies nicht für die Gültigkeit des Regelsatzes selbst gilt.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einzelner Basisselektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudo-Elements oder einer Pseudo-Klasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel ignoriert (ebenfalls ungültig).

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste von ihnen besteht. Aber es gibt andere Informationen, die ein Webautor im Stylesheet übermitteln möchte, wie den Zeichensatz, andere zu importierende externe Stylesheets, Schriftarten oder Listenbeschreibungen und vieles mehr. Es werden andere und spezifische Arten von Anweisungen verwendet, um dies zu tun.

Eine **Anweisung** ist ein Baustein, der mit nicht-leerzeichen Zeichen beginnt und beim ersten schließenden Klammer oder Semikolon endet (außerhalb eines Strings, nicht-escaped und nicht in einem weiteren {}, () oder \[]-Paar enthalten).

![Ein Venn-Diagramm der Anweisungen, das zeigt, dass alle Regelsätze verschachtelte Anweisungen sind, während einige @-Regeln verschachtelte Anweisungen sind, aber die meisten nicht. Alles was keine @-Regel oder verschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen einer durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschriebenen Bedingung zuordnen.
- **At-Rules**, die mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Identifikator und dann bis zum Ende der Anweisung fortfahren, also bis zum nächsten Semikolon (;) außerhalb eines Blocks oder dem Ende des nächsten Blocks. Jede Art von [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), definiert durch den Identifikator, kann ihre eigene interne Syntax und Semantik haben. Sie werden verwendet, um Metadateninformationen zu übermitteln (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}).

Jede Anweisung, die weder ein Regelsatz noch eine At-Rule ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **verschachtelten Anweisungen**. Dies sind Anweisungen, die in einem bestimmten Unterbereich von At-Regeln verwendet werden können – den _Bedingten Gruppenregeln_. Diese Anweisungen gelten nur, wenn eine bestimmte Bedingung erfüllt ist: Der `@media` At-Rule-Inhalt wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der `@document` At-Rule-Inhalt wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten innerhalb bedingter Gruppenregeln nur _Regelsätze_ verwendet werden. Das war sehr einschränkend und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Nun, obwohl immer noch experimentell und nicht von jedem Browser unterstützt, können bedingte Gruppenregeln eine breitere Palette von Inhalten enthalten: Regelsätze, aber auch einige, aber nicht alle, At-Regeln.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- Werte
  - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Kurzschreibweiseigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
