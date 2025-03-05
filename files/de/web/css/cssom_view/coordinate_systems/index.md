---
title: Koordinatensysteme
slug: Web/CSS/CSSOM_view/Coordinate_systems
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{CSSRef}}

Beim Angeben des Standorts eines Pixels in einem Grafik-Kontext (genauso wie beim Festlegen von Koordinatensystemen in der [Algebra](https://en.wikipedia.org/wiki/Algebra)) wird seine Position relativ zu einem festen Punkt innerhalb des Kontexts definiert. Dieser feste Punkt wird der [Ursprung](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) genannt. Die Position wird als die Anzahl von Pixeln angegeben, die vom Ursprung entlang jeder Dimension des Kontexts versetzt sind.

Dieser Leitfaden beschreibt die standardmäßigen Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Diese unterscheiden sich im Allgemeinen nur darin, wo sich ihr Ursprung befindet.

## Dimensionen

In den von Web-Technologien verwendeten Koordinatensystemen wird der horizontale Versatz als _x-Koordinate_ bezeichnet, wobei ein negativer Wert eine Position links vom Ursprung und ein positiver Wert rechts vom Ursprung angibt. Die _y-Koordinate_ gibt den vertikalen Versatz an, wobei ein negativer Wert oberhalb des Ursprungs und ein positiver Wert unterhalb des Ursprungs liegt.

Im Web ist der Standardursprung die _obere_-linke Ecke eines gegebenen Kontexts (wobei positive y-Koordinatenwerte unterhalb des Ursprungs liegen). Beachten Sie, dass dies im Gegensatz zu den meisten mathematischen Modellen steht, bei denen der Ursprung in der _unteren_-linken Ecke liegt, und positive y-Koordinatenwerte oberhalb des Ursprungs liegen.

Wenn die dritte Dimension verwendet wird, um Objekte von vorne nach hinten zu schichten, wird die **z-Achse** genutzt. Die z-Achse verläuft vom Betrachter zur Bildschirmoberfläche. Der CSS-Wert der {{cssxref("z-index")}}-Eigenschaft beeinflusst, wo positionierte Elemente auf dieser Achse platziert werden, was den Effekt hat, dass sie sich vom Betrachter weg oder auf ihn zu bewegen.

> [!NOTE]
> Es ist möglich, die Definitionen und Ausrichtungen dieser Koordinatensysteme mit CSS-Eigenschaften wie {{cssxref("transform")}} zu ändern. Allerdings sprechen wir vorerst nur über das Standardkoordinatensystem.

## Standard CSSOM Koordinatensysteme

Es gibt vier standardmäßige Koordinatensysteme, die vom CSS-Objektmodell verwendet werden.
Um die Hauptsysteme zu visualisieren, zeigt das folgende Diagramm einen Monitor mit einem Browserfenster, das Inhalte enthält, die außerhalb des {{Glossary("viewport", "Viewports")}} gescrollt wurden.
Seiteninhalte, die außerhalb des Viewports gescrollt wurden, werden halbtransparent über dem Browserfenster angezeigt, um anzuzeigen, wo der Ursprung für "Seiten"-Koordinaten wäre.
Die Ursprünge der "Client"-, "Seiten"- und "Viewport"-Koordinatensysteme sind hervorgehoben.

![Ein großer Bildschirm mit einem kleineren Browserfenster, das die untere Hälfte einer Webseite rendert; die obere Hälfte wird als außerhalb des Browser-Viewports gescrollt angezeigt. Die oberen linken Ecken des Bildschirms, der Seite und des Viewports sind alle mit Koordinaten von 0,0 beschriftet.](css-coords.svg)

### Offset

Koordinaten, die mit dem "Offset"-Modell angegeben werden, verwenden die obere linke Ecke des zu untersuchenden Elements oder des Elements, auf dem ein Ereignis stattgefunden hat.

Zum Beispiel, wenn ein [`Mouse Event`](/de/docs/Web/API/MouseEvent) auftritt, wird die Position der Maus, wie in den [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY) Eigenschaften des Ereignisses angegeben, relativ zu der oberen linken Ecke des Knotens angegeben, an den das Ereignis geliefert wurde. Der Ursprung liegt am _Padding-Rand_, dem Rand zwischen dem Füllbereich und dem Randbereich.

### Viewport

Das "Viewport"- (oder "Client")-Koordinatensystem verwendet als Ursprung die obere linke Ecke des Viewports oder Browsing-Kontexts, in dem das Ereignis auftrat. Dies ist der gesamte Anzeigebereich, in dem das Dokument präsentiert wird.

Auf einem Desktop-Computer zum Beispiel geben die [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) Eigenschaften die Position des Mauszeigers zum Zeitpunkt des Ereignisses relativ zur oberen linken Ecke des [`window`](/de/docs/Web/API/Window) an.
Wenn ein Stift oder ein Zeiger verwendet wird, sind die [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) Koordinaten in einem [Touch-Event](/de/docs/Web/API/TouchEvent) relativ zum gleichen Ursprung.

Die obere linke Ecke des Fensters ist immer `(0, 0)`, unabhängig vom Inhalt des Dokuments oder von jeglichem Scrollen, das möglicherweise durchgeführt wurde. Das bedeutet, dass das Scrollen des Dokuments die Viewport-Koordinaten einer bestimmten Position innerhalb des Dokuments ändert.

### Seite

Das "Seiten"-Koordinatensystem gibt die Position eines Pixels relativ zur oberen linken Ecke des gesamten gerenderten [`Dokuments`](/de/docs/Web/API/Document) an.
Das bedeutet, dass ein Punkt in einem Element innerhalb des Dokuments die gleichen Koordinaten hat, nachdem der Benutzer horizontal oder vertikal im Dokument gescrollt hat, es sei denn, das Element wird durch Layout-Änderungen verschoben.

Die [`pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`pageY`](/de/docs/Web/API/MouseEvent/pageY) Eigenschaften von Mausereignissen geben die Position der Maus zum Zeitpunkt der Ereigniserstellung relativ zur oberen linken Ecke des Dokuments an.
[`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) Koordinaten in einem [Touch-Event](/de/docs/Web/API/TouchEvent) sind relativ zum gleichen Ursprung.

### Bildschirm

Schließlich kommen wir zum "Bildschirm"-Modell, bei dem der Ursprung die obere linke Ecke des Bildschirmbereichs des Nutzers ist.
Jeder Punkt in diesem Koordinatensystem stellt ein einzelnes logisches Pixel dar, und so steigen und fallen die Werte in ganzen Zahlenwerten entlang jeder Achse.
Die Position eines gegebenen Punkts innerhalb eines Dokuments ändert sich, wenn beispielsweise das Fenster verschoben wird oder wenn sich die Bildschirmgeometrie des Nutzers ändert (durch Ändern der Bildschirmauflösung oder Hinzufügen/Entfernen von Monitoren zu ihrem System).

Die [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) Eigenschaften geben die Koordinaten der Position eines Mausereignisses relativ zum Ursprung des Bildschirms an.
[`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) Koordinaten in einem [Touch-Event](/de/docs/Web/API/TouchEvent) sind relativ zum gleichen Ursprung.

## Beispiel

Werfen wir einen Blick auf ein Beispiel, das Mauskoordinaten in einem Element protokolliert.
Immer wenn die Maus das innere Feld betritt, sich darin bewegt oder es verlässt, werden die Ereignisse durch Protokollierung der aktuellen Mauskoordinaten in jedem der vier verfügbaren Systeme behandelt.

### JavaScript

Für das JavaScript wird der Code die Event-Handler auf dem inneren Feld einrichten, indem er [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für jeden der Typen [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) aufruft.
Bei jedem der Ereignisse wird die `setCoords()`-Funktion aufgerufen, die den inneren Text des `<p>`-Elements mit den Koordinaten für jedes System festlegt.

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

Das HTML enthält ein `<p>` mit der `"log"`-Klasse, welche die Daten der Mausereignisse anzeigt.

```html
<div class="outer">
  <div class="inner">
    <p class="log">Mouse over this section to view coordinates</p>
  </div>
</div>
```

### CSS

Die Klasse `"outer"` für das umgebende Feld ist bewusst zu breit, um die Auswirkungen der Mauskoordinaten zu sehen, wenn die Inhalte gescrollt werden.
Der `"inner"`-Absatz ist der Ort, an dem Mausereignisse verfolgt und protokolliert werden.

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

Hier können Sie die Ergebnisse in Aktion sehen. Wenn Sie die Maus in und um das blaue Feld bewegen, beobachten Sie, wie sich die Werte der X- und Y-Koordinaten der Maus in den verschiedenen Koordinatensystemen ändern.

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
- [Verwenden von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms): wie man ein Koordinatensystem verändert
- Koordinaten eines [`MouseEvent`](/de/docs/Web/API/MouseEvent):

  - [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY)
  - [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY)
  - [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
  - [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY)

- Koordinaten eines [`Touch`](/de/docs/Web/API/Touch):

  - [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)
  - [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)
  - [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)
