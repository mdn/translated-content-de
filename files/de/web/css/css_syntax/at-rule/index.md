---
title: At-rules
slug: Web/CSS/CSS_syntax/At-rule
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**At-Rules** sind [CSS-Anweisungen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_statements), die CSS anweisen, wie es sich verhalten soll. Sie beginnen mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), gefolgt von einem Bezeichner. Sie umfassen alles vom At-Schlüsselwort bis zum nächsten Semikolon, `;` (U+003B SEMICOLON), oder dem nächsten [CSS-Block](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declaration_blocks), je nachdem, was zuerst kommt.

At-Rules werden verwendet, um Stilregeln und andere At-Rules zu gruppieren und zu strukturieren, Stilinformationen zu deklarieren, die nicht direkt mit ausgewähltem Inhalt in Verbindung stehen, und syntaktische Konstrukte wie Import- und Namespace-Schlüsselwortzuordnungen zu verwalten.

## Syntax

Die At-Rule wird im [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul definiert, wobei verschiedene At-Rules in ihren jeweiligen Modulen definiert sind. Sie nehmen im Allgemeinen eine von zwei Formen an, je nach spezifischer Regel und ihrem Zweck: Anweisungs-At-Rules und Block-At-Rules, die verschachtelte qualifizierte Regeln, At-Rules oder Deklarationen enthalten können.

### Anweisungs-At-Rules

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Anweisungs-At-Rules enden mit einem Semikolon. Es gibt mehrere Anweisungs-At-Rules, die durch ihre Bezeichner gekennzeichnet sind, jede mit einer anderen Syntax:

- {{cssxref("@charset")}}
  - : Ein Algorithmus (hat die syntaktische Form einer At-Rule, ist aber keine Definition), der festlegt, welches Standzeichen verwendet wird, falls das Stylesheet nicht interpretiert werden kann ([CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)).
- {{cssxref("@import")}}
  - : Sagt dem CSS-Engine, ein externes Stylesheet einzubinden ([CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Definiert die Reihenfolge der Vorrangigkeit bei mehreren Kaskadierebenen ([CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Block-At-Rule](#layer_2) verwendet, um die Stile einer Ebene zu definieren.
- {{cssxref("@namespace")}}
  - : Definiert ein Standard-Namensraum für ein Stylesheet oder ein Namensraum-Präfix, das nur übereinstimmt, wenn der Namensraum und andere Selektorkomponenten übereinstimmen ([CSS-Namensräume](/de/docs/Web/CSS/CSS_namespaces)).

### Block-At-Rules

```css
@identifier (RULE) {
}
```

Block-At-Rules enden mit einem `{}`-Block, der verschachtelte Regeln, andere At-Rules oder Eigenschafts- oder Deskriptordeklarationen enthält.

- {{cssxref("@counter-style")}}
  - : Definieren benutzerdefinierter Zählstile und die Erweiterung vordefinierter Listenstile ([CSS-Zählstile](/de/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : Eine konditionelle Gruppenregel, die ihren Inhalt anwendet, wenn der Container die [`<container-condition>`](/de/docs/Web/CSS/@container#container-condition) erfüllt ([CSS-Kontainment](/de/docs/Web/CSS/CSS_containment)).
- {{cssxref("@font-face")}}
  - : Definiert Schriftressourcen-Standorte, sowohl lokal als auch extern, sowie die Stilmerkmale für den Einsatz dieser Ressourcen mit einem deklarierten {{cssxref("font-family")}} ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` und `@character-variant`)
  - : Steuert die Schriftanzeige pro Font-Family, indem schriftenspezifische Alternativen oder benutzerdefinierte Namen zu Funktionsindizes in {{cssxref("font-variant-alternates")}} in OpenType definiert werden ([CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@keyframes")}} (und das `@-webkit-keyframes` Alias)
  - : Definiert eine benannte Animation, indem CSS-Stile für Zwischenstufen (oder Schlüsselbilder) in der Animationssequenz beschrieben werden ([CSS-Animationen](/de/docs/Web/CSS/CSS_animations)).
- {{cssxref("@layer")}}
  - : Erstellt eine benannte Kaskadierschicht mit den CSS-Regeln für diese Schicht im Inneren ([CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)). Wird auch als [Anweisungs-At-Rule](#layer) verwendet, um die Reihenfolge der Vorrangigkeit bei mehreren Kaskadierebenen zu definieren.
- {{cssxref("@media")}}
  - : Eine konditionelle Gruppenregel, die ihren Inhalt anwendet, wenn das Gerät die Kriterien der Bedingung erfüllt, die mit einer _Media Query_ definiert wurden ([CSS-Konditionale Regeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@page")}}
  - : Gibt Aspekte einer zu druckenden Seite an, wie ihre Abmessungen, Ausrichtung und Ränder ([CSS-Seitenausgabe](/de/docs/Web/CSS/CSS_paged_media)).
- {{cssxref("@position-try")}}
  - : Definiert benutzerdefinierte Positionsoptionen, die verwendet werden können, um Fallback-Positionierungs- und Ausrichtungsoptionen für ankerpositionierte Elemente zu definieren ([CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Definiert eine [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), die eine Überprüfung der Eigenschaftstypen und Einschränkungen ermöglicht, Standardwerte festlegt und definiert, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht ([CSS-Benutzerdefinierte Eigenschaften für Kaskadierbare Variablen](/de/docs/Web/CSS/CSS_cascading_variables)).
- {{cssxref("@scope")}}
  - : Definiert einen Geltungsbereich, in dem sie auf ausgewählte Elemente und die Stile, die auf die Elemente in diesem Bereich angewendet werden, angewendet werden ([CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@starting-style")}}
  - : Definiert die Starteigenschaftswerte für ein Element, von denen aus es beim ersten Stil-Update des Elements übergeht, zum Beispiel beim Übergang von `display: none` ([CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)).
- {{cssxref("@supports")}}
  - : Eine konditionelle Gruppenregel, die ihren Inhalt anwendet, wenn der Browser die CSS-Funktionen der angegebenen Bedingung unterstützt ([CSS-Konditionale Regeln](/de/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Entscheidet das aktuelle Dokument für einen [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) und im Falle von Navigationen zwischen Dokumenten auch das Zieldokument.

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

- [CSS At-Rule-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [Verschachtelung von CSS At-Rules](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [CSS-Anweisungen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_statements)
- [CSSRule](/de/docs/Web/API/CSSRule) Schnittstelle
- [CSS-Konditionale Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
