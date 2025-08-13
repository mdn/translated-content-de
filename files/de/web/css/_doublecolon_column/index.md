---
title: ::column
slug: Web/CSS/::column
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Der **`::column`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass er seinen Inhalt in mehreren Spalten über das [CSS-Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) anzeigt. Das `::column` Pseudoelement ermöglicht es, Stile anzuwenden, die das Layout dieser generierten Fragmente nicht beeinflussen.

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Beschreibung

Wenn das CSS-Multispalten-Layout verwendet wird, um den Inhalt eines Containers in mehreren Spalten anzuordnen (zum Beispiel unter Verwendung der {{cssxref("column-count")}} Eigenschaft), werden `::column` Pseudoelemente generiert, um jede einzelne Spalte zu enthalten.

Das `::column` Pseudoelement akzeptiert nur Eigenschaften zum Scrollen von Elementen innerhalb eines Scroll-Containers, einschließlich {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}} und {{cssxref("scroll-snap-stop")}}.

Das `::column` Pseudoelement kann ein {{cssxref("::scroll-marker")}} Pseudoelement haben. Andere Pseudoelemente wie {{cssxref("::before")}} und {{cssxref("::after")}} werden auf `::column` nicht generiert. Wenn `::column::scroll-marker` angewendet wird, wird für jede Spalte des ursprünglichen {{Glossary("Scroll_container", "Scroll-Containers")}} ein Marker erstellt, wobei die `::scroll-marker` Pseudoelemente vom ursprünglichen Element des `::column` Pseudoelements erben und nicht vom `::column` selbst.

Dies ist nützlich für [CSS Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) — `::column` kann verwendet werden, um `::scroll-marker` Pseudoelemente für jede Spalte zu generieren und diese als {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} mit [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) festzulegen.

Obwohl die Gestaltungsmöglichkeiten von `::column` derzeit sehr begrenzt sind, könnten sie in Zukunft erweitert werden. Jegliche zukünftigen unterstützten Eigenschaften und Werte werden auf diejenigen beschränkt sein, die das Layout nicht beeinflussen.

## Beispiele

### Scrollendes Spaltenlayout

Dieses Beispiel erstellt einen responsiven Container, der jede "Seite" des Inhalts einrastet. Es verwendet die {{cssxref("columns")}} Eigenschaft und das `::columns` Pseudoelement, um Inhaltsäulen zu erstellen, die die gesamte Breite ihres übergeordneten {{Glossary("scroll_container", "Scroll-Containers")}} überspannen und horizontal scrollbar sind. Jede Spalte enthält ein oder mehrere Listenelemente, die sich je nach Ansichtsfensterbreite in der Anzahl unterscheiden.

#### HTML

Der HTML-Code besteht aus einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) etwas Beispielinhalt enthält:

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

Der Liste wird eine feste {{cssxref("height")}} und eine {{cssxref("width")}} von `100vw` zugewiesen, um sie über die gesamte Breite des Ansichtsfensters zu spannen. Ein {{cssxref("overflow-x")}} Wert von `scroll` wird dann gesetzt, damit der Inhalt horizontal scrollt, und [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird verwendet, um zu jedem Element oder "Seite" zu schnappen — ein {{cssxref("scroll-snap-type")}} Wert von `x mandatory` wird verwendet, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}} zu verwandeln. Schließlich wird ein {{cssxref("columns")}} Wert von `1` festgelegt, um die Listeninhalte als einzelne Spalte anzuzeigen. Ein {{cssxref("text-align")}} Wert von `center` wird ebenfalls angewendet, um den Inhalt in der Mitte der Liste zu zentrieren.

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

Die Listenelemente werden dann wie folgt gestaltet:

- Ein {{cssxref("display")}} Wert von `inline-block` wird gesetzt, um die Listenelemente nebeneinander anzuordnen und die Liste horizontal scrollen zu lassen.
- Eine feste {{cssxref("width")}} und {{cssxref("height")}} wird auf sie angewendet.
- Ein `text-align` Wert von `left` wird auf sie angewendet, um die `text-align: center` Einstellung des übergeordneten Containers zu überschreiben, sodass der Elementinhalt linksbündig ist.
- Jedes gerade Listenelement erhält über {{cssxref(":nth-child()")}} eine andere Hintergrundfarbe, damit der Scrolleffekt leichter zu erkennen ist.

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

Die {{cssxref("scroll-snap-align")}} Eigenschaft wird auf die `::column` Pseudoelemente gesetzt — die die durch die `columns` Eigenschaft generierten Inhaltsäulen repräsentieren — sodass beim Scrollen eine Spalte zentriert im Scroll Container einrastet.

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### Spaltenbasiertes Karussell mit Scroll-Markern

Aufbauend auf dem vorherigen Beispiel erstellen wir Scroll-Marker, um die direkte Navigation zu verschiedenen Spalten zu ermöglichen, indem wir einen {{cssxref("scroll-marker-group")}} auf den Container anwenden und ein {{cssxref("::scroll-marker")}} auf jedes `::column` Pseudoelement anwenden. Das HTML bleibt unverändert.

#### CSS

Wir erstellen eine Scroll-Marker-Gruppe mit der {{cssxref("scroll-marker-group")}} Eigenschaft und platzieren die Gruppe nach allen Inhalten:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Wir wenden dann Stile auf das {{cssxref("::scroll-marker-group")}} Pseudoelement an, um die Scroll-Marker in der Mitte der Reihe mit einem Abstand von `0.4em` zwischen jedem anzuordnen:

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich verwenden wir das {{cssxref("::scroll-marker")}} Pseudoelement, um für jedes Listenelement einen runden, transparenten Marker mit einem schwarzen Rand zu erstellen und stilisieren den Marker des aktuell gescrollten Elements anders als die anderen, indem der Marker mit der {{cssxref(":target-current")}} Pseudo-Klasse angesprochen wird:

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

Versuchen Sie, die Scroll-Marker zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, sodass Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu springen und dann die Cursortasten zu verwenden, um durch jede Seite zu navigieren.

Siehe [Erstellung von CSS Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("columns")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Erstellung von CSS Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
