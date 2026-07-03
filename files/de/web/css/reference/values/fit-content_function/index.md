---
title: "`fit-content()` CSS-Funktion"
short-title: fit-content()
slug: Web/CSS/Reference/Values/fit-content_function
l10n:
  sourceCommit: 5e4520f9cd84f65d470ec57efef7a73bbe9fd686
---

Die **`fit-content()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) beschränkt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximum size, max(minimum size, argument))`.

Sie unterscheidet sich vom {{cssxref("fit-content")}} Schlüsselwort, das kein Argument benötigt und eine Box basierend auf ihrem Inhalt innerhalb des verfügbaren Raums dimensioniert.
Nur `fit-content()` ist in Gitterspur-Größeneigenschaften wie {{cssxref("grid-template-columns")}} gültig.

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
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  text-align: left;
}
```

Die Funktion kann als Spurgröße in [CSS Raster](/de/docs/Web/CSS/Guides/Grid_layout)-Eigenschaften verwendet werden, wobei die maximale Größe durch `max-content` und die minimale Größe durch `auto` definiert ist. Diese wird ähnlich wie `auto` berechnet (d.h. [`minmax(auto, max-content)`](/de/docs/Web/CSS/Reference/Values/minmax)), außer dass die Spurgröße am _Argument_ begrenzt wird, wenn es größer als das `auto`-Minimum ist.

Weitere Informationen zu den Schlüsselwörtern `max-content` und `auto` finden Sie auf der Seite {{cssxref("grid-template-columns")}}.

Die `fit-content()`-Funktion kann auch als ausgelegte Boxengröße für {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} und {{cssxref("max-height")}} verwendet werden, wobei sich die maximalen und minimalen Größen auf die Inhaltgröße beziehen.

## Syntax

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

    Bei Rastereigenschaften ist es relativ zur Inline-Größe des Raster-Containers in Spaltenspuren und zur Block-Größe des Raster-Containers für Zeilenspuren. Ansonsten ist es relativ zur verfügbaren Inline-Größe oder Block-Größe der ausgelegten Box, abhängig vom Schreibmodus.

## Formale Syntax

{{CSSSyntax("fit-content")}}

## Beispiele

### Dimensionierung von Gitterspalten mit fit-content

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
- [CSS-Boxdimensionierung](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("fit-content")}} Schlüsselbegriff
- [Linienbasierte Platzierung mit CSS Raster](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Raster-Vorlagebereiche: Rasterdefinitionskürzel](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
