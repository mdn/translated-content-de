---
title: margin-top
slug: Web/CSS/margin-top
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`margin-top`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den [Außenabstand](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) am oberen Rand eines Elements fest. Ein positiver Wert vergrößert den Abstand zu seinen Nachbarn, während ein negativer Wert ihn verringert.

{{InteractiveExample("CSS Demo: margin-top")}}

```css interactive-example-choice
margin-top: 1em;
```

```css interactive-example-choice
margin-top: 10%;
```

```css interactive-example-choice
margin-top: 10px;
```

```css interactive-example-choice
margin-top: 0;
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

Diese Eigenschaft hat keine Auswirkung auf _nicht-{{Glossary("Replaced_elements", "ersetzte")}}_ Inline-Elemente, wie z.B. {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

## Syntax

```css
/* <length> values */
margin-top: 10px; /* An absolute length */
margin-top: 1em; /* relative to the text size */
margin-top: 5%; /* relative to the nearest block container's width */
margin-top: anchor-size(height);
margin-top: calc(anchor-size(--myAnchor self-inline, 25px) / 4);

/* Keyword values */
margin-top: auto;

/* Global values */
margin-top: inherit;
margin-top: initial;
margin-top: revert;
margin-top: revert-layer;
margin-top: unset;
```

Die `margin-top` Eigenschaft wird als Schlüsselwort `auto`, oder als `<length>`, oder als `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Die Größe des Außenabstands als fester Wert.
    - Für _ankerpositionierte Elemente_ löst die Funktion {{cssxref("anchor-size()")}} in einen {{cssxref("&lt;length&gt;")}} Wert auf, relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ (siehe [Festlegen des Außenabstands eines Elements basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Außenabstands als Prozentsatz, relativ zur Inlinengröße (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Wert aus. Siehe {{cssxref("margin")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen positiver und negativer oberer Ränder

```css
.content {
  margin-top: 5%;
}
.side-box {
  margin-top: 10px;
}
.logo {
  margin-top: -5px;
}
#footer {
  margin-top: 1em;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("margin")}} Kurzform
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} Kurzformen
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
