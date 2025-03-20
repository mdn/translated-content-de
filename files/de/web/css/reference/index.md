---
title: CSS-Referenz
slug: Web/CSS/Reference
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{CSSRef}}

Verwenden Sie diese **CSS-Referenz**, um einen [alphabetischen Index](#index) aller standardmäßigen [CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [funktionalen Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) und [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) zu durchsuchen. Sie können auch wichtige [CSS-Konzepte](#konzepte) und eine Liste von [Selektoren nach Typ organisiert](#selektoren) durchsuchen. Enthalten ist auch eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundlegende Regelsyntax

### Stilregelsyntax

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

Sehen Sie den Index der [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo), und _[Pseudo-Elemente](#pseudo)_ unten. Die Syntax für jeden angegebenen _Wert_ hängt vom Datentyp ab, der für jede angegebene _Eigenschaft_ definiert ist.

#### Stilregelbeispiele

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung auf Anfängerniveau in die Syntax von Selektoren, siehe unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Beachten Sie, dass jeder [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig ({{Glossary("ASCII", "ASCII")}}) [textbasiert](https://www.w3.org/TR/css-syntax-3/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://www.w3.org/TR/cssom/#introduction) ist.

### At-Regel-Syntax

Da die Struktur von At-Regeln stark variiert, besuchen Sie bitte [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), um die Syntax der spezifischen Regel zu finden, die Sie wünschen.

## Index

> [!NOTE]
> Dieser Index enthält keine ausschließlich SVG-spezifischen Präsentationsattribute, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index enthalten **nicht** die JavaScript-Namen, die von den standardmäßigen CSS-Namen abweichen.

{{CSS_Ref}}

## Selektoren

Die folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors), die es ermöglichen, Stile bedingt basierend auf verschiedenen Merkmalen von Elementen innerhalb des DOM anzuwenden.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die einfachsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppenselektoren

- [Selektorliste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A` als auch `B` Elemente ausgewählt werden. Dies ist eine Gruppierungsmethode, um mehrere passende Elemente zu selektieren.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie "`A` ist ein Kind von `B`" oder "`A` ist benachbart zu `B`", und so einen komplexen Selektor erstellen.

- [Nachbar-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die durch `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das durch `B` ausgewählte Element dem durch `A` ausgewählten Element direkt horizontal folgt.
- [Subsequenter Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die durch `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das durch `A` ausgewählte Element vor, aber nicht unbedingt direkt vor dem durch `B` ausgewählten Element kommt.
- [Kinder-Kombinator](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das durch `B` ausgewählte Element das direkte Kind des durch `A` ausgewählten Elements ist.
- [Nachkomme-Kombinator](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das durch `B` ausgewählte Element ein Nachkomme des durch `A` ausgewählten Elements ist, aber nicht unbedingt ein direktes Kind.
- [Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das durch `B` ausgewählte Element innerhalb der Tabellenspalte liegt, die durch `A` spezifiziert ist. Elemente, die mehrere Spalten überspannen, werden als Mitglied all dieser Spalten betrachtet.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen speziellen Status des/der ausgewählten Elements/Elemente an.
- [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Stellt Entitäten dar, die nicht in HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektorenspezifikation](https://drafts.csswg.org/selectors/) und die [Pseudo-Element-Spezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- {{Glossary("CSS_Descriptor", "Deskriptor")}}
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Wertdefinierungssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS-funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)

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
- {{Glossary("Layout_mode", "Layoutmodus")}}
- [Rand-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [Stapelkonstrukt](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
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

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) (mit `-moz-` vorangestellt)
- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) (meistens mit `-webkit-` vorangestellt)

## Externe Links

- [CSS Indizes (w3.org)](https://www.w3.org/TR/CSS/#indices)
