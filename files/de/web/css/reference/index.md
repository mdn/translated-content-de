---
title: CSS-Referenz
short-title: Reference
slug: Web/CSS/Reference
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Nutzen Sie diese **CSS-Referenz**, um einen [alphabetischen Index](#index) aller standardisierten [CSS](/de/docs/Web/CSS) [Eigenschaften](/de/docs/Web/CSS/Reference/Properties), [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types), [funktionalen Notationen](/de/docs/Web/CSS/Reference/Values/Functions) und [At-Rules](/de/docs/Web/CSS/Reference/At-rules) zu durchsuchen. Sie können auch [wichtige CSS-Konzepte](#konzepte) und eine Liste von [Selektoren, die nach Typ organisiert sind](#selektoren) durchsuchen. Ebenfalls enthalten ist eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundlegende Syntaxregeln

### Syntax der Stilregel

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

Siehe den Index der [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudo-Elemente](#pseudo)_ unten. Die Syntax für jeden angegebenen _Wert_ hängt von dem Datentyp ab, der für jede angegebene _Eigenschaft_ definiert ist.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine grundlegende Einführung in die Syntax von Selektoren sehen Sie sich unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) an. Beachten Sie, dass jeder [Syntaxfehler](/de/docs/Web/CSS/Guides/Syntax/Introduction) in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig (Unicode-) [textbasiert](https://drafts.csswg.org/css-syntax/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://drafts.csswg.org/cssom/#introduction) ist.

### Syntax der At-Rules

Da die Struktur von At-Rules stark variieren kann, schauen Sie bitte unter [At-rule](/de/docs/Web/CSS/Reference/At-rules), um die Syntax der spezifischen Regel zu finden, die Sie benötigen.

## Index

> [!NOTE]
> Dieser Index schließt SVG-exklusive Präsentationsattribute nicht ein, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index enthalten **nicht** die JavaScript-Namen, die sich von den CSS-Standardnamen unterscheiden.

{{CSS_Ref}}

## Selektoren

Die folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/Reference/Selectors), die es ermöglichen, dass Stile bedingt auf verschiedenen Merkmalen von Elementen innerhalb des DOM basieren.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die einfachsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universeller Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=value]`

### Gruppierungsselektoren

- [Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A` als auch `B` Elemente ausgewählt werden. Dies ist eine Methode zur Gruppierung, um mehrere übereinstimmende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie "`A` ist ein Kind von `B`" oder "`A` ist neben `B`", wodurch ein komplexer Selektor entsteht.

- [Nachbarschafts-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die von `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das von `B` ausgewählte Element dem von `A` ausgewählten Element horizontal unmittelbar folgt.
- [Folge-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die von `A` und `B` ausgewählten Elemente denselben Elternteil teilen und dass das von `A` ausgewählte Element vor dem von `B` ausgewählten kommt, aber nicht unbedingt unmittelbar davor.
- [Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) `A > B`
  - : Gibt an, dass das von `B` ausgewählte Element das direkte Kind des von `A` ausgewählten Elements ist.
- [Nachfahr-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) `A B`
  - : Gibt an, dass das von `B` ausgewählte Element ein Nachfahre des von `A` ausgewählten Elements ist, aber nicht unbedingt ein direktes Kind.
- [Spalten-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das von `B` ausgewählte Element innerhalb der von `A` angegebenen Tabellenspalte liegt. Elemente, die sich über mehrere Spalten erstrecken, gelten als Mitglieder all dieser Spalten.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand der ausgewählten Elemente an.
- [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht in HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektoren-Spezifikation](https://drafts.csswg.org/selectors/) und die [Pseudo-Element-Spezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-Rules](/de/docs/Web/CSS/Reference/At-rules)
- [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
- {{Glossary("CSS_Descriptor", "Deskriptor")}}
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Kurzschreib-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Werte](/de/docs/Web/CSS/Reference/Values)
- [Wertedefinitions-Syntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Funktionale Notationen in CSS](/de/docs/Web/CSS/Reference/Values/Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
- [Anfänglicher Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
- [Aufgelöster Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value)
- [Angegebener Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)

### Layout

- [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- [Enthaltender Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- {{Glossary("Layout_mode", "Layout-Modus")}}
- [Randkollaps](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)

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

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions) (mit dem Präfix `-moz-`)
- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions) (meistens mit dem Präfix `-webkit-`)

## Externe Links

- [CSS-Indizes (w3.org)](https://www.w3.org/TR/css/#indices)
