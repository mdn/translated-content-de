---
title: "Einführung in die CSS-Syntax: Deklarationen, Regelmengen und Anweisungen"
short-title: Introduction
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS)) Sprache ist es, einer Browser-Engine zu ermöglichen, Elemente einer Seite mit bestimmten Merkmalen wie Farben, Positionierung oder Dekorationen zu gestalten. Die _CSS-Syntax_ spiegelt dieses Ziel wider und ihre grundlegenden Bausteine sind:

- Die **Eigenschaft**, die ein Bezeichner ist, also ein menschenlesbarer _Name_, der definiert, welches Merkmal betrachtet wird.
- Der **Wert**, der beschreibt, wie das Merkmal von der Engine behandelt werden muss. Jede Eigenschaft hat eine Menge gültiger Werte, definiert durch eine formale Grammatik, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Setzen von CSS-Eigenschaften auf bestimmte Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden müssen, um sie entsprechend zu layouten und zu stylen.

Sowohl Eigenschaften als auch Werte sind in CSS standardmäßig nicht casesensitiv. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, aber nicht unbedingt innerhalb, werden ignoriert.

![Eine CSS-Deklaration ist ein Eigenschaft-Wert-Paar, mit Doppelpunkt als Trennung der beiden Entitäten und einem Semikolon als Abschluss der Deklaration.](css_syntax_-_declaration.png)

Es gibt [hunderte verschiedene Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch endlose Anzahl von verschiedenen Werten. Nicht alle Paare von Eigenschaften und Werten sind erlaubt, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ betrachtet und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, das heißt in einer Struktur, die durch eine öffnende Klammer, `{` (U+007B LEFT CURLY BRACKET), und eine schließende Klammer, `}` (U+007D RIGHT CURLY BRACKET) begrenzt wird. Blöcke können manchmal verschachtelt sein, daher müssen öffnende und schließende Klammern übereinstimmen.

![Zwei Klammern begrenzen den Anfang und das Ende eines CSS-Blocks, mit CSS-Inhalt oder ohne Inhalt zwischen den Klammern.](css_syntax_-_block.png)

Solche Blöcke werden natürlich **Deklarationsblöcke** genannt und die Deklarationen darin werden durch ein Semikolon, `;` (U+003B SEMICOLON), getrennt. Ein Deklarationsblock kann leer sein, das heißt, keine Deklarationen enthalten. Leerzeichen um Deklarationen werden ignoriert. Die letzte Deklaration eines Blocks muss nicht mit einem Semikolon abgeschlossen werden, wobei es oft als _guter Stil_ angesehen wird, dies trotzdem zu tun, da es verhindert, dass beim Erweitern des Blocks um eine weitere Deklaration das Hinzufügen des Semikolons vergessen wird.

Ein CSS-Deklarationsblock wird im folgenden Diagramm visualisiert.

![Innerhalb eines CSS-Blocks, eingeklammerte Semikolons trennen Deklarationen, wobei das letzte Semikolon optional, aber als gute Praxis empfohlen wird.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, das heißt eine Liste von durch Semikolons getrennten Deklarationen, ohne die einleitende und schließende Klammer, kann in ein HTML-`[style](/de/docs/Web/HTML/Reference/Global_attributes/style)`-Attribut eingefügt werden.

## CSS-Regelmengen

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, unterschiedliche Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem Bedingungen mit Deklarationsblöcken verknüpft werden. Jeder (gültige) Deklarationsblock wird durch einen oder mehrere kommagetrennte [**Selektoren**](/de/docs/Web/CSS/CSS_selectors) vorangegangen, die als Bedingungen dienen, um einige Elemente der Seite auszuwählen. Eine [Selektorliste](/de/docs/Web/CSS/Selector_list) und ein zugeordneter Deklarationsblock werden zusammen als **Regelmenge** oder oft einfach als **Regel** bezeichnet.

Eine CSS-Regelmenge (oder Regel) wird im folgenden Diagramm visualisiert.

![Eine Gruppe von kommagetrennten Selektoren geht dem durch Klammern begrenzten Deklarationsblock voraus, der mehrere mit Semikolons endende Deklarationen enthält.](ruleset.png)

Da ein Element der Seite von mehreren Selektoren und daher von mehreren Regeln potenziell mehrmals mit unterschiedlichen Werten für eine gegebene Eigenschaft getroffen werden kann, definiert der CSS-Standard, welche Vorrang hat und angewendet werden muss: Dies wird als Kaskadenalgorithmus bezeichnet (siehe [Konfliktlösung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass selbst wenn eine Regelmenge, die durch eine Gruppe von Selektoren charakterisiert ist, eine Art Abkürzung darstellt, die Regelmengen mit jeweils einem einzelnen Selektor ersetzt, dies nicht für die Gültigkeit der Regelmenge selbst gilt.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einzelner Basis-Selektor ungültig ist, wie bei der Verwendung eines unbekannten Pseudo-Elements oder einer Pseudo-Klasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel ignoriert (ebenfalls als ungültig).

## CSS-Anweisungen

Regelgruppen sind die Hauptbausteine eines Stylesheets, das oft nur aus einer großen Liste davon besteht. Aber es gibt weitere Informationen, die ein Webautor im Stylesheet übermitteln möchte, wie den Zeichensatz, weitere externe Stylesheets zum Importieren, Schriften oder Listenetikettbeschreibungen und viele mehr. Es werden andere und spezifische Arten von Anweisungen verwendet, um dies zu tun.

Eine **Anweisung** ist ein Baustein, der mit einem beliebigen Nicht-Leerzeichen-Zeichen beginnt und beim ersten schließenden Block oder Semikolon endet (außerhalb eines Strings, nicht entkommen und nicht in einem anderen {}, () oder \[] Paar enthalten).

![Ein Venn-Diagramm der Anweisungen, das zeigt, dass alle Regelgruppen verschachtelte Anweisungen sind, während einige At-Regeln verschachtelte Anweisungen sind, aber die meisten nicht. Alles, was keine At-Regel oder verschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelgruppen** (oder _Regeln_), die, wie gesehen, eine Sammlung von CSS-Deklarationen mit einer Bedingung verbinden, die durch einen [Selektor](/de/docs/Web/CSS/CSS_selectors) beschrieben wird.
- **At-Regeln**, die mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung weitergehen, das heißt bis zum nächsten Semikolon (;) außerhalb eines Blocks oder dem Ende des nächsten Blocks. Jeder Typ von [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), definiert durch den Bezeichner, kann seine eigene interne Syntax haben, und natürlich Semantik. Sie werden verwendet, um Meta-Daten-Informationen zu übermitteln (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}), oder beschreibende Informationen (wie {{ cssxref("@font-face") }}).

Jede Anweisung, die keine Regelgruppe oder At-Regel ist, ist ungültig und wird ignoriert.

### Verschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **verschachtelten Anweisungen**. Dies sind Anweisungen, die in einem spezifischen Teilset von At-Regeln verwendet werden können – den _bedingten Gruppierungsregeln_. Diese Anweisungen gelten nur, wenn eine spezifische Bedingung erfüllt ist: Der Inhalt der `@media`-At-Regel wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der Inhalt der `@document`-At-Regel wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten nur _Regelgruppen_ innerhalb von bedingten Gruppierungsregeln verwendet werden. Das war sehr restriktiv und diese Einschränkung wurde in [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt, obwohl immer noch experimentell und nicht von jedem Browser unterstützt, können bedingte Gruppierungsregeln eine breitere Auswahl von Inhalten enthalten: Regelgruppen aber auch einige, aber nicht alle, At-Regeln.

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
  - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Kurzschreibweise für Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
