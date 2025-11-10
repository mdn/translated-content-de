---
title: At-Regeln
slug: Web/CSS/CSS_syntax/At-rules
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

**At-Regeln** sind [CSS-Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_statements), die CSS anweisen, wie es sich verhalten soll. Sie beginnen mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), gefolgt von einem Bezeichner. Sie umfassen alles von dem At-Schlüsselwort bis zum nächsten Semikolon, `;` (U+003B SEMICOLON), oder dem nächsten [CSS-Block](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declaration_blocks), je nachdem, was zuerst kommt.

At-Regeln werden verwendet, um Stilregeln und andere At-Regeln zu gruppieren und zu strukturieren, Stilinformationen zu erklären, die nicht direkt mit dem ausgewählten Inhalt verbunden sind, und syntaktische Konstrukte wie Importe und Namensraumzuordnungen zu verwalten.

## Syntax

Die At-Regel wird im [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)-Modul definiert, wobei verschiedene At-Regeln in ihren jeweiligen Modulen definiert sind. Sie nehmen im Allgemeinen eine von zwei Formen an, abhängig von der spezifischen Regel und ihrem Zweck: Anweisungen-At-Regeln und Block-At-Regeln, die geschachtelte qualifizierte Regeln, At-Regeln oder Deklarationen enthalten können.

### Anweisungen-At-Regeln

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Anweisungen-At-Regeln enden mit einem Semikolon. Es gibt mehrere Anweisungen-At-Regeln, die durch ihre Bezeichner gekennzeichnet sind, jede mit einer anderen Syntax:

- {{cssxref("@charset")}}
  - : Ein Algorithmus (hat die syntaktische Form einer At-Regel, ist aber keine Definition), der den Fallback-Zeichensatz des Stylesheets bestimmt ([CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)).
- {{cssxref("@import")}}
  - : Fordert die CSS-Engine auf, ein externes Stylesheet einzubinden ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)).
- {{cssxref("@layer")}}
  - : Definiert die Prioritätsreihenfolge bei mehreren Kaskadenebenen ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)). Wird auch als [Block-At-Regel](#layer_2) verwendet, um die Stile einer Ebene zu definieren.
- {{cssxref("@namespace")}}
  - : Definiert einen Standard-Namensraum für ein Stylesheet oder ein Namensraum-Präfix, das ein Selektor nur dann erfüllt, wenn der Namensraum und andere Selektor-Komponenten übereinstimmen ([CSS-Namensräume](/de/docs/Web/CSS/Guides/Namespaces)).

### Block-At-Regeln

```css
@identifier (RULE) {
}
```

Block-At-Regeln enden mit einem `{}`-Block, der geschachtelte Regeln, andere At-Regeln oder Eigenschafts- oder Deskriptor-Deklarationen enthält.

- {{cssxref("@counter-style")}}
  - : Definiert benutzerdefinierte Zählerstile und erweitert vordefinierte Listenstile ([CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)).
- {{cssxref("@container")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Container die [`<container-condition>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-condition) erfüllt ([CSS-Eindämmung](/de/docs/Web/CSS/Guides/Containment)).
- {{cssxref("@font-face")}}
  - : Definiert Schriftressourcenstandorte, sowohl lokal als auch extern, zusammen mit den Stilmerkmalen für die Verwendung dieser Ressourcen mit einer deklarierten {{cssxref("font-family")}} ([CSS-Schriften](/de/docs/Web/CSS/Guides/Fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` und `@character-variant`)
  - : Steuert die Schriftdarstellung pro Schriftfamilie, indem schrifttypenspezifische Alternativen oder benutzerdefinierte Namen für Feature-Indizes in {{cssxref("font-variant-alternates")}} in OpenType definiert werden ([CSS-Schriften](/de/docs/Web/CSS/Guides/Fonts)).
- {{cssxref("@keyframes")}} (und das `@-webkit-keyframes` Alias)
  - : Definiert eine benannte Animation, indem CSS-Stile für Zwischenschritte (oder Keyframes) in der Animationssequenz beschrieben werden ([CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)).
- {{cssxref("@layer")}}
  - : Erstellt eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht inside ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)). Wird auch als [Anweisungen-At-Regel](#layer) verwendet, um die Prioritätsreihenfolge bei mehreren Kaskadenschichten zu definieren.
- {{cssxref("@media")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn das Gerät die Kriterien der Bedingung erfüllt, die mit einer _Media Query_ definiert wurde ([CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules)).
- {{cssxref("@page")}}
  - : Gibt Aspekte einer zu druckenden Seite an, wie z.B. ihre Abmessungen, Ausrichtung und Ränder ([CSS-Seitenmedien](/de/docs/Web/CSS/Guides/Paged_media)).
- {{cssxref("@position-try")}}
  - : Definiert benutzerdefinierte Positionsoptionen, die für die Definition von Fallback-Positionierungs- und Ausrichtungsoptionen für verankerte Elemente verwendet werden können ([CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)).
- {{cssxref("@property")}}
  - : Definiert eine [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), die die Eigenschaftstypprüfung und -einschränkung, das Setzen von Standardwerten und die Definition, ob eine benutzerdefinierte Eigenschaft Werte erben kann, ermöglicht ([CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables)).
- {{cssxref("@scope")}}
  - : Definiert einen Anwendungsbereich, in dem sie auf ausgewählte Elemente angewendet werden, und die Stile, die auf die Elemente in diesem Bereich angewendet werden sollen ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)).
- {{cssxref("@starting-style")}}
  - : Definiert die Anfangswerte für ein Element, um von dort aus zu wechseln, wenn das Element sein erstes Stil-Update erhält, z.B. beim Übergang von `display: none` ([CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions)).
- {{cssxref("@supports")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Browser die CSS-Funktionen der gegebenen Bedingung unterstützt ([CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Setzt das aktuelle Dokument und das Zieldokument bei Übergängen über Dokumentengrenzen hinweg auf eine [Ansichtsübergang](/de/docs/Web/API/View_Transition_API).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-At-Regeln](/de/docs/Web/CSS/Reference/At-rules)
- [CSS-At-Regelfunktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [Schachteln von At-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules)
- [CSS-Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_statements)
- [CSSRule](/de/docs/Web/API/CSSRule) Schnittstelle
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) Modul
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
