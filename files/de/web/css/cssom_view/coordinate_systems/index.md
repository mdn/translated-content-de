---
title: Koordinatensysteme
slug: Web/CSS/CSSOM_view/Coordinate_systems
l10n:
  sourceCommit: 6ae8ff64d2c8d312be49c76dfbcc4e5c7a550b45
---

{{CSSRef}}

Wenn Sie die Position eines Pixels in einem grafischen Kontext angeben (ähnlich wie bei der Angabe von Koordinatensystemen in der [Algebra](https://en.wikipedia.org/wiki/Algebra)), wird dessen Position relativ zu einem festen Punkt im Kontext definiert. Dieser feste Punkt wird als [Ursprung](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) bezeichnet. Die Position wird als die Anzahl der Pixel angegeben, die vom Ursprung entlang jeder Dimension des Kontextes versetzt sind.

Dieser Leitfaden beschreibt die Standard-Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Diese unterscheiden sich im Allgemeinen nur darin, wo sich ihr Ursprung befindet.

## Dimensionen

In den Koordinatensystemen, die von Webtechnologien verwendet werden, wird der horizontale Versatz als _x-Koordinate_ bezeichnet, wobei ein negativer Wert eine Position links vom Ursprung und ein positiver Wert eine Position rechts vom Ursprung angibt. Die _y-Koordinate_ gibt den vertikalen Versatz an, wobei ein negativer Wert oberhalb des Ursprungs und ein positiver Wert unterhalb des Ursprungs liegt.

Im Web befindet sich der Standardursprung in der oberen linken Ecke eines gegebenen Kontextes (wobei positive y-Koordinatenwerte unterhalb des Ursprungs liegen). Beachten Sie, dass dies im Gegensatz zu den meisten mathematischen Modellen steht, bei denen der Ursprung in der unteren linken Ecke liegt, mit positiven y-Koordinatenwerten oberhalb des Ursprungs.

Wenn die dritte Dimension verwendet wird, um Objekte von vorne nach hinten zu schichten, verwenden wir die z-Achse. Die z-Achse verläuft vom Betrachter zur Oberfläche des Bildschirms. Das CSS-Attribut `z-index` beeinflusst, wo sich positionierte Elemente auf dieser Achse befinden, was den Effekt hat, sich vom Betrachter weg oder auf ihn zu zubewegen.

> [!NOTE]
> Es ist tatsächlich möglich, die Definitionen und Ausrichtungen dieser Koordinatensysteme mithilfe von CSS-Eigenschaften wie {{cssxref("transform")}} zu ändern. Wir werden jedoch zunächst nur über das Standardkoordinatensystem sprechen.

## Standard CSSOM Koordinatensysteme

Es gibt vier Standard-Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Um die Hauptsysteme zu veranschaulichen, zeigt das folgende Diagramm einen Monitor mit einem Browserfenster, das Inhalte außerhalb des Viewports enthält. Seiteninhalte, die außerhalb des Viewports gescrollt werden, werden als halbtransparent über dem Browserfenster angezeigt, um anzuzeigen, wo sich der Ursprung für "Seiten"-Koordinaten befinden würde. Die Ursprünge der "client", "page" und "viewport" Koordinatensysteme sind hervorgehoben.

![Diagramm eines Computermonitors mit einem Browserfenster, das Inhalte außerhalb des Viewports enthält. Beschriftungen zeigen den Ursprung für Seiten-, Bildschirm- und Viewport-Koordinaten.](css-coords.svg)

### Offset

Koordinaten, die mit dem "offset"-Modell angegeben werden, verwenden die obere linke Ecke des zu untersuchenden Elements oder des Elements, auf dem ein Ereignis stattgefunden hat.

Wenn beispielsweise ein {{domxref("MouseEvent", "Mausereignis", "", 1)}} auftritt, werden die Position der Maus, wie sie in den Eigenschaften [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY) des Ereignisses angegeben ist, relativ zur oberen linken Ecke des Knotens angegeben, an den das Ereignis übermittelt wurde. Der Ursprung ist durch `padding-edge` versetzt, welches die Kante zwischen dem Paddingbereich und dem Randbereich ist.

### Viewport

Das "Viewport" (oder "Client")-Koordinatensystem verwendet als Ursprung die obere linke Ecke des Viewports oder des Browsing-Kontextes, in dem das Ereignis aufgetreten ist. Dies ist der gesamte Anzeigebereich, in dem das Dokument präsentiert wird.

Auf einem Desktop-Computer zeigen beispielsweise die Eigenschaften [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) die Position des Mauszeigers im Moment des Auftretens des Ereignisses relativ zur oberen linken Ecke des [`window`](/de/docs/Web/API/Window) an. Bei Verwendung eines Eingabestifts oder eines Zeigers sind die [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) relativ zum gleichen Ursprung.

Die obere linke Ecke des Fensters ist immer (0, 0), unabhängig vom Inhalt des Dokuments oder davon, ob gescrollt wurde. Mit anderen Worten, das Scrollen des Dokuments ändert die Viewport-Koordinaten einer bestimmten Position im Dokument.

### Seite

Das "Seiten"-Koordinatensystem gibt die Position eines Pixels relativ zur oberen linken Ecke des gesamten gerenderten [`Document`](/de/docs/Web/API/Document) an. Das bedeutet, dass ein Punkt in einem Element innerhalb des Dokuments nach dem horizontalen oder vertikalen Scrollen des Benutzers im Dokument dieselben Koordinaten hat, es sei denn, das Element bewegt sich aufgrund von Layoutänderungen.

Die Eigenschaften [`pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`pageY`](/de/docs/Web/API/MouseEvent/pageY) geben die Position der Maus zum Zeitpunkt der Erzeugung des Ereignisses relativ zur oberen linken Ecke des Dokuments an. Die [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum gleichen Ursprung.

### Bildschirm

Schließlich kommen wir zum "Bildschirm"-Modell, bei dem der Ursprung die obere linke Ecke des Benutzer-Bildschirmbereichs ist. Jeder Punkt in diesem Koordinatensystem repräsentiert ein einzelnes logisches Pixel, und die Werte erhöhen und verringern sich in ganzzahligen Werten entlang jeder Achse. Die Position eines bestimmten Punktes innerhalb eines Dokuments ändert sich, wenn das enthaltene Fenster zum Beispiel verschoben wird oder wenn sich die Bildschirmgeometrie des Benutzers ändert (durch Änderung der Bildschirmauflösung oder durch Hinzufügen oder Entfernen von Monitoren zu ihrem System).

Die Eigenschaften [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) geben die Koordinaten der Position eines Mausereignisses relativ zum Bildschirmursprung an. Die [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum gleichen Ursprung.

## Beispiel

Werfen wir einen Blick auf ein Beispiel, das Mauskoordinaten in einem Element protokolliert. Wann immer die Maus in das innere Feld eintritt, sich darin bewegt oder es verlässt, werden die Ereignisse behandelt, indem die aktuellen Mauskoordinaten in jedem der vier verfügbaren Systeme protokolliert werden.

### JavaScript

Für das JavaScript richtet der Code die Ereignisbehandler für das innere Feld ein, indem [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für jede der Typen [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) aufgerufen wird. Für jedes der Ereignisse rufen wir die Funktion `setCoords()` auf, die den inneren Text des `<p>`-Elements mit den Koordinaten für jedes System festlegt.

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

Die Klasse `"outer"` für das umgebende Feld ist absichtlich zu breit, um die Effekte der Mauskoordinaten zu sehen, wenn der Inhalt gescrollt wird. Der `"inner"` Absatz ist, wo Mausereignisse verfolgt und protokolliert werden.

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

Hier können Sie die Ergebnisse in Aktion sehen. Während Sie mit der Maus im und um das blaue Feld fahren, beobachten Sie, wie sich die X- und Y-Koordinaten der Maus in den verschiedenen Koordinatensystemen ändern.

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms): wie man ein Koordinatensystem verändert
- Koordinaten eines [`MouseEvent`](/de/docs/Web/API/MouseEvent):

  - [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY)
  - [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY)
  - [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
  - [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY)

- Koordinaten eines [`Touch`](/de/docs/Web/API/Touch):

  - [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)
  - [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)
  - [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)
