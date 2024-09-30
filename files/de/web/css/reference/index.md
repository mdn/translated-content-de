---
title: CSS-Referenz
slug: Web/CSS/Reference
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{CSSRef}}

Verwenden Sie diese **CSS-Referenz**, um einen [alphabetischen Index](#index) aller Standard-[CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Types), [funktionalen Notationen](/de/docs/Web/CSS/CSS_Functions) und [at-rules](/de/docs/Web/CSS/At-rule) zu durchsuchen. Sie können auch [wichtige CSS-Konzepte](#konzepte) und eine Liste von [Selektoren nach Typ organisiert](#selektoren) durchstöbern. Ebenfalls enthalten ist eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundlegende Regel-Syntax

### Stilregel-Syntax

```css
style-rule ::=
    selectors-list {
      properties-list
    }
```

Wo:

```css
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=
    [property : value] [; properties-list]
```

Sehen Sie sich den Index der [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudoelemente](#pseudo)_ unten an. Die Syntax für jeden angegebenen _Wert_ hängt vom Datentyp ab, der für jede angegebene _Eigenschaft_ definiert ist.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung auf Anfängerniveau in die Syntax von Selektoren sehen Sie unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors). Beachten Sie, dass ein beliebiger [Syntax](/de/docs/Web/CSS/Syntax)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig ([ASCII](/de/docs/Glossary/ASCII)) [textbasiert](https://www.w3.org/TR/css-syntax-3/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://www.w3.org/TR/cssom/#introduction) ist.

### At-rule-Syntax

Da die Struktur von at-rules stark variiert, finden Sie die Syntax der speziellen Regel, die Sie möchten, unter [At-rule](/de/docs/Web/CSS/At-rule).

## Index

> [!NOTE]
> Dieser Index enthält keine SVG-exklusiven Präsentationsattribute, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index enthalten **nicht** die JavaScript-Namen, die von den standardmäßigen CSS-Namen abweichen.

{{CSS_Ref}}

## Selektoren

Die folgenden [Selektoren](/de/docs/Web/CSS/CSS_selectors) ermöglichen es, Stile basierend auf verschiedenen Merkmalen von Elementen innerhalb des DOMs bedingt anzuwenden.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die einfachsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppierende Selektoren

- [Selektorliste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A` als auch `B` Elemente ausgewählt sind. Dies ist eine Gruppierungsmethode, um mehrere übereinstimmende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie "`A` ist ein Kind von `B`" oder "`A` ist neben `B`", wodurch ein komplexer Selektor entsteht.

- [Nachbarschafts-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die von `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das von `B` ausgewählte Element dem von `A` ausgewählten Element horizontal unmittelbar folgt.
- [Nachfolgender Geschwisterkombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die von `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das von `A` ausgewählte Element vor—aber nicht unbedingt unmittelbar vor—dem von `B` ausgewählten Element kommt.
- [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das von `B` ausgewählte Element das direkte Kind des von `A` ausgewählten Elements ist.
- [Nachfahren-Kombinator](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das von `B` ausgewählte Element ein Nachfahre des von `A` ausgewählten Elements ist, aber nicht unbedingt ein direktes Kind.
- [Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das von `B` ausgewählte Element sich innerhalb der von `A` angegebenen Tabellenspalte befindet. Elemente, die sich über mehrere Spalten erstrecken, werden als Mitglied all dieser Spalten betrachtet.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand der ausgewählten Elemente an.
- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Repräsentieren Entitäten, die nicht im HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektorspezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelement-Spezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [At-rules](/de/docs/Web/CSS/At-rule)
- [Kaskade](/de/docs/Web/CSS/Cascade)
- [Kommentare](/de/docs/Web/CSS/Comments)
- [Deskriptor](/de/docs/Glossary/CSS_Descriptor)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Kurzschrift-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Wertdefinition-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Einheit und Wertetypen](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS-funktionale Notationen](/de/docs/Web/CSS/CSS_Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/computed_value)
- [Anfangswert](/de/docs/Web/CSS/initial_value)
- [Ermittelter Wert](/de/docs/Web/CSS/resolved_value)
- [Angegebener Wert](/de/docs/Web/CSS/specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/used_value)

### Layout

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Enthaltender Block](/de/docs/Web/CSS/Containing_block)
- [Layoutmodus](/de/docs/Web/CSS/Layout_mode)
- [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### Wichtige Objekttypen

- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`Element.className`](/de/docs/Web/API/Element/className)
- [`Element.classList`](/de/docs/Web/API/Element/classList)
- [`StyleSheetList`](/de/docs/Web/API/StyleSheetList)
- [`CSSRuleList`](/de/docs/Web/API/CSSRuleList)
- [`CSSRule`](/de/docs/Web/API/CSSRule)
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)
- [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)

### Wichtige Methoden

- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) (mit dem Präfix `-moz-`)
- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) (meistens mit dem Präfix `-webkit-`)

## Externe Links

- [CSS-Indizes (w3.org)](https://www.w3.org/TR/CSS/#indices)
