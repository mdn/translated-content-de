---
title: "`::column` CSS pseudo-element"
short-title: ::column
slug: Web/CSS/Reference/Selectors/::column
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{SeeCompatTable}}

Das **`::column`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert die individuellen Spalten, die erzeugt werden, wenn ein Container so eingestellt ist, dass er seinen Inhalt in mehreren Spalten über das [CSS-Multispalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) anzeigt. Das `::column`-Pseudoelement ermöglicht das Anwenden von Styles, die das Layout dieser erzeugten Fragmente nicht beeinflussen.

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Beschreibung

Wenn das CSS-Multispalten-Layout verwendet wird, um den Inhalt eines Containers in mehreren Spalten darzustellen (zum Beispiel mit der {{cssxref("column-count")}}-Eigenschaft), werden `::column`-Pseudoelemente erzeugt, die jede einzelne Spalte enthalten.

Das `::column`-Pseudoelement akzeptiert nur "Scroll Snap" Eigenschaften, die auf Elemente innerhalb eines Scroll-Containers angewendet werden, einschließlich {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}} und {{cssxref("scroll-snap-stop")}}.

Das `::column`-Pseudoelement kann ein {{cssxref("::scroll-marker")}}-Pseudoelement haben. Andere Pseudoelemente wie {{cssxref("::before")}} und {{cssxref("::after")}} werden nicht auf `::column` erzeugt. Das Anwenden von `::column::scroll-marker` erstellt einen Marker für jede Spalte des ursprünglichen {{Glossary("Scroll_container", "Scroll-Containers")}}, wobei die `::scroll-marker`-Pseudoelemente vom Ursprungselement des `::column`-Pseudoelements statt vom `::column` selbst erben.

Dies ist nützlich für [CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels) — `::column` kann verwendet werden, um `::scroll-marker`-Pseudoelemente für jede Spalte zu erzeugen und sie als {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} mit [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) festzulegen.

Während die Stile, die auf `::column` angewendet werden können, sehr begrenzt sind, könnten sie in Zukunft erweitert werden. Alle in Zukunft unterstützten Eigenschaften und Werte werden auf solche beschränkt sein, die das Layout nicht beeinflussen.

## Beispiele

### Scrollendes Spaltenlayout

Dieses Demo erstellt einen responsiven Container, der jede "Seite" des Inhalts einrastet. Es verwendet die {{cssxref("columns")}}-Eigenschaft und das `::column`-Pseudoelement, um Inhalts-Spalten zu erstellen, die die gesamte Breite ihres Eltern-{{Glossary("scroll_container", "Scroll-Containers")}} einnehmen, der horizontal gescrollt werden kann. Jede Spalte enthält ein oder mehrere Listenelemente, deren Anzahl je nach Viewport-Breite variiert.

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

Der Liste wird eine feste {{cssxref("height")}} und eine {{cssxref("width")}} von `100vw` zugewiesen, um sie über die gesamte Breite des Viewports zu spannen. Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird dann eingestellt, damit der Inhalt horizontal gescrollt werden kann und [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) verwendet wird, um zu jedem Element oder "Seite" zu snappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird verwendet, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Schließlich wird ein {{cssxref("columns")}}-Wert von `1` eingestellt, um den Listeninhalt als einzelne Spalte darzustellen. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, um den Inhalt mittig auf der Liste auszurichten.

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

- Ein {{cssxref("display")}}-Wert von `inline-block` wird eingestellt, damit die Listenelemente nebeneinander sitzen und die Liste horizontal gescrollt werden kann.
- Eine feste {{cssxref("width")}} und {{cssxref("height")}} wurde für sie festgelegt.
- Ein `text-align`-Wert von `left` ist auf sie gesetzt, um den `text-align: center`, der auf dem übergeordneten Container gesetzt ist, zu überschreiben, sodass der Elementinhalt linksbündig ausgerichtet wird.
- Jedes gerade Listenelement erhält eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, sodass der Scrolling-Effekt leichter zu sehen ist.

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

Die {{cssxref("scroll-snap-align")}}-Eigenschaft ist auf die `::column`-Pseudoelemente gesetzt — die die durch die `columns`-Eigenschaft erzeugten Inhaltsspalten repräsentieren — sodass beim Scrollen eine Spalte im Zentrum des Scroll-Containers eingerastet wird.

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### Spaltenbasiertes Karussell mit Scrollmarkern

Aufbauend auf dem vorherigen Beispiel erstellen wir Scrollmarker, um die direkte Navigation zu verschiedenen Spalten zu ermöglichen, indem wir eine {{cssxref("scroll-marker-group")}} auf den Container anwenden und ein {{cssxref("::scroll-marker")}} auf jedes `::column`-Pseudoelement setzen. Das HTML bleibt unverändert.

#### CSS

Wir erstellen eine Scrollmarker-Gruppe mit der {{cssxref("scroll-marker-group")}}-Eigenschaft und platzieren die Gruppe nach dem gesamten Inhalt:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Wir wenden dann Stile auf das {{cssxref("::scroll-marker-group")}}-Pseudoelement an, um die Scrollmarker in der Mitte der Reihe mit einem `0.4em`-Abstand zwischen jedem zu layouten:

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich verwenden wir das {{cssxref("::scroll-marker")}}-Pseudoelement, um einen runden, transparenten Marker für jedes Listenelement mit einem schwarzen Rand zu erstellen, und stylen dann den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}}-Pseudoklasse anvisieren:

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

Versuchen Sie, die Scrollmarker zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, damit Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scrollmarker-Gruppe zu tabben, und verwenden Sie dann die Pfeiltasten, um durch jede Seite zu blättern.

Sehen Sie [Creating CSS carousels](/de/docs/Web/CSS/Guides/Overflow/Carousels) für weitere Beispiele von Karussells.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("columns")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Creating CSS carousels](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS Multispalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
