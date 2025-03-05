---
title: At-Regeln
slug: Web/CSS/CSS_syntax/At-rule
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

{{CSSRef}}

**At-Regeln** sind [CSS-Anweisungen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_statements), die CSS anweisen, wie es sich verhalten soll. Sie beginnen mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), gefolgt von einem Bezeichner. Sie umfassen alles vom At-Schlüsselwort bis zum nächsten Semikolon, `;` (U+003B SEMICOLON), oder dem nächsten [CSS-Block](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declaration_blocks), je nachdem, was zuerst kommt.

At-Regeln werden verwendet, um Stilregeln und andere At-Regeln zu gruppieren und zu strukturieren, stilistische Informationen zu deklarieren, die nicht direkt mit ausgewähltem Inhalt in Verbindung stehen, und um syntaktische Konstrukte wie Importe und Namensraum-Keyword-Zuordnungen zu verwalten.

## Syntax

Die At-Regel ist im [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul definiert, wobei unterschiedliche At-Regeln in ihren jeweiligen Modulen definiert sind. Sie nehmen im Allgemeinen je nach spezifischer Regel und ihrem Zweck eine von zwei Formen an: Anweisungs-At-Regeln und Block-At-Regeln, die verschachtelte qualifizierte Regeln, At-Regeln oder Deklarationen enthalten können.

### Anweisungs-At-Regeln

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Anweisungs-At-Regeln enden mit einem Semikolon. Es gibt mehrere Anweisungs-At-Regeln, die durch ihre Bezeichner benannt sind, jede mit einer anderen Syntax:

- {{cssxref("@charset")}}
  - : Ein Algorithmus (hat die syntaktische Form einer At-Regel, ist jedoch keine Definition), der den Fallback-Zeichensatz bestimmt, der vom Stilblatt verwendet wird ([CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)).
- {{cssxref("@import")}}
  - : Weisung an die CSS-Engine, ein externes Stilblatt einzuschließen ([CSS-Kaskaden und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Definiert die Rangfolge im Falle mehrerer Kaskadenschichten ([CSS-Kaskaden und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Auch als [Block-At-Regel](#layer_2) zur Definition der Stile einer Schicht verwendet.
- {{cssxref("@namespace")}}
  - : Definiert einen Standard-Namensraum für ein Stilblatt oder ein Namenspräfix, das ein Selektor nur dann abgleicht, wenn der Namensraum und andere Selektorkomponenten übereinstimmen ([CSS-Namensräume](/de/docs/Web/CSS/CSS_namespaces)).

### Block-At-Regeln

```css
@identifier (RULE) {
}
```

Block-At-Regeln enden in einem `{}`-Block, der verschachtelte Regeln, andere At-Regeln oder Eigenschafts- oder Deskriptordeklarationen enthält.

- {{cssxref("@counter-style")}}
  - : Definieren Sie benutzerdefinierte Zählerstile und erweitern Sie vordefinierte Listenstile ([CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn der Container die [`<container-condition>`](/de/docs/Web/CSS/@container#container-condition)s erfüllt ([CSS-Eindämmung](/de/docs/Web/CSS/CSS_containment)).
- {{cssxref("@font-face")}}
  - : Definiert Schriftressourcen-Standorte, sowohl lokal als auch extern, zusammen mit den Stilmerkmalen für die Verwendung dieser Ressourcen mit einer deklarierten {{cssxref("font-family")}} ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` und `@character-variant`)
  - : Steuerung der Schriftanzeige pro Schriftfamilie durch Definition schriftartspezifischer Alternativen oder benutzerdefinierter Namen zu Feature-Indizes in {{cssxref("font-variant-alternates")}} in OpenType ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@keyframes")}} (und das Alias `@-webkit-keyframes`)
  - : Definieren Sie eine benannte Animation, indem Sie die CSS-Stile für Zwischenschritte (oder Schlüsselbilder) in der Animationssequenz beschreiben ([CSS-Animationen](/de/docs/Web/CSS/CSS_animations)).
- {{cssxref("@layer")}}
  - : Erstellt eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht innerhalb ([CSS-Kaskaden und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Auch als [Anweisungs-At-Regel](#layer) verwendet, um die Rangfolge im Falle mehrerer Kaskadenschichten zu definieren.
- {{cssxref("@media")}}
  - : Eine bedingte Gruppenregel, die ihren Inhalt anwendet, wenn das Gerät die Kriterien der Bedingung erfüllt, die mit einer _Media Query_ definiert ist ([CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@page")}}
  - : Gibt die Aspekte einer zu druckenden Seite an, wie deren Abmessungen, Ausrichtung und Ränder ([CSS-gedruckte Medien](/de/docs/Web/CSS/CSS_paged_media)).
- {{cssxref("@position-try")}}
  - : Definiert benutzerdefinierte Positionsoptionen, die verwendet werden können, um Fallback-Positionierungs- und Ausrichtungsoptionen für ankerpositionierte Elemente zu definieren ([CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Definiert eine [CSS-Benutzereigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), die eine Eigenschaftstyprüfung und Einschränkung, das Festlegen von Standardwerten und die Festlegung ermöglicht, ob eine Benutzereigenschaft Werte erben kann oder nicht ([CSS-Benutzereigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables)).
- {{cssxref("@scope")}}
  - : Definiert einen Bereich, in dem sie auf ausgewählte Elemente angewendet werden, und die Stile, die auf die Elemente in diesem Bereich angewendet werden sollen ([CSS-Kaskaden und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@starting-style")}}
  - : Definiert die Anfangseigenschaften für ein Element, von denen aus ein Übergang erfolgen soll, wenn das Element sein erstes Stil-Update erhält, zum Beispiel beim Übergang von `display: none` ([CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)).
- {{cssxref("@supports")}}
  - : Eine bedingte Gruppenregel wendet ihren Inhalt an, wenn der Browser die CSS-Funktionen der angegebenen Bedingung unterstützt ([CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Wählt das aktuelle Dokument für eine [Ansichtstransition](/de/docs/Web/API/View_Transition_API) und auch das Zieldokument im Falle von Dokumentenübergreifenden Navigationstransitionen aus.

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

- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [Verschachtelung von CSS-At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [CSS-Anweisungen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_statements)
- [CSSRule](/de/docs/Web/API/CSSRule)-Schnittstelle
- [CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
