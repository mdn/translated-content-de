---
title: At-regeln
slug: Web/CSS/At-rule
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

**At-Regeln** sind [CSS-Anweisungen](/de/docs/Web/CSS/Syntax#css_statements), die CSS anweisen, wie es sich verhalten soll. Sie beginnen mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), gefolgt von einem Bezeichner und umfassen alles bis zum nächsten Semikolon, `;` (U+003B SEMICOLON), oder bis zum nächsten [CSS-Block](/de/docs/Web/CSS/Syntax#css_declaration_blocks), je nachdem, was zuerst kommt.

## Syntax

### Anweisungs-At-Regeln

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Anweisungs-At-Regeln enden mit einem Semikolon. Es gibt mehrere solcher Regeln, die durch ihre Bezeichner gekennzeichnet sind, jede mit einer unterschiedlichen Syntax:

- {{cssxref("@charset")}}
  - : Ein Algorithmus (hat die syntaktische Form einer At-Regel, ist aber keine Definition), der den Fallback-Zeichensatz festlegt, der vom Stylesheet verwendet wird ([CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)).
- {{cssxref("@import")}}
  - : Weist die CSS-Engine an, ein externes Stylesheet einzubinden ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Definiert die Reihenfolge der Priorität im Falle mehrerer Kaskadierungsebenen ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Block At-Regel](#layer_2) verwendet, um die Stile einer Ebene zu definieren.
- {{cssxref("@namespace")}}
  - : Definiert einen Standard-Namespace für ein Stylesheet oder ein Namespace-Präfix, das ein Selektor nur dann trifft, wenn das Namespace und die anderen Selektor-Komponenten übereinstimmen ([CSS-Namespace](/de/docs/Web/CSS/CSS_namespaces)).

### Block-At-Regeln

```css
@identifier (RULE) {
}
```

Block-At-Regeln enden in einem `{}`-Block, der verschachtelte Regeln, andere At-Regeln oder Deklarationen von Eigenschaften oder Deskriptoren enthält.

- {{cssxref("@counter-style")}}
  - : Definieren von benutzerdefinierten Zählerstilen und Erweitern vordefinierter Listenstile ([CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Container die [`<container-condition>`](/de/docs/Web/CSS/@container#container-condition)s erfüllt ([CSS-Einschließung](/de/docs/Web/CSS/CSS_containment)).
- {{cssxref("@font-face")}}
  - : Definiert Schriftressourcen-Standorte, sowohl lokal als auch extern, zusammen mit den Stilmerkmalen, wenn diese Ressourcen mit einer erklärten {{cssxref("font-family")}} verwendet werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` und `@character-variant`)
  - : Steuert die Schriftanzeige pro Schriftfamilie, indem schriftart-spezifische Alternativen oder benutzerdefinierte Namen zu Feature-Indizes in {{cssxref("font-variant-alternates")}} in OpenType definiert werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@keyframes")}} (und das Alias `@-webkit-keyframes`)
  - : Definiert eine benannte Animation, indem die CSS-Stile für Zwischenschritte (oder Schlüsselbilder) in der Animationssequenz beschrieben werden ([CSS-Animationen](/de/docs/Web/CSS/CSS_animations)).
- {{cssxref("@layer")}}
  - : Erzeugt eine benannte Kaskadierungsebene mit den CSS-Regeln für diese Ebene innerhalb ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Anweisungs-At-Regel](#layer) verwendet, um die Reihenfolge der Priorität im Falle mehrerer Kaskadierungsebenen zu definieren.
- {{cssxref("@media")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn das Gerät die Kriterien der mit einer _Media-Query_ definierten Bedingung erfüllt ([CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@page")}}
  - : Gibt Aspekte einer zu druckenden Seite an, wie ihre Abmessungen, Ausrichtung und Ränder ([CSS-Seitenmedien](/de/docs/Web/CSS/CSS_paged_media)).
- {{cssxref("@position-try")}}
  - : Definiert benutzerdefinierte Positionseinstellungen, die verwendet werden können, um Fallback-Positionierungs- und Ausrichtungsoptionen für verankerungspositionierte Elemente zu definieren ([CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Definiert eine [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Using_CSS_custom_properties), ermöglicht Typüberprüfung und Einschränkung von Eigenschaften, das Festlegen von Standardwerten und definiert, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht ([CSS-Benutzerdefinierte Eigenschaften für Kaskadierungsvariablen](/de/docs/Web/CSS/CSS_cascading_variables)).
- {{cssxref("@scope")}}
  - : Definiert einen Anwendungsbereich, um sie auf ausgewählte Elemente und die Stile anzuwenden, die auf die Elemente in diesem Bereich anzuwenden sind ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@starting-style")}}
  - : Bestimmt die anfänglichen Eigenschaftswerte für ein Element, um von diesen aus zu wechseln, wenn das Element seine erste Stilaktualisierung erhält, beispielsweise beim Übergang von `display: none` ([CSS-Transitions](/de/docs/Web/CSS/CSS_transitions)).
- {{cssxref("@supports")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Browser die CSS-Features der gegebenen Bedingung unterstützt ([CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Schließt das aktuelle Dokument in eine [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) ein und auch das Zieldokument im Falle von übergreifenden Dokumentnavigationsübergängen.

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

- [Funktionen der CSS-At-Regeln](/de/docs/Web/CSS/At-rule-functions)
- [Einschachtelung von CSS-At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [CSS-Anweisungen](/de/docs/Web/CSS/Syntax#css_statements)
- [CSSRule](/de/docs/Web/API/CSSRule)-Schnittstelle
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
