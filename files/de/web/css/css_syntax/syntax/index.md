---
title: "Einführung in die CSS-Syntax: Deklarationen, Regeln und Anweisungen"
short-title: Introduction
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das grundlegende Ziel der Sprache Cascading Stylesheet ([CSS](/de/docs/Web/CSS)) ist es, eine Browser-Engine zu ermöglichen, die Elemente der Seite mit spezifischen Merkmalen wie Farben, Positionierung oder Dekorationen darzustellen. Die _CSS-Syntax_ spiegelt dieses Ziel wider, und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner ist, das heißt ein menschenlesbarer _Name_, der definiert, welches Merkmal berücksichtigt wird.
- Der **Wert**, der beschreibt, wie das Merkmal von der Engine gehandhabt werden muss. Jede Eigenschaft hat eine Menge gültiger Werte, definiert durch eine formale Grammatik sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Festlegen von CSS-Eigenschaften auf spezifische Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden müssen, um es entsprechend zu gestalten und zu layouten.

Standardmäßig sind sowohl Eigenschaften als auch Werte in CSS nicht zwischen Groß- und Kleinschreibung unterscheidend. Das Paar wird durch einen Doppelpunkt `:` (U+003A COLON) getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, jedoch nicht notwendigerweise innerhalb, werden ignoriert.

![Eine CSS-Deklaration ist ein Paar aus Eigenschaft und Wert, mit einem Doppelpunkt, der die beiden Entitäten trennt, und einem Semikolon, das die Deklaration abschließt.](css_syntax_-_declaration.png)

Es gibt [Hunderte verschiedener Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch endlose Anzahl verschiedener Werte. Nicht alle Paare von Eigenschaften und Werten sind erlaubt, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine bestimmte Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ angesehen und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, das heißt in einer Struktur, die durch eine öffnende Klammer `{` (U+007B LEFT CURLY BRACKET) und eine schließende Klammer `}` (U+007D RIGHT CURLY BRACKET) begrenzt ist. Blöcke können manchmal geschachtelt sein, daher müssen öffnende und schließende Klammern übereinstimmen.

![Zwei Klammern begrenzen den Anfang und das Ende eines CSS-Blocks, mit CSS-Inhalt oder keinem Inhalt zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlicherweise **Deklarationsblöcke** genannt, und Deklarationen innerhalb von ihnen werden durch ein Semikolon `;` (U+003B SEMICOLON) getrennt. Ein Deklarationsblock kann leer sein, das heißt keine Deklaration enthalten. Leerzeichen um Deklarationen herum werden ignoriert. Die letzte Deklaration eines Blocks muss nicht durch ein Semikolon abgeschlossen werden, obwohl es oft als _guter Stil_ angesehen wird, dies zu tun, da es verhindert, das Hinzufügen eines neuen Semikolons zu vergessen, wenn der Block mit einer weiteren Deklaration erweitert wird.

Ein CSS-Deklarationsblock wird im folgenden Diagramm visualisiert.

![Innerhalb eines CSS-Blocks, der von Klammern eingeschlossen ist, trennen Semikolons die Deklarationen, wobei das letzte Semikolon optional, aber als gute Praxis empfohlen ist.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, also eine Liste von semikolongetrennten Deklarationen ohne die anfänglichen und schließenden Klammern, kann innerhalb eines HTML-`style`-Attributs eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, unterschiedliche Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem Bedingungen mit Deklarationsblöcken verknüpft werden. Jeder (gültige) Deklarationsblock wird von einem oder mehreren kommagetrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangestellt, die Bedingungen darstellen, die einige Elemente der Seite auswählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein damit verknüpfter Deklarationsblock bilden zusammen einen **Regelsatz**, oft auch **Regel** genannt.

Ein CSS-Regelsatz (oder Regel) wird im folgenden Diagramm visualisiert.

![Eine Gruppe von kommagetrennten Selektoren geht dem von Klammern eingegrenzten Deklarationsblock voraus, der mehrere mit Semikolons endende Deklarationen enthält.](ruleset.png)

Da ein Element der Seite von mehreren Selektoren ausgewählt werden kann und daher von mehreren Regeln, die eine bestimmte Eigenschaft möglicherweise mehrfach mit unterschiedlichen Werten enthalten, legt der CSS-Standard fest, welche Regel Vorrang vor der anderen hat und angewendet werden muss: Dies wird als Kaskadenalgorithmus bezeichnet (siehe [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass selbst wenn ein Regelsatz, der durch eine Gruppe von Selektoren charakterisiert ist, eine Art Abkürzung darstellt, um Regelsätze mit jeweils einem einzigen Selektor zu ersetzen, dies nicht auf die Gültigkeit des Regelsatzes selbst zutrifft.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einzelner Basisselektor ungültig ist, zum Beispiel bei der Verwendung eines unbekannten Pseudoelements oder einer Pseudoklasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel ignoriert (ebenfalls ungültig).

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste von ihnen besteht. Aber es gibt andere Informationen, die ein Webautor im Stylesheet übermitteln möchte, wie die Zeichencodierung, andere externe Stylesheets zum Importieren, Schriftarten oder Listenzählerbeschreibungen und vieles mehr. Dazu wird es andere und spezifische Arten von Anweisungen verwenden.

Eine **Anweisung** ist ein Baustein, der mit beliebigen Nicht-Leerzeichen-Buchstaben beginnt und beim ersten schließenden Klammer oder Semikolon endet (außerhalb eines Strings, nicht-escape und nicht in einem anderen {}, () oder \[] Paar enthalten).

![Ein Venn-Diagramm von Anweisungen, das zeigt, dass alle Regelsätze geschachtelte Anweisungen sind, während einige At-Regeln geschachtelte Anweisungen sind, aber die meisten nicht. Alles, was weder eine At-Regel noch geschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschriebenen Bedingung verknüpfen.
- **At-Regeln**, die mit einem At-Zeichen `@` (U+0040 COMMERCIAL AT) beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung fortlaufend, das heißt bis zum nächsten Semikolon (;) außerhalb eines Blocks oder das Ende des nächsten Blocks. Jeder Typ von [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), definiert durch den Bezeichner, kann seine eigene interne Syntax und natürlich Semantik haben. Sie werden verwendet, um Metadateninformationen zu übermitteln (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}).

Jede Anweisung, die weder ein Regelsatz noch eine At-Regel ist, ist ungültig und wird ignoriert.

### Geschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **geschachtelten Anweisungen**. Dies sind Anweisungen, die in einem spezifischen Unterset von At-Regeln – den _bedingten Gruppenregeln_ – verwendet werden können. Diese Anweisungen gelten nur, wenn eine spezifische Bedingung erfüllt ist: Der Inhalt der `@media` At-Regel wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, der festgelegten Bedingung entspricht; der Inhalt der `@document` At-Regel wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten in bedingten Gruppenregeln nur _Regelsätze_ verwendet werden. Das war sehr einschränkend und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) gelockert. Jetzt, obwohl noch experimentell und nicht von jedem Browser unterstützt, können bedingte Gruppenregeln eine größere Anzahl von Inhalten enthalten: Regelsätze, aber auch einige (nicht alle) At-Regeln.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- Werte
  - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Kurzschreibweiseigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
