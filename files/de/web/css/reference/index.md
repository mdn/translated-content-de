---
title: CSS-Referenz
slug: Web/CSS/Reference
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Verwenden Sie diese **CSS-Referenz**, um einen [alphabetischen Index](#index) aller standardmäßigen [CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [Funktionsnotationen](/de/docs/Web/CSS/CSS_Functions) und [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule) zu durchsuchen. Sie können auch [wesentliche CSS-Konzepte](#konzepte) und eine Liste von [Selektoren, nach Typ geordnet](#selektoren) durchsuchen. Außerdem ist eine kurze [DOM-CSS / CSSOM-Referenz](#dom-css_cssom) enthalten.

## Grundlegende Regel-Syntax

### Syntax von Stilregeln

```css
style-rule ::=
    selectors-list {
      properties-list
    }
```

Dabei gilt:

```css
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=
    [property : value] [; properties-list]
```

Sehen Sie sich den Index zu [_Selektoren_](#selektoren), [_Pseudoklassen_](#pseudo) und _[Pseudoelementen](#pseudo)_ unten an. Die Syntax für jeden angegebenen _Wert_ hängt vom Datentyp ab, der für jede angegebene _Eigenschaft_ definiert ist.

#### Beispiele für Stilregeln

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Für eine Einführung auf Anfängerniveau zur Syntax von Selektoren lesen Sie unseren [Leitfaden zu CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Beachten Sie, dass jeder [Syntaxfehler](/de/docs/Web/CSS/CSS_syntax/Syntax) in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachten Sie, dass CSS-Regeldefinitionen vollständig ({{Glossary("ASCII", "ASCII")}}) [textbasiert](https://www.w3.org/TR/css-syntax-3/#intro) sind, während DOM-CSS / CSSOM (das Regelverwaltungssystem) [objektbasiert](https://www.w3.org/TR/cssom/#introduction) ist.

### Syntax von At-Rules

Da die Struktur von At-Rules stark variiert, lesen Sie bitte [At-Rule](/de/docs/Web/CSS/CSS_syntax/At-rule), um die Syntax der jeweiligen At-Rule zu finden.

## Index

> [!NOTE]
> Dieser Index enthält keine SVG-exklusiven Präsentationsattribute, die als CSS-Eigenschaften auf [SVG](/de/docs/Web/SVG)-Elementen verwendet werden können.

> [!NOTE]
> Die Eigenschaftsnamen in diesem Index enthalten **nicht** die JavaScript-Namen, die sich von den standardmäßigen CSS-Namen unterscheiden.

{{CSS_Ref}}

## Selektoren

Im Folgenden sind die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_selectors) aufgeführt, mit denen Stile basierend auf verschiedenen Eigenschaften von Elementen im DOM konditional angewendet werden können.

### Grundlegende Selektoren

**Grundlegende Selektoren** sind fundamentale Selektoren; dies sind die am häufigsten kombinierten Selektoren, um andere, komplexere Selektoren zu erstellen.

- [Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`
- [Typselektor](/de/docs/Web/CSS/Type_selectors) `elementname`
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors) `.classname`
- [ID-Selektor](/de/docs/Web/CSS/ID_selectors) `#idname`
- [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Gruppierende Selektoren

- [Selektorliste](/de/docs/Web/CSS/Selector_list) `A, B`
  - : Gibt an, dass sowohl `A`- als auch `B`-Elemente ausgewählt werden. Dies ist eine Gruppierungsmethode, um mehrere übereinstimmende Elemente auszuwählen.

### Kombinatoren

Kombinatoren sind Selektoren, die eine Beziehung zwischen zwei oder mehr einfachen Selektoren herstellen, wie z. B. "`A` ist ein Kind von `B`" oder "`A` ist benachbart zu `B`", um einen komplexen Selektor zu erstellen.

- [Nächster-Geschwister-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Gibt an, dass die von `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das von `B` ausgewählte Element unmittelbar horizontal dem von `A` ausgewählten Element folgt.
- [Nachfolgender-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Gibt an, dass die von `A` und `B` ausgewählten Elemente denselben Elternteil haben und dass das von `A` ausgewählte Element vor—aber nicht unbedingt unmittelbar vor—dem von `B` ausgewählten Element liegt.
- [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) `A > B`
  - : Gibt an, dass das von `B` ausgewählte Element das direkte Kind des von `A` ausgewählten Elements ist.
- [Nachkomme-Kombinator](/de/docs/Web/CSS/Descendant_combinator) `A B`
  - : Gibt an, dass das von `B` ausgewählte Element ein Nachkomme des von `A` ausgewählten Elements ist, jedoch nicht unbedingt ein direktes Kind.
- [Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Gibt an, dass sich das von `B` ausgewählte Element innerhalb der von `A` angegebenen Tabellenspalte befindet. Elemente, die sich über mehrere Spalten erstrecken, werden als Mitglied all dieser Spalten betrachtet.

### Pseudo

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - : Gibt einen speziellen Zustand des/der ausgewählten Elemente(s) an.
- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) `::`
  - : Repräsentiert Entitäten, die nicht in HTML enthalten sind.

> [!CALLOUT]
>
> Siehe auch [Selektoren in der Selektoren-Spezifikation](https://drafts.csswg.org/selectors/) und die [Pseudoelement-Spezifikation](https://drafts.csswg.org/css-pseudo/).

## Konzepte

### Syntax und Semantik

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- {{Glossary("CSS_Descriptor", "Descriptor")}}
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Kurzformat-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Wert-Definitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Einheit und Wertetypen](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS-Funktionsnotationen](/de/docs/Web/CSS/CSS_Functions)

### Werte

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/computed_value)
- [Initialer Wert](/de/docs/Web/CSS/CSS_cascade/initial_value)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
- [Spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/specified_value)
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/used_value)

### Layout

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Enthaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Layout-Modus](/de/docs/Web/CSS/Layout_mode)
- [Zusammenführung von Rändern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [Stapeln-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
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

- [Mozilla-CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) (mit dem Präfix `-moz-`)
- [WebKit-CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) (meist mit dem Präfix `-webkit-`)

## Externe Links

- [CSS-Indizes (w3.org)](https://www.w3.org/TR/CSS/#indices)
