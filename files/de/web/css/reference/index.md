---
title: CSS-Referenz
slug: Web/CSS/Reference
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Verwenden Sie diese **CSS-Referenz**, um ein [alphabetisches Verzeichnis](#index) aller standardmäßigen [CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [funktionalen Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) und [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) durchzublättern. Sie können auch [wichtige CSS-Konzepte](#konzepte) und eine Liste von [Selektoren nach Typ organisiert](#selektoren) durchsuchen. Ebenfalls enthalten ist eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundsyntax von Regeln

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

Siehe das Verzeichnis der [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudoelemente](#pseudo)_ unten. Die Syntax für jeden angegebenen _Wert_ hängt vom Datentyp ab, der für jede angegebene _Eigenschaft_ definiert ist.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung in die Syntax von Selektoren auf Anfängerniveau lesen Sie unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Beachten Sie, dass ein [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig (Unicode) [textbasiert](https://drafts.csswg.org/css-syntax/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://drafts.csswg.org/cssom/#introduction) ist.

### Syntax von At-Regeln

Da die Struktur von At-Regeln stark variiert, lesen Sie bitte [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), um die Syntax der speziellen, die Sie benötigen, zu finden.

## Index

> [!NOTE]
> Dieser Index enthält keine SVG-exklusiven Präsentationsattribute, die als CSS-Eigenschaften für [SVG](/de/docs/Web/SVG)-Elemente verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index schließen **nicht** die JavaScript-Namen ein, die sich von den CSS-Standardnamen unterscheiden.

{{CSS_Ref}}

## Selektoren

Im Folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors) aufgeführt, die es ermöglichen, Stile basierend auf verschiedenen Eigenschaften von Elementen innerhalb des DOMs bedingt anzuwenden.

### Basis-Selektoren

**Basis-Selektoren** sind grundlegende Selektoren; dies sind die grundlegendsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassen-Selektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppierungsselektoren

- [Selektorliste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A`- als auch `B`-Elemente ausgewählt sind. Dies ist eine Gruppierungsmethode, um mehrere passende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie zum Beispiel "`A` ist ein Kind von `B`" oder "`A` ist benachbart zu `B`", wodurch ein komplexer Selektor erstellt wird.

- [Nachbar-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die durch `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das durch `B` ausgewählte Element dem durch `A` ausgewählten Element horizontal unmittelbar folgt.
- [Nachfolgendes-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die durch `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das durch `A` ausgewählte Element vor—aber nicht unbedingt unmittelbar vor—dem durch `B` ausgewählten Element kommt.
- [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das durch `B` ausgewählte Element das direkte Kind des durch `A` ausgewählten Elements ist.
- [Nachfolger-Kombinator](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das durch `B` ausgewählte Element ein Nachkomme des durch `A` ausgewählten Elements ist, jedoch nicht unbedingt ein direktes Kind.
- [Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das durch `B` ausgewählte Element sich innerhalb der durch `A` angegebenen Tabellenspalte befindet. Elemente, die mehrere Spalten umfassen, gelten als Mitglied all dieser Spalten.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand des ausgewählten Elements oder der ausgewählten Elemente an.
- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht im HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektorspezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelementespezifikation](https://drafts.csswg.org/css-pseudo/).

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
- [Syntax der Wertdefinition](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS-funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Initialwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Aufgelöster Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
- [Angegebener Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value)
- [Genutzter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)

### Layout

- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Enthaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- {{Glossary("Layout_mode", "Layout-Modus")}}
- [Randzusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
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

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) (mit `-moz-` präfixiert)
- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) (meist mit `-webkit-` präfixiert)

## Externe Links

- [CSS-Indizes (w3.org)](https://www.w3.org/TR/css/#indices)
