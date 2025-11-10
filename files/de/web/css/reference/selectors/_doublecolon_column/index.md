---
title: ::column
slug: Web/CSS/Reference/Selectors/::column
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Das **`::column`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert die einzelnen Spalten, die erzeugt werden, wenn ein Container so eingestellt ist, dass er seinen Inhalt in mehreren Spalten mithilfe des [CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout) anzeigt. Das `::column`-Pseudoelement ermöglicht das Anwenden von Stilen, die das Layout dieser erzeugten Fragmente nicht beeinflussen.

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Beschreibung

Wenn das CSS-Mehrspaltenlayout verwendet wird, um den Inhalt eines Containers in mehreren Spalten auszulegen (zum Beispiel mit der {{cssxref("column-count")}}-Eigenschaft), werden `::column`-Pseudoelemente erzeugt, um jede einzelne Spalte zu enthalten.

Das `::column`-Pseudoelement akzeptiert nur Scroll-Snap-Eigenschaften, die auf Elemente innerhalb eines Scroll-Containers angewendet werden, einschließlich {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}} und {{cssxref("scroll-snap-stop")}}.

Das `::column`-Pseudoelement kann ein {{cssxref("::scroll-marker")}}-Pseudoelement haben. Andere Pseudoelemente wie {{cssxref("::before")}} und {{cssxref("::after")}} werden auf `::column` nicht erzeugt. Wenn `::column::scroll-marker` angewendet wird, wird ein Marker für jede Spalte des ursprünglichen {{Glossary("Scroll_container", "Scroll-Containers")}} erstellt, wobei die `::scroll-marker`-Pseudoelemente vom ursprünglichen Element des `::column`-Pseudoelements erben und nicht vom `::column` selbst.

Dies ist nützlich für [CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels) — `::column` kann verwendet werden, um `::scroll-marker`-Pseudoelemente für jede Spalte zu erzeugen und diese als {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} mithilfe von [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) festzulegen.

Während die auf `::column` anwendbaren Stile sehr begrenzt sind, könnten sie in der Zukunft erweitert werden. Alle zukünftigen unterstützten Eigenschaften und Werte werden auf solche beschränkt sein, die das Layout nicht beeinflussen.

## Beispiele

### Scrollendes Spaltenlayout

Dieses Demo erstellt einen responsiven Container, der jede „Seite“ des Inhalts an Ort und Stelle einrastet. Es verwendet die {{cssxref("columns")}}-Eigenschaft und das `::column`-Pseudoelement, um Inhaltsspalten zu erstellen, die die volle Breite ihres übergeordneten {{Glossary("scroll_container", "Scroll-Containers")}} einnehmen und horizontal gescrollt werden können. Jede Spalte enthält ein oder mehrere Listenelemente, deren Anzahl je nach der Breite des Ansichtsfensters variiert.

#### HTML

Das HTML besteht aus einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

Der Liste wird eine feste {{cssxref("height")}} und eine {{cssxref("width")}} von `100vw` gegeben, um sicherzustellen, dass sie die volle Breite des Ansichtsfensters einnimmt. Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird dann eingestellt, sodass der Inhalt horizontal scrollt, und [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) wird verwendet, um zu jedem Element oder „Seite“ zu snappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird verwendet, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Schließlich wird ein {{cssxref("columns")}}-Wert von `1` gesetzt, um die Listeninhalte als eine einzelne Spalte anzuzeigen. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, um den Inhalt zentriert auszurichten.

```css hidden live-sample___column-layout-example live-sample___carousel-example
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
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

- Ein {{cssxref("display")}}-Wert von `inline-block` wird eingestellt, um die Listenelemente nebeneinander zu positionieren und die Liste horizontal scrollbar zu machen.
- Eine feste {{cssxref("width")}} und {{cssxref("height")}} wird darauf eingestellt.
- Ein `text-align`-Wert von `left` wird darauf eingestellt, um das `text-align: center`, das auf den übergeordneten Container eingestellt ist, zu überschreiben, sodass der Inhalt der Elemente linksbündig ausgerichtet wird.
- Jedes gerade nummerierte Listenelement erhält eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, sodass der Scrolling-Effekt leichter zu erkennen ist.

```css live-sample___column-layout-example live-sample___carousel-example
li {
  list-style-type: none;

  display: inline-block;
  height: 100%;
  width: 200px;
  text-align: left;

  background-color: #eeeeee;
  outline: 1px solid #dddddd;
  padding: 0 20px;
  margin: 0 10px;
}

li:nth-child(even) {
  background-color: cyan;
}
```

Die {{cssxref("scroll-snap-align")}}-Eigenschaft wird auf die `::column`-Pseudoelemente gesetzt — die die durch die `columns`-Eigenschaft erzeugten Inhaltsspalten darstellen —, sodass beim Scrollen eine Spalte zentriert in den Scroll-Container eingeschnappt wird.

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### Auf Spalten basierendes Karussell mit Scroll-Markern

Aufbauend auf dem vorherigen Beispiel erstellen wir Scroll-Marker, um die direkte Navigation zu verschiedenen Spalten zu ermöglichen, indem wir eine {{cssxref("scroll-marker-group")}} auf den Container und eine {{cssxref("::scroll-marker")}} auf jedes `::column`-Pseudoelement anwenden. Das HTML bleibt unverändert.

#### CSS

Wir erstellen eine Scroll-Marker-Gruppe mit der {{cssxref("scroll-marker-group")}}-Eigenschaft, indem wir die Gruppe nach dem gesamten Inhalt platzieren:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Dann wenden wir Stile auf das {{cssxref("::scroll-marker-group")}}-Pseudoelement an, um die Scroll-Marker in der Mitte der Reihe mit einem `0.4em` Abstand dazwischen zu layouten:

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich verwenden wir das {{cssxref("::scroll-marker")}}-Pseudoelement, um einen runden, transparenten Marker für jedes Listenelement mit einem schwarzen Rand zu erstellen, und stylen den Marker des aktuell gescrollten Elements anders als die anderen, wobei wir den Marker mit der {{cssxref(":target-current")}}-Pseudoklasse ansprechen:

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

Versuchen Sie, die Scroll-Marker zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, damit Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu tabben, und verwenden Sie dann die Cursortasten, um durch jede Seite zu navigieren.

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels) für weitere Karussellbeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("columns")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout)-Modul
- [CSS-Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
