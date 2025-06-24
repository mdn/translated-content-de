---
title: Koordinatensysteme
slug: Web/CSS/CSSOM_view/Coordinate_systems
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Wenn Sie die Position eines Pixels in einem Grafikkontext festlegen (genau wie bei der Definition von Koordinatensystemen in der [Algebra](https://en.wikipedia.org/wiki/Algebra)), wird dessen Position relativ zu einem festen Punkt im Kontext definiert. Dieser feste Punkt wird als der [Ursprung](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) bezeichnet. Die Position wird als die Anzahl der Pixel angegeben, die vom Ursprung entlang jeder Dimension des Kontexts verschoben sind.

Dieser Leitfaden beschreibt die standardmäßigen Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Diese unterscheiden sich im Allgemeinen nur darin, wo sich ihr Ursprung befindet.

## Dimensionen

In den von Webtechnologien verwendeten Koordinatensystemen wird die horizontale Verschiebung als _x-Koordinate_ bezeichnet, wobei ein negativer Wert eine Position links vom Ursprung und ein positiver Wert eine Position rechts vom Ursprung angibt. Die _y-Koordinate_ gibt die vertikale Verschiebung an, wobei ein negativer Wert über dem Ursprung und ein positiver Wert unter dem Ursprung liegt.

Im Web ist der Standardursprung die _obere_-linke Ecke eines gegebenen Kontexts (wobei positive y-Koordinatenwerte unter dem Ursprung liegen). Beachten Sie, dass dies im Gegensatz zu den meisten mathematischen Modellen steht, bei denen der Ursprung in der _unteren_-linken Ecke liegt und positive y-Koordinatenwerte über dem Ursprung liegen.

Wenn Sie die dritte Dimension verwenden, um Objekte von vorne nach hinten zu schichten, verwenden wir die **z-Achse**. Die z-Achse verläuft vom Betrachter zur Bildschirmoberfläche. Der Wert der CSS-{{cssxref("z-index")}}-Eigenschaft beeinflusst, wo positionierte Elemente auf dieser Achse sitzen, was den Effekt hat, sich vom oder zum Betrachter zu bewegen.

> [!NOTE]
> Es ist möglich, die Definitionen und Ausrichtungen dieser Koordinatensysteme mit CSS-Eigenschaften wie {{cssxref("transform")}} zu ändern. Wir werden jedoch vorerst nur über das standardmäßige Koordinatensystem sprechen.

## Standard-CSSOM-Koordinatensysteme

Es gibt vier standardmäßige Koordinatensysteme, die vom CSS-Objektmodell verwendet werden.
Um die Hauptsysteme zu visualisieren, zeigt das folgende Diagramm einen Monitor mit einem Browserfenster, das Inhalte enthält, die außerhalb des {{Glossary("viewport", "Viewports")}} gescrollt werden.
Seiteninhalte, die außerhalb des Viewports gescrollt werden, werden als halbtransparent über dem Browserfenster angezeigt, um zu verdeutlichen, wo sich der Ursprung für "Seiten"-Koordinaten befinden würde.
Der Ursprung der "Client"-, "Page"- und "Viewport"-Koordinatensysteme ist hervorgehoben.

![Ein großer Bildschirm mit einem kleineren Browserfenster, das die untere Hälfte einer Webseite rendert; die obere Hälfte wird als außerhalb des Browser-Viewports gescrollt gezeigt. Die oberen linken Ecken des Bildschirms, der Seite und des Viewports sind alle mit Koordinaten von 0,0 markiert.](css-coords.svg)

### Offset

Koordinaten, die das "Offset"-Modell verwenden, beziehen sich auf die obere linke Ecke des betrachteten Elements oder das Element, auf dem ein Ereignis aufgetreten ist.

Zum Beispiel, wenn ein [Mausereignis](/de/docs/Web/API/MouseEvent) auftritt, werden die Position der Maus, wie sie in den [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY) Eigenschaften des Ereignisses angegeben sind, relativ zur oberen linken Ecke des Knotens angegeben, an den das Ereignis übermittelt wurde. Der Ursprung ist durch den _Padding-Rand_ eingerückt, der Rand zwischen dem Padding-Bereich und dem Rand-Bereich.

### Viewport

Das "Viewport"- (oder "Client")-Koordinatensystem verwendet als seinen Ursprung die obere linke Ecke des Viewports oder des Browsing-Kontexts, in dem das Ereignis aufgetreten ist. Dies ist der gesamte Anzeigebereich, in dem das Dokument präsentiert wird.

Auf einem Desktop-Computer geben beispielsweise die Eigenschaften [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) die Position des Mauszeigers zum Zeitpunkt des Ereignisses an, relativ zur oberen linken Ecke des [`window`](/de/docs/Web/API/Window).
Beim Verwenden eines Stifts oder Zeigers sind die [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) relativ zum selben Ursprung.

Die obere linke Ecke des Fensters ist immer `(0, 0)`, unabhängig vom Inhalt des Dokuments oder von irgendwelchen Scrolling, die vorgenommen worden sein könnten. Mit anderen Worten, das Scrollen des Dokuments ändert die Viewport-Koordinaten einer bestimmten Position innerhalb des Dokuments.

### Page

Das "Page"-Koordinatensystem gibt die Position eines Pixels relativ zur oberen linken Ecke des gesamten gerenderten [`Dokuments`](/de/docs/Web/API/Document) an.
Das bedeutet, dass ein Punkt in einem Element innerhalb des Dokuments nach dem horizontalen oder vertikalen Scrollen des Benutzers im Dokument die gleichen Koordinaten beibehalten wird, es sei denn, das Element wird durch Layout-Änderungen verschoben.

Die [`pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`pageY`](/de/docs/Web/API/MouseEvent/pageY) Eigenschaften von Mausereignissen geben die Position der Maus zum Zeitpunkt des erzeugten Ereignisses an, relativ zur oberen linken Ecke des Dokuments.
[`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum selben Ursprung.

### Bildschirm

Schließlich kommen wir zum "Bildschirm"-Modell, bei dem der Ursprung die obere linke Ecke des Benutzerbildschirmraums ist.
Jeder Punkt in diesem Koordinatensystem repräsentiert ein einzelnes logisches Pixel, und daher erhöhen und verringern sich die Werte entlang jeder Achse um ganze Zahlen.
Die Position eines bestimmten Punkts innerhalb eines Dokuments ändert sich beispielsweise, wenn das enthaltende Fenster verschoben wird oder wenn sich die Bildschirmgeometrie des Benutzers ändert (durch Ändern der Bildschirmauflösung oder durch Hinzufügen oder Entfernen von Monitoren zu ihrem System).

Die [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) Eigenschaften geben die Koordinaten der Position eines Mausereignisses relativ zum Ursprung des Bildschirms an.
[`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum selben Ursprung.

## Beispiel

Werfen wir einen Blick auf ein Beispiel, das Mauskoordinaten in einem Element protokolliert.
Sobald die Maus das innere Feld betritt, sich darin bewegt oder es verlässt, werden die Ereignisse durch Protokollieren der aktuellen Mauskoordinaten in jedem der vier verfügbaren Systeme behandelt.

### JavaScript

Für das JavaScript setzt der Code die Ereignishandler auf das innere Feld, indem er [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für jeden der Typen [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) aufruft.
Für jedes der Ereignisse rufen wir die `setCoords()`-Funktion auf, die den inneren Text des `<p>`-Elements mit den Koordinaten für jedes System festlegt.

```js
const log = document.querySelector(".log");
const inner = document.querySelector(".inner");

function setCoords(e) {
  log.innerText = `
    Offset X/Y: ${e.offsetX}, ${e.offsetY}
    Viewport X/Y: ${e.clientX}, ${e.clientY}
    Page X/Y: ${e.pageX}, ${e.pageY}
    Screen X/Y: ${e.screenX}, ${e.screenY}`;
}

inner.addEventListener("mousemove", setCoords);
inner.addEventListener("mouseenter", setCoords);
inner.addEventListener("mouseleave", setCoords);
```

### HTML

Das HTML enthält ein `<p>` mit der Klasse `"log"`, das die Daten aus den Mausereignissen anzeigt.

```html
<div class="outer">
  <div class="inner">
    <p class="log">Mouse over this section to view coordinates</p>
  </div>
</div>
```

### CSS

Die Klasse `"outer"` für das enthaltene Feld ist absichtlich zu breit, um die Auswirkungen von Mauskoordinaten zu sehen, wenn der Inhalt gescrollt wird.
Der `"inner"`-Absatz ist dort, wo Mausereignisse verfolgt und protokolliert werden.

```css
.outer {
  width: 1000px;
}

.inner {
  font-family: monospace;
  position: relative;
  width: 500px;
  height: 150px;
  top: 25px;
  left: 100px;
  background-color: darkblue;
  color: white;
  cursor: crosshair;
  user-select: none;
}

.log {
  position: relative;
  width: 100%;
  text-align: center;
}
```

### Ergebnis

Hier können Sie die Ergebnisse in Aktion sehen. Während Sie in und um das blaue Kästchen herum mit der Maus agieren, beobachten Sie, wie sich die Werte der X- und Y-Koordinaten der Maus in den verschiedenen Koordinatensystemen ändern.

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms): Anleitung zur Änderung eines Koordinatensystems
- Koordinaten eines [`MouseEvent`](/de/docs/Web/API/MouseEvent):

  - [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY)
  - [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY)
  - [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
  - [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY)

- Koordinaten eines [`Touch`](/de/docs/Web/API/Touch):
  - [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)
  - [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)
  - [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)
