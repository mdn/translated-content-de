---
title: CSS-Referenz
slug: Web/CSS/Reference
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Verwenden Sie diese **CSS-Referenz**, um ein [alphabetisches Verzeichnis](#verzeichnis) aller Standard-[CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) und [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) zu durchsuchen. Sie können auch die [Schlüsselkonzepte von CSS](#konzepte) und eine Liste von [Selektoren, organisiert nach Typ](#selektoren), durchsuchen. Ebenfalls enthalten ist eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundlegende Regelsyntax

### Stilsyntax der Regel

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

Siehe das Verzeichnis der [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudo-Elemente](#pseudo)_ unten. Die Syntax für jeden angegebenen _Wert_ hängt vom Datentyp ab, der für jede angegebene _Eigenschaft_ definiert ist.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung auf Anfängerniveau in die Syntax von Selektoren, siehe unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Beachten Sie, dass jeder [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig ({{Glossary("ASCII", "ASCII")}}) [textbasiert](https://www.w3.org/TR/css-syntax-3/#intro) sind, während DOM-CSS/CSSOM (das Regelverwaltungssystem) [objektbasiert](https://www.w3.org/TR/cssom/#introduction) ist.

### Syntax der At-Regel

Da die Struktur der At-Regeln stark variiert, siehe bitte [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), um die Syntax der spezifischen Regel zu finden, die Sie wünschen.

## Verzeichnis

> [!NOTE]
> Dieses Verzeichnis enthält keine SVG-exklusiven Präsentationsattribute, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Verzeichnis enthalten **nicht** die JavaScript-Namen, die von den standardmäßigen CSS-Namen abweichen.

{{CSS_Ref}}

## Selektoren

Die folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors), die es ermöglichen, Stile basierend auf verschiedenen Merkmalen von Elementen innerhalb des DOM bedingt anzuwenden.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die grundlegendsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppierungsselektoren

- [Selektor-Liste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A`- als auch `B`-Elemente ausgewählt werden. Dies ist eine Gruppierungsmethode, um mehrere übereinstimmende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie „`A` ist ein Kind von `B`“ oder „`A` ist ein Nachfolger von `B`“, und so einen komplexen Selektor erstellen.

- [Nachfolgender Geschwisterkombinator](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die Elemente, die sowohl von `A` als auch von `B` ausgewählt werden, denselben Elternteil haben und dass das von `B` ausgewählte Element das Element ist, das unmittelbar dem von `A` ausgewählten Element horizontal folgt.
- [Subsequent-sibling-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die Elemente, die sowohl von `A` als auch von `B` ausgewählt werden, denselben Elternteil teilen und dass das von `A` ausgewählte Element vor dem von `B` ausgewählten Element kommt – aber nicht unbedingt unmittelbar davor.
- [Kindkombinator](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das von `B` ausgewählte Element das direkte Kind des von `A` ausgewählten Elements ist.
- [Nachfahrenkombinator](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das von `B` ausgewählte Element ein Nachfahre des von `A` ausgewählten Elements ist, jedoch nicht unbedingt ein direktes Kind.
- [Spaltenkombinator](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das von `B` ausgewählte Element sich innerhalb der durch `A` angegebenen Tabellenspalte befindet. Elemente, die sich über mehrere Spalten erstrecken, werden als zu allen diesen Spalten gehörend betrachtet.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand der ausgewählten Elemente an.
- [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht in HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektorspezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelement-Spezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- {{Glossary("CSS_Descriptor", "Deskriptor")}}
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Syntax der Wertedefinition](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Funktionale CSS-Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value)
- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
- [Spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified-value)
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value)

### Layout

- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Umgebender Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- {{Glossary("Layout_mode", "Layout-Modus")}}
- [Rand-Zusammenbruch](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [Staplerkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
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

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) (mit `-moz-` vorangestellt)
- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) (meistens mit `-webkit-` vorangestellt)

## Externe Links

- [CSS-Indizes (w3.org)](https://www.w3.org/TR/CSS/#indices)
