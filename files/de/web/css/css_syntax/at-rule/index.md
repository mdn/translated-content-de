---
title: At-Regeln
slug: Web/CSS/CSS_syntax/At-rule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

**At-Regeln** sind [CSS-Anweisungen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_statements), die CSS Anweisungen geben, wie es sich verhalten soll. Sie beginnen mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), gefolgt von einem Bezeichner. Sie umfassen alles vom At-Schlüsselwort bis zum nächsten Semikolon, `;` (U+003B SEMICOLON), oder dem nächsten [CSS-Block](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declaration_blocks), je nachdem, was zuerst kommt.

At-Regeln werden verwendet, um Stilregeln und andere At-Regeln zu gruppieren und zu strukturieren, Stilinformationen zu deklarieren, die nicht direkt mit ausgewähltem Inhalt verbunden sind, und syntaktische Konstrukte wie Importe und Namespace-Schlüsselwortzuordnungen zu verwalten.

## Syntax

Die At-Regel ist im [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul definiert, wobei verschiedene At-Regeln in ihren jeweiligen Modulen definiert sind. Sie nehmen im Allgemeinen je nach spezifischer Regel und ihrem Zweck eine von zwei Formen an: Anweisungs-At-Regeln und Block-At-Regeln, die geschachtelte qualifizierte Regeln, At-Regeln oder Deklarationen enthalten können.

### Anweisungs-At-Regeln

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Anweisungs-At-Regeln enden mit einem Semikolon. Es gibt mehrere Anweisungs-At-Regeln, die durch ihre Bezeichner gekennzeichnet sind, jede mit einer unterschiedlichen Syntax:

- {{cssxref("@charset")}}
  - : Ein Algorithmus (hat die syntaktische Form einer At-Regel, ist aber keine Definition), der den Fallback-Zeichensatz bestimmt, der vom Stylesheet verwendet wird ([CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)).
- {{cssxref("@import")}}
  - : Weist die CSS-Engine an, ein externes Stylesheet einzubinden ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Definiert die Prioritätsreihenfolge im Falle mehrerer Kaskadenschichten ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Block-At-Regel](#layer_2) verwendet, um die Stile einer Schicht zu definieren.
- {{cssxref("@namespace")}}
  - : Definiert einen Standard-Namespace für ein Stylesheet oder ein Namespace-Präfix, das ein Selektor nur erfüllt, wenn der Namespace und andere Komponenten des Selektors übereinstimmen ([CSS-Namespace](/de/docs/Web/CSS/CSS_namespaces)).

### Block-At-Regeln

```css
@identifier (RULE) {
}
```

Block-At-Regeln enden in einem `{}`-Block, der geschachtelte Regeln, andere At-Regeln oder Eigenschafts- oder Deskriptor-Deklarationen enthält.

- {{cssxref("@counter-style")}}
  - : Definiert benutzerdefinierte Zählerstile und erweitert vordefinierte Listenstile ([CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : Eine konditionale Gruppierungsregel, die ihren Inhalt anwendet, wenn der Container die [`<container-condition>`](/de/docs/Web/CSS/@container#container-condition)s erfüllt ([CSS-Containment](/de/docs/Web/CSS/CSS_containment)).
- {{cssxref("@font-face")}}
  - : Definiert Schriftartressourcen, sowohl lokale als auch externe, sowie die Stileigenschaften, die verwendet werden, wenn diese Ressourcen mit einer deklarierten {{cssxref("font-family")}} verwendet werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` und `@character-variant`)
  - : Steuert die Schriftanzeige pro Schriftfamilie, indem schriftartenspezifische Alternativen definiert oder benutzerdefinierte Namen Feature-Indizes in {{cssxref("font-variant-alternates")}} in OpenType zugewiesen werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@keyframes")}} (und der Alias `@-webkit-keyframes`)
  - : Definiert eine benannte Animation, indem CSS-Stile für Zwischenschritte (oder Keyframes) in der Animationssequenz beschrieben werden ([CSS-Animationen](/de/docs/Web/CSS/CSS_animations)).
- {{cssxref("@layer")}}
  - : Erstellt eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Anweisungs-At-Regel](#layer) verwendet, um die Prioritätsreihenfolge im Falle mehrerer Kaskadenschichten zu definieren.
- {{cssxref("@media")}}
  - : Eine konditionale Gruppierungsregel, die ihren Inhalt anwendet, wenn das Gerät die Kriterien der im Medientyp definierten Bedingung erfüllt ([CSS-Konditionalregeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@page")}}
  - : Gibt Aspekte einer zu druckenden Seite an, wie deren Dimensionen, Ausrichtung und Ränder ([CSS-Paged-Media](/de/docs/Web/CSS/CSS_paged_media)).
- {{cssxref("@position-try")}}
  - : Definiert benutzerdefinierte Positionsoptionen, die verwendet werden können, um Fallback-Positionierungs- und Ausrichtungsoptionen für Anker-positionierte Elemente festzulegen ([CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Definiert eine [CSS-Benutzereigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), um Typprüfungen und Einschränkungen durchzuführen, Standardwerte festzulegen und zu definieren, ob eine Benutzereigenschaft Werte erben kann oder nicht ([CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)).
- {{cssxref("@scope")}}
  - : Definiert einen Bereich, in dem die Stile für ausgewählte Elemente angewendet werden sollen, sowie die Stile, die auf die Elemente in diesem Bereich anzuwenden sind ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@starting-style")}}
  - : Definiert die Anfangseigenschaften für ein Element, von denen aus Übergänge beginnen sollen, wenn das Element seine erste Stil-Aktualisierung erhält, z. B. beim Übergang von `display: none` ([CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)).
- {{cssxref("@supports")}}
  - : Eine konditionale Gruppierungsregel, die ihren Inhalt anwendet, wenn der Browser die CSS-Funktionen der gegebenen Bedingung unterstützt ([CSS-Konditionalregeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Melden Sie das aktuelle Dokument bei einer [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) an, sowie das Ziel-Dokument im Falle von Übergängen zwischen Dokumenten.

## Index

- {{cssxref("@charset")}}
- {{cssxref("@color-profile")}}
- {{cssxref("@container")}}
- {{cssxref("@counter-style")}}
- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}
- {{cssxref("@font-palette-values")}}
- {{cssxref("@import")}}
- {{cssxref("@keyframes")}}
- {{cssxref("@layer")}}
- {{cssxref("@media")}}
- {{cssxref("@namespace")}}
- {{cssxref("@page")}}
- {{cssxref("@position-try")}}
- {{cssxref("@property")}}
- {{cssxref("@scope")}}
- {{cssxref("@starting-style")}}
- {{cssxref("@supports")}}
- {{cssxref("@view-transition")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-At-Regelfunktionen](/de/docs/Web/CSS/At-rule-functions)
- [Verschachtelung von CSS-At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [CSS-Anweisungen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_statements)
- [CSSRule](/de/docs/Web/API/CSSRule)-Schnittstelle
- [CSS-Konditionalregeln](/de/docs/Web/CSS/CSS_conditional_rules)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
