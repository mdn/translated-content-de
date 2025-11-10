---
title: Koordinatensysteme
slug: Web/API/CSSOM_view_API/Coordinate_systems
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("CSSOM view API")}}

Wenn der Standort eines Pixels in einem Grafik-Kontext angegeben wird (ähnlich wie bei der Angabe von Koordinatensystemen in der [Algebra](https://en.wikipedia.org/wiki/Algebra)), wird seine Position relativ zu einem festen Punkt im Kontext definiert. Dieser feste Punkt wird der [Ursprung](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) genannt. Die Position wird als Anzahl der Pixel angegeben, die vom Ursprung entlang jeder Dimension des Kontextes versetzt sind.

Dieser Leitfaden beschreibt die standardmäßigen Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Diese unterscheiden sich im Allgemeinen nur darin, wo sich ihr Ursprung befindet.

## Dimensionen

In den Koordinatensystemen, die von Webtechnologien verwendet werden, wird der horizontale Versatz als _x-Koordinate_ bezeichnet, wobei ein negativer Wert eine Position links vom Ursprung und ein positiver Wert eine Position rechts vom Ursprung anzeigt. Die _y-Koordinate_ gibt den vertikalen Versatz an, wobei ein negativer Wert oberhalb des Ursprungs und ein positiver Wert unterhalb des Ursprungs liegt.

Im Web ist der Standardursprung die _obere_-linke Ecke eines bestimmten Kontextes (wobei positive y-Koordinatenwerte unterhalb des Ursprungs liegen). Beachten Sie, dass dies im Gegensatz zu den meisten mathematischen Modellen steht, bei denen der Ursprung in der _unteren_-linken Ecke liegt, wobei positive y-Koordinatenwerte oberhalb des Ursprungs liegen.

Bei der Verwendung der dritten Dimension zur Schichtung von Objekten von vorne nach hinten verwenden wir die **z-Achse**. Die z-Achse verläuft vom Betrachter zur Oberfläche des Bildschirms. Der CSS-Wert der Eigenschaft {{cssxref("z-index")}} beeinflusst, wo positionierte Elemente auf dieser Achse sitzen, was den Effekt hat, sich vom Betrachter weg oder auf ihn zu zu bewegen.

> [!NOTE]
> Es ist möglich, die Definitionen und Orientierungen dieser Koordinatensysteme mithilfe von CSS-Eigenschaften wie {{cssxref("transform")}} zu ändern. Für den Moment sprechen wir jedoch nur über das standardmäßige Koordinatensystem.

## Standard CSSOM-Koordinatensysteme

Es gibt vier standardmäßige Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Um die Hauptsysteme zu visualisieren, zeigt das folgende Diagramm einen Monitor mit einem Browser-Fenster, das Inhalte enthält, die außerhalb des {{Glossary("viewport", "Viewports")}} gescrollt wurden. Seitliche Inhalte, die außerhalb des Viewports gescrollt sind, werden als halbtransparent über dem Browser-Fenster angezeigt, um zu zeigen, wo der Ursprung für "Seiten"-Koordinaten wäre. Die Ursprünge der Koordinatensysteme "client", "page" und "viewport" sind hervorgehoben.

![Ein großer Bildschirm mit einem kleineren Browser-Fenster, das die untere Hälfte einer Webseite anzeigt; die obere Hälfte wird als außerhalb des Viewports des Browsers gescrollt dargestellt. Die oberen linken Ecken des Bildschirms, der Seite und des Viewports sind alle mit den Koordinaten 0,0 beschriftet.](css-coords.svg)

### Offset

Koordinaten, die mit dem "Offset"-Modell angegeben werden, verwenden die obere linke Ecke des zu untersuchenden Elements oder auf dem ein Ereignis stattgefunden hat.

Zum Beispiel, wenn ein [Mausereignis](/de/docs/Web/API/MouseEvent) auftritt, wird die Position der Maus, wie sie in den [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY)-Eigenschaften des Ereignisses angegeben ist, relativ zur oberen linken Ecke des Knotens angegeben, an den das Ereignis geliefert wurde. Der Ursprung ist um den _Paddingrand_, den Rand zwischen dem Paddingbereich und dem Randbereich, eingerückt.

### Viewport

Das "Viewport" (oder "Client")-Koordinatensystem verwendet als seinen Ursprung die obere linke Ecke des Viewports oder des Browsing-Kontextes, in dem das Ereignis aufgetreten ist. Dies ist der gesamte Sichtbereich, in dem das Dokument präsentiert wird.

Auf einem Desktop-Computer geben beispielsweise die [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY)-Eigenschaften die Position des Mauszeigers in dem Moment an, in dem das Ereignis aufgetreten ist, relativ zur oberen linken Ecke des [`window`](/de/docs/Web/API/Window) an. Bei Verwendung eines Stifts oder Zeigers beziehen sich die [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)-Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) auf denselben Ursprung.

Die obere linke Ecke des Fensters ist immer `(0, 0)`, unabhängig vom Inhalt des Dokuments oder jeglichem Scrollen, das möglicherweise durchgeführt wurde. Mit anderen Worten, das Scrollen des Dokuments ändert die Viewport-Koordinaten einer gegebenen Position innerhalb des Dokuments.

### Page

Das "Seiten"-Koordinatensystem gibt die Position eines Pixels relativ zur oberen linken Ecke des gesamten gerenderten [`Document`](/de/docs/Web/API/Document) an. Das bedeutet, dass ein Punkt in einem Element innerhalb des Dokuments dieselben Koordinaten hat, nachdem der Benutzer horizontal oder vertikal im Dokument gescrollt hat, es sei denn, das Element bewegt sich durch Layoutänderungen.

Die [`pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`pageY`](/de/docs/Web/API/MouseEvent/pageY)-Eigenschaften von Mausereignissen bieten die Position der Maus zum Zeitpunkt, als das Ereignis erzeugt wurde, relativ zur oberen linken Ecke des Dokuments. Die [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)-Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zu demselben Ursprung.

### Screen

Schließlich kommen wir zum "Bildschirm"-Modell, wobei der Ursprung die obere linke Ecke des Benutzerbildschirms ist. Jeder Punkt in diesem Koordinatensystem repräsentiert ein einzelnes logisches Pixel, und daher erhöhen und verringern sich die Werte um ganzzahlige Werte entlang jeder Achse. Die Position eines bestimmten Punkts innerhalb eines Dokuments ändert sich, wenn z. B. das umgebende Fenster verschoben wird oder wenn sich die Bildschirmgeometrie des Benutzers ändert (durch Ändern der Bildschirmauflösung oder durch Hinzufügen oder Entfernen von Monitoren zu ihrem System).

Die [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY)-Eigenschaften geben die Koordinaten der Position eines Mausereignisses relativ zum Ursprung des Bildschirms an. Die [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)-Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zu demselben Ursprung.

## Beispiel

Schauen wir uns ein Beispiel an, das Mauskoordinaten in einem Element protokolliert. Jedes Mal, wenn die Maus das innere Feld betritt, sich darin bewegt oder es verlässt, werden die Ereignisse protokolliert, indem die aktuellen Mauskoordinaten in jedem der vier verfügbaren Systeme aufgezeichnet werden.

### JavaScript

Für das JavaScript richtet der Code die Ereignis-Handler im inneren Feld ein, indem [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für jeden der Typen [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) aufgerufen wird. Für jedes der Ereignisse rufen wir die Funktion `setCoords()` auf, die den inneren Text des `<p>`-Elements mit den Koordinaten für jedes System festlegt.

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

Die Klasse `"outer"` für das umgebende Feld ist absichtlich zu breit, um die Effekte der Mauskoordinaten zu sehen, wenn der Inhalt gescrollt wird. Der `"inner"`-Absatz ist, wo Mausereignisse verfolgt und protokolliert werden.

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

### Resultat

Hier können Sie die Ergebnisse in Aktion sehen. Während Sie mit der Maus in der Nähe des blauen Kastens navigieren, beobachten Sie, wie sich die Werte der X- und Y-Koordinaten der Maus in den verschiedenen Koordinatensystemen ändern.

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Konzepte des Viewports](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using): wie man ein Koordinatensystem ändert
- Koordinaten eines [`MouseEvent`](/de/docs/Web/API/MouseEvent):

  - [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY)
  - [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY)
  - [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
  - [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY)

- Koordinaten eines [`Touch`](/de/docs/Web/API/Touch):
  - [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)
  - [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)
  - [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)
