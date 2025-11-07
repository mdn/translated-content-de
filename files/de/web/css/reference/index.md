---
title: CSS-Referenz
short-title: Reference
slug: Web/CSS/Reference
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Verwenden Sie diese **CSS-Referenz**, um ein [alphabetisches Verzeichnis](#verzeichnis) aller standardmäßigen [CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types), [funktionale Notationen](/de/docs/Web/CSS/Reference/Values/Functions) und [Regeln](/de/docs/Web/CSS/CSS_syntax/At-rules) zu durchsuchen. Sie können auch [wichtige CSS-Konzepte](#konzepte) und eine Liste von [Selektoren nach Typ organisiert](#selektoren) durchsuchen. Ebenfalls enthalten ist eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundlegende Regelsyntax

### Syntax von Stilregeln

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

Siehe das Verzeichnis der [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudoelemente](#pseudo)_ unten. Die Syntax für jeden angegebenen _Wert_ hängt vom für jede angegebene _Eigenschaft_ definierten Datentyp ab.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung auf Anfängerniveau in die Syntax von Selektoren lesen Sie unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Beachten Sie, dass jeder [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig (Unicode) [textbasiert](https://drafts.csswg.org/css-syntax/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://drafts.csswg.org/cssom/#introduction) ist.

### Syntax von Regeln

Da die Struktur der Regeln stark variiert, lesen Sie bitte [Regel](/de/docs/Web/CSS/CSS_syntax/At-rules), um die Syntax der spezifischen Regel zu finden, die Sie möchten.

## Verzeichnis

> [!NOTE]
> Dieses Verzeichnis enthält keine nur für SVG geltenden Präsentationsattribute, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Verzeichnis beinhalten **nicht** die JavaScript-Namen, die sich von den CSS-Standardnamen unterscheiden.

{{CSS_Ref}}

## Selektoren

Die folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors), die es ermöglichen, dass Stile basierend auf verschiedenen Merkmalen von Elementen innerhalb des DOMs bedingt sind.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die grundlegendsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) `*`
- [Typ-Selektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) `.classname`
- [ID-Seletkor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=value]`

### Gruppierende Selektoren

- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A`- als auch `B`-Elemente ausgewählt werden. Dies ist eine Gruppierungsmethode zum Auswählen mehrerer übereinstimmender Elemente.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie "`A` ist ein Kind von `B`" oder "`A` ist angrenzend zu `B`", wodurch ein komplexer Selektor erstellt wird.

- [Direkt-Nachbar-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die durch sowohl `A` als auch `B` ausgewählten Elemente denselben Eltern haben und dass das durch `B` ausgewählte Element unmittelbar nach dem durch `A` ausgewählten Element horizontal folgt.
- [Allgemeiner Geschwisterkombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die durch sowohl `A` als auch `B` ausgewählten Elemente denselben Eltern haben, und dass das durch `A` ausgewählte Element vor - aber nicht unbedingt unmittelbar vor - dem durch `B` ausgewählten Element kommt.
- [Kindkombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) `A > B`
  - : Gibt an, dass das durch `B` ausgewählte Element ein direktes Kind des durch `A` ausgewählten Elements ist.
- [Nachfahren-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) `A B`
  - : Gibt an, dass das durch `B` ausgewählte Element ein Nachfahre des durch `A` ausgewählten Elements ist, aber nicht unbedingt ein direktes Kind.
- [Spalten-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das durch `B` ausgewählte Element sich innerhalb der von `A` angegebenen Tabellenspalte befindet. Elemente, die sich über mehrere Spalten erstrecken, gelten als Mitglied all dieser Spalten.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand der ausgewählten Elemente an.
- [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::`
  - : Repräsentieren Entitäten, die nicht in HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektorenspezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelemente-Spezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Regeln](/de/docs/Web/CSS/CSS_syntax/At-rules)
- [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- {{Glossary("CSS_Descriptor", "Deskriptor")}}
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kurzschreibweise von Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Wertedefinitionssytax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units)
- [Funktionale Notationen in CSS](/de/docs/Web/CSS/Reference/Values/Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Aufgelöster Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
- [Spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)

### Layout

- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Enthaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- {{Glossary("Layout_mode", "Layout-Modus")}}
- [Margin-Zusammenfügung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)

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

- [Mozilla-CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions) (mit dem Präfix `-moz-`)
- [WebKit-CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions) (meistens mit dem Präfix `-webkit-`)

## Externe Links

- [CSS-Indizes (w3.org)](https://www.w3.org/TR/css/#indices)
