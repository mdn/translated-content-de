---
title: ::column
slug: Web/CSS/Reference/Selectors/::column
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Das **`::column`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert die einzelnen Spalten, die generiert werden, wenn ein Container so eingestellt ist, dass sein Inhalt über mehrere Spalten hinweg angezeigt wird, mithilfe des [CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout). Das `::column` Pseudo-Element ermöglicht das Anwenden von Stilen, die das Layout nicht beeinflussen, auf diese erzeugten Fragmente.

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Beschreibung

Wenn das CSS-Mehrspaltenlayout verwendet wird, um den Inhalt eines Containers in mehreren Spalten anzuzeigen (zum Beispiel mit der {{cssxref("column-count")}}-Eigenschaft), werden `::column`-Pseudo-Elemente generiert, um jede einzelne Spalte zu enthalten.

Das `::column`-Pseudo-Element akzeptiert nur "scroll snap"-Eigenschaften, die auf Elemente in einem Scroll-Container angewendet werden, einschließlich {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}} und {{cssxref("scroll-snap-stop")}}.

Das `::column`-Pseudo-Element kann ein {{cssxref("::scroll-marker")}}-Pseudo-Element haben. Andere Pseudo-Elemente wie {{cssxref("::before")}} und {{cssxref("::after")}} werden auf `::column` nicht generiert. Das Anwenden von `::column::scroll-marker` erstellt einen Marker für jede Spalte des ursprünglichen {{Glossary("Scroll_container", "Scroll-Containers")}}, wobei die `::scroll-marker`-Pseudo-Elemente vom Ursprungselement des `::column`-Pseudo-Elements erben und nicht vom `::column` selbst.

Dies ist nützlich für [CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) — `::column` kann verwendet werden, um `::scroll-marker`-Pseudo-Elemente für jede Spalte zu generieren und sie als {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} mit [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) zu setzen.

Während die Stilisierung, die auf `::column` angewendet werden kann, sehr begrenzt ist, könnte sie in Zukunft erweitert werden. Alle zukünftig unterstützten Eigenschaften und Werte werden auf solche beschränkt sein, die das Layout nicht beeinflussen.

## Beispiele

### Scrollendes Spalten-Layout

Dieses Demo erstellt einen responsiven Container, der jede "Seite" des Inhalts an Ort und Stelle einrastet. Es verwendet die {{cssxref("columns")}}-Eigenschaft und das `::column` Pseudo-Element, um Inhaltsspalten zu erstellen, die die gesamte Breite ihres übergeordneten {{Glossary("scroll_container", "Scroll-Containers")}} überspannen, die horizontal gescrollt werden können. Jede Spalte enthält ein oder mehrere Listenelemente, die je nach Ansichtshöhe in ihrer Anzahl variieren können.

#### HTML

Das HTML besteht aus einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) etwas Beispielinhalt enthält:

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

Der Liste wird eine feste {{cssxref("height")}} und eine {{cssxref("width")}} von `100vw` gegeben, um sie über die gesamte Breite des Ansichtsfensters zu spannen. Ein {{cssxref("overflow-x")}}-Wert von `scroll` wird dann eingestellt, damit der Inhalt horizontal gescrollt wird, und [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) wird verwendet, um zu jedem Element oder "Seite" zu springen — ein {{cssxref("scroll-snap-type")}}-Wert von `x mandatory` wird verwendet, um die Liste zu einem {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu machen. Schließlich wird ein {{cssxref("columns")}}-Wert von `1` gesetzt, um die Listeninhalte als eine einzige Spalte darzustellen. Ein {{cssxref("text-align")}}-Wert von `center` wird ebenfalls angewendet, um den Inhalt in der Mitte der Liste auszurichten.

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

- Ein {{cssxref("display")}}-Wert von `inline-block` wird gesetzt, um die Listenelemente nebeneinander zu platzieren und die Liste horizontal scrollbar zu machen.
- Eine feste {{cssxref("width")}} und {{cssxref("height")}} wurde darauf gesetzt.
- Ein `text-align`-Wert von `left` wird darauf gesetzt, um das `text-align: center` auf dem übergeordneten Container zu überschreiben, sodass der Elementinhalt linksbündig ausgerichtet wird.
- Jedem zweitplatzierten Listenelement wird eine andere Hintergrundfarbe über {{cssxref(":nth-child()")}} gegeben, damit der Scrolling-Effekt leichter zu sehen ist.

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

Die {{cssxref("scroll-snap-align")}}-Eigenschaft wird auf die `::column` Pseudo-Elemente gesetzt — die die durch die `columns`-Eigenschaft erzeugten Inhaltsspalten darstellen — damit beim Scrollen eine Spalte in der Mitte des Scroll-Containers einrastet.

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### Spaltenbasiertes Karussell mit Scroll-Markierungen

Ausgehend vom vorherigen Beispiel erstellen wir Scroll-Markierungen, um die direkte Navigation zu verschiedenen Spalten zu ermöglichen, indem wir eine {{cssxref("scroll-marker-group")}} auf den Container und eine {{cssxref("::scroll-marker")}} auf jedes `::column` Pseudo-Element anwenden. Das HTML bleibt unverändert.

#### CSS

Wir erstellen eine Scroll-Markierungsgruppe mit der {{cssxref("scroll-marker-group")}}-Eigenschaft und platzieren die Gruppe nach allen Inhalten:

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

Dann wenden wir Stile auf das {{cssxref("::scroll-marker-group")}} Pseudo-Element an, um die Scroll-Markierungen in der Mitte der Zeile mit einem `0.4em` Abstand zwischen ihnen anzuordnen:

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich verwenden wir das {{cssxref("::scroll-marker")}}-Pseudo-Element, um einen runden, transparenten Marker für jedes Listenelement mit einem schwarzen Rand zu erstellen, und stylen dann den Marker des derzeit gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudo-Klasse anvisieren:

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

Versuchen Sie, die Scroll-Markierungen zu drücken, um direkt zu jeder Seite zu springen. Beachten Sie, wie der aktuelle Marker hervorgehoben wird, sodass Sie sehen können, wo Sie in der Paginierung sind. Versuchen Sie auch, zur Scroll-Markierungsgruppe zu tabben und dann mit den Pfeiltasten durch jede Seite zu navigieren.

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Karussell-Beispiele.

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
- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Karussellgalerie](https://chrome.dev/carousel/) über chrome.dev (2025)
