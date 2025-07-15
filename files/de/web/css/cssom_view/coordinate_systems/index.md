---
title: Koordinatensysteme
slug: Web/CSS/CSSOM_view/Coordinate_systems
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Wenn Sie die Position eines Pixels in einem Grafik-Kontext angeben (ähnlich wie bei der Definition von Koordinatensystemen in der [Algebra](https://en.wikipedia.org/wiki/Algebra)), wird seine Position relativ zu einem festen Punkt im Kontext definiert. Dieser feste Punkt wird als der [Ursprung](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) bezeichnet. Die Position wird als Anzahl von Pixelversätzen vom Ursprung entlang jeder Dimension des Kontextes angegeben.

Dieser Leitfaden beschreibt die standardmäßigen Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Diese unterscheiden sich im Allgemeinen nur darin, wo sich ihr Ursprung befindet.

## Dimensionen

In den von Webtechnologien verwendeten Koordinatensystemen wird der horizontale Versatz als _x-Koordinate_ bezeichnet, wobei ein negativer Wert eine Position links vom Ursprung und ein positiver Wert rechts vom Ursprung angibt. Die _y-Koordinate_ gibt den vertikalen Versatz an, wobei ein negativer Wert über dem Ursprung und ein positiver Wert unter dem Ursprung liegt.

Im Web ist der Standardursprung die _obere_ linke Ecke eines gegebenen Kontextes (wobei positive y-Koordinatenwerte unterhalb des Ursprungs liegen). Beachten Sie, dass dies im Gegensatz zu den meisten mathematischen Modellen steht, bei denen der Ursprung in der _unteren_ linken Ecke ist, wobei positive y-Koordinatenwerte oberhalb des Ursprungs liegen.

Wenn die dritte Dimension verwendet wird, um Objekte von vorne nach hinten zu schichten, verwenden wir die **z-Achse**. Die z-Achse verläuft vom Betrachter zur Oberfläche des Bildschirms. Der CSS-Wert der Eigenschaft {{cssxref("z-index")}} beeinflusst, wo positionierte Elemente auf dieser Achse sitzen, was den Effekt hat, sich vom Betrachter weg oder auf ihn zu zu bewegen.

> [!NOTE]
> Es ist möglich, die Definitionen und Orientierungen dieser Koordinatensysteme mit CSS-Eigenschaften wie {{cssxref("transform")}} zu ändern. Wir werden jedoch nur über das standardmäßige Koordinatensystem sprechen.

## Standard-CSSOM-Koordinatensysteme

Es gibt vier standardmäßige Koordinatensysteme, die vom CSS-Objektmodell verwendet werden.
Um die Hauptsysteme zu veranschaulichen, zeigt das folgende Diagramm einen Monitor mit einem Browserfenster, das Inhalte enthält, die außerhalb des {{Glossary("viewport", "Ansichtsfensters")}} gescrollt wurden.
Seiteninhalte, die außerhalb des Ansichtsfensters gescrollt sind, werden halbtransparent über dem Browserfenster angezeigt, um anzuzeigen, wo sich der Ursprung für "Seiten"-Koordinaten befinden würde.
Die Ursprünge der "Client"-, "Seiten"- und "Ansichtsfenster"-Koordinatensysteme sind hervorgehoben.

![Ein großer Bildschirm mit einem kleineren Browserfenster, das die untere Hälfte einer Webseite rendert; die obere Hälfte wird als außerhalb des Browser-Ansichtsfensters gescrollt angezeigt. Die oberen linken Ecken des Bildschirms, der Seite und des Ansichtsfensters sind alle mit den Koordinaten 0,0 beschriftet.](css-coords.svg)

### Versatz

Koordinaten, die mit dem "Versatz"-Modell angegeben werden, verwenden die obere linke Ecke des Elements, das untersucht wird oder bei dem ein Ereignis stattgefunden hat.

Wenn beispielsweise ein [Mausereignis](/de/docs/Web/API/MouseEvent) auftritt, wird die Position der Maus, wie sie in den Eigenschaften [`offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`offsetY`](/de/docs/Web/API/MouseEvent/offsetY) des Ereignisses angegeben ist, relativ zur oberen linken Ecke des Knotens angegeben, an den das Ereignis geliefert wurde. Der Ursprung ist durch die _Abstandskante_, die Kante zwischen dem Abstandbereich und dem Rahmenbereich, eingedrückt.

### Ansichtsfenster

Das "Ansichtsfenster" (oder "Client")-Koordinatensystem verwendet als Ursprung die obere linke Ecke des Ansichtsfensters oder des Browsing-Kontextes, in dem das Ereignis aufgetreten ist. Dies ist der gesamte Anzeigebereich, in dem das Dokument dargestellt wird.

Auf einem Desktop-Computer zum Beispiel geben die Eigenschaften [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) die Position des Mauszeigers zu dem Zeitpunkt an, an dem das Ereignis aufgetreten ist, relativ zur oberen linken Ecke des [`window`](/de/docs/Web/API/Window).
Bei Verwendung eines Stylus oder Zeigers sind die Koordinaten [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) in einem [Berührungsereignis](/de/docs/Web/API/TouchEvent) relativ zum selben Ursprung.

Die obere linke Ecke des Fensters ist immer `(0, 0)`, unabhängig vom Inhalt des Dokuments oder von eventuell vorgenommenem Scrollen. Anders ausgedrückt: Das Scrollen des Dokuments ändert die Ansichtsfensterkoordinaten einer bestimmten Position innerhalb des Dokuments.

### Seite

Das "Seiten"-Koordinatensystem gibt die Position eines Pixels relativ zur oberen linken Ecke des gesamten gerenderten [`Dokuments`](/de/docs/Web/API/Document) an.
Das bedeutet, dass ein Punkt in einem Element innerhalb des Dokuments nach dem horizontalen oder vertikalen Scrollen des Benutzers im Dokument dieselben Koordinaten hat, es sei denn, das Element wird durch Layoutänderungen verschoben.

Die [`pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`pageY`](/de/docs/Web/API/MouseEvent/pageY)-Eigenschaften von Mausereignissen geben die Position der Maus zu dem Zeitpunkt an, an dem das Ereignis generiert wurde, relativ zur oberen linken Ecke des Dokuments.
[`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)-Koordinaten in einem [Berührungsereignis](/de/docs/Web/API/TouchEvent) sind relativ zum selben Ursprung.

### Bildschirm

Schließlich kommen wir zum "Bildschirm"-Modell, bei dem der Ursprung die obere linke Ecke des Benutzerbildschirms ist.
Jeder Punkt in diesem Koordinatensystem stellt ein einzelnes logisches Pixel dar, und so werden Werte entlang jeder Achse um ganze Zahlen erhöht oder verringert.
Die Position eines bestimmten Punktes innerhalb eines Dokuments ändert sich, wenn das enthaltende Fenster zum Beispiel verschoben wird oder wenn sich die Bildschirmgeometrie des Benutzers ändert (durch Änderung der Bildschirmauflösung oder durch Hinzufügen oder Entfernen von Monitoren zu ihrem System).

Die Eigenschaften [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY) geben die Koordinaten der Position eines Mausereignisses relativ zum Ursprung des Bildschirms an.
[`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)-Koordinaten in einem [Berührungsereignis](/de/docs/Web/API/TouchEvent) sind relativ zum selben Ursprung.

## Beispiel

Schauen wir uns ein Beispiel an, das die Mauskoordinaten in einem Element protokolliert.
Immer wenn die Maus das innere Feld betritt, sich darin bewegt oder es verlässt, werden die Ereignisse verarbeitet, indem die aktuellen Mauskoordinaten in jedem der vier verfügbaren Systeme protokolliert werden.

### JavaScript

Im JavaScript-Skript setzt der Code die Ereignishandler am inneren Feld auf, indem er [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für jede der Arten [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event), [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) aufruft.
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

Die Klasse `"outer"` für das enthaltende Feld ist absichtlich zu breit, um die Effekte der Mauskoordinaten zu sehen, wenn der Inhalt gescrollt wird.
Der `"inner"`-Absatz ist der Ort, an dem Mausereignisse nachverfolgt und protokolliert werden.

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

Hier können Sie die Ergebnisse in Aktion sehen. Wenn Sie mit der Maus in und um das blaue Feld fahren, beobachten Sie, wie sich die Werte der X- und Y-Koordinaten der Maus in den verschiedenen Koordinatensystemen ändern.

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Ansichtsfenster-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms): wie ein Koordinatensystem verändert werden kann
- Koordinaten eines [`MouseEvent`](/de/docs/Web/API/MouseEvent):
  - [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY)
  - [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) und [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY)
  - [`MouseEvent.pageX`](/de/docs/Web/API/MouseEvent/pageX) und [`MouseEvent.pageY`](/de/docs/Web/API/MouseEvent/pageY)
  - [`MouseEvent.screenX`](/de/docs/Web/API/MouseEvent/screenX) und [`MouseEvent.screenY`](/de/docs/Web/API/MouseEvent/screenY)

- Koordinaten eines [`Touch`](/de/docs/Web/API/Touch):
  - [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)
  - [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)
  - [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)
