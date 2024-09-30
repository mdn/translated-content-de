---
title: At-rules
slug: Web/CSS/At-rule
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

**At-rules** sind [CSS-Anweisungen](/de/docs/Web/CSS/Syntax#css_statements), die angeben, wie CSS sich verhalten soll. Sie beginnen mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), gefolgt von einem Bezeichner, und umfassen alles bis zum nächsten Semikolon, `;` (U+003B SEMICOLON), oder zum nächsten [CSS-Block](/de/docs/Web/CSS/Syntax#css_declaration_blocks), je nachdem, was zuerst kommt.

## Syntax

### Anweisung-At-rules

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Anweisung-At-rules enden mit einem Semikolon. Es gibt mehrere Anweisung-At-rules, die durch ihre Bezeichner gekennzeichnet sind, jede mit einer unterschiedlichen Syntax:

- {{cssxref("@charset")}}
  - : Ein Algorithmus (hat die syntaktische Form einer At-rule, ist aber keine Definition), der den Fallback-Zeichensatz des Stylesheets bestimmt ([CSS Syntax](/de/docs/Web/CSS/CSS_syntax)).
- {{cssxref("@import")}}
  - : Fordert die CSS-Engine auf, ein externes Stylesheet einzuschließen ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Definiert die Rangfolge bei mehreren Kaskadenschichten ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Block-At-rule](#layer_2) verwendet, um die Stile einer Schicht zu definieren.
- {{cssxref("@namespace")}}
  - : Definiert einen Standard-Namespace für ein Stylesheet oder ein Namespace-Präfix, das ein Selektor nur dann übereinstimmt, wenn der Namespace und andere Selektorkomponenten übereinstimmen ([CSS-Namespaces](/de/docs/Web/CSS/CSS_namespaces)).

### Block-At-rules

```css
@identifier (RULE) {
}
```

Block-At-rules enden in einem `{}`-Block, der verschachtelte Regeln, andere At-rules oder Eigenschafts- oder Deskriptordeklarationen enthält.

- {{cssxref("@counter-style")}}
  - : Definieren benutzerdefinierter Zählerstile und Erweitern vordefinierter Liststile ([CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : Eine bedingte Gruppierungsregel, die ihren Inhalt anwendet, wenn der Container die [`<container-condition>`](/de/docs/Web/CSS/@container#container-condition)s erfüllt ([CSS-Einschluss](/de/docs/Web/CSS/CSS_containment)).
- {{cssxref("@font-face")}}
  - : Definiert Schriftarten-Ressourcenstandorte, sowohl lokal als auch extern, zusammen mit den Stilmerkmalen für den Fall, dass diese Ressourcen mit einer deklarierten {{cssxref("Schriftfamilie")}} verwendet werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` und `@character-variant`)
  - : Steuert die Schriftdarstellung pro Schriftfamilie, indem schriftartspezifische Alternativen oder benutzerdefinierte Namen zu Funktionsindizes in {{cssxref("Schriftvariante-Alternativen")}} in OpenType definiert werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@keyframes")}} (und das `@-webkit-keyframes` Alias)
  - : Definiert eine benannte Animation durch die Beschreibung der definierenden CSS-Stile für Zwischenschritte (oder Schlüsselbilder) in der Animationssequenz ([CSS-Animationen](/de/docs/Web/CSS/CSS_animations)).
- {{cssxref("@layer")}}
  - : Erstellt eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht im Inneren ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Anweisung-At-rule](#layer) verwendet, um die Rangfolge bei mehreren Kaskadenschichten zu definieren.
- {{cssxref("@media")}}
  - : Eine bedingte Gruppierungsregel, die ihren Inhalt anwendet, wenn das Gerät die Kriterien der Bedingung erfüllt, die mit einer _Media Query_ definiert ist ([CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@page")}}
  - : Gibt Aspekte einer zu druckenden Seite an, wie deren Abmessungen, Ausrichtung und Ränder ([CSS-gedruckte Medien](/de/docs/Web/CSS/CSS_paged_media)).
- {{cssxref("@position-try")}}
  - : Definiert benutzerdefinierte Positionsoptionen, die zur Definition von Fallback-Positionierungs- und Ausrichtungsoptionen für Anker-positionierte Elemente verwendet werden können ([CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Definiert eine [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Using_CSS_custom_properties), die eine Typprüfung und Einschränkung der Eigenschaft ermöglicht, Standardwerte festlegt und definiert, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht ([CSS-Benutzerdefinierte Eigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables)).
- {{cssxref("@scope")}}
  - : Definiert einen Bereich, in dem sie auf ausgewählte Elemente angewendet werden und die Stile, die auf die Elemente in diesem Bereich angewendet werden sollen ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@starting-style")}}
  - : Definiert die Startwerte einer Eigenschaft eines Elements, von denen es sich bei der ersten Stiländerung des Elements wegbewegt, wie beispielsweise beim Übergang von `display: none` ([CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)).
- {{cssxref("@supports")}}
  - : Eine bedingte Gruppierungsregel wendet ihren Inhalt an, wenn der Browser die CSS-Funktionen der angegebenen Bedingung unterstützt ([CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Opt-in für die aktuelle Dokument in eine [Ansichtsübergang](/de/docs/Web/API/View_Transitions_API), und das Ziel-Dokument ebenfalls im Falle von Übergängen zwischen Dokumenten.

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

- [CSS At-rule-Funktionen](/de/docs/Web/CSS/At-rule-functions)
- [Verschachtelung von CSS-At-rules](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [CSS-Anweisungen](/de/docs/Web/CSS/Syntax#css_statements)
- [CSSRule](/de/docs/Web/API/CSSRule)-Schnittstelle
- [CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
