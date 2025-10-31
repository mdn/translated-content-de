---
title: CSS-Referenz
short-title: Reference
slug: Web/CSS/Reference
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Verwenden Sie diese **CSS-Referenz**, um einen [alphabetischen Index](#index) aller standardmäßigen [CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types), [funktionalen Notationen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) und [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) zu durchsuchen. Sie können auch [wichtige CSS-Konzepte](#konzepte) und eine Liste von [Selektoren, organisiert nach Typ](#selektoren) durchsuchen. Ebenfalls enthalten ist eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundlegende Regel-Syntax

### Stilregel-Syntax

```plain
style-rule ::=
    selectors-list {
      properties-list
    }
```

Wo:

```plain
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=
    [property : value] [; properties-list]
```

Sehen Sie sich den Index der [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudoelemente](#pseudo)_ unten an. Die Syntax für jeden spezifizierten _Wert_ hängt vom Datentyp ab, der für jede spezifizierte _Eigenschaft_ definiert ist.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung auf Anfängerniveau in die Syntax von Selektoren, siehe unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Beachten Sie, dass jeder [Syntaxfehler](/de/docs/Web/CSS/CSS_syntax/Syntax) in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig (Unicode-) [textbasiert](https://drafts.csswg.org/css-syntax/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://drafts.csswg.org/cssom/#introduction) ist.

### At-Regel-Syntax

Da die Struktur der At-Regeln stark variiert, sehen Sie [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), um die Syntax der gewünschten spezifischen zu finden.

## Index

> [!NOTE]
> Dieser Index enthält keine ausschließlich für SVG bestimmten Präsentationsattribute, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index beinhalten **nicht** die JavaScript-Namen, die sich von den standardmäßigen CSS-Namen unterscheiden.

{{CSS_Ref}}

## Selektoren

Die folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors), die es ermöglichen, Stile basierend auf verschiedenen Merkmalen von Elementen innerhalb des DOM bedingt zu machen.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die grundlegendsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppierungsselektoren

- [Selektorliste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A`- als auch `B`-Elemente ausgewählt werden. Dies ist eine Methode zur Gruppierung, um mehrere passende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie "`A` ist ein Kind von `B`" oder "`A` ist benachbart zu `B`", wodurch ein komplexer Selektor entsteht.

- [Kombinator für nachfolgendes Geschwisterelement](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die von `A` und `B` ausgewählten Elemente denselben Eltern haben und dass das von `B` ausgewählte Element dem von `A` ausgewählten Element horizontal unmittelbar folgt.
- [Kombinator für nachfolgende Geschwister](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die von `A` und `B` ausgewählten Elemente denselben Eltern haben und dass das von `A` ausgewählte Element vor dem von `B` ausgewählten Element kommt, aber nicht unbedingt unmittelbar davor.
- [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das von `B` ausgewählte Element ein direktes Kind des von `A` ausgewählten Elements ist.
- [Abstammungskombinator](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das von `B` ausgewählte Element ein Nachkomme des von `A` ausgewählten Elements ist, aber nicht notwendigerweise ein direktes Kind.
- [Spaltenkombinator](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass sich das von `B` ausgewählte Element innerhalb der von `A` spezifizierten Tabellenspalte befindet. Elemente, die mehrere Spalten überspannen, werden als Mitglied all dieser Spalten betrachtet.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen besonderen Zustand der ausgewählten Elemente an.
- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht in HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektorenspezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelementspezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- {{Glossary("CSS_Descriptor", "Deskriptor")}}
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Shorthand-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Wert-Definitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units)
- [CSS-funktionale Notationen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Initialwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Aufgelöster Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
- [Spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)

### Layout

- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Enthaltenes Blockelement](/de/docs/Web/CSS/CSS_display/Containing_block)
- {{Glossary("Layout_mode", "Layoutmodus")}}
- [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)

## DOM-CSS / CSSOM

### Hauptobjekttypen

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

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions) (mit dem Präfix `-moz-`)
- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions) (meistens mit dem Präfix `-webkit-`)

## Externe Links

- [CSS-Indizes (w3.org)](https://www.w3.org/TR/css/#indices)
