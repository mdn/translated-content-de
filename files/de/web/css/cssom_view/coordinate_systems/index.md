---
title: Koordinatensysteme
slug: Web/CSS/CSSOM_view/Coordinate_systems
l10n:
  sourceCommit: 6ae8ff64d2c8d312be49c76dfbcc4e5c7a550b45
---

{{CSSRef}}

Wenn Sie die Position eines Pixels in einem Grafikzusammenhang angeben (genau wie bei der Angabe von Koordinatensystemen in der [Algebra](https://en.wikipedia.org/wiki/Algebra)), wird seine Position relativ zu einem festen Punkt im Kontext definiert. Dieser feste Punkt wird als [Ursprung](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) bezeichnet. Die Position wird als die Anzahl der Pixel angegeben, die in jede Dimension des Kontextes vom Ursprung aus versetzt sind.

Dieser Leitfaden beschreibt die standardmäßigen Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Diese unterscheiden sich im Allgemeinen nur darin, wo ihr Ursprung liegt.

## Dimensionen

In den von Webtechnologien verwendeten Koordinatensystemen sieht die Konvention vor, dass der horizontale Versatz als _x-Koordinate_ bezeichnet wird, wobei ein negativer Wert eine Position links vom Ursprung und ein positiver Wert eine Position rechts vom Ursprung anzeigt. Die _y-Koordinate_ gibt den vertikalen Versatz an, wobei ein negativer Wert über dem Ursprung und ein positiver Wert unter dem Ursprung liegt.

Im Web ist der Standardursprung die _obere_-linke Ecke eines bestimmten Kontexts (wobei positive y-Koordinatenwerte unterhalb des Ursprungs liegen). Beachten Sie, dass dies im Gegensatz zu den meisten mathematischen Modellen steht, bei denen der Ursprung in der _unteren_-linken Ecke liegt und positive y-Koordinatenwerte über dem Ursprung liegen.

Wenn die dritte Dimension verwendet wird, um Objekte von vorne nach hinten zu schichten, verwenden wir die z-Achse. Die z-Achse verläuft vom Betrachter zur Oberfläche des Bildschirms. Das CSS-Attribut z-index beeinflusst, wo positionierte Elemente auf dieser Achse sitzen, wodurch der Effekt entsteht, dass sie sich vom Betrachter weg oder zu ihm hin bewegen.

> [!NOTE]
> Es ist tatsächlich möglich, die Definitionen und Ausrichtungen dieser Koordinatensysteme mit CSS-Eigenschaften wie {{cssxref("transform")}} zu ändern. Wir werden jedoch zunächst nur über das standardmäßige Koordinatensystem sprechen.

## Standard-CSSOM-Koordinatensysteme

Es gibt vier Standard-Koordinatensysteme, die vom CSS-Objektmodell verwendet werden.
Um die wichtigsten Systeme zu visualisieren, zeigt das folgende Diagramm einen Monitor mit einem Browserfenster, das Inhalt enthält, der außerhalb des Viewports gescrollt wurde.
Seiteninhalt, der außerhalb des Viewports gescrollt wurde, wird halbtransparent oberhalb des Browserfensters angezeigt, um zu zeigen, wo der Ursprung für "Seiten"-Koordinaten wäre.
Die Ursprünge der "Client"-, "Seiten"- und "Viewport"-Koordinatensysteme sind hervorgehoben.

![Diagramm eines Computermonitors mit einem Browserfenster, das Inhalte außerhalb des Viewports enthält. Beschriftungen zeigen den Ursprung für Seiten-, Bildschirm- und Viewport-Koordinaten.](css-coords.svg)

### Offset

Koordinaten, die mit dem "Offset"-Modell angegeben werden, verwenden die obere linke Ecke des untersuchten Elements oder auf dem ein Ereignis aufgetreten ist.

Wenn beispielsweise ein [Mausereignis](/de/docs/Web/API/MouseEvent) auftritt, wird die Position der Maus, wie in den Eigenschaften [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY) des Ereignisses angegeben, relativ zur oberen linken Ecke des Knotens angegeben, an den das Ereignis übermittelt wurde. Der Ursprung ist durch `padding-edge` versetzt, also die Kante zwischen dem Padding-Bereich und dem Randbereich.

### Viewport

Das "Viewport"- (oder "Client"-)Koordinatensystem verwendet als Ursprung die obere linke Ecke des Viewports oder Browsing-Kontexts, in dem das Ereignis aufgetreten ist. Dies ist der gesamte Anzeigebereich, in dem das Dokument präsentiert wird.

Auf einem Desktop-Computer geben beispielsweise die Eigenschaften [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) die Position des Mauszeigers an dem Moment an, in dem das Ereignis aufgetreten ist, relativ zur oberen linken Ecke des [`window`](/de/docs/Web/API/Window).
Beim Verwenden eines Stifts oder Zeigers sind die Koordinaten [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) relativ zum selben Ursprung.

Die obere linke Ecke des Fensters ist immer (0, 0), unabhängig vom Inhalt des Dokuments oder etwaigem Scrollen, das vorgenommen wurde. Mit anderen Worten: Das Scrollen des Dokuments ändert die Viewport-Koordinaten einer bestimmten Position innerhalb des Dokuments.

### Page

Das "Seiten"-Koordinatensystem gibt die Position eines Pixels relativ zur oberen linken Ecke des gesamten gerenderten [`Document`](/de/docs/Web/API/Document) an.
Das bedeutet, dass ein Punkt in einem Element innerhalb des Dokuments dieselben Koordinaten behält, nachdem der Benutzer horizontal oder vertikal im Dokument gescrollt hat, es sei denn, das Element bewegt sich durch Layoutänderungen.

Die Eigenschaften [`pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`pageY`](/de/docs/Web/API/MouseEvent/pageY) von Mausklicks liefern die Position der Maus zu dem Zeitpunkt, zu dem das Ereignis generiert wurde, relativ zur oberen linken Ecke des Dokuments.
Die Koordinaten [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum gleichen Ursprung.

### Screen

Schließlich kommen wir zum "Screen"-Modell, bei dem der Ursprung die obere linke Ecke des Bildschirms des Benutzers ist.
Jeder Punkt in diesem Koordinatensystem stellt ein einzelnes logisches Pixel dar, sodass Werte entlang jeder Achse um ganze Zahlen erhöht oder verringert werden.
Die Position eines bestimmten Punktes innerhalb eines Dokuments ändert sich, wenn beispielsweise das enthaltende Fenster verschoben wird oder wenn sich die Bildschirmanordnung des Benutzers ändert (durch Ändern der Anzeigeauflösung oder durch Hinzufügen oder Entfernen von Monitoren zum System).

Die Eigenschaften [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) geben die Koordinaten der Position eines Mausklicks relativ zum Ursprung des Bildschirms an.
Die Koordinaten [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum gleichen Ursprung.

## Beispiel

Schauen wir uns ein Beispiel an, das Mauskoordinaten in einem Element protokolliert.
Immer wenn die Maus das innere Feld betritt, sich darin bewegt oder es verlässt, werden die Ereignisse durch Protokollieren der aktuellen Mauskoordinaten in jedem der vier verfügbaren Systeme behandelt.

### JavaScript

Für das JavaScript setzt der Code die Ereignishandler im inneren Feld auf, indem er [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für jeden der Typen [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) aufruft.
Für jedes der Ereignisse rufen wir die Funktion `setCoords()` auf, die den inneren Text des `<p>`-Elements mit den Koordinaten für jedes System setzt.

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

Das HTML enthält ein `<p>` mit der Klasse `"log"`, das die Daten der Mausereignisse anzeigt.

```html
<div class="outer">
  <div class="inner">
    <p class="log">Mouse over this section to view coordinates</p>
  </div>
</div>
```

### CSS

Die Klasse `"outer"` für das umgebende Feld ist absichtlich zu breit geraten, um die Auswirkungen der Mauskoordinaten zu sehen, wenn der Inhalt gescrollt wird.
Der `"inner"` Absatz ist, wo Mausereignisse verfolgt und protokolliert werden.

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

Hier können Sie die Ergebnisse in Aktion sehen. Wenn Sie mit der Maus über das blaue Feld fahren, beobachten Sie, wie sich die Werte der X- und Y-Koordinaten der Maus in den verschiedenen Koordinatensystemen ändern.

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms): wie man ein Koordinatensystem ändert
- Koordinaten eines [`MouseEvent`](/de/docs/Web/API/MouseEvent):

  - [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY)
  - [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY)
  - [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
  - [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY)

- Koordinaten eines [`Touch`](/de/docs/Web/API/Touch):

  - [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)
  - [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)
  - [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)
