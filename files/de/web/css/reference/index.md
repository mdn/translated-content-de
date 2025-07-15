---
title: CSS-Referenz
slug: Web/CSS/Reference
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Nutzen Sie diese **CSS-Referenz**, um ein [alphabetisches Verzeichnis](#index) aller standardmäßigen [CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [funktionalen Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) und [at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule) zu durchsuchen. Sie können zudem [wichtige CSS-Konzepte](#konzepte) und eine Liste von [Selektoren nach Typ organisiert](#selektoren) durchstöbern. Ebenfalls enthalten ist eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

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

Sehen Sie sich das Verzeichnis von [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudoelementen](#pseudo)_ unten an. Die Syntax für jeden spezifizierten _Wert_ hängt vom für jede spezifizierte _Eigenschaft_ definierten Datentyp ab.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung auf Anfängerniveau in die Syntax von Selektoren sehen Sie unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Beachten Sie, dass jeder [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig (in Unicode) [textbasiert](https://drafts.csswg.org/css-syntax/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://drafts.csswg.org/cssom/#introduction) ist.

### At-rule-Syntax

Da die Struktur von at-rules stark variieren kann, finden Sie die Syntax der spezifischen, die Sie suchen, unter [At-rule](/de/docs/Web/CSS/CSS_syntax/At-rule).

## Index

> [!NOTE]
> Dieser Index enthält keine SVG-exklusiven Präsentationsattribute, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index enthalten **nicht** die JavaScript-Namen, die sich von den CSS-Standardnamen unterscheiden.

{{CSS_Ref}}

## Selektoren

Die folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors), die es ermöglichen, dass Stile bedingt basierend auf verschiedenen Merkmalen von Elementen innerhalb des DOM angewendet werden.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die grundlegendsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppen-Selektoren

- [Selektorliste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A` als auch `B` Elemente ausgewählt sind. Dies ist eine Gruppierungsmethode, um mehrere übereinstimmende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie „`A` ist ein Kind von `B`“ oder „`A` grenzt an `B`“, und damit einen komplexen Selektor erzeugen.

- [Nachbarschaftsskombinator](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die von beiden `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das von `B` ausgewählte Element dem von `A` ausgewählten Element direkt auf horizontaler Ebene folgt.
- [Subsequent-Sibling-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die von beiden `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das von `A` ausgewählte Element vor—aber nicht unbedingt direkt vor—dem von `B` ausgewählten Element kommt.
- [Kindkombinator](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das von `B` ausgewählte Element das direkte Kind des von `A` ausgewählten Elements ist.
- [Nachfahrenkombinator](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das von `B` ausgewählte Element ein Nachkomme des von `A` ausgewählten Elements ist, aber nicht unbedingt ein direktes Kind.
- [Spaltenkombinator](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das von `B` ausgewählte Element innerhalb der von `A` angegebenen Tabellenspalte liegt. Elemente, die sich über mehrere Spalten erstrecken, werden als Mitglied all dieser Spalten betrachtet.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand der ausgewählten Elemente an.
- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht in HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektoren-Spezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelemente-Spezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- {{Glossary("CSS_Descriptor", "Descriptor")}}
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kurzschreibweisen](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS-Funktionsnotationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Angezeigter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
- [Spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)

### Layout

- [Blockformatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Enthaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- {{Glossary("Layout_mode", "Layout-Modus")}}
- [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [Stapelhierarchie-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
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

- [Mozilla-CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) (mit der Vorsilbe `-moz-`)
- [WebKit-CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) (meistens mit der Vorsilbe `-webkit-`)

## Externe Links

- [CSS-Indizes (w3.org)](https://www.w3.org/TR/css/#indices)
