---
title: CSS-Referenz
slug: Web/CSS/Reference
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Verwenden Sie diese **CSS-Referenz**, um einen [alphabetischen Index](#index) aller standardmäßigen [CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [funktionalen Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) und [at-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule) zu durchsuchen. Sie können auch [wichtige CSS-Konzepte](#konzepte) und eine Liste von [nach Typ organisierten Selektoren](#selektoren) durchsuchen. Ebenfalls enthalten ist ein kurzer [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundlegende Regelsyntax

### Syntax von Stilregeln

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

Siehe den Index der [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudoelemente](#pseudo)_ unten. Die Syntax für jedes angegebene _Wert_ hängt von dem für jede angegebene _Eigenschaft_ definierten Datentyp ab.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung auf Anfängerniveau in die Syntax von Selektoren, siehe unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Beachten Sie, dass jeder [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig ({{Glossary("ASCII", "ASCII")}}) [textbasiert](https://www.w3.org/TR/css-syntax-3/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://www.w3.org/TR/cssom/#introduction) ist.

### Syntax der At-Rules

Da die Struktur von At-Rules sehr unterschiedlich ist, beachten Sie bitte [At-rule](/de/docs/Web/CSS/CSS_syntax/At-rule), um die Syntax des spezifischen At-rule zu finden, die Sie möchten.

## Index

> [!NOTE]
> Dieser Index enthält keine ausschließlich für SVG geltenden Präsentationsattribute, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index enthalten **nicht** die JavaScript-Namen, die sich von den CSS-Standardnamen unterscheiden.

{{CSS_Ref}}

## Selektoren

Die folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors), die es ermöglichen, dass Stile bedingt basierend auf verschiedenen Eigenschaften von Elementen innerhalb des DOM angewendet werden.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die grundlegendsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppierungsselektoren

- [Selektorenliste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A` als auch `B` Elemente ausgewählt sind. Dies ist eine Gruppierungsmethode, um mehrere übereinstimmende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie "`A` ist ein Kind von `B`" oder "`A` ist direkt benachbart zu `B`" und so einen komplexen Selektor erstellen.

- [Nachbarselektor](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die Elemente, die sowohl von `A` als auch von `B` ausgewählt wurden, denselben Elternteil haben und dass das von `B` ausgewählte Element unmittelbar horizontal dem von `A` ausgewählten Element folgt.
- [Allgemeiner Geschwisterselektor](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die Elemente, die sowohl von `A` als auch von `B` ausgewählt wurden, denselben Elternteil haben und dass das von `A` ausgewählte Element vor—aber nicht unbedingt unmittelbar vor—dem von `B` ausgewählten Element kommt.
- [Kindselektor](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das von `B` ausgewählte Element direktes Kind des von `A` ausgewählten Elements ist.
- [Nachkommenselektor](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das von `B` ausgewählte Element ein Nachkomme des von `A` ausgewählten Elements ist, aber nicht unbedingt ein direktes Kind ist.
- [Spaltenkombinator](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das von `B` ausgewählte Element innerhalb der von `A` angegebenen Tabellenspalte liegt. Elemente, die sich über mehrere Spalten erstrecken, gelten als Mitglied aller dieser Spalten.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand der ausgewählten Elemente an.
- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht in HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektorspezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelement-Spezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- {{Glossary("CSS_Descriptor", "Deskriptor")}}
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kurznotationseigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/)
- [CSS-funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/computed_value)
- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/initial_value)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
- [Angegebener Wert](/de/docs/Web/CSS/CSS_cascade/specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/used_value)

### Layout

- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Einschließender Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Layoutmodus](/de/docs/Web/CSS/Layout_mode)
- [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
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
