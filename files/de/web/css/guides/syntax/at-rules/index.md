---
title: At-Regeln
slug: Web/CSS/Guides/Syntax/At-rules
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**At-Regeln** sind [CSS-Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_statements), die CSS anweisen, wie es sich verhalten soll. Sie beginnen mit einem At-Zeichen, `@` (U+0040 COMMERCIAL AT), gefolgt von einem Bezeichner. Sie umfassen alles vom At-Schlüsselwort bis zum nächsten Semikolon, `;` (U+003B SEMICOLON), oder dem nächsten [CSS-Block](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declaration_blocks), je nachdem, was zuerst kommt.

At-Regeln werden verwendet, um Stilregeln und andere At-Regeln zu gruppieren und zu strukturieren, Stilinformationen zu deklarieren, die nicht direkt mit ausgewähltem Inhalt verknüpft sind, und syntaktische Konstrukte wie Import- und Namespace-Schlüsselwort-Zuordnungen zu verwalten.

## Syntax

Die At-Regel wird im [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)-Modul definiert, wobei verschiedene At-Regeln in ihren jeweiligen Modulen definiert werden. Sie nehmen im Allgemeinen eine von zwei Formen an, abhängig von der spezifischen Regel und ihrem Zweck: Anweisungs-At-Regeln und Block-At-Regeln, die verschachtelte qualifizierte Regeln, At-Regeln oder Deklarationen enthalten können.

### Anweisungs-At-Regeln

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Anweisungs-At-Regeln enden mit einem Semikolon. Es gibt mehrere Anweisungs-At-Regeln, gekennzeichnet durch ihre Bezeichner, jede mit einer anderen Syntax:

- {{cssxref("@charset")}}
  - : Ein Algorithmus (hat die syntaktische Form einer At-Regel, ist aber keine Definition), der den Fallback-Zeichensatz bestimmt, den das Stylesheet verwendet ([CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)).
- {{cssxref("@import")}}
  - : Teilt der CSS-Engine mit, ein externes Stylesheet zu inkludieren ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)).
- {{cssxref("@layer")}}
  - : Definiert die Reihenfolge der Prioritäten im Falle mehrerer Kaskadenschichten ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)). Wird auch als [Block-At-Regel](#layer_2) verwendet, um die Stile einer Schicht zu definieren.
- {{cssxref("@namespace")}}
  - : Definiert einen Standard-Namespace für ein Stylesheet oder ein Namespace-Präfix, das ein Selektor nur dann matcht, wenn der Namespace und andere Selektor-Komponenten übereinstimmen ([CSS-Namespaces](/de/docs/Web/CSS/Guides/Namespaces)).

### Block-At-Regeln

```css
@identifier (RULE) {
}
```

Block-At-Regeln enden in einem `{}`-Block, der verschachtelte Regeln, andere At-Regeln oder Eigenschafts- oder Deskriptordeklarationen enthält.

- {{cssxref("@counter-style")}}
  - : Definieren Sie benutzerdefinierte Zählerstile und erweitern Sie vordefinierte Listenstile ([CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)).
- {{cssxref("@container")}}
  - : Eine Bedingungsgruppenregel, die ihren Inhalt anwendet, wenn der Container die [`<container-condition>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-condition)s erfüllt ([CSS-Eingrenzung](/de/docs/Web/CSS/Guides/Containment)).
- {{cssxref("@font-face")}}
  - : Definiert die Ressourcenorte von Schriften, sowohl lokal als auch extern, zusammen mit den Stilmerkmalen für die Verwendung dieser Ressourcen mit einer deklarierten {{cssxref("font-family")}} ([CSS-Schriften](/de/docs/Web/CSS/Guides/Fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` und `@character-variant`)
  - : Steuert die Schriftanzeige pro Schriftfamilie, indem schriftartenspezifische Alternativen oder benutzerdefinierte Namen zu Merkmalindizes in {{cssxref("font-variant-alternates")}} in OpenType definiert werden ([CSS-Schriften](/de/docs/Web/CSS/Guides/Fonts)).
- {{cssxref("@keyframes")}} (und der Alias `@-webkit-keyframes`)
  - : Definieren Sie eine benannte Animation, indem Sie die CSS-Stile für Zwischenstadien (oder Schlüsselbilder) in der Animationssequenz beschreiben ([CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)).
- {{cssxref("@layer")}}
  - : Erstellt eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht im Inneren ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)). Wird auch als [Anweisungs-At-Regel](#layer) verwendet, um die Reihenfolge der Prioritäten im Falle mehrerer Kaskadenschichten zu definieren.
- {{cssxref("@media")}}
  - : Eine Bedingungsgruppenregel, die ihren Inhalt anwendet, wenn das Gerät die Kriterien der durch eine _Media Query_ definierten Bedingung erfüllt ([CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules)).
- {{cssxref("@page")}}
  - : Gibt Aspekte einer zu druckenden Seite an, wie z.B. deren Abmessungen, Orientierung und Ränder ([CSS-medienfreundliches Layout](/de/docs/Web/CSS/Guides/Paged_media)).
- {{cssxref("@position-try")}}
  - : Definiert benutzerdefinierte Positionsoptionen, die verwendet werden können, um Fallback-Positionierungs- und Ausrichtungsoptionen für Anker-Positionierte Elemente zu definieren ([CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)).
- {{cssxref("@property")}}
  - : Definiert eine [CSS-Benutzereigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), die Typüberprüfung und Einschränkung von Eigenschaften ermöglicht, Standardwerte festlegt und definiert, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht ([CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables)).
- {{cssxref("@scope")}}
  - : Definiert einen Geltungsbereich, um sie auf ausgewählte Elemente anzuwenden und die Stile, die auf die Elemente in diesem Geltungsbereich angewendet werden sollen ([CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)).
- {{cssxref("@starting-style")}}
  - : Definiert die Anfangseigenschaftenwerte eines Elements, von denen aus übergegangen werden soll, wenn das Element sein erstes Stilupdate erhält, z.B. beim Übergang von `display: none` ([CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions)).
- {{cssxref("@supports")}}
  - : Eine Bedingungsgruppenregel, die ihren Inhalt anwendet, wenn der Browser die CSS-Funktionen der gegebenen Bedingung unterstützt ([CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Optiert das aktuelle Dokument in einen [Ansichtstransition](/de/docs/Web/API/View_Transition_API) und das Zieldokument ebenfalls im Falle von Übergängen zwischen Dokumenten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-At-Regeln](/de/docs/Web/CSS/Reference/At-rules)
- [CSS-At-Regelfunktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [Verschachteln von At-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules)
- [CSS-Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_statements)
- [CSSRule](/de/docs/Web/API/CSSRule) Schnittstelle
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) Modul
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
