---
title: ::column
slug: Web/CSS/::column
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Der **`::column`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass sein Inhalt über mehrere Spalten mittels [CSS Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) angezeigt wird. Das `::column` Pseudo-Element ermöglicht das Anwenden von Stilen, die das Layout dieser generierten Fragmente nicht beeinflussen.

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Beschreibung

Wenn ein CSS Mehrspaltenlayout verwendet wird, um den Inhalt eines Containers in mehreren Spalten anzuzeigen (beispielsweise durch die Verwendung der {{cssxref("column-count")}} Eigenschaft), werden `::column` Pseudo-Elemente generiert, um jede einzelne Spalte zu enthalten.

Das `::column` Pseudo-Element akzeptiert nur Scroll-Snap-Eigenschaften, die auf Elemente innerhalb eines Scroll-Containers angewendet werden, einschließlich {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}} und {{cssxref("scroll-snap-stop")}}.

Das `::column` Pseudo-Element kann ein {{cssxref("::scroll-marker")}} Pseudo-Element haben. Andere Pseudo-Elemente wie {{cssxref("::before")}} und {{cssxref("::after")}} werden nicht auf `::column` generiert. Die Anwendung von `::column::scroll-marker` erstellt einen Marker für jede Spalte des ursprünglichen {{Glossary("Scroll_container", "Scroll-Containers")}}, wobei die `::scroll-marker` Pseudo-Elemente von dem ursprünglichen Element des `::column` Pseudo-Elements erben und nicht vom `::column` selbst.

Dies ist nützlich für [CSS Karusselle](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) — `::column` kann verwendet werden, um `::scroll-marker` Pseudo-Elemente für jede Spalte zu generieren und diese als {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} mit [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) festzulegen.

Obwohl die Stile, die auf `::column` angewendet werden können, sehr begrenzt sind, könnten sie in der Zukunft erweitert werden. Alle in der Zukunft unterstützten Eigenschaften und Werte werden auf solche beschränkt sein, die das Layout nicht beeinflussen.

## Beispiele

### Scrollendes Spaltenlayout

Dieses Beispiel erstellt einen responsiven Container, der jede "Seite" des Inhalts einrastet. Es verwendet die {{cssxref("columns")}} Eigenschaft und das `::columns` Pseudo-Element, um Inhaltsspalten zu erstellen, die sich über die gesamte Breite ihres übergeordneten {{Glossary("scroll_container", "Scroll-Containers")}} erstrecken und horizontal gescrollt werden können. Jede Spalte enthält ein oder mehrere Listenelemente, deren Anzahl je nach Ansichtsfensterbreite variiert.

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

Der Liste wird eine feste {{cssxref("height")}} und eine {{cssxref("width")}} von `100vw` zugewiesen, um sie über die volle Breite des Ansichtsfensters zu erstrecken. Ein {{cssxref("overflow-x")}} Wert von `scroll` wird dann festgelegt, sodass der Inhalt horizontal scrollen kann, und [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird verwendet, um zu jedem Artikel oder "Seite" einzurasten — ein {{cssxref("scroll-snap-type")}} Wert von `x mandatory` wird verwendet, um die Liste zu einem {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu machen. Schließlich wird ein {{cssxref("columns")}} Wert von `1` festgelegt, um die Listeninhalte als eine einzige Spalte anzuzeigen. Ein {{cssxref("text-align")}} Wert von `center` wird ebenfalls angewendet, um den Inhalt in der Mitte der Liste auszurichten.

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

- Ein {{cssxref("display")}} Wert von `inline-block` wird festgelegt, damit die Listenelemente nebeneinander sitzen und die Liste horizontal scrollt.
- Eine feste {{cssxref("width")}} und {{cssxref("height")}} wurde auf sie gesetzt.
- Ein `text-align` Wert von `left` wird auf sie angewendet, um das `text-align: center` des übergeordneten Containers zu überschreiben, sodass der Inhalt der Elemente linksbündig ist.
- Jede gerade Listenelement erhält über {{cssxref(":nth-child()")}} eine andere Hintergrundfarbe, damit der Scrolling-Effekt leichter zu erkennen ist.

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

Die {{cssxref("scroll-snap-align")}} Eigenschaft wird auf die `::column` Pseudo-Elemente gesetzt, die die durch die `columns` Eigenschaft generierten Inhaltsspalten repräsentieren, sodass beim Scrollen eine Spalte in der Mitte des Scroll-Containers eingerastet wird.

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### Karussell auf Basis von Spalten mit Scroll-Markern

Aufbauend auf dem vorherigen Beispiel, erstellen wir Scroll-Marker, um die direkte Navigation zu unterschiedlichen Spalten zu ermöglichen, indem wir eine {{cssxref("scroll-marker-group")}} auf den Container anwenden und eine {{cssxref("::scroll-marker")}} auf jedes `::column` Pseudo-Element. Das HTML bleibt unverändert.

#### CSS

Wir erstellen eine Scroll marker group mit der {{cssxref("scroll-marker-group")}} Eigenschaft, indem wir die Gruppe nach all dem Inhalt positionieren:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Dann wenden wir Stile auf das {{cssxref("::scroll-marker-group")}} Pseudo-Element an, um die Scroll-Marker in der Mitte der Reihe mit einem Abstand von `0.4em` zwischen jedem zu layouten:

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Zum Schluss verwenden wir das {{cssxref("::scroll-marker")}} Pseudo-Element, um runde, transparente Marker für jedes Listenelement mit einem schwarzen Rand zu erstellen, dann gestalten wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudo-Klasse ansprechen:

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

Versuchen Sie, die Scroll-Marker zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben ist, damit Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll marker group zu tabben, und verwenden Sie dann die Pfeiltasten, um durch jede Seite zu navigieren.

Siehe [Erstellen von CSS Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("columns")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Erstellen von CSS Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- Modul [CSS Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout)
- Modul [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow)
- [CSS Karussellgalerie](https://chrome.dev/carousel/) über chrome.dev (2025)
