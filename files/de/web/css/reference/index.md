---
title: CSS-Referenz
slug: Web/CSS/Reference
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{CSSRef}}

Nutzen Sie diese **CSS-Referenz**, um einen [alphabetischen Index](#index) aller standardmäßigen [CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Types), [funktionalen Notationen](/de/docs/Web/CSS/CSS_Functions) und [At-Regeln](/de/docs/Web/CSS/At-rule) zu durchsuchen. Sie können auch die [zentralen CSS-Konzepte](#konzepte) und eine Liste von [Selektoren, geordnet nach Typ](#selektoren) durchsuchen. Außerdem enthalten ist eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundlegende Regel-Syntax

### Stilregel-Syntax

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

Siehe den Index der [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudoelemente](#pseudo)_ unten. Die Syntax für jeden angegebenen _Wert_ hängt von dem Datentyp ab, der für jede angegebene _Eigenschaft_ definiert ist.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung auf Anfängerniveau in die Syntax von Selektoren, siehe unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors). Beachten Sie, dass jeder [Syntax](/de/docs/Web/CSS/Syntax)-Fehler in einer Regeldeklaration die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldeklarationen vollständig [textbasiert](https://www.w3.org/TR/css-syntax-3/#intro) sind (ASCII), während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://www.w3.org/TR/cssom/#introduction) ist.

### At-Regel-Syntax

Da die Struktur von At-Regeln stark variiert, schauen Sie bitte in [At-Regel](/de/docs/Web/CSS/At-rule), um die Syntax der gewünschten spezifischen At-Regel zu finden.

## Index

> [!NOTE]
> Dieser Index enthält keine exklusiven Präsentationsattribute von SVG, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index enthalten **nicht** die JavaScript-Namen, die sich von den standardmäßigen CSS-Namen unterscheiden.

{{CSS_Ref}}

## Selektoren

Die folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors), die es ermöglichen, Stile basierend auf verschiedenen Merkmalen von Elementen innerhalb des DOM bedingt anzuwenden.

### Basisselektoren

**Basisselektoren** sind grundlegende Selektoren; sie sind die einfachsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppierungsselektoren

- [Selektor-Liste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A` als auch `B` Elemente ausgewählt sind. Dies ist eine Gruppierungsmethode, um mehrere passende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie zum Beispiel "`A` ist ein Kind von `B`" oder "`A` ist benachbart zu `B`", wodurch ein komplexer Selektor entsteht.

- [Kombinator für das nächste Geschwisterelement](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die von sowohl `A` als auch `B` ausgewählten Elemente denselben Elternteil haben und dass das von `B` ausgewählte Element dem von `A` ausgewählten Element horizontal unmittelbar folgt.
- [Kombinator für nachfolgende Geschwisterelemente](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die von sowohl `A` als auch `B` ausgewählten Elemente denselben Elternteil haben und dass das von `A` ausgewählte Element vor dem, aber nicht unbedingt unmittelbar vor dem von `B` ausgewählten Element kommt.
- [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das von `B` ausgewählte Element das direkte Kind des von `A` ausgewählten Elements ist.
- [Nachkomme-Kombinator](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das von `B` ausgewählte Element ein Nachkomme des von `A` ausgewählten Elements ist, aber nicht unbedingt ein direktes Kind.
- [Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das von `B` ausgewählte Element sich innerhalb der von `A` spezifizierten Tabellenspalte befindet. Elemente, die mehrere Spalten überspannen, werden als Mitglied all dieser Spalten angesehen.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand des ausgewählten Elements bzw. der ausgewählten Elemente an.
- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht in HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektoren-Spezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelement-Spezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Kaskade](/de/docs/Web/CSS/Cascade)
- [Kommentare](/de/docs/Web/CSS/Comments)
- [Deskriptor](/de/docs/Glossary/CSS_Descriptor)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Einheiten und Wertetypen](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS-Funktionale Notationen](/de/docs/Web/CSS/CSS_Functions)

### Werte

- [Aktueller Wert](/de/docs/Web/CSS/actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/computed_value)
- [Anfangswert](/de/docs/Web/CSS/initial_value)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
- [Spezifizierter Wert](/de/docs/Web/CSS/specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/used_value)

### Layout

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Enthaltender Block](/de/docs/Web/CSS/Containing_block)
- [Layout-Modus](/de/docs/Web/CSS/Layout_mode)
- [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)

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

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) (mit dem Präfix `-moz-`)
- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) (meistens mit dem Präfix `-webkit-`)

## Externe Links

- [CSS-Indizes (w3.org)](https://www.w3.org/TR/CSS/#indices)
