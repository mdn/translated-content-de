---
title: ::column
slug: Web/CSS/::column
l10n:
  sourceCommit: 601a0178d9b45121b72638d18e4e509644bd9258
---

{{SeeCompatTable}}

Das **`::column`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die einzelnen Spalten, die erzeugt werden, wenn ein Container so eingestellt ist, dass sein Inhalt in mehreren Spalten über das [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) angezeigt wird. Das `::column` Pseudo-Element ermöglicht es, Stile anzuwenden, die das Layout dieser erzeugten Fragmente nicht beeinflussen.

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Beschreibung

Wenn das CSS-Mehrspaltenlayout verwendet wird, um den Inhalt eines Containers in mehreren Spalten anzuzeigen (zum Beispiel mit der {{cssxref("column-count")}}-Eigenschaft), werden `::column` Pseudo-Elemente erzeugt, um jede einzelne Spalte zu enthalten.

Das `::column` Pseudo-Element akzeptiert nur Scroll-Snap-Eigenschaften, die auf Elemente innerhalb eines Scroll-Containers angewendet werden, einschließlich {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}} und {{cssxref("scroll-snap-stop")}}.

Das `::column` Pseudo-Element kann ein {{cssxref("::scroll-marker")}} Pseudo-Element haben. Andere Pseudo-Elemente wie {{cssxref("::before")}} und {{cssxref("::after")}} werden auf `::column` nicht erzeugt. Das Anwenden von `::column::scroll-marker` erzeugt einen Marker für jede Spalte des ursprünglichen {{Glossary("Scroll_container", "Scroll-Containers")}}, wobei die `::scroll-marker` Pseudo-Elemente vom ursprünglich Element des `::column` Pseudo-Elements erben, anstatt vom `::column` selbst.

Dies ist nützlich für [CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) — `::column` kann verwendet werden, um `::scroll-marker` Pseudo-Elemente für jede Spalte zu erzeugen und sie als {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} mittels [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) einzustellen.

Obwohl die Stilgebung, die auf `::column` angewendet werden kann, sehr begrenzt ist, könnte sie in Zukunft erweitert werden. Alle in Zukunft unterstützten Eigenschaften und Werte werden auf solche beschränkt sein, die das Layout nicht beeinflussen.

## Beispiele

### Scrollendes Spaltenlayout

Dieses Demo erstellt einen responsiven Container, der jede "Seite" von Inhalten einrastet. Es verwendet die {{cssxref("columns")}}-Eigenschaft und das `::column` Pseudo-Element, um Inhaltsspalten zu erstellen, die die volle Breite ihres übergeordneten {{Glossary("scroll_container", "Scroll-Containers")}} einnehmen, welcher horizontal gescrollt werden kann. Jede Spalte enthält einen oder mehrere Listenelemente, deren Anzahl je nach Ansichtsfensterbreite variiert.

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

Der Liste wird eine feste {{cssxref("height")}} und eine {{cssxref("width")}} von `100vw` gegeben, um sie über die volle Breite des Ansichtsfensters zu spannen. Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird dann gesetzt, sodass der Inhalt horizontal gescrollt wird, und [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird verwendet, um zu jedem Element oder "Seite" einzurasten — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird verwendet, um die Liste zu einem {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu machen. Schließlich wird ein {{cssxref("columns")}}-Wert von `1` gesetzt, um den Listeninhalt als einzelne Spalte anzuzeigen. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, um den Inhalt mit der Mitte der Liste auszurichten.

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

Die Listenelemente werden dann gestaltet:

- Ein {{cssxref("display")}}-Wert von `inline-block` wird gesetzt, um die Listenelemente nebeneinander zu platzieren und die Liste horizontal scrollen zu lassen.
- Eine feste {{cssxref("width")}} und {{cssxref("height")}} wurde auf sie gesetzt.
- Ein `text-align`-Wert von `left` wird auf sie gesetzt, um das `text-align: center`, das auf den übergeordneten Container gesetzt wurde, zu überschreiben, sodass der Elementinhalt linksbündig ist.
- Jedem geradzahligen Listenelement wird eine andere Hintergrundfarbe mittels {{cssxref(":nth-child()")}} gegeben, um den Scrolling-Effekt besser zu sehen.

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

Die {{cssxref("scroll-snap-align")}}-Eigenschaft wird auf die `::column` Pseudo-Elemente gesetzt — die die Inhalts-Spalten repräsentieren, die durch die `columns`-Eigenschaft erzeugt werden — damit beim Scrollen eine Spalte in der Mitte des Scroll-Containers einrastet.

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### Auf Spalten basierendes Karussell mit Scroll-Markern

Aufbauend auf dem vorherigen Beispiel erstellen wir Scroll-Marker, um eine direkte Navigation zu verschiedenen Spalten zu ermöglichen, indem wir ein {{cssxref("scroll-marker-group")}} auf den Container und ein {{cssxref("::scroll-marker")}} auf jedes `::column` Pseudo-Element anwenden. Das HTML bleibt unverändert.

#### CSS

Wir erstellen eine Scroll-Marker-Gruppe mit der {{cssxref("scroll-marker-group")}}-Eigenschaft, indem wir die Gruppe hinter allen Inhalten platzieren:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Wir wenden dann Stile auf das {{cssxref("::scroll-marker-group")}} Pseudo-Element an, um die Scroll-Marker in der Mitte der Zeile mit einem `0.4em` großen Abstand zwischen jedem anzuordnen:

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich verwenden wir das {{cssxref("::scroll-marker")}} Pseudo-Element, um einen runden, transparenten Marker für jedes Listenelement mit einem schwarzen Rand zu erstellen und dann den Marker des aktuell gescrollten Elements anders als die anderen zu gestalten, indem der Marker mit der {{cssxref(":target-current")}} Pseudo-Klasse angesprochen wird:

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

Versuchen Sie, die Scroll-Marker zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, sodass Sie sehen können, wo Sie in der Paginierung sind. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu tabben, und verwenden Sie dann die Pfeiltasten, um durch jede Seite zu blättern.

Weitere Karussellbeispiele finden Sie unter [Creating CSS carousels](/de/docs/Web/CSS/CSS_overflow/CSS_carousels).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("columns")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Creating CSS carousels](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
