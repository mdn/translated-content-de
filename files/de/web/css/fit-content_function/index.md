---
title: fit-content()
slug: Web/CSS/fit-content_function
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`fit-content()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) begrenzt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximum size, max(minimum size, argument))`.

{{InteractiveExample("CSS Demo: fit-content()")}}

```css interactive-example-choice
grid-template-columns: fit-content(8ch) fit-content(8ch) 1fr;
```

```css interactive-example-choice
grid-template-columns: fit-content(100px) fit-content(100px) 1fr;
```

```css interactive-example-choice
grid-template-columns: fit-content(40%) fit-content(40%) 1fr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One. This column has more text in it.</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-gap: 10px;
  width: 250px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  text-align: left;
}
```

Die Funktion kann als Spurgröße in [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) Eigenschaften verwendet werden, wobei die maximale Größe durch `max-content` und die minimale Größe durch `auto` definiert wird. Diese wird ähnlich wie `auto` berechnet (d.h., [`minmax(auto, max-content)`](/de/docs/Web/CSS/minmax)), außer dass die Spurgröße bei _argument_ begrenzt wird, wenn sie größer als das `auto`-Minimum ist.

Weitere Informationen zu den Schlüsselwörtern `max-content` und `auto` finden Sie auf der Seite {{cssxref("grid-template-columns")}}.

Die `fit-content()` Funktion kann auch als ausgelegte Boxgröße für {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} und {{cssxref("max-height")}} verwendet werden, wobei sich die maximalen und minimalen Größen auf die Inhaltsgröße beziehen.

## Syntax

Die `fit-content()` Funktion nimmt ein `<length>` oder ein `<percentage>` als Argument an.

```css
/* <length> values */
fit-content(200px)
fit-content(5cm)
fit-content(30vw)
fit-content(100ch)

/* <percentage> value */
fit-content(40%)
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Eine absolute Länge.
- {{cssxref("&lt;percentage&gt;")}}

  - : Ein Prozentsatz relativ zum verfügbaren Raum in der gegebenen Achse.

    In Gridgeeigenschaften bezieht sich dies auf die Inline-Größe des Gittercontainers in Spalten und auf die Blockgröße des Gittercontainers für Reihen. Andernfalls bezieht es sich auf die verfügbare Inline- oder Blockgröße der ausgelegten Box, abhängig vom Schreibmodus.

## Formale Syntax

{{CSSSyntax("fit-content")}}

## Beispiele

### Grid-Spalten mit fit-content dimensionieren

#### HTML

```html
<div id="container">
  <div>Item as wide as the content.</div>
  <div>
    Item with more text in it. Because the contents of it are wider than the
    maximum width, it is clamped at 300 pixels.
  </div>
  <div>Flexible item</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### Ergebnis

{{EmbedLiveSample("Sizing_grid_columns_with_fit-content", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("min-content")}} Schlüsselbegriff
- {{cssxref("max-content")}} Schlüsselbegriff
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_sizing) Modul
- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [Zeilenbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid Template Areas: Gitterdefinition Abkürzungen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
