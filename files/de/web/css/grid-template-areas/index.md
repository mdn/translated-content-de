---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`grid-template-areas`** [CSS](/de/docs/Web/CSS) Eigenschaft legt benannte {{Glossary("grid_areas", "Gitterbereiche")}} fest, indem sie die Zellen im Raster definiert und ihnen Namen zuweist.

{{EmbedInteractiveExample("pages/css/grid-template-areas.html")}}

Diese Bereiche sind nicht mit einem bestimmten Gitterelement verbunden, können jedoch über die Gitterplatzierungseigenschaften {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}} sowie deren Kurzschreibweisen {{cssxref("grid-row")}}, {{cssxref("grid-column")}} und {{cssxref("grid-area")}} referenziert werden.

## Syntax

```css
/* Keyword value */
grid-template-areas: none;

/* <string> values */
grid-template-areas: "a b";
grid-template-areas:
  "a b ."
  "a c d";

/* Global values */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: revert;
grid-template-areas: revert-layer;
grid-template-areas: unset;
```

### Werte

- `none`
  - : Der Gittercontainer definiert keine benannten Gitterbereiche.
- `{{cssxref("&lt;string&gt;")}}+`

  - : Für jede angegebene Zeichenkette wird eine Zeile erstellt, und für jede Zelle in der Zeichenkette wird eine Spalte erstellt. Mehrere Zell-Tokens mit demselben Namen innerhalb und zwischen Zeilen erzeugen einen einzigen benannten Gitterbereich, der sich über die entsprechenden Gitterzellen erstreckt. Wenn diese Zellen kein Rechteck bilden, ist die Deklaration ungültig.

    Alle verbleibenden unbenannten Bereiche in einem Raster können mithilfe von _Null-Zell-Tokens_ referenziert werden. Ein Null-Zell-Token ist eine Folge von einem oder mehreren `.` (U+002E FULL STOP) Zeichen, z.B. `.`, `...` oder `.....` usw. Ein Null-Zell-Token kann verwendet werden, um leere Räume im Raster zu schaffen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Benannte Gitterbereiche festlegen

#### HTML

```html
<div id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</div>
```

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    ".  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

Im obigen Code wurde ein Null-Token (`.`) verwendet, um einen unbenannten Bereich im Gittercontainer zu erstellen, den wir genutzt haben, um einen leeren Raum in der unteren linken Ecke des Rasters zu schaffen.

#### Ergebnis

{{EmbedLiveSample("Specifying_named_grid_areas", "100%", "285px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template")}}
- [Raster-Vorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- Video: [Grid template areas](https://gridbyexample.com/video/grid-template-areas/)
