---
title: Syntax
slug: Web/CSS/CSS_syntax/Syntax
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Das grundlegende Ziel der Cascading Stylesheet ([CSS](/de/docs/Web/CSS)) Sprache ist es, einer Browser-Engine zu ermöglichen, Elemente der Seite mit spezifischen Merkmalen zu gestalten, wie Farben, Positionierung oder Dekorationen. Die _CSS-Syntax_ spiegelt dieses Ziel wider, und ihre grundlegenden Bausteine sind:

- Die **property** (Eigenschaft), die ein Bezeichner ist, also ein lesbarer _Name_, der definiert, welches Merkmal betrachtet wird.
- Der **value** (Wert), der beschreibt, wie das Merkmal von der Engine gehandhabt werden soll. Jede Eigenschaft hat eine Reihe gültiger Werte, die durch eine formale Grammatik definiert sind, sowie eine semantische Bedeutung, die von der Browser-Engine implementiert wird.

## CSS-Deklarationen

Das Festlegen von CSS-Eigenschaften auf spezifische Werte ist die Kernfunktion der CSS-Sprache. Ein Paar aus Eigenschaft und Wert wird als **Deklaration** bezeichnet, und jede CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden müssen, um das Layout anzupassen und es zu gestalten.

Sowohl Eigenschaften als auch Werte sind standardmäßig in CSS nicht empfindlich gegenüber Groß- und Kleinschreibung. Das Paar wird durch einen Doppelpunkt, `:` (U+003A COLON), getrennt, und Leerzeichen vor, zwischen und nach Eigenschaften und Werten, jedoch nicht notwendigerweise innerhalb, werden ignoriert.

![Eine CSS-Deklaration ist ein Paar aus Eigenschaft und Wert, getrennt durch einen Doppelpunkt, und mit einem Semikolon abgeschlossen.](css_syntax_-_declaration.png)

Es gibt [Hunderte verschiedene Eigenschaften](/de/docs/Web/CSS/Reference) in CSS und eine praktisch unbegrenzte Anzahl unterschiedlicher Werte. Nicht alle Paare aus Eigenschaften und Werten sind erlaubt, und jede Eigenschaft definiert, welche Werte gültig sind. Wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ angesehen und von der CSS-Engine vollständig ignoriert.

## CSS-Deklarationsblöcke

Deklarationen werden in **Blöcken** gruppiert, die durch eine öffnende Klammer `{` (U+007B LEFT CURLY BRACKET) und eine schließende Klammer `}` (U+007D RIGHT CURLY BRACKET) begrenzt sind. Blöcke können manchmal verschachtelt sein, weshalb öffnende und schließende Klammern übereinstimmen müssen.

![Zwei geschweifte Klammern begrenzen den Anfang und das Ende eines CSS-Blocks, der CSS-Inhalt oder keinen Inhalt zwischen den Klammern enthalten kann.](css_syntax_-_block.png)

Solche Blöcke werden logischerweise als **Deklarationsblöcke** bezeichnet, und die darin enthaltenen Deklarationen werden durch ein Semikolon `;` (U+003B SEMICOLON) getrennt. Ein Deklarationsblock kann leer sein, das heißt keine Deklaration enthalten. Leerzeichen um die Deklarationen werden ignoriert. Die letzte Deklaration eines Blocks muss nicht mit einem Semikolon abgeschlossen werden, obwohl es oft als _gute Praxis_ gilt, dies zu tun, da es verhindert, dass das Hinzufügen eines weiteren Eintrags zu Fehlern führt.

Ein CSS-Deklarationsblock wird im folgenden Diagramm dargestellt.

![Innerhalb eines CSS-Blocks, der von geschweiften Klammern umgeben ist, trennen Semikolons Deklarationen, wobei das letzte Semikolon optional, aber als gute Praxis empfohlen wird.](declaration-block.png)

> [!NOTE]
> Der Inhalt eines CSS-Deklarationsblocks, also eine Liste von durch Semikolon getrennten Deklarationen ohne die initialen und schließenden Klammern, kann in einem HTML-[`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut eingefügt werden.

## CSS-Regelsätze

Wenn Stylesheets nur eine Deklaration auf jedes Element einer Webseite anwenden könnten, wären sie ziemlich nutzlos. Das eigentliche Ziel ist es, unterschiedliche Deklarationen auf verschiedene Teile des Dokuments anzuwenden.

CSS ermöglicht dies, indem es Bedingungen mit Deklarationsblöcken verbindet. Jeder (gültige) Deklarationsblock wird von einem oder mehreren durch Kommas getrennten [**Selektoren**](/de/docs/Web/CSS/CSS_selectors), also Bedingungen, die einige Elemente der Seite auswählen, vorangestellt. Eine [Selektorenliste](/de/docs/Web/CSS/Selector_list) und ein zugehöriger Deklarationsblock zusammen werden als **Regelsatz** (oder oft einfach **Regel**) bezeichnet.

Ein CSS-Regelsatz (oder Regel) wird im folgenden Diagramm dargestellt.

![Eine Gruppe von durch Kommas getrennten Selektoren steht vor dem durch geschweifte Klammern umgebenen Deklarationsblock, der mehrere durch Semikolons getrennte Deklarationen enthält.](ruleset.png)

Da ein Element der Seite durch mehrere Selektoren und damit durch mehrere Regeln, die potenziell einen gegebenen Wert mehrfach enthalten, ausgewählt werden kann, definiert der CSS-Standard, welche Regel Vorrang hat und angewendet werden muss: Dies wird als Cascade-Algorithmus bezeichnet (siehe [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)).

> [!NOTE]
> Es ist wichtig zu beachten, dass auch wenn ein Regelsatz, der von einer Gruppe von Selektoren charakterisiert wird, eine Art Kurzform darstellt, die Regelsätze mit einem einzelnen Selektor ersetzt, diese Regel nicht auf die Gültigkeit des Regelsatzes selbst zutrifft.
>
> Dies führt zu einer wichtigen Konsequenz: Wenn ein einzelner Basisselektor ungültig ist, etwa bei der Verwendung eines unbekannten Pseudo-Elements oder einer Pseudo-Klasse, ist der gesamte _Selektor_ ungültig und daher wird die gesamte Regel (als ebenfalls ungültig) ignoriert.

## CSS-Anweisungen

Regelsätze sind die Hauptbausteine eines Stylesheets, das häufig nur aus einer großen Liste von ihnen besteht. Aber es gibt andere Informationen, die ein Webseitenautor im Stylesheet vermitteln möchte, wie den Zeichensatz, andere externe Stylesheets zum Importieren, Definitionen für Schriftarten oder Zählerlisten und vieles mehr. Dafür werden andere, spezifische Arten von Anweisungen verwendet.

Eine **Anweisung** ist ein Baustein, der mit einem beliebigen nicht-leeren Zeichen beginnt und am ersten schließenden Klammerzeichen oder Semikolon endet (außerhalb eines Strings, nicht maskiert und nicht in ein anderes {}, () oder \[] Paar eingeschlossen).

![Ein Venn-Diagramm von Anweisungen zeigt, dass alle Regelsätze geschachtelte Anweisungen sind, einige Atrules geschachtelt sind, aber die meisten nicht. Alles, was weder ein Atrule noch geschachtelt ist, ist ungültig.](css_syntax_-_statements_venn_diag.png)

Es gibt zwei Arten von Anweisungen:

- **Regelsätze** (oder _Regeln_), die wie bereits beschrieben eine Sammlung von CSS-Deklarationen mit einer durch [Selektoren](/de/docs/Web/CSS/CSS_selectors) definierten Bedingung verbinden.
- **At-rules**, die mit einem At-Zeichen `@` (U+0040 COMMERCIAL AT) beginnen, gefolgt von einem Bezeichner und dann bis zum Ende der Anweisung fortgeführt werden, das ist bis zum nächsten Semikolon (;) außerhalb eines Blocks oder bis zum Ende des nächsten Blocks. Jede Art von [At-rules](/de/docs/Web/CSS/CSS_syntax/At-rule), definiert durch den Bezeichner, kann eine eigene interne Syntax und Bedeutung haben. Sie werden verwendet, um Metadaten-Informationen (wie {{ cssxref("@layer") }} oder {{ cssxref("@import") }}), bedingte Informationen (wie {{ cssxref("@media") }} oder {{ cssxref("@document") }}) oder beschreibende Informationen (wie {{ cssxref("@font-face") }}) zu übermitteln.

Jede Anweisung, die kein Regelsatz oder eine At-rule ist, ist ungültig und wird ignoriert.

### Geschachtelte Anweisungen

Es gibt eine weitere Gruppe von Anweisungen – die **geschachtelten Anweisungen**. Diese können in einer spezifischen Untergruppe von At-rules – den _bedingten Gruppenregeln_ – verwendet werden. Diese Anweisungen gelten nur, wenn eine spezifische Bedingung erfüllt ist: Der Inhalt der `@media`-Regel wird nur angewendet, wenn das Gerät, auf dem der Browser läuft, die ausgedrückte Bedingung erfüllt; der Inhalt der `@document`-Regel wird nur angewendet, wenn die aktuelle Seite einige Bedingungen erfüllt, und so weiter. In CSS1 und CSS2.1 konnten innerhalb bedingter Gruppenregeln nur _Regelsätze_ verwendet werden. Diese Einschränkung war sehr restriktiv und wurde mit [_CSS Conditionals Level 3_](/de/docs/Web/CSS/CSS_conditional_rules) aufgehoben. Jetzt, obwohl noch experimentell und nicht von jedem Browser unterstützt, können bedingte Gruppenregeln eine größere Bandbreite an Inhalten enthalten: Regelsätze, aber auch einige, jedoch nicht alle, At-rules.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Selector-Struktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- Werte
  - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [Kurzschreibweise von Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
