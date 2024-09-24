---
title: Koordinatensysteme
slug: Web/CSS/CSSOM_view/Coordinate_systems
l10n:
  sourceCommit: 6ae8ff64d2c8d312be49c76dfbcc4e5c7a550b45
---

{{CSSRef}}

Beim Festlegen der Position eines Pixels in einem Grafik-Kontext (ähnlich wie bei der Bestimmung von Koordinatensystemen in der [Algebra](https://en.wikipedia.org/wiki/Algebra)) wird seine Position relativ zu einem festen Punkt im Kontext definiert. Dieser feste Punkt wird als [Ursprung](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) bezeichnet. Die Position wird als Anzahl der Pixelversätze vom Ursprung entlang jeder Dimension des Kontexts angegeben.

Dieser Leitfaden beschreibt die standardmäßigen Koordinatensysteme, die vom CSS-Objektmodell verwendet werden. Diese unterscheiden sich im Allgemeinen nur hinsichtlich der Position ihres Ursprungs.

## Dimensionen

In den von Webtechnologien verwendeten Koordinatensystemen sieht die Konvention vor, dass der horizontale Versatz als _x-Koordinate_ bezeichnet wird, wobei ein negativer Wert eine Position links vom Ursprung und ein positiver Wert rechts vom Ursprung angibt. Die _y-Koordinate_ gibt den vertikalen Versatz an, wobei ein negativer Wert oberhalb des Ursprungs und ein positiver Wert unterhalb des Ursprungs liegt.

Im Web ist der Standardursprung die _oberste_ linke Ecke eines gegebenen Kontexts (mit positiven y-Koordinatenwerten unterhalb des Ursprungs). Beachten Sie, dass dies im Gegensatz zu den meisten mathematischen Modellen steht, bei denen der Ursprung in der _unteren_ linken Ecke liegt, mit positiven y-Koordinatenwerten oberhalb des Ursprungs.

Bei der Verwendung der dritten Dimension zur Schichtung von Objekten von vorne nach hinten verwenden wir die z-Achse. Die z-Achse verläuft vom Betrachter zur Oberfläche des Bildschirms. Das CSS-Attribut z-index beeinflusst, wo sich positionierte Elemente auf dieser Achse befinden, wodurch der Effekt entsteht, sich vom Betrachter weg oder auf ihn zu zu bewegen.

> [!NOTE]
> Es ist tatsächlich möglich, die Definitionen und Orientierungen dieser Koordinatensysteme mithilfe von CSS-Eigenschaften wie {{cssxref("transform")}} zu ändern. Wir werden jedoch vorerst nur über das Standardkoordinatensystem sprechen.

## Standard CSSOM-Koordinatensysteme

Das CSS-Objektmodell verwendet vier standardmäßige Koordinatensysteme.
Um die Hauptsysteme zu veranschaulichen, zeigt das folgende Diagramm einen Monitor mit einem Browserfenster, das Inhalte enthält, die außerhalb des Ansichtsfensters gescrollt wurden.
Seiteninhalte, die außerhalb des Ansichtsfensters gescrollt wurden, werden halbtransparent über dem Browserfenster angezeigt, um anzuzeigen, wo der Ursprung für "Page"-Koordinaten wäre.
Die Ursprünge der Koordinatensysteme "client", "page" und "viewport" sind hervorgehoben.

![Diagramm eines Computermonitors mit einem Browserfenster, das Inhalte außerhalb des Ansichtsfensters enthält. Beschriftungen zeigen den Ursprung für Page-, Screen- und Viewport-Koordinaten.](css-coords.svg)

### Offset

Koordinaten, die mit dem "offset"-Modell angegeben werden, verwenden die obere linke Ecke des betrachteten Elements oder des Elements, auf dem ein Ereignis stattgefunden hat.

Wenn beispielsweise ein {{domxref("MouseEvent", "Mausereignis", "", 1)}} auftritt, werden die Position der Maus, wie sie in den Eigenschaften {{domxref("MouseEvent.offsetX", "offsetX")}} und {{domxref("MouseEvent.offsetY", "offsetY")}} des Ereignisses angegeben ist, relativ zur oberen linken Ecke des Knotens angegeben, an den das Ereignis übermittelt wurde. Der Ursprung ist durch `padding-edge` eingerückt, was die Kante zwischen dem Padding-Bereich und dem Randbereich darstellt.

### Viewport

Das "viewport"- (oder "client"-) Koordinatensystem verwendet als Ursprung die obere linke Ecke des Viewports oder des Browsing-Kontextes, in dem das Ereignis aufgetreten ist. Dies ist der gesamte Anzeigebereich, in dem das Dokument präsentiert wird.

Auf einem Desktop-Computer geben beispielsweise die Eigenschaften {{domxref("MouseEvent.clientX")}} und {{domxref("MouseEvent.clientY")}} die Position des Mauszeigers an, als das Ereignis auftrat, relativ zur oberen linken Ecke des {{domxref("window")}}.
Bei der Verwendung eines Stifts oder Zeigers sind die Koordinaten {{domxref("Touch.clientX")}} und {{domxref("Touch.clientY")}} in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) relativ zum selben Ursprung.

Die obere linke Ecke des Fensters ist immer (0, 0), unabhängig vom Inhalt des Dokuments oder von jeglichem Scrollen, das möglicherweise durchgeführt wurde. Mit anderen Worten, das Scrollen im Dokument ändert die Viewport-Koordinaten einer gegebenen Position innerhalb des Dokuments.

### Page

Das "page"-Koordinatensystem gibt die Position eines Pixels relativ zur oberen linken Ecke des gesamten gerenderten {{domxref("Document")}} an.
Das bedeutet, dass ein Punkt in einem Element innerhalb des Dokuments dieselben Koordinaten hat, nachdem der Benutzer horizontal oder vertikal im Dokument gescrollt hat, es sei denn, das Element bewegt sich durch Layout-Änderungen.

Die Eigenschaften {{domxref("MouseEvent.pageX", "pageX")}} und {{domxref("MouseEvent.pageY", "pageY")}} der Mausereignisse geben die Position der Maus zum Zeitpunkt der Ereignisgenerierung an, relativ zur oberen linken Ecke des Dokuments.
{{domxref("Touch.pageX")}} und {{domxref("Touch.pageY")}} Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum selben Ursprung.

### Screen

Abschließend kommen wir zum "screen"-Modell, bei dem der Ursprung die obere linke Ecke des Bildschirms des Benutzers ist.
Jeder Punkt in diesem Koordinatensystem stellt ein einzelnes logisches Pixel dar, und daher erhöhen und verringern sich die Werte in ganzen Zahlen entlang jeder Achse.
Die Position eines gegebenen Punkts innerhalb eines Dokuments ändert sich, wenn das enthaltene Fenster beispielsweise verschoben wird oder wenn sich die Bildschirmgeometrie des Benutzers ändert (durch Ändern der Bildschirmauflösung oder durch Hinzufügen oder Entfernen von Monitoren zu ihrem System).

Die Eigenschaften {{domxref("MouseEvent.screenX")}} und {{domxref("MouseEvent.screenY")}} geben die Koordinaten der Position eines Mausereignisses relativ zum Ursprung des Bildschirms an.
{{domxref("Touch.screenX")}} und {{domxref("Touch.screenY")}} Koordinaten in einem [Touch-Ereignis](/de/docs/Web/API/TouchEvent) sind relativ zum selben Ursprung.

## Beispiel

Schauen wir uns ein Beispiel an, das Mauskoordinaten in einem Element protokolliert.
Wann immer die Maus das innere Feld betritt, sich darin bewegt oder es verlässt, werden die Ereignisse behandelt, indem die aktuellen Mauskoordinaten in jedem der vier verfügbaren Systeme protokolliert werden.

### JavaScript

Im JavaScript richtet der Code die Ereignishandler auf dem inneren Feld ein, indem {{domxref("EventTarget.addEventListener", "addEventListener()")}} für jeden der Typen {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mousemove_event", "mousemove")}} und {{domxref("Element/mouseleave_event", "mouseleave")}} aufgerufen wird.
Für jedes der Ereignisse rufen wir die Funktion `setCoords()` auf, die den inneren Text des `<p>`-Elements mit den Koordinaten für jedes System festlegt.

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

Die Klasse `"outer"` für das umgebende Kästchen ist absichtlich zu breit, um die Effekte der Mauskoordinaten zu sehen, wenn der Inhalt gescrollt wird.
Der `"inner"` Abschnitt ist der Bereich, in dem Mausereignisse verfolgt und protokolliert werden.

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

- [Verwenden von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms): wie man ein Koordinatensystem verändert
- Koordinaten eines {{domxref("MouseEvent")}}:

  - {{domxref("MouseEvent.offsetX")}} und {{domxref("MouseEvent.offsetY")}}
  - {{domxref("MouseEvent.clientX")}} und {{domxref("MouseEvent.clientY")}}
  - {{domxref("MouseEvent.pageX")}} und {{domxref("MouseEvent.pageY")}}
  - {{domxref("MouseEvent.screenX")}} und {{domxref("MouseEvent.screenY")}}

- Koordinaten eines {{domxref("Touch")}}:

  - {{domxref("Touch.clientX")}} und {{domxref("Touch.clientY")}}
  - {{domxref("Touch.pageX")}} und {{domxref("Touch.pageY")}}
  - {{domxref("Touch.screenX")}} und {{domxref("Touch.screenY")}}
