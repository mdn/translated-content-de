---
title: margin-bottom
slug: Web/CSS/margin-bottom
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`margin-bottom`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) am unteren Ende eines Elements fest. Ein positiver Wert platziert es weiter von seinen Nachbarn entfernt, während ein negativer Wert es näher heranbringt.

{{InteractiveExample("CSS Demo: margin-bottom")}}

```css interactive-example-choice
margin-bottom: 1em;
```

```css interactive-example-choice
margin-bottom: 10%;
```

```css interactive-example-choice
margin-bottom: 10px;
```

```css interactive-example-choice
margin-bottom: 0;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row"></div>
    <div class="row transition-all" id="example-element"></div>
    <div class="row"></div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

![Die Wirkung der CSS margin-bottom Eigenschaft auf das Element-Box](margin-bottom.svg)

Diese Eigenschaft hat keine Auswirkung auf _nicht-{{Glossary("Replaced_elements", "ersetzte")}}_ Inline-Elemente, wie z.B. {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

## Syntax

```css
/* <length> values */
margin-bottom: 10px; /* An absolute length */
margin-bottom: 1em; /* relative to the text size */
margin-bottom: 5%; /* relative to the nearest block container's width */
margin-bottom: anchor-size(width);
margin-bottom: calc(anchor-size(--my-anchor self-block, 20px) / 3);

/* Keyword values */
margin-bottom: auto;

/* Global values */
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: revert;
margin-bottom: revert-layer;
margin-bottom: unset;
```

Die `margin-bottom` Eigenschaft wird als das Schlüsselwort `auto`, oder als ein `<length>`, oder ein `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Randes als fester Wert.
    - Für _anker-positionierte Elemente_ wird die Funktion {{cssxref("anchor-size()")}} zu einem {{cssxref("&lt;length&gt;")}} Wert relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ aufgelöst (siehe [Festlegen des Elementrandes basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Randes als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Wert. Siehe {{cssxref("margin")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von positiven und negativen unteren Abständen

#### HTML

```html
<div class="container">
  <div class="box0">Box 0</div>
  <div class="box1">Box 1</div>
  <div class="box2">Box one's negative margin pulls me up</div>
</div>
```

#### CSS

CSS für Divs, um margin-bottom und Höhe festzulegen

```css
.box0 {
  margin-bottom: 1em;
  height: 3em;
}
.box1 {
  margin-bottom: -1.5em;
  height: 4em;
}
.box2 {
  border: 1px dashed black;
  border-width: 1px 0;
  margin-bottom: 2em;
}
```

Einige Definitionen für Container und Divs, damit die Wirkungen der Abstände deutlicher sichtbar sind

```css
.container {
  background-color: orange;
  width: 320px;
  border: 1px solid black;
}
div {
  width: 320px;
  background-color: gold;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_positive_and_negative_bottom_margins',350,200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, und {{cssxref("margin-left")}}
- {{cssxref("margin")}} Kurzform
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} Kurzformen
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
