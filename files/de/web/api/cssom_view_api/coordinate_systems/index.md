---
title: Koordinatensysteme
slug: Web/API/CSSOM_view_API/Coordinate_systems
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{DefaultAPISidebar("CSSOM view API")}}

Wenn der Standort eines Pixels in einem grafischen Kontext spezifiziert wird (ähnlich wie bei der Angabe von Koordinatensystemen in der [Algebra](https://en.wikipedia.org/wiki/Algebra)), wird seine Position relativ zu einem festen Punkt im Kontext definiert. Dieser feste Punkt wird als der [Ursprung](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) bezeichnet. Die Position wird als Anzahl der Pixel angegeben, die vom Ursprung entlang jeder Dimension des Kontexts versetzt sind.

Dieser Leitfaden beschreibt die standardmäßigen Koordinatensysteme, die im CSS-Objektmodell verwendet werden. Diese unterscheiden sich im Allgemeinen nur darin, wo sich ihr Ursprung befindet.

## Dimensionen

In den Koordinatensystemen, die von Webtechnologien verwendet werden, wird der horizontale Versatz als _x-Koordinate_ bezeichnet, wobei ein negativer Wert eine Position links vom Ursprung und ein positiver Wert rechts vom Ursprung anzeigt. Die _y-Koordinate_ gibt den vertikalen Versatz an, wobei ein negativer Wert oberhalb und ein positiver Wert unterhalb des Ursprungs liegt.

Im Web ist der Standardursprung die _obere_-linke Ecke eines gegebenen Kontexts (wobei positive y-Koordinatenwerte unterhalb des Ursprungs liegen). Beachten Sie, dass dies im Gegensatz zu den meisten mathematischen Modellen steht, bei denen der Ursprung in der _unteren_-linken Ecke liegt, mit positiven y-Werten über dem Ursprung.

Wenn die dritte Dimension verwendet wird, um Objekte von vorne nach hinten zu schichten, benutzen wir die **z-Achse**. Die z-Achse verläuft vom Betrachter zur Oberfläche des Bildschirms. Der CSS-Wert der Eigenschaft {{cssxref("z-index")}} beeinflusst, wo sich positionierte Elemente auf dieser Achse befinden, was den Effekt hat, sich vom Betrachter weg oder auf ihn zu zuzubewegen.

> [!NOTE]
> Es ist möglich, die Definitionen und Ausrichtungen dieser Koordinatensysteme mit CSS-Eigenschaften wie {{cssxref("transform")}} zu ändern. Wir sprechen jedoch vorerst nur über das standardmäßige Koordinatensystem.

## Standard-Koordinatensysteme im CSSOM

Es gibt vier standardmäßige Koordinatensysteme im CSS-Objektmodell.
Um die Hauptsysteme zu visualisieren, zeigt das folgende Diagramm einen Monitor mit einem Browserfenster, das Inhalt enthält, der außerhalb des {{Glossary("viewport", "Viewports")}} gescrollt wurde.
Seiteninhalte, die außerhalb des Viewports gescrollt wurden, werden als halbtransparent über dem Browserfenster angezeigt, um zu zeigen, wo der Ursprung für "Seiten"-Koordinaten wäre.
Der Ursprung der "Client"-, "Seiten"- und "Viewport"-Koordinatensysteme ist hervorgehoben.

![Ein großer Bildschirm mit einem kleineren Browserfenster, das die untere Hälfte einer Webseite anzeigt; die obere Hälfte wird als außerhalb des Browser-Viewports gescrollt dargestellt. Die oberen linken Ecken des Bildschirms, der Seite und des Viewports sind alle mit den Koordinaten 0,0 gekennzeichnet.](css-coords.svg)

### Offset

Koordinaten, die das "Offset"-Modell verwenden, nutzen die obere linke Ecke des untersuchten Elements oder des Elements, auf dem ein Ereignis stattgefunden hat.

Wenn beispielsweise ein [Mausereignis](/de/docs/Web/API/MouseEvent) auftritt, wird die Position der Maus, wie sie in den [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX)- und [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY)-Eigenschaften des Ereignisses angegeben ist, relativ zur oberen linken Ecke des Knotens, an den das Ereignis übermittelt wurde, angegeben. Der Ursprung wird durch die _Innenkante des Innenabstands_ versenkt, die Kante zwischen dem Innenabstandsbereich und dem Randbereich.

### Viewport

Das "Viewport"- (oder "Client"-) Koordinatensystem verwendet als Ursprung die obere linke Ecke des Viewports oder des Browsing-Kontexts, in dem das Ereignis auftrat. Dies ist der gesamte Betrachtungsbereich, in dem das Dokument dargestellt wird.

Auf einem Desktop-Computer geben beispielsweise die Eigenschaften [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) die Position des Mauszeigers in dem Moment an, in dem das Ereignis auftrat, relativ zur oberen linken Ecke des [`window`](/de/docs/Web/API/Window).
Bei Verwendung eines Stifts oder Zeigers beziehen sich die [`Touch.clientX`](/de/docs/Web/API/Touch/clientX)- und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)-Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) auf denselben Ursprung.

Die obere linke Ecke des Fensters ist immer `(0, 0)`, unabhängig vom Inhalt des Dokuments oder dem Bildlauf, der möglicherweise durchgeführt wurde. Mit anderen Worten, das Scrollen des Dokuments wird die Viewport-Koordinaten einer gegebenen Position innerhalb des Dokuments ändern.

### Seite

Das "Seiten"-Koordinatensystem gibt die Position eines Pixels relativ zur oberen linken Ecke des gesamten gerenderten [`Dokuments`](/de/docs/Web/API/Document) an.
Das bedeutet, dass ein Punkt in einem Element innerhalb des Dokuments nach horizontalem oder vertikalem Scrollen des Dokuments durch den Benutzer dieselben Koordinaten hat, es sei denn, das Element bewegt sich durch Layout-Änderungen.

Die [`pageX`](/de/docs/Web/API/MouseEvent/pageX)- und [`pageY`](/de/docs/Web/API/MouseEvent/pageY)-Eigenschaften von Mausereignissen liefern die Position der Maus zum Zeitpunkt, an dem das Ereignis generiert wurde, relativ zur oberen linken Ecke des Dokuments.
[`Touch.pageX`](/de/docs/Web/API/Touch/pageX)- und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)-Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum selben Ursprung.

### Bildschirm

Schließlich kommen wir zum "Bildschirm"-Modell, bei dem der Ursprung die obere linke Ecke des Bildschirmbereichs des Benutzers ist.
Jeder Punkt in diesem Koordinatensystem stellt ein einzelnes logisches Pixel dar, und daher erhöhen oder verringern sich die Werte in ganzen Zahlen entlang jeder Achse.
Die Position eines gegebenen Punktes innerhalb eines Dokuments wird sich ändern, wenn das enthaltene Fenster beispielsweise verschoben wird oder die Bildschirmgeometrie des Benutzers sich ändert (durch Änderung der Bildschirmauflösung oder durch Hinzufügen oder Entfernen von Monitoren im System).

Die [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX)- und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY)-Eigenschaften geben die Koordinaten der Position eines Mausereignisses relativ zum Ursprung des Bildschirms an.
[`Touch.screenX`](/de/docs/Web/API/Touch/screenX)- und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)-Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum selben Ursprung.

## Beispiel

Schauen wir uns ein Beispiel an, das die Mauskoordinaten in einem Element protokolliert.
Jedes Mal, wenn die Maus in das innere Feld eintritt, sich darin bewegt oder es verlässt, werden die Ereignisse durch Protokollieren der aktuellen Mauskoordinaten in jedem der vier verfügbaren Systeme behandelt.

### JavaScript

Für die JavaScript-Datei richtet der Code die Ereignis-Handler für das innere Feld durch Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für jede der Typen [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mousemove`](/de/docs/Web/API/Element/mousemove_event), und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) ein.
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

Das HTML enthält ein `<p>` mit der Klasse `"log"`, das die Daten aus den Mausereignissen anzeigt.

```html
<div class="outer">
  <div class="inner">
    <p class="log">Mouse over this section to view coordinates</p>
  </div>
</div>
```

### CSS

Die Klasse `"outer"` für das enthaltende Feld ist absichtlich zu breit, um die Auswirkungen der Mauskoordinaten zu sehen, wenn der Inhalt gescrollt wird.
Der `"inner"`-Absatz ist, wo Mausereignisse verfolgt und protokolliert werden.

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

Hier können Sie die Ergebnisse in Aktion sehen. Während Sie mit der Maus im blauen Feld navigieren, beobachten Sie, wie sich die Werte der x- und y-Koordinaten der Maus in den verschiedenen Koordinatensystemen ändern.

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
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
