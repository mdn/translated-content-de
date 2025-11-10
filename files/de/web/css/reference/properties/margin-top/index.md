---
title: margin-top
slug: Web/CSS/Reference/Properties/margin-top
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`margin-top`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt den [Randbereich](/de/docs/Web/CSS/Guides/Box_model/Introduction#margin_area) oben an einem Element. Ein positiver Wert platziert es weiter von seinen Nachbarn entfernt, während ein negativer Wert es näher platziert.

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

Diese Eigenschaft hat keine Auswirkung auf _nicht-{{Glossary("Replaced_elements", "ersetzte")}}_ Inline-Elemente, wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

## Syntax

```css
/* <length> values */
margin-top: 10px; /* An absolute length */
margin-top: 1em; /* relative to the text size */
margin-top: 5%; /* relative to the nearest block container's width */
margin-top: anchor-size(height);
margin-top: calc(anchor-size(--my-anchor self-inline, 25px) / 4);

/* Keyword values */
margin-top: auto;

/* Global values */
margin-top: inherit;
margin-top: initial;
margin-top: revert;
margin-top: revert-layer;
margin-top: unset;
```

Die `margin-top` Eigenschaft wird entweder als Schlüsselwort `auto`, oder als `<length>`, oder `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Die Größe des Randes als fester Wert.
    - Für _ankerpositionierte Elemente_ löst sich die {{cssxref("anchor-size()")}} Funktion zu einem {{cssxref("&lt;length&gt;")}} Wert relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ auf (siehe [Elementrand basierend auf Ankergröße setzen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Randes als Prozentwert, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Wert aus. Siehe {{cssxref("margin")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positive und negative obere Ränder setzen

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
- {{cssxref("margin")}} Kurzschreibweise
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} Kurzschreibweisen
- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
