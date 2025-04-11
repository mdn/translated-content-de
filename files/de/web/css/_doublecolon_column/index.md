---
title: ::column
slug: Web/CSS/::column
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{CSSRef}}

Das **`::column`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass er seinen Inhalt in mehreren Spalten über das [CSS Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout) anzeigt. Das `::column` Pseudo-Element ermöglicht das Anwenden von Stilen, die das Layout dieser generierten Fragmente nicht beeinflussen.

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Beschreibung

Wenn das CSS Multi-Column-Layout verwendet wird, um den Inhalt eines Containers in mehreren Spalten zu layouten (zum Beispiel mit der {{cssxref("column-count")}} Eigenschaft), werden `::column` Pseudo-Elemente generiert, um jede einzelne Spalte zu enthalten.

Das `::column` Pseudo-Element akzeptiert nur 'scroll snap'-Eigenschaften, die auf Elemente innerhalb eines Scroll-Fensters angewendet werden, einschließlich {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}} und {{cssxref("scroll-snap-stop")}}.

Das `::column` Pseudo-Element kann ein {{cssxref("::scroll-marker")}} Pseudo-Element haben. Andere Pseudo-Elemente wie {{cssxref("::before")}} und {{cssxref("::after")}} werden auf `::column` nicht generiert. Die Anwendung von `::column::scroll-marker` erstellt einen Marker für jede Spalte des ursprünglichen {{Glossary("Scroll_container", "Scroll-Containers")}}, wobei die `::scroll-marker` Pseudo-Elemente vom ursprünglichen Element des `::column` Pseudo-Elements und nicht von `::column` selbst erben.

Dies ist nützlich für [CSS Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) — `::column` kann verwendet werden, um `::scroll-marker` Pseudo-Elemente für jede Spalte zu generieren und sie als {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} mit [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) festzulegen.

Während die Stile, die auf `::column` angewendet werden können, sehr begrenzt sind, könnte dies in Zukunft erweitert werden. Alle in Zukunft unterstützten Eigenschaften und Werte werden auf solche beschränkt sein, die das Layout nicht beeinflussen.

## Beispiele

### Scrollendes Spaltenlayout

Dieses Demo erstellt einen responsiven Container, der jede "Seite" des Inhalts passend einrastet. Es nutzt die {{cssxref("columns")}} Eigenschaft und das `::columns` Pseudo-Element, um Inhaltsspalten zu schaffen, die die volle Breite ihres übergeordneten {{Glossary("scroll_container", "Scroll-Containers")}} einnehmen, was horizontal gescrollt werden kann. Jede Spalte enthält ein oder mehrere Listenelemente, deren Anzahl sich je nach Viewport-Breite ändert.

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

Die Liste erhält eine feste {{cssxref("height")}} und eine {{cssxref("width")}} von `100vw`, um sie über die volle Breite des Viewports zu spannen. Ein {{cssxref("overflow-x")}} Wert von `scroll` wird dann gesetzt, damit der Inhalt horizontal scrollen wird, und [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird verwendet, um zu jedem Element oder jeder "Seite" zu schnappen — ein {{cssxref("scroll-snap-type")}} Wert von `x mandatory` wird verwendet, um die Liste in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}} zu verwandeln. Schließlich wird ein {{cssxref("columns")}} Wert von `1` gesetzt, um den Listeninhalten zu erzwingen, als eine einzige Spalte angezeigt zu werden. Ein {{cssxref("text-align")}} Wert von `center` wird ebenfalls angewendet, um den Inhalt mit der Mitte der Liste auszurichten.

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

- Ein {{cssxref("display")}} Wert von `inline-block` wird gesetzt, um die Listenelemente nebeneinander zu setzen und die Liste horizontal scrollen zu lassen.
- Eine feste {{cssxref("width")}} und {{cssxref("height")}} wurde auf ihnen gesetzt.
- Ein `text-align` Wert von `left` wird auf ihnen gesetzt, um das `text-align: center`, das auf den übergeordneten Container gesetzt wurde, zu überschreiben, sodass der Inhalt des Elements linksbündig ist.
- Jedes gerade Listenelement erhält eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}}, damit der Scroll-Effekt leichter zu sehen ist.

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

Die {{cssxref("scroll-snap-align")}} Eigenschaft wird auf die {{cssxref("::column")}} Pseudo-Elemente gesetzt — die die durch die `columns` Eigenschaft generierten Inhaltsspalten darstellen — sodass beim Scrollen eine Spalte zentriert im Scroll-Container einrastet.

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### Spaltenbasiertes Karussell mit Scroll-Markern

Ausgehend vom vorherigen Beispiel werden wir Scroll-Marker erstellen, um die direkte Navigation zu verschiedenen Spalten zu ermöglichen, indem ein {{cssxref("scroll-marker-group")}} auf den Container angewendet wird und ein {{cssxref("::scroll-marker")}} auf jedes `::column` Pseudo-Element. Das HTML bleibt unverändert.

#### CSS

Wir erstellen eine Scroll-Marker-Gruppe mit der {{cssxref("scroll-marker-group")}} Eigenschaft und platzieren die Gruppe nach dem gesamten Inhalt:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Wir wenden dann Stile auf das {{cssxref("::scroll-marker-group")}} Pseudo-Element an, um die Scroll-Marker in der Mitte der Zeile mit einem Abstand von `0.4em` zwischen jedem anzuordnen:

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich verwenden wir das {{cssxref("::scroll-marker")}} Pseudo-Element, um für jedes Listenelement einen runden, transparenten Marker mit einem schwarzen Rand zu erstellen, und stylen den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudo-Klasse ansprechen:

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

Versuchen Sie, die Scroll-Marker zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, sodass Sie sehen können, wo Sie sich in der Paginierung befinden. Versuchen Sie auch, zur Scroll-Marker-Gruppe zu tabben und dann die Pfeiltasten zu verwenden, um durch jede Seite zu blättern.

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
- [CSS Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
