---
title: At-Regeln
slug: Web/CSS/At-rule
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

**At-Regeln** sind [CSS-Anweisungen](/de/docs/Web/CSS/Syntax#css_statements), die angeben, wie CSS sich verhalten soll. Sie beginnen mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), gefolgt von einem Bezeichner und umfassen alles bis zum nächsten Semikolon, `;` (U+003B SEMICOLON), oder bis zum nächsten [CSS-Block](/de/docs/Web/CSS/Syntax#css_declaration_blocks), je nachdem, was zuerst kommt.

## Syntax

### Anweisungs-At-Regeln

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Anweisungs-At-Regeln enden mit einem Semikolon. Es gibt mehrere Anweisungs-At-Regeln, die durch ihre Bezeichner bezeichnet werden und jeweils eine unterschiedliche Syntax haben:

- {{cssxref("@charset")}}
  - : Ein Algorithmus (hat die syntaktische Form einer At-Regel, ist aber keine Definition), der den Fallback-Zeichensatz bestimmt, der vom Stylesheet verwendet wird ([CSS Syntax](/de/docs/Web/CSS/CSS_syntax)).
- {{cssxref("@import")}}
  - : Weist die CSS-Engine an, ein externes Stylesheet einzubinden ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Definiert die Reihenfolge der Vorrangigkeit bei mehreren Kaskadenschichten ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Block-At-Regel](#layer_2) verwendet, um die Stile einer Ebene zu definieren.
- {{cssxref("@namespace")}}
  - : Definiert einen Standard-Namespace für ein Stylesheet oder ein Namespace-Präfix, das ein Selektor nur dann trifft, wenn der Namespace und andere Selektor-Komponenten übereinstimmen ([CSS-Namespace](/de/docs/Web/CSS/CSS_namespaces)).

### Block-At-Regeln

```css
@identifier (RULE) {
}
```

Block-At-Regeln enden in einem `{}`-Block, der verschachtelte Regeln, andere At-Regeln oder Deklarationen von Eigenschaften oder Deskriptoren enthält.

- {{cssxref("@counter-style")}}
  - : Definiert benutzerdefinierte Zählerstile und erweitert vordefinierte Listenstile ([CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Container die [`<container-condition>`](/de/docs/Web/CSS/@container#container-condition)s erfüllt ([CSS-Eindämmung](/de/docs/Web/CSS/CSS_containment)).
- {{cssxref("@font-face")}}
  - : Definiert die Standorte von Schriftressourcen, sowohl lokal als auch extern, zusammen mit den Stilmerkmalen für die Nutzung dieser Ressourcen mit einer deklarierten {{cssxref("font-family")}} ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` und `@character-variant`)
  - : Steuerung der Schriftdarstellung pro Schriftartfamilie durch Definition von schriftartspezifischen Alternativen oder benutzerdefinierten Namen, um Indexe in {{cssxref("font-variant-alternates")}} in OpenType zu kennzeichnen ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@keyframes")}} (und das Alias `@-webkit-keyframes`)
  - : Definiert eine benannte Animation, indem CSS-Stile für Zwischenschritte (oder Schlüsselbilder) in der Animationssequenz beschrieben werden ([CSS-Animationen](/de/docs/Web/CSS/CSS_animations)).
- {{cssxref("@layer")}}
  - : Erstellt eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht im Inneren ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Auch als [Anweisungs-At-Regel](#layer) verwendet, um die Reihenfolge der Vorrangigkeit bei mehreren Kaskadenschichten zu definieren.
- {{cssxref("@media")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn das Gerät die Kriterien des Zustands erfüllt, die mit einer _Media Query_ definiert wurden ([CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@page")}}
  - : Gibt Aspekte einer zu druckenden Seite an, wie ihre Abmessungen, Ausrichtung und Ränder ([CSS-Seitenmedien](/de/docs/Web/CSS/CSS_paged_media)).
- {{cssxref("@position-try")}}
  - : Definiert benutzerdefinierte Positionierungsoptionen, die verwendet werden können, um Fallback-Positionierungs- und Ausrichtungsoptionen für ankerpositionierte Elemente zu definieren ([CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Definiert eine [CSS benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Using_CSS_custom_properties), die eine Typüberprüfung und Einschränkung der Eigenschaften ermöglicht, Standardwerte festlegt und definiert, ob eine benutzerdefinierte Eigenschaft Werte vererben kann oder nicht ([CSS-Benutzerdefinierte Eigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables)).
- {{cssxref("@scope")}}
  - : Definiert einen Geltungsbereich, in dem sie auf ausgewählte Elemente angewendet werden sollen, und die Stile, die auf die Elemente in diesem Geltungsbereich angewendet werden ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@starting-style")}}
  - : Definiert die anfänglichen Eigenschaftswerte für ein Element, von denen aus ein Übergang erfolgen soll, z. B. wenn das Element das erste Mal eine Stilaktualisierung erhält, wie etwa beim Übergang von `display: none` ([CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)).
- {{cssxref("@supports")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Browser die CSS-Funktionen der gegebenen Bedingung unterstützt ([CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Opt den aktuellen Dokument in einen [Anzeigeübergang](/de/docs/Web/API/View_Transitions_API) ein, sowie das Zieldokument im Falle von übergreifenden Navigationsübergängen.

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
- [Verschachtelung von CSS-At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [CSS-Anweisungen](/de/docs/Web/CSS/Syntax#css_statements)
- [CSSRule](/de/docs/Web/API/CSSRule)-Schnittstelle
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
