---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`grid-template-areas`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert benannte {{glossary("grid areas")}}, indem sie die Zellen im Raster festlegt und ihnen Namen zuweist.

{{EmbedInteractiveExample("pages/css/grid-template-areas.html")}}

Diese Bereiche sind nicht mit einem bestimmten Rasterelement verknüpft, können jedoch in den Raster-Platzierungseigenschaften wie {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}} und deren Kurzformen {{cssxref("grid-row")}}, {{cssxref("grid-column")}} und {{cssxref("grid-area")}} referenziert werden.

## Syntax

```css
/* Schlüsselwortwert */
grid-template-areas: none;

/* <string>-Werte */
grid-template-areas: "a b";
grid-template-areas:
  "a b ."
  "a c d";

/* Globale Werte */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: revert;
grid-template-areas: revert-layer;
grid-template-areas: unset;
```

### Werte

- `none`
  - : Der Raster-Container definiert keine benannten Rasterbereiche.
- `{{cssxref("&lt;string&gt;")}}+`

  - : Für jede aufgelistete Zeichenkette wird eine Zeile erstellt, und für jede Zelle in der Zeichenkette wird eine Spalte erstellt. Mehrere Zell-Tokens mit demselben Namen innerhalb und zwischen Zeilen erstellen einen einzigen benannten Rasterbereich, der über die entsprechenden Rasterzellen reicht. Wenn diese Zellen kein Rechteck bilden, ist die Deklaration ungültig.

    Alle verbleibenden unbenannten Bereiche in einem Raster können mit _Null-Zell-Tokens_ bezeichnet werden. Ein Null-Zell-Token ist eine Folge von einem oder mehreren `.` (U+002E FULL STOP)-Zeichen, z. B. `.`, `...` oder `.....` usw. Ein Null-Zell-Token kann verwendet werden, um leere Räume im Raster zu erstellen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Benannte Rasterbereiche spezifizieren

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

Im obigen Code wurde ein Null-Token (`.`) verwendet, um einen unbenannten Bereich im Raster-Container zu erstellen, den wir genutzt haben, um einen leeren Raum in der unteren linken Ecke des Rasters zu schaffen.

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
- [Rastervorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- Video: [Grid template areas](https://gridbyexample.com/video/grid-template-areas/)
