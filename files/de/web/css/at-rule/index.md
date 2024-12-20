---
title: At-Regeln
slug: Web/CSS/At-rule
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{CSSRef}}

**At-Regeln** sind [CSS-Anweisungen](/de/docs/Web/CSS/Syntax#css_statements), die CSS anweisen, wie es sich verhalten soll. Sie beginnen mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), gefolgt von einem Bezeichner, und umfassen alles bis zum nächsten Semikolon, `;` (U+003B SEMICOLON), oder dem nächsten [CSS-Block](/de/docs/Web/CSS/Syntax#css_declaration_blocks), je nachdem, was zuerst kommt.

## Syntax

### Anweisungs-At-Regeln

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Anweisungs-At-Regeln enden mit einem Semikolon. Es gibt mehrere Anweisungs-At-Regeln, die durch ihre Bezeichner gekennzeichnet sind, jede mit einer unterschiedlichen Syntax:

- {{cssxref("@charset")}}
  - : Ein Algorithmus (hat die syntaktische Form einer At-Regel, ist aber keine Definition), der den Fallback-Zeichensatz definiert, der vom Stylesheet verwendet wird ([CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)).
- {{cssxref("@import")}}
  - : Anweisung an die CSS-Engine, ein externes Stylesheet einzubinden ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Definiert die Reihenfolge der Vorrangstellung im Fall mehrerer Kaskadenschichten ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Auch als [Block-At-Regel](#layer_2) verwendet, um die Stile einer Schicht zu definieren.
- {{cssxref("@namespace")}}
  - : Definiert ein Standard-Namespace für ein Stylesheet oder ein Namespace-Präfix, das ein Selektor nur dann trifft, wenn das Namespace und die anderen Selektor-Komponenten übereinstimmen ([CSS-Namespaces](/de/docs/Web/CSS/CSS_namespaces)).

### Block-At-Regeln

```css
@identifier (RULE) {
}
```

Block-At-Regeln enden in einem `{}`-Block, der verschachtelte Regeln, andere At-Regeln oder Eigenschafts- oder Deskriptordeklarationen enthält.

- {{cssxref("@counter-style")}}
  - : Definiert benutzerdefinierte Zählerstile und erweitert vordefinierte Listenstile ([CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Container die [`<container-condition>`](/de/docs/Web/CSS/@container#container-condition) Bedingungen erfüllt ([CSS-Containment](/de/docs/Web/CSS/CSS_containment)).
- {{cssxref("@font-face")}}
  - : Definiert Schriftartenressourcen-Standorte, sowohl lokal als auch extern, zusammen mit den Stilmerkmalen für diese Ressourcen, wenn sie mit einer erklärten {{cssxref("Schriftfamilie")}} verwendet werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` und `@character-variant`)
  - : Steuert die Schriftanzeige pro Schriftfamilie, indem schriftartspezifische Alternativen oder benutzerdefinierte Namen für Feature-Indizes in {{cssxref("font-variant-alternates")}} in OpenType definiert werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@keyframes")}} (und der Alias `@-webkit-keyframes`)
  - : Definiert eine benannte Animation durch die Beschreibung und Definition von CSS-Stilen für Zwischenphasen (oder Schlüsselbilder) in der Animationssequenz ([CSS-Animationen](/de/docs/Web/CSS/CSS_animations)).
- {{cssxref("@layer")}}
  - : Erstellt eine benannte Kaskadenschicht mit den darin enthaltenen CSS-Regeln ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Anweisungs-At-Regel](#layer) verwendet, um die Reihenfolge der Vorrangstellung im Fall mehrerer Kaskadenschichten zu definieren.
- {{cssxref("@media")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn das Gerät die Kriterien der Bedingung erfüllt, die mit einer _Medienabfrage_ definiert ist ([CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@page")}}
  - : Gibt Aspekte einer Seite an, die gedruckt werden sollen, wie Dimensionen, Ausrichtung und Ränder ([CSS-Seitenmedien](/de/docs/Web/CSS/CSS_paged_media)).
- {{cssxref("@position-try")}}
  - : Definiert benutzerdefinierte Positionsoptionen, die verwendet werden können, um Fallback-Positionierung und Ausrichtungsoptionen für verankerungs-positionierte Elemente zu definieren ([CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Definiert eine [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Using_CSS_custom_properties), die Überprüfung und Einschränkung des Eigenschaftstyps ermöglicht, Standardwerte festlegt und definiert, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht ([CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)).
- {{cssxref("@scope")}}
  - : Definiert einen Bereich, in dem sie auf ausgewählte Elemente und die darin anzuwendenden Stile anzuwenden sind ([CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@starting-style")}}
  - : Definiert die Start-Eigenschaftswerte für ein Element, von denen aus es übergeht, wenn es sein erstes Stil-Update erhält, z.B. beim Übergang von `display: none` ([CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)).
- {{cssxref("@supports")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Browser die CSS-Funktionen der angegebenen Bedingung unterstützt ([CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Opt die aktuelle Dokument in einen [view transition](/de/docs/Web/API/View_Transition_API) und das Zieldokument ebenfalls im Falle von Übergängen zwischen Dokumenten.

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
- [CSS-Anweisungen](/de/docs/Web/CSS/Syntax#css_statements)
- [CSSRule](/de/docs/Web/API/CSSRule) Schnittstelle
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
