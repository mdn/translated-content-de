---
title: At-Regeln
slug: Web/CSS/At-rule
l10n:
  sourceCommit: 3cc0471e95f9bf1ef2f9814cb0fa9c28d928fbc5
---

{{CSSRef}}

**At-Regeln** sind [CSS-Anweisungen](/de/docs/Web/CSS/Syntax#css_statements), die festlegen, wie CSS sich verhalten soll. Sie beginnen mit einem At-Zeichen, '`@`' (`U+0040 COMMERCIAL AT`), gefolgt von einem Identifikator und umfassen alles bis zum nächsten Semikolon, '`;`' (`U+003B SEMICOLON`), oder dem nächsten [CSS-Block](/de/docs/Web/CSS/Syntax#css_declaration_blocks), je nachdem, was zuerst kommt.

## Syntax

### Anweisungs-At-Regeln

```css
/* Allgemeine Struktur */
@identifier (RULE);

/* Beispiel: teilt dem Browser mit, das UTF-8-Zeichenset zu verwenden */
@charset "utf-8";
```

Anweisungs-At-Regeln enden mit einem Semikolon. Es gibt mehrere Anweisungs-At-Regeln, gekennzeichnet durch ihre Identifikatoren, jede mit einer unterschiedlichen Syntax:

- {{cssxref("@charset")}}
  - : Ein Algorithmus (hat die syntaktische Form einer At-Regel, ist aber keine Definition), der das Ersatzzeichensatz bestimmt, der vom Stylesheet verwendet wird ([CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)).
- {{cssxref("@import")}}
  - : Teilt der CSS-Engine mit, ein externes Stylesheet einzuschließen ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Definiert die Reihenfolge der Priorität bei mehreren Kaskadenschichten ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Block-At-Regel](#layer_2) verwendet, um die Stile einer Schicht zu definieren.
- {{cssxref("@namespace")}}
  - : Definiert einen Standard-Namespace für ein Stylesheet oder ein Namespace-Präfix, das nur dann mit einem Selektor übereinstimmt, wenn der Namespace und andere Selektorkomponenten übereinstimmen ([CSS-Namespaces](/de/docs/Web/CSS/CSS_namespaces)).

### Block-At-Regeln

```css
@identifier (RULE) {
}
```

Block-At-Regeln enden mit einem `{}`-Block, der verschachtelte Regeln, andere At-Regeln oder Eigenschafts- oder Descriptor-Deklarationen enthält.

- {{cssxref("@counter-style")}}
  - : Definiert benutzerdefinierte Zählerstile und erweitert vordefinierte Listenstile ([CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Container die [`<container-condition>`](/de/docs/Web/CSS/@container#container-condition)en erfüllt ([CSS-Einschränkung](/de/docs/Web/CSS/CSS_containment)).
- {{cssxref("@font-face")}}
  - : Definiert Schriftressourcen-Standorte, sowohl lokal als auch extern, zusammen mit den Stilmerkmalen, wenn diese Ressourcen mit einer deklarierten {{cssxref("font-family")}} verwendet werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` und `@character-variant`)
  - : Steuert die Anzeige der Schriftart pro Schriftartfamilie, indem schriftartenspezifische Alternativen oder benutzerdefinierte Namen für Feature-Indizes in {{cssxref("font-variant-alternates")}} in OpenType definiert werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@keyframes")}} (und das Alias `@-webkit-keyframes`)
  - : Definiert eine benannte Animation, indem CSS-Stile für Zwischensteps (oder Schlüsselbilder) im Animationsverlauf beschrieben werden ([CSS-Animationen](/de/docs/Web/CSS/CSS_animations)).
- {{cssxref("@layer")}}
  - : Erstellt eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht innen ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Auch als [Anweisungs-At-Regel](#layer) verwendet, um die Reihenfolge der Priorität bei mehreren Kaskadenschichten zu definieren.
- {{cssxref("@media")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn das Gerät die Kriterien der mit einer _Media-Query_ definierten Bedingung erfüllt ([CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@page")}}
  - : Spezifiziert Aspekte einer Seite, die gedruckt werden soll, wie deren Abmessungen, Ausrichtung und Ränder ([CSS-seitierte Medien](/de/docs/Web/CSS/CSS_paged_media)).
- {{cssxref("@position-try")}}
  - : Definiert benutzerdefinierte Positionierungsoptionen, die verwendet werden können, um Fallback-Positionierungs- und Ausrichtungsoptionen für Anker-positionierte Elemente zu definieren ([CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Definiert eine [CSS-Benutzereigenschaft](/de/docs/Web/CSS/Using_CSS_custom_properties), die Typprüfung und Einschränkung von Eigenschaften, Festlegen von Standardwerten und Definieren, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht, ermöglicht ([CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)).
- {{cssxref("@scope")}}
  - : Definiert einen Geltungsbereich, in dem sie auf ausgewählte Elemente sowie die Stile, die auf die Elemente in diesem Geltungsbereich angewendet werden sollen, angewendet werden ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@starting-style")}}
  - : Definiert die Anfangseigenschaftswerte für ein Element, von denen es ausgehend übergeht, wenn das Element seine erste Stilaktualisierung erhält, z.B. beim Übergang von `display: none` ([CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)).
- {{cssxref("@supports")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Browser die CSS-Features der angegebenen Bedingung unterstützt ([CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Meldet das aktuelle Dokument für eine [Ansichtsübergang](/de/docs/Web/API/View_Transitions_API) an, sowie das Zieldokument im Falle von Übergängen bei der Navigation zwischen Dokumenten.

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

- [Funktionen von CSS-At-Regeln](/de/docs/Web/CSS/At-rule-functions)
- [Verschachteln von CSS-At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [CSS-Anweisungen](/de/docs/Web/CSS/Syntax#css_statements)
- [CSSRule](/de/docs/Web/API/CSSRule) Schnittstelle
- [CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
