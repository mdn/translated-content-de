---
title: "`margin-top` CSS property"
short-title: margin-top
slug: Web/CSS/Reference/Properties/margin-top
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`margin-top`** legt den [Außenrandbereich](/de/docs/Web/CSS/Guides/Box_model/Introduction#margin_area) am oberen Rand eines Elements fest. Ein positiver Wert platziert ihn weiter von seinen Nachbarn entfernt, während ein negativer Wert ihn näher platziert.

Diese Eigenschaft hat keine Auswirkung auf _nicht-{{Glossary("Replaced_elements", "ersetzte")}}_ Inline-Elemente wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

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

Die Eigenschaft `margin-top` wird als Schlüsselwort `auto`, als `<length>` oder als `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Außenrands als fester Wert.
    - Für _ankerpositionierte Elemente_ wird die Funktion {{cssxref("anchor-size()")}} zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ aufgelöst (siehe [Festlegen des Element-Außenrands basierend auf der Ankergröße](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Außenrands als Prozentsatz relativ zur Inline-Größe (_width_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten zu verwendenden Wert aus. Siehe {{cssxref("margin")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen positiver und negativer oberer Außenränder

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

- {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}
- Kurzform {{cssxref("margin")}}
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}
- Kurzformen {{cssxref("margin-block")}} und {{cssxref("margin-inline")}}
- Modul [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model)
