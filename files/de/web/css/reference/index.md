---
title: CSS-Referenz
short-title: Reference
slug: Web/CSS/Reference
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Verwenden Sie diese **CSS-Referenz**, um einen [alphabetischen Index](#index) aller Standard-[CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types), [funktionalen Notationen](/de/docs/Web/CSS/Reference/Values/Functions) und [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules) zu durchsuchen. Sie können auch [wichtige CSS-Konzepte](#konzepte) und eine Liste von [Selektoren nach Typ organisiert](#selektoren) durchsuchen. Ebenfalls enthalten ist eine kurze [DOM-CSS/CSSOM-Referenz](#dom-css_cssom).

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

Siehe den Index von [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudoelementen](#pseudo)_ unten. Die Syntax für jeden spezifischen _Wert_ hängt vom Datentyp ab, der für jede spezifische _Eigenschaft_ definiert ist.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung in die Syntax von Selektoren auf Anfänger-Niveau lesen Sie bitte unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Beachten Sie, dass jeder [Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig (Unicode) [textbasiert](https://drafts.csswg.org/css-syntax/#intro) sind, während DOM-CSS/CSSOM (das Regelverwaltungssystem) [objektbasiert](https://drafts.csswg.org/cssom/#introduction) ist.

### At-Regel-Syntax

Da die Struktur von At-Regeln stark variiert, lesen Sie bitte [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), um die Syntax der spezifischen Regel zu finden, die Sie möchten.

## Index

> [!NOTE]
> Dieser Index enthält keine ausschließlich für SVG verwendeten Präsentationsattribute, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index enthalten **nicht** die JavaScript-Namen, die sich von den CSS-Standardnamen unterscheiden.

{{CSS_Ref}}

## Selektoren

Die folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/Guides/Selectors), die es ermöglichen, Stile basierend auf verschiedenen Merkmalen von Elementen innerhalb des DOM bedingt anzuwenden.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die grundlegendsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=value]`

### Gruppierungsselektoren

- [Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A` als auch `B` Elemente ausgewählt sind. Dies ist eine Gruppierungsmethode, um mehrere übereinstimmende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie "`A` ist ein Kind von `B`" oder "`A` ist benachbart zu `B`", und so einen komplexen Selektor erstellen.

- [Nachbarschaftskombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die von sowohl `A` als auch `B` ausgewählten Elemente denselben Eltern haben und dass das von `B` ausgewählte Element dem von `A` ausgewählten Element sofort horizontal folgt.
- [Folgendes Nachbarschaftskombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die von sowohl `A` als auch `B` ausgewählten Elemente denselben Eltern teilen und dass das von `A` ausgewählte Element dem von `B` ausgewählten Element vorausgeht—aber nicht unbedingt unmittelbar davor—.
- [Kindkombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) `A > B`
  - : Gibt an, dass das von `B` ausgewählte Element ein direktes Kind des von `A` ausgewählten Elements ist.
- [Nachfahrenkombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) `A B`
  - : Gibt an, dass das von `B` ausgewählte Element ein Nachfahre des von `A` ausgewählten Elements ist, aber nicht unbedingt ein direktes Kind.
- [Spaltenkombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das von `B` ausgewählte Element innerhalb der von `A` angegebenen Tabellenspalte befindet. Elemente, die mehrere Spalten umfassen, werden als Mitglied aller dieser Spalten betrachtet.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand der ausgewählten Elemente an.
- [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht im HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektoren-Spezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelement-Spezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
- {{Glossary("CSS_Descriptor", "Descriptor")}}
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Kurzschreibweise Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Wertedefinition Syntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Funktionale Notationen in CSS](/de/docs/Web/CSS/Reference/Values/Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
- [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
- [Aufgelöster Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value)
- [Spezifizierter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)

### Layout

- [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- [Begrenzender Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- {{Glossary("Layout_mode", "Layout-Modus")}}
- [Randkollaps](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [Stapelnkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)

## DOM-CSS/CSSOM

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

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions) (mit dem Präfix `-moz-`)
- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions) (meistens mit dem Präfix `-webkit-`)

## Externe Links

- [CSS Indizes (w3.org)](https://www.w3.org/TR/css/#indices)
