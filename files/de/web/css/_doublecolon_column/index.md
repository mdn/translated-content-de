---
title: ::column
slug: Web/CSS/::column
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::column`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass er seinen Inhalt über mehrere Spalten durch das [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) anzeigt. Das `::column` Pseudoelement ermöglicht es, Stile anzuwenden, die das Layout dieser generierten Fragmente nicht beeinflussen.

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Beschreibung

Wenn ein CSS Mehrspalten-Layout verwendet wird, um den Inhalt eines Containers in mehreren Spalten anzuordnen (zum Beispiel durch die Verwendung der {{cssxref("column-count")}} Eigenschaft), werden `::column` Pseudoelemente generiert, um jede einzelne Spalte zu enthalten.

Das `::column` Pseudoelement akzeptiert nur Scroll-Snap-Eigenschaften, die auf Elemente innerhalb eines Scroll-Containers angewendet werden, einschließlich {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}} und {{cssxref("scroll-snap-stop")}}.

Das `::column` Pseudoelement kann ein {{cssxref("::scroll-marker")}} Pseudoelement haben. Andere Pseudoelemente wie {{cssxref("::before")}} und {{cssxref("::after")}} werden auf `::column` nicht generiert. Durch die Anwendung von `::column::scroll-marker` wird für jede Spalte des ursprungsbezogenen {{Glossary("Scroll_container", "Scroll-Containers")}} ein Marker erstellt, wobei die `::scroll-marker` Pseudoelemente vom ursprungsbezogenen Element des `::column` Pseudoelements erben und nicht von `::column` selbst.

Dies ist nützlich für [CSS Karusselle](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) — `::column` kann verwendet werden, um `::scroll-marker` Pseudoelemente für jede Spalte zu generieren und sie als {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} mittels [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) zu setzen.

Obwohl das Styling, das auf `::column` angewendet werden kann, sehr begrenzt ist, könnte es in der Zukunft erweitert werden. Alle künftig unterstützten Eigenschaften und Werte werden jedoch auf solche beschränkt sein, die das Layout nicht beeinflussen.

## Beispiele

### Scrollendes Spaltenlayout

Dieses Beispiel erstellt einen responsiven Container, der jede "Seite" des Inhalts einrastet. Es verwendet die {{cssxref("columns")}} Eigenschaft und das `::columns` Pseudoelement, um Inhaltsspalten zu erstellen, die die gesamte Breite ihres übergeordneten {{Glossary("scroll_container", "Scroll-Containers")}} einnehmen, der horizontal scrollen kann. Jede Spalte enthält ein oder mehrere Listenelemente, deren Anzahl je nach Viewport-Breite variiert.

#### HTML

Der HTML-Code besteht aus einer [unsortierten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispieldaten enthält:

```html-nolint
<ul>
...
  <li>
    <h2>Item 1</h2>
  </li>
...
</ul>
```

```html hidden live-sample___column-layout-example live-sample___carousel-example
<ul>
  <li>
    <h2>Item 1</h2>
  </li>
  <li>
    <h2>Item 2</h2>
  </li>
  <li>
    <h2>Item 3</h2>
  </li>
  <li>
    <h2>Item 4</h2>
  </li>
  <li>
    <h2>Item 5</h2>
  </li>
  <li>
    <h2>Item 6</h2>
  </li>
  <li>
    <h2>Item 7</h2>
  </li>
  <li>
    <h2>Item 8</h2>
  </li>
  <li>
    <h2>Item 9</h2>
  </li>
  <li>
    <h2>Item 10</h2>
  </li>
  <li>
    <h2>Item 11</h2>
  </li>
  <li>
    <h2>Item 12</h2>
  </li>
  <li>
    <h2>Item 13</h2>
  </li>
  <li>
    <h2>Item 14</h2>
  </li>
  <li>
    <h2>Item 15</h2>
  </li>
</ul>
```

#### CSS

Der Liste wird eine feste {{cssxref("height")}} und eine {{cssxref("width")}} von `100vw` zugewiesen, sodass sie die gesamte Breite des Viewports einnimmt. Ein {{cssxref("overflow-x")}} Wert von `scroll` wird dann gesetzt, damit der Inhalt horizontal scrollt, und [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird verwendet, um zu jedem Element oder "Seite" zu snappen — ein {{cssxref("scroll-snap-type")}} Wert von `x mandatory` wird verwendet, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} umzuwandeln. Schließlich wird ein {{cssxref("columns")}} Wert von `1` gesetzt, um den Listeninhalten anzuzeigen, dass sie als einzelne Spalte dargestellt werden sollen. Ein {{cssxref("text-align")}} Wert von `center` wird ebenfalls angewendet, um den Inhalt in der Mitte der Liste auszurichten.

```css hidden live-sample___column-layout-example live-sample___carousel-example
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___column-layout-example live-sample___carousel-example
ul {
  width: 100vw;
  height: 300px;
  padding: 10px;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  columns: 1;
  text-align: center;
}
```

Die Listenelemente werden dann gestylt:

- Ein {{cssxref("display")}} Wert von `inline-block` wird gesetzt, um die Listenelemente nebeneinander zu stellen und die Liste horizontal zu scrollen.
- Eine feste {{cssxref("width")}} und {{cssxref("height")}} wird auf sie gesetzt.
- Ein `text-align` Wert von `left` wird auf sie angewendet, um das `text-align: center` des übergeordneten Containers zu überschreiben, sodass der Inhalt des Elements linksbündig ausgerichtet wird.
- Jedes gerade Listenelement erhält eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, sodass der Scroll-Effekt leichter zu sehen ist.

```css live-sample___column-layout-example live-sample___carousel-example
li {
  list-style-type: none;

  display: inline-block;
  height: 100%;
  width: 200px;
  text-align: left;

  background-color: #eee;
  outline: 1px solid #ddd;
  padding: 0 20px;
  margin: 0 10px;
}

li:nth-child(even) {
  background-color: cyan;
}
```

Die {{cssxref("scroll-snap-align")}} Eigenschaft wird auf die `::column` Pseudoelemente gesetzt — die die durch die `columns` Eigenschaft generierten Inhaltsspalten repräsentieren — damit, wenn gescrollt wird, eine Spalte innerhalb des Scroll-Containers zentriert eingerastet wird.

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### Karussell basierend auf Spalten mit Scrollmarkern

Erweiterung des vorhergehenden Beispiels: Wir werden Scrollmarker erstellen, um eine direkte Navigation zu verschiedenen Spalten zu ermöglichen, indem wir eine {{cssxref("scroll-marker-group")}} auf den Container anwenden und eine {{cssxref("::scroll-marker")}} auf jedes `::column` Pseudoelement. Der HTML-Code bleibt unverändert.

#### CSS

Wir erstellen eine Scroll-Marker-Gruppe mit der {{cssxref("scroll-marker-group")}} Eigenschaft und platzieren die Gruppe nach dem gesamten Inhalt:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Wir wenden dann Stile auf das {{cssxref("::scroll-marker-group")}} Pseudoelement an, um die Scrollmarker in der Mitte der Zeile mit einem `0.4em` Abstand zwischen jedem anzuordnen:

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich verwenden wir das {{cssxref("::scroll-marker")}} Pseudoelement, um einen runden, transparenten Marker für jedes Listenelement mit einem schwarzen Rand zu erstellen, dann stylen wir den Marker des aktuell gescrollten Elements anders als die anderen und zielen den Marker mit der {{cssxref(":target-current")}} Pseudoklasse an:

```css live-sample___carousel-example
ul::column::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
}

ul::column::scroll-marker:target-current {
  background-color: black;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example", "100%", "400px")}}

Versuchen Sie, die Scrollmarker zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben ist, damit Sie sehen können, wo Sie sich in der Pagination befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu tabben und dann die Cursor-Tasten zu verwenden, um durch jede Seite zu blättern.

Sehen Sie [Erstellung von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("columns")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Erstellung von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Karussellgalerie](https://chrome.dev/carousel/) über chrome.dev (2025)
