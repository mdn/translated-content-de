---
title: CSS-Referenz
slug: Web/CSS/Reference
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{CSSRef}}

Verwenden Sie diese **CSS-Referenz**, um einen [alphabetischen Index](#index) aller standardmäßigen [CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Types), [Funktionale Notationen](/de/docs/Web/CSS/CSS_Functions) und [At-Regeln](/de/docs/Web/CSS/At-rule) zu durchsuchen. Sie können auch [wichtige CSS-Konzepte](#konzepte) und eine Liste von [Selektoren, die nach Typ organisiert sind](#selektoren) durchsuchen. Ebenfalls enthalten ist eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom).

## Grundlegende Syntax von Regeln

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

Für eine Einführung auf Anfängerebene in die Syntax von Selektoren lesen Sie unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors). Beachten Sie, dass jeder [Syntax](/de/docs/Web/CSS/Syntax)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig ({{Glossary("ASCII")}}) [textbasiert](https://www.w3.org/TR/css-syntax-3/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://www.w3.org/TR/cssom/#introduction) ist.

### Syntax von At-Regeln

Da die Struktur von At-Regeln stark variiert, besuchen Sie bitte [At-Regel](/de/docs/Web/CSS/At-rule), um die Syntax der spezifischen Regel zu finden, die Sie benötigen.

## Index

> [!NOTE]
> Dieser Index enthält keine SVG-exklusiven Präsentationsattribute, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index enthalten **nicht** die JavaScript-Namen, die von den standardmäßigen CSS-Namen abweichen.

{{CSS_Ref}}

## Selektoren

Nachfolgend sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors) aufgeführt, die es ermöglichen, dass Stile basierend auf verschiedenen Eigenschaften von Elementen innerhalb des DOM bedingt angewendet werden.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die grundlegendsten Selektoren, die häufig kombiniert werden, um andere, komplexere Selektoren zu erstellen.

- [Universeller Selektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassen-Selektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppierungsselektoren

- [Selektorliste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A`- als auch `B`-Elemente ausgewählt werden. Dies ist eine Gruppierungsmethode, um mehrere passende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie "`A` ist ein Kind von `B`" oder "`A` ist benachbart zu `B`", wodurch ein komplexer Selektor entsteht.

- [Nachbar-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die von `A` und `B` ausgewählten Elemente das gleiche übergeordnete Element haben und dass das von `B` ausgewählte Element unmittelbar dem von `A` ausgewählten Element horizontal folgt.
- [Folgender Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die von `A` und `B` ausgewählten Elemente das gleiche übergeordnete Element teilen und dass das von `A` ausgewählte Element vor, aber nicht unbedingt unmittelbar vor dem von `B` ausgewählten Element kommt.
- [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das von `B` ausgewählte Element das direkte Kind des von `A` ausgewählten Elements ist.
- [Nachkommen-Kombinator](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das von `B` ausgewählte Element ein Nachkomme des von `A` ausgewählten Elements ist, aber nicht notwendigerweise ein direktes Kind.
- [Spaltenkombinator](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass das von `B` ausgewählte Element sich in der von `A` angegebenen Tabellenspalte befindet. Elemente, die sich über mehrere Spalten erstrecken, werden als Mitglieder all dieser Spalten betrachtet.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand des ausgewählten Elements (der ausgewählten Elemente) an.
- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht im HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektorspezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelementspezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Kaskade](/de/docs/Web/CSS/Cascade)
- [Kommentare](/de/docs/Web/CSS/Comments)
- [Deskriptor](/de/docs/Glossary/CSS_Descriptor)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Kurzschreibweise Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Einheit und Wertetypen](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS funktionale Notationen](/de/docs/Web/CSS/CSS_Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/computed_value)
- [Anfangswert](/de/docs/Web/CSS/initial_value)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
- [Angegebener Wert](/de/docs/Web/CSS/specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/used_value)

### Layout

- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Enthaltene Block](/de/docs/Web/CSS/Containing_block)
- [Layoutmodus](/de/docs/Web/CSS/Layout_mode)
- [Randzusammenbruch](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [Stapelschichtkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### Haupt-Objekttypen

- {{DOMxRef("Document.styleSheets")}}
- {{DOMxRef("HTMLElement.style")}}
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("CSSRuleList")}}
- {{DOMxRef("CSSRule")}}
- {{DOMxRef("CSSStyleRule")}}
- {{DOMxRef("CSSStyleDeclaration")}}

### Wichtige Methoden

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) (mit dem Präfix `-moz-`)
- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) (meistens mit dem Präfix `-webkit-`)

## Externe Links

- [CSS Indizes (w3.org)](https://www.w3.org/TR/CSS/#indices)
