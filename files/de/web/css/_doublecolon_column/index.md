---
title: ::column
slug: Web/CSS/::column
l10n:
  sourceCommit: 8cea7d86ef44c0905506b87d051ea002ee518878
---

{{CSSRef}}

Das **`::column`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die einzelnen Spalten, die erzeugt werden, wenn ein Container so eingestellt ist, dass sein Inhalt über mehrere Spalten hinweg angezeigt wird, durch das [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout). Das `::column`-Pseudoelement ermöglicht die Anwendung von Stilen, die das Layout nicht beeinflussen, auf diese erzeugten Fragmente.

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Beschreibung

Wenn das CSS-Mehrspalten-Layout verwendet wird, um den Inhalt eines Containers über mehrere Spalten anzuordnen (zum Beispiel durch die Verwendung der {{cssxref("column-count")}}-Eigenschaft), werden `::column`-Pseudoelemente erzeugt, um jede einzelne Spalte zu enthalten.

Das `::column`-Pseudoelement akzeptiert nur Scroll-Snap-Eigenschaften, die auf Elemente innerhalb eines Scroll-Containers angewendet werden, einschließlich {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}} und {{cssxref("scroll-snap-stop")}}.

Das `::column`-Pseudoelement kann ein {{cssxref("::scroll-marker")}}-Pseudoelement haben. Andere Pseudoelemente wie {{cssxref("::before")}} und {{cssxref("::after")}} werden bei `::column` nicht erzeugt. Die Anwendung von `::column::scroll-marker` erzeugt einen Marker für jede Spalte des ursprünglichen {{Glossary("Scroll_container", "Scroll-Containers")}}, wobei die `::scroll-marker`-Pseudoelemente vom ursprünglichen Element des `::column`-Pseudoelements erben, nicht vom `::column` selbst.

Dies ist nützlich für [CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) — `::column` kann verwendet werden, um `::scroll-marker`-Pseudoelemente für jede Spalte zu erzeugen, und diese als {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} mit [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) festzulegen.

Obwohl die Stile, die auf `::column` angewendet werden können, sehr eingeschränkt sind, könnten sie in der Zukunft erweitert werden. Jegliche unterstützten Eigenschaften und Werte werden auf solche beschränkt sein, die das Layout nicht beeinflussen.

## Beispiele

### Scrollendes Spalten-Layout

Dieses Demo erstellt einen responsiven Container, der jede "Seite" des Inhalts an seinen Platz schnappt. Es verwendet die {{cssxref("columns")}}-Eigenschaft und das `::columns`-Pseudoelement, um Inhalts-Spalten zu erstellen, die die volle Breite ihres übergeordneten {{Glossary("scroll_container", "Scroll-Containers")}} über die horizontale Scrollleiste erstrecken lassen. Jede Spalte enthält ein oder mehrere Listenelemente, die abhängig von der Breite des Viewports variieren.

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

Der Liste wird eine feste {{cssxref("height")}} und eine {{cssxref("width")}} von `100vw` zugewiesen, um sie über die gesamte Breite des Viewports erstrecken zu lassen. Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird dann gesetzt, damit der Inhalt horizontal scrollen kann, und [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird verwendet, um zu jedem Element oder "Seite" zu snappen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird verwendet, um die Liste zu einem {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu machen. Schließlich wird ein {{cssxref("columns")}}-Wert von `1` gesetzt, um den Inhalt der Liste als eine einzige Spalte anzuzeigen. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, um den Inhalt mit der Mitte der Liste auszurichten.

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

- Ein {{cssxref("display")}}-Wert von `inline-block` wird gesetzt, um die Listenelemente nebeneinander anzuordnen und die Liste horizontal scrollen zu lassen.
- Eine feste {{cssxref("width")}} und {{cssxref("height")}} wurde ihnen zugewiesen.
- Ein `text-align`-Wert von `left` wird auf sie gesetzt, um die `text-align: center`, die im übergeordneten Container gesetzt wurde, zu überschreiben, sodass der Inhalt des Elements linksbündig ausgerichtet wird.
- Jedes gerade Listenelement hat eine unterschiedliche Hintergrundfarbe über {{cssxref(":nth-child()")}}, sodass der Scrolling-Effekt leichter zu erkennen ist.

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

Die {{cssxref("scroll-snap-align")}}-Eigenschaft wird auf die `::column`-Pseudoelemente gesetzt — die die durch die `columns`-Eigenschaft erzeugten Inhaltsspalten repräsentieren —, sodass bei gescrollten eine Spalte zentriert im Scroll-Container eingeschnappt ist.

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### Karussell basierend auf Spalten mit Scrollmarkern

Aufbauend auf dem vorherigen Beispiel erstellen wir Scrollmarker, um die direkte Navigation zu verschiedenen Spalten zu ermöglichen, indem wir eine {{cssxref("scroll-marker-group")}} auf den Container und ein {{cssxref("::scroll-marker")}} auf jedes `::column`-Pseudoelement anwenden. Das HTML bleibt unverändert.

#### CSS

Wir erstellen eine Scrollmarker-Gruppe mit der {{cssxref("scroll-marker-group")}}-Eigenschaft und platzieren die Gruppe nach dem gesamten Inhalt:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Dann wenden wir Stile auf das {{cssxref("::scroll-marker-group")}}-Pseudoelement an, um die Scrollmarker in der Mitte der Zeile mit einem Abstand von `0.4em` dazwischen anzuordnen:

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich verwenden wir das {{cssxref("::scroll-marker")}}-Pseudoelement, um einen runden, transparenten Marker für jedes Listenelement mit einem schwarzen Rand zu erstellen und den Marker des derzeit gescrollten Elements anders als die anderen zu stylen, indem wir den Marker mit der {{cssxref(":target-current")}}-Pseudoklasse anvisieren:

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

Versuchen Sie, die Scrollmarker zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben ist, damit Sie sehen können, wo Sie in der Paginierung sind. Versuchen Sie auch, zur Scrollmarker-Gruppe zu tabben, und verwenden Sie dann die Cursortasten, um durch jede Seite zu blättern.

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussellbeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("columns")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- Modul [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)
- Modul [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow)
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
