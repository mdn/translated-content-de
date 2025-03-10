---
title: CSS-Referenz
slug: Web/CSS/Reference
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

{{CSSRef}}

Nutzen Sie diese **CSS-Referenz**, um einen [alphabetischen Index](#index) aller standardmäßigen [CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [funktionalen Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) und [Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) zu durchsuchen. Sie können auch [wichtige CSS-Konzepte](#konzepte) und eine Liste von [Selektoren nach Typ organisiert](#selektoren) durchsuchen. Ebenfalls enthalten ist ein kurzer [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundlegende Regel-Syntax

### Syntax der Stilregel

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

Sehen Sie sich den Index der [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudoelemente](#pseudo)_ unten an. Die Syntax für jeden angegebenen _Wert_ hängt vom für jede angegebene _Eigenschaft_ definierten Datentyp ab.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung auf Anfängerniveau in die Syntax von Selektoren sehen Sie unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Beachten Sie, dass jeder [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig ({{Glossary("ASCII", "ASCII")}}) [textbasiert](https://www.w3.org/TR/css-syntax-3/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://www.w3.org/TR/cssom/#introduction) ist.

### Syntax der At-Rules

Da die Struktur von At-Rules stark variieren kann, besuchen Sie bitte [At-rule](/de/docs/Web/CSS/CSS_syntax/At-rule), um die Syntax der spezifischen Regel zu finden, die Sie suchen.

## Index

> [!NOTE]
> Dieser Index enthält keine exklusiven SVG-Präsentationseigenschaften, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index enthalten **nicht** die JavaScript-Namen, die sich von den CSS-Standardnamen unterscheiden.

{{CSS_Ref}}

## Selektoren

Die folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors), die es ermöglichen, Stile basierend auf verschiedenen Eigenschaften von Elementen innerhalb des DOM bedingt anzuwenden.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die grundlegenden Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppierungsselektoren

- [Selektorliste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A` als auch `B` Elemente ausgewählt sind. Dies ist eine Gruppierungsmethode, um mehrere passende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren schaffen, wie "`A` ist ein Kind von `B`" oder "`A` ist benachbart zu `B`", und so einen komplexen Selektor erstellen.

- [Kombinator für direktes Geschwisterelement](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die durch beide `A` und `B` ausgewählten Elemente den gleichen Elternteil haben und das Element, das durch `B` ausgewählt wird, unmittelbar dem von `A` ausgewählten Element horizontal folgt.
- [Kombinator für nachfolgende Geschwisterlemente](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die durch beide `A` und `B` ausgewählten Elemente den gleichen Elternteil haben und das Element, das durch `A` ausgewählt wird, vor dem durch `B` ausgewählten Element kommt, aber nicht zwingend unmittelbar davor.
- [Kombinator für Kind-Element](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das Element, das von `B` ausgewählt wird, ein direktes Kind des von `A` ausgewählten Elements ist.
- [Kombinator für Nachfahren](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das Element, das von `B` ausgewählt wird, ein Nachfahre des von `A` ausgewählten Elements ist, aber nicht zwingend ein direktes Kind.
- [Kombinator für Spalten](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das Element, das von `B` ausgewählt wird, sich in der durch `A` angegebenen Tabellenspalte befindet. Elemente, die sich über mehrere Spalten erstrecken, werden als Mitglied all dieser Spalten angesehen.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand der ausgewählten Elemente an.
- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht im HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektor-Spezifikation](https://drafts.csswg.org/selectors/) und die [Spezifikation der Pseudoelemente](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- {{Glossary("CSS_Descriptor", "Deskriptor")}}
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Shorthand-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS-Funktionsnotationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/computed_value)
- [Initialwert](/de/docs/Web/CSS/CSS_cascade/initial_value)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
- [Spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/used_value)

### Layout

- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Enthaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Layoutmodus](/de/docs/Web/CSS/Layout_mode)
- [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
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
- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) (meist mit dem Präfix `-webkit-`)

## Externe Links

- [CSS-Indizes (w3.org)](https://www.w3.org/TR/CSS/#indices)
